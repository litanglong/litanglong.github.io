define([], function() {
    'use strict';
    var service;
    service = [ 'camel', '$rootScope', function(camel, $rootScope) {
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
        this.getStudentAuthInfo = function() {
            return camel.get({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/' + $rootScope.domainId,
                'params': {
                    'verifiedType': 2
                },
                'timeout': 6e4,
                'mask': !0
            });
        };
        this.getBanckList = function() {
            return camel.get({
                'url': '//res.hc-cdn.com/usercenter/8.3.203/src/app/business/data/bank.json',
                'mask': !0,
                'timeout': 6e4
            });
        };
        this.custrnverifyIntlStudent = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-info/student',
                'timeout': 6e4,
                'mask': !0,
                'params': params
            });
        };
        this.getSchoolNameByLocation = function(params) {
            return camel.post({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/member/relation_info',
                'params': params,
                'timeout': 6e4
            });
        };
        this.getAuthInfoRealData = function(otherCusID) {
            var req = {
                'url': window.appWebPath + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status',
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
                    };
                };
                req.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status';
                req.params.customerId = otherCusID;
            }
            return camel.get(req);
        };
    } ];
    angular.module('mobile.config').tinyService('customerService', service);
});