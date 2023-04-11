define([], function() {
    'use strict';
    var service;
    service = [ 'camel', '$rootScope', 'publicService', 'storage', 'validator', 'csbMessage', function(camel, $rootScope, publicService, storage, validator, csbMessage) {
        var singEntToCurrencyTemps, config, serviceThis, actionABTestSwitch, videoActionTestValue, videoActionparams;
        this.getCustomerTicket = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerregservice/v1/customer/ticket',
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryCustomerCurrencyConfig = function(param) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/enum/lists',
                'params': param,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getConfigRelation = function(params) {
            return camel.get({
                'url': window.appWebPath + '/rest/cbc/cbccustmgrservice/v1/config-relation',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        0;
        singEntToCurrencyTemps = [];
        function setCurrencyOption(defautltCurrency, callbcak) {
            var currencyOptions, items, isHaveDefault;
            currencyOptions = {};
            if (0 < singEntToCurrencyTemps.length) {
                isHaveDefault = !(items = []);
                singEntToCurrencyTemps.forEach(function(item) {
                    if (defautltCurrency === item.config_Child) {
                        currencyOptions.selectId = defautltCurrency;
                        isHaveDefault = !0;
                    }
                    items.push({
                        'value': item.enum_id,
                        'text': item.enum_names[0].value
                    });
                });
                currencyOptions.options = items;
                currencyOptions.selectId = isHaveDefault ? defautltCurrency : '';
                callbcak(currencyOptions);
            }
        }
        this.getCurrencyTypeOptions = function(defautltCurrency, callbcak) {
            this.queryCustomerCurrencyConfig({
                'enum_type': 'CURRENCY_TYPE',
                'order_by': 3
            }).then(function(data) {
                0;
                if (data && 0 < data.total_count) {
                    data.enum_list.forEach(function(item) {
                        item && item.enum_names && item.enum_names[0] && (item.enum_id, 
                        item.enum_names[0].value);
                    });
                    setCurrencyOption(defautltCurrency, callbcak);
                }
            }).catch(function() {});
        };
        this.queryDefultCurrency = function(param) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/enum/default-list',
                'params': param,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getCurrencyOption = function(params) {
            var param = {
                'enum_type': 'CURRENCY_TYPE',
                'customer_id': $rootScope.domainId
            };
            params.country && (param.country = params.country);
            params.signing_entity && (param.signing_entity = params.signing_entity);
            this.queryDefultCurrency(param).then(function(data) {
                if (data && data.enums && 0 < data.enums.length) {
                    singEntToCurrencyTemps = data.enums;
                    setCurrencyOption(params.defautltCurrency, params.callback);
                }
            }).catch(function() {});
        };
        this.queryCurrencyCustomerConfig = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-config/get-config',
                'params': param,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.setPreferenceConfig = function(param) {
            return camel.post({
                'url': window.appWebPath + '/rest/cbc/cbccustmgrservice/v1/customer-config/config',
                'params': param,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.videoliveIdentifySubmit = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/face_recognition/video_asr/ivs',
                'timeout': 6e4,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.videoliveIdentifyUpload = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/face_recognition/video_asr/upload',
                'timeout': 6e4,
                'params': params,
                'headers': {
                    'Content-Type': 'multipart/form-data'
                },
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getIDCardInfoByImage = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/ocr/id_image',
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryVideoAsrTaskNew = function(params, isNewTask = !1) {
            return isNewTask ? camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video/task',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }) : camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/task',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryVideoAsrStatusNew = function() {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/status',
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.videoliveIdentifyUploadNew = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/upload',
                'timeout': 6e4,
                'params': params,
                'headers': {
                    'Content-Type': 'multipart/form-data'
                },
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getIDCardInfoByImageNew = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/ocr/id_image',
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.custrnverifyIndividual = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/individual',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.liveIdentifySubmit = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/live_identify',
                'params': param,
                'mask': !0,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.submitEntAutoRealNameAuth = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/enterprise',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.mgrVerificationCode = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/verification_code/verify',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        function collectEvent(a, b, c, d, json, mobilePhone, countryCode, email) {
            var pageUrl, urlParams;
            (pageUrl = window.location.href) && 510 < pageUrl.length && (pageUrl = pageUrl.substring(0, 510));
            urlParams = (urlParams = function() {
                var urlParams, params, index, key, value;
                urlParams = {};
                params = window.location.search.substring(1).split('&');
                for (index = 0; index < params.length; index++) {
                    key = params[index].substring(0, params[index].indexOf('='));
                    value = params[index].substring(params[index].indexOf('=') + 1);
                    urlParams[key] = decodeURIComponent(value);
                }
                return urlParams;
            }() || '') && urlParams.type ? urlParams.type : '';
            a = {
                'visitKey': $rootScope.domainId,
                'eventCategory': a || '',
                'eventAction': b || '',
                'eventLabel': c || '',
                'eventValue': d || '',
                'pageName': pageUrl,
                'customerId': $rootScope.domainId || '',
                'domainArea': '',
                'channelFrom': urlParams,
                'jsonParam': json || '',
                'mobilePhone': mobilePhone || '',
                'countryCode': countryCode || '',
                'email': email || ''
            };
            camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerregservice/v1/util/uor',
                'timeout': 6e4,
                'params': a,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        }
        this.collectBehavior = function(eventCategory, eventAction, eventLabel, eventValue, jsonParam, mobilePhone, countryCode, email) {
            try {
                collectEvent(eventCategory, eventAction, eventLabel, eventValue, JSON.stringify(jsonParam), mobilePhone, countryCode, email);
            } catch (e) {}
        };
        this.collectPageView = function() {
            try {
                var jsonParam = {
                    'previousPage': document.referrer
                };
                collectEvent(function(location) {
                    var arr;
                    arr = (window.location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?');
                    arr = 'account_' + customiseVer + '_' + $rootScope.currentLanguage + '_' + arr;
                    location && (arr += '_' + location);
                    return arr;
                }(), 'pageView', '', '', JSON.stringify(jsonParam));
            } catch (e) {}
        };
        this.setTrace = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/potential-customers/trace',
                'timeout': 6e4,
                'params': param,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryResourceAccess = function(callback, params) {
            var accessIds = '';
            if ((params = params || {
                'resourceType': 'signing_entity'
            }).accessIds) {
                params.accessIds.forEach(function(item) {
                    accessIds += (accessIds ? '&accessIds=' : 'accessIds=') + item;
                });
                params.accessIds = void 0;
            }
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/resource_access' + (accessIds ? '?' : '') + accessIds,
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }).then(function(data) {
                var accessInfos, i;
                $rootScope.resourceAccess || ($rootScope.resourceAccess = {});
                if (data && data.accessInfos && 0 < data.accessInfos.length) {
                    accessInfos = data.accessInfos;
                    for (i = 0; i < accessInfos.length; i++) if (-1 < accessInfos[i].accessId.indexOf('TAX_NO') && 'country_signing_entity' === accessInfos[i].resourceType || -1 === accessInfos[i].accessId.indexOf('TAX_NO')) {
                        accessInfos[i].instance = accessInfos[i].instance || '';
                        $rootScope.resourceAccess[accessInfos[i].accessId] = accessInfos[i];
                    }
                }
                callback && callback();
            }).catch(function() {
                callback && callback();
            });
        };
        this.modfyResourceAccess = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/resource_access',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryTaxInfo = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/tax_info',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.setTaxInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/tax_info',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.setTaxPutInfo = function(params) {
            params.customerId = $rootScope.domainId;
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/tax_info',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryCertificateType = function(cusomerType) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/certificate-type',
                'timeout': 6e4,
                'mask': !0,
                'params': {
                    'verifiedType': cusomerType
                },
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryCardUpLimit = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/config-para/up-limit',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getGlobalVar = function(id) {
            var authFileNeedCompressSizeTemp, authFileCompressionMaxSizeTemp;
            authFileCompressionMaxSizeTemp = publicService.getSystemConfigsByKey('authFileCompressionMaxSize');
            authFileNeedCompressSizeTemp = publicService.getSystemConfigsByKey('authFileNeedCompressSize');
            (authFileCompressionMaxSizeTemp = {
                'TYPE_AUTH': 'customer',
                'SERVERER_FAILED': 'failedd',
                'authFileMaxSize': 30,
                'authFileCompressionMaxSize': authFileCompressionMaxSizeTemp && authFileCompressionMaxSizeTemp.authFileCompressionMaxSize ? authFileCompressionMaxSizeTemp.authFileCompressionMaxSize : 8,
                'authFileNeedCompressSize': authFileNeedCompressSizeTemp && authFileNeedCompressSizeTemp.authFileNeedCompressSize ? authFileNeedCompressSizeTemp.authFileNeedCompressSize : 2
            }).CUSTUPFILE = window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/file?cftk=' + (storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '') + '&cf2-cftk=' + (storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '');
            return authFileCompressionMaxSizeTemp[id] || '';
        };
        this.cancelRask = function(cusomerType) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/task_cancel',
                'timeout': 6e4,
                'mask': !0,
                'params': {
                    'verifiedType': cusomerType
                },
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getRealNameAuthInfoByRNV = function(hidemask) {
            var respTime, result;
            respTime = '';
            return (result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/' + $rootScope.domainId,
                'timeout': 6e4,
                'mask': !hidemask,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        func(xhr, status);
                        try {
                            respTime = new Date(xhr.getResponseHeader('Date'));
                        } catch (e) {
                            respTime = new Date();
                        }
                    };
                }
            })).then(function() {
                result.$$state.value.respTime = respTime;
                return result;
            });
        };
        this.submitRealNameAuth = function(submitParams) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-info',
                'timeout': 6e4,
                'mask': !0,
                'params': submitParams,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.sendCBCCode = function(queryParmas) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/verification_code',
                'timeout': 6e4,
                'mask': !0,
                'params': queryParmas,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.veriedEntFaceAuth = function(params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/enterprise-face-recognition',
                'timeout': 6e4,
                'mask': !1,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryEntityApplication = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/eflows/status',
                'timeout': 6e4,
                'mask': !0,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.modifyProtocolInfo = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/eflows/process',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getRegistContry = function(code, callback) {
            var result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/datadictionary/query-country',
                'timeout': 6e4,
                'mask': !1,
                'params': {
                    'countryAbbreviation': code || '',
                    'lang': window.urlParams.lang.toLowerCase(),
                    'pageNo': -1,
                    'pageSize': -1,
                    'orderType': code ? '' : 'customer',
                    'status': 'all'
                },
                'beforeSend': function(request) {
                    customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
            return result.then(function(data) {
                var cnCountry, isHaveCN;
                if (data && data.countryList && !code) {
                    cnCountry = {
                        'countryName': $rootScope.i18mobile.nationalChineseName,
                        'countryAbbreviation': 'CN',
                        'timeZone': 'Asia/Shanghai',
                        'countryCode': '0086',
                        'status': 'normal'
                    };
                    if (0 === data.countryList.length) data.countryList = [ cnCountry ]; else {
                        isHaveCN = !1;
                        data.countryList.forEach(function(country) {
                            'CN' === country.countryAbbreviation && (isHaveCN = !0);
                        });
                        isHaveCN || data.countryList.push(cnCountry);
                    }
                }
                return callback ? callback(data) : result;
            }).catch(function() {
                return result;
            });
        };
        config = {
            'whiteContrysShowTAXTip': {
                'params': {
                    'attributeId': 'whiteContrysShowTAXTip',
                    'appName': 'CSBUserCenterWebsite',
                    'resourceId': 'systemConfig'
                },
                'default': !1
            },
            'huaweiID_CBG_URL': {
                'params': {
                    'attributeId': 'huaweiID_CBG_URL',
                    'appName': 'CSBUserCenterWebsite',
                    'resourceId': 'userConfig'
                },
                'default': !1
            },
            'businessScopeCountry': {
                'params': {
                    'attributeId': 'businessScopeCountry',
                    'appName': 'CSBUserCenterWebsite',
                    'resourceId': 'accountCommonConfig'
                },
                'default': 'CHL'
            },
            'F_HUAWEIID_AUTH_SWITCH': {
                'params': {
                    'attributeId': 'Product_Value',
                    'appName': 'FeatureToggle_CSBConsole',
                    'resourceId': 'F_HUAWEIID_AUTH_SWITCH'
                },
                'default': ''
            },
            'hwdeveloperDomain': {
                'params': {
                    'attributeId': 'hwdeveloperDomain',
                    'appName': 'CBCCustomerRNVerifyService',
                    'resourceId': 'developerConfig'
                },
                'default': '',
                'isQueryResult': !1,
                'queryResult': ''
            }
        };
        this.getConfiguration = function(keys, callback) {
            camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/drm/query-by-attributeid',
                'params': config[keys] && config[keys].params,
                'timeout': 6e4,
                'mask': !0
            }).then(function(data) {
                callback && callback(data && data.value ? data.value : config[keys].default);
            }).catch(function() {
                callback && callback(config[keys] && config[keys].default);
            });
        };
        this.queryRealAuthStatus = function(param) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/status',
                'params': param,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getAllianceAuthRealNameInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/action',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.getBRCompanyAddressInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/outer-api-proxy/corporate_taxpayer_id',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        function webxinClose() {
            WeixinJSBridge.call('closeWindow');
        }
        this.closeWindow = function() {
            if (isCallFromWX) 'object' == typeof WeixinJSBridge && 'function' == typeof WeixinJSBridge.invoke ? webxinClose() : document.addEventListener('WeixinJSBridgeReady', webxinClose, !1); else {
                window.location.href = 'about:blank';
                window.close();
            }
        };
        this.getRelationInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/member/relation_info',
                'params': params,
                'timeout': 6e4
            });
        };
        this.getErrorMsg = function(error_code, defaultMsg, isOpera) {
            return $rootScope.i18mobile['video_' + error_code] || $rootScope.i18mobile['face_' + error_code] || validator.getErrMsg(error_code, defaultMsg, isOpera);
        };
        this.whitelistCheck = function(returnUrl) {
            var pattern = new RegExp('^http(s)?://[a-zA-Z0-9%-]+(.huaweicloud.com)|(.ulanqab.huawei.com).*$');
            return returnUrl = returnUrl && pattern.test(returnUrl) ? returnUrl : '';
        };
        this.redirUrl = function(goUrl) {
            goUrl = this.whitelistCheck(goUrl);
            goUrl && (window.location.href = goUrl);
        };
        this.getHWAccountInfo = function(params) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerregservice/v1/account/{customerID}',
                    'o': {
                        'customerID': $rootScope.domainId
                    }
                },
                'timeout': 6e4,
                'mask': !1,
                'params': params
            });
        };
        this.isDisplayAccountInfo = function(callback) {
            var hwIdDisplay = publicService.getSystemConfigsByKey('hwIdFeatureSwitch');
            window.g_Vars || (window.g_Vars = {});
            if (void 0 === window.g_Vars.isDisplayHwId) {
                window.g_Vars.isDisplayHwId = void 0 !== hwIdDisplay && hwIdDisplay.hwIdFeatureSwitch && 'ON' === hwIdDisplay.hwIdFeatureSwitch.toUpperCase();
                window.g_Vars.isDisplayHwId ? this.getHWAccountInfo().then(function(data) {
                    if (data.account && 'HWID' === data.account.domain_type) {
                        data.account.isHwID = !0;
                        window.g_Vars.hwAccountInfo = data.account;
                    }
                    callback && callback(data.account);
                }).catch(function(rsp) {
                    callback && callback();
                    rsp.showError = !0;
                    publicService.resultProcessing(rsp, !0);
                }) : callback && callback();
            } else callback && callback();
        };
        this.getTradeAttr = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/trade/get-attr',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.setTradeAttr = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomertradeentityservice/v1/trade/attr',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.getTradeAttrByCode = function(params, callback) {
            var atts;
            atts = {};
            this.getTradeAttr({
                'attr_names': [ params || 'business_scope' ]
            }).then(function(data) {
                data && data.trade_attrs && 0 < data.trade_attrs.length && $.each(data.trade_attrs, function(index, item) {
                    atts[item.attr_name] = item.attr_value;
                });
                callback && callback(atts);
            }).catch(function() {
                callback && callback(atts);
            });
        };
        this.matchSupportLanDesc = function() {
            var allMatchDescArray = [ [ 'en-us', 'English' ], [ 'zh-cn', '中文（简体）' ], [ 'es-es', 'Español' ], [ 'es-us', 'Español' ], [ 'pt-br', 'Português' ], [ 'fr-fr', 'Français' ] ];
            return allMatchDescArray = (allMatchDescArray = allMatchDescArray.map(function(item) {
                return item = 'zh-cn' === item[0] ? [ 'zh-cn', '简体中文' ] : item;
            })).filter(function(item) {
                return -1 < window.systemConfig.languageConfig.indexOf(item[0]);
            });
        };
        videoActionparams = videoActionTestValue = actionABTestSwitch = '';
        (serviceThis = this).getVideoAction = function(params) {
            var appIDsTemp, appIDs;
            videoActionparams = params;
            try {
                if ('' === actionABTestSwitch) {
                    actionABTestSwitch = !1;
                    if (!((appIDs = (appIDsTemp = publicService.getSystemConfigsByKey('ENT_DRAINAPPID')).ENT_DRAINAPPID && JSON.parse(appIDsTemp.ENT_DRAINAPPID)) && appIDs.videoAction && appIDs.videoAction.qrABTestSwitch)) return params && params.callback(!1);
                    if ((actionABTestSwitch = function(whiteCusIds) {
                        if (whiteCusIds) {
                            if ('boolean' == typeof whiteCusIds) return whiteCusIds;
                            return -1 < whiteCusIds.indexOf($rootScope.domainId) || 'ALL' === whiteCusIds.toUpperCase() || 'TRUE' === whiteCusIds.toUpperCase();
                        }
                        return !1;
                    }(appIDs.videoAction.qrABTestSwitch)) && appIDs.videoAction.testID) return serviceThis.getABTest(appIDs.videoAction);
                }
            } catch (error) {
                videoActionTestValue = 'nods';
            }
            return params && params.callback(videoActionTestValue);
        };
        this.getABTest = function(qrcode) {
            if ($.abtest) $.abtest(qrcode.appID, serviceThis.qrcodeAPPCallback, $rootScope.domainId, qrcode.testID, !0); else {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                -1 === location.host.indexOf('.huaweicloud.com') ? script.src = 'https://res-static1.ulanqab.huawei.com/content/dam/cloudbu-site/archive/china/commons/ssrv/abtest.js' : script.src = 'https://res-static1.huaweicloud.com/content/dam/cloudbu-site/archive/china/commons/ssrv/abtest.js';
                script.readyState ? script.onreadystatechange = function() {
                    if ('loaded' === script.readyState || 'complete' === script.readyState) {
                        script.onreadystatechange = null;
                        $.abtest(qrcode.appID, serviceThis.qrcodeAPPCallback, $rootScope.domainId, qrcode.testID, !0);
                    }
                } : script.onload = function() {
                    $.abtest(qrcode.appID, serviceThis.qrcodeAPPCallback, $rootScope.domainId, qrcode.testID, !0);
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        };
        this.qrcodeAPPCallback = function(data) {
            var arr, parent_title;
            videoActionTestValue = 'nods';
            arr = (location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?');
            arr = 'app_' + site[customiseVer] + '_' + window.urlParams.lang + arr[0];
            parent_title = document.title;
            $(this).closest('[bi_parent_name]') && (parent_title += $.trim($(this).closest('[bi_parent_name]').attr('bi_parent_name')));
            'object' == typeof data && data && data.strategyList && data.strategyList[0] && data.strategyList[0].configObj && (videoActionTestValue = data.strategyList[0].configObj.switchVideoActionTest);
            csbMessage.checkPostUOR((arr += parent_title ? '_' + parent_title : '') + '_abtest_' + videoActionTestValue, 'information', 'abtest', '', JSON.stringify(data));
            return videoActionparams && videoActionparams.callback(videoActionTestValue);
        };
        this.getAccountguard = function() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            -1 === location.host.indexOf('.huaweicloud.com') ? script.src = 'https://test-static-resource.obs.cn-north-7.ulanqab.huawei.com/riskcontrol/1.0.0/riskIntegrated/bbit/acctguard.js' : script.src = 'https://res.hc-cdn.com/riskcontrol/1.0.0/riskIntegrated/cn/acctguard.js';
            document.getElementsByTagName('head')[0].appendChild(script);
        };
        this.setRequestHeader = function(options) {
            (options = options || {})['X-Channel-From'] = 'usercenter';
            options['X-EnvType'] = window.x_env_type;
            options['X-CF2-PASSTHROUGH'] = !0;
            return options;
        };
        this.getCustomersTool = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customers-tool/' + params.type,
                'timeout': 6e4,
                'mask': !0,
                'params': {
                    'status': params.status
                }
            });
        };
        this.eflowsApplication = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/eflows/application',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.getUBAValue = function(type) {
            var typeList = {
                'idCardType': 'idCardType',
                'videoType': 'video',
                'bankCardType': 'mobilInvBank',
                'personalCardType': 'personalCardType',
                'passCardType': 'passCardType',
                'entVideoType': 'entCert'
            };
            return typeList[type] && 'operation_customer_' + typeList[type];
        };
        this.getUBASuccess = function(retcode) {
            return -1 < $.inArray(retcode, [ 'CBC.7218', 'CBC.7202', 'CBC.7195', 'CBC.7219', 'CBC.7290', 'CBC.7193', 'CBC.7004', 'CBC.7234', 'CBC.7399', 'CBC.7258', 'CBC.7235' ]) ? 'success' : 'failed';
        };
        this.savePrivateVersion = function(params) {
            return camel.post({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerregservice/v1/agreement/private-state-version?protocol_type={protocol_type}',
                    'o': {
                        'protocol_type': params ? params.protocol_type : ''
                    }
                },
                'timeout': 6e4,
                'mask': !1,
                'params': params
            });
        };
        this.setTrace = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/potential-customers/trace',
                'timeout': 6e4,
                'params': param,
                'mask': !1
            });
        };
        this.inviteCustomer = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/potential-customers/customerenter',
                'timeout': 6e4,
                'mask': !1,
                'params': param
            });
        };
        this.inviteRelationCheck = function(param) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbpartnerresellerservice/v1/potential_customers/relation_check',
                'timeout': 6e4,
                'mask': !1,
                'params': param
            });
        };
        this.updateCustomerInfo = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/basic-info',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.modifyAddress = function(params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/account/address',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.queryAddress = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/account/address',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.sendCBCCode = function(queryParmas) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/verification_code',
                'timeout': 6e4,
                'mask': !0,
                'params': queryParmas
            });
        };
        this.sendPhoneStep2Fun = function(phoneStep2Params) {
            return camel.put({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/customer-identity',
                'timeout': 6e4,
                'mask': !0,
                'params': phoneStep2Params
            });
        };
        this.validateKeyExisted = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/check-customer-identity',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.verificationIndentify = function(queryParmas) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/indentify/verification',
                'timeout': 6e4,
                'mask': !0,
                'params': queryParmas
            });
        };
        this.queryCustomerConfig = function(param) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-config/get-config',
                'params': param,
                'timeout': 3e4,
                'mask': !0
            });
        };
        this.queryCustomerCurrencyConfigForSignEntity = function(param, language) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/enum/lists',
                'params': param,
                'timeout': 3e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-Language', language);
                }
            });
        };
        this.getHWABI = function() {
            var activityUrl, hw_abi, data;
            activityUrl = '';
            try {
                (hw_abi = storage.cookieStorage.getItem('hw_abi')) && (data = JSON.parse(hw_abi)) && data.url && (activityUrl = data.url);
            } catch (error) {}
            return activityUrl;
        };
        this.getStrlen = function(str) {
            let len = 0;
            for (let i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                1 <= c && c <= 126 || 65376 <= c && c <= 65439 ? len++ : len += 2;
            }
            return len;
        };
    } ];
    angular.module('mobile.config').tinyService('mobileAccountService', service);
});