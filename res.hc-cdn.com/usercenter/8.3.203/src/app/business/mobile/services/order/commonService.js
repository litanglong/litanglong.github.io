define([ 'language/v1r2_order', 'language/order', 'language/orderUrl' ], function(orderI18v1r2, orderI18order, orderI18orderUrl) {
    'use strict';
    var service;
    service = function($q, storage, camel, $rootScope, mask, $filter, utilService, tiMessage, $stateParams, publicService) {
        var i18v1r2, deleteInvalidProperties, HEC_ECS, HEC_EVS, HEC_EIP, NEXT_OPERATION_EXPIRE, NEXT_OPERATION_TO_ONDEMAND, NEXT_OPERATION_FREEZE, NEXT_OPERATION_DELETE;
        null != $rootScope.orderI18order && void 0 !== $rootScope.orderI18order && '' !== $rootScope.orderI18order || ($rootScope.orderI18order = orderI18order);
        i18v1r2 = orderI18v1r2;
        this.list2String = function(arr) {
            return arr instanceof Array ? arr.join(',') : arr;
        };
        this.isMarketPlaceService = function(serviceType) {
            var marketPlacePrefix, i;
            if (!serviceType) return !1;
            marketPlacePrefix = [ 'hws.service.type.mkp.', 'hws.service.type.marketplace' ];
            for (i = 0; i < marketPlacePrefix.length; i++) if (0 === serviceType.indexOf(marketPlacePrefix[i])) return !0;
            return !1;
        };
        this.getUniformDueDateTip = function(uniformDueDate) {
            return orderI18v1r2.dueDate_setTip_renewal + '<span id=\'uniformDueDateLink1\' style=\'color: #DE504E\'>' + orderI18order.month_day['select_dueDate_' + $.encoder.encodeForHTML(uniformDueDate)] + '</span>' + orderI18order.myorder.select_dueDate_end_tz;
        };
        deleteInvalidProperties = function(obj) {
            var newObj, key, value;
            if (!obj) return;
            newObj = {};
            for (key in obj) Object.prototype.hasOwnProperty.call(obj, key) && null != (value = obj[key]) && '' !== value && (newObj[key] = value);
            return newObj;
        };
        this.navigateTo = function(route, param) {
            route = this.getCombineHash(route, param);
            if (param && param.newPage) {
                param = window.location.origin + window.location.pathname + window.location.search + route;
                window.open(param);
            } else window.location.hash = route;
        };
        this.getCombineHash = function(route, param) {
            var keyValPair;
            route = '#' + route;
            if (param && param.queryParams) {
                param.queryParams = deleteInvalidProperties(param.queryParams);
                (keyValPair = Object.keys(param.queryParams).map(function(key) {
                    return key + '=' + param.queryParams[key];
                })) && 0 < keyValPair.length && (route = route + '?' + keyValPair.join('&'));
            }
            return route;
        };
        this.jsSubmit = function(url, params, method) {
            var form, p, input;
            (form = $('<form></form>')).attr({
                'method': method || 'post',
                'action': url
            });
            for (p in params) if (Object.prototype.hasOwnProperty.call(params, p)) {
                (input = $('<input type=\'hidden\'>')).attr('name', p);
                input.val(params[p]);
                form.append(input);
            }
            $('html').append(form);
            form.submit();
        };
        this.getOrderDetailLinkDom = function(orderId, comefromEnter) {
            return comefromEnter ? utilService.i18nReplace('<a href="#/subaccount/orderDetail?orderId={0}&orderAttr={1}&orgname={2}&orgId={3}&subaccountId={4}&rootOrgId={5}" target="_blank">{0}</a>', {
                '0': orderId,
                '1': $stateParams.orderAttr,
                '2': $stateParams.orgname,
                '3': $stateParams.orgId,
                '4': $stateParams.subaccountId,
                '5': $stateParams.rootOrgId
            }) : utilService.i18nReplace('<a href="#/userindex/orderDetail?orderId={0}" target="_blank">{0}</a>', {
                '0': orderId
            });
        };
        this.getOrderDetailLink = function(orderId, comefromEnter) {
            return comefromEnter ? utilService.i18nReplace('#/subaccount/orderDetail?orderId={0}&orderAttr={1}&orgname={2}&orgId={3}&subaccountId={4}&rootOrgId={5}', {
                '0': orderId,
                '1': $stateParams.orderAttr,
                '2': $stateParams.orgname,
                '3': $stateParams.orgId,
                '4': $stateParams.subaccountId,
                '5': $stateParams.rootOrgId
            }) : utilService.i18nReplace('#/userindex/orderDetail?orderId={0}', {
                '0': orderId
            });
        };
        this.getI18nDate = function(time) {
            try {
                var format = orderI18order.timeFormat.date;
                return $filter('date')(time, format);
            } catch (e) {
                return time;
            }
        };
        this.getI18nHHmmssGMT = function(time) {
            var format;
            try {
                format = orderI18order.timeFormat.time;
                return $filter('date')(time, format).replace(/([\+|\-])([\d]{2})([\d]{2})$/, '$1$2:$3');
            } catch (e) {
                return time;
            }
        };
        this.orderFormatTime = function(time, format) {
            try {
                format = orderI18order.timeFormat[format];
                return $filter('date')(time, format).replace(/([\+|\-])([\d]{2})([\d]{2})$/, '$1$2:$3');
            } catch (e) {
                return time;
            }
        };
        this.listGroupBy = function(list, groupbyKey) {
            var groupedModel, i;
            groupedModel = {
                'groupedKeys': [],
                'itemMap': {},
                'addItem': function(item) {
                    var groupName;
                    if (!item) return;
                    if (!(groupName = 'function' == typeof groupbyKey ? groupbyKey(item) : item[groupbyKey])) return;
                    if (groupedModel.itemMap[groupName]) groupedModel.itemMap[groupName].push(item); else {
                        groupedModel.itemMap[groupName] = [ item ];
                        groupedModel.groupedKeys.push(groupName);
                    }
                    return;
                },
                'getGroups': function() {
                    return groupedModel.groupedKeys.map(function(key) {
                        return groupedModel.itemMap[key];
                    });
                }
            };
            for (i = 0; i < list.length; i++) groupedModel.addItem(list[i]);
            return groupedModel.getGroups();
        };
        this.getCommisionAmount = function(amountInfo) {
            return amountInfo.receivedCommissionAmount || amountInfo.commissionAmount || 0;
        };
        this.getHelpUrl = function(key) {
            key += '_help_url';
            return 'hk' == window.realVer ? orderI18orderUrl[key += '_hk'] : orderI18orderUrl[key];
        };
        this.getSystemConfigsByKey = function(keys) {
            var configval, key, i, indexKey;
            configval = {};
            if (systemConfig) if (keys) if (_.isArray(keys)) for (i = 0; i < keys.length; i++) {
                indexKey = keys[i];
                void 0 !== systemConfig[indexKey] && (configval[indexKey] = systemConfig[indexKey]);
            } else {
                try {
                    key = JSON.parse(systemConfig[keys]);
                } catch (e) {
                    key = systemConfig[keys];
                }
                configval[keys] = key;
            } else configval = systemConfig;
            return configval;
        };
        HEC_ECS = this.getSystemConfigsByKey('HEC_ECS_Switch');
        HEC_EVS = this.getSystemConfigsByKey('HEC_EVS_Switch');
        this.getSystemConfigsByKey('HEC_VPC_Switch');
        this.getSystemConfigsByKey('HEC_SECGROUP_Switch');
        HEC_EIP = this.getSystemConfigsByKey('HEC_EIP_Switch');
        this.getSystemConfigsByKey('HEC_BINDWIDTH_Switch');
        this.frozenErrorCode = [ 'CBC.7275', 'CBC.7276', 'CBC.7277', 'CBC.7278', 'CBC.7279', 'CBC.7280', 'CBC.7281', 'CBC.0401', 'CBC.7269', 'CBC.7270', 'CBC.7271', 'CBC.7272', 'CBC.7273', 'CBC.7274', 'CBC.0402' ];
        this.FailedRetreatColumns = [ {
            'title': i18v1r2.demandList_table_sub_name + '/ID',
            'width': '15%'
        }, {
            'title': i18v1r2.table_productClass,
            'width': '12%',
            'items': [],
            'id': 'productClass',
            'enableSearch': !0,
            'selectedId': ''
        }, {
            'title': orderI18order.operationTitle.spec,
            'width': '15%'
        }, {
            'title': orderI18v1r2.table_datacenterName,
            'width': '12%',
            'items': [],
            'selectedId': '',
            'id': 'datacenterName'
        }, {
            'title': i18v1r2.resource_of_order,
            'width': '10%'
        }, {
            'title': i18v1r2.table_operate,
            'width': '10%'
        } ];
        this.FailedRetreatPartyColumns = [ {
            'title': i18v1r2.demandList_table_sub_name + '/ID',
            'width': '15%'
        }, {
            'title': i18v1r2.table_productClass,
            'width': '12%',
            'enableSearch': !0
        }, {
            'title': orderI18order.operationTitle.spec,
            'width': '13%'
        }, {
            'title': i18v1r2.table_organization,
            'width': '12%'
        }, {
            'title': i18v1r2.table_project,
            'width': '10%'
        }, {
            'title': i18v1r2.resource_of_order,
            'width': '9%'
        }, {
            'title': i18v1r2.table_operate,
            'width': '7%'
        } ];
        this.FailedRetreatDetailColumns = [ {
            'title': i18v1r2.renewal_resourceNme + '/ID',
            'width': '15%'
        }, {
            'title': i18v1r2.table_productClass,
            'width': '14%',
            'enableSearch': !0
        }, {
            'title': orderI18order.operationTitle.spec,
            'width': '15%'
        }, {
            'title': orderI18v1r2.table_datacenterName,
            'width': '14%'
        }, {
            'title': i18v1r2.serviceManagement_table_serviceStatu,
            'width': '8%'
        }, {
            'title': i18v1r2.resource_of_order,
            'width': '12%'
        } ];
        this.isConfirm = function() {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/detail-info/{customerId}',
                    'o': {
                        'customerId': $rootScope.domainId
                    }
                },
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.taxAmountHelpFun = function(currentLanguage) {
            var taxAmountHelp;
            return taxAmountHelp = customiseVer === VERSION_KEY_HK ? {
                'content': utilService.i18nReplace('{0} <a href=\'{1}\' target=\'_blank\' style=\'color: #96ADFA\'>{2}</a>{3}', {
                    '0': orderI18v1r2.cal_tax_detail_lookat,
                    '1': orderI18orderUrl.tax_help_url_hk,
                    '2': orderI18v1r2.cal_tax_help_word,
                    '3': '.'
                }),
                'position': 'top',
                'maxWidth': '300px'
            } : taxAmountHelp;
        };
        this.floatAdd = function(num1, num2) {
            var num1Digits, num2Digits, baseNum, MAX_SAFE_INTEGER;
            try {
                num1Digits = (num1.toString().split('.')[1] || '').length;
                num2Digits = (num2.toString().split('.')[1] || '').length;
                baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
                MAX_SAFE_INTEGER = 9007199254740991;
                if ((MAX_SAFE_INTEGER = Number && Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : MAX_SAFE_INTEGER) <= num1 * baseNum || MAX_SAFE_INTEGER <= num2 * baseNum) return num1 + num2;
                return (num1 * baseNum + num2 * baseNum) / baseNum;
            } catch (e) {
                return num1 + num2;
            }
        };
        this.listAdd = function(l1, l2) {
            if (!l1 || 0 === l1.length) return l2 || [];
            if (!l2) return l1;
            return l1.concat(l2.filter(function(v2) {
                return -1 === $.inArray(v2, l1);
            }));
        };
        this.listSub = function(l1, l2) {
            if (!l1 || 0 === l1.length) return l1 || [];
            if (!l2 || 0 === l2.length) return l1 || [];
            return l1.filter(function(v1) {
                return -1 == $.inArray(v1, l2);
            });
        };
        this.listIntersec = function(l1, l2) {
            if (!l1 || 0 === l1.length) return [];
            if (!l2 || 0 === l2.length) return [];
            return l1.filter(function(v1) {
                return -1 < $.inArray(v1, l2);
            });
        };
        this.getOrderStatus = function(data) {
            return orderI18order['status_' + $.encoder.encodeForHTML(data.status || data.orderStatus)];
        };
        this.getOrderExpirationTime = function(order, validitydata) {
            var creatTime, endTime, t;
            if (!order || !validitydata) return !1;
            creatTime = new Date($.encoder.encodeForHTML(order.lastUpdateTime));
            endTime = '';
            if (order.payTimeLimit) return t = creatTime.getUTCMinutes() + order.payTimeLimit, 
            endTime = creatTime.setUTCMinutes(t);
            switch (validitydata.periodType) {
              case 0:
                t = creatTime.getUTCDate() + validitydata.periodNum;
                endTime = creatTime.setUTCDate(t);
                break;

              case 1:
                t = creatTime.getUTCDate() + 7 * validitydata.periodNum;
                endTime = creatTime.setUTCDate(t);
                break;

              case 2:
                t = creatTime.getUTCMonth() + validitydata.periodNum;
                endTime = creatTime.setUTCMonth(t);
                break;

              case 3:
                t = creatTime.getUTCFullYear() + validitydata.periodNum;
                endTime = creatTime.setUTCFullYear(t);
            }
            return endTime;
        };
        this.getOrderValidity = function(subaccountId) {
            var req = {
                'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/systemconf/sysperiod/get-sysperiod',
                'timeout': 6e4,
                'params': {
                    'periodID': 5
                },
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            };
            if (subaccountId) {
                req.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbcconfigcenterservice/v1/systemconf/sysperiod/get-sysperiod';
                req.beforeSend = function(request) {
                    request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                };
            }
            return camel.get(req);
        };
        this.getSubscriptionStatus = function(data) {
            if (data.status == SUBSCRIPTIONSTATUS_EXPIRED && 3 == data.cancelFlag) return i18v1r2.tab_serviceManagement_unsubscribService;
            if (data.status == SUBSCRIPTIONSTATUS_EXPIRED && 6 == data.cancelFlag) return i18v1r2.tab_serviceManagement_cancelFlag_6;
            return i18v1r2['subscription_status_' + $.encoder.encodeForHTML(data.status)];
        };
        this.getPkgInfo = function(subscriptionId, renewalPolicies, renewCount) {
            var str, maxPeriodNum, maxRenewTimes, minPeriodNum;
            str = '';
            if (renewalPolicies && 0 < renewalPolicies.length && (renewalPolicies = renewalPolicies[0].renewalPolicyItems) && 0 < renewalPolicies.length) {
                maxPeriodNum = (renewalPolicies = renewalPolicies[0]).maxPeriodNum;
                maxRenewTimes = renewalPolicies.maxRenewTimes;
                minPeriodNum = renewalPolicies.minPeriodNum;
                renewalPolicies = renewalPolicies.periodType;
                -1 == maxRenewTimes && (maxRenewTimes = i18v1r2.renew_times);
                str = utilService.i18nReplace(i18v1r2.renewalPolicyItem_tip, {
                    '1': subscriptionId,
                    '2': minPeriodNum,
                    '3': maxPeriodNum,
                    '4': i18v1r2['periodType_' + renewalPolicies],
                    '5': maxRenewTimes,
                    '6': renewCount
                });
            }
            return str;
        };
        this.queryVolumeById = function(volume_id, regionCode) {
            var projectId, i, url;
            projectId = $rootScope.projectId;
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].name == regionCode) {
                projectId = $rootScope.regionProjectList[i].id;
                break;
            }
            url = '/rest/ebs/v2/' + projectId + '/volumes/' + volume_id;
            HEC_EVS[regionCode] && (url = '/rest/ebs/v2/' + projectId + '/os-vendor-volumes/' + volume_id);
            return camel.get({
                'url': window.appWebPath + url,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', regionCode);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryPublicipById = function(publicip_id, regionCode) {
            var projectId, i;
            projectId = $rootScope.projectId;
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].name == regionCode) {
                projectId = $rootScope.regionProjectList[i].id;
                break;
            }
            return camel.get({
                'url': window.appWebPath + '/rest/vpc/v2/' + projectId + '/publicips/' + publicip_id,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', regionCode);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryServerById = function(server_id, regionCode) {
            var projectId, i, url;
            projectId = $rootScope.projectId;
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].name == regionCode) {
                projectId = $rootScope.regionProjectList[i].id;
                break;
            }
            url = '/rest/nova/v2/' + projectId + '/servers/' + server_id;
            HEC_ECS[regionCode] && (url = '/rest/ecs/v1/' + projectId + '/cloudservers/' + server_id);
            return camel.get({
                'url': window.appWebPath + url,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', regionCode);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getUserProjects_new = function() {
            return camel.get({
                'url': window.appWebPath + '/rest/iam/v3/projects',
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getCreateTimeData = function(str) {
            return [ {
                'label': orderI18order.myorder.create_time_all,
                'id': '0'
            }, {
                'label': orderI18order.myorder.createTimeSelect[0],
                'id': '1'
            }, {
                'label': orderI18order.myorder.createTimeSelect[1],
                'id': '2'
            }, {
                'label': orderI18order.myorder.createTimeSelect[2],
                'id': '3'
            }, {
                'label': orderI18order.myorder.createTimeSelect[3],
                'id': '4'
            }, {
                'label': str || orderI18order.myorder.createTimeSelect[4],
                'id': '5'
            } ];
        };
        this.getExpireTimeData = function(str, selectId) {
            return [ {
                'label': i18v1r2.All,
                'selectId': '0',
                'checked': 0 == selectId
            }, {
                'label': orderI18order.myorder.expireTimeIntervalSelect[0],
                'selectId': '7',
                'checked': 7 == selectId
            }, {
                'label': orderI18order.myorder.expireTimeIntervalSelect[1],
                'selectId': '15',
                'checked': 15 == selectId
            }, {
                'label': orderI18order.myorder.expireTimeIntervalSelect[2],
                'selectId': '30',
                'checked': 30 == selectId
            }, {
                'label': str || orderI18order.myorder.createTimeSelect[4],
                'selectId': '99',
                'checked': 99 == selectId
            } ];
        };
        this.queryFreeResource = function(params) {
            return camel.post({
                'url': window.appWebPath + '/rest/CSBBillingDeductService/rest/billing/deductservice/v1/freeresource/queryFreeResource',
                'params': params,
                'timeout': 6e4,
                'mask': !1
            });
        };
        this.queryVolume = function(volume_id, regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/ebs/v2/' + projectId + '/volumes/' + volume_id;
            HEC_EVS[regionCode] && (url = '/rest/ebs/v2/' + projectId + '/os-vendor-volumes/' + volume_id);
            return camel.get({
                'url': window.appWebPath + url,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryPublicip = function(publicip_id, regionCode, projectId) {
            var ProjectName, i;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            return camel.get({
                'url': window.appWebPath + '/rest/vpc/v2/' + projectId + '/publicips/' + publicip_id,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryBandwidths = function(bandwidth_id, regionCode, projectId) {
            var ProjectName, i;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            return camel.get({
                'url': window.appWebPath + '/rest/vpc/v2/' + projectId + '/bandwidths/' + bandwidth_id,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryServer = function(server_id, regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/nova/v2/' + projectId + '/servers/' + server_id;
            HEC_ECS[regionCode] && (url = '/rest/ecs/v1/' + projectId + '/cloudservers/' + server_id);
            return camel.get({
                'url': window.appWebPath + url,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryVolumeAttachments = function(server_id, regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/ecs/v2/' + projectId + '/servers/' + server_id + '/os-volume_attachments';
            HEC_ECS[regionCode] && (url = '/rest/ecs/v1/' + projectId + '/cloudservers/' + server_id + '/os-volume_attachments');
            return camel.get({
                'url': window.appWebPath + url,
                'params': {
                    'region': regionCode
                },
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryVolumeAttachmentsV2 = function(server_id, regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/nova-ext/v1/servers/' + server_id + '/block_device';
            HEC_ECS[regionCode] && (url = '/rest/ecs/v1/' + projectId + '/cloudservers/' + server_id + '/block_device');
            return camel.get({
                'url': window.appWebPath + url,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getPublicips = function(regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/vpc/v2/' + projectId + '/publicips';
            HEC_EIP[regionCode] && (url += '?enterprise_project_id=all_granted_eps');
            return camel.get({
                'url': window.appWebPath + url,
                'timeout': 6e4,
                'params': {
                    'tenant_id': projectId
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getServers = function(regionCode, projectId) {
            var ProjectName, i, url;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == projectId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            url = '/rest/nova/v2/' + projectId + '/servers/detail';
            HEC_ECS[regionCode] && (url = '/rest/ecs/v1/' + projectId + '/cloudservers/detail?offset=1&enterprise_project_id=all_granted_eps');
            return camel.get({
                'url': window.appWebPath + url,
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryVPC = function(vpcId, regionCode, tenantId) {
            var ProjectName, i;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length && tenantId) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == tenantId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/vpc/network/v1/vpc/{vpcId}',
                    'o': {
                        'vpcId': vpcId
                    }
                },
                'params': {},
                'timeout': 6e4,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getExpireMode = function(data) {
            if (data && data.trialFlag) return orderI18v1r2.expireMode_trial;
            if (0 === data.expireMode && data.retentionPeriodEndTime == data.expireTime) return i18v1r2.expireMode_2_1;
            return orderI18v1r2['expireMode_' + data.expireMode];
        };
        this.getAvailabilityZone = function(availability_zone) {
            var str, arr;
            str = '';
            return str = (str = availability_zone && (arr = availability_zone.split('.')) && 0 < arr.length && i18v1r2['zone_' + arr[0]] ? i18v1r2['zone_' + arr[0]] : str) || availability_zone;
        };
        this.queryMultFreeResource = function(params) {
            return BILLINGUSAGESWITH ? camel.post({
                'url': window.appWebPath + kongs_name + '/CSBBillingDeductService/rest/billing/deductservice/v1/freeresource/freeresusage-detail',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            }) : camel.post({
                'url': window.appWebPath + kongs_name + '/CSBBillingDeductService/rest/billing/deductservice/v1/freeresource/freeresusage-detail',
                'params': params,
                'timeout': 6e4,
                'mask': !1,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getQuotaReuseCycleTip = function(quotaReuseCycle) {
            var tip = '';
            return tip = 1 != quotaReuseCycle && i18v1r2['quotaReuseCycle_' + quotaReuseCycle] ? utilService.i18nReplace(i18v1r2.quotaReuse_tips, {
                '0': i18v1r2['quotaReuseCycle_' + quotaReuseCycle]
            }) : tip;
        };
        this.getConfigInfo = function(configitem) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/systemconf/configration/queryConfigration',
                'timeout': 6e4,
                'mask': !1,
                'params': {
                    'configItem': configitem
                },
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.getConfigAttributeValue = function(params) {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/drm/attributeValue',
                'timeout': 6e4,
                'mask': !1,
                'params': params,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryInquiryResource = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/BSS/billing/ratingservice/v2/inquiry/resource',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.orderInquiry = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/unsubscribe/orderInquiry',
                'params': params,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.resourceInquiry = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcordercoreservice/v1/unsubscribe/resourceInquiry',
                'params': params,
                'timeout': 6e4,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.hardwareInquiryFromOrdercore = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/csbordercoreservice/v1/unsubscribe/hardwareInquiry',
                'params': params,
                'timeout': 6e4,
                'mask': !0,
                'beforeSend': function(request) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryFlavorsInfo = function(tenantId, regionCode) {
            var ProjectName, i;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == tenantId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/ecs/v1/{tenant_id}/cloudservers/flavors',
                    'o': {
                        'tenant_id': tenantId
                    }
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.queryBMSFlavorsInfo = function(tenantId, regionCode) {
            var ProjectName, i;
            ProjectName = '';
            if ($rootScope.regionProjectList && 0 < $rootScope.regionProjectList.length) for (i in $rootScope.regionProjectList) if ($rootScope.regionProjectList[i].id && $rootScope.regionProjectList[i].id == tenantId) {
                ProjectName = $rootScope.regionProjectList[i].name;
                break;
            }
            return camel.get({
                'url': {
                    's': window.appWebPath + '/rest/bms/v1/{tenant_id}/baremetalservers/flavors',
                    'o': {
                        'tenant_id': tenantId
                    }
                },
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('region', regionCode);
                    request.setRequestHeader('ProjectName', ProjectName);
                    $rootScope.delUrlParameter && (setting.url = $rootScope.delUrlParameter(setting.url, '_'));
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                }
            });
        };
        this.checkchineseSwitch = 'en-us' == window.urlParams.lang;
        this.specialCheckListUrl = {
            '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info': [ 'cusVerifiedInfo', 'modVerifiedInfo' ],
            '/rest/cbc/cbccustmgrservice/v1/customer/detail-info/{customerID}': [ 'userInfo' ],
            '/rest/cbc/cbccustmgrservice/v1/customer-contact/contact-infos/{customerID}': [ 'contactList' ],
            '/v1/partner/resellers/queryApplyList': [ 'list' ],
            '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-info/{customerId}': [ 'cusVerifiedInfo', 'modVerifiedInfo' ],
            '/rest/cbc/cbccustmgrservice/v1/account/address': []
        };
        this.getDataFun = function(dataJson, ucUrl) {
            var i, key;
            if (this.specialCheckListUrl && ucUrl && Object.prototype.hasOwnProperty.call(this.specialCheckListUrl, ucUrl)) if (dataJson) if (this.specialCheckListUrl[ucUrl] && this.specialCheckListUrl[ucUrl].length) for (i = 0; i < this.specialCheckListUrl[ucUrl].length; i++) dataJson[key = this.specialCheckListUrl[ucUrl][i]] && (dataJson[key] = ''); else dataJson = ''; else dataJson = '';
            return dataJson;
        };
        this.buildChineseMonitor = function(data, url, langJson) {
            if (-1 === document.domain.indexOf('account.huaweicloud.com') && -1 === document.domain.indexOf('account-intl.huaweicloud.com')) return;
            if ('en-us' == langJson && /[\u4e00-\u9fa5]+/.test(JSON.stringify(data))) {
                langJson = JSON.stringify(data).match(/[\u4e00-\u9fa5]+/g);
                data = {
                    'type': 4,
                    'page': window.location.hash,
                    'requestURL': url,
                    'data': langJson
                };
                PMP.RavenSendException('[Found chinese response in english request]', data, '', {
                    'apiPath': '/api/51/store/',
                    'dsnCode': 'a99ee93daff249d3884ceabb787ab498'
                });
            }
        };
        this.hasBeforeSendCheckFun = function(xhr, url, ucUrl) {
            var dataJson, urlJson, langJson;
            try {
                0;
                dataJson = xhr && xhr.responseJSON ? angular.copy(xhr.responseJSON) : '';
                urlJson = url;
                langJson = window.urlParams.lang;
                dataJson = this.getDataFun(dataJson, ucUrl);
                this.buildChineseMonitor(dataJson, urlJson, langJson);
            } catch (e) {}
        };
        this.getAuthInfoRealData = function(otherCusID) {
            var req = {
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status',
                'params': {
                    'customerId': $rootScope.domainId
                },
                'timeout': 6e4,
                'mask': !1
            };
            if (otherCusID) {
                req.beforeSend = function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    request.setRequestHeader('X-Sub-Cust-Id', otherCusID);
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        func(xhr, status);
                        try {
                            this.checkchineseSwitch && this.hasBeforeSendCheckFun(xhr, setting.url);
                        } catch (e) {}
                    };
                };
                req.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status';
                req.params.customerId = otherCusID;
            }
            return camel.get(req);
        };
        this.getRealNameAuthInfo = function(hidemask) {
            var respTime, result;
            respTime = '';
            return (result = camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-info/' + $rootScope.domainId,
                'timeout': 6e4,
                'mask': !hidemask,
                'beforeSend': function(request, setting) {
                    request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    var func = setting.complete;
                    setting.complete = function(xhr, status) {
                        func(xhr, status);
                        try {
                            this.checkchineseSwitch && this.hasBeforeSendCheckFun(xhr, setting.url, '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-info');
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
        this.getCustomerLinks = function(param) {
            return camel.get({
                'url': {
                    's': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-contact/contact-infos/{customerID}',
                    'o': {
                        'customerID': param.customerID
                    }
                },
                'params': {
                    'payAuthority': param.payAuthority
                },
                'timeout': 6e4,
                'mask': !1
            });
        };
        this.getOrderTimeShow = function(data, serverTime, isRenewal) {
            var obj, nowTime;
            obj = {
                'linktip': '--',
                'linktipShow': !1,
                'delete_tip': '',
                'tip': !1,
                'color': '#333'
            };
            if (data.expireTime) {
                nowTime = (serverTime || new Date()).getTime();
                if (0 < new Date(data.expireTime).getTime() - nowTime) {
                    if ((nowTime = this.countTime(data.expireTime, serverTime)).d <= 7 && 0 <= nowTime.d) {
                        obj.color = '#ff8833';
                        obj.tip = nowTime.d || nowTime.h || nowTime.m || nowTime.s;
                        obj.linktip = '<span style="color:#F7746F;">' + orderI18v1r2.coupon_date_expiring + '</span>';
                        obj.linktipShow = !0;
                    } else obj.linktip = '<span style="display: none;">' + i18v1r2.orderPayDateLimitFont + $.encoder.encodeForHTML(nowTime.show) + i18v1r2.orderPayDateLimit + '</span>';
                    obj.linktipText = i18v1r2.orderPayDateLimitFont + $.encoder.encodeForHTML(nowTime.show) + i18v1r2.orderPayDateLimit;
                }
                return obj;
            }
        };
        this.substrTime = function(time) {
            if (!time) return null;
            if ('zh-cn' == $rootScope.currentLanguage) return time.split(' ')[0];
            if ('en-us' == $rootScope.currentLanguage) return time.substr(0, 12);
            if ('pt-br' == $rootScope.currentLanguage || 'es-us' == $rootScope.currentLanguage) return time.substr(0, 10);
            return time;
        };
        NEXT_OPERATION_EXPIRE = 2, NEXT_OPERATION_TO_ONDEMAND = 1, NEXT_OPERATION_FREEZE = 5, 
        NEXT_OPERATION_DELETE = 4, 0;
        this.getRemainTimeShowV2 = function(data, isRenewal) {
            var content, obj, time_obj, countdowntext, tip1;
            obj = {
                'content': content = '--',
                'linktip': '--',
                'delete_tip': '',
                'tip': !1,
                'color': '#333'
            };
            if (data.productInstance && (POLICY_CYCLECHARGE == data.productInstance.chargeMode || POLICY_USAGECHARGE == data.productInstance.chargeMode)) return obj;
            time_obj = this.countTimeV2(data.remainingTime);
            if (NEXT_OPERATION_TO_ONDEMAND == data.currentStatus) {
                countdowntext = utilService.i18nReplace(orderI18v1r2.renewalManagement_countdown, {
                    '0': $.encoder.encodeForHTML(time_obj.show)
                });
                if (time_obj.d <= 7) {
                    obj.color = '#ff8833';
                    obj.content = '<span style="color:#ff8833;">' + countdowntext + '</span><br/><span style="color:#ff8833;font-size: 12px;">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                } else obj.content = '<span>' + countdowntext + '</span><br/><span class="font12">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                obj.linktip = obj.content.replace(/style="[^"]*"/g, '');
                return obj;
            }
            this.getSubscriptionStatus(data);
            countdowntext = '';
            if (data.currentStatus == NEXT_OPERATION_EXPIRE) {
                countdowntext = utilService.i18nReplace(i18v1r2.renew_EndTime_tip, {
                    '0': $.encoder.encodeForHTML(time_obj.show)
                });
                if (time_obj.d <= 7) {
                    obj.color = '#ff8833';
                    content = '<span style="color:#DE504E;">' + countdowntext + '</span><br/><span style="color:#DE504E;font-size: 12px;">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.nextExpireTime), 'csbTime') + '</span>';
                } else content = '<span>' + countdowntext + '</span><br/><span class="font12">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.nextExpireTime), 'csbTime') + '</span>';
            } else if (data.currentStatus == NEXT_OPERATION_FREEZE) {
                tip1 = i18v1r2.renew_gracePeriodEndtime_tip1;
                countdowntext = utilService.i18nReplace(tip1, {
                    '1': $.encoder.encodeForHTML(time_obj.show)
                });
                if (time_obj.d <= 7) {
                    content = '<span style="color:#DE504E;">' + countdowntext + '</span><br/><span style="color:#DE504E;font-size: 12px;">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.gracePeriodEndtime), 'csbTime') + '</span>';
                    obj.color = '#DE504E';
                } else content = '<span >' + countdowntext + '</span><br/><span style="font-size: 12px;">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.gracePeriodEndtime), 'csbTime') + '</span>';
            } else if (data.currentStatus == NEXT_OPERATION_DELETE) {
                tip1 = orderI18v1r2.renew_retentionPeriodEndTime_tip1;
                1 === data.productMode && (tip1 = orderI18v1r2.package_expire_tip);
                countdowntext = utilService.i18nReplace(tip1, {
                    '1': $.encoder.encodeForHTML(time_obj.show)
                });
                if (time_obj.d <= 15) {
                    content = '<span style="color:#DE504E;">' + countdowntext + '</span><br/><span style="color:#DE504E;font-size: 12px;">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.retentionPeriodEndTime), 'csbTime') + '</span>';
                    obj.color = '#DE504E';
                } else content = '<span>' + countdowntext + '</span><br/><span style="font-size: 12px;">' + $filter('csbFormatDate')($.encoder.encodeForHTML(data.retentionPeriodEndTime), 'csbTime') + '</span>';
            }
            obj.content = content;
            obj.linktip = content.replace(/style="[^"]*"/g, '');
            return obj;
        };
        this.countTimeV2 = function(remainingTime, hideSecs) {
            var data_obj;
            data_obj = {
                'd': 0,
                'h': 0,
                'm': 0,
                's': 0,
                'show': ''
            };
            remainingTime = Math.abs(remainingTime);
            data_obj.d = Math.floor(remainingTime / 86400);
            data_obj.h = Math.floor((remainingTime - 60 * data_obj.d * 60 * 24) / 3600);
            data_obj.m = Math.floor((remainingTime - 60 * data_obj.d * 60 * 24 - 60 * data_obj.h * 60) / 60);
            data_obj.s = Math.floor(remainingTime - 60 * data_obj.d * 60 * 24 - 60 * data_obj.h * 60 - 60 * data_obj.m);
            if (0 < data_obj.d) data_obj.show = 1 < data_obj.d ? data_obj.d + orderI18v1r2.periodType_days : data_obj.d + orderI18v1r2.periodType_day; else {
                0 < data_obj.h && (data_obj.show = 1 < data_obj.h ? data_obj.h + orderI18v1r2.periodType_hours : data_obj.h + orderI18v1r2.periodType_hour);
                0 < data_obj.m && (data_obj.show = 1 < data_obj.m ? data_obj.show + ' ' + data_obj.m + orderI18v1r2.periodType_minutes : data_obj.show + ' ' + data_obj.m + orderI18v1r2.periodType_minute);
                hideSecs || (data_obj.show = 1 < data_obj.s ? data_obj.show + ' ' + data_obj.s + orderI18v1r2.periodType_seconds : data_obj.show + ' ' + data_obj.s + orderI18v1r2.periodType_second);
            }
            return data_obj;
        };
        this.checkIsAboutToDelete = function(renewAbleSubscriptions) {
            var i, sub;
            0;
            for (i = 0; i < renewAbleSubscriptions.length; i++) {
                sub = renewAbleSubscriptions[i];
                if ((sub = new Date(sub.retentionPeriodEndTime).getTime() - new Date().getTime()) < 0) return !0;
                if (this.countTimeV2(sub / 1e3).d < 7 || sub < 0) return !0;
            }
            return !1;
        };
        this.setPageInterVal = function(supportPages, callbackFn, expireTime) {
            var timer = setInterval(function() {
                var isSupport, i;
                isSupport = !1;
                for (i = 0; i < supportPages.length; i++) window.location.hash && -1 === window.location.hash.indexOf(supportPages[i]) || (isSupport = !0);
                isSupport ? callbackFn(timer, expireTime) : clearInterval(timer);
            }, 1e3);
        };
        this.getI18nDaysStr = function(days) {
            var dayUnit = orderI18order.com_evs_days;
            1 == days && (dayUnit = orderI18order.com_evs_day);
            return utilService.i18nReplace(dayUnit, {
                '1': days
            });
        };
        this.getDuration = function(start, end) {
            start = new Date(start).getTime();
            if (-1 < (end = (new Date(end).getTime() - start) / 864e5).toString().indexOf('.')) return $filter('csbNumber')(end, 2);
            return end;
        };
        this.getRemainTimeShow = function(data, serverTime, isRenewal) {
            var linktip, obj, nowTime, time_obj, retentionPeriodEndTime, str, statusStr, endTime, gracePeriodEndtime;
            if (!_.isUndefined(data.remainingTime) && !_.isUndefined(data.currentStatus)) return this.getRemainTimeShowV2(data, isRenewal);
            obj = {
                'linktip': linktip = '--',
                'delete_tip': '',
                'tip': !1,
                'color': '#333'
            };
            if (data.productInstance && (POLICY_CYCLECHARGE == data.productInstance.chargeMode || POLICY_USAGECHARGE == data.productInstance.chargeMode)) return obj;
            if (RESOURCE_EXPIREMODE_TOONDEMAND == data.expireMode) {
                if (data.nextExpireTime) {
                    nowTime = (serverTime || new Date()).getTime();
                    if (0 < (endTime = new Date(data.nextExpireTime).getTime()) - nowTime) if ((time_obj = this.countTime(data.nextExpireTime, serverTime)).d <= 7) {
                        obj.color = '#ff8833';
                        obj.linktip = '<span style="color:#ff8833;">' + $.encoder.encodeForHTML(time_obj.show) + i18v1r2.renewalManagement_changetoondemand + '</span><br/><span style="color:#ff8833;font-size: 12px;">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                    } else obj.linktip = '<span>' + $.encoder.encodeForHTML(time_obj.show) + i18v1r2.renewalManagement_changetoondemand + '</span><br/><span class="font12">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                }
                return obj;
            }
            if (data.nextExpireTime) {
                nowTime = (serverTime || new Date()).getTime();
                endTime = new Date(data.nextExpireTime).getTime();
                retentionPeriodEndTime = gracePeriodEndtime = null;
                data.gracePeriodEndtime && (gracePeriodEndtime = new Date(data.gracePeriodEndtime).getTime());
                data.retentionPeriodEndTime && (retentionPeriodEndTime = new Date(data.retentionPeriodEndTime).getTime());
                str = '';
                time_obj = {};
                statusStr = this.getSubscriptionStatus(data);
                if (0 < endTime - nowTime) {
                    time_obj = this.countTime(data.nextExpireTime, serverTime);
                    str = utilService.i18nReplace(i18v1r2.renew_EndTime_tip, {
                        '0': $.encoder.encodeForHTML(time_obj.show)
                    });
                    if (time_obj.d <= 7) {
                        obj.color = '#ff8833';
                        linktip = '<span style="color:#ff8833;">' + str + '</span><br/><span style="color:#ff8833;font-size: 12px;">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                    } else linktip = '<span>' + str + '</span><br/><span class="font12">' + $filter('csbFormatDate')(data.nextExpireTime, 'csbTime') + '</span>';
                } else if (0 < gracePeriodEndtime - nowTime) {
                    time_obj = this.countTime(data.gracePeriodEndtime, serverTime);
                    endTime = isRenewal ? i18v1r2.renew_gracePeriodEndtime_tip1 : i18v1r2.renew_gracePeriodEndtime_tip;
                    linktip = '<span style="color:#DE504E;">' + (str = utilService.i18nReplace(endTime, {
                        '0': i18v1r2.subscription_status_3,
                        '1': time_obj.show
                    })) + '</span><br/><span style="color:#DE504E;font-size: 12px;">' + $filter('csbFormatDate')(data.gracePeriodEndtime, 'csbTime') + '</span>';
                    obj.color = '#DE504E';
                } else if (0 < retentionPeriodEndTime - nowTime) {
                    time_obj = this.countTime(data.retentionPeriodEndTime, serverTime);
                    gracePeriodEndtime = isRenewal ? i18v1r2.renew_retentionPeriodEndTime_tip1 : i18v1r2.renew_retentionPeriodEndTime_tip;
                    linktip = '<span style="color:#ff4c4c;">' + (str = utilService.i18nReplace(gracePeriodEndtime, {
                        '0': statusStr,
                        '1': time_obj.show
                    })) + '</span><br/><span style="color:#ff4c4c;font-size: 12px;">' + $filter('csbFormatDate')(data.retentionPeriodEndTime, 'csbTime') + '</span>';
                    obj.color = '#ff4c4c';
                }
            }
            obj.linktip = linktip;
            return obj;
        };
        this.countTime = function(Time, serverTime, isHardware) {
            var data_obj, isLessOneDay;
            isLessOneDay = !(data_obj = {
                'd': 0,
                'h': 0,
                'm': 0,
                's': 0,
                'show': ''
            });
            serverTime = (serverTime ? new Date(serverTime) : new Date()).getTime();
            Time = new Date(Time).getTime();
            Time = Math.abs(Time - serverTime);
            data_obj.d = Math.floor(Time / 864e5);
            data_obj.h = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24) / 36e5);
            data_obj.m = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24 - 1e3 * data_obj.h * 60 * 60) / 6e4);
            data_obj.s = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24 - 1e3 * data_obj.h * 60 * 60 - 1e3 * data_obj.m * 60) / 1e3);
            if (0 < data_obj.d) data_obj.show = 1 < data_obj.d ? data_obj.d + i18v1r2.periodType_days : data_obj.d + i18v1r2.periodType_day; else {
                isLessOneDay = !0;
                0 < data_obj.h && (data_obj.show = data_obj.h + i18v1r2.periodType_hours);
                if (0 < data_obj.m) {
                    isHardware && data_obj.show && (data_obj.show = data_obj.show + orderI18v1r2.hardware_payment_tip_comma);
                    data_obj.show = 1 < data_obj.m ? data_obj.show + data_obj.m + i18v1r2.periodType_minutes : data_obj.show + data_obj.m + i18v1r2.periodType_minute;
                    isHardware && (data_obj.show = data_obj.show + orderI18v1r2.hardware_payment_tip_comma + data_obj.s + (1 < data_obj.s ? i18v1r2.periodType_seconds : i18v1r2.periodType_second));
                } else data_obj.show = data_obj.show + data_obj.s + (1 < data_obj.s ? i18v1r2.periodType_seconds : i18v1r2.periodType_second);
            }
            data_obj.isLessOneDay = isLessOneDay;
            return data_obj;
        };
        this.calcExpireDateByTypeNum = function(expireTime, periodType, periodNum) {
            var current_day, current_month_day, future_day, targetMonthDays;
            current_day = (expireTime = new Date(expireTime)).getDate();
            current_month_day = new Date(expireTime.getFullYear(), expireTime.getMonth(), 1, expireTime.getHours(), expireTime.getMinutes(), expireTime.getSeconds());
            if (periodType == PERIODTYPE_ONYEAR) {
                current_month_day.setFullYear(current_month_day.getFullYear() + periodNum);
                targetMonthDays = future_day = new Date(current_month_day.getFullYear(), current_month_day.getMonth() + 1, 0).getDate();
                current_month_day.setDate(future_day = current_day <= future_day ? current_day : future_day);
            } else if (periodType == PERIODTYPE_ONMONTH) {
                current_month_day.setMonth(current_month_day.getMonth() + periodNum);
                targetMonthDays = future_day = new Date(current_month_day.getFullYear(), current_month_day.getMonth() + 1, 0).getDate();
                current_month_day.setDate(future_day = current_day <= future_day ? current_day : future_day);
            }
            current_day == new Date(expireTime.getFullYear(), expireTime.getMonth() + 1, 0).getDate() && current_month_day.setDate(targetMonthDays);
            return current_month_day;
        };
        this.getExpireDateByTypeNum = function(expireTime, periodType, periodNum) {
            if (!expireTime) return '--';
            expireTime = this.calcExpireDateByTypeNum(expireTime, periodType, periodNum);
            return $filter('csbFormatDate')(expireTime, 'csbTime');
        };
        this.getInputCloudService = function(lablename, arrayList) {
            var length, i;
            if (!lablename) return !1;
            length = arrayList.length;
            for (i = 0; i < length; i++) if (arrayList[i].label === lablename) return arrayList[i].id;
            return !1;
        };
        this.listToTree = function(myId, pId, list) {
            var nodes, row, j, toDo, m, node, n;
            nodes = [];
            for (j = 0; j < list.length; j++) !function(alist, parentId) {
                for (var i = 0; i < alist.length; i++) if (alist[i][myId] == parentId) return 1;
                return;
            }(list, (row = list[j])[pId]) && nodes.push(row);
            toDo = [];
            for (m = 0; m < nodes.length; m++) toDo.push(nodes[m]);
            for (;toDo.length; ) {
                node = toDo.shift();
                for (n = 0; n < list.length; n++) {
                    row = list[n];
                    if (node[myId] == row[pId]) {
                        if (node.children) {
                            node.children.push(row);
                            node.children.sort((sortBy = 'relativeType', new Function('a', 'b', 'return a.' + sortBy + ('asc' == 'desc' ? '>' : '<') + 'b.' + sortBy + '?1:-1')));
                        } else node.children = [ row ];
                        toDo.push(row);
                    }
                }
            }
            var sortBy;
            return nodes;
        };
        this.getTreeTableArr = function(pArray, pLevel, pId) {
            var tableArr, temp, i, children;
            tableArr = [];
            if (!pArray) return tableArr;
            pLevel = angular.isUndefined(pLevel) ? 0 : pLevel + 1;
            pId = angular.isUndefined(pId) ? 'tiTableRoot' : pId;
            for (i = 0; i < pArray.length; i++) {
                children = pArray[i].children;
                pArray[i].children = void 0;
                (temp = pArray[i]).level = pLevel;
                temp.isShow = !0;
                temp.pId = pId;
                temp.hasChildren = !1;
                i === pArray.length - 1 && (temp.isLast = !0);
                tableArr.push(temp);
                if (children && children.length) {
                    if (NEW_RELATION_FLAG) _.each(children, function(item) {
                        if (!item.isBindRelation) {
                            temp.hasChildren = !0;
                            temp.expand = !0;
                            return;
                        }
                    }); else {
                        temp.hasChildren = !0;
                        temp.expand = !0;
                    }
                    tableArr = tableArr.concat(this.getTreeTableArr(children, pLevel, temp.id));
                }
            }
            return tableArr;
        };
        this.getLevelStyle = function(node) {
            return {
                'padding-left': 35 * node.level + 10 + 'px'
            };
        };
        this.toggleChildren = function(data, pId, pExpand) {
            var node, i;
            for (i = 0; i < data.length; i++) pId == (node = data[i]).pId && (!1 === (node.isShow = pExpand) ? this.toggleChildren(data, node.id, !1) : !0 === node.expand && this.toggleChildren(data, node.id, !0));
        };
        this.bindingRelationship = function(id, resourceMap, mainIds, resources) {
            var resourceIds, pResourceIds, subResourceIds, item;
            resourceIds = [ id ];
            pResourceIds = [];
            subResourceIds = [];
            if (item = resourceMap && resourceMap[id] ? resourceMap[id] : item) {
                pResourceIds = this.findParent(item, resourceMap, mainIds);
                subResourceIds = this.findChildren(item, resources, mainIds);
            }
            return resourceIds = resourceIds.concat(pResourceIds).concat(subResourceIds);
        };
        this.findParent = function(item, resourceMap, mainIds) {
            var toDo, resourceIds, node, mainResourceIds;
            toDo = [ item ];
            resourceIds = [];
            for (;item && toDo.length; ) {
                mainResourceIds = (node = toDo.shift())[mainIds];
                node.relativeType && mainResourceIds && mainResourceIds.length && (resourceIds = resourceIds.concat(mainResourceIds));
                _.each(mainResourceIds, function(id) {
                    var mainItem;
                    (mainItem = resourceMap && resourceMap[id] ? resourceMap[id] : mainItem) && mainItem.relativeType && toDo.push(mainItem);
                });
            }
            return resourceIds;
        };
        this.findChildren = function(item, resources, mainIds) {
            var toDo, resourceIds, node, i, row;
            toDo = [ item ];
            resourceIds = [];
            for (;item && toDo.length; ) {
                node = toDo.shift();
                for (i = 0; i < resources.length; i++) {
                    row = resources[i];
                    if (-1 < $.inArray(node.id, row[mainIds]) && row.relativeType) {
                        resourceIds.push(row.id);
                        toDo.push(row);
                    }
                }
            }
            return resourceIds;
        };
        this.slideTooltip = function(tmp_productInstance, product_periodList_map, periodNum) {
            var tipsArr, tips, i, productId;
            tipsArr = [];
            tips = '';
            for (i = 0; i < tmp_productInstance.length; i++) product_periodList_map[productId = tmp_productInstance[i].productId] && (productId = product_periodList_map[productId].periodPromotionTips) && productId[periodNum] && -1 == $.inArray(productId[periodNum], tipsArr) && tipsArr.push(productId[periodNum]);
            1 == tipsArr.length ? tips = tipsArr[0] : 1 < tipsArr.length && (tips = i18v1r2.price_promotion_tip);
            return tips;
        };
        this.showFrozenModel = function(errorcode) {
            var content, url1, url2, url3, url4, url5, instance;
            switch (errorcode) {
              case 'CBC.7275':
                url1 = orderI18orderUrl.frozen_7275_1_help_url;
                url2 = orderI18orderUrl.frozen_7275_2_help_url;
                url3 = orderI18orderUrl.frozen_7275_3_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7275,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7275_intl,
                    '1': url2,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting,
                    '4': url3,
                    '5': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7276':
                url1 = orderI18orderUrl.frozen_7276_1_help_url;
                url2 = orderI18orderUrl.frozen_7276_2_help_url;
                url3 = orderI18orderUrl.frozen_7276_3_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7275,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7275_intl,
                    '1': url2,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting,
                    '4': url3,
                    '5': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7277':
                content = orderI18order.resource_spec_error_99;
                break;

              case 'CBC.7278':
                url1 = orderI18orderUrl.frozen_7278_1_help_url;
                url2 = orderI18orderUrl.frozen_7278_2_help_url;
                url3 = orderI18orderUrl.frozen_7278_3_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7278,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7278_intl,
                    '1': url2,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting,
                    '4': url3,
                    '5': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7279':
                content = orderI18order.errorMsg.msgCBC7279;
                break;

              case 'CBC.7280':
                url1 = orderI18orderUrl.frozen_7280_1_help_url;
                url2 = orderI18orderUrl.frozen_7280_2_help_url;
                url3 = orderI18orderUrl.frozen_7280_3_help_url;
                url4 = orderI18orderUrl.frozen_7280_4_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7280_1,
                    '1': url1,
                    '2': orderI18order.errorMsg.msgCBC7280_2,
                    '3': orderI18order.errorMsg.msgCBC7280_3,
                    '4': url2,
                    '5': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7280_1,
                    '1': url3,
                    '2': orderI18order.errorMsg.msgCBC7280_2,
                    '3': orderI18order.errorMsg.msgCBC7280_3,
                    '4': url4,
                    '5': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7281':
                url1 = orderI18orderUrl.frozen_7281_1_help_url;
                url2 = orderI18orderUrl.frozen_7281_2_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}', {
                    '0': orderI18order.errorMsg.msgCBC7281_1,
                    '1': url1,
                    '2': orderI18order.errorMsg.msgCBC7281_2,
                    '3': orderI18order.errorMsg.msg_consulting
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}', {
                    '0': orderI18order.errorMsg.msgCBC7281_1,
                    '1': url2,
                    '2': orderI18order.errorMsg.msgCBC7281_2,
                    '3': orderI18order.errorMsg.msg_consulting
                });
                break;

              case 'CBC.0401':
                url1 = orderI18orderUrl.frozen_0401_1_help_url;
                url2 = orderI18orderUrl.frozen_0401_2_help_url;
                url3 = orderI18orderUrl.frozen_0401_3_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC0401,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC0401_intl,
                    '1': url2,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting,
                    '4': url3,
                    '5': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7269':
                url1 = orderI18orderUrl.frozen_7269_1_help_url;
                content = 'v1r2' == customiseVer ? orderI18order.errorMsg.msgCBC7269 : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}', {
                    '0': orderI18order.errorMsg.msgCBC7269_intl,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting
                });
                break;

              case 'CBC.7270':
                url1 = orderI18orderUrl.frozen_7270_1_help_url;
                url2 = orderI18orderUrl.frozen_7270_2_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7270,
                    '1': url1,
                    '2': orderI18order.errorMsg.msgCBC7270_1
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7270_intl,
                    '1': url2,
                    '2': orderI18order.errorMsg.msgCBC7270_intl_1
                });
                break;

              case 'CBC.7271':
                url1 = orderI18orderUrl.frozen_7271_1_help_url;
                url2 = orderI18orderUrl.frozen_7271_2_help_url;
                url3 = orderI18orderUrl.frozen_7271_3_help_url;
                url4 = orderI18orderUrl.frozen_7271_4_help_url;
                url5 = orderI18orderUrl.frozen_7271_5_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7271,
                    '1': url1,
                    '2': orderI18order.errorMsg.msgCBC7271_1,
                    '3': orderI18order.errorMsg.msgCBC7271_2,
                    '4': url2,
                    '5': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}<a href=\'{4}\' target=\'_blank\'>{5}</a>{6}<a href=\'{7}\' target=\'_blank\'>{8}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7271_intl,
                    '1': url3,
                    '2': orderI18order.errorMsg.msgCBC7271_intl_1,
                    '3': orderI18order.errorMsg.msgCBC7271_intl_2,
                    '4': url4,
                    '5': orderI18order.errorMsg.msgCBC7271_intl_3,
                    '6': orderI18order.errorMsg.msgCBC7271_intl_4,
                    '7': url5,
                    '8': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.7272':
                content = (customiseVer, orderI18order.errorMsg.msgCBC7272);
                break;

              case 'CBC.7273':
                url1 = orderI18orderUrl.frozen_7273_1_help_url;
                'v1r2' != customiseVer && (content = utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7273_intl,
                    '1': url1,
                    '2': orderI18order.errorMsg.msgCBC7273_intl_1
                }));
                break;

              case 'CBC.7274':
                url1 = orderI18orderUrl.frozen_7274_1_help_url;
                url2 = orderI18orderUrl.frozen_7274_2_help_url;
                content = 'v1r2' == customiseVer ? utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7274,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_learnMore
                }) : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>', {
                    '0': orderI18order.errorMsg.msgCBC7274,
                    '1': url2,
                    '2': orderI18order.errorMsg.msg_learnMore
                });
                break;

              case 'CBC.0402':
                url1 = orderI18orderUrl.frozen_0402_1_help_url;
                content = 'v1r2' == customiseVer ? orderI18order.errorMsg.msgCBC0402 : utilService.i18nReplace('{0}<a href=\'{1}\' target=\'_blank\'>{2}</a>{3}', {
                    '0': orderI18order.errorMsg.msgCBC0402_intl,
                    '1': url1,
                    '2': orderI18order.errorMsg.msg_contact_customerservice,
                    '3': orderI18order.errorMsg.msg_consulting
                });
                break;

              default:
                content = orderI18order.resource_spec_error_99;
            }
            instance = tiMessage.open({
                'type': 'error',
                'closeable': !1,
                'okBtn': {
                    'show': !0,
                    'text': orderI18order.errorMsg.msg_I_know,
                    'disable': !1,
                    'focused': !0,
                    'click': function() {
                        instance.close();
                    }
                },
                'cancelBtn': !1,
                'title': orderI18order.errorMsg.msg_submit_fail,
                'modalClass': 'ti-msg-default-width',
                'content': content,
                'elementId': 'msgtipsId'
            });
        };
        this.transOrderStatus = function(newStatus) {
            var oldStatus = '';
            'Processing' == newStatus && (oldStatus = 3);
            return oldStatus = 'Completed' == newStatus ? 5 : oldStatus;
        };
        this.transOrderType = function(newType) {
            var oldType = '';
            'Subscribe' == newType && (oldType = 1);
            return oldType = 'Modify' == newType ? 3 : oldType;
        };
        this.commonDealwithMoneyTips = function(unsubscribeCoupons) {
            var moneyTipeArrs = [];
            angular.forEach(unsubscribeCoupons, function(item) {
                var isHaveFlag, i, moneyTip;
                isHaveFlag = !1;
                for (i = 0; i < moneyTipeArrs.length; i++) if (moneyTipeArrs[i].type == item.type) {
                    'expired' == item.status ? moneyTipeArrs[i].expiredM = moneyTipeArrs[i].expiredM.add(item.amount) : 'willExpired' == item.status ? moneyTipeArrs[i].willexpiredM = moneyTipeArrs[i].willexpiredM.add(item.amount) : 'notExpired' == item.status && (moneyTipeArrs[i].notexpiredM = moneyTipeArrs[i].notexpiredM.add(item.amount));
                    isHaveFlag = !0;
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
                        'expiredM': 'expired' == item.status ? item.amount : 0,
                        'willexpiredM': 'willExpired' == item.status ? item.amount : 0,
                        'notexpiredM': 'notExpired' == item.status ? item.amount : 0
                    };
                    moneyTipeArrs.push(moneyTip);
                }
            });
            angular.forEach(moneyTipeArrs, function(item, index) {
                var expired, willexpired, notexpired;
                if (item) {
                    expired = item.expiredM;
                    willexpired = item.willexpiredM;
                    notexpired = item.notexpiredM;
                    item.realcontent = expired && (willexpired || notexpired) ? '<span class=\'tip_text\'>(' + orderI18order.retreat.containexpired + ')</span>:' : !expired || willexpired || notexpired ? !expired && willexpired && notexpired ? '<span class=\'tip_text\'>(' + orderI18order.retreat.containwillexpired + ')</span>:' : !(expired || !willexpired || notexpired) && '<span class=\'tip_text\'>(' + orderI18order.retreat.willexpired + ')</span>:' : '<span class=\'tip_text\'>(' + orderI18order.retreat.expired + ')</span>:';
                    if (item.realcontent) {
                        expired && (item.content += '<p>' + orderI18order.retreat['couptype_' + item.type] + ' <span class=\'tip_text_clolor\'>' + format_curreny(G_currencySymbol, $filter('csb_number')(expired, 2)) + '</span> (' + orderI18order.retreat.cannotbeuse + ')</p>');
                        willexpired && (item.content += '<p>' + orderI18order.retreat['couptype_' + item.type] + '<span class=\'tip_text_clolor\'>' + format_curreny(G_currencySymbol, $filter('csb_number')(willexpired, 2)) + '</span> (' + orderI18order.retreat.willcannotbeuse + ')</p>');
                        notexpired && (item.content += '<p>' + orderI18order.retreat['couptype_' + item.type] + '<span class=\'tip_text_clolor\'>' + format_curreny(G_currencySymbol, $filter('csb_number')(notexpired, 2)) + '</span></p>');
                    }
                }
                return;
            });
            return moneyTipeArrs;
        };
        this.percentForm = function(originValue) {
            return originValue.mul(100) + '%';
        };
        this.getTaxInfoList = function(amountInfo) {
            var taxInfoArr, taxAmounts, i, taxInfo, label, taxAmountShow, tip;
            taxInfoArr = [];
            if (!amountInfo || !amountInfo.taxAmounts) return taxInfoArr;
            taxAmounts = amountInfo.taxAmounts;
            for (i = 0; i < taxAmounts.length; i++) {
                if (!(taxInfo = taxAmounts[i]) || !taxInfo.subTaxClass) continue;
                if (taxInfo.taxAmount || 0 == taxInfo.taxAmount) {
                    label = taxInfo.subTaxClass;
                    if (taxInfo.taxAmount < 0 && orderI18order.retreat_tax_tip) {
                        label = utilService.i18nReplace(orderI18order.retreat_tax_tip, {
                            '0': taxInfo.subTaxClass
                        });
                        taxInfo.taxAmount = -taxInfo.taxAmount;
                    }
                    taxAmountShow = format_curreny(G_currencySymbol, $filter('csb_number')(commons.currencyUnitConversion(taxInfo.taxAmount, taxInfo.measureId), 2));
                    tip = '';
                    'VAT' == taxInfo.subTaxClass && (tip = this.taxAmountHelpFun($rootScope.currentLanguage));
                    'WHT' !== label && taxInfoArr.push({
                        'id': 'tax_info_' + taxInfo.subTaxClass,
                        'label': $.encoder.encodeForHTML(label),
                        'amount': taxAmountShow,
                        'value': taxInfo.taxAmount,
                        'tip': tip
                    });
                }
            }
            return taxInfoArr;
        };
        this.queryPermission = function(enterpriseProjectId) {
            publicService.queryProjectPermission(enterpriseProjectId).then(function(res) {
                $rootScope.currentProjectPermission = res.privilegeCodeList;
            }).catch(function(rsp) {}).finally(function() {
                $.isArray($rootScope.currentProjectPermission) || ($rootScope.currentProjectPermission = []);
            });
        };
    };
    angular.module('order.config').tinyService('commonService', service);
});