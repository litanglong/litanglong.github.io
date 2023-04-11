define([ 'language/order', 'language/common', 'language/errMsg', 'language/rspdata', 'language/v1r2_order' ], function(orderI18order, i18common, i18err, i18rspdata, orderI18v1r2) {
    'use strict';
    var service;
    service = function($q, storage, camel, $rootScope, mask, $filter, utilService, csbMessage, publicService, validator, tiModal, $timeout, $injector) {
        var customerOrderServcieLocal, i18v1r2, getErrorCode, isTraceIdShow, formatErrorMsg, formatMessageTitle, isAllowLog, subUrl, adapoterBundleFlag, that;
        0;
        i18v1r2 = orderI18v1r2;
        (customerOrderServcieLocal = this).downloadFile = function(url) {
            try {
                if (fetch) {
                    mask.show();
                    fetch(url).then(function(response) {
                        var fileName, contentType;
                        mask.hide();
                        if (200 != response.status) response.json().then(function(rsp) {
                            customerOrderServcieLocal.APIExceptionCommonHandle(rsp);
                        }); else {
                            fileName = response.headers.get('content-disposition').split(';')[1].split('=')[1];
                            contentType = response.headers.get('Content-Type');
                            response.arrayBuffer().then(function(res) {
                                var a;
                                csbMessage.showSuccess(customerOrderServcieLocal.getI18FromKey('download_success_tip'));
                                res = new Blob([ res ], {
                                    'type': contentType || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                });
                                res = URL.createObjectURL(res);
                                a = document.createElement('a');
                                document.body.appendChild(a);
                                a.style = 'display: none';
                                a.href = res;
                                fileName && (a.download = fileName);
                                a.click();
                                document.body.removeChild(a);
                            });
                        }
                    });
                } else window.open(url).opener = null;
            } catch (err) {
                window.open(url).opener = null;
            }
        };
        this.getEnvUrl = function(urlKey) {
            var domain;
            urlKey = ORDER_URL_CONFIG[urlKey];
            domain = 'huaweicloud';
            0 <= window.location.host.indexOf('ulanqab') && (domain = 'ulanqab.huawei');
            if (!urlKey) return '';
            return utilService.i18nReplace(urlKey, {
                'DOMAIN': domain
            });
        };
        this.getUserIP = function(onNewIP) {
            var myPeerConnection, pc, noop, localIPs, ipRegex;
            try {
                if (!(myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection)) return;
                pc = new myPeerConnection({
                    'iceServers': []
                });
                noop = function() {};
                localIPs = {};
                ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
                pc.createDataChannel('');
                pc.createOffer().then(function(sdp) {
                    sdp.sdp.split('\n').forEach(function(line) {
                        if (line.indexOf('candidate') < 0) return;
                        line.match(ipRegex).forEach(function(ip) {
                            localIPs[ip] || onNewIP(ip);
                            localIPs[ip] = !0;
                        });
                    });
                    pc.setLocalDescription(sdp, noop, noop);
                }).catch(function() {});
                pc.onicecandidate = function(ice) {
                    if (!(ice && ice.candidate && ice.candidate.candidate && ice.candidate.candidate.match(ipRegex))) return;
                    ice.candidate.candidate.match(ipRegex).forEach(function(ip) {
                        localIPs[ip] || onNewIP(ip);
                        localIPs[ip] = !0;
                    });
                };
            } catch (e) {
                onNewIP('');
            }
        };
        this.getOrderCommonConfigDRM = function(key) {
            var configval = {};
            if (systemConfig) try {
                systemConfig.orderCommonConfigDRM && (configval = JSON.parse(systemConfig.orderCommonConfigDRM));
            } catch (e) {}
            return configval[key];
        };
        this.getNotificationMessage = function(currentUrl) {
            var getCurrentUrlValue, notificationMessageData;
            getCurrentUrlValue = '';
            if (getCurrentUrlValue = (notificationMessageData = this.getOrderCommonConfigDRM('notification_message')) && notificationMessageData[currentUrl] ? 'zh-cn' === window.urlParams.lang ? notificationMessageData[currentUrl]['zh-cn'] : notificationMessageData[currentUrl]['en-us'] : getCurrentUrlValue) return getCurrentUrlValue;
        };
        getErrorCode = function(rsp) {
            var retCodeKeys, retCode, i;
            if (!rsp) return '';
            retCodeKeys = [ 'error_code', 'retCode', 'resultCode' ];
            for (i = 0; i < retCodeKeys.length; i++) {
                if (rsp.responseJSON && rsp.responseJSON[retCodeKeys[i]]) {
                    retCode = rsp.responseJSON[retCodeKeys[i]];
                    break;
                }
                if (rsp[retCodeKeys[i]]) {
                    retCode = rsp[retCodeKeys[i]];
                    break;
                }
            }
            return retCode;
        };
        isTraceIdShow = function(rsp) {
            rsp = getErrorCode(rsp);
            if (!rsp) return !0;
            if (-1 < $.inArray(rsp, NEED_TRACEID_ERROR_CODES) || !i18err[rsp]) return !0;
            return !1;
        };
        formatErrorMsg = function(msg, shortTracheId) {
            var errorCode = '';
            orderI18order.error_code && (errorCode = orderI18order.error_code);
            if (shortTracheId && msg) return msg + ' [' + errorCode + shortTracheId + ']';
            return msg;
        };
        formatMessageTitle = function(label, shortTracheId) {
            var date;
            label = label || 'cbc_api_exception_';
            date = $filter('csbFormatDate')(new Date(), 'yyyyMMhhmmss');
            return label + $rootScope.domainId + '_' + date + '_' + shortTracheId;
        };
        this.APIExceptionCommonHandle = function(rsp, suppressError, isOperate) {
            var traceId, shortTraceId, errMsg, eMsgObj, message, error;
            shortTraceId = (traceId = (traceId = (rsp = rsp || {}).getResponseHeader && rsp.getResponseHeader('wise_traceid')) || this.getSafeRandomNum().toString(36).slice(-8)) && 8 < traceId.length ? traceId.slice(-8) : traceId;
            errMsg = rsp.defaultMsg || orderI18order.msgNotice2;
            rsp.statusText && 'timeout' === rsp.statusText && (errMsg = this.getI18FromKey('exception_timeout'));
            if (403 === rsp.status && rsp && rsp.responseJSON && (rsp.responseJSON.forbidden && 403 == rsp.responseJSON.forbidden.code || rsp.responseJSON.error_code && 'CBC.0155' == rsp.responseJSON.error_code)) {
                errMsg = i18err.not_permissions;
                rsp.responseJSON.error_msg ? errMsg += rsp.responseJSON.error_msg : rsp.responseJSON.forbidden && rsp.responseJSON.forbidden.message && (errMsg += rsp.responseJSON.forbidden.message);
            } else if (403 === rsp.status && rsp && rsp.responseJSON) {
                errMsg = i18err.not_permissions;
                if (rsp.responseJSON.error && rsp.responseJSON.error.message) errMsg += rsp.responseJSON.error.message; else if (rsp.responseJSON.error_msg) {
                    eMsgObj = '';
                    try {
                        eMsgObj = $.parseJSON(rsp.responseJSON.error_msg);
                    } catch (e) {
                        eMsgObj = '';
                    }
                    'object' == typeof eMsgObj && eMsgObj instanceof Array && eMsgObj[0] && eMsgObj[0].msgContent ? errMsg = eMsgObj[0].msgContent : errMsg += rsp.responseJSON.error_msg;
                }
            } else {
                eMsgObj = getErrorCode(rsp);
                rsp.defaultMsg || (rsp.defaultMsg = errMsg);
                eMsgObj && (errMsg = validator.getErrMsg(eMsgObj, rsp.defaultMsg, isOperate));
            }
            isTraceIdShow(rsp) && shortTraceId && (errMsg = formatErrorMsg(errMsg, shortTraceId));
            suppressError || (rsp.showModal ? csbMessage.oneBtnMsg({
                'type': 'error',
                'message': errMsg
            }) : csbMessage.doException(errMsg));
            try {
                message = formatMessageTitle('cbc_api_exception_', shortTraceId);
                error = rsp.error() || rsp;
                PMP && PMP.RavenSetTag('wise_traceid', traceId);
                PMP && PMP.RavenSendException(message, JSON.stringify(error), 'error');
            } catch (err) {}
        };
        this.getDataErrMsg = function(data, defaultMsg, isOperate) {
            var errMsg, retCode, message;
            errMsg = defaultMsg || orderI18order.msgNotice2;
            (retCode = getErrorCode(data)) && (errMsg = validator.getErrMsg(retCode, defaultMsg, isOperate));
            retCode = this.getSafeRandomNum().toString(36).slice(-8);
            isTraceIdShow(data) && retCode && (errMsg = formatErrorMsg(errMsg, retCode));
            try {
                message = formatMessageTitle('cbc_api_exception_', retCode);
                PMP.RavenSendException(message, JSON.stringify(data), 'error');
            } catch (err) {}
            return errMsg;
        };
        isAllowLog = function(level) {
            var ALLOW_LEVEL;
            if (!level) return !0;
            ALLOW_LEVEL = LOG_LEVEL;
            ALLOW_LEVEL = $.inArray(ALLOW_LEVEL, LOG_LEVELS);
            return $.inArray(level, LOG_LEVELS) <= ALLOW_LEVEL;
        };
        this.logging = function(msg, level, category, data) {
            if (!isAllowLog(level) || !msg) return;
            try {
                Raven && Raven.captureBreadcrumb({
                    'message': msg,
                    'category': 'order.log.' + category,
                    'data': data || null
                });
            } catch (e) {}
        };
        this.getI18FromOptKey = function(key, i18) {
            var tokens, i18obj, i;
            if (!key) return '';
            (i18 = i18) || (i18 = orderI18order);
            tokens = key.split('.');
            i18obj = i18;
            for (i = 0; i < tokens.length; i++) {
                if (!i18obj[tokens[i]]) return '';
                i18obj = i18obj[tokens[i]];
            }
            return i18obj;
        };
        this.getI18FromKey = function(key, i18) {
            i18 = i18 || orderI18order;
            if (key && i18[key]) return i18[key];
            try {
                key.toString();
                i18[key].toString();
            } catch (e) {
                customerOrderServcieLocal.getOrderCommonConfigDRM('SHOW_DEBUG_LOG');
            }
            return '';
        };
        $rootScope.getI18FromKey = function(key, i18) {
            return customerOrderServcieLocal.getI18FromKey(key, i18);
        };
        function isHardWareProductFamily(productFamily) {
            return -1 < $.inArray(productFamily, ORDER_HARD_WARE_FAMILIES);
        }
        this.isHardWareProductFamily = isHardWareProductFamily;
        this.encoderForTiTip = function(content) {
            return content;
        };
        $rootScope.encoderForTiTip = function(content) {
            return customerOrderServcieLocal.encoderForTiTip(content);
        };
        this.isNotNull = function(data) {
            if (null == data) {
                var errStack = '';
                try {
                    data.toString();
                } catch (e) {
                    errStack = e.stack.toString();
                }
                this.commitLOG(errStack, 'error', 'not_null_error_');
                return !1;
            }
            return !0;
        };
        this.getProp = function(data, properties, strange) {
            var cur, subs, i;
            if (!data || !properties) return strange;
            cur = data;
            subs = properties.split('.');
            for (i = 0; i < subs.length; i++) {
                if (!cur[subs[i]]) return strange;
                cur = cur[subs[i]];
            }
            return cur;
        };
        this.commitLOG = function(msg, level, label, shortTraceId) {
            var message;
            shortTraceId = shortTraceId || this.getSafeRandomNum().toString(36).slice(-8);
            level = level || 'error';
            try {
                $filter('csbFormatDate')(new Date(), 'yyyyMMhhmmss');
                message = formatMessageTitle(label, shortTraceId);
                PMP && PMP.RavenSendException(msg, message, level);
            } catch (e) {}
        };
        subUrl = function(url) {
            try {
                url && 0 < url.lastIndexOf('?') && (url = url.substring(0, url.lastIndexOf('?')));
            } catch (e) {}
            return url;
        };
        this.logRequestParam = function(setting, category) {
            var data, headers, ignoredHeaders, i, last2character, url;
            try {
                headers = setting.headers;
                ignoredHeaders = [ 'cftk', 'cf2-cftk', 'Cookie' ];
                for (i = 0; i < ignoredHeaders.length; i++) if (headers && headers[ignoredHeaders[i]]) {
                    last2character = headers[ignoredHeaders[i]].slice(-2);
                    headers[ignoredHeaders[i]] = 'xxxxxx' + last2character;
                }
                url = subUrl(setting.url);
                data = {
                    'type': setting.type,
                    'url': url,
                    'headers': JSON.stringify(headers),
                    'param': 'string' == typeof setting.data ? setting.data : JSON.stringify(setting.data)
                };
                customerOrderServcieLocal.logging('request:' + data.url, 'info', category, data);
            } catch (e) {}
        };
        this.logResponseData = function(xhr, category, url) {
            var responseHeaders, data, rsp, shortUrl;
            try {
                responseHeaders = {
                    'date': xhr.getResponseHeader('date'),
                    'status': status,
                    'wise_traceid': xhr.getResponseHeader('wise_traceid'),
                    'wise_spanid': xhr.getResponseHeader('wise_spanid')
                };
                (data = xhr.responseText).length > MAX_RECORDED_LENGTH && (data = data.substring(0, MAX_RECORDED_LENGTH));
                rsp = {
                    'url': url,
                    'status': xhr.status,
                    'data': data,
                    'responseHeaders': JSON.stringify(responseHeaders)
                };
                shortUrl = subUrl(url);
                customerOrderServcieLocal.logging('response:' + shortUrl, 'info', category, rsp);
            } catch (e) {}
        };
        this.getAPIExceptionErrMsg = function(rsp, defaultMsg, isOperate) {
            var errMsg, message;
            errMsg = defaultMsg || orderI18order.msgNotice2;
            rsp.responseJSON && rsp.responseJSON.error_code ? errMsg = validator.getErrMsg(rsp.responseJSON.error_code, defaultMsg, isOperate) : rsp.responseJSON && rsp.responseJSON.retCode ? errMsg = validator.getErrMsg(rsp.responseJSON.retCode, defaultMsg, isOperate) : rsp.responseJSON && rsp.responseJSON.resultCode && (errMsg = validator.getErrMsg(rsp.responseJSON.resultCode, defaultMsg, isOperate));
            try {
                message = formatMessageTitle('cbc_api_exception_', rsp.getResponseHeader('wise_traceid'));
                PMP && rsp.getResponseHeader('wise_traceid') && PMP.RavenSetTag('wise_traceid', rsp.getResponseHeader('wise_traceid'));
                PMP.RavenSendException(JSON.stringify(message, rsp.error()), 'error');
            } catch (err) {}
            return errMsg;
        };
        this.checkUrlInWhiteList = function(url, whiteList) {
            var result;
            if (!url) return '';
            if (result = (result = url.match(/((http|https):\/\/)?(?<domainName>([\w\-\.]+))/)) && result.groups && result.groups.domainName) {
                try {
                    result = result.split('.').slice(-2).join('.');
                } catch (e) {}
                return -1 < $.inArray(result, whiteList) ? url : '';
            }
            return '';
        };
        this.getSafeRandomNum = function() {
            return window.crypto ? window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 : window.msCrypto.getRandomValues(new Uint32Array(1))[0] / 4294967296;
        };
        this.subscribeEH = function(orderId, params, headers, enterpriseProjectId) {
            var url;
            headers = headers || {};
            url = '/rest/cbc/csborderinterfaceadapterservice/v1/usercenter/demandpackage/{orderid}';
            customerOrderServcieLocal.getOrderCommonConfigDRM('SUBSCRIBE_V2_USE_OLD') && (url = '/rest/v2/orders/{orderid}');
            (url = camel.post({
                'url': {
                    's': window.appWebPath + kongs_name + url,
                    'o': {
                        'orderid': orderId
                    }
                },
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.each(headers, function(value, key) {
                        key && value && request.setRequestHeader(key, value);
                    });
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            })).then(function(data) {
                var error_code;
                error_code = data.retCode;
                if (!data || RSP_SUCCESS != data.retCode) {
                    data = validator.getErrMsg(error_code, !1, !0);
                    csbMessage.oneBtnMsg({
                        'type': 'error',
                        'message': data
                    });
                }
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp, !1, !0);
            });
            return url;
        };
        this.subscriptionRenew = function(params, enterpriseProjectId) {
            return camel.post({
                'url': window.appWebPath + '/rest/orderlifecycle/v1/ordercore/orders',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    var calllink, func;
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    calllink = i18v1r2.calllink_changePeriod;
                    params && params.orderType == ORDERTYPE_UNSUBSCRIBR ? calllink = i18v1r2.calllink_unsubscribr : params && params.orderType == ORDERTYPE_RENEW && (calllink = i18v1r2.calllink_reneworder);
                    request.setRequestHeader('x-trace-business', encodeURIComponent(calllink + '@CSB'));
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.subscriptionBatchRenew = function(params, enterpriseProjectId) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/orders/batchrenew',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('x-trace-business', encodeURIComponent(i18v1r2.calllink_reneworder + '@CSB'));
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.batchCancelRenewal = function(params, projectid) {
            params.customerId || (params.customerId = $rootScope.domainId);
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/disableRenew',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    customerOrderServcieLocal.logRequestParam(setting, 'expireMode');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'expireMode', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.batchSetManualRenewal = function(params, projectid) {
            params.customerId || (params.customerId = $rootScope.domainId);
            return camel.deleter({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/disableRenew',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    customerOrderServcieLocal.logRequestParam(setting, 'expireMode');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'expireMode', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.subscriptionBatchRenewV2 = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v2/orders/batchrenew',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('x-trace-business', encodeURIComponent(i18v1r2.calllink_reneworder + '@CSB'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.subscriptionBatchRenewable = function(params) {
            var respTime, result;
            respTime = '';
            return (result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/batch',
                'params': params,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                result.$$state.value.respTime = respTime;
                result.$$state.value && result.$$state.value.subscriptions && adapoterBundleFlag(result.$$state.value.subscriptions);
                return result;
            });
        };
        this.cancel = function(params, projectid) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            params.triggerAction = 3;
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/order/status',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('x-trace-business', encodeURIComponent(i18v1r2.calllink_cancelorder + '@CSB'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'cancel');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'cancel', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.queryOrderDetail = function(orderId, subaccountId, hideMask, projectid) {
            hideMask = {
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/ordercore/v1/orders/{orderId}',
                    'o': {
                        'orderId': orderId
                    }
                },
                'timeout': 6e4,
                'params': {
                    'customerId': subaccountId || $rootScope.domainId
                },
                'mask': !hideMask,
                'beforeSend': function(request) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            if (subaccountId) {
                hideMask.url = {
                    's': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/ordercore/v1/orders/{orderId}',
                    'o': {
                        'orderId': orderId
                    }
                };
                hideMask.beforeSend = function(request) {
                    request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.get(hideMask);
        };
        this.queryOrderDetailCustomization = function(params, subaccountId, hidemask, enterprisePorjectID) {
            params = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/csborderinterfaceadapterservice/usercenter/v1/orderDetail',
                'params': params,
                'timeout': 6e4,
                'mask': !hidemask
            };
            subaccountId && (params.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/csborderinterfaceadapterservice/usercenter/v1/orderDetail');
            params.beforeSend = function(request) {
                _.isNull(enterprisePorjectID) || _.isUndefined(enterprisePorjectID) || request.setRequestHeader('X-Enterprise-Project-Ids', enterprisePorjectID);
                subaccountId && request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            return camel.get(params);
        };
        this.queryPPUOrderDetail = function(params, subaccountId, hidemask, enterprisePorjectID) {
            params = {
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/cbc/cbcorderondemandservice/usercenter/v1/orderDetail',
                    'o': {
                        'orderId': params.orderId
                    }
                },
                'params': params,
                'timeout': 6e4,
                'mask': !hidemask
            };
            params.beforeSend = function(request) {
                _.isNull(enterprisePorjectID) || _.isUndefined(enterprisePorjectID) || request.setRequestHeader('X-Enterprise-Project-Ids', enterprisePorjectID);
                subaccountId && request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            return camel.get(params);
        };
        this.subscriptionRemark = function(params) {
            return camel.put({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/modify/remark/{subscriptionId}',
                    'o': {
                        'subscriptionId': params.subscriptionId
                    }
                },
                'timeout': 6e4,
                'params': params.remark,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryOrderListCustomization = function(params, noMask, subaccount, enterpriseProjectId) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            params.sort = '-createTime';
            (customerId = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/csborderinterfaceadapterservice/usercenter/v1/orderlist',
                'params': params,
                'timeout': 6e4,
                'mask': !noMask
            }).beforeSend = function(request) {
                _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/csborderinterfaceadapterservice/usercenter/v1/orderlist';
                customerId.beforeSend = function(request) {
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.get(customerId);
        };
        this.queryOrderListNew = function(params, noMask, subaccount, enterpriseProjectId) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customer_id = customerId : params = {
                'customer_id': customerId
            };
            params.sort = '-createTime';
            (customerId = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcorderplatformservice/v1/orders/order-list',
                'params': params,
                'timeout': 6e4,
                'mask': !noMask
            }).beforeSend = function(request) {
                _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbcorderplatformservice/v1/orders/order-list';
                customerId.beforeSend = function(request) {
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.post(customerId);
        };
        this.queryPPUOrderList = function(params, noMask, subaccount, enterpriseProjectId) {
            var customerId;
            customerId = $rootScope.domainId;
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            subaccount && (params.enterpriseSubCustomerId = subaccount);
            params.sort = '-createTime';
            (customerId = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcorderondemandservice/v1/orders',
                'params': params,
                'timeout': 6e4,
                'mask': !noMask
            }).beforeSend = function(request) {
                _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            return camel.get(customerId);
        };
        this.queryOrderList = function(params, noMask, subaccount, enterpriseProjectId) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            params.sort = '-createTime';
            (customerId = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/orders/query-order-list',
                'params': params,
                'timeout': 6e4,
                'mask': !noMask
            }).beforeSend = function(request) {
                _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/orders/query-order-list';
                customerId.beforeSend = function(request) {
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.get(customerId);
        };
        this.queryOrderListCreateTimeInfo = function(params, subaccount, enterpriseProjectId) {
            params = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/orders/order-time-info',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            subaccount && (params.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbcordercoreservice/v1/orders/order-time-info');
            params.beforeSend = function(request) {
                _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                subaccount && request.setRequestHeader('X-Sub-Cust-Id', subaccount);
            };
            return camel.get(params);
        };
        this.queryOrderLineItemList = function(params, subaccount) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            customerId = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/query-orderlineitem-list',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/query-orderlineitem-list';
                customerId.beforeSend = function(request) {
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.get(customerId);
        };
        this.queryHistoryOrderList = function(params, subaccount) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            params.sort = '-createTime';
            customerId = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/history/query-order-list',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/history/query-order-list';
                customerId.beforeSend = function(request) {
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            }
            return camel.get(customerId);
        };
        this.queryHistoryOrderLineItemList = function(params, subaccount) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            customerId = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/history/query-orderlineitem-list',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/history/query-orderlineitem-list';
                customerId.beforeSend = function(request) {
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
                customerId.mask = !1;
            }
            return camel.get(customerId);
        };
        this.queryOrderLineItem = function(orderlineitemId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/ordercore/v1/orderlineitems/{orderLineItemId}',
                    'o': {
                        'orderlineitemId': orderlineitemId
                    }
                },
                'params': {
                    'customerId': $rootScope.domainId
                },
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        adapoterBundleFlag = function(subscriptions) {
            for (var i = 0; i < subscriptions.length; i++) {
                subscriptions[i] && subscriptions[i].productInstance && subscriptions[i].bundleFlag && !subscriptions[i].productInstance.bundleFlag && (subscriptions[i].productInstance.bundleFlag = subscriptions[i].bundleFlag);
                subscriptions[i].relativeType === RELETIVE_TYPE.SUB_RESOURCE && (subscriptions[i].relativeType = RELETIVE_TYPE.BIND);
            }
        };
        this.queryOrderSubscription = function(params, projectid) {
            var respTime, result;
            projectid = projectid || params.enterPriseProjectId;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            respTime = '';
            return (result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/get-subscription-list',
                'params': params,
                'timeout': 18e4,
                'mask': !1,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    customerOrderServcieLocal.logRequestParam(setting, 'renewal');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'renewal', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                if (_.isObject(result.$$state.value)) {
                    result.$$state.value.respTime = respTime;
                    result.$$state.value && result.$$state.value.subscriptions && adapoterBundleFlag(result.$$state.value.subscriptions);
                }
                return result;
            });
        };
        this.queryOrderSubscription2 = function(params, hideMask) {
            var respTime, result;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            respTime = '';
            return (result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/get-subscription-list',
                'params': params,
                'timeout': 18e4,
                'mask': !hideMask,
                'beforeSend': function(request, setting) {
                    _.isNull(params.enterPriseProjectId) || _.isUndefined(params.enterPriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterPriseProjectId);
                    customerOrderServcieLocal.logRequestParam(setting, 'renewal');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'renewal', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                result.$$state.value.respTime = respTime;
                result.$$state.value && result.$$state.value.subscriptions && adapoterBundleFlag(result.$$state.value.subscriptions);
                return result;
            });
        };
        this.queryRenewSubscriptions = function(params, hideMask) {
            var respTime, result;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            respTime = '';
            return (result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscription/query-renew-subscriptions',
                'params': params,
                'timeout': 18e4,
                'mask': !hideMask,
                'beforeSend': function(request, setting) {
                    _.isNull(params.enterpriseProjectId) || _.isUndefined(params.enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterpriseProjectId);
                    customerOrderServcieLocal.logRequestParam(setting, 'renewal');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'renewal', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                result.$$state.value.respTime = respTime;
                return result;
            });
        };
        this.queryRenewalActions = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscription/business-logic',
                'params': params,
                'timeout': 18e4,
                'mask': !1,
                'beforeSend': function(request, setting) {
                    _.isNull(params.enterPriseProjectId) || _.isUndefined(params.enterPriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterPriseProjectId);
                    customerOrderServcieLocal.logRequestParam(setting, 'renewal');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'renewal', this.url);
                        func(xhr, status);
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp);
                return Promise.resolve({});
            });
        };
        this.queryretreatTimes = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            var domainId = $rootScope.domainId;
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/csb/csbordercoreservice/v1/unsubscribetimes/{domainId}',
                    'o': {
                        'domainId': domainId
                    }
                },
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryretreatSubscription = function(params) {
            var respTime, result;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            respTime = '';
            return (result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/cancelmgr',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(params.enterpriseProjectId) || _.isUndefined(params.enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterpriseProjectId);
                    customerOrderServcieLocal.logRequestParam(setting, 'retreatMgr');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'retreatMgr', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                _.isObject(result.$$state.value) && (result.$$state.value.respTime = respTime);
                return result;
            });
        };
        this.queryretreatHistoryList = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordercoreservice/v1/orders/unsubscriberecords',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.querySubscriptionByBaseCustomerOrderIds = function(params) {
            var result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcsubscriptionservice/v1/subscription/detail',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
            return result.then(function() {
                result.$$state.value && result.$$state.value.result && adapoterBundleFlag(result.$$state.value.result);
                return result;
            });
        };
        this.queryOrderSubscriptionDetail = function(subscriptionId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscription/query/{subscriptionId}',
                    'o': {
                        'subscriptionId': subscriptionId
                    }
                },
                'params': {
                    'customerId': $rootScope.domainId
                },
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.querywaitingRenewSubscriptions = function(params, noMask) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/waitingrenew',
                'params': params,
                'timeout': 6e4,
                'mask': !noMask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getSubscribeDiscounts = function(param) {
            $rootScope.order_trade_infos && (param.tradeInfos = $rootScope.order_trade_infos);
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbbillingratingservice/v2/inquiry/period_resource_subscribe',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryPriceByProducts = function(params, mask) {
            var api;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            $rootScope.order_trade_infos && (params.tradeInfos = $rootScope.order_trade_infos);
            api = window.appWebPath + kongs_name + '/rest/cbc/csbbillingratingservice/v2/inquiryevent';
            this.getOrderCommonConfigDRM('inquiryevent-use-old') && (api = window.appWebPath + kongs_name + '/rest/billing/ratingservice/v1/inquiryevent');
            return camel.post({
                'url': {
                    's': api,
                    'o': params
                },
                'params': params,
                'timeout': 6e4,
                'mask': mask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }).then(function(data) {
                if (data.error_code) {
                    data.retCode = data.error_code;
                    data.error_code == RETCODE_SUCCESS_STR && (data.retCode = RSP_SUCCESS);
                }
                return data;
            });
        };
        this.getPkgProductInfo = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csbpromotioncooperationservice/external/v1/exptest/pkg',
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryRenewPriceByProducts = function(params) {
            var url;
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            $rootScope.order_trade_infos && (params.tradeInfos = $rootScope.order_trade_infos);
            url = window.appWebPath + kongs_name + '/rest/cbc/csbbillingratingservice/v2/inquiryrenewevent';
            this.getOrderCommonConfigDRM('inquiryrenewevent-use-old') && (url = window.appWebPath + kongs_name + '/rest/billing/ratingservice/v1/inquiryrenewevent');
            return camel.post({
                'url': {
                    's': url,
                    'o': params
                },
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'inquiry');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'inquiry', this.url);
                        func(xhr, status);
                    };
                }
            }).then(function(data) {
                if (data.error_code) {
                    data.retCode = data.error_code;
                    data.error_code == RETCODE_SUCCESS_STR && (data.retCode = RSP_SUCCESS);
                }
                return data;
            });
        };
        this.queryOrderCount = function(params, subaccount, enterpriseProjectIds) {
            var customerId;
            customerId = $rootScope.domainId;
            subaccount && (customerId = subaccount);
            params ? params.customerId = customerId : params = {
                'customerId': customerId
            };
            customerId = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/orders.count',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    enterpriseProjectIds && 0 < enterpriseProjectIds.length && request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectIds);
                }
            };
            if (subaccount) {
                customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/orders.count';
                customerId.beforeSend = function(request) {
                    _.isNull(params.enterprisePorjectID) || _.isUndefined(params.enterprisePorjectID) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterprisePorjectID);
                    request.setRequestHeader('X-Sub-Cust-Id', subaccount);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                };
            } else customerId.beforeSend = function(request) {
                _.isNull(params.enterprisePorjectID) || _.isUndefined(params.enterprisePorjectID) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterprisePorjectID);
                enterpriseProjectIds && 0 < enterpriseProjectIds.length && request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectIds);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            return camel.get(customerId);
        };
        this.queryOrderCountV2 = function(params, enterpriseProjectIds) {
            params = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordercoreservice/v2/orders.count',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    enterpriseProjectIds && 0 < enterpriseProjectIds.length && request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectIds);
                }
            };
            return camel.post(params).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp, !0, !0);
                return Promise.resolve({});
            });
        };
        this.queryMeasureUnitAll = function() {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/systemconf/measurement/queryMeasureUnitAll',
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }).catch(function() {
                var measureUnitList, promise;
                measureUnitList = (i18rspdata.allmeasure || {}).measureUnitList || [];
                measureUnitList = {
                    'resultCode': RSP_SUCCESS,
                    'measureUnitList': measureUnitList
                };
                promise = {};
                try {
                    Promise && (promise = Promise.resolve(measureUnitList));
                } catch (e) {}
                return promise;
            });
        };
        this.queryOrderDetailByOrderIds = function(param, isNeedCloudServiceConsoleURL) {
            isNeedCloudServiceConsoleURL && (param.isNeedCloudServiceConsoleURL = isNeedCloudServiceConsoleURL);
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/orders/orderIds',
                'timeout': 6e4,
                'params': param,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.processOrders = function(data) {
            if (!data || data.retCode != RSP_SUCCESS || !data.data || !data.data.orderInfos) return;
            return data.data;
        };
        this.processOrderLineItems = function(data) {
            var totalAmount, returnData, orderLineItems_length, i, orderLineItem;
            if (!data || data.retCode != RSP_SUCCESS || !data.data || !data.data.orderLineItems) return;
            returnData = {
                'orderLineItems': [],
                'totalAmount': totalAmount = 0
            };
            orderLineItems_length = data.data.orderLineItems.length;
            for (i = 0; i < orderLineItems_length; i++) {
                if ((orderLineItem = data.data.orderLineItems[i]).bundleFlag == PRODUCT_TYPE_BUNDLE && !orderLineItem.bundleOrderLineItemId) continue;
                returnData.orderLineItems.push(orderLineItem);
                orderLineItem.currencyAfterDiscount && (totalAmount += commons.currencyUnitConversion(orderLineItem.currencyAfterDiscount, orderLineItem.measureId));
            }
            returnData.totalAmount = totalAmount;
            return returnData;
        };
        this.createDealInfoForOrder = function(params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/orderpayment',
                'params': params,
                'timeout': 12e5,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'payment');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'payment', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.createDealInfoForOrderNew = function(params, enterpriseProjectIds) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v2/orderpayment',
                'params': params,
                'timeout': 12e5,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    enterpriseProjectIds && 0 < enterpriseProjectIds.length && request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectIds);
                    var func = setting.complete;
                    customerOrderServcieLocal.logRequestParam(setting, 'payment');
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'payment', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.queryStatusCount = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            params.bundleSubscriptionId = 0;
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/status-count',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getReturnAddressInfo = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/returnAddress',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getPostalAddressInfo = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/postal-address',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getBatchqueryreturnorders = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/batchqueryreturnorders',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.batchQueryOrderLineItems = function(params, hideMask) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/orderlineitems/query-on-demand',
                'params': params,
                'timeout': 6e4,
                'mask': !hideMask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryOrderLineInfoOnDemand = function(orderIds) {
            return this.batchQueryOrderLineItems({
                'fromQueryService': 'CBCOrderCenterWebsite',
                'pageSize': 2e4,
                'pageIndex': 1,
                'orderLineQueryCondition': {
                    'orderIds': orderIds
                },
                'orderLineProperties': [ 'orderLineItemId', 'orderId', 'serviceType', 'productSubFamily', 'productDiscountPrice' ]
            }, !0).then(function(rsp) {
                try {
                    return JSON.parse(rsp.orderLineList);
                } catch (e) {}
            });
        };
        this.getServiceDRMdata = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcorderplatformservice/v1/drm/attributes',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getOrderDeliveryInfo = function(params) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/orderDelivery/{orderid}',
                    'o': {
                        'orderid': params.orderId
                    }
                },
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getProductInstances = function(params, subaccountId, hidemask, enterprisePorjectID) {
            params = {
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/productinstances',
                'params': params,
                'timeout': 6e4,
                'mask': !hidemask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            subaccountId && (params.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/ordercoreservice/v1/productinstances');
            params.beforeSend = function(request) {
                _.isNull(enterprisePorjectID) || _.isUndefined(enterprisePorjectID) || request.setRequestHeader('X-Enterprise-Project-Ids', enterprisePorjectID);
                subaccountId && request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
            };
            return camel.get(params);
        };
        this.unsubscribeinstances = function(params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/csb/ordercoreservice/v1/unsubscribeinstances',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'unsubscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'unsubscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.orderSearchBoxSelect = [ {
            'label': i18v1r2.demandList_table_sub_name,
            'id': '1'
        }, {
            'label': i18v1r2.orderId,
            'id': '2'
        }, {
            'label': 'ID',
            'id': '3'
        } ];
        this.serviceManagement_exp_effectiveTime = [ {
            'label': i18v1r2.table_validTime,
            'selectId': '1',
            'checked': !0
        }, {
            'label': i18v1r2.table_expireTime,
            'selectId': '2'
        } ];
        this.operation_service_data = [ {
            'label': i18v1r2.sourceId,
            'selectId': '1',
            'checked': !0
        }, {
            'label': i18v1r2.resourceId,
            'selectId': '2'
        }, {
            'label': i18v1r2.serviceId,
            'selectId': '3'
        }, {
            'label': i18v1r2.productId,
            'selectId': '4'
        }, {
            'label': i18v1r2.subscriptionId,
            'selectId': '5'
        } ];
        this.sourceTypeSearchBoxSelect = [ {
            'label': i18v1r2.All,
            'selectId': 'all',
            'checked': !0
        }, {
            'label': i18v1r2.sourceType_11,
            'selectId': 11
        }, {
            'label': i18v1r2.sourceType_12,
            'selectId': 12
        }, {
            'label': i18v1r2.sourceType_21,
            'selectId': 21
        } ];
        this.subscription_status_data = [ {
            'label': i18v1r2.All,
            'selectId': 'all',
            'checked': !0
        }, {
            'label': i18v1r2.subscription_status_1,
            'selectId': 1
        }, {
            'label': i18v1r2.subscription_status_2,
            'selectId': 2
        }, {
            'label': i18v1r2.subscription_status_3,
            'selectId': 3
        }, {
            'label': i18v1r2.subscription_status_4,
            'selectId': 4
        }, {
            'label': i18v1r2.subscription_status_5,
            'selectId': 5
        }, {
            'label': i18v1r2.subscription_status_6,
            'selectId': 6
        } ];
        this.period_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.periodType_3,
            'id': PERIODTYPE_ONYEAR
        }, {
            'label': i18v1r2.periodType_2s,
            'id': PERIODTYPE_ONMONTH
        }, {
            'label': i18v1r2.periodType_0,
            'id': PERIODTYPE_ONDAY
        }, {
            'label': i18v1r2.periodType_5,
            'id': PERIODTYPE_ONEOFFCHARGE
        }, {
            'label': i18v1r2.periodType_6,
            'id': PERIODTYPE_ONDEMAND
        } ];
        this.batch_period_type_data = [ {
            'label': i18v1r2.periodType_19,
            'selectId': PERIODTYPE_ONYEAR,
            'checked': !0
        }, {
            'label': i18v1r2.periodType_20,
            'selectId': PERIODTYPE_ONMONTH
        } ];
        this.start_type_data = [ {
            'label': i18v1r2.startType_1,
            'selectId': '1',
            'checked': !0
        }, {
            'label': i18v1r2.startType_3,
            'selectId': '3'
        } ];
        this.status_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.status_6,
            'id': 6
        }, {
            'label': i18v1r2.status_1,
            'id': 1
        }, {
            'label': i18v1r2.status_2,
            'id': 2
        }, {
            'label': i18v1r2.status_3,
            'id': 3
        }, {
            'label': i18v1r2.status_5,
            'id': 5
        }, {
            'label': i18v1r2.status_4,
            'id': 4
        }, {
            'label': orderI18order.status_9,
            'id': 9
        } ];
        this.status_type_data_hk = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.status_6,
            'id': 6
        }, {
            'label': i18v1r2.status_1,
            'id': 1
        }, {
            'label': i18v1r2.status_2,
            'id': 2
        }, {
            'label': i18v1r2.status_3,
            'id': 3
        }, {
            'label': i18v1r2.status_5,
            'id': 5
        }, {
            'label': i18v1r2.status_4,
            'id': 4
        }, {
            'label': orderI18order.status_9,
            'id': 9
        } ];
        this.hardware_status_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_6,
            'id': 6
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_1,
            'id': 1
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_2,
            'id': 2
        }, {
            'label': i18v1r2.status_3,
            'id': 3
        }, {
            'label': i18v1r2.status_5,
            'id': 5
        }, {
            'label': i18v1r2.status_4,
            'id': 4
        }, {
            'label': orderI18order.status_9,
            'id': 9
        }, {
            'label': this.getI18FromKey('hardware_my_order_status_to_be_delivered'),
            'id': 10
        }, {
            'label': this.getI18FromKey('hardware_my_order_status_to_be_received'),
            'id': 11
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_12,
            'id': 12
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_13,
            'id': 13
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderStatus_14,
            'id': 14
        } ];
        this.order_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.orderType_1,
            'id': 1
        }, {
            'label': i18v1r2.orderType_2,
            'id': 2
        }, {
            'label': i18v1r2.orderType_3,
            'id': 3
        }, {
            'label': orderI18v1r2.orderType_11,
            'id': 11
        }, {
            'label': orderI18v1r2.orderType_10,
            'id': 10
        }, {
            'label': i18v1r2.orderType_4,
            'id': 4
        }, {
            'label': i18v1r2.orderType_13,
            'id': 13
        }, {
            'label': i18v1r2.orderType_14,
            'id': 14
        }, {
            'label': i18v1r2.orderType_15,
            'id': 15
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderType_16,
            'id': 16
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderType_17,
            'id': 17
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderType_4,
            'id': 18
        } ];
        this.order_type_data_hk = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.orderType_1,
            'id': 1
        }, {
            'label': i18v1r2.orderType_2,
            'id': 2
        }, {
            'label': i18v1r2.orderType_3,
            'id': 3
        }, {
            'label': orderI18v1r2.orderType_11,
            'id': 11
        }, {
            'label': orderI18v1r2.orderType_10,
            'id': 10
        }, {
            'label': i18v1r2.orderType_4,
            'id': 4
        }, {
            'label': i18v1r2.orderType_13,
            'id': 13
        }, {
            'label': i18v1r2.orderType_14,
            'id': 14
        }, {
            'label': i18v1r2.orderType_15,
            'id': 15
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderType_4,
            'id': 18
        } ];
        this.service_order_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.orderType_1,
            'id': 1
        }, {
            'label': i18v1r2.orderType_2,
            'id': 2
        }, {
            'label': i18v1r2.orderType_3,
            'id': 3
        }, {
            'label': orderI18v1r2.orderType_11,
            'id': 11
        }, {
            'label': orderI18v1r2.orderType_10,
            'id': 10
        }, {
            'label': i18v1r2.orderType_4,
            'id': 4
        }, {
            'label': i18v1r2.orderType_13,
            'id': 13
        }, {
            'label': i18v1r2.orderType_14,
            'id': 14
        }, {
            'label': i18v1r2.orderType_15,
            'id': 15
        }, {
            'label': orderI18v1r2.hardware_aftersaleRecord_orderType_16,
            'id': 16
        } ];
        this.pay_per_use_order_type_data = [ {
            'label': orderI18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': orderI18v1r2.orderType_1,
            'id': 'Subscribe'
        }, {
            'label': orderI18v1r2.orderType_3,
            'id': 'Modify'
        } ];
        this.unpaid_order_type = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.orderType_1,
            'id': 1
        }, {
            'label': i18v1r2.orderType_2,
            'id': 2
        }, {
            'label': i18v1r2.orderType_3,
            'id': 3
        }, {
            'label': orderI18v1r2.orderType_11,
            'id': 11
        }, {
            'label': i18v1r2.orderType_13,
            'id': 13
        }, {
            'label': i18v1r2.orderType_14,
            'id': 14
        } ];
        this.renewal_subscription_type_data = [ {
            'label': i18v1r2.periodType_all,
            'id': 'all'
        }, {
            'label': i18v1r2.subscription_status_2,
            'id': 2
        }, {
            'label': i18v1r2.subscription_status_5,
            'id': 5
        }, {
            'label': i18v1r2.subscription_status_4,
            'id': 4
        } ];
        this.subscription_type_data = [ {
            'label': i18v1r2.periodType_all,
            'selectId': 'all',
            'checked': !0
        }, {
            'label': i18v1r2.subscription_status_1,
            'selectId': 1
        }, {
            'label': i18v1r2.subscription_status_2,
            'selectId': 2
        }, {
            'label': i18v1r2.subscription_status_4,
            'selectId': 4
        }, {
            'label': i18v1r2.subscription_status_5,
            'selectId': 5
        }, {
            'label': i18v1r2.tab_serviceManagement_unsubscribService,
            'selectId': 7
        }, {
            'label': i18v1r2.subscription_status_3,
            'selectId': 3
        } ];
        this.subscription_expire_type_data = [ {
            'label': i18v1r2.periodType_all,
            'selectId': 'all',
            'checked': !0
        }, {
            'label': i18v1r2.tab_serviceManagement_unsubscribService,
            'selectId': 7
        }, {
            'label': i18v1r2.subscription_status_3,
            'selectId': 3
        } ];
        this.subscription_waitingRenew_type_data = [ {
            'label': i18v1r2.periodType_all,
            'selectId': 'all',
            'checked': !0
        }, {
            'label': i18v1r2.subscription_status_2,
            'selectId': 2
        }, {
            'label': i18v1r2.subscription_status_4,
            'selectId': 4
        }, {
            'label': i18v1r2.subscription_status_5,
            'selectId': 5
        } ];
        this.processRspCode = function(data) {
            data && data.retCode != RSP_SUCCESS && i18v1r2['msg' + data.retCode] && (data.retMsg = i18v1r2['msg' + data.retCode]);
            return data;
        };
        this.parseToUTCTime = function(Time) {
            if (Time) {
                Time = Time.replace(/-/g, '/');
                Time = new Date(Time);
            } else Time = new Date();
            return $filter('date')(Time, 'yyyy-MM-ddTHH:mm:ss\'Z\'', 'UTC');
        };
        this.parseUTCToLocal = function(Time) {
            if (!Time) return Time;
            Time = formatDateTime(Time);
            return $filter('date')(new Date(Time), 'yyyy-MM-dd HH:mm:ss');
        };
        this.getProductSpecBySubscription = function(data) {
            var extendParams, spec, isShareable;
            0;
            isShareable = 0;
            if (data && data.instanceInfo && data.instanceInfo.resources && 0 < data.instanceInfo.resources.length && (extendParams = data.instanceInfo.resources[0].extendParams)) try {
                isShareable = JSON.parse(extendParams).isShareable;
            } catch (e) {}
            if (data && data.productInstance && data.productInstance.specDisplayPattern) spec = this.newGetSpec(data.productInstance); else {
                spec = this.getProductSpec(data.productInstance);
                1 == isShareable && (spec += '<br/>' + i18common.label_type + ': ' + i18common.label_bwShareType_WHOLE);
            }
            return spec;
        };
        this.getProductSpec = function(data) {
            var p_desc, m_name;
            if (!data) return null;
            p_desc = '';
            try {
                if (1 == data.bundleFlag || data.productSpecInstance) {
                    p_desc = this.resolveProductInstance(data.productSpecInstance);
                    if (data.resourceSpecSize) {
                        m_name = $rootScope.measureUnitAll[data.resourceSpecSizeMeasure] || '';
                        p_desc += i18v1r2.spec_size_name + ': ' + $.encoder.encodeForHTML(data.resourceSpecSize) + $.encoder.encodeForHTML(m_name) + '<br/>';
                    }
                    p_desc = p_desc && p_desc.substring(0, p_desc.lastIndexOf('<'));
                } else if (2 == data.bundleFlag) return $.encoder.encodeForHTML(data.name);
            } catch (e) {
                window.console && console.log && window.console.log('function getProductSpec err!');
            }
            return p_desc = p_desc || $.encoder.encodeForHTML(data.name);
        };
        this.newGetSpec = function(data, isPreDesc) {
            var specMeasureName;
            if (!data) return '';
            isPreDesc = 1 == isPreDesc ? data.preSpecDisplayPattern : data.specDisplayPattern;
            specMeasureName = '';
            data.resourceSpecSizeMeasure && (specMeasureName = $rootScope.measureUnitAll && $rootScope.measureUnitAll[data.resourceSpecSizeMeasure] ? $rootScope.measureUnitAll[data.resourceSpecSizeMeasure] : '');
            return data.resourceSpecSize || specMeasureName ? commons.specReplace(isPreDesc, {
                'specName': $.encoder.encodeForHTML(data.productSpecInstance.name),
                'specSize': $.encoder.encodeForHTML(data.resourceSpecSize),
                'specSizeMeasureId': $.encoder.encodeForHTML(specMeasureName)
            }) : $.encoder.encodeForHTML(data.productSpecInstance.name);
        };
        this.getDemandProductSpec = function(data) {
            var p_desc, speA, i;
            if ((p_desc = '') == data || null == data) return '--';
            speA = data.split(';');
            for (i = 0; i < speA.length; i++) i == speA.length - 1 ? p_desc += $.encoder.encodeForHTML(speA[i]) : p_desc += $.encoder.encodeForHTML(speA[i]) + '<br/>';
            return p_desc;
        };
        this.querySupportEnterprise = function() {
            var isSupportEpProject, params_preference;
            isSupportEpProject = !1;
            params_preference = {
                'customer_id': $rootScope.domainId,
                'config_names': [ 'enterprise_project' ]
            };
            return customerOrderServcieLocal.queryDatePreference(params_preference).then(function(data) {
                var customer_configs, j;
                if (data && ENT_RSP_SUCCESS == data.error_code && (customer_configs = data.customer_configs) && customer_configs.length) for (j = 0; j < customer_configs.length; j++) 'enterprise_project' === customer_configs[j].config_name && 1 === Number(customer_configs[j].config_value) && (isSupportEpProject = !0);
                return Promise.resolve({
                    'isSupportEpProject': isSupportEpProject
                });
            }).catch(function() {
                return Promise.resolve({
                    'isSupportEpProject': isSupportEpProject
                });
            });
        };
        this.getProductSpecWithSplit = function(data, split) {
            var p_desc, m_name;
            p_desc = '';
            try {
                if (1 == data.bundleFlag || data.productSpecInstance) {
                    p_desc = this.resolveProductInstanceWithSplit(data.productSpecInstance, split);
                    if (data.resourceSpecSize && $rootScope.measureUnitAll) {
                        m_name = $rootScope.measureUnitAll[data.resourceSpecSizeMeasure] || '';
                        p_desc += $.encoder.encodeForHTML(data.resourceSpecSize) + $.encoder.encodeForHTML(m_name) + split;
                    }
                    p_desc && -1 < p_desc.toString().indexOf(split) && (p_desc = p_desc.substring(0, p_desc.lastIndexOf(split)));
                } else if (2 == data.bundleFlag) return $.encoder.encodeForHTML(data.name);
            } catch (e) {
                window.console && console.log && window.console.log('function getProductSpec err!');
            }
            return p_desc = p_desc || $.encoder.encodeForHTML(data.name);
        };
        this.getServiceNames = function(serviceTypes) {
            var p_desc, p_descArr, i;
            p_desc = '';
            if (null != serviceTypes) {
                p_descArr = serviceTypes.split(',');
                p_descArr = this.uniqueEle(p_descArr);
                try {
                    if (p_descArr && 0 < p_descArr.length) {
                        p_desc = $rootScope.allSevices[p_descArr[0]] || $.encoder.encodeForHTML(p_descArr[0]);
                        for (i = 1; i < p_descArr.length; i++) p_desc += '、' + ($rootScope.allSevices[p_descArr[i]] || $.encoder.encodeForHTML(p_descArr[i]));
                    }
                } catch (e) {
                    window.console && console.log && window.console.log('function getOrderProductSpec err!');
                }
            }
            return p_desc;
        };
        this.translateCloudServiceNames = function(serviceTypes) {
            var ret, i, name;
            ret = [];
            for (i = 0; i < serviceTypes.length; i++) {
                name = $rootScope.allSevices[serviceTypes[i]] || $.encoder.encodeForHTML(serviceTypes[i]);
                ret.push(name);
            }
            return ret;
        };
        this.uniqueEle = function(arr) {
            var result, hash, i, elem;
            result = [];
            hash = {};
            for (i = 0; null != (elem = arr[i]); i++) if (!hash[elem]) {
                result.push(elem);
                hash[elem] = !0;
            }
            return result;
        };
        this.resolveProductInstance = function(productSpecInstance) {
            var p_desc = '';
            try {
                productSpecInstance && productSpecInstance.resourceSpecInstances && 0 < productSpecInstance.resourceSpecInstances.length ? p_desc += this.resolveResourceSpecInstances(productSpecInstance.resourceSpecInstances) : productSpecInstance.serviceSpecInstances && 0 < productSpecInstance.serviceSpecInstances && (p_desc += this.resolveServiceSpecInstances(productSpecInstance.serviceSpecInstances));
            } catch (e) {
                window.console && console.log && window.console.log('function resolveProductInstance err!');
            }
            return p_desc;
        };
        this.resolveProductInstanceWithSplit = function(productSpecInstance, split) {
            var p_desc = '';
            try {
                productSpecInstance && productSpecInstance.resourceSpecInstances && 0 < productSpecInstance.resourceSpecInstances.length ? p_desc += this.resolveResourceSpecInstancesWithSplit(productSpecInstance.resourceSpecInstances, split) : productSpecInstance.serviceSpecInstances && 0 < productSpecInstance.serviceSpecInstances && (p_desc += this.resolveServiceSpecInstancesWithSplit(productSpecInstance.serviceSpecInstances, split));
            } catch (e) {
                window.console && console.log && window.console.log('function resolveProductInstance err!');
            }
            return p_desc;
        };
        this.resolveServiceSpecInstances = function(serviceSpecInstances) {
            var p_desc, i;
            p_desc = '';
            if (0 < serviceSpecInstances.length) for (i in serviceSpecInstances) serviceSpecInstances[i].id && serviceSpecInstances[i].resourceSpecInstances && 0 < serviceSpecInstances[i].resourceSpecInstances.length && (p_desc += this.resolveResourceSpecInstances(serviceSpecInstances[i].resourceSpecInstances));
            return p_desc;
        };
        this.resolveServiceSpecInstancesWithSplit = function(serviceSpecInstances, split) {
            var p_desc, i;
            p_desc = '';
            if (0 < serviceSpecInstances.length) for (i in serviceSpecInstances) serviceSpecInstances[i].id && serviceSpecInstances[i].resourceSpecInstances && 0 < serviceSpecInstances[i].resourceSpecInstances.length && (p_desc += this.resolveResourceSpecInstancesWithSplit(serviceSpecInstances[i].resourceSpecInstances, split));
            return p_desc;
        };
        this.resolveResourceSpecInstances = function(resourceSpecInstances) {
            var p_desc, i;
            p_desc = '';
            if (0 < resourceSpecInstances.length) for (i in resourceSpecInstances) resourceSpecInstances[i].id && resourceSpecInstances[i].attributeInstances && 0 < resourceSpecInstances[i].attributeInstances.length && (p_desc += this.resolveAttributeInstances(resourceSpecInstances[i]));
            return p_desc;
        };
        this.resolveCustomerResourceSpecInstances = function(resourceSpecInstances, resourceTypeCode, skuCode, resourceSpecSize, resourceSpecSizeMeasure) {
            var p_desc, i;
            p_desc = '';
            if (0 < resourceSpecInstances.length) for (i in resourceSpecInstances) resourceSpecInstances[i].id && resourceSpecInstances[i].attributeInstances && 0 < resourceSpecInstances[i].attributeInstances.length && (p_desc += this.resolveCustomerAttributeInstances(resourceSpecInstances[i], resourceTypeCode, skuCode, resourceSpecSize, resourceSpecSizeMeasure));
            return p_desc;
        };
        this.resolveResourceSpecInstancesWithSplit = function(resourceSpecInstances, split) {
            var p_desc, i;
            p_desc = '';
            if (0 < resourceSpecInstances.length) for (i in resourceSpecInstances) resourceSpecInstances[i].id && resourceSpecInstances[i].attributeInstances && 0 < resourceSpecInstances[i].attributeInstances.length && (p_desc += this.resolveAttributeInstancesWithSplit(resourceSpecInstances[i], split));
            return p_desc;
        };
        this.resolveAttributeInstances = function(resourceSpecInstance) {
            var resourceTypeCode, show_code, p_sys_disk_desc, p_desc, attributeInstances, i, measureName, linkType;
            resourceTypeCode = resourceSpecInstance.resourceTypeCode;
            show_code = G_SHOW_SPECCODE;
            p_desc = p_sys_disk_desc = '';
            try {
                if ((attributeInstances = resourceSpecInstance.attributeInstances) && 0 < attributeInstances.length) for (i in attributeInstances) if (attributeInstances[i].name) {
                    measureName = $rootScope.measureUnitAll[attributeInstances[i].measureId] || '';
                    'hws.resource.type.pm' == resourceTypeCode && 'disk' == attributeInstances[i].code && (p_sys_disk_desc = i18v1r2.local_disk + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName) + '<br/>');
                    if (show_code && 0 < show_code.length && -1 == $.inArray(attributeInstances[i].code, show_code)) continue;
                    attributeInstances[i].code && i18v1r2['speccode_' + attributeInstances[i].code] && (attributeInstances[i].name = i18v1r2['speccode_' + attributeInstances[i].code]);
                    'linkType' == attributeInstances[i].code && (linkType = orderI18order.linkType)[attributeInstances[i].value] && (attributeInstances[i].value = linkType[attributeInstances[i].value]);
                    if ('storageLevel' == attributeInstances[i].code) i18v1r2['storageLevel_' + attributeInstances[i].value] && (attributeInstances[i].value = i18v1r2['storageLevel_' + attributeInstances[i].value]); else if ('EIPType' == attributeInstances[i].code) i18common['specAttr_EIPType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_EIPType_' + attributeInstances[i].value]); else if ('volumeType' == attributeInstances[i].code) i18common['specAttr_volumeType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_volumeType_' + attributeInstances[i].value]); else if ('image' == attributeInstances[i].code) continue;
                    'mem' != attributeInstances[i].code || 'MB' != measureName && '' != measureName ? p_desc += $.encoder.encodeForHTML(attributeInstances[i].name) + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName) + '<br/>' : p_desc += $.encoder.encodeForHTML(attributeInstances[i].name) + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value.div(1024)) + $.encoder.encodeForHTML(orderI18order.ecs_term_gbUnit_label) + '<br/>';
                }
            } catch (e) {
                window.console && console.log && window.console.log('function resolveAttributeInstances err!');
            }
            p_sys_disk_desc && (p_desc += p_sys_disk_desc);
            return p_desc;
        };
        this.resolveCustomerAttributeInstances = function(resourceSpecInstance, resourceTypeCode, skuCode, resourceSpecSize, resourceSpecSizeMeasure) {
            var show_code, p_desc, attributeInstances, i, linkType, measureName;
            if ('hws.resource.type.vm' == resourceTypeCode || 'hws.resource.type.rds.vm' == resourceTypeCode || 'hws.resource.type.pm' == resourceTypeCode) return this.resolveCustomerVMAttributeInstances(resourceSpecInstance, skuCode, resourceSpecSize, resourceSpecSizeMeasure);
            if ('hws.resource.type.ip' == resourceTypeCode) return this.resolveCustomerIPAttributeInstances(resourceSpecInstance, resourceSpecSize, resourceSpecSizeMeasure);
            show_code = G_SHOW_SPECCODE;
            p_desc = '';
            try {
                if ((attributeInstances = resourceSpecInstance.attributeInstances) && 0 < attributeInstances.length) for (i in attributeInstances) if (attributeInstances[i].name) {
                    if (show_code && 0 < show_code.length && -1 == $.inArray(attributeInstances[i].code, show_code)) continue;
                    attributeInstances[i].code && i18v1r2['speccode_' + attributeInstances[i].code] && (attributeInstances[i].name = i18v1r2['speccode_' + attributeInstances[i].code]);
                    'linkType' == attributeInstances[i].code && (linkType = orderI18order.linkType)[attributeInstances[i].value] && (attributeInstances[i].value = linkType[attributeInstances[i].value]);
                    'storageLevel' == attributeInstances[i].code ? i18v1r2['storageLevel_' + attributeInstances[i].value] && (attributeInstances[i].value = i18v1r2['storageLevel_' + attributeInstances[i].value]) : 'EIPType' == attributeInstances[i].code ? i18common['specAttr_EIPType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_EIPType_' + attributeInstances[i].value]) : 'volumeType' == attributeInstances[i].code && i18common['specAttr_volumeType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_volumeType_' + attributeInstances[i].value]);
                    measureName = $rootScope.measureUnitAll[attributeInstances[i].measureId] || '';
                    'mem' != attributeInstances[i].code || 'MB' != measureName && '' != measureName ? p_desc += $.encoder.encodeForHTML(attributeInstances[i].name) + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName) + '<br/>' : p_desc += $.encoder.encodeForHTML(attributeInstances[i].name) + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value.div(1024)) + $.encoder.encodeForHTML(orderI18order.ecs_term_gbUnit_label) + '<br/>';
                }
            } catch (e) {
                window.console && console.log && window.console.log('function resolveCustomerAttributeInstances err!');
            }
            return p_desc;
        };
        this.resolveCustomerIPAttributeInstances = function(resourceSpecInstance, resourceSpecSize, resourceSpecSizeMeasure) {
            var p_desc, p_type_desc, attributeInstances, i;
            p_type_desc = p_desc = '';
            try {
                if ((attributeInstances = resourceSpecInstance.attributeInstances) && 0 < attributeInstances.length) for (i in attributeInstances) if (attributeInstances[i].name) {
                    $rootScope.measureUnitAll[attributeInstances[i].measureId];
                    if ('EIPType' == attributeInstances[i].code && i18common['specAttr_EIPType_' + attributeInstances[i].value]) {
                        attributeInstances[i].value = i18common['specAttr_EIPType_' + attributeInstances[i].value];
                        p_type_desc += i18v1r2.serviceManagement_table_productSpec + ':' + $.encoder.encodeForHTML(attributeInstances[i].value);
                    }
                }
            } catch (e) {
                window.console && console.log && window.console.log('function resolveCustomerAttributeInstances err!');
            }
            p_type_desc && (p_desc += p_type_desc + '<br/>');
            if (resourceSpecSize) {
                resourceSpecInstance = $rootScope.measureUnitAll[resourceSpecSizeMeasure] || '';
                p_desc += i18v1r2.label_specAttrName_BWSize + ':' + resourceSpecSize + resourceSpecInstance + '<br/>';
            }
            return p_desc;
        };
        this.resolveCustomerVMAttributeInstances = function(resourceSpecInstance, skuCode, resourceSpecSize, resourceSpecSizeMeasure) {
            var p_desc, p_cpu_desc, p_mem_desc, p_image_desc, p_data_disk_desc, p_data_other_desc, p_sys_disk_desc, resourceTypeCode, attributeInstances, i, measureName;
            p_sys_disk_desc = p_data_other_desc = p_data_disk_desc = p_image_desc = p_mem_desc = p_cpu_desc = p_desc = '';
            resourceTypeCode = resourceSpecInstance.resourceTypeCode;
            try {
                if ((attributeInstances = resourceSpecInstance.attributeInstances) && 0 < attributeInstances.length) for (i in attributeInstances) if (attributeInstances[i].name) {
                    measureName = $rootScope.measureUnitAll[attributeInstances[i].measureId] || '';
                    if ('cpu' == attributeInstances[i].code) p_cpu_desc += $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName); else if ('mem' == attributeInstances[i].code) p_mem_desc += $.encoder.encodeForHTML(attributeInstances[i].value.div(1024)) + $.encoder.encodeForHTML(orderI18order.ecs_term_gbUnit_label); else if ('image' == attributeInstances[i].code) p_image_desc += i18v1r2.speccode_image + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value); else if ('volumeType' == attributeInstances[i].code) {
                        p_data_disk_desc += i18v1r2.system_or_disk + ': ';
                        resourceSpecSize && (p_data_disk_desc += resourceSpecSize + ($rootScope.measureUnitAll[resourceSpecSizeMeasure] || '') + ' ');
                        if (i18common['specAttr_volumeType_' + attributeInstances[i].value]) {
                            attributeInstances[i].value = i18common['specAttr_volumeType_' + attributeInstances[i].value];
                            p_data_disk_desc += $.encoder.encodeForHTML(attributeInstances[i].value);
                        }
                    } else -1 < $.inArray(attributeInstances[i].code, G_SHOW_SPECCODE) && i18common['specAttr_code_' + attributeInstances[i].code] && (p_data_other_desc += i18common['specAttr_code_' + attributeInstances[i].code] + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value) + '<br/>');
                    'hws.resource.type.pm' == resourceTypeCode && 'disk' == attributeInstances[i].code && (p_sys_disk_desc = i18v1r2.local_disk + ': ' + $.encoder.encodeForHTML(attributeInstances[i].value) + measureName);
                }
            } catch (e) {
                window.console && console.log && window.console.log('function resolveCustomerAttributeInstances err!');
            }
            p_cpu_desc && p_mem_desc && (p_desc += i18v1r2.serviceManagement_table_productSpec + ':' + skuCode + '|' + p_cpu_desc + '|' + p_mem_desc + '<br/>');
            p_image_desc && (p_desc += p_image_desc + '<br/>');
            p_data_disk_desc && (p_desc += p_data_disk_desc + '<br/>');
            p_sys_disk_desc && (p_desc += p_sys_disk_desc + '<br/>');
            p_data_other_desc && (p_desc += p_data_other_desc);
            return p_desc;
        };
        this.resolveAttributeInstancesWithSplit = function(resourceSpecInstance, split) {
            var resourceTypeCode, show_code, p_desc, l_p_desc, attributeInstances, i, measureName, linkType, tmp_value;
            resourceTypeCode = resourceSpecInstance.resourceTypeCode;
            show_code = G_SHOW_SPECCODE;
            l_p_desc = p_desc = '';
            try {
                if ((attributeInstances = resourceSpecInstance.attributeInstances) && 0 < attributeInstances.length) for (i in attributeInstances) if (attributeInstances[i].name) {
                    measureName = '';
                    $rootScope.measureUnitAll && attributeInstances[i].measureId && (measureName = $rootScope.measureUnitAll[attributeInstances[i].measureId] || '');
                    'hws.resource.type.pm' == resourceTypeCode && 'disk' == attributeInstances[i].code && (l_p_desc = $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName) + split);
                    if (show_code && 0 < show_code.length && -1 == $.inArray(attributeInstances[i].code, show_code)) continue;
                    'linkType' == attributeInstances[i].code && (linkType = orderI18order.linkType)[attributeInstances[i].value] && (attributeInstances[i].value = linkType[attributeInstances[i].value]);
                    if ('storageLevel' == attributeInstances[i].code) i18v1r2['storageLevel_' + attributeInstances[i].value] && (attributeInstances[i].value = i18v1r2['storageLevel_' + attributeInstances[i].value]); else if ('EIPType' == attributeInstances[i].code) i18common['specAttr_EIPType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_EIPType_' + attributeInstances[i].value]); else if ('volumeType' == attributeInstances[i].code) i18common['specAttr_volumeType_' + attributeInstances[i].value] && (attributeInstances[i].value = i18common['specAttr_volumeType_' + attributeInstances[i].value]); else if ('image' == attributeInstances[i].code) continue;
                    tmp_value = $.encoder.encodeForHTML(attributeInstances[i].value) + $.encoder.encodeForHTML(measureName) + split;
                    'mem' != attributeInstances[i].code || 'MB' != measureName && '' != measureName || (tmp_value = attributeInstances[i].value.div(1024) + orderI18order.ecs_term_gbUnit_label + split);
                    'cpu' == attributeInstances[i].code && p_desc ? p_desc = tmp_value + p_desc : p_desc += tmp_value;
                }
            } catch (e) {
                window.console && console.log && window.console.log('function resolveAttributeInstances err!');
            }
            l_p_desc && (p_desc += l_p_desc);
            return p_desc;
        };
        this.resolveMeasureUnitList = function(measureUnitList) {
            var unitName, i;
            unitName = 'unitCNName';
            'en-us' == $rootScope.currentLanguage && (unitName = 'unitENName');
            if (measureUnitList && 0 < measureUnitList.length) for (i in measureUnitList) !measureUnitList[i].measureID && 0 != measureUnitList[i].measureID || ($rootScope.measureUnitAll[measureUnitList[i].measureID] = $.encoder.encodeForHTML(measureUnitList[i][unitName]));
        };
        this.checkChangeSpec = function(data) {
            var cloudServiceType, isChangeSpec, pricePlanInstance, instanceInfo, i;
            if (this.checkIsUnbind(data.beId)) return !1;
            if (data.status != SUBSCRIPTIONSTATUS_INFORCE) return !1;
            cloudServiceType = data.productInstance.cloudServiceType;
            isChangeSpec = NOT_SHOW;
            if ('121' == cloudServiceType || 'hws.service.type.dec' == cloudServiceType) isChangeSpec = NOT_SHOW; else if (1 == data.orderVersion) if ('6' == cloudServiceType || '8' == cloudServiceType || '12' == cloudServiceType || '17' == cloudServiceType) {
                pricePlanInstance = null;
                try {
                    pricePlanInstance = $.parseJSON(data.pricePlanInstance);
                } catch (e) {}
                if (!pricePlanInstance || pricePlanInstance.periodType != PERIODTYPE_ONYEAR && pricePlanInstance.periodType != PERIODTYPE_ONMONTH) isChangeSpec = NOT_SHOW; else if ('8' == cloudServiceType) isChangeSpec = SHOW; else if ((instanceInfo = data.instanceInfo) && instanceInfo.resources && 0 < instanceInfo.resources.length) for (i in instanceInfo.resources) if (instanceInfo.resources[i].resourceTypeCode && ('1' == instanceInfo.resources[i].resourceTypeCode || '30' == instanceInfo.resources[i].resourceTypeCode)) {
                    isChangeSpec = SHOW;
                    break;
                }
            } else isChangeSpec = NOT_SHOW;
            return isChangeSpec;
        };
        this.checkRenew = function(data) {
            var lockStatus, nextOrderLineItem_maps, slockScope;
            nextOrderLineItem_maps = data.nextOrderLineItem_maps;
            (lockStatus = data.lockStatus) && nextOrderLineItem_maps && 2 == nextOrderLineItem_maps.orderType && (lockStatus = 0);
            if ((nextOrderLineItem_maps = this.getResourceTypeCode(data.productInstance)) && 'hws.resource.type.redeem' == nextOrderLineItem_maps) return !1;
            if (data.status == SUBSCRIPTIONSTATUS_INFORCE || data.status == SUBSCRIPTIONSTATUS_FREEZE || data.status == SUBSCRIPTIONSTATUS_WAITINGRENEW) {
                try {
                    slockScope = data.lockScope && angular.fromJson(data.lockScope);
                } catch (e) {
                    slockScope = [];
                }
                if (1 == data.orderVersion && 1 != data.chargingMode) return !1;
                return !lockStatus || !!data.lockScope && !(-1 < $.inArray(99, slockScope) || -1 < $.inArray(1, slockScope) || -1 < $.inArray(0, slockScope));
            }
            return !1;
        };
        this.resovleRenewReason_new = function(data) {
            var lock_reason, orderId, orderStatus, orderType, orderType_str;
            lock_reason = '';
            if (data && data.lockInfo && data.lockInfo.lockedOrderId && data.lockInfo.lockedOrderType) {
                orderId = data.lockInfo.lockedOrderId;
                orderStatus = data.lockInfo.lockedOrderStatus;
                orderType = data.lockInfo.lockedOrderType;
                data = data.lockInfo.lockedOrderItemType;
                orderType_str = orderI18v1r2['renew_orderType_' + orderType];
                10 == orderType ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': orderType_str,
                    '1': orderId
                }) : 4 == orderType ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': orderType_str,
                    '1': orderId
                }) : 3 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_2, {
                    '0': orderId
                }) : 5 == orderStatus && (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate, {
                    '0': orderType_str,
                    '1': orderId
                })) : 2 == orderType ? 1 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': orderType_str,
                    '1': orderId
                }) : 3 == orderStatus || 5 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_4, {
                    '0': orderId
                }) : 6 == orderStatus && (lock_reason = utilService.i18nReplace(orderI18v1r2.renew_not_support_operate_6, {
                    '0': orderId
                })) : 3 == orderType ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': orderType_str,
                    '1': orderId
                }) : 3 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_3, {
                    '0': orderId
                }) : 5 == orderStatus && (lock_reason = utilService.i18nReplace(orderI18v1r2.renew_not_support_operate_5, {
                    '0': orderId
                })) : lock_reason = orderType == ORDERTYPE_ORDER && data == ADD_AFFILIATE ? orderStatus == ORDERSTATUS_WAITINGPAYMENT ? utilService.i18nReplace(orderI18order.renew_not_support_waiting_payment, {
                    '0': orderId
                }) : utilService.i18nReplace(orderI18order.renew_not_support_changing, {
                    '0': orderId
                }) : utilService.i18nReplace(orderI18order.product_not_support_action_locked, {
                    '0': orderType_str,
                    '1': orderId,
                    '3': orderId
                });
            }
            return lock_reason;
        };
        this.resovleRenewReason = function(data, nextOrderLineItem_maps) {
            var lock_reason, orderId, orderStatus, customerOrderItemId;
            customerOrderItemId = data.subscribeSource.customerOrderItemId;
            NEW_ORDER_FLAG && (customerOrderItemId = data.firstLineItemId);
            lock_reason = '';
            if (nextOrderLineItem_maps && nextOrderLineItem_maps[customerOrderItemId]) {
                orderId = nextOrderLineItem_maps[customerOrderItemId].orderId;
                orderStatus = nextOrderLineItem_maps[customerOrderItemId].orderStatus;
                nextOrderLineItem_maps = nextOrderLineItem_maps[customerOrderItemId].orderType;
                customerOrderItemId = i18v1r2['renew_orderType_' + nextOrderLineItem_maps];
                10 == nextOrderLineItem_maps ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': customerOrderItemId,
                    '1': orderId
                }) : 4 == nextOrderLineItem_maps ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': customerOrderItemId,
                    '1': orderId
                }) : 3 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_2, {
                    '0': orderId
                }) : 5 == orderStatus && (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate, {
                    '0': customerOrderItemId,
                    '1': orderId
                })) : 2 == nextOrderLineItem_maps ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': customerOrderItemId,
                    '1': orderId
                }) : 3 != orderStatus && 5 != orderStatus || (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_4, {
                    '0': orderId
                })) : 3 == nextOrderLineItem_maps ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus || 5 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                    '0': customerOrderItemId,
                    '1': orderId
                }) : 3 == orderStatus && (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_3, {
                    '0': orderId
                })) : lock_reason = utilService.i18nReplace(i18v1r2.renew_reason_tip, {
                    '0': customerOrderItemId,
                    '1': orderId
                });
            }
            return lock_reason = data.trialFlag ? i18v1r2.renew_toOfficial_tip : lock_reason;
        };
        this.orderCanNotRenewReason = function(data) {
            var lock_reason, orderId, orderType, orderType_str;
            lock_reason = '';
            orderId = $.encoder.encodeForHTML(data.lockedOrderId);
            orderType = $.encoder.encodeForHTML(data.lockedOrderType);
            data = $.encoder.encodeForHTML(data.lockedOrderStatus);
            orderType_str = null;
            orderType && (orderType_str = i18v1r2['renew_orderType_' + orderType]);
            10 == orderType ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                '0': orderType_str,
                '1': orderId
            }) : 4 == orderType ? 1 == data || 6 == data || 8 == data ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                '0': orderType_str,
                '1': orderId
            }) : 3 == data ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_2, {
                '0': orderId
            }) : 5 == data && (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate, {
                '0': orderType_str,
                '1': orderId
            })) : 2 == orderType ? 1 == data || 8 == data ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                '0': orderType_str,
                '1': orderId
            }) : 3 == data || 5 == data ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_4, {
                '0': orderId
            }) : 6 == data && (lock_reason = utilService.i18nReplace(orderI18v1r2.renew_not_support_operate_6, {
                '0': orderId
            })) : 3 == orderType ? 1 == data || 6 == data || 8 == data || 5 == data ? lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_1, {
                '0': orderType_str,
                '1': orderId
            }) : 3 == data && (lock_reason = utilService.i18nReplace(i18v1r2.renew_not_support_operate_3, {
                '0': orderId
            })) : lock_reason = utilService.i18nReplace(i18v1r2.renew_reason_tip, {
                '0': orderType_str,
                '1': orderId
            });
            return lock_reason;
        };
        this.orderCanNotChangeReason = function(data) {
            var lock_reason, orderId, orderType, orderStatus, orderType_str, resourceTypeCode, cloudServiceType, extendParams;
            lock_reason = '';
            orderId = $.encoder.encodeForHTML(data.lockedOrderId);
            orderType = $.encoder.encodeForHTML(data.lockedOrderType);
            orderStatus = $.encoder.encodeForHTML(data.lockedOrderStatus);
            orderType_str = null;
            orderType && (orderType_str = i18v1r2['change_orderType_' + orderType]);
            resourceTypeCode = this.getResourceTypeCode(data.productInstance);
            cloudServiceType = data.productInstance.cloudServiceType;
            data.canNotReason && (1 == data.canNotReason ? 2 == orderType ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_1, {
                '0': i18v1r2.orderType_2,
                '1': orderId
            }) : 3 != orderStatus && 5 != orderStatus || (lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_2, {
                '0': orderId
            })) : 4 == orderType ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_1, {
                '0': i18v1r2.orderType_4,
                '1': orderId
            }) : 3 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_5, {
                '0': orderId
            }) : 5 == orderStatus && (lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_3, {
                '0': orderId
            })) : 3 == orderType ? 1 == orderStatus || 6 == orderStatus || 8 == orderStatus || 5 == orderStatus ? lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_1, {
                '0': i18v1r2.orderType_3,
                '1': orderId
            }) : 3 == orderStatus && (lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate_4, {
                '0': orderId
            })) : lock_reason = utilService.i18nReplace(i18v1r2.renew_reason_tip, {
                '0': orderType_str,
                '1': orderId
            }) : 2 == data.canNotReason ? lock_reason = utilService.i18nReplace(i18v1r2.change_not_support_operate, {
                '0': i18v1r2['subscription_status_' + data.status]
            }) : 3 != data.canNotReason && (4 == data.canNotReason ? data.expireMode == RESOURCE_EXPIREMODE_TOONDEMAND && (lock_reason = i18v1r2.isLock_reasonType_1) : 5 == data.canNotReason ? lock_reason = i18v1r2.be_not_support : 6 == data.canNotReason ? lock_reason = utilService.i18nReplace(i18v1r2.product_not_support_change, {
                '0': i18v1r2[cloudServiceType]
            }) : 7 == data.canNotReason && (lock_reason = utilService.i18nReplace(i18v1r2.product_not_support_change, {
                '0': i18v1r2[resourceTypeCode]
            }))));
            try {
                extendParams = data.productInstance.extendParams;
                1 == angular.fromJson(extendParams).productMode && (lock_reason = utilService.i18nReplace(i18v1r2.product_not_support_change, {
                    '0': i18v1r2[cloudServiceType]
                }));
            } catch (e) {}
            return lock_reason;
        };
        this.getTodemandLockReason = function(lockInfo) {
            var lock_reason, orderId, orderType, orderStatus, orderType_str;
            if (!lockInfo) return '';
            lock_reason = '';
            orderId = $.encoder.encodeForHTML(lockInfo.lockedOrderId);
            orderType = $.encoder.encodeForHTML(lockInfo.lockedOrderType);
            orderStatus = $.encoder.encodeForHTML(lockInfo.lockedOrderStatus);
            lockInfo = $.encoder.encodeForHTML(lockInfo.lockedOrderItemType);
            orderType_str = null;
            orderType && (orderType_str = orderI18v1r2['change_orderType_' + orderType]);
            if (orderType == ORDERTYPE_RENEW && (orderStatus == ORDERSTATUS_OPENING || orderStatus == ORDERSTATUS_COMPLETED)) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_2, {
                '0': orderId
            });
            if (orderType == ORDERTYPE_UNSUBSCRIBR && orderStatus == ORDERSTATUS_OPENING) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_5, {
                '0': orderId
            });
            if (orderType == ORDERTYPE_UNSUBSCRIBR && orderStatus == ORDERSTATUS_COMPLETED) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_3, {
                '0': orderId
            });
            if (orderType == ORDERTYPE_CHANGE && orderStatus == ORDERSTATUS_OPENING) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_4, {
                '0': orderId
            });
            if (orderType == ORDERTYPE_CHANGE && orderStatus == ORDERSTATUS_COMPLETED) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_6, {
                '0': orderId
            });
            if (orderType == ORDERTYPE_ORDER && lockInfo == ADD_AFFILIATE) return orderStatus == ORDERSTATUS_WAITINGPAYMENT ? utilService.i18nReplace(orderI18order.change_not_support_operate_8, {
                '0': orderId
            }) : utilService.i18nReplace(orderI18order.change_not_support_operate_7, {
                '0': orderId
            });
            if ($.inArray(orderStatus, [ ORDERSTATUS_WAITINGAUDIT, ORDERSTATUS_WAITINGPAYMENT, ORDERSTATUS_WAITINGAPPROVAL ]) && $.inArray(orderType, [ ORDERTYPE_RENEW, ORDERTYPE_UNSUBSCRIBR, ORDERTYPE_CHANGE ]) && orderType_str) return lock_reason = utilService.i18nReplace(orderI18v1r2.change_not_support_operate_1, {
                '0': orderType_str,
                '1': orderId
            }), lock_reason = $.inArray(orderStatus, [ ORDERSTATUS_WAITINGPAYMENT ]) ? utilService.i18nReplace(orderI18v1r2.change_not_support_operate_7, {
                '0': orderId
            }) : lock_reason;
            return lock_reason = orderType_str ? utilService.i18nReplace(orderI18v1r2.renew_reason_tip, {
                '0': orderType_str,
                '1': orderId
            }) : lock_reason;
        };
        this.getReleaseReason = function(lockInfo) {
            var lock_reason, orderId, orderType, orderType_str;
            if (!lockInfo) return '';
            lock_reason = '';
            orderId = $.encoder.encodeForHTML(lockInfo.lockedOrderId);
            orderType = $.encoder.encodeForHTML(lockInfo.lockedOrderType);
            lockInfo = $.encoder.encodeForHTML(lockInfo.lockedOrderStatus);
            orderType_str = null;
            orderType && (orderType_str = orderI18v1r2['change_orderType_' + orderType]);
            if ($.inArray(lockInfo, [ ORDERSTATUS_WAITINGAUDIT, ORDERSTATUS_WAITINGPAYMENT, ORDERSTATUS_WAITINGAPPROVAL ]) && $.inArray(orderType, [ ORDERTYPE_RENEW ]) && orderType_str) return lock_reason = utilService.i18nReplace(orderI18order.product_not_support_release_locked, {
                '0': orderType_str,
                '1': orderId,
                '3': orderId
            });
            return lock_reason;
        };
        this.checkUnsubscribe = function(data) {
            NEW_ORDER_FLAG && (data.isLock = data.lockStatus);
            this.getResourceTypeCode(data.productInstance);
            if ('hws.service.type.dec' == data.productInstance.cloudServiceType) return !1;
            if (2 == data.cancelFlag) {
                if (data.status == SUBSCRIPTIONSTATUS_EXPIRED) return !0;
                if ((data.status == SUBSCRIPTIONSTATUS_NOTINFORCE || data.status == SUBSCRIPTIONSTATUS_INFORCE) && !data.isLock) return !0;
            }
            return !1;
        };
        this.checkAutoUnsubscribe = function(data) {
            NEW_ORDER_FLAG && (data.isLock = data.lockStatus);
            this.getResourceTypeCode(data.productInstance);
            if ('hws.service.type.dec' == data.productInstance.cloudServiceType) return !1;
            if (-1 < $.inArray(data.status, [ SUBSCRIPTIONSTATUS_EXPIRED, SUBSCRIPTIONSTATUS_NOTINFORCE, SUBSCRIPTIONSTATUS_INFORCE ]) && !data.isLock) return !0;
            return !1;
        };
        this.getResourceTypeCode = function(productInstance) {
            var resourceTypeCode, resourceSpecInstances, i;
            resourceTypeCode = '';
            try {
                if (productInstance && productInstance.productSpecInstance && productInstance.productSpecInstance.resourceSpecInstances && 0 < productInstance.productSpecInstance.resourceSpecInstances.length) for (i in resourceSpecInstances = productInstance.productSpecInstance.resourceSpecInstances) if (resourceSpecInstances[i].id) {
                    resourceTypeCode = resourceSpecInstances[i].resourceTypeCode;
                    break;
                }
            } catch (e) {}
            return resourceTypeCode;
        };
        this.checkIsSupportAllOperate = function(data) {
            data = this.getResourceTypeCode(data.productInstance);
            if (data && 'hws.resource.type.devcloudpackage' == data) return !1;
            return !0;
        };
        this.cancelChangeRate = function(data) {
            return data.expireMode == RESOURCE_EXPIREMODE_TOONDEMAND;
        };
        this.checkChangeRate = function(data) {
            if (data.instanceInfo && data.instanceInfo.resources && data.instanceInfo.resources.length && 1 == data.instanceInfo.resources[0].supportChangeFee) return !0;
            return !1;
        };
        this.resovleChangeReason = function(data, nextOrderLineItem_maps) {
            if (!data || !data.instanceInfo || !data.instanceInfo.resources || 0 < !data.instanceInfo.resources.length) return;
            data = data.instanceInfo.resources[0].supportChangeFee;
            return orderI18order['product_not_support_change_' + data];
        };
        this.resovleCycleReason = function(data) {
            var lock_reason, resourceTypeCode;
            lock_reason = i18v1r2.demandList_not_support_serviceType1;
            data.beId != $rootScope.csbBeId && $rootScope.bpBeId && data.beId != $rootScope.bpBeId && (lock_reason = i18v1r2.demandList_not_support_bp);
            1 != data.status && (lock_reason = i18v1r2.demandList_not_support_status);
            (resourceTypeCode = data.resourceTypeCode) && -1 < $.inArray(resourceTypeCode, [ 'hws.resource.type.obs', 'hws.resource.type.dev.testman', 'hws.resource.type.dev.releaseman', 'hws.resource.type.dev.projectman', 'hws.resource.type.dev.codehub', 'hws.resource.type.dev.codeci', 'hws.resource.type.dev.codecheck', 'hws.resource.type.drs.vm', 'hws.resource.type.drs.volume' ]) && (lock_reason = utilService.i18nReplace(i18v1r2.demandList_not_support_change, {
                '0': i18v1r2[resourceTypeCode]
            }));
            1 == data.chargingModeChangeFlag && (lock_reason = i18v1r2.demandList_chargingMode_Change);
            resourceTypeCode = data.cloudServiceTypeCode;
            return lock_reason = -1 < $.inArray(resourceTypeCode, [ 'hws.service.type.rds', 'hws.service.type.dms', 'hws.service.type.smn', 'hws.service.type.drs', '128', '129' ]) ? utilService.i18nReplace(i18v1r2.demandList_not_support_serviceType, {
                '0': i18v1r2[resourceTypeCode]
            }) : lock_reason;
        };
        this.checkIsUnbind = function(beId) {
            var isunbind = !1;
            try {
                null !== beId && 0 < beId.length && (isunbind = 0 < $rootScope.csbBeId.length && null !== $rootScope.bpBeId && 0 < $rootScope.bpBeId.length ? beId !== $rootScope.csbBeId && $rootScope.bpBeId !== beId : beId !== $rootScope.csbBeId);
            } catch (e) {
                window.console && console.log && window.console.log('function checkIsUnbind err!');
            }
            return isunbind;
        };
        this.isTrail = function(data) {
            if (data.productInstance.trialFlag) return !0;
            return !1;
        };
        this.expireTimeIntervalSelect = [ {
            'label': i18v1r2.All,
            'id': '0'
        }, {
            'label': orderI18order.myorder.expireTimeIntervalSelect[0],
            'id': '7'
        }, {
            'label': orderI18order.myorder.expireTimeIntervalSelect[1],
            'id': '15'
        }, {
            'label': orderI18order.myorder.expireTimeIntervalSelect[2],
            'id': '30'
        }, {
            'label': i18v1r2.customTime,
            'id': '99'
        } ];
        this.getPeriodTypeNum = function(data) {
            if (ORDER_SOURCE_TYPE.COMPENSATION == data.sourceType) return '--';
            return data.chargingMode == POLICY_USAGECHARGE ? i18v1r2.periodType_6 : data.periodType == PERIODTYPE_ONEOFFCHARGE ? i18v1r2.periodType_5 : data.periodType == PERIODTYPE_ONDEMAND ? i18v1r2.periodType_6 : data.periodNum && 1 < data.periodNum && 'en-us' == $rootScope.currentLanguage ? $.encoder.encodeForHTML(data.periodNum) + i18v1r2['periodType_' + data.periodType] + 's' : $.encoder.encodeForHTML(data.periodNum) + i18v1r2['periodType_' + data.periodType];
        };
        this.getAmount = function(data) {
            return data.chargingMode != POLICY_USAGECHARGE || data.amount ? $filter('csb_number')(commons.currencyUnitConversion(data.amount, data.measureId), 2) : i18v1r2.periodType_6;
        };
        this.getCurrencyAfterDiscount = function(data) {
            return data.chargingMode != POLICY_USAGECHARGE || data.amount ? $filter('csb_number')(commons.currencyUnitConversion(data.currencyAfterDiscount, data.measureId), 2) : i18v1r2.periodType_6;
        };
        this.getOrderType = function(data) {
            return 7 == data.sourceType && 2 == data.orderType ? orderI18order.orderType_2_7 : orderI18order['orderType_' + data.orderType];
        };
        this.getOrderTypeNew = function(data) {
            return 7 == data.source_type && 2 == data.order_type ? orderI18order.orderType_2_7 : data.order_type === ORDERTYPE_UNSUBSCRIBR && isHardWareProductFamily(data.order_product_family) ? this.getI18FromKey('boxProject_retreat_currentStep_4') : orderI18order['orderType_' + data.order_type];
        };
        this.getOrderfkStartTypeNew = function(data) {
            return data.agent_pay_info ? orderI18order['paymentstart_' + data.agent_pay_info.status] : orderI18order.paymentstart_4;
        };
        this.querySubscriptionByMainSubscriptionsIds = function(params) {
            var result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/sublist',
                'params': params,
                'mask': !1,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'repurchase');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'repurchase', this.url);
                        func(xhr, status);
                    };
                }
            });
            return result.then(function() {
                result.$$state.value && result.$$state.value.subscriptions && adapoterBundleFlag(result.$$state.value.subscriptions);
                return result;
            });
        };
        this.getretreatboxinfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscriptions/hardware',
                'params': params,
                'mask': !1,
                'timeout': 6e5,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.modifyAutorenew = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/autorenew?customerId=' + $rootScope.domainId,
                'params': params.groups,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'autorenew');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'autorenew', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.setAutorenew = function(params, enterpriseProjectId) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/autorenew?customerId=' + $rootScope.domainId,
                'params': params.groups,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'autorenew');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'autorenew', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.deleteAutorenew = function(params, enterpriseProjectId) {
            return camel.deleter({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/subscriptions/autorenew?customerId=' + $rootScope.domainId,
                'params': params.groups,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'autorenew');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'autorenew', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.checkSetAutoRenewal = function(data) {
            if (data.instanceInfo && data.instanceInfo.resources && data.instanceInfo.resources.length && 1 == data.instanceInfo.resources[0].supportAutoRenew) return !0;
            return !1;
        };
        this.checkModifyAutoRenewal = function(data) {
            if (data.instanceInfo && data.instanceInfo.resources && data.instanceInfo.resources.length && data.instanceInfo.resources[0].supportAutoRenew && (data.status == SUBSCRIPTIONSTATUS_INFORCE || data.status == SUBSCRIPTIONSTATUS_FREEZE || data.status == SUBSCRIPTIONSTATUS_WAITINGRENEW) && data.expireMode == RESOURCE_EXPIREMODE_AUTORENEW) return !0;
            return !1;
        };
        this.exportrenewlist = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/renewInstances',
                'params': params,
                'timeout': 6e5,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(params.enterPriseProjectId) || _.isUndefined(params.enterPriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterPriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'exportRenewal');
                }
            });
        };
        this.ansyncExportOrderList = function(params, subAccountId) {
            return camel.post({
                'url': window.appWebPath + kongs_name + (subAccountId ? '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/csbordercoreservice/v1/order/order-list-record' : '/rest/cbc/csbordercoreservice/v1/order/order-list-record'),
                'params': params,
                'timeout': 12e4,
                'mask': !0,
                'beforeSend': function(request) {
                    _.isNull(params.enterpriseProjectId) || _.isUndefined(params.enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterpriseProjectId);
                    subAccountId && request.setRequestHeader('X-Sub-Cust-Id', subAccountId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.ansyncExportPpuOrderList = function(params, subAccountId) {
            return camel.post({
                'url': window.appWebPath + kongs_name + (subAccountId ? '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbcorderondemandservice/v1/orders-list-record' : '/rest/cbc/cbcorderondemandservice/v1/orders-list-record'),
                'params': params,
                'timeout': 12e4,
                'mask': !0,
                'beforeSend': function(request) {
                    _.isNull(params.enterpriseProjectId) || _.isUndefined(params.enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterpriseProjectId);
                    subAccountId && request.setRequestHeader('X-Sub-Cust-Id', subAccountId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.ansyncExportRenewalList = function(params) {
            if (params) {
                params.customerId = $rootScope.domainId;
                params.languageType = $rootScope.currentLanguage;
                params.customerName = $rootScope.username;
                params.timeZone = commons.getTimezone();
            } else params = {
                'customerId': $rootScope.domainId,
                'languageType': $rootScope.currentLanguage,
                'customerName': $rootScope.username,
                'timeZone': commons.getTimezone()
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscription/renew-list-record',
                'params': params,
                'timeout': 18e4,
                'mask': !0,
                'beforeSend': function(request) {
                    _.isNull(params.enterpriseProjectId) || _.isUndefined(params.enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterpriseProjectId);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.checkInstanceUnsubscribe = function(data) {
            this.getResourceTypeCode(data.productInstance);
            if (this.checkIsUnbind(data.beId)) return !1;
            if ('hws.service.type.dec' == data.productInstance.cloudServiceType) return !1;
            if (2 == data.cancelFlag && (data.status == SUBSCRIPTIONSTATUS_NOTINFORCE || data.status == SUBSCRIPTIONSTATUS_INFORCE || data.status == SUBSCRIPTIONSTATUS_EXPIRED)) return !0;
            return !1;
        };
        this.getPeriodMode = function(data) {
            return data.chargingMode == POLICY_USAGECHARGE ? i18v1r2.periodType_6 : data.periodType == PERIODTYPE_ONEOFFCHARGE ? i18v1r2.periodType_5 : i18v1r2['billing_mode_' + $.encoder.encodeForHTML(data.periodType)];
        };
        this.isOrderCanBeCancled = function(data) {
            switch (data.status) {
              case 1:
                if (6 != data.sourceType) return !0;
                break;

              case 3:
                if (data.orderType == ORDERTYPE_CYCLETOONDEMAND && 2 == data.orderVersion && 6 != data.sourceType) return !0;
                break;

              case 6:
              case 8:
                return !0;
            }
            return !1;
        };
        this.queryMyResources = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/customer/customerresourceservice/v1/getCustomerResourceStatistics',
                'params': params,
                'timeout': 48e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getDiscountType = function(discountType) {
            if (orderI18v1r2['discountType_' + discountType]) return orderI18v1r2['discountType_' + discountType];
        };
        this.queryUnsubscribe = function(params, projectid) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/unsubscribe/queryOrder',
                'params': params,
                'timeout': 12e4,
                'mask': !0,
                'beforeSend': function(request) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryUnsubscribeOrder = function(params, projectid) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/unsubscribe/order',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'unsubscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'unsubscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.getUnsubscribeReason = function(data) {
            if (i18v1r2['reason_' + data.reason]) return i18v1r2['reason_' + data.reason];
        };
        this.unsubscribeResource = function(params, projectid) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/unsubscribe/resource',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'unsubscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'unsubscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.retreatHardware = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordercoreservice/v1/unsubscribe/hardware',
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'unsubscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'unsubscribe', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.getPeriodList = function(product) {
            var detault_month_periodList, detault_promotion_periodList, default_year_periodList, periodList, periodType_map, periodPromotionList, periodPromotionTips, i, periodValueList, tmp_periodType, j, tmp_value;
            detault_month_periodList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
            detault_promotion_periodList = [ 12 ];
            default_year_periodList = [ 12 ];
            if (-1 < $.inArray($rootScope.domainId, RENEW_WHITELIST)) {
                default_year_periodList = [ 12, 24, 36 ];
                detault_promotion_periodList = [ 12, 24, 36 ];
            }
            periodType_map = [];
            periodPromotionList = [];
            periodPromotionTips = {};
            if ((periodList = product.periods) && 0 < periodList.length) for (i = 0; i < periodList.length; i++) {
                periodValueList = periodList[i].periodValueList;
                tmp_periodType = periodList[i].periodType;
                if (periodValueList && 0 < periodValueList.length) for (j = 0; j < periodValueList.length; j++) {
                    tmp_value = periodValueList[j].value;
                    'YEAR' == tmp_periodType && (tmp_value = tmp_value.mul(12));
                    periodType_map.push(tmp_value);
                    periodType_map = (periodType_map = _.unique(periodType_map)).sort(function(a, b) {
                        return a - b;
                    });
                    if (periodValueList[j].hasPromotion) {
                        periodPromotionList.push(tmp_value);
                        periodPromotionTips[tmp_value] = periodValueList[j].tips;
                    }
                }
            }
            if (!periodType_map.length) {
                product.periodType == NEW_PERIODTYPE_ONMONTH ? periodType_map = detault_month_periodList : product.periodType == NEW_PERIODTYPE_ONYEAR && (periodType_map = default_year_periodList);
                periodPromotionList.length || (periodPromotionList = detault_promotion_periodList);
            }
            product.periodPromotionTips = periodPromotionTips;
            product.periodPromotionList = periodPromotionList;
            product.periodList_map = periodType_map;
            return product;
        };
        this.modifyExpiremode = function(params, projectid) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/modify/expiremode',
                'params': params,
                'timeout': 6e5,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'expiremode');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'expiremode', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.releaseResource = function(params, projectid) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordersubscriptionservice/v2/resource/release',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'release');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'release', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.lockinfo = function(params, hideMask) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbordercoreservice/v1/orders/lockinfo',
                'params': params,
                'timeout': 48e4,
                'mask': !hideMask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.querySolutionInfos = function(tradeNo, epId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/csb-payment-service/v1/trades/{tradeNo}',
                    'o': {
                        'tradeNo': tradeNo
                    }
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    epId && request.setRequestHeader('X-Enterprise-Project-Ids', epId);
                    customerOrderServcieLocal.logRequestParam(setting, 'payment');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'payment', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.querySolutionInstances = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/solutions',
                'params': params,
                'timeout': 18e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getSolutionInfo = function(solutionId) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/csbprodofferingservice/v3/solutions/{id}',
                    'o': {
                        'id': solutionId
                    }
                },
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryTags = function(params, hideMask) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/csbcustomerresourceservice/v1/tags/' + $rootScope.domainId,
                'params': params,
                'timeout': 18e4,
                'mask': !hideMask,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryDeductionDate = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/trade/get-attr',
                'params': params,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.setDeductionDate = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/trade/attr',
                'params': params,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryUniformDate = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/resource/uniformDueDate',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryDatePreference = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-config/get-config',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.setDatePreference = function(params, projectid) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-config/config',
                'params': params,
                'timeout': 48e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'config');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'config', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.changeToperiod = function(params, projectid) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/order/toperiod',
                'params': params,
                'timeout': 48e4,
                'beforeSend': function(request, setting) {
                    _.isNull(projectid) || _.isUndefined(projectid) || request.setRequestHeader('X-Enterprise-Project-Ids', projectid);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'toperiod');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'toperiod', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.subscriptionBatchV3 = function(params, scene) {
            var respTime, result;
            respTime = '';
            return (result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v3/subscriptions/batch?customerId=' + $rootScope.domainId + '&scene=' + scene,
                'params': params,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                if (result.$$state.value) {
                    result.$$state.value.respTime = respTime;
                    adapoterBundleFlag(result.$$state.value);
                }
                return result;
            });
        };
        this.subscriptionBatchRenewV3 = function(params, enterPriseProjectId) {
            var respTime, result;
            respTime = '';
            return (result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v3/subscriptions/batch-renew?customerId=' + $rootScope.domainId,
                'params': params,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    customerOrderServcieLocal.logRequestParam(setting, 'renewal');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'renewal', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                if (result.$$state.value) {
                    result.$$state.value.respTime = respTime;
                    result.$$state.value && adapoterBundleFlag(result.$$state.value);
                }
                return result;
            });
        };
        this.queryAllServices = function(version, param, callback) {
            var obj = publicService;
            $rootScope.allSevices = [];
            $rootScope.serviceTypeSelect = [ {
                'label': orderI18v1r2.consumedetail_servicetype_all,
                'id': '0'
            } ];
            $rootScope.serviceTypeSelect_R2 = [ {
                'label': orderI18v1r2.consumedetail_servicetype_all,
                'id': '0'
            } ];
            return obj.servicetypes(param).then(function(data) {
                var tempArr, i, abbreviation;
                $rootScope.allSevices = [];
                $rootScope.serviceTypeSelect = [ {
                    'label': orderI18v1r2.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                $rootScope.serviceTypeSelect_R2 = [ {
                    'label': orderI18v1r2.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                if (data && 'CBC.0000' == data.error_code && 0 < (tempArr = data.service_types || []).length) for (i = 0; i < tempArr.length; i++) {
                    abbreviation = obj.getAbbreviationTranslate(tempArr[i].abbreviation);
                    (0 == tempArr[i].service_type_version ? $rootScope.serviceTypeSelect_R2 : $rootScope.serviceTypeSelect).push({
                        'serviceDisName': tempArr[i].service_type_display_name,
                        'label': tempArr[i].service_type_display_name + abbreviation,
                        'id': tempArr[i].service_type_code
                    });
                    $rootScope.allSevices[tempArr[i].service_type_code] = tempArr[i].service_type_display_name;
                }
                callback && callback('OPENSTACK' !== version && 'ESC' === version ? $rootScope.serviceTypeSelect_R2 : $rootScope.serviceTypeSelect);
            }).catch(function() {
                callback && callback('ESC' === version ? obj.getProductServierTypeSelectData0('ESC') : obj.getProductServierTypeSelectData0('OPENSTACK'));
            });
        };
        this.queryAllResources = function(version, param, callback) {
            var obj = publicService;
            $rootScope.allResources = [];
            $rootScope.resourceTypeSelect = [ {
                'label': orderI18v1r2.consumedetail_servicetype_all,
                'id': '0'
            } ];
            $rootScope.resourceTypeSelect_R2 = [ {
                'label': orderI18v1r2.consumedetail_servicetype_all,
                'id': '0'
            } ];
            return obj.resourcetypes(param).then(function(data) {
                var tempResource, r;
                if (data && 'CBC.0000' == data.error_code && 0 < (tempResource = data.resource_types || []).length) for (r = 0; r < tempResource.length; r++) {
                    (0 == tempResource[r].resource_type_version ? $rootScope.resourceTypeSelect_R2 : $rootScope.resourceTypeSelect).push({
                        'label': $.encoder.encodeForHTML(tempResource[r].resource_type_display_name),
                        'id': tempResource[r].resource_type_code
                    });
                    $rootScope.allResources[tempResource[r].resource_type_code] = tempResource[r].resource_type_display_name;
                }
                callback && callback('OPENSTACK' === version ? $rootScope.resourceTypeSelect : 'ESC' === version ? $rootScope.resourceTypeSelect_R2 : $rootScope.allResources);
            }).catch(function() {
                callback && callback('ESC' === version ? obj.getResourceTypeSelectData0('ESC') : obj.getResourceTypeSelectData0('OPENSTACK'));
            });
        };
        this.subscriptionBatchToOndemandV3 = function(params) {
            var respTime, result;
            respTime = '';
            return (result = camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v3/subscriptions/batch-to-ondemand?customerId=' + $rootScope.domainId,
                'params': params,
                'timeout': 6e5,
                'beforeSend': function(request, setting) {
                    var func = setting.complete;
                    customerOrderServcieLocal.logRequestParam(setting, 'ondemand');
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'ondemand', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function() {
                if (result.$$state.value) {
                    result.$$state.value.respTime = respTime;
                    result.$$state.value && adapoterBundleFlag(result.$$state.value);
                }
                return result;
            });
        };
        this.queryOrderDiscountInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbpromotionproductservice/v1/openapi/plans/discount',
                'params': params,
                'timeout': 48e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getProductInformationHtml = function(row) {
            var informationTemplate = '<span style="display: inline-block; white-space: normal" class="inline-label">' + orderI18v1r2.table_productClass + '</span><span  class="inline-content">{cloudServiceTypeStr}</span><br/><span style="display: inline-block; white-space: normal" class="inline-label">' + orderI18order.operationTitle.spec + '</span><span  class="inline-content">{productSpecDesc}</span><br/><span style="display: inline-block; white-space: normal" class="inline-label">' + orderI18v1r2.table_datacenterName + '</span><span class="inline-content">{regionName}</span><br/>';
            return utilService.i18nReplace(informationTemplate, {
                'cloudServiceTypeStr': row.cloudServiceTypeStr,
                'productSpecDesc': row.productSpecDesc,
                'regionName': row.regionName
            });
        };
        this.dealWithTableShow = function(subscription, commonService, publicService, responseTime, typeFlag) {
            var resourceId, resourceName, cloudServiceType, extendParams_obj, productMode, resourceTypeCode;
            cloudServiceType = resourceName = resourceId = resourceTypeCode = null;
            try {
                productMode = (extendParams_obj = angular.fromJson(subscription.productInstance.extendParams)) ? extendParams_obj.productMode : 0;
            } catch (e) {}
            subscription.defaultPeriodType = subscription.periodType;
            subscription.productMode = productMode;
            subscription.beName && i18v1r2['beName_' + subscription.beName] && (subscription.beName = i18v1r2['beName_' + subscription.beName]);
            subscription.subscribeSource = {};
            subscription.subscribeSource.customerOrderId = subscription.customerOrderId;
            subscription.instanceInfo = {};
            subscription.instanceInfo.resources = subscription.resources;
            cloudServiceType = subscription.productInstance && subscription.productInstance.cloudServiceType ? subscription.productInstance.cloudServiceType : null;
            if (subscription.resources && 0 < subscription.resources.length) {
                resourceTypeCode = subscription.resources[0].resourceTypeCode;
                cloudServiceType = subscription.resources[0].cloudServiceType;
                resourceId = $.encoder.encodeForHTML(subscription.resources[0].resourceId);
                resourceName = $.encoder.encodeForHTML(subscription.resources[0].resourceName);
                subscription.regionId = subscription.resources[0].regionId;
                subscription.tenantId = subscription.resources[0].tenantId;
            }
            subscription.regionCode = subscription.regionId;
            subscription.regionName = '--';
            $rootScope.regionCodeListCache && $rootScope.regionCodeListCache[subscription.regionId] && (subscription.regionName = $rootScope.regionCodeListCache[subscription.regionId].regionName);
            resourceTypeCode || subscription.productInstance && subscription.productInstance.productSpecInstance && subscription.productInstance.productSpecInstance.resourceSpecInstances[0] && subscription.productInstance.productSpecInstance.resourceSpecInstances[0].resourceTypeCode && (resourceTypeCode = subscription.productInstance.productSpecInstance.resourceSpecInstances[0].resourceTypeCode);
            subscription.resourceTypeCode = resourceTypeCode;
            subscription.cloudServiceType = cloudServiceType;
            subscription.cloudServiceTypeStr = commons.decodeHtml(publicService.getCloudServerName(cloudServiceType));
            subscription.productSpecDesc = this.getProductSpecBySubscription(subscription);
            subscription.resourceId = resourceId;
            subscription.resourceName = resourceName;
            subscription.nextExpireTime = subscription.expireTime;
            subscription.mainSubscriptionId = subscription.displayRootSubscriptionId;
            subscription.time_str = subscription.expireTime ? $filter('csbFormatDate')(subscription.expireTime, 'csbTime') : '--';
            subscription.mOriginalExpireTimeHmtl = subscription.expireTime ? commonService.orderFormatTime(subscription.expireTime, 'dual_line') : '--';
            0 < (extendParams_obj = Math.ceil(commonService.getDuration(subscription.expireTime, new Date()))) && (subscription.mExpireDays = utilService.i18nReplace(orderI18order.expired_n_days, {
                '0': commonService.getI18nDaysStr(extendParams_obj)
            }));
            subscription.orderId = subscription.subscribeSource && subscription.subscribeSource.customerOrderId;
            subscription.subscriptionStatus = commonService.getSubscriptionStatus(subscription);
            subscription.resName = '--';
            if (subscription.resourceName) {
                subscription.resName = $.encoder.encodeForHTML(subscription.resourceName);
                subscription.resName = commons.decodeHtml(subscription.resName);
            }
            subscription.resId = '--';
            subscription.resourceId && (subscription.resId = $.encoder.encodeForHTML(subscription.resourceId));
            subscription.name = subscription.productInstance && subscription.productInstance.name ? subscription.productInstance.name : '--';
            '--' == subscription.resName && '--' == subscription.resId && (subscription.resName = $.encoder.encodeForHTML(subscription.name));
            subscription.autoRenewal = i18v1r2.unopen;
            3 == subscription.expireMode && subscription.autoRenewPeriodNum && subscription.autoRenewPeriodType && (subscription.autoRenewal = utilService.i18nReplace(i18v1r2['unit_periodType_' + subscription.autoRenewPeriodType], {
                '1': subscription.autoRenewPeriodNum
            }));
            if ($rootScope.partyRight) {
                subscription.partyPath = subscription.partyBriefInfo ? subscription.partyBriefInfo.partyPath : '--';
                subscription.projectName = subscription.partyBriefInfo ? subscription.partyBriefInfo.projectName : '--';
            }
            productMode = commonService.getRemainTimeShow(subscription, responseTime, 1);
            subscription.tip = productMode.tip;
            subscription.linktip = productMode.linktip;
            subscription.content = this.encoderForTiTip(productMode.content);
            subscription.color = productMode.color;
            subscription.mProductInformationHtml = customerOrderServcieLocal.getProductInformationHtml(subscription);
            productMode.tip && (subscription.tipmodel = {
                'content': this.encoderForTiTip(productMode.delete_tip),
                'position': 'right',
                'hideEffect': {
                    'duration': 100
                },
                'showEffect': {
                    'duration': 100
                }
            });
            subscription.tooltip = {
                'content': '',
                'position': 'top-left',
                'hideEffect': {
                    'duration': 100
                },
                'showEffect': {
                    'duration': 100
                },
                'show': !1
            };
            if (!subscription.isAble) {
                resourceTypeCode = '';
                (resourceTypeCode = typeFlag ? this.orderCanNotChangeReason(subscription) : this.orderCanNotRenewReason(subscription)) && (subscription.tooltip.content = resourceTypeCode);
            }
            return subscription;
        };
        this.getRatingSinglePrice = function(ratingResult) {
            var singlePrice, price;
            singlePrice = 0;
            if (ratingResult && ratingResult.extendParams) try {
                singlePrice = JSON.parse(ratingResult.extendParams).singleSubscriptionAmount;
            } catch (e) {} else {
                singlePrice = price = commons.currencyUnitConversion(ratingResult.amount, ratingResult.measureId);
                1 <= ratingResult.subscriptionNum && (singlePrice = price.div(ratingResult.subscriptionNum));
            }
            return singlePrice;
        };
        this.dealWithRenewQueryResult = function(subscriptions, singleSubPriceMap, dimensionMap, subscribeExpireTimeMap, isChecked, isUniformDueDate, commonService, periodInfo, compensationDaysMap) {
            var i, subscription, subscriptionId, tmpRenewExpireTime, firstLineItemId, price_for_table;
            for (i = 0; i < subscriptions.length; i++) {
                subscriptionId = (subscription = subscriptions[i]).subscriptionId;
                firstLineItemId = subscription.firstLineItemId;
                subscription.mRenewPeriodStr = '--';
                subscription.renewExpireTimeHtml = '';
                subscription.renewExpireDateHtml = '--';
                subscription.mCopensationTimeStr = '';
                subscription.price_for_table = '--';
                if (isChecked[subscriptionId] && subscription.isAble) {
                    subscription.mRenewPeriodStr = customerOrderServcieLocal.getPeriodTypeNum(periodInfo);
                    tmpRenewExpireTime = commonService.calcExpireDateByTypeNum(subscription.renewStartTime, periodInfo.periodType, periodInfo.periodNum);
                    subscription.renewExpireDateHtml = commonService.orderFormatTime(tmpRenewExpireTime, 'date');
                    subscription.renewExpireTimeHtml = commonService.orderFormatTime(tmpRenewExpireTime, 'time');
                    subscription.mCopensationTimeStr = '';
                    if (isUniformDueDate) {
                        subscription.renewExpireTimeHtml = commonService.orderFormatTime(subscribeExpireTimeMap[firstLineItemId], 'date');
                        subscription.renewExpireDateHtml = commonService.orderFormatTime(subscribeExpireTimeMap[firstLineItemId], 'date');
                        subscription.renewExpireTimeHtml = commonService.orderFormatTime(subscribeExpireTimeMap[firstLineItemId], 'time');
                        tmpRenewExpireTime = commonService.getDuration(tmpRenewExpireTime, subscribeExpireTimeMap[firstLineItemId]);
                        tmpRenewExpireTime = compensationDaysMap[firstLineItemId] || tmpRenewExpireTime;
                        subscription.mCopensationTimeStr = 0 < tmpRenewExpireTime ? commonService.getI18nDaysStr(tmpRenewExpireTime) : '';
                    }
                    firstLineItemId = dimensionMap[subscriptionId] || [ subscriptionId ];
                    price_for_table = 0;
                    _.each(firstLineItemId, function(item) {
                        singleSubPriceMap && singleSubPriceMap[item] && (price_for_table = price_for_table.add(singleSubPriceMap[item]));
                    });
                    subscription.price_for_table = format_curreny(G_currencySymbol, $filter('csb_number')(price_for_table, 2));
                }
            }
            return subscriptions;
        };
        this.queryUnsubscriptions2 = function(params, unsubType) {
            var respTime, url, result;
            respTime = '';
            url = window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v3/subscriptions/batch-unsubscribe?customerId=' + $rootScope.domainId;
            return (result = camel.post({
                'url': url = unsubType ? url + '&unsubType=' + unsubType : url,
                'params': params,
                'timeout': 18e4,
                'mask': !1,
                'beforeSend': function(request, setting) {
                    customerOrderServcieLocal.logRequestParam(setting, 'batch-unsubscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'batch-unsubscribe', this.url);
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                            (isNaN(respTime.getTime()) || respTime.getTime() < 1517378740148) && (respTime = new Date());
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            })).then(function(data) {
                result.$$state.value.respTime = respTime;
                return result;
            });
        };
        this.validateSalerInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/marketplace/tenant/validateSalerInfo',
                'params': params,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.partnerCheck = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcpartneradapterservice/v1/partner-program/check',
                'params': params,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getHistroyDetail = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbbillingfreeresourceservice/v1/freeresources/his',
                'params': params,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getCardInfoByOrderId = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbpromotionbenefitservice/v1/storedvaluecard/usercards',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getEnterpriseProjects = function(param) {
            return camel.get({
                'url': window.appWebPath + '/rest/eps/v1.0/enterprise-projects',
                'params': param,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('EndPoint-Scope', 'global');
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                },
                'mask': !1
            });
        };
        this.getRenewalDiscounts = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csborderbusinessmgrservice/v1/available-discounts',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getRenewalDiscountsnew = function(param) {
            $rootScope.order_trade_infos && (param.tradeInfos = $rootScope.order_trade_infos);
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbbillingratingservice/v2/inquiry/period_resource_renew',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getOndemandToPeriodDiscount = function(param) {
            $rootScope.order_trade_infos && (param.tradeInfos = $rootScope.order_trade_infos);
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbbillingratingservice/v2/inquiry/ondemand_to_period_resource',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryretreatGoodsList = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscriptions/hardware',
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.retreatBtnDisabledControl = function(isRetreatUsingRes, isHasCommission, resCheck, commissionCheck) {
            return !!(!commissionCheck && isHasCommission || !resCheck && isRetreatUsingRes);
        };
        this.queryretreatGoodsListUseOrderCore = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordercoreservice/v1/queryHardwareItemList',
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryretreatDetail = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/ordercoreservice/v1/postal-address/batchQuery',
                'timeout': 6e4,
                'params': params,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        0;
        this.removeCannotRenewalSubscriptions = function(subscriptionsList, subscriptions_map) {
            return subscriptionsList.filter(function(item) {
                return !(item.mainSubscriptionIds && 0 < item.mainSubscriptionIds.length && 1 === item.relativeType && !subscriptions_map[item.mainSubscriptionIds[0]].isAble);
            });
        };
        this.getQueryRenewDiscountParam = function(params, subscriptions, uniformDueDate, duplicateSubscriptionKeyMap) {
            var getProductHash, getProductIndex, temp_params, subscriptionsMap, i, dicount_params, productInfos, productIndexMap, productInfo, tmpSubscription;
            getProductHash = function(product) {
                return [ product.productId, product.periodNum, product.perioType, product.resourceSize || '', product.resouceSpecCode || '', product.periodEndDate || '', product.periodStartDate ].join('|');
            };
            getProductIndex = function(product, productIndexMap) {
                product = getProductHash(product);
                return productIndexMap[product] || 0 === productIndexMap[product] ? productIndexMap[product] : -1;
            };
            temp_params = angular.copy(params.productInstances);
            if (!subscriptions || 0 === subscriptions.length || !subscriptions[0].resources || !subscriptions[0].resources[0].tenantId) return null;
            subscriptionsMap = {};
            for (i in subscriptions) {
                if (!subscriptions[i].resources || subscriptions[i].resources.length <= 0) continue;
                subscriptionsMap[subscriptions[i].id] = subscriptions[i];
            }
            dicount_params = {
                'tenantId': subscriptions[0].resources[0].tenantId,
                'orderType': 'RENEW',
                'orderSubType': 'RENEW',
                'inquiryTime': null,
                'inquiryPrecision': null,
                'cloudServices': [ {
                    'orderRequestId': 'orderRequest_' + Math.ceil(1e6 * this.getSafeRandomNum()),
                    'uniformDueDate': uniformDueDate
                } ]
            };
            productInfos = [];
            productIndexMap = {};
            for (i = 0; i < temp_params.length; i++) {
                if (!temp_params[i].customerProductInfo) continue;
                temp_params[i].customerProductInfo = angular.fromJson(temp_params[i].customerProductInfo);
                temp_params[i].customerProductInfo.isUniformDueDate && (dicount_params.orderSubType = 'RENEW_DATE');
                if (subscriptionsMap[temp_params[i].id]) {
                    tmpSubscription = subscriptionsMap[temp_params[i].id];
                    temp_params[i].customerProductInfo.cloudServiceType = tmpSubscription.resources[0].cloudServiceType;
                    temp_params[i].customerProductInfo.resourceType = tmpSubscription.resources[0].resourceTypeCode;
                    temp_params[i].customerProductInfo.resourceSpecCode = tmpSubscription.resources[0].resourceSpecCode;
                }
                20 == temp_params[i].customerProductInfo.periodType ? temp_params[i].customerProductInfo.periodType = 2 : 19 == temp_params[i].customerProductInfo.periodType && (temp_params[i].customerProductInfo.periodType = 3);
                temp_params[i].customerProductInfo.resourceSpecSize || (temp_params[i].customerProductInfo.resourceSize = null);
                temp_params[i].customerProductInfo.resourceSpecSizeMeasure || (temp_params[i].customerProductInfo.resourceSizeMeasureId = null);
                if ((tmpSubscription = -1) != (tmpSubscription = getProductIndex(productInfo = {
                    'id': temp_params[i].id,
                    'productId': temp_params[i].productId,
                    'regionId': temp_params[i].customerProductInfo.regionCode,
                    'avaliableZoneId': null,
                    'chargingMode': 0,
                    'cloudServiceType': temp_params[i].customerProductInfo.cloudServiceType,
                    'resourceType': temp_params[i].customerProductInfo.resourceType,
                    'resourceSpecCode': temp_params[i].customerProductInfo.resourceSpecCode,
                    'resourceSize': temp_params[i].customerProductInfo.resourceSpecSize,
                    'resourceSizeMeasureId': temp_params[i].customerProductInfo.resourceSpecSizeMeasure,
                    'skuCode': null,
                    'productNum': null,
                    'periodType': temp_params[i].customerProductInfo.isUniformDueDate ? 5 : temp_params[i].customerProductInfo.periodType,
                    'periodNum': temp_params[i].customerProductInfo.periodNum,
                    'periodEndDate': temp_params[i].customerProductInfo.subscribeExpireTime,
                    'periodStartDate': temp_params[i].customerProductInfo.subscribeEffectiveTime,
                    'relativeResourceId': null,
                    'relativeResourcePeriodType': temp_params[i].customerProductInfo.isUniformDueDate ? temp_params[i].customerProductInfo.periodType : temp_params[i].customerProductInfo.relativeResourcePeriodType,
                    'subscriptionNum': 1,
                    'extendParams': null
                }, productIndexMap))) {
                    productInfos[tmpSubscription].subscriptionNum = productInfos[tmpSubscription].subscriptionNum + 1;
                    duplicateSubscriptionKeyMap[productInfos[tmpSubscription].id].push(productInfo.id);
                } else {
                    duplicateSubscriptionKeyMap[productInfo.id] = [ productInfo.id ];
                    productInfos.push(productInfo);
                    productIndexMap[getProductHash(productInfo)] = productInfos.length - 1;
                }
            }
            dicount_params.cloudServices[0].productInfos = productInfos;
            return dicount_params;
        };
        this.initSmartRecommends = function(channelId, eventCategory, orderIds, serviceTypes) {
            var activityDiv, script, currentLanguage;
            activityDiv = document.getElementById('portal-smart-recommends-container');
            (script = document.createElement('script')).type = 'text/javascript';
            (currentLanguage = window.urlParams.lang) && '' != currentLanguage || (currentLanguage = 'zh-cn');
            script.src = ORDER_URL_CONFIG.BANNER_SCRIPT_LINK_zh_cn;
            'en-us' == currentLanguage && (script.src = ORDER_URL_CONFIG.BANNER_SCRIPT_LINK_en_us);
            script.onload = function() {
                window.portalSmartRecommends && window.portalSmartRecommends.render({
                    'userId': window.domainId,
                    'channelId': channelId,
                    'eventCategory': eventCategory,
                    'serviceTypeCodes': serviceTypes,
                    'orderIds': orderIds
                });
            };
            activityDiv && activityDiv.appendChild(script);
        };
        this.initSmartRecommendsV2 = function(advPage, comp, serviceTypes, excludeType) {
            var activityDiv, script;
            activityDiv = document.getElementById('adDiv');
            (script = document.createElement('script')).type = 'text/javascript';
            script.src = ORDER_URL_CONFIG.PAYSUCCESS_AND_RETREATSUCCESS_BANNER_LINK_HEAD + '?pos=' + ORDER_URL_CONFIG[advPage] + '&comp=' + comp + '&containerId=adDiv&extParam.contentIds=' + serviceTypes + '&extParam.excludeType=' + excludeType;
            activityDiv && activityDiv.appendChild(script);
        };
        this.getQueryToPeriodDiscountParam = function(products, tenantId) {
            var productInfos, i, customerProductInfo, productInstance;
            productInfos = [];
            for (i = 0; i < products.length; i++) {
                productInstance = products[i];
                customerProductInfo = {};
                try {
                    customerProductInfo = angular.fromJson(productInstance.customerProductInfo);
                } catch (e) {}
                productInstance = {
                    'id': productInstance.mResourceId,
                    'productId': productInstance.productId,
                    'regionId': productInstance.mRegionCode,
                    'avaliableZoneId': null,
                    'chargingMode': 0,
                    'cloudServiceType': productInstance.mCloudServiceType,
                    'resourceType': productInstance.mResourceType,
                    'resourceSpecCode': productInstance.mResourceSpecCode,
                    'resourceSize': customerProductInfo.resourceSpecSize || null,
                    'resourceSizeMeasureId': customerProductInfo.resourceSpecSizeMeasure || null,
                    'skuCode': null,
                    'productNum': null,
                    'periodType': function(newPeriodType) {
                        if (newPeriodType == NEW_PERIODTYPE_ONYEAR) return PERIODTYPE_ONYEAR;
                        if (newPeriodType == NEW_PERIODTYPE_ONMONTH) return PERIODTYPE_ONMONTH;
                        return newPeriodType;
                    }(customerProductInfo.periodType),
                    'periodNum': customerProductInfo.periodNum,
                    'periodEndDate': customerProductInfo.subscribeExpireTime,
                    'periodStartDate': customerProductInfo.subscribeEffectiveTime,
                    'relativeResourceId': null,
                    'relativeResourcePeriodType': null,
                    'subscriptionNum': 1,
                    'extendParams': null
                };
                productInfos.push(productInstance);
            }
            return {
                'tenantId': tenantId,
                'orderType': 'TO_PERIOD',
                'orderSubType': 'TO_PERIOD',
                'inquiryTime': null,
                'inquiryPrecision': null,
                'cloudServices': [ {
                    'orderRequestId': 'orderRequest_' + Math.ceil(1e6 * this.getSafeRandomNum()),
                    'productInfos': productInfos
                } ]
            };
        };
        this.getSingleProductPrice = function(ratingResult) {
            var singlePrice;
            singlePrice = 0;
            try {
                singlePrice = JSON.parse(ratingResult.extendParams).singleSubscriptionAmount;
            } catch (e) {}
            return singlePrice;
        };
        (that = this).getRatingResultMap = function(officialWebsiteRatingResult) {
            var ratingResultMap = {};
            officialWebsiteRatingResult.productRatingResults && officialWebsiteRatingResult.productRatingResults.length && _.each(officialWebsiteRatingResult.productRatingResults, function(ratingResult) {
                ratingResultMap[ratingResult.id] = that.getSingleProductPrice(ratingResult);
            });
            return ratingResultMap;
        };
        this.getofficialSelectedDiscounts = function(officialWebsiteRatingResult, dicount_params, publicService) {
            var productPrice, discountParamWithAmount, i, j, ArrTemp, flag, temp_selectedDiscounts;
            productPrice = officialWebsiteRatingResult.productRatingResults;
            discountParamWithAmount = angular.copy(dicount_params.cloudServices[0].productInfos);
            for (i = 0; i < productPrice.length; i++) for (j = 0; j < discountParamWithAmount.length; j++) discountParamWithAmount[j].productId == productPrice[i].productId && (discountParamWithAmount[j].discountAmount = productPrice[i].discountAmount);
            for (i = 0; i < discountParamWithAmount.length; i++) discountParamWithAmount[i].cloudServiceTypeStr = publicService.getCloudServerName(discountParamWithAmount[i].cloudServiceType);
            ArrTemp = [];
            for (i = 0; i < discountParamWithAmount.length; i++) {
                flag = !0;
                for (j = 0; j < ArrTemp.length; j++) if (ArrTemp[j].cloudServiceType == discountParamWithAmount[i].cloudServiceType) {
                    ArrTemp[j].discountAmount = ArrTemp[j].discountAmount.add(discountParamWithAmount[i].discountAmount);
                    flag = !1;
                }
                flag && ArrTemp.push(discountParamWithAmount[i]);
            }
            temp_selectedDiscounts = [];
            for (i = 0; i < ArrTemp.length; i++) 0 < ArrTemp[i].discountAmount && temp_selectedDiscounts.push({
                'label': ArrTemp[i].cloudServiceTypeStr,
                'num': Number(ArrTemp[i].discountAmount)
            });
            return temp_selectedDiscounts;
        };
        this.getAvailableDiscounts = function(DiscountResult, availableDiscountsMap) {
            var temp_availableDiscounts, i, discountValue, ttavailableDiscounts;
            temp_availableDiscounts = [];
            for (i = 0; i < DiscountResult.length; i++) {
                discountValue = '';
                if (DiscountResult[i].optionalDiscountAmount <= 0) continue;
                if (DiscountResult[i].discountRatio && 1 == DiscountResult[i].sameRatioFlag) {
                    discountValue = commons.discountValue(DiscountResult[i].discountRatio, $rootScope.currentLanguage);
                    'en-us' == $rootScope.currentLanguage || 'en_US' == $rootScope.currentLanguage ? discountValue += '% Off' : discountValue += i18v1r2.couponsView_discount;
                }
                if (605 == DiscountResult[i].discountType || 606 == DiscountResult[i].discountType) {
                    DiscountResult[i].planType = 2;
                    ttavailableDiscounts = {
                        'label': $.encoder.encodeForHTML(DiscountResult[i].discountName + ' ' + discountValue),
                        'id': DiscountResult[i].discountId,
                        'isRecommend': DiscountResult[i].bestOffer,
                        'num': DiscountResult[i].optionalDiscountAmount,
                        'planType': '2',
                        'type': 0,
                        'promotionInfo': DiscountResult[i].promotionInfo
                    };
                } else if (607 == DiscountResult[i].discountType) {
                    DiscountResult[i].planType = 3;
                    ttavailableDiscounts = {
                        'label': $.encoder.encodeForHTML(DiscountResult[i].discountName + ' ' + discountValue),
                        'id': DiscountResult[i].discountId,
                        'isRecommend': DiscountResult[i].bestOffer,
                        'num': Number(DiscountResult[i].optionalDiscountAmount),
                        'planType': '3',
                        'type': 1,
                        'promotionInfo': DiscountResult[i].promotionInfo
                    };
                } else {
                    if (700 != DiscountResult[i].discountType) continue;
                    DiscountResult[i].planType = 4;
                    ttavailableDiscounts = {
                        'label': $.encoder.encodeForHTML(DiscountResult[i].discountName + ' ' + discountValue),
                        'id': DiscountResult[i].discountId,
                        'isRecommend': DiscountResult[i].bestOffer,
                        'num': Number(DiscountResult[i].optionalDiscountAmount),
                        'planType': '4',
                        'promotionInfo': DiscountResult[i].promotionInfo
                    };
                }
                DiscountResult[i].id = DiscountResult[i].discountId;
                availableDiscountsMap[ttavailableDiscounts.id] = DiscountResult[i];
                1 == DiscountResult[i].bestOffer ? temp_availableDiscounts.unshift(ttavailableDiscounts) : temp_availableDiscounts.push(ttavailableDiscounts);
            }
            return temp_availableDiscounts;
        };
        this.getUnsubResReason = function(reasons, type, isDetail) {
            var tip, arr;
            tip = '';
            if (reasons) {
                arr = reasons.split(';');
                if (!isDetail) {
                    1 == type && (tip = orderI18order.retreat.unsub_reason_resource_tip);
                    2 == type && (tip = orderI18order.retreat.unsub_reason_renew_tip);
                    tip += '<br/>';
                }
                1 < arr.length ? angular.forEach(arr, function(reason, index) {
                    tip += index + 1 + '.' + $.encoder.encodeForHTML(reason) + '<br/>';
                }) : tip += $.encoder.encodeForHTML(reasons);
            }
            return tip;
        };
        this.getSubscriptionsReason = function(subscriptions, _status, actionType) {
            var reason, i, lockOrderHref;
            reason = [];
            for (i = 0; i < subscriptions.length; i++) {
                if (subscriptions[i].unenableUnsubResReason && '1' == actionType) {
                    lockOrderHref = this.getLockedOrderHref(subscriptions[i].lockOrderId, _status);
                    reason.push(subscriptions[i].resName + ' : ' + subscriptions[i].unenableUnsubResReason + lockOrderHref);
                }
                if (subscriptions[i].unenableUnsubRenewReason && '2' == actionType) {
                    lockOrderHref = this.getLockedOrderHref(subscriptions[i].lockOrderId, _status);
                    reason.push(subscriptions[i].resName + ' : ' + subscriptions[i].unenableUnsubRenewReason + lockOrderHref);
                }
            }
            if (1 < reason.length) for (i = 0; i < reason.length; i++) reason[i] = i + 1 + '. ' + reason[i];
            return reason.join('<br />');
        };
        this.getdimensionMap = function(arr, dimensionMap) {
            var reArr, i, dearr;
            reArr = [];
            for (i = 0; i < arr.length; i++) {
                dearr = dimensionMap[arr[i]];
                reArr = reArr.concat(dearr);
            }
            return reArr;
        };
        this.dealWithDisable = function(srcData, dimensionMap, actionType, _status) {
            var i, cannotArr;
            for (i = 0; i < srcData.length; i++) if (!(cannotArr = []) === srcData[i].unsubResource || !1 === srcData[i].unsubRenew) {
                cannotArr = 2 === srcData[i].relativeType && srcData[i].mainSubscriptionIds && 0 < srcData[i].mainSubscriptionIds.length ? this.getdimensionMap(srcData[i].mainSubscriptionIds.concat(srcData[i].subscriptionId), dimensionMap) : this.getdimensionMap([ srcData[i].subscriptionId ], dimensionMap);
                srcData = this.getSetOff(srcData, cannotArr, actionType, _status);
            }
            return srcData;
        };
        this.getLockedOrderHref = function(orderId, _status) {
            var orderIdArr, temp, curAllOrderIdArr;
            orderIdArr = orderId ? orderId.split(';') : [];
            orderId = orderI18order.retreat.locked_order_Id;
            if (0 < orderIdArr.length) {
                curAllOrderIdArr = temp = '';
                orderIdArr.forEach(function(val, index) {
                    temp = '<a href=\'#/userindex/myOrder?orderIdFuzzy={1}&selectAll=1\' target=\'_blank\'>{1}</a>';
                    (_status.projectid || _status.projectname) && (temp = '<a href=\'#/enterpriseProjectIndex/myOrder?orderIdFuzzy={1}&selectAll=1&&projectid=' + _status.projectid + '&projectname=' + _status.projectname + '\' target=\'_blank\'>{1}</a>');
                    curAllOrderIdArr += utilService.i18nReplace(temp, {
                        '1': $.encoder.encodeForHTML(val)
                    }) + (index === orderIdArr.length - 1 ? '' : ',');
                });
                orderId += curAllOrderIdArr;
            } else orderId = '';
            return orderId;
        };
        this.getSetOff = function(srcData, connotArr, actionType, _status) {
            var reason, mainId, i, j, lockOrderHref, str, k;
            reason = [];
            mainId = null;
            for (i = 0; i < connotArr.length; i++) for (j = 0; j < srcData.length; j++) if (connotArr[i] === srcData[j].subscriptionId) {
                srcData[j].setOff = !0;
                if (srcData[j].unenableUnsubResReason && '1' == actionType) {
                    lockOrderHref = this.getLockedOrderHref(srcData[j].lockOrderId, _status);
                    reason.push($.encoder.encodeForHTML(srcData[j].resName) + ' : ' + $.encoder.encodeForHTML(srcData[j].unenableUnsubResReason) + lockOrderHref);
                }
                if (srcData[j].unenableUnsubRenewReason && '2' == actionType) {
                    lockOrderHref = this.getLockedOrderHref(srcData[j].lockOrderId, _status);
                    reason.push($.encoder.encodeForHTML(srcData[j].resName) + ' : ' + $.encoder.encodeForHTML(srcData[j].unenableUnsubRenewReason) + lockOrderHref);
                }
                (srcData[j].mainSubscriptionIds && 0 == srcData[j].mainSubscriptionIds.length || 0 === srcData[j].relativeType && 0 < srcData[j].mainSubscriptionIds.length) && (mainId = srcData[j].subscriptionId);
            }
            if (1 < reason.length) for (i = 0; i < reason.length; i++) reason[i] = i + 1 + '. ' + reason[i];
            reason.unshift('2' == actionType ? orderI18order.retreat.unsub_reason_renew_tip : orderI18order.retreat.unsub_reason_resource_tip);
            str = reason.join('<br />');
            for (k = 0; k < srcData.length; k++) srcData[k].subscriptionId != mainId || srcData[k].canNotRetreatTips.content || (srcData[k].canNotRetreatTips.content = str);
            return srcData;
        };
        this.dealWithCannotRetreat = function(actionType, srcData, checkList, dimensionMap, commonService) {
            for (var i = 0; i < srcData.length; i++) (1 == actionType && !1 === srcData[i].unsubResource || 2 == actionType && !1 === srcData[i].unsubRenew) && (checkList = 2 === srcData[i].relativeType && srcData[i].mainSubscriptionIds && 0 < srcData[i].mainSubscriptionIds.length ? commonService.listSub(checkList, this.getdimensionMap(srcData[i].mainSubscriptionIds.concat(srcData[i].subscriptionId), dimensionMap)) : commonService.listSub(checkList, this.getdimensionMap([ srcData[i].subscriptionId ], dimensionMap)));
            return checkList;
        };
        this.delwithtips = function(cardCouponRecordList, comefromEnter) {
            var moneyTipeArrs = [];
            angular.forEach(cardCouponRecordList, function(item) {
                var isHaveFlag, i, click_url, tem_name, tem_money, moneyTip;
                isHaveFlag = !1;
                for (i = 0; i < moneyTipeArrs.length; i++) if (moneyTipeArrs[i].type == item.type) {
                    isHaveFlag = !0;
                    303 == item.type ? click_url = '#/userindex/storedCardDetail?storedCardID=' + item.id : 301 == item.type ? click_url = '#/userindex/couponDetail?mycouponId=' + item.id + '&isQueryRecyledCoupon=1' : 302 == item.type && (click_url = '#/userindex/cashCouponDetail?mycouponId=' + item.id + '&isQueryRecyledCoupon=1');
                    click_url = comefromEnter ? 'javascript:void(0)' : click_url;
                    tem_name = item.name || item.id;
                    if (item.amount) {
                        tem_money = format_curreny(G_currencySymbol, $filter('csb_number')(Math.abs(item.amount), 2));
                        moneyTipeArrs[i].content += '<p class=\'tip_padding\'><span class=\'tip_margin_right\'><a class=\'cardCouponTipColor\' href=' + click_url + '>' + tem_name + '</a></span><span class=\'float_right_tips\'>' + tem_money + '</span></p>';
                    } else moneyTipeArrs[i].content += '<p class=\'tip_padding\'><a class=\'cardCouponTipColor\' href=' + click_url + '>' + tem_name + '</a></p>';
                }
                if (!isHaveFlag) {
                    moneyTip = {
                        'content': '',
                        'realcontent': '',
                        'position': 'top-right',
                        'hideEffect': {
                            'duration': 100
                        },
                        'showEffect': {
                            'duration': 100
                        },
                        'maxWidth': '800px',
                        'type': item.type,
                        'currentMoney': Math.abs(item.amount)
                    };
                    303 == item.type ? click_url = '#/userindex/storedCardDetail?storedCardID=' + $.encoder.encodeForHTML(item.id) : 301 == item.type ? click_url = '#/userindex/couponDetail?mycouponId=' + $.encoder.encodeForHTML(item.id) + '&isQueryRecyledCoupon=1' : 302 == item.type && (click_url = '#/userindex/cashCouponDetail?mycouponId=' + $.encoder.encodeForHTML(item.id) + '&isQueryRecyledCoupon=1');
                    click_url = comefromEnter ? 'javascript:void(0)' : click_url;
                    tem_name = item.name ? $.encoder.encodeForHTML(item.name) : $.encoder.encodeForHTML(item.id);
                    if (item.amount) {
                        tem_money = format_curreny(G_currencySymbol, $filter('csb_number')(Math.abs($.encoder.encodeForHTML(item.amount)), 2));
                        moneyTip.content = customerOrderServcieLocal.encoderForTiTip('<p class=\'tip_padding\'><span class=\'tip_margin_right\'><a class=\'cardCouponTipColor\' href=' + click_url + '>' + tem_name + '</a></span><span class=\'float_right_tips\'>' + tem_money + '</span></p>');
                    } else moneyTip.content = customerOrderServcieLocal.encoderForTiTip('<p class=\'tip_padding\'><a class=\'cardCouponTipColor\' href=' + click_url + '>' + tem_name + '</a></p>');
                    moneyTipeArrs.push(moneyTip);
                }
            });
            return moneyTipeArrs;
        };
        this.calculatIfTimeOut = function(signDate, maintainDate) {
            if (!signDate) return !0;
            return !(Date.parse(signDate) + 24 * maintainDate * 60 * 60 * 1e3 > new Date().getTime());
        };
        this.isConcat = function(fixedIds, subscribeMap) {
            var flag, i;
            flag = !0;
            for (i = 0; i < fixedIds.length; i++) !subscribeMap[fixedIds[i]] || !1 !== subscribeMap[fixedIds[i]].unsubRenew && !1 !== subscribeMap[fixedIds[i]].unsubResource || (flag = !1);
            return flag;
        };
        this.querySubscriptionInfos = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/extendinfos',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            }).then(function(data) {
                if (!data) return customerOrderServcieLocal.APIExceptionCommonHandle(data), 
                null;
                return data;
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp);
            });
        };
        this.queryTableCounts = function(params) {
            params ? params.customer_id = $rootScope.domainId : params = {
                'customer_id': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscriptions/count-unsubscribe-resource',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    _.isNull(params.enterprise_project_id) || _.isUndefined(params.enterprise_project_id) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterprise_project_id);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            }).then(function(data) {
                if (!data) return customerOrderServcieLocal.APIExceptionCommonHandle(data), 
                null;
                return data;
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp);
            });
        };
        this.queryretreatSubscriptionList = function(params) {
            params ? params.customer_id = $rootScope.domainId : params = {
                'customer_id': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordersubscriptionservice/v1/subscriptions/query-unsubscribe-resource',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    _.isNull(params.enterprise_project_id) || _.isUndefined(params.enterprise_project_id) || request.setRequestHeader('X-Enterprise-Project-Ids', params.enterprise_project_id);
                    customerOrderServcieLocal.logRequestParam(setting, 'subscribe');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'subscribe', this.url);
                        func(xhr, status);
                    };
                }
            }).then(function(data) {
                if (!data) return customerOrderServcieLocal.APIExceptionCommonHandle(data), 
                null;
                return data;
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp);
            });
        };
        this.getSliderScale = function(support_periodNums, periodPromotionNums) {
            var slider_scale, i, scale_str, tmp_num;
            slider_scale = [];
            if (support_periodNums && 0 < support_periodNums.length) for (i = 0; i < support_periodNums.length; i++) {
                scale_str = '';
                scale_str = support_periodNums[i] % 12 == 0 ? 1 == (tmp_num = $.encoder.encodeForHTML(support_periodNums[i]).div(12)) ? utilService.i18nReplace(orderI18v1r2.unit_periodType_19, {
                    '1': tmp_num
                }) : utilService.i18nReplace(orderI18v1r2.unit_periodType_19s, {
                    '1': tmp_num
                }) : 1 == support_periodNums[i] ? utilService.i18nReplace(orderI18v1r2.unit_periodType_20, {
                    '1': support_periodNums[i]
                }) : utilService.i18nReplace(orderI18v1r2.unit_periodType_20s, {
                    '1': support_periodNums[i]
                });
                -1 < $.inArray(support_periodNums[i], periodPromotionNums) && (scale_str += '<span style=\'font-size:16px;\' class=\'ti-icon ti-icon-discount ti-slider-tick-icon cti-mgLeft-xs\'></span>');
                slider_scale.push(scale_str);
            }
            return slider_scale;
        };
        this.consoleLog = function(str) {
            window.console && console.log && window.console.log(str);
        };
        this.getBeInfoInitPromise = function() {
            var deferred = $q.defer();
            publicService.getBeInfoInit(function() {
                deferred.resolve.apply(deferred, arguments);
            });
            return deferred.promise;
        };
        this.getLoanTimes = function(periodNum) {
            var arr = [];
            if (1 === periodNum) {
                arr.push({
                    'id': 3,
                    'text': 3 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 9,
                    'text': 9 + orderI18order.loanpay.loan_times
                });
            }
            if (2 === periodNum) {
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 12,
                    'text': 12 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 18,
                    'text': 18 + orderI18order.loanpay.loan_times
                });
            }
            if (3 === periodNum) {
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 12,
                    'text': 12 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 18,
                    'text': 18 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 24,
                    'text': 24 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 30,
                    'text': 30 + orderI18order.loanpay.loan_times
                });
            }
            return arr;
        };
        this.getBeInfoInitPromise = function() {
            var deferred = $q.defer();
            publicService.getBeInfoInit(function() {
                deferred.resolve.apply(deferred, arguments);
            });
            return deferred.promise;
        };
        this.getLoanTimes = function(periodNum) {
            var arr = [];
            if (1 === periodNum) {
                arr.push({
                    'id': 3,
                    'text': 3 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 9,
                    'text': 9 + orderI18order.loanpay.loan_times
                });
            }
            if (2 === periodNum) {
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 12,
                    'text': 12 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 18,
                    'text': 18 + orderI18order.loanpay.loan_times
                });
            }
            if (3 === periodNum) {
                arr.push({
                    'id': 6,
                    'text': 6 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 12,
                    'text': 12 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 18,
                    'text': 18 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 24,
                    'text': 24 + orderI18order.loanpay.loan_times
                });
                arr.push({
                    'id': 30,
                    'text': 30 + orderI18order.loanpay.loan_times
                });
            }
            return arr;
        };
        this.getHighLighInfo = function(searchBoxSelectId, searchBoxTextValue) {
            var highInfo = {};
            searchBoxSelectId == SEARCH_BOX_ID.NAME && (highInfo.highName = $.encoder.encodeForHTML(searchBoxTextValue));
            searchBoxSelectId == SEARCH_BOX_ID.ORDER && (highInfo.highOrder = $.encoder.encodeForHTML(searchBoxTextValue));
            searchBoxSelectId == SEARCH_BOX_ID.ID && (highInfo.highId = $.encoder.encodeForHTML(searchBoxTextValue));
            return highInfo;
        };
        this.getHighLighInfos = function(searchBox) {
            var highInfo = {};
            angular.forEach(searchBox, function(item) {
                item.id == SEARCH_BOX_ID.NAME && (highInfo.highName = $.encoder.encodeForHTML(item.value));
                item.id == SEARCH_BOX_ID.ORDER && (highInfo.highOrder = $.encoder.encodeForHTML(item.value));
                item.id == SEARCH_BOX_ID.ID && (highInfo.highId = $.encoder.encodeForHTML(item.value));
            });
            return highInfo;
        };
        this.queryTradeInfos = function(callback) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcorderplatformservice/v1/customer/trade-infos',
                'params': {
                    'customer_id': $rootScope.domainId
                },
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }).then(function(rsp) {
                var tradeInfos = null;
                if (rsp && rsp.trade_infos) {
                    $rootScope.order_trade_infos = rsp.trade_infos;
                    tradeInfos = rsp.trade_infos;
                }
                callback && 'function' == typeof callback && callback(tradeInfos);
            }).catch(function(rsp) {
                customerOrderServcieLocal.APIExceptionCommonHandle(rsp, !0);
                callback && 'function' == typeof callback && callback(null);
                return Promise.resolve([]);
            });
        };
        this.queryEmInfos = function() {
            return publicService.getEmInfos({
                'customer_ids': [ $rootScope.domainId ]
            }).then(function(data) {
                if (data && ENT_RSP_SUCCESS === data.error_code && data.customer_em_infos && 0 < data.customer_em_infos.length) for (var i = 0; i < data.customer_em_infos.length; i++) if (data.customer_em_infos[i]) {
                    if ('1' == data.customer_em_infos[i].is_primary_customer) {
                        $rootScope.order_customerEmType = 'primaryCustomer';
                        break;
                    }
                    if ('1' == data.customer_em_infos[i].is_sub_customer) {
                        $rootScope.order_customerEmType = 'subCustomer';
                        $rootScope.primary_customer_name = data.customer_em_infos[i].primary_customer_name;
                    }
                }
            }).catch(function(rsp) {
                return Promise.resolve();
            });
        };
        this.getLoanParameter = function(params) {
            params ? params.customerId = $rootScope.domainId : params = {
                'customerId': $rootScope.domainId
            };
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcbankdispatchservice/v1/get_loan_parameter',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'loan_pay');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'loan_pay', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.getRealtFee = function(fee, measureId) {
            return $filter('csb_number')(commons.currencyUnitConversion(fee, measureId), 2);
        };
        this.getFormatFee = function(fee, measureId) {
            return format_curreny(G_currencySymbol, $filter('csb_number')(commons.currencyUnitConversion(fee, measureId), 2));
        };
        this.handleIPSInfo = function(tradeNo, ipsPayInfo) {
            var ipsUrl, sign, version, charset, merchant_no, biz_order_no, trade_description, currency, trade_amount, signType, product_code, order_type, notify_url, timestamp, returnUrl, outTradeNo, subject, biz_order_date, pay_tools, card_type, bank_code, channel_code, instalment_param, expiry_time, customer_type, customer_no, logistics, bill_address, goods, error_return_url, extraCommonParam;
            ipsUrl = encodeURIComponent(ipsPayInfo.ipsUrl);
            sign = encodeURIComponent(ipsPayInfo.sign);
            version = encodeURIComponent(ipsPayInfo.version);
            charset = encodeURIComponent(ipsPayInfo.charset);
            merchant_no = encodeURIComponent(ipsPayInfo.merchant_no);
            biz_order_no = encodeURIComponent(ipsPayInfo.biz_order_no);
            trade_description = encodeURIComponent(ipsPayInfo.trade_description);
            currency = encodeURIComponent(ipsPayInfo.currency);
            trade_amount = encodeURIComponent(ipsPayInfo.trade_amount);
            signType = encodeURIComponent(ipsPayInfo.sign_type);
            product_code = encodeURIComponent(ipsPayInfo.product_code);
            order_type = encodeURIComponent(ipsPayInfo.order_type);
            notify_url = encodeURIComponent(ipsPayInfo.notify_url);
            timestamp = encodeURIComponent(ipsPayInfo.timestamp);
            returnUrl = encodeURIComponent(ipsPayInfo.return_url);
            outTradeNo = encodeURIComponent(ipsPayInfo.out_trade_no);
            subject = encodeURIComponent(ipsPayInfo.subject);
            biz_order_date = ipsPayInfo.biz_order_date ? encodeURIComponent(ipsPayInfo.biz_order_date) : '';
            pay_tools = ipsPayInfo.pay_tools ? encodeURIComponent(ipsPayInfo.pay_tools) : '';
            card_type = ipsPayInfo.card_type ? encodeURIComponent(ipsPayInfo.card_type) : '';
            bank_code = ipsPayInfo.bank_code ? encodeURIComponent(ipsPayInfo.bank_code) : '';
            channel_code = ipsPayInfo.channel_code ? encodeURIComponent(ipsPayInfo.channel_code) : '';
            instalment_param = ipsPayInfo.instalment_param ? encodeURIComponent(ipsPayInfo.instalment_param) : '';
            expiry_time = ipsPayInfo.expiry_time ? encodeURIComponent(ipsPayInfo.expiry_time) : '';
            customer_type = ipsPayInfo.customer_type ? encodeURIComponent(ipsPayInfo.customer_type) : '';
            customer_no = ipsPayInfo.customer_no ? encodeURIComponent(ipsPayInfo.customer_no) : '';
            logistics = ipsPayInfo.logistics ? encodeURIComponent(ipsPayInfo.logistics) : '';
            bill_address = ipsPayInfo.bill_address ? encodeURIComponent(ipsPayInfo.bill_address) : '';
            goods = ipsPayInfo.goods ? encodeURIComponent(ipsPayInfo.goods) : '';
            error_return_url = ipsPayInfo.error_return_url ? encodeURIComponent(ipsPayInfo.error_return_url) : '';
            extraCommonParam = ipsPayInfo.ext_params ? encodeURIComponent(ipsPayInfo.ext_params) : '';
            ipsPayInfo.jumpUrl ? tiModal.open({
                'templateUrl': 'expensecenter/src/app/business/customer/views/onlinePayment.html',
                'controller': 'onlinePayment.ctrl',
                'resolve': {
                    'params': function() {
                        return {
                            'successUrl': encodeURIComponent(ipsPayInfo.return_url),
                            'errorUrl': ipsPayInfo.error_return_url ? encodeURIComponent(ipsPayInfo.error_return_url) : '',
                            'tradeNo': tradeNo
                        };
                    }
                }
            }) : window.location.href = window.appWebPath + '/#/ipspay?sign=' + sign + '&trade_amount=' + trade_amount + '&signType=' + signType + '&notify_url=' + notify_url + '&version=' + version + '&charset=' + charset + '&outTradeNo=' + outTradeNo + '&subject=' + subject + '&merchant_no=' + merchant_no + '&biz_order_no=' + biz_order_no + '&trade_description=' + trade_description + '&currency=' + currency + '&product_code=' + product_code + '&order_type=' + order_type + '&timestamp=' + timestamp + '&returnUrl=' + returnUrl + '&ipsUrl=' + ipsUrl + '&extraCommonParam=' + extraCommonParam + '&biz_order_date=' + biz_order_date + '&pay_tools=' + pay_tools + '&card_type=' + card_type + '&bank_code=' + bank_code + '&channel_code=' + channel_code + '&instalment_param=' + instalment_param + '&expiry_time=' + expiry_time + '&customer_type=' + customer_type + '&customer_no=' + customer_no + '&logistics=' + logistics + '&bill_address=' + bill_address + '&goods=' + goods + '&error_return_url=' + error_return_url;
        };
        this.goPopupURL = function(isAGC) {
            if (isAGC) {
                isAGC = ORDER_URL_CONFIG.AGC_CHARGE_LINK;
                window.open(isAGC).opener = null;
            } else {
                isAGC = window.appWebPath + '#/userindex/balanceRecharge';
                window.open(isAGC, '_blank');
            }
        };
        this.getPageHashURL = function() {
            return -1 != location.hash.indexOf('?') ? location.hash.substr(2, location.hash.indexOf('?') - 2) : location.hash.substr(2);
        };
        this.rejectAgentPay = function(params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/orders/cancelAgentPay',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'cancelAgentPay');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'cancelAgentPay', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.querySubAccounts = function(param) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/v2/em/account/sub',
                'params': param,
                'timeout': 6e3,
                'mask': !1,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    customerOrderServcieLocal.logRequestParam(setting, 'querySubAccounts');
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        customerOrderServcieLocal.logResponseData(xhr, 'querySubAccounts', this.url);
                        func(xhr, status);
                    };
                }
            });
        };
        this.openRejectPayModal = function(scope, orderInfo) {
            var tiModalInstance, tempArr, temObj, finalOrderIds, orderIds, relationOrderArr, tempRelationOrderIds, i;
            tiModalInstance = tiModal.open({
                'templateUrl': 'ordercenter/src/app/business/order/modal/rejectAgentPayModal.html',
                'scope': scope
            });
            scope.orderI18order = orderI18order;
            scope.rejectOrderData = {
                'data': [],
                'state': {
                    'filter': !1,
                    'sort': !1,
                    'pagination': !0
                }
            };
            tempArr = [];
            finalOrderIds = [];
            scope.isHaveRelationRejectOrder = !(temObj = {});
            scope.rejectOrdercolumns = [ {
                'title': orderI18order.reject_agent_pay_order_No,
                'width': '33%'
            }, {
                'title': orderI18order.reject_agent_pay_enterprise_name,
                'width': '33%'
            }, {
                'title': orderI18order.reject_agent_pay_customer_name,
                'width': '33%'
            } ];
            orderIds = orderInfo.orderId || orderInfo.orderID;
            relationOrderArr = orderInfo.relation_order_info && orderInfo.relation_order_info.order_info_list;
            tempRelationOrderIds = [];
            if (relationOrderArr && 0 < relationOrderArr.length) {
                relationOrderArr.map(function(o) {
                    tempRelationOrderIds.push(o.order_id);
                });
                finalOrderIds = tempRelationOrderIds;
                for (i = 0; i < relationOrderArr.length; i++) {
                    (temObj = {}).order_id = relationOrderArr[i].order_id;
                    temObj.enterprise_name = orderInfo.enterprise_name;
                    temObj.customer_name = orderInfo.customer_name;
                    tempArr.push(temObj);
                }
            } else {
                (temObj = {}).order_id = orderIds;
                temObj.enterprise_name = orderInfo.enterprise_name;
                temObj.customer_name = orderInfo.customer_name;
                tempArr.push(temObj);
                finalOrderIds.push(orderIds);
            }
            scope.rejectOrderData.data = tempArr;
            scope.rejectAgentPayModalInstance = {
                'reason': '',
                'action': {
                    'modalCancel': function() {
                        tiModalInstance.dismiss();
                    },
                    'modalConfirm': function() {
                        var params = {
                            'orderIds': finalOrderIds,
                            'reason': scope.rejectAgentPayModalInstance.reason
                        };
                        customerOrderServcieLocal.rejectAgentPay(params).then(function(data) {
                            data && data.retCode === String(RSP_SUCCESS) ? tiModalInstance.close() : customerOrderServcieLocal.APIExceptionCommonHandle(data, !1, !0);
                        }).catch(function(rsp) {
                            customerOrderServcieLocal.APIExceptionCommonHandle(rsp, !1, !0);
                        });
                    }
                }
            };
            return tiModalInstance;
        };
        this.getDimensionRes = function(subId, subscriptions_map, dimensionMap) {
            if (!(subscriptions_map = subscriptions_map[subId])) return null;
            subId = subscriptions_map.baseCustomerOrderId;
            return subscriptions_map.dimension == ORDER_DIMENSION || subscriptions_map.dimension == BUNDLE_DIMENSION ? dimensionMap[subId] : dimensionMap[subscriptions_map.subscriptionId];
        };
        this.getSubResourcesIds = function(attachSubResources, subscriptions_map, checkedList, includeAll, dimensionMap) {
            var checkSubscriptionIds, i, dimensionIds;
            checkSubscriptionIds = [];
            for (i = 0; i < attachSubResources.length; i++) {
                if (!function(subscription, checkedList) {
                    var mainIds, j;
                    if (!subscription) return;
                    mainIds = subscription.mainSubscriptionIds;
                    subscription = subscription.rootSubscriptionIds;
                    if (0 === (mainIds = mainIds.concat(subscription)).length) return;
                    for (j = 0; j < mainIds.length; j++) if (-1 < $.inArray(mainIds[j], checkedList)) return 1;
                    return;
                }(subscriptions_map[attachSubResources[i]], checkedList)) continue;
                (dimensionIds = customerOrderServcieLocal.getDimensionRes(attachSubResources[i], subscriptions_map, dimensionMap)) && 0 < dimensionIds.length && (checkSubscriptionIds = checkSubscriptionIds.concat(dimensionIds));
            }
            return checkSubscriptionIds;
        };
        this.translateDc = function(data) {
            var support_regions, k, i;
            support_regions = [ 'global-cbc-1' ];
            if ($rootScope.regions && 0 < $rootScope.regions.length) for (k in $rootScope.regions) $rootScope.regions[k].id && support_regions.push($rootScope.regions[k].id);
            try {
                if (data && 0 < data.length) for (i in data) data[i] && data[i].regionId && -1 == $.inArray(data[i].regionId, support_regions) && (data[i].disable = !0);
            } catch (e) {}
            return data;
        };
        this.getBindingRootSubscription = function(subs, subsMap) {
            return function getRoot(subs, subsMap, chain) {
                if (!subs.mainSubscriptionIds || 0 === subs.mainSubscriptionIds.length || subs.relativeType !== RELETIVE_TYPE.BIND) return subs.subscriptionId;
                var mainSub = subsMap[subs.mainSubscriptionIds[0]];
                if (!mainSub || !mainSub.subscriptionId || -1 < $.inArray(mainSub.subscriptionId, chain)) return subs.subscriptionId;
                chain.push(mainSub.subscriptionId);
                return getRoot(mainSub, subsMap, chain);
            }(subs, subsMap, [ subs.subscriptionId ]);
        };
        this.adaptSubjectByLanguage = function(language, originSubject) {
            var subjects, preferredSubject, defaultSubject, preferredSubjectData;
            if (!language || !originSubject) return originSubject;
            if (-1 === originSubject.indexOf('|')) return originSubject;
            try {
                preferredSubject = (subjects = originSubject.split('|'))[0];
                defaultSubject = subjects[1];
                if (-1 === preferredSubject.indexOf(':')) return defaultSubject;
                if (language === (preferredSubjectData = preferredSubject.split(':'))[1]) return preferredSubjectData[0];
                return defaultSubject;
            } catch (e) {
                return originSubject;
            }
        };
        this.offset2PageIndex = function(offset, limit) {
            try {
                return offset / limit + 1;
            } catch (e) {
                return 1;
            }
        };
        this.MY_ORDER_TAB_TYPE = {
            'ALL': 'all',
            'SERVICE': 'service',
            'HARDWARE': 'hardware',
            'PERIOD': 'period',
            'PAY_PER_USE': 'pay-per-use',
            'RI': 'reserve-instance'
        };
        this.MY_ORDER_TABLE_TYPE = {
            'PERIOD_ALL': 1,
            'PERIOD_UNPAID': 2,
            'PAY_PER_USE': 3,
            'RI_ALL': 4,
            'RI_UNPAID': 5
        };
        this.getMyOrderColums = function(options) {
            var tableType, newTabFlag, activeTab, orderStatus, orderType, enterprisesFather, cols;
            tableType = options.tableType;
            options.statusType;
            newTabFlag = options.newTabFlag;
            activeTab = options.activeTab.type;
            orderStatus = options.orderStatus;
            orderType = options.orderType;
            enterprisesFather = options.enterprisesFather;
            options = options.isHKStation;
            0;
            0;
            0;
            if (activeTab === this.MY_ORDER_TAB_TYPE.ALL || activeTab === this.MY_ORDER_TAB_TYPE.SERVICE) {
                options = options ? this.order_type_data_hk : this.order_type_data;
                activeTab === this.MY_ORDER_TAB_TYPE.SERVICE && (options = this.service_order_type_data);
                cols = [ {
                    'title': orderI18v1r2.table_orderId,
                    'width': '192px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '18%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '10%',
                    'items': options,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18v1r2.table_createTime,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_paymentTime,
                    'width': '20%',
                    'id': 'table_paymentTime'
                }, {
                    'title': orderI18v1r2.table_status,
                    'width': '10%',
                    'items': [],
                    'id': 'orderStatus',
                    'elementId': 'my-card_table.colums.table_status_filter',
                    'colClass': 'col-order-status'
                }, {
                    'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                    'id': 'table_currencyAfterDisount_new',
                    'width': '16%',
                    'text_align': !0
                }, {
                    'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'myorder_pay_payAmount'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'id': 'table_operate',
                    'width': '180px'
                } ];
                enterprisesFather && (cols = [ {
                    'title': orderI18v1r2.table_orderId,
                    'width': '192px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '18%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '18%',
                    'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18order.myorder.customer_name,
                    'width': '16%',
                    'id': 'fkcuname'
                }, {
                    'title': orderI18order.myorder.enterprise_name,
                    'width': '16%',
                    'id': 'table_enterprisename'
                }, {
                    'title': orderI18order.myorder.table_orderfk_start,
                    'width': '16%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_createTime,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_paymentTime,
                    'width': '20%',
                    'id': 'table_paymentTime'
                }, {
                    'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                    'id': 'table_currencyAfterDisount_new',
                    'width': '16%',
                    'text_align': !0
                }, {
                    'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'myorder_pay_payAmount'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'id': 'table_operate',
                    'width': '180px'
                } ]);
            }
            tableType == this.MY_ORDER_TABLE_TYPE.PERIOD_UNPAID && (cols = [ {
                'title': ''
            }, {
                'title': orderI18v1r2.table_orderId,
                'width': '192px',
                'id': 'table_orderId'
            }, {
                'title': orderI18v1r2.table_productClass,
                'width': '22%',
                'items': [ {
                    'id': '0',
                    'label': 'All'
                } ],
                'id': 'productClass',
                'elementId': 'my-card_table.colums.t_product_type_filter',
                'enableSearch': !0,
                'colClass': 'col-prod-class'
            }, {
                'title': orderI18v1r2.table_orderType,
                'width': '16%',
                'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                'id': 'orderType',
                'elementId': 'my-card_table.colums.table_orderType_filter',
                'colClass': 'col-order-type'
            }, {
                'title': orderI18v1r2.org_projectName,
                'width': '22%',
                'hide': !0,
                'index': 'org_projectName',
                'id': 'org_projectName'
            }, {
                'title': orderI18v1r2.table_createTime,
                'width': '20%',
                'id': 'table_createTime'
            }, {
                'title': orderI18v1r2.table_payEndTime,
                'width': '20%',
                'id': 'table_paymentTime'
            }, {
                'title': orderI18v1r2.table_status,
                'width': '16%',
                'items': [],
                'id': 'orderStatus',
                'elementId': 'my-card_table.colums.table_status_filter',
                'colClass': 'col-order-status'
            }, {
                'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                'width': '16%',
                'text_align': !0,
                'id': 'table_currencyAfterDisount_new'
            }, {
                'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                'width': '16%',
                'text_align': !0,
                'id': 'myorder_pay_payAmount'
            }, {
                'title': orderI18v1r2.table_operate,
                'width': '180px',
                'id': 'table_operate'
            } ]);
            tableType == this.MY_ORDER_TABLE_TYPE.PAY_PER_USE && (cols = [ {
                'title': orderI18v1r2.table_orderId,
                'width': '192px',
                'id': 'table_orderId'
            }, {
                'title': orderI18v1r2.table_productClass,
                'width': '22%',
                'items': [ {
                    'id': '0',
                    'label': 'All'
                } ],
                'id': 'productClass',
                'elementId': 'my-card_table.colums.t_product_type_filter',
                'enableSearch': !0
            }, {
                'title': orderI18v1r2.table_orderType,
                'width': '16%',
                'items': this.pay_per_use_order_type_data,
                'id': 'orderType',
                'elementId': 'my-card_table.colums.table_orderType_filter'
            }, {
                'title': orderI18v1r2.table_createTime,
                'width': '22%',
                'id': 'table_createTime'
            }, {
                'title': orderI18v1r2.table_status,
                'width': '16%',
                'items': [],
                'id': 'orderStatus',
                'elementId': 'my-card_table.colums.table_status_filter'
            }, {
                'title': orderI18v1r2.table_operate,
                'width': '160px',
                'id': 'table_operate'
            } ]);
            tableType == this.MY_ORDER_TABLE_TYPE.RI_ALL && (cols = [ {
                'title': orderI18v1r2.table_orderId,
                'width': '192px',
                'id': 'table_orderId'
            }, {
                'title': orderI18v1r2.table_productClass,
                'width': '18%',
                'items': [ {
                    'id': '0',
                    'label': 'All'
                } ],
                'id': 'productClass',
                'elementId': 'my-card_table.colums.t_product_type_filter',
                'enableSearch': !0
            }, {
                'title': orderI18v1r2.table_orderType,
                'width': '16%',
                'items': this.order_type_data,
                'id': 'orderType',
                'elementId': 'my-card_table.colums.table_orderType_filter'
            }, {
                'title': orderI18v1r2.table_createTime,
                'width': '20%',
                'id': 'table_createTime'
            }, {
                'title': orderI18v1r2.table_paymentTime,
                'width': '20%',
                'id': 'table_paymentTime'
            }, {
                'title': orderI18v1r2.table_status,
                'width': '16%',
                'items': [],
                'id': 'orderStatus',
                'elementId': 'my-card_table.colums.table_status_filter'
            }, {
                'title': __(orderI18order.prePaid_amount_th, G_symbol),
                'width': '14%',
                'id': 'prePaid_amount_th'
            }, {
                'title': __(orderI18v1r2.contract_paid_amount, G_symbol),
                'width': '14%',
                'id': 'contract_paid_amount'
            }, {
                'title': __(orderI18order.ondemand_amout_thead, G_symbol),
                'width': '14%',
                'id': 'ondemand_amout_thead'
            }, {
                'title': orderI18v1r2.table_operate,
                'width': '180px',
                'id': 'table_operate'
            } ]);
            tableType == this.MY_ORDER_TABLE_TYPE.RI_UNPAID && (cols = [ {
                'title': ''
            }, {
                'title': orderI18v1r2.table_orderId,
                'width': '192px',
                'id': 'table_orderId'
            }, {
                'title': orderI18v1r2.table_productClass,
                'width': '22%',
                'items': [ {
                    'id': '0',
                    'label': 'All'
                } ],
                'id': 'productClass',
                'elementId': 'my-card_table.colums.t_product_type_filter',
                'enableSearch': !0
            }, {
                'title': orderI18v1r2.table_orderType,
                'width': '16%',
                'items': this.order_type_data,
                'id': 'orderType',
                'elementId': 'my-card_table.colums.table_orderType_filter'
            }, {
                'title': orderI18v1r2.org_projectName,
                'width': '22%',
                'hide': !0,
                'index': 'org_projectName',
                'id': 'org_projectName'
            }, {
                'title': orderI18v1r2.table_createTime,
                'width': '20%',
                'id': 'table_createTime'
            }, {
                'title': orderI18v1r2.table_payEndTime,
                'width': '20%',
                'id': 'table_payEndTime'
            }, {
                'title': orderI18v1r2.table_status,
                'width': '16%',
                'items': [],
                'id': 'orderStatus',
                'elementId': 'my-card_table.colums.table_status_filter'
            }, {
                'title': __(orderI18order.prePaid_amount_th, G_symbol),
                'width': '14%',
                'id': 'prePaid_amount_th'
            }, {
                'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                'width': '14%',
                'id': 'myorder_pay_payAmount'
            }, {
                'title': __(orderI18order.ondemand_amout_thead, G_symbol),
                'width': '14%',
                'id': 'ondemand_amout_thead'
            }, {
                'title': orderI18v1r2.table_operate,
                'width': '180px',
                'id': 'table_operate'
            } ]);
            if (activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE) {
                cols = [ {
                    'title': orderI18v1r2.table_orderId,
                    'width': '192px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '18%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '16%',
                    'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18v1r2.table_createTime,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_paymentTime,
                    'width': '20%',
                    'id': 'table_paymentTime'
                }, {
                    'title': orderI18v1r2.table_status,
                    'width': '16%',
                    'items': [],
                    'id': 'orderStatus',
                    'elementId': 'my-card_table.colums.table_status_filter',
                    'colClass': 'col-order-status'
                }, {
                    'title': this.getI18FromKey('hardware_my_order_columns_receivers'),
                    'hide': !newTabFlag,
                    'width': '14%',
                    'colClass': 'col-order-receiver',
                    'id': 'hardware_my_order_columns_receivers'
                }, {
                    'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'table_currencyAfterDisount_new'
                }, {
                    'title': __(orderI18v1r2.contract_paid_amount, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'contract_paid_amount'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'width': '180px',
                    'id': 'table_operate'
                } ];
                orderStatus === ORDERSTATUS_WAITINGPAYMENT && (cols = [ {
                    'title': ''
                }, {
                    'title': orderI18v1r2.table_orderId,
                    'width': '192px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '22%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '16%',
                    'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18v1r2.org_projectName,
                    'width': '22%',
                    'hide': !0,
                    'index': 'org_projectName',
                    'id': 'org_projectName'
                }, {
                    'title': orderI18v1r2.table_createTime,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_payEndTime,
                    'width': '20%',
                    'id': 'table_payEndTime'
                }, {
                    'title': orderI18v1r2.table_status,
                    'width': '16%',
                    'items': [],
                    'id': 'orderStatus',
                    'elementId': 'my-card_table.colums.table_status_filter',
                    'colClass': 'col-order-status'
                }, {
                    'title': this.getI18FromKey('hardware_my_order_columns_receivers'),
                    'hide': !newTabFlag,
                    'width': '14%',
                    'colClass': 'col-order-receiver',
                    'id': 'hardware_my_order_columns_receivers'
                }, {
                    'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'table_currencyAfterDisount_new'
                }, {
                    'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'myorder_pay_payAmount'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'width': '180px',
                    'id': 'table_operate'
                } ]);
                orderStatus === ORDERSTATUS_ABORTED && (cols = [ {
                    'title': orderI18v1r2.table_orderId,
                    'width': '192px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '18%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '16%',
                    'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18v1r2.table_createTime,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_cancel_time,
                    'width': '20%',
                    'id': 'table_cancel_time'
                }, {
                    'title': orderI18v1r2.table_status,
                    'width': '16%',
                    'items': [],
                    'id': 'orderStatus',
                    'elementId': 'my-card_table.colums.table_status_filter',
                    'colClass': 'col-order-status'
                }, {
                    'title': this.getI18FromKey('hardware_my_order_columns_receivers'),
                    'hide': !newTabFlag,
                    'width': '14%',
                    'colClass': 'col-order-receiver',
                    'id': 'hardware_my_order_columns_receivers'
                }, {
                    'title': __(orderI18v1r2.table_currencyAfterDisount_new, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'table_currencyAfterDisount_new'
                }, {
                    'title': __(orderI18v1r2.myorder_pay_payAmount, G_symbol),
                    'width': '16%',
                    'text_align': !0,
                    'id': 'myorder_pay_payAmount'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'width': '180px',
                    'id': 'table_operate'
                } ]);
                -1 < $.inArray(orderType, [ ORDERTYPE_RETURN, ORDERTYPE_EXCHANGE, ORDERTYPE_REFUND ]) && (cols = [ {
                    'title': orderI18v1r2.table_orderId,
                    'width': '200px',
                    'id': 'table_orderId'
                }, {
                    'title': orderI18v1r2.table_productClass,
                    'width': '18%',
                    'items': [ {
                        'id': '0',
                        'label': 'All'
                    } ],
                    'id': 'productClass',
                    'elementId': 'my-card_table.colums.t_product_type_filter',
                    'enableSearch': !0,
                    'colClass': 'col-prod-class'
                }, {
                    'title': orderI18v1r2.table_orderType,
                    'width': '16%',
                    'items': activeTab === this.MY_ORDER_TAB_TYPE.HARDWARE ? null : this.order_type_data,
                    'id': 'orderType',
                    'elementId': 'my-card_table.colums.table_orderType_filter',
                    'colClass': 'col-order-type'
                }, {
                    'title': orderI18order.hardware_after_sale_table_title_apply_time,
                    'width': '20%',
                    'id': 'table_createTime'
                }, {
                    'title': orderI18v1r2.table_status,
                    'width': '16%',
                    'items': [],
                    'id': 'orderStatus',
                    'elementId': 'my-card_table.colums.table_status_filter',
                    'colClass': 'col-order-status'
                }, {
                    'title': orderI18order.retreatGoods.table_columns_orderid_origion,
                    'width': '200px',
                    'id': 'base_order_id'
                }, {
                    'title': orderI18v1r2.table_operate,
                    'width': '180px',
                    'id': 'table_operate'
                } ]);
            }
            return cols;
        };
        this.humpToLine = function(obj) {
            var isObject, newObj;
            isObject = function(a) {
                return '[Object Object]' === Object.prototype.toString.call(a);
            };
            newObj = {};
            Object.keys(obj).forEach(function(key) {
                var newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
                newObj[newKey] = isObject(obj[key]) ? customerOrderServcieLocal.humpToLine(obj[key]) : obj[key];
            });
            return newObj;
        };
        this.startIntro = function(id, sessionKey) {
            var tiIntro, tiIntroIns, clickListener;
            if (!(tiIntro = $injector.get('tiIntro'))) return;
            if (utilService.getCookie(sessionKey)) return;
            id = [ {
                'element': id,
                'intro': {
                    'title': '',
                    'content': orderI18order.myorder_intro_content
                }
            } ];
            tiIntroIns = tiIntro.create({
                'introFinish': orderI18order.cost_intro_btn,
                'steps': id,
                'onExit': function(instance) {},
                'onComplete': function(instance) {
                    utilService.setCookie(sessionKey, 'yes');
                }
            });
            clickListener = function(e) {
                var targetZone = document.getElementsByClassName('ti-intro-tooltip-content');
                if (targetZone && targetZone != e.target && targetZone[0] && !targetZone[0].contains(e.target)) {
                    tiIntroIns.exit();
                    document.removeEventListener('mouseup', clickListener);
                }
            };
            setTimeout(function() {
                tiIntroIns.start();
                setTimeout(function() {
                    document.addEventListener('mouseup', clickListener);
                });
            });
        };
        this.batchGetRegionNames = function(regionIds, datacenterCache) {
            datacenterCache = datacenterCache || {};
            return regionIds.map(function(regionId) {
                return datacenterCache[regionId] && datacenterCache[regionId].regionName || regionId;
            });
        };
        this.getResourceUsageFactorMap = function() {
            var usageFactorConfig, resourceUsageMap;
            usageFactorConfig = customerOrderServcieLocal.getOrderCommonConfigDRM('RESOURCE_USAGE_FACTOR_CONFIG') || 'hws.resource.type.bandwidth:Duration:4;hws.resource.type.bwp:Duration:4';
            try {
                resourceUsageMap = {};
                usageFactorConfig.split(';').forEach(function(item) {
                    if (!item) return;
                    item = item.split(':');
                    resourceUsageMap[item[0]] = {
                        'usageFactor': item[1],
                        'usageMeasureId': item[2]
                    };
                });
                return resourceUsageMap;
            } catch (e) {
                customerOrderServcieLocal.commitLOG('invalid config:' + usageFactorConfig, 'error', 'renewal');
                return {};
            }
        };
        this.queryDataCenter = function() {
            return publicService.getDataCenter().catch(function(rsp) {
                return Promise.resolve(i18rspdata.allregion);
            }).then(function(data) {
                data = customerOrderServcieLocal.translateDc(data);
                $rootScope.regionCodeListCache = {};
                if (data) for (var i = 0; i < data.length; i++) {
                    data[i].regionName = $.encoder.encodeForHTML(data[i].regionName);
                    $rootScope.regionCodeListCache[data[i].regionId] = data[i];
                }
            });
        };
        this.checkUrlWhiteList = function(url) {
            if (!url) return !1;
            if (url = (url = url.match(/((http|https):\/\/)?(?<domainName>([\w\-\.]+))/)) && url.groups && url.groups.domainName) {
                try {
                    url = url.split('.').slice(-2).join('.');
                } catch (e) {}
                return -1 < $.inArray(url, ORDER_CONSOLE_URL_WHITE_LIST);
            }
        };
        this.collectAllServiceTypeCodes = function(displayInfo) {
            var i, serviceDef;
            if (!$rootScope.allSevices || !displayInfo) return;
            if (displayInfo && displayInfo.serviceTypeDisplayInfo) for (i = 0; i < displayInfo.serviceTypeDisplayInfo.length; i++) {
                serviceDef = displayInfo.serviceTypeDisplayInfo[i];
                $rootScope.allSevices[serviceDef.serviceTypeCode] = serviceDef.serviceTypeDisplayName;
            }
        };
    };
    angular.module('order.config').tinyService('customerOrderService', service);
});