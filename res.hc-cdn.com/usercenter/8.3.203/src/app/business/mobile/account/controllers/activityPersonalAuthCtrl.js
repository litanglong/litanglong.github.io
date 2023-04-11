define([ 'm-lib/emojiRegex', 'm-lib/RecordRTC.min', 'm-lib/adapter-9.0.0' ], function(emojiRegex) {
    var activityPersonalAuth;
    activityPersonalAuth = [ '$scope', '$stateParams', 'validator', '$rootScope', 'mobileCommonService', '$state', 'publicService', 'mobileAccountService', 'utilService', '$location', '$timeout', function($scope, $stateParams, validator, $rootScope, mobileCommonService, $state, publicService, mobileAccountService, utilService, $location, $timeout) {
        var personalInfourlPre, switchH5VIDEOOn, isNotAlowNativeVideo, isIOSAllowAuth, HUAWEIIDAuthSWITCH, getRealNameAuthInfoByRNVRsp, initTypeRsp, isCheckGetUserMedia, isGoCheckGetUserMedia, nessCheckUserMedia, query, errMsg, changeAuthType, switchPersonalCard, setSpeciAuthModeByRTCFailed, userMediaItem, iosVer, isInIosList, isOverIOS14, isIOSNew;
        'zh-cn' !== window.urlParams.lang && (window.location.href = $rootScope.addOrReplaceUrlParameter && $rootScope.addOrReplaceUrlParameter(window.location.href, 'locale', 'zh-cn'));
        $stateParams.type = $location.search().type;
        $scope.fromPage = '/mobile/activityPersonalAuth' !== $location.path() ? 'qrcode' : '';
        personalInfourlPre = '';
        0;
        mobileCommonService.initLanguage();
        $scope.promotion = !!$stateParams.service;
        $rootScope.videoUpload = {
            'customerType': USERTYPE_IND
        };
        $rootScope.isShowH5 = !0;
        $rootScope.platformResult = !1;
        $rootScope.isShowAPP = !1;
        $rootScope.isCallFromWX = isCallFromWX;
        $scope.personalInfourl = '';
        switchH5VIDEOOn = publicService.getCharactSwitchByKey('F_REAL_NAME_H5VIDEO_TYPE', !0);
        isNotAlowNativeVideo = publicService.getCharactSwitchByKey('F_RTC_AUTH_SWITCH', !0);
        isIOSAllowAuth = !publicService.getCharactSwitchByKey('F_IOS_AUTH_SWITCH', !0);
        HUAWEIIDAuthSWITCH = publicService.getCharactSwitchByKey('F_HUAWEIID_AUTH_SWITCH', !1);
        isGoCheckGetUserMedia = isCheckGetUserMedia = initTypeRsp = getRealNameAuthInfoByRNVRsp = !1;
        nessCheckUserMedia = [ 'videoType', 'entVideoType' ];
        $scope.redirUrl = mobileAccountService.getHWABI() || $stateParams.service;
        function updateHeight() {
            if (document.documentElement && document.documentElement.clientHeight) {
                var pageHeight = document.documentElement.clientHeight;
                $('#personalhidden').css('height', pageHeight + 'px');
            }
        }
        updateHeight();
        function rotate() {
            window.orientation = parseInt(window.orientation, 10);
            if (180 === window.orientation || 0 === window.orientation) {
                $timeout(function() {
                    updateHeight();
                }, 100);
                $('#personalhidden').css('overflow', 'visible');
                $('.activityAuth_cert-type-bottom-info').css('line-height', '0.7rem');
            } else if (90 === window.orientation || -90 === window.orientation) {
                $timeout(function() {
                    updateHeight();
                }, 100);
                $('#personalhidden').css('overflow', 'auto');
                $scope.isRotated = !0;
            }
        }
        rotate();
        function setCookie(cname, cvalue, days) {
            var date = new Date();
            date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3);
            document.cookie = days ? cname + '=' + cvalue + '; expires=' + date.toUTCString() + ';path=/;domain=' + window.cloudCookieDomain : cname + '=' + cvalue + ';path=/;domain=' + window.cloudCookieDomain;
        }
        'blue' === $stateParams.envType ? setCookie('envType', 'CBC_PaaS_Blue', 1) : 'green' === $stateParams.envType && setCookie('envType', 'CBC_PaaS_Green', 1);
        window.addEventListener('load', rotate, !1);
        window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', rotate, !1);
        $scope.isMcloudApps = isMcloudApp;
        $scope.personal = {
            'name': '',
            'idCard': '',
            'nameFlag': !1,
            'idCardFlag': !1
        };
        $scope.initPage = '';
        $rootScope.pageShow = {
            'perInformation': !1,
            'isShowApp': !1,
            'showBackInformation': !0,
            'personalAuthTitle': $rootScope.i18mobile.realAuth_title,
            'init': function() {
                $rootScope.pageShow.perInformation = !0;
                $rootScope.pageShow.showBackInformation = !0;
            },
            'showPerInformation': function() {}
        };
        $rootScope.pageShow.initPage = '';
        function isSupportAppType() {
            var ua = navigator.userAgent;
            return !/AlipayClient/i.test(ua) && !(/HUAWEI/i.test(ua) && /9.1.2.312/i.test(ua) || isIOS && (/DingTalk/i.test(ua) || /QQ/i.test(ua)));
        }
        changeAuthType = '';
        switchPersonalCard = !1;
        $scope.confirmInfoSuccess = $rootScope.i18mobile.personalCertifi_tip_confirmInfoSuccess;
        $scope.verifyFlow = !1;
        $scope.formItems = {
            'realName': {
                'id': 'realName',
                'label': $rootScope.i18mobile.personalCertifi_placeholder_realName,
                'required': !0,
                'hide': !1,
                'value': '',
                'placeholder': $rootScope.i18mobile.personalCertifi_placeholder_realName,
                'maxLength': 64,
                'change': function() {
                    if ($.trim($scope.personal.name)) {
                        $scope.formItems.realName.label = $rootScope.i18mobile.personalCertifi_placeholder_realName;
                        $('#realNameId').css('color', '#BBBBBB');
                    }
                },
                'focus': function() {
                    $scope.inputNameErrorMsg = '';
                    if ($.trim($scope.personal.name)) {
                        $scope.formItems.realName.label = $rootScope.i18mobile.personalCertifi_placeholder_realName;
                        $('#realNameId').css('color', '#BBBBBB');
                    }
                },
                'checkName': function(value) {
                    var valuetemp;
                    valuetemp = $.trim(value);
                    var regex = new RegExp(emojiRegex);
                    if ('bankCardType' === changeAuthType && ((value = mobileAccountService.getStrlen(value)) < 2 || 30 < value)) return !1;
                    if (0 === valuetemp.length || !validator.newUserAndCorpName(valuetemp) || validator.isEmoji(valuetemp) || !validator.checkCSVInjection(valuetemp) || null !== valuetemp.match(regex)) return !1;
                    return !0;
                },
                'blur': function() {
                    var valuetemp = $scope.personal.name;
                    if ($.trim(valuetemp)) if ($scope.formItems.realName.checkName(valuetemp)) $scope.personal.nameFlag = !0; else {
                        $scope.inputNameErrorMsg = $rootScope.i18mobile.msg_validator_newUserAndCorpNameCheck;
                        $scope.personal.nameFlag = !1;
                    } else {
                        $scope.personal.nameFlag = !1;
                        $scope.formItems.realName.label = '';
                    }
                }
            },
            'idCard': {
                'id': 'idCard',
                'label': $rootScope.i18mobile['personal_placeholder_' + changeAuthType],
                'required': !0,
                'hide': !1,
                'value': '',
                'type': 'text',
                'placeholder': $rootScope.i18mobile.personalCertifi_placeholder_idCardNum,
                'change': function() {
                    if ($.trim($scope.personal.idCard)) {
                        if (15 === $scope.personal.idCard.length || 18 === $scope.personal.idCard.length) this.swatchidCard($scope.personal.idCard); else {
                            $scope.inputIdCardErrorMsg = '';
                            $scope.personal.idCardFlag = 'passCardType' === changeAuthType;
                        }
                        $scope.formItems.idCard.label = $rootScope.i18mobile['personal_placeholder_' + changeAuthType];
                    } else $scope.inputIdCardErrorMsg = '';
                },
                'focus': function() {
                    $scope.inputIdCardErrorMsg = '';
                    if ($.trim($scope.personal.idCard)) {
                        $scope.formItems.idCard.label = $rootScope.i18mobile['personal_placeholder_' + changeAuthType];
                        $('#realNameId').css('color', '#BBBBBB');
                    }
                },
                'blur': function() {
                    if ($.trim($scope.personal.idCard)) this.swatchidCard($scope.personal.idCard); else {
                        $scope.formItems.idCard.label = '';
                        $scope.personal.idCardFlag = !1;
                    }
                },
                'onBlur': function() {
                    document.activeElement.id === $scope.formItems.idCard.id && $('#' + $scope.formItems.idCard.id).blur();
                },
                'swatchidCard': function(value) {
                    errMsg = '';
                    if ('passCardType' !== changeAuthType) if (!value || 15 !== value.length && 18 !== value.length) {
                        query = !1;
                        errMsg = $rootScope.i18mobile.face_error_IDCard;
                    } else if (query = 15 === value.length ? validator.idNumValidator15(value) : validator.idNumValidator18(value)) {
                        query = function(cardId) {
                            var birthYear, birthMonth, month, now, year;
                            birthYear = cardId.substring(6, 10);
                            birthMonth = cardId.substring(10, 12);
                            cardId = cardId.substring(12, 14);
                            year = (now = new Date()).getFullYear();
                            month = now.getMonth() + 1;
                            now = now.getDate();
                            return 18 < (year = year - birthYear) || !(year < 18 || month < birthMonth || !(birthMonth < month || cardId <= now));
                        }(value);
                        errMsg = query ? '' : $rootScope.i18mobile.customer_individalauth_bankCardForm_IDNumber_errorMsg_18;
                    } else errMsg = $rootScope.i18mobile.face_error_IDCard; else if (/^[0-9a-zA-Z]{1,32}$/.test(value) && null != value) query = !0; else {
                        query = !1;
                        errMsg = $rootScope.i18mobile.face_error_IDCard;
                    }
                    $scope.inputIdCardErrorMsg = errMsg;
                    $scope.personal.idCardFlag = query;
                }
            },
            'changeAuthType': {
                'isShow': !1,
                'changeUrl': {
                    'videoType': 'src/app/business/mobile/account/views/activityVideo.html',
                    'bankCardType': 'src/app/business/mobile/account/views/activityBankAuth.html',
                    'personalCardType': 'src/app/business/mobile/account/views/activityPersonalCard.html',
                    'passCardType': 'src/app/business/mobile/account/views/activityPassportAuth.html'
                },
                'initChangeUrl': function(callback) {
                    var switchPerBankDispaly, changeAuthTypeTemp;
                    switchPerBankDispaly = publicService.getCharactSwitchByKey('F_REAL_NAME_PERBANK_SWITCH', !0);
                    $scope.formItems.changeAuthType.changeType = {
                        'passCardType': !0
                    };
                    changeAuthTypeTemp = 'passCardType';
                    if (switchPersonalCard) {
                        $scope.formItems.changeAuthType.changeType.personalCardType = !0;
                        changeAuthTypeTemp = 'personalCardType';
                    }
                    if (switchPerBankDispaly) {
                        $scope.formItems.changeAuthType.changeType.bankCardType = !0;
                        changeAuthTypeTemp = 'bankCardType';
                    }
                    if (isSupportAppType() && switchH5VIDEOOn && !$scope.isShowAPP) {
                        $scope.formItems.changeAuthType.changeType.videoType = !0;
                        changeAuthTypeTemp = 'videoType';
                    }
                    changeAuthTypeTemp = switchPersonalCard ? 'personalCardType' : changeAuthTypeTemp;
                    changeAuthType = $stateParams.type && $scope.formItems.changeAuthType.changeUrl[$stateParams.type] ? $stateParams.type : changeAuthTypeTemp;
                    mobileCommonService.callEvent('initChangeUrl_' + changeAuthType);
                    isGoCheckGetUserMedia && $scope.formItems.changeAuthType.change(changeAuthType);
                    !isGoCheckGetUserMedia && callback && callback();
                },
                'initType': function() {
                    $scope.authTitleH5_personalAuth = $rootScope.i18mobile.realAuth_personalAuth;
                    mobileAccountService.queryCertificateType(0).then(function(data) {
                        initTypeRsp = !0;
                        data.certificateTypes && -1 < $.inArray('ID_CARD', data.certificateTypes) && (switchPersonalCard = !0);
                        $scope.formItems.changeAuthType.initChangeUrl(isGoCheckGetUserMediaFun);
                    }).catch(function() {
                        switchPersonalCard = !(initTypeRsp = !0);
                        $scope.formItems.changeAuthType.initChangeUrl(isGoCheckGetUserMediaFun);
                    });
                },
                'changeType': {},
                'click': function() {
                    $timeout(function() {
                        $(window).height() - $('#changeAuthTypePage').height() < 0 && $('#changeAuthTypePage').css('height', '100vh');
                    }, 0);
                    $scope.formItems.changeAuthType.isShow = !0;
                },
                'closeClick': function() {
                    $scope.formItems.changeAuthType.isShow = !1;
                },
                'change': function(type, isClick) {
                    changeAuthType = type;
                    $rootScope.pageShow.personalAuthTitle = $rootScope.i18mobile['realAuth_type_' + changeAuthType] || $rootScope.pageShow.personalAuthTitle;
                    document.title = '/mobile/entVideoH5' === $location.path() ? $rootScope.i18mobile.document_title_entVideoH5 : $rootScope.i18mobile.document_title_inv;
                    $('#personalhidden').attr('bi_parent_name', $rootScope.i18mobile['bi_arealAuth_type_' + changeAuthType]);
                    if (isCheckGetUserMedia || isIOS || !isClick) {
                        $scope.formItems.changeAuthType.isShow = !1;
                        $('#' + $scope.formItems.idCard.id).attr('placeholder', $rootScope.i18mobile['personal_placeholder_' + changeAuthType]);
                        $('#' + $scope.formItems.realName.id).attr('placeholder', $rootScope.i18mobile.personalCertifi_placeholder_realName);
                        $('div[name="nextBtn"]').attr('id', 'btn_' + changeAuthType);
                        $scope.formItems.idCard.change();
                        mobileCommonService.callEvent(changeAuthType);
                    } else nextVideo(!0, supportInputVideoCallBackByTypeClick);
                }
            },
            'agree': {
                'agreeCheck': !1,
                'goSub': !1,
                'display': !0,
                'gotoAgreeMengBanShow': function() {
                    $scope.isShowPrivacy = !0;
                },
                'closePrivacy': function() {
                    $scope.isShowPrivacy = !1;
                },
                'clickAgree': function() {
                    $scope.formItems.agree.agreeCheck = !$scope.formItems.agree.agreeCheck;
                }
            }
        };
        $scope.redirectBack = function() {
            var redirUrl = mobileAccountService.whitelistCheck($scope.redirUrl);
            redirUrl ? window.location.href = redirUrl : window.history.back(-1);
        };
        setSpeciAuthModeByRTCFailed = function() {
            $rootScope.isShowAPP = isNotAlowNativeVideo;
            $rootScope.isShowH5 = !0;
        };
        userMediaItem = {
            'hasGetUserMedia': function() {
                try {
                    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
                } catch (u) {
                    return !1;
                }
            },
            'getUserMedia': function() {
                void 0 === navigator.mediaDevices && (navigator.mediaDevices = {});
                void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function(constraints) {
                    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
                    if (!getUserMedia) return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    return new Promise(function(resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                });
            },
            'getMediaRecorder': function(callback) {
                try {
                    userMediaItem.mediaRecorder = RecordRTC(window.stream, {
                        'type': 'video'
                    });
                    userMediaItem.webRTCStartRecording(callback);
                } catch (e) {
                    setSpeciAuthModeByRTCFailed();
                    callback();
                }
            },
            'webRTCStartRecording': function(callback) {
                try {
                    userMediaItem.mediaRecorder.startRecording();
                    userMediaItem.mediaRecorder.stopRecording(function() {
                        window.stream.getVideoTracks().concat(window.stream.getAudioTracks()).forEach(function(track) {
                            track.stop();
                        });
                        callback();
                    });
                } catch (e) {
                    window.stream.getVideoTracks().concat(window.stream.getAudioTracks()).forEach(function(track) {
                        track.stop();
                    });
                    setSpeciAuthModeByRTCFailed();
                    callback();
                    $timeout($scope.videoError.errorFn({
                        'isClose': !0,
                        'from': 'getUserMedia_startRecording_failed',
                        'errormsg': $rootScope.i18mobile['upload_CBC.0100']
                    }), 0);
                }
            }
        };
        function nextPageInit() {
            if (-1 < $.inArray(changeAuthType, [ 'bankCardType', 'videoType' ])) {
                var protocol_type = 'bankCardType' === changeAuthType ? 'BANK_CARD_AUTH' : 'QR_CODE_AUTH';
                mobileCommonService.callEvent('savePrivateVersion', protocol_type);
                mobileAccountService.savePrivateVersion({
                    'protocol_type': protocol_type
                });
            }
            'function' == typeof $rootScope.pageShow.initPage && personalInfourlPre === $scope.personalInfourl && $timeout(function() {
                $rootScope.pageShow.initPage();
            }, 350);
            personalInfourlPre = $scope.personalInfourl;
            $scope.pageShow.perInformation = !1;
            mobileCommonService.callEvent('nextPageInit_end_0');
            $scope.pageShow.isShowApp = !1;
            mobileCommonService.callEvent('nextPageInit_end_1');
        }
        function loadNextPage() {
            var csbbiValue, step;
            if (getRealNameAuthInfoByRNVRsp) {
                csbbiValue = mobileAccountService.getUBAValue($rootScope.isEntType ? 'entVideoType' : changeAuthType);
                step = $rootScope.isEntType ? '_step4' : '_step1';
                mobileCommonService.callEvent(changeAuthType, csbbiValue + step);
            }
            $('#nextBtnContent').css('display', 'block');
            $timeout(function() {
                $scope.personalInfourl = $scope.formItems.changeAuthType.changeUrl[changeAuthType];
                nextPageInit();
            }, 0);
        }
        function nextVideo(isCheck, callBack) {
            mobileCommonService.callEvent(`nextVideo_isCheck${isCheck}_devicePixelRatio=${window.devicePixelRatio}_width=${window.screen.width}_height=` + window.screen.height);
            if (userMediaItem.hasGetUserMedia()) try {
                userMediaItem.getUserMedia();
                navigator.mediaDevices.getUserMedia({
                    'audio': !1,
                    'video': {
                        'facingMode': 'user'
                    }
                }).then(function(stream) {
                    mobileCommonService.callEvent('getUserMediaSuccess');
                    $rootScope.isShowH5 = !1;
                    window.stream = stream;
                    changeAuthType = 'videoType';
                    isCheck ? userMediaItem.getMediaRecorder(callBack) : loadNextPage();
                }).catch(function(error) {
                    setSpeciAuthModeByRTCFailed();
                    mobileCommonService.callEvent('getUserMediaError_get_onepage_' + error.name + '_' + $rootScope.i18mobile.mobile_userMediaNotAllower);
                    (isCheck ? callBack : loadNextPage)();
                });
            } catch (u) {
                setSpeciAuthModeByRTCFailed();
                mobileCommonService.callEvent('getUserMediaError_set_onepage_' + $rootScope.i18mobile.mobile_userMediaNotAllower);
                (isCheck ? callBack : loadNextPage)();
            } else {
                setSpeciAuthModeByRTCFailed();
                mobileCommonService.callEvent('getUserMediaError_Check_onepage_' + $rootScope.i18mobile.mobile_userMediaNotAllower);
                (isCheck ? callBack : loadNextPage)();
            }
        }
        iosVer = mobileCommonService.getIosVerStr();
        isInIosList = function() {
            var mobileCompatibilityABTest, result, appIDsTemp, iosPhoneModelBlackList;
            result = {
                'isInIosVerWhiteList': !(iosPhoneModelBlackList = []),
                'isInIosPhoneModelBlackList': !(mobileCompatibilityABTest = {}),
                'isInBrowserWhiteList': !1
            };
            try {
                iosPhoneModelBlackList = (mobileCompatibilityABTest = (appIDsTemp = publicService.getSystemConfigsByKey('mobileCompatibilityABTest')).mobileCompatibilityABTest ? JSON.parse(appIDsTemp.mobileCompatibilityABTest) : {}).iosPhoneModelBlackList || [];
            } catch (error) {}
            if ('ALL' === mobileCompatibilityABTest.iosVerWhiteList) result.isInIosVerWhiteList = !0; else if (mobileCompatibilityABTest.iosVerWhiteList) {
                appIDsTemp = new RegExp(mobileCompatibilityABTest.iosVerWhiteList);
                result.isInIosVerWhiteList = appIDsTemp.test(navigator.userAgent);
            }
            if (iosPhoneModelBlackList.length) {
                appIDsTemp = window.devicePixelRatio ? `${window.devicePixelRatio}*${window.screen.width}*` + window.screen.height : window.screen.width + '*' + window.screen.height;
                result.isInIosPhoneModelBlackList = -1 < iosPhoneModelBlackList.indexOf(appIDsTemp);
            }
            if (mobileCompatibilityABTest.browser) if (mobileCompatibilityABTest.browser.length) {
                iosPhoneModelBlackList = function() {
                    var isSafari, isChrome;
                    isSafari = -1 < navigator.userAgent.indexOf('Safari') && -1 == navigator.userAgent.indexOf('Chrome');
                    isChrome = -1 < navigator.userAgent.indexOf('Chrome') && -1 < navigator.userAgent.indexOf('Safari');
                    if (/MicroMessenger/i.test(window.navigator.userAgent)) return 'Wechat';
                    if (isSafari) return 'Safari';
                    if (isChrome) return 'Chrome';
                    return 'other';
                }();
                result.isInBrowserWhiteList = -1 < mobileCompatibilityABTest.browser.indexOf(iosPhoneModelBlackList);
            } else result.isInBrowserWhiteList = !0;
            return result;
        }() || {};
        isOverIOS14 = isIOS && iosVer && !mobileCommonService.isVerLessThan(iosVer, '14.3');
        isIOSNew = '1' === $stateParams.isnew;
        function nextBtnAuth() {
            (changeAuthType ? !function() {
                var isGoApp, isAllowGo, getBrowserName;
                isGoApp = checkGoWay();
                if (isAllowGo = 0 <= $.inArray(changeAuthType, nessCheckUserMedia)) {
                    changeAuthType = 'videoType';
                    getBrowserName = mobileCommonService.getBrowserName();
                    (0 <= $.inArray(getBrowserName, [ 'UCBrowser' ]) || isIOS || isGoApp) && (isAllowGo = !(!isOverIOS14 || !(isIOSNew || !isIOSNew && isInIosList.isInIosVerWhiteList && !isInIosList.isInIosPhoneModelBlackList && isInIosList.isInBrowserWhiteList)));
                }
                return isAllowGo;
            }() ? loadNextPage : nextVideo : nextPageInit)();
        }
        $scope.nextBtn = function() {
            $scope.formItems.idCard.onBlur();
            $scope.formItems.realName.blur();
            $scope.personalInfourl = '';
            ($scope.personal.nameFlag && $scope.personal.idCardFlag || $scope.cusVerifiedInfo) && (0 <= $.inArray(changeAuthType, [ 'videoType', 'passCardType', 'bankCardType', 'personalCardType' ]) && $rootScope.videoUpload.customerType === USERTYPE_IND && $.trim($scope.personal.idCard) ? mobileAccountService.queryCardUpLimit({
                'identify_type': 'ID_CARD',
                'identify_num': $.trim($scope.personal.idCard)
            }).then(function(data) {
                if (data && 'True' === data.is_up_limit) {
                    mobileCommonService.callEvent('qqueryCardUpLimit_' + $rootScope.i18mobile['face_CBC.7189']);
                    mobileCommonService.mobileAlertOneButton($rootScope.i18mobile['face_CBC.7189']);
                } else nextBtnAuth();
            }).catch(function(e) {
                e = e.responseJSON && e.responseJSON.error_code;
                mobileCommonService.callEvent('qqueryCardUpLimit_catch_' + e);
                e = validator.getErrMsg(e);
                mobileCommonService.mobilePopOver($scope, e, 4);
                nextBtnAuth();
            }) : nextBtnAuth());
        };
        $scope.gotoComBankMengBanShow = function() {
            $scope.comBankMengban = !0;
        };
        $scope.gotoComBankMengBanHide = function() {
            $scope.comBankMengban = !1;
            var redirUrl = mobileAccountService.whitelistCheck($stateParams.service);
            redirUrl && 'ent' === $stateParams.type && (window.location.href = redirUrl);
        };
        $scope.isShowAllianceAuth = !1;
        $scope.allianceAuth = function() {
            mobileCommonService.callEvent('hwdeveloper', 'operation_customer_mobileHwdeveloper_step1');
            mobileAccountService.queryRealAuthStatus({
                'third_sys': 'hwdeveloper',
                'verified_type': 1
            }).then(function(data) {
                if (data && data.status === REALNAMESTATUS.AUTHOK) {
                    $('#personalhidden').attr('bi_parent_name', 'bi_arealAuth_type_hwdeveloper');
                    $rootScope.third_identify_type = data.third_identify_type;
                    $state.go('mobile.developerAuth');
                } else mobileCommonService.mobileAlertOneButton($rootScope.i18mobile.realAuth_allianceAuth_cannot_content, $rootScope.i18mobile.realAuth_allianceAuth_cannot_title);
            }).catch(function(e) {
                e = e.responseJSON && e.responseJSON.error_code;
                e = validator.getErrMsg(e);
                mobileCommonService.mobilePopOver($scope, e, 4);
            });
        };
        $scope.gotoEntAuth = function(isGo) {
            var entFaceSwitch, whiteCusIds;
            entFaceSwitch = !1;
            (whiteCusIds = publicService.getSystemConfigsByKey('enterprise_face_recognition_switch')) && whiteCusIds.enterprise_face_recognition_switch && (entFaceSwitch = -1 < whiteCusIds.enterprise_face_recognition_switch.indexOf($rootScope.domainId) || 'ALL' === whiteCusIds.enterprise_face_recognition_switch);
            if (!isGo && entFaceSwitch) $scope.gotoComBankMengBanShow(); else {
                $stateParams.fromPage = 'activityAuth';
                $state.go('mobile.companycertification', $stateParams);
            }
        };
        function supportInputVideoCallBack(isNotfromCheckVideo) {
            isGoCheckGetUserMedia = !0;
            isCheckGetUserMedia = !isCheckGetUserMedia && !isNotfromCheckVideo;
            !isIOSAllowAuth && isIOS && ($rootScope.isShowAPP = !0);
            mobileCommonService.callEvent('isShowApp_' + $rootScope.isShowAPP);
            let isQrcode = 'qrcode' === $scope.fromPage;
            $timeout(function() {
                if ($rootScope.isShowAPP && isQrcode) {
                    $scope.pageShow.perInformation = !1;
                    $scope.pageShow.isShowApp = !0;
                } else {
                    $rootScope.pageShow.perInformation = !0;
                    $scope.formItems.changeAuthType.initChangeUrl();
                    if (!isQrcode && $rootScope.isShowAPP && !$stateParams.type) {
                        mobileCommonService.callEvent('supportInputVideoCallBack_changeAuthType_click');
                        $timeout(function() {
                            $scope.formItems.changeAuthType.click();
                        }, 0);
                    }
                }
                $('#personalhidden').css('display', 'block');
            }, 0);
        }
        function supportInputVideoCallBackByTypeClick() {
            isCheckGetUserMedia = !0;
            !isIOSAllowAuth && isIOS && ($rootScope.isShowAPP = !0);
            $rootScope.isShowAPP ? $scope.goAppDown(1) : $timeout(function() {
                $scope.formItems.changeAuthType.change('videoType');
            }, 0);
        }
        function isGoCheckGetUserMediaFun() {
            var isDiverToPromptPage, isNessCheckUserMedia;
            isDiverToPromptPage = checkGoWay();
            if (initTypeRsp && getRealNameAuthInfoByRNVRsp) {
                isNessCheckUserMedia = 0 <= $.inArray(changeAuthType, nessCheckUserMedia);
                mobileCommonService.callEvent('isGoCheckGetUserMediaFun_changeAuthType_' + changeAuthType + '+isNotAlowInput_' + isNotAlowNativeVideo + '_switchH5VIDEOOn_' + switchH5VIDEOOn);
                if (isNessCheckUserMedia && isNotAlowNativeVideo && switchH5VIDEOOn && !isIOS && !isDiverToPromptPage) nextVideo(!0, supportInputVideoCallBack); else {
                    isDiverToPromptPage && ($rootScope.isShowAPP = !0);
                    supportInputVideoCallBack(!0);
                }
            }
        }
        function checkGoWay() {
            var defaultRex, mobileCompatibilityABTest, result, appIDsTemp;
            result = !(mobileCompatibilityABTest = defaultRex = {
                'isGoApp': 'TBS/0458(1[1-9]|[2-8][0-9])|XWEB/3121',
                'platform': 'Win|Intel|Linux x86|Mac'
            });
            try {
                mobileCompatibilityABTest = (appIDsTemp = publicService.getSystemConfigsByKey('mobileCompatibilityABTest')).mobileCompatibilityABTest ? JSON.parse(appIDsTemp.mobileCompatibilityABTest) : defaultRex;
            } catch (error) {}
            mobileCompatibilityABTest && mobileCompatibilityABTest.isGoApp && (result = new RegExp(mobileCompatibilityABTest.isGoApp).test(navigator.userAgent)) && mobileCommonService.callEvent('isCantnotDispalyVideo_' + result);
            if (mobileCompatibilityABTest.platform && navigator.platform && !$rootScope.isEntType && (new RegExp(mobileCompatibilityABTest.platform).test(navigator.platform) || !function() {
                var isIOSPlatform = -1 < $.inArray(navigator.platform.toLocaleLowerCase(), [ 'iphone', 'ipad' ]);
                if (!isIOS && isIOSPlatform || isIOS && !isIOSPlatform) return;
                return 1;
            }())) {
                $rootScope.platformResult = !0;
                mobileCommonService.callEvent('isCantnotDispalyVideo_platform_' + $rootScope.platformResult);
            }
            return result = isSupportAppType() ? result : !0;
        }
        $scope.goAppDown = function(type) {
            mobileCommonService.callEvent('goToAPP');
            window.location.href = type ? $rootScope.i18mobile.downAppHref : isIOS ? 'https://apps.apple.com/cn/app/%E5%8D%8E%E4%B8%BA%E4%BA%91/id1247814104' : 'https://res-static.hc-cdn.cn/ams/AMS/AppUpdate/6BD99FB21022454CA55C158D1BB96FB0.apk';
        };
        $scope.showAppPage = function() {
            $scope.isShowAPP = !0;
            $scope.pageShow.perInformation = !1;
            $scope.pageShow.isShowApp = !0;
            $scope.formItems.changeAuthType.closeClick();
        };
        function queryHwIdAccount() {
            $scope.isShowAllianceAuth = !(!window.g_Vars || !window.g_Vars.hwAccountInfo);
        }
        function hideToolBar() {
            WeixinJSBridge.call('hideToolBar');
        }
        $scope.videoActionValue = '';
        function setVideoActionValue(videoAction) {
            setTimeout(function() {
                $scope.videoActionValue = videoAction || 'nods';
            }, 0);
        }
        function initPage() {
            try {
                isCallFromWX && isIOS && ('object' == typeof WeixinJSBridge && 'function' == typeof WeixinJSBridge.invoke ? hideToolBar() : document.addEventListener('WeixinJSBridgeReady', hideToolBar, !1));
            } catch (error) {}
            mobileCommonService.callEvent('platform_' + navigator.platform + ($stateParams.envType ? '_envType' + $stateParams.envType : ''));
            mobileAccountService.getVideoAction({
                'callback': setVideoActionValue
            });
            mobileAccountService.getAccountguard();
            window.customiseVer === VERSION_KEY_CHINA && HUAWEIIDAuthSWITCH && mobileAccountService.isDisplayAccountInfo(queryHwIdAccount);
            window.realVer === VERSION_KEY_JRZQ && $state.go('mobile.companycertification', $stateParams);
            $timeout(function() {
                $('#privacy').load('https://' + window.domainNames[window.realVer || 'v1r2'].www + '/declaration/sa_prp.html .mod-about>:not(h2)');
            }, 0);
            $scope.isHuaweiDis = mobileCommonService.isHuaweiDis();
            if ('qrcode' === $scope.fromPage) {
                initTypeRsp = getRealNameAuthInfoByRNVRsp = !0;
                changeAuthType = {
                    '/mobile/entVideoH5': 'entVideoType',
                    '/mobile/videoOnePageH5': 'videoType'
                }[$location.path()];
                $rootScope.isEntType = 'entVideoType' === changeAuthType;
                $rootScope.videoUpload = {
                    'customerType': $rootScope.isEntType ? USERTYPE_ENT : USERTYPE_IND
                };
                if ($rootScope.isEntType) {
                    $rootScope.pageShow.perInformation = !0;
                    $scope.formItems.changeAuthType.change(changeAuthType);
                    $scope.authTitleH5_personalAuth = $rootScope.i18mobile['realAuth_type_' + changeAuthType];
                    $('#personalhidden').css('display', 'block');
                } else isGoCheckGetUserMediaFun();
            } else {
                if ('ent' === $stateParams.type) {
                    $rootScope.pageShow.perInformation = !0;
                    $('#personalhidden').css('display', 'block');
                    $scope.gotoEntAuth();
                    return;
                }
                $scope.formItems.changeAuthType.initType();
                mobileAccountService.getRealNameAuthInfoByRNV(!0).then(function(data) {
                    getRealNameAuthInfoByRNVRsp = !0;
                    if (data.cusVerifiedInfo) if (1 === data.cusVerifiedInfo.verifiedType && 'true' !== $stateParams.resetRealName) {
                        if (0 === data.cusVerifiedInfo.verifiedStatus || 2 === data.cusVerifiedInfo.verifiedStatus) return getRealNameAuthInfoByRNVRsp = !1, 
                        $scope.gotoEntAuth(!0);
                        isGoCheckGetUserMediaFun();
                    } else if (0 === data.cusVerifiedInfo.verifiedStatus || 2 === data.cusVerifiedInfo.verifiedStatus) {
                        getRealNameAuthInfoByRNVRsp = !1;
                        $scope.cusVerifiedInfo = data.cusVerifiedInfo;
                        $scope.pageShow.showBackInformation = !1;
                        changeAuthType = 'personalCardType';
                        IDENTIFYTYPE.PASSPORT === data.cusVerifiedInfo.identifyType ? changeAuthType = 'passCardType' : IDENTIFYTYPE.FOURELEMENTS === data.cusVerifiedInfo.identifyType ? changeAuthType = 'bankCardType' : IDENTIFYTYPE.IDCARD === data.cusVerifiedInfo.identifyType && (changeAuthType = 'personalCardType');
                        $('#personalhidden').css('display', 'block');
                        $scope.nextBtn();
                    } else isGoCheckGetUserMediaFun(); else isGoCheckGetUserMediaFun();
                }).catch(function(e) {
                    getRealNameAuthInfoByRNVRsp = !0;
                    e = e.responseJSON && e.responseJSON.error_code;
                    e = validator.getErrMsg(e);
                    mobileCommonService.mobilePopOver($scope, e, 4);
                });
            }
            publicService.queryCusBriefInfo().then(function(data) {
                if (data && 0 == data.retCode && data.phone) if ('entVideoType' === $stateParams.type || '/mobile/entVideoH5' === $location.path()) {
                    $stateParams.entType = $stateParams.entType || 0;
                    $rootScope.pageShow.personalAuthContent = utilService.i18nReplace($rootScope.i18mobile.realAuth_title_entContent, [ data.userName, $rootScope.i18mobile['realAuth_entType_' + [ 'legalPerson', 'authorizedPerson' ][$stateParams.entType]] ]);
                } else $rootScope.pageShow.personalAuthContent = utilService.i18nReplace($rootScope.i18mobile.realAuth_title_confirInfo, [ data.userName, data.phone ]);
            }).catch(function(e) {
                mobileCommonService.callEvent('queryCusBriefInfo_catch');
                e = e.responseJSON && e.responseJSON.error_code;
                e = validator.getErrMsg(e);
                mobileCommonService.mobilePopOver($scope, e, 4);
            });
        }
        $rootScope.domainId ? initPage() : $scope.$on('initUser', initPage);
    } ];
    angular.module('mobile.config').tinyController('activityPersonalAuth.ctrl', activityPersonalAuth);
});