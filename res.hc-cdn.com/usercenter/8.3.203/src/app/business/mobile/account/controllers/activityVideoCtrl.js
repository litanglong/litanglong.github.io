define([ 'm-lib/RecordRTC.min', 'm-lib/adapter-9.0.0' ], function() {
    'use strict';
    var videoUpload;
    videoUpload = [ '$scope', '$stateParams', '$rootScope', 'csbMessage', 'mobileCommonService', 'mobileAccountService', '$state', 'storage', '$http', '$timeout', '$interval', 'validator', 'utilService', 'publicService', function($scope, $stateParams, $rootScope, csbMessage, mobileCommonService, mobileAccountService, $state, storage, $http, $timeout, $interval, validator, utilService, publicService) {
        var videoAsrTask, currentVideoFile, uploadTimeOutTime, uploadTimeOutTemped, uploadTimeOutTemp, circleTime, customerRole, getBlobErrorTime, stoprequestAnimationFrame, biScen, isGoApp, uploadRetryTime, buttons, getButtonlable, getUBAValue, uploadTimeOut, circle, isIosUploadAsync, isIOSNew, iosVideoWidthAndHeight, userMediaItem, initDate, initOnePage, initVideoFirstPage, startVideoCallback;
        mobileCommonService.initLanguage();
        $scope.errtext = '';
        videoAsrTask = {};
        currentVideoFile = 0;
        uploadTimeOutTemped = !(uploadTimeOutTime = 120);
        0;
        $scope.confirmInfoSuccess = $rootScope.i18mobile.personalCertifi_tip_confirmInfoSuccess;
        $scope.errorScens = {
            'noRecording': 'norecording',
            'noData': 'noData',
            'moreTimes': 'moreTimes'
        };
        $scope.errorScen = '';
        0;
        circleTime = 4;
        0;
        getBlobErrorTime = customerRole = 0;
        stoprequestAnimationFrame = uploadTimeOutTemp = '';
        biScen = $rootScope.videoUpload.customerType + ($rootScope.isShowH5 ? '_H5_' : '_getUserMedia_');
        $scope.getUBAValue = '';
        $scope.UBAStep = 2;
        isGoApp = !1;
        uploadRetryTime = 0;
        if (document.documentElement && document.documentElement.clientHeight) {
            var pageHeight = document.documentElement.clientHeight;
            $('#videoBody').css('height', pageHeight + 'px');
        }
        function rotate() {
            90 == window.orientation || -90 == window.orientation ? $scope.isRotated = !0 : $scope.isRotated = !1;
        }
        rotate();
        window.addEventListener('load', rotate, !1);
        window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', rotate, !1);
        function getVideoAsrTask() {
            var params, ideoActions;
            uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
            videoAsrTask = {
                'taskId': null,
                'number': [ '', '', '', '' ],
                'videoFileMax': 0,
                'videoFilePartMax': 0,
                'process': 0,
                'retryTime': videoAsrTask.retryTime || 1,
                'actions': ''
            };
            $('body').prepend('<div class=\'loading-container visible active\'><div class=\'loading zhuanquan\'><ion-spinner  class=\'spinner spinner-ios\'><svg viewBox=\'0 0 64 64\'><g stroke-width=\'4\' stroke-linecap=\'round\'><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(180)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(210)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(240)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(270)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(300)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(330)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(0)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(30)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(60)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(90)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(120)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85\' repeatCount=\'indefinite\'></animate></line><line y1=\'17\' y2=\'29\' transform=\'translate(32,32) rotate(150)\'><animate attributeName=\'stroke-opacity\' dur=\'750ms\' values=\'1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1\' repeatCount=\'indefinite\'></animate></line></g></svg></ion-spinner></div></div>');
            params = {
                'taskType': 'video',
                'customerRole': 'individual',
                'name': $scope.personal.name,
                'verifiedNumber': $scope.personal.idCard
            };
            if ($scope.isEntType) {
                $stateParams.entType = $stateParams.entType || 0;
                customerRole = [ 'legalPerson', 'authorizedPerson' ][$stateParams.entType];
                params.customerRole = customerRole;
            }
            ideoActions = {
                'nodes': 3,
                'shake': 1,
                'openmouth': 4
            };
            $scope.videoActionValue && (params.actions = ideoActions[$scope.videoActionValue] || ideoActions.nodes);
            /*mobileAccountService.queryVideoAsrTaskNew(params, !0).then(function(data) {
                $('div').remove('.loading-container');
                if (data && !data.error_code) {
                    videoAsrTask.retryTime = 0;
                    videoAsrTask.taskId = data.taskId;
                    videoAsrTask.videoFileMax = 1024 * data.fileMax * 1024;
                    videoAsrTask.videoFilePartMax = 1024 * data.segMax * 1024;
                    videoAsrTask.process = data.process;
                    videoAsrTask.actions = data.actions;
                    $scope.video_tip2 = utilService.i18nReplace($rootScope.i18mobile.video_tip2, [ $rootScope.i18mobile['video_actions' + data.actions] ]);
                    if ('ID_RECONGNIZE' === data.process) {
                        $scope.video.showTipFn(5);
                        ($scope.isEntType ? $scope.gotoEntSubmitInfo : $scope.gotoSubmitInfo).click();
                    } else $scope.video.showTipFn(1);
                    uploadTimeOutTemped = !1;
                } else {
                    videoAsrTask.retryTime = videoAsrTask.retryTime + 1;
                    (!data || 'CBC.7188' !== data.error_code && 'CBC.0151' !== data.error_code) && videoAsrTask.retryTime < 5 ? $timeout(getVideoAsrTask, 1e3) : $scope.videoError.errorFn({
                        'data': data,
                        'from': 'queryVideoAsrTask__200_'
                    });
                }
            }).catch(function(e) {
                $('div').remove('.loading-container');
                var error_code = e.responseJSON && e.responseJSON.error_code;
                $scope.errtext = $rootScope.i18mobile['video_' + error_code] || $rootScope.i18mobile['face_' + error_code] || $rootScope.i18mobile.system_errormsg_interfaceerror;
                $scope.videoNoticeTip = !1;
                $scope.videoError.errorFn({
                    'data': e.responseJSON || e,
                    'from': 'queryVideoAsrTask__catch_',
                    'errormsg': $scope.errtext
                });
            });*/
			const data = {}
			$('div').remove('.loading-container');
			if (data && !data.error_code) {
				videoAsrTask.retryTime = 0;
				videoAsrTask.taskId = data.taskId;
				videoAsrTask.videoFileMax = 1024 * data.fileMax * 1024;
				videoAsrTask.videoFilePartMax = 1024 * data.segMax * 1024;
				videoAsrTask.process = data.process;
				videoAsrTask.actions = data.actions;
				$scope.video_tip2 = utilService.i18nReplace($rootScope.i18mobile.video_tip2, [ $rootScope.i18mobile['video_actions' + data.actions] ]);
				if ('ID_RECONGNIZE' === data.process) {
					$scope.video.showTipFn(5);
					($scope.isEntType ? $scope.gotoEntSubmitInfo : $scope.gotoSubmitInfo).click();
				} else $scope.video.showTipFn(1);
				uploadTimeOutTemped = !1;
			} else {
				videoAsrTask.retryTime = videoAsrTask.retryTime + 1;
				(!data || 'CBC.7188' !== data.error_code && 'CBC.0151' !== data.error_code) && videoAsrTask.retryTime < 5 ? $timeout(getVideoAsrTask, 1e3) : $scope.videoError.errorFn({
					'data': data,
					'from': 'queryVideoAsrTask__200_'
				});
			}
        }
        function queryVideoAsrStatusInterface() {
            mobileAccountService.queryVideoAsrStatusNew().then(function(data) {
                if (data && 'CBC.0000' === data.error_code) if (100 === data.progress) {
                    mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_queryStatusEnd + (isIOS ? '_success_ios' : '_success'), 'end');
                    ($scope.isEntType ? $scope.gotoEntSubmitInfo : $scope.gotoSubmitInfo).click();
                } else $timeout(queryVideoAsrStatusInterface, 500); else $scope.videoError.errorFn({
                    'data': data,
                    'from': 'queryVideoAsrStatus_200_failed'
                });
            }).catch(function(e) {
                uploadTimeOutTemped || $scope.videoError.errorFn({
                    'data': e.responseJSON || e,
                    'from': 'queryVideoAsrStatus_catch_'
                });
            });
        }
        function queryVideoAsrStatus() {
            mobileCommonService.callEvent('VideoAsrStatus', $scope.getUBAValue + '_step' + ($scope.UBAStep + 2));
            uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
            mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_queryStatusStart, 'start');
            queryVideoAsrStatusInterface();
            return;
        }
        buttons = {
            'type': 'personalCardType',
            'backvideo': function() {
                userMediaItem.isRe = !0;
                initOnePage();
                getVideoAsrTask();
            },
            'backWritePersonalInfo': function() {
                $rootScope.pageShow.perInformation = !0;
                initOnePage();
                $('#nextBtnContent').css('display', 'none');
            },
            'gotoResetByType': function() {
                $stateParams.type = buttons.type;
                $state.go('mobile.activityPersonalAuth', $stateParams, {
                    'reload': !0
                });
            },
            'gotoActivity': function() {
                mobileAccountService.redirUrl($scope.activityUrl);
            },
            'gotoPortal': function() {
                window.location.href = $rootScope.i18mobile.portal_index_url;
            },
            'redirectBack': function() {
                mobileAccountService.redirUrl($stateParams.service);
            },
            'closePage': function() {
                mobileAccountService.closeWindow();
            }
        };
        $scope.videoError = {
            'isShow': !1,
            'moreErrorTimes': function(data) {
                $scope.errtext = '';
                var errorTimes = publicService.getSystemConfigsByKey('videoVerifyFailTimes');
                if (data && data.errorTimes >= errorTimes.videoVerifyFailTimes) {
                    $scope.errorScen = $scope.errorScens.moreTimes;
                    $scope.errtext = data.errormsg || $scope.videoError.getErrtext(data.error_code);
                    $scope.videoError.buttonLable = $scope.isEntType ? $rootScope.i18mobile.close_window : $rootScope.i18mobile.realAuth_type_bankCardType;
                    buttons.type = 'bankCardType';
                    $scope.videoError.buttonClick = $scope.isEntType ? buttons.closePage : buttons.gotoResetByType;
                    mobileCommonService.callEvent(biScen + $scope.errtext + '_' + $scope.errorScen, 'Failed');
                }
                return $scope.errtext;
            },
            'getErrtext': function(error_code) {
                var errtext;
                errtext = '';
                errtext = (errtext = $scope.isEntType ? $rootScope.i18mobile['ent_' + error_code] : errtext) || $rootScope.i18mobile['video_' + error_code] || $rootScope.i18mobile['face_' + error_code] || validator.getErrMsg(error_code, '', !0);
                error_code = 'videoAction_' + $scope.videoActionValue;
                return errtext = utilService.i18nReplace(errtext, [ $rootScope.i18mobile[error_code] ]);
            },
            'specialButton': function(data) {
                var error_code, dataRsp, errtextScenes;
                error_code = '';
                dataRsp = data && data.data;
                try {
                    if (data) {
                        if ('string' == typeof dataRsp) {
                            -1 < dataRsp.indexOf('Blocked by olc') ? error_code = 'CBC.0250' : -1 < dataRsp.indexOf('Request Entity Too Large') && (error_code = 'video_CBC.7231');
                            dataRsp = {
                                'error_code': error_code
                            };
                        } else {
                            error_code = dataRsp && dataRsp.error_code;
                            429 === dataRsp.status && (error_code = 'CBC.0250');
                        }
                        -1 < $.inArray(error_code, [ 'CBC.0250' ]) && (data.errormsg = $scope.videoError.getErrtext(error_code));
                    }
                } catch (error) {
                    dataRsp = {
                        'error_code': error_code
                    };
                }
                mobileCommonService.callEvent(biScen + data.from + '_error_code_' + error_code);
                $scope.videoError.buttonLable = $rootScope.i18mobile.face_button_face;
                buttons.type = '';
                errtextScenes = data.from + error_code;
                if (!$scope.videoError.moreErrorTimes(dataRsp)) {
                    $scope.errtext = data.errormsg || $rootScope.i18Err['reAuth_' + error_code] || $scope.videoError.getErrtext(error_code);
                    if ('CBC.0100' === error_code) {
                        $scope.errorScen = $scope.errorScens.noRecording;
                        $scope.errtext = $rootScope.i18mobile['upload_CBC.0100'];
                        $scope.videoError.buttonClick = buttons.closePage;
                        $scope.videoError.buttonLable = $rootScope.i18mobile.close_window;
                    } else if (-1 < $.inArray(error_code, [ 'CBC.7218', 'CBC.7008', 'CBC.7202', 'CBC.7195', 'CBC.7219' ])) $scope.videoError.buttonClick = buttons.backWritePersonalInfo; else if (-1 < $.inArray(error_code, [ 'CBC.7234', 'CBC.7371', 'CBC.7372' ])) {
                        $scope.videoError.buttonClick = $scope.isEntType ? buttons.closePage : buttons.gotoResetByType;
                        $scope.videoError.buttonLable = $scope.isEntType ? $rootScope.i18mobile.close_window : $rootScope.i18mobile.bi_arealAuth_type_personalCardType;
                    } else {
                        -1 < $.inArray(error_code, [ 'CBC.7188', 'CBC.7197', 'CBC.7198', 'CBC.7198', 'CBC.712345678' ]) && (data.isClose = !0);
                        $scope.videoError.buttonLable = data.isClose ? $rootScope.i18mobile.close_window : $rootScope.i18mobile.face_button_face;
                        $scope.videoError.buttonClick = data.isClose ? buttons.closePage : buttons.backvideo;
                    }
                }
                mobileCommonService.callEvent(biScen + $scope.errtext + '_' + errtextScenes, $scope.getUBAValue + '_' + mobileAccountService.getUBASuccess(error_code));
            },
            'errorFn': function(data) {
                uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
                $scope.videoError.specialButton(data);
                $timeout(function() {
                    $scope.videoError.isShow = !0;
                }, 0);
                return $scope.errtext;
            },
            'buttonLable': $rootScope.i18mobile.face_button_face,
            'buttonClick': function() {}
        };
        function uploadVideoPart(part, index, total, uploadId, fileTotalSize) {
            mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_uploadVideoStart + '_total' + total + '_index' + index + '_part' + (part && part.size), 'start');
            var formData = new FormData();
            formData.append('video', part);
            formData.append('data', JSON.stringify({
                'taskId': uploadId,
                'segIndex': index,
                'fileSegTotal': total,
                'fileHash': null,
                'fileTotalSize': fileTotalSize
            }));
            $http({
                'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/upload',
                'method': 'POST',
                'encType': 'multipart/form-data',
                'headers': {
                    'Content-type': void 0,
                    'x-request-id': new Date().getTime(),
                    'X-CF2-PASSTHROUGH': !0,
                    'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                    'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                    'X-EnvType': window.x_env_type
                },
                'data': formData
            }).success(function() {
                mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_uploadVideoEnd + '_total' + total + '_index' + index + '_success', 'end');
                if (uploadId !== videoAsrTask.currentUploadId) return uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp), 
                void 0;
                --videoAsrTask.rest;
                if (0 === videoAsrTask.rest) {
                    videoAsrTask.currentUploadId = null;
                    uploadTimeOutTemped || queryVideoAsrStatus();
                }
            }).error(function(data) {
                if (1 === total && null === data && uploadRetryTime <= 3) {
                    uploadRetryTime++;
                    ($scope.isShowH5 ? uploadVideoH5 : uploadVideo)();
                    return;
                }
                $('#videoInput').val('');
                uploadRetryTime = 0;
                if (data && uploadId !== videoAsrTask.currentUploadId) return void (uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp));
                videoAsrTask.currentUploadId = null;
                $scope.videoError.errorFn({
                    'data': data,
                    'from': 'uploadFile_filed_'
                });
                uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
            });
        }
        function getGoApp() {
            $scope.videoError.errorFn({
                'data': {
                    'error_code': 'CBC.712345678'
                },
                'from': 'getGoApp_'
            });
        }
        function uploadVideo() {
            if (isGoApp && !$scope.isEntType) return getGoApp(), void 0;
            mobileCommonService.callEvent(biScen + 'uploadVideo_start');
            var videoFile;
            videoFile = userMediaItem.getBlob();
            currentVideoFile = bytesToSize(videoFile.size);
            mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_uploadVideoStart + '_' + currentVideoFile, 'start');
            if (videoFile.size > videoAsrTask.videoFilePartMax) return async function(videoFile) {
                var total, uploadId, i, start;
                total = Math.ceil(videoFile.size / videoAsrTask.videoFilePartMax);
                uploadId = videoAsrTask.taskId;
                videoAsrTask.currentUploadId = uploadId;
                videoAsrTask.retryTime = [];
                videoAsrTask.rest = total;
                for (i = 0; i < total; ++i) {
                    start = videoAsrTask.videoFilePartMax * i;
                    start = videoFile.slice(start, start + videoAsrTask.videoFilePartMax, videoFile.type);
                    videoAsrTask.retryTime[i] = 0;
                    isIosUploadAsync ? uploadVideoPart(start, i + 1, total, uploadId, videoFile.size) : await function(part, index, total, uploadId, fileTotalSize) {
                        mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_uploadVideoStart + '_total' + total + '_index' + index + '_part' + (part && part.size) + '_sync', 'start');
                        var formData = new FormData();
                        formData.append('video', part);
                        formData.append('data', JSON.stringify({
                            'taskId': uploadId,
                            'segIndex': index,
                            'fileSegTotal': total,
                            'fileHash': null,
                            'fileTotalSize': fileTotalSize
                        }));
                        return $http({
                            'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/face_recognition/video_asr/upload',
                            'method': 'POST',
                            'encType': 'multipart/form-data',
                            'headers': {
                                'Content-type': void 0,
                                'x-request-id': new Date().getTime(),
                                'X-CF2-PASSTHROUGH': !0,
                                'cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '',
                                'cf2-cftk': storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || '',
                                'X-EnvType': window.x_env_type
                            },
                            'data': formData
                        }).then(function() {
                            mobileCommonService.callEvent(biScen + $rootScope.i18mobile.bi_uploadVideoEnd + '_total' + total + '_index' + index + '_success_sync', 'end');
                            if (uploadId !== videoAsrTask.currentUploadId) return uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp), 
                            void 0;
                            --videoAsrTask.rest;
                            if (0 === videoAsrTask.rest) {
                                videoAsrTask.currentUploadId = null;
                                uploadTimeOutTemped || queryVideoAsrStatus();
                            }
                        }).catch(function(res) {
                            res = res.data;
                            if (1 === total && null === res && uploadRetryTime <= 3) {
                                uploadRetryTime++;
                                ($scope.isShowH5 ? uploadVideoH5 : uploadVideo)();
                                return;
                            }
                            $('#videoInput').val('');
                            uploadRetryTime = 0;
                            if (res && uploadId !== videoAsrTask.currentUploadId) return void (uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp));
                            videoAsrTask.currentUploadId = null;
                            $scope.videoError.errorFn({
                                'data': res,
                                'from': 'uploadFile_filed_'
                            });
                            uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
                        });
                    }(start, i + 1, total, uploadId, videoFile.size);
                }
            }(videoFile), void 0;
            if (0 === parseInt(currentVideoFile)) {
                if (1 === ++getBlobErrorTime) $scope.videoError.errorFn({
                    'data': {
                        'error_code': 'mobile_userMediaNotmediaRecorderFirst'
                    },
                    'from': 'uploadFile_getBlob_'
                }); else {
                    $scope.errorScen = $scope.errorScens.noRecording;
                    $scope.videoError.errorFn({
                        'isClose': !0,
                        'from': 'uploadFile_getBlob_',
                        'errormsg': $rootScope.i18mobile.mobile_userMediaNotmediaRecorder
                    });
                }
                return;
            }
            uploadTimeOutTemp = $timeout(uploadTimeOut, 1e3 * uploadTimeOutTime);
            videoAsrTask.retryTime = 0;
            videoAsrTask.currentUploadId = videoAsrTask.taskId;
            uploadVideoPart(videoFile, videoAsrTask.rest = 1, 1, videoAsrTask.taskId, videoFile.size);
        }
        $scope.gotoSubmitInfo = {
            'disable': !(getUBAValue = function() {
                var changeAuthType;
                changeAuthType = $scope.isEntType ? 'entVideoType' : 'videoType';
                return mobileAccountService.getUBAValue(changeAuthType);
            }),
            'isSubmitSuccess': !(getButtonlable = function() {
                return $stateParams.service ? $rootScope.i18mobile.system_button_redirect_back : $rootScope.i18mobile.button_home;
            }),
            'authSuccess': function() {
                $scope.gotoSubmitInfo.submitSuccessPageButton.countdownTime = 3;
                $scope.gotoSubmitInfo.submitSuccessPageButton.lable = getButtonlable();
                $scope.gotoSubmitInfo.submitSuccessPageButton.lable += ' ' + $scope.gotoSubmitInfo.submitSuccessPageButton.countdownTime + $scope.i18mobile.video_seconed;
                $scope.gotoSubmitInfo.isSubmitSuccess = !0;
                $timeout($scope.gotoSubmitInfo.submitSuccessPageButton.countdown, 1e3);
            },
            'submitSuccessPageButton': {
                'lable': $rootScope.i18mobile.system_button_redirect_back,
                'countdownTime': 3,
                'countdown': function() {
                    var lableTemp = getButtonlable();
                    $scope.gotoSubmitInfo.submitSuccessPageButton.countdownTime--;
                    if (0 < $scope.gotoSubmitInfo.submitSuccessPageButton.countdownTime) {
                        $scope.gotoSubmitInfo.submitSuccessPageButton.lable = lableTemp + ' ' + $scope.gotoSubmitInfo.submitSuccessPageButton.countdownTime + $scope.i18mobile.video_seconed;
                        $timeout($scope.gotoSubmitInfo.submitSuccessPageButton.countdown, 1e3);
                    } else $scope.gotoSubmitInfo.submitSuccessPageButton.click();
                },
                'click': function() {
                    $stateParams.service ? buttons.redirectBack() : buttons.gotoPortal();
                }
            },
            'click': function() {
                var param;
                mobileCommonService.callEvent(biScen + $scope.i18mobile.bi_face_button_submit);
                mobileCommonService.callEvent('videoStart', $scope.getUBAValue + '_step' + ($scope.UBAStep + 3));
                (param = {}).name = $scope.personal.name;
                param.verifiedNumber = $scope.personal.idCard;
                param.identifyType = IDENTIFYTYPE.VIDEO;
                param.changeType = -1;
                param.clientInfo = {
                    'devId': csbMessage.getCookie('cbc-sid'),
                    'hwMeta': $('#hwmeta').val() || ''
                };
                mobileAccountService.custrnverifyIndividual(param).then(function() {
                    $scope.gotoSubmitInfo.authSuccess();
                    mobileCommonService.callEvent(biScen + $scope.i18mobile.bi_authSuccess, $scope.getUBAValue + '_success');
                }).catch(function(e) {
                    window.hwcap && window.hwcap.reload();
                    $timeout($scope.videoError.errorFn({
                        'data': e.responseJSON || e,
                        'from': $rootScope.i18mobile.bi_authFailed + '_catch_'
                    }), 0);
                });
            }
        };
        $scope.gotoEntSubmitInfo = {
            'disable': !1,
            'isSubmitSuccess': !1,
            'authSuccess': function() {
                mobileCommonService.callEvent('veriedEntFaceAuth', $scope.getUBAValue + '_step' + ($scope.UBAStep + 3));
                mobileAccountService.veriedEntFaceAuth().then(() => {
                    mobileCommonService.callEvent('veriedEntFaceAuth', $scope.getUBAValue + '_success');
                }).catch(function(e) {
                    mobileCommonService.callEvent('veriedEntFaceAuth', $scope.getUBAValue + '_failed');
                });
                $scope.gotoEntSubmitInfo.isSubmitSuccess = !0;
            },
            'submitSuccessPageButton': {
                'lable': $rootScope.i18mobile.close_window,
                'click': function() {
                    buttons.closePage();
                }
            },
            'click': function() {
                var param;
                mobileCommonService.callEvent(biScen + $scope.i18mobile.bi_face_button_submit);
                (param = {}).identifyType = 16;
                param.name = $scope.personal.name;
                param.verifiedNumber = $scope.personal.idCard;
                param.urlType = 'video';
                param.customerRole = customerRole;
                param.clientInfo = {
                    'devId': csbMessage.getCookie('cbc-sid'),
                    'hwMeta': $('#hwmeta').val() || ''
                };
                mobileAccountService.liveIdentifySubmit(param).then(function() {
                    $scope.gotoEntSubmitInfo.authSuccess();
                    mobileCommonService.callEvent(biScen + $scope.i18mobile.bi_authSuccess);
                }).catch(function(e) {
                    window.hwcap && window.hwcap.reload();
                    $timeout($scope.videoError.errorFn({
                        'data': e.responseJSON || e,
                        'from': $rootScope.i18mobile.bi_authFailed + '_catch_'
                    }), 0);
                });
            }
        };
        function uploadTimeOutCallback() {
            $scope.video.showTipFn(1);
        }
        uploadTimeOut = function() {
            $scope.errTitle = $rootScope.i18mobile.video_ceritifiErrorTip;
            $scope.errtext = $rootScope.i18mobile.uploadTimeOut;
            mobileCommonService.mobileAlertOneButton($scope.errtext, $scope.errTitle, '', uploadTimeOutCallback);
            uploadTimeOutTemped = !0;
            $scope.viewVideoInput = !1;
            mobileAccountService.cancelRask();
        };
        function go(start, target) {
            var circleLeft, circleRight, progress, now, progressInter;
            circleLeft = document.querySelector('.circle-left');
            circleRight = document.querySelector('.circle-right');
            now = progress = start;
            progressInter = $interval(function() {
                if (target < (progress += target / (1e3 * circleTime / 10))) {
                    $interval.cancel(progressInter);
                    stoprequestAnimationFrame && window.cancelAnimationFrame(stoprequestAnimationFrame);
                }
            }, 10);
            stoprequestAnimationFrame = requestAnimationFrame(function grow() {
                if (target < progress) {
                    circleRight.style.transform = 'rotate(135deg)';
                    circleLeft.style.transform = 'rotate(135deg)';
                    return;
                }
                if (progress !== now) {
                    var deg = 3.6 * (now = progress);
                    if (progress <= 50) circleRight.style.transform = 'rotate(' + (deg - 45) + 'deg)'; else if (50 < progress) {
                        circleRight.style.transform = 'rotate(135deg)';
                        circleLeft.style.transform = 'rotate(' + (deg - 180 - 45) + 'deg)';
                    }
                }
                stoprequestAnimationFrame = requestAnimationFrame(grow);
            });
        }
        circle = function() {
            go(0, 100);
            $timeout(function() {
                userMediaItem.endVideo();
            }, 1e3 * circleTime);
        };
        isIosUploadAsync = !0;
        isIOSNew = '1' === $stateParams.isnew;
        iosVideoWidthAndHeight = function() {
            var mobileCompatibilityABTest, result, appIDsTemp;
            mobileCompatibilityABTest = {};
            result = {
                'width': 1920,
                'height': 1080
            };
            try {
                mobileCompatibilityABTest = (appIDsTemp = publicService.getSystemConfigsByKey('mobileCompatibilityABTest')).mobileCompatibilityABTest ? JSON.parse(appIDsTemp.mobileCompatibilityABTest) : {};
            } catch (error) {}
            if ('ALL' === mobileCompatibilityABTest.widthAndHeight) result = {}; else if ('AUTO' === mobileCompatibilityABTest.widthAndHeight) {
                if (window.devicePixelRatio) {
                    result.width = window.devicePixelRatio * window.screen.width;
                    result.height = window.devicePixelRatio * window.screen.height;
                } else {
                    result.width = window.screen.width;
                    result.height = window.screen.height;
                }
                mobileCommonService.callEvent('devicePixelRatio=' + window.devicePixelRatio + '_width=' + result.width + '_height=' + result.height, 'widthAndHeight');
            } else if (mobileCompatibilityABTest.widthAndHeight) {
                appIDsTemp = mobileCompatibilityABTest.widthAndHeight.split('*');
                result.width = appIDsTemp[0] ? Number(appIDsTemp[0]) : 1920;
                result.height = appIDsTemp[1] ? Number(appIDsTemp[1]) : 1080;
            }
            mobileCompatibilityABTest.isIosUploadSync && (isIosUploadAsync = !1);
            mobileCompatibilityABTest.videoBitsPerSecond && (result.videoBitsPerSecond = Number(mobileCompatibilityABTest.videoBitsPerSecond));
            return result;
        }();
        userMediaItem = {
            'mediaRecorder': '',
            'isRe': !1,
            'videoStream': document.querySelector('video#videoNew'),
            'recordedBlobs': '',
            'playStream': function() {
                'srcObject' in userMediaItem.videoStream ? userMediaItem.videoStream.srcObject = window.stream : userMediaItem.videoStream.src = window.URL.createObjectURL(window.stream);
            },
            'getBlob': function() {
                return userMediaItem.mediaRecorder.getBlob();
            },
            'handleDataAvailable': function(event) {
                event.data && 0 < event.data.size && userMediaItem.recordedBlobs.push(event.data);
            },
            'oristartRecording': function() {
                userMediaItem.mediaRecorder.start();
                circle();
            },
            'webRTCStartRecording': function() {
                try {
                    userMediaItem.mediaRecorder.startRecording();
                } catch (e) {
                    $timeout($scope.videoError.errorFn({
                        'isClose': !0,
                        'from': 'getUserMedia_startRecording_failed',
                        'errormsg': $rootScope.i18mobile['upload_CBC.0100']
                    }), 0);
                    return;
                }
                circle();
            },
            'getMediaRecorder': function(callback) {
                try {
                    isIOS && (iosVideoWidthAndHeight.videoBitsPerSecond || isIOSNew) ? userMediaItem.mediaRecorder = RecordRTC(window.stream, {
                        'type': 'video',
                        'videoBitsPerSecond': iosVideoWidthAndHeight.videoBitsPerSecond || 64e3
                    }) : userMediaItem.mediaRecorder = RecordRTC(window.stream, {
                        'type': 'video'
                    });
                    callback && callback();
                } catch (e) {
                    $rootScope.isShowH5 = !0;
                    $scope.video.showTipFn(1);
                    return;
                }
            },
            'startVideo': function(callback) {
                var video;
                video = {
                    'facingMode': 'user'
                };
                mobileCommonService.getIosVerStr() && iosVideoWidthAndHeight && iosVideoWidthAndHeight.width && (video = {
                    'facingMode': 'user',
                    'width': iosVideoWidthAndHeight.width,
                    'height': iosVideoWidthAndHeight.height
                });
                navigator.mediaDevices.getUserMedia({
                    'audio': !1,
                    'video': video
                }).then(function(stream) {
                    $rootScope.isShowH5 = !1;
                    window.stream = stream;
                    userMediaItem.getMediaRecorder(callback);
                }).catch(function(error) {
                    $rootScope.isShowH5 = !0;
                    startVideoCallback();
                });
            },
            'startRecording': function() {
                mobileCommonService.callEvent('getUserMedia_startRecording');
                userMediaItem.webRTCStartRecording();
            },
            'endVideo': function() {
                mobileCommonService.callEvent('getUserMedia_stopRecording');
                userMediaItem.mediaRecorder.stopRecording(function() {
                    stoprequestAnimationFrame && window.cancelAnimationFrame(stoprequestAnimationFrame);
                    $timeout(function() {
                        var circleLeft, circleRight;
                        circleLeft = document.querySelector('.circle-left');
                        (circleRight = document.querySelector('.circle-right')) && circleLeft || mobileCommonService.callEvent('setCycleWholefail');
                        circleRight && (circleRight.style.transform = 'rotate(135deg)');
                        circleLeft && (circleLeft.style.transform = 'rotate(135deg)');
                        return;
                    }, 300);
                    $timeout(function() {
                        $scope.video.showTipFn(5);
                    }, 700);
                    $timeout(function() {
                        window.stream.getVideoTracks().concat(window.stream.getAudioTracks()).forEach(function(track) {
                            track.stop();
                            uploadVideo();
                        });
                    }, 1e3);
                });
            }
        };
        function uploadVideoH5() {
            var videoFile, total, uploadId, i, start;
            if (!(videoFile = $('#videoInput')[0].files[0])) {
                $('#videoInput').val('');
                uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
                return;
            }
            if (isGoApp && !$scope.isEntType) return getGoApp(), void 0;
            if (!function(videoFile) {
                var checkResult, currentVideoFileTemp;
                checkResult = !0;
                currentVideoFileTemp = bytesToSize(videoFile.size);
                if (/3gp|mp4|avi|flv|webm|asf|mov/i.test(videoFile.name) && 0 !== parseInt(currentVideoFileTemp)) {
                    if (videoFile.size > videoAsrTask.videoFileMax) {
                        $scope.errtext = $rootScope.i18mobile['face_CBC.7231'];
                        checkResult = !1;
                    }
                } else {
                    checkResult = !1;
                    mobileCommonService.callEvent('uploadVideo_videoSize=' + currentVideoFileTemp + '_videoName=' + videoFile.name, 'start');
                    $scope.errtext = parseInt(currentVideoFileTemp) ? $rootScope.i18mobile.face_incorrectVideoType : $rootScope.i18mobile['upload_CBC.0100_inv'];
                }
                if (!checkResult) {
                    $('#videoInput').val('');
                    $scope.remindPage.timeoutlable = $rootScope.i18mobile.button_video_restart;
                    uploadTimeOutTemp && $timeout.cancel(uploadTimeOutTemp);
                }
                return checkResult;
            }(videoFile)) return $scope.videoError.errorFn({
                'errormsg': $scope.errtext,
                'from': $rootScope.i18mobile.bi_authFailed + '_catch_'
            }), void 0;
            currentVideoFile = videoFile.size;
            uploadTimeOutTemp = $timeout(uploadTimeOut, 1e3 * uploadTimeOutTime);
            mobileCommonService.callEvent($rootScope.i18mobile.bi_uploadVideoStart + '_' + videoFile.size, 'start');
            total = Math.ceil(videoFile.size / videoAsrTask.videoFilePartMax);
            uploadId = videoAsrTask.taskId;
            videoAsrTask.currentUploadId = uploadId;
            videoAsrTask.retryTime = [];
            videoAsrTask.rest = total;
            for (i = 0; i < total; ++i) {
                start = videoAsrTask.videoFilePartMax * i;
                start = videoFile.slice(start, start + videoAsrTask.videoFilePartMax, videoFile.type);
                videoAsrTask.retryTime[i] = 0;
                uploadVideoPart(start, i + 1, total, uploadId, videoFile.size);
            }
        }
        $scope.goRecordVideo = {
            'label': $scope.i18mobile.video_iknowe,
            'isShow': !0,
            'onchange': function() {
                $scope.goRecordVideo.isShow = !1;
                $scope.video.showTipFn(5);
                $timeout(function() {
                    uploadVideoH5();
                }, 300);
            },
            'toShowTipClick': function() {
                $scope.remindPage.isShow = !0;
                $scope.remindPage.isShowTip = !0;
                $scope.remindPage.timeoutlable = $scope.i18mobile.video_iknowe + ' ' + $scope.remindPage.timeoutTime + $scope.i18mobile.video_seconed;
                setTimeout($scope.remindPage.timeoutSecond, 1e3);
            },
            'show': function() {
                if ($rootScope.isShowH5) {
                    $scope.remindPage.isShow = !0;
                    $scope.goRecordVideo.isShow = !0;
                }
            }
        };
        $scope.remindPage = {
            'isShow': !1,
            'problemTip': !1,
            'problemClick': function() {
                $scope.remindPage.isShow = !0;
            },
            'problemGoBack': function() {
                $scope.remindPage.isShow = !1;
            },
            'buttonProblem': {
                'isShow': !1,
                'goBack': function() {
                    $scope.remindPage.buttonProblem.isShow = !1;
                    $scope.remindPage.isShowTip = !0;
                },
                'buttonClick': function() {
                    $scope.remindPage.buttonProblem.isShow = !0;
                    $scope.goRecordVideo.isShow = !1;
                }
            },
            'remindPageShow': function() {
                $scope.remindPage.isShow = !0;
                $scope.remindPage.isShowTip = !0;
            }
        };
        $scope.privacyPage = {
            'isShow': !1,
            'problemClick': function() {
                mobileCommonService.callEvent('privacyDetail', $scope.getUBAValue + '_step' + $scope.UBAStep);
                $scope.privacyPage.isShow = !0;
                $('#privacyDetail').html($rootScope.i18mobile.privacy_content);
            },
            'problemGoBack': function() {
                $scope.privacyPage.isShow = !1;
            }
        };
        window.addEventListener('offline', function() {
            $scope.errtext = $rootScope.i18mobile.video_uploadFailed;
            mobileCommonService.mobileAlertOneButton($scope.errtext, $scope.errTitle);
        });
        $scope.viewVideoInput = !1;
        $scope.closeVideoNoticeTip = function() {
            $scope.videoNoticeTip = !1;
        };
        initDate = function() {
            $scope.remindPage.isShow = !1;
            getBlobErrorTime = 0;
            $scope.errorScen = '';
            $scope.video.isShowNods = !0;
            $scope.video.isShowVideo = !1;
            $scope.video.isShowCycle = !1;
            $scope.videoError.isShow = !1;
            $scope.video.isShowSaomiao = !1;
        };
        initOnePage = function() {
            $scope.goRecordVideo.isShow = !0;
            initDate();
        };
        initVideoFirstPage = function() {
            $scope.goRecordVideo.isShow = !1;
            initDate();
        };
        startVideoCallback = function() {
            if ($rootScope.isShowH5) $timeout($scope.remindPage.remindPageShow(), 0); else {
                userMediaItem.playStream();
                $scope.video.isShowVideo = !0;
                $scope.video.isShowCycle = !0;
                $('#topTipMsg').fadeTo(500, 1);
                $timeout(function() {
                    $scope.video.showTipFn(4);
                }, 1e3);
            }
        };
        $scope.sendUBAStep = function() {
            mobileCommonService.callEvent('videoStart', $scope.getUBAValue + '_step' + $scope.UBAStep);
        };
        $scope.videoClick = function() {
            if ($scope.video.hasClicked) return void mobileCommonService.callEvent('hasClicked_true', $scope.getUBAValue + '_step' + $scope.UBAStep);
            $scope.video.hasClicked = !0;
            if ($scope.video.clickTimer) {
                clearTimeout($scope.video.clickTimer);
                $scope.video.clickTimer = null;
            }
            $scope.video.clickTimer = setTimeout(() => {
                clearTimeout($scope.video.clickTimer);
                $scope.video.clickTimer = null;
                $scope.video.hasClicked = !1;
            }, $scope.video.throttleDuration);
            mobileCommonService.callEvent('videoStart', $scope.getUBAValue + '_step' + $scope.UBAStep);
            $scope.isShowH5 ? $timeout(function() {
                $('#videoInput').click();
            }, 0) : $scope.video.showTipFn(3);
        };
        $scope.video = {
            'isShowVideo': !1,
            'isShowCycle': !1,
            'isShowCycleNew': !0,
            'isShowNods': !0,
            'step': 1,
            'topTip': $rootScope.i18mobile.video_step1,
            'hasClicked': !1,
            'clickTimer': null,
            'throttleDuration': 2e3,
            'showTipFn': function(step) {
                $scope.video.step = step;
                $scope.videoError.isShow = !1;
                step++;
                switch ($scope.video.step) {
                  case 1:
                    $scope.remindPage.isShow = !1;
                    $scope.goRecordVideo.isShow = !0;
                    $rootScope.isShowH5 || (userMediaItem.isRe ? userMediaItem.startVideo() : userMediaItem.getMediaRecorder());
                    break;

                  case 2:
                    $scope.video.topTip = $rootScope.i18mobile.video_step2;
                    $('#topTipMsg').fadeTo(625, 1);
                    $('#topTipMsg').fadeTo(1250, 0);
                    $('#nods').fadeOut(1250);
                    $timeout(function() {
                        $scope.video.showTipFn(step);
                    }, 1250);
                    break;

                  case 3:
                    mobileCommonService.callEvent('showTipFn_start');
                    userMediaItem.playStream();
                    userMediaItem.videoStream.play();
                    $timeout(function() {
                        var iosVer, videoNew;
                        initVideoFirstPage();
                        $scope.video.isShowVideo = !0;
                        $scope.video.isShowCycle = !0;
                        $scope.video.isShowNods = !1;
                        $scope.video.topTip = $rootScope.i18mobile.video_step3;
                        $('#topTipMsg').fadeTo(500, 1);
                        iosVer = mobileCommonService.getIosVerStr();
                        iosVer = isIOS && !mobileCommonService.isVerLessThan(iosVer, '15.9');
                        videoNew = document.getElementById('videoNew');
                        isIOS && iosVer && videoNew && videoNew.removeAttribute('controls');
                        $timeout(function() {
                            $scope.video.showTipFn(step);
                        }, 1e3);
                    }, 300);
                    break;

                  case 4:
                    mobileCommonService.callEvent('showTipFn_video');
                    $scope.video.topTip = $rootScope.i18mobile.video_step2;
                    $('#topTipMsg').fadeTo(1e3 * circleTime / 2, 1);
                    $('#topTipMsg').fadeTo(1e3 * circleTime, 0);
                    userMediaItem.startRecording();
                    break;

                  case 5:
                    mobileCommonService.callEvent('uploadStart', $scope.getUBAValue + '_step' + ($scope.UBAStep + 1));
                    $scope.remindPage.isShow = !1;
                    $scope.goRecordVideo.isShow = !1;
                    if (!$rootScope.isShowH5) {
                        var circleLeft, circleRight;
                        circleLeft = document.querySelector('.circle-left');
                        (circleRight = document.querySelector('.circle-right')) && (circleRight.style.transform = 'rotate(-45deg)');
                        circleLeft && (circleLeft.style.transform = 'rotate(-45deg)');
                        $scope.remindPage.isShow = !1;
                        $scope.video.isShowVideo = !1;
                        $scope.video.isShowNods = !1;
                        $scope.video.isShowCycle = !1;
                    }
                    $scope.video.isShowSaomiao = !0;
                    $scope.video.topTip = $rootScope.i18mobile.video_step5;
                    $('#topTipMsg').fadeTo(500, 1);
                }
            }
        };
        function setVideoActionValue(videoAction) {
            $scope.videoActionValue = videoAction || 'nods';
            videoAction = 'videoAction_' + $scope.videoActionValue;
            mobileCommonService.callEvent(videoAction);
            $rootScope.i18mobile.videoNew_H5Exam_tip = utilService.i18nReplace($rootScope.i18mobile.videoNew_H5Exam_tip, [ $rootScope.i18mobile[videoAction] ]);
            $rootScope.i18mobile.video_iknowe = utilService.i18nReplace($rootScope.i18mobile.video_iknowe, [ $rootScope.i18mobile[videoAction] ]);
            $rootScope.i18mobile.video_step2 = utilService.i18nReplace($rootScope.i18mobile.video_step2, [ $rootScope.i18mobile[videoAction] ]);
            $scope.goRecordVideo.label = $rootScope.i18mobile.video_iknowe;
            getVideoAsrTask();
        }
        $rootScope.pageShow.initPage = function() {
            mobileCommonService.callEvent('ActivityVideoH5New_' + biScen, '', 'pageView');
            isGoApp = $rootScope.platformResult;
            $scope.isEntType = $rootScope.videoUpload.customerType === USERTYPE_ENT;
            $scope.isEntType && ($scope.UBAStep = 5);
            $rootScope.pageShow.firstonLoaded = !0;
            userMediaItem.isRe = !1;
            $scope.videoNoticeTip = !1;
            $scope.getUBAValue = getUBAValue();
            $scope.activityUrl = mobileAccountService.getHWABI() || $stateParams.service;
            mobileAccountService.getVideoAction({
                'callback': setVideoActionValue
            });
        };
        $rootScope.pageShow.firstonLoaded || $rootScope.pageShow.initPage();
    } ];
    angular.module('mobile.config').tinyController('activityVideo.ctrl', videoUpload);
});
