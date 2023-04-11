/**
 * Created on 2015/1/31.
 */
/* global define */
/* global $ */
/* global angular */
define([], function () {
    "use strict";
    var config = {
        "enableVoc": true,
        "proNPSUrl": "https://voc.huaweicloud.com/survey-api",
        "devNPSUrl": "https://console.ulanqab.huawei.com/nps-api",
        'tinyReportUrl': 'https://res-static1.huaweicloud.com/content/dam/cloudbu-site/archive/commons/web_resoure/tinyreporter/tinyReporter.min.js',// 性能分析脚本
        "getBSSInfoFlag": true,
        "getMessageFlag": false,
        "tipsMessageMode": 1,
        "isOldUser": true,
        "canAssumeRole": true,
        "x_domain_type": "",
        "isMessageBoxEnabled": true,
        "displayShortcut": true,
        "newHECMenu": true,
        "userBalanceSwitch":true,
        "footerContentSwitch":true,
        "realNameAuthSwitch":true,
        "ifSupportRegionsDisplay":false,
        "userCenterLinkSwitch":false,
        "defaultHelpCenterSwitch":false,
        "analysis": true,
        "ubaRegions": ['cn-north-1', 'cn-north-4', 'cn-east-3', 'cn-east-2', 'cn-south-1', 'cn-southwest-2', 'ap-southeast-1', 'cn-north-7'], // 能够正常埋点反馈的局点白名单
        "hcsBlackList":['cn-east-201','cn-north-219'],
        "newMenuAdjustSwitch":true,//包括资源、企业、基本信息、安全设置、统一身份认证、卖家中心、伙伴中心
        "newMenuAdjustAndNewHECMenuSwitch":false,
        "newOverseasRegionGuideSwitch":true,
        "topSerarchBoxSwitch":true,
        "showNewSwitch":true,
        "leftMenuRegionAdjustSwitch":true,
        "showNewLanguageIconSwitch":true,
        "csbGetInterfaceSwitch":true, //csb查询账户详情、region信息接口
        "isOpenAllianceToken": true,
        "isCTCandActionUrlParameter": false,//ctc region切换url增加ctc_action的参数
        "userRenewSwitch":true,    //待续费开关
        "partnerCloudMaskingService": false,
        "isRestrictedType":[1],  //受限类型
        "isRestrictedSwitch":true, //cbc查询受限接口，华为云查询
        "isNewSupportRegionList":false,
        "serviceCustomHeaderSwitch":true,  //  custom header content for service
        "multiObSwitch": false,   //多ob开关
        "distributorCustomization":true,
        "projectDescriptionSwitch":false,//projects的字段的description 来替代name的显示
        "showBalanceSwitch":false,//显示账号余额
        "showTopUpSwitch":true, //显示充值按钮
        "cdnCFStaticUrl":"https://console-static.huaweicloud.com/static/**",
        "downloadDistributorFileFromBucketAddress":"https://openapi-sharedata-cn.obs.myhwclouds.com/pageCustomization/",//支持从桶上下载分销商文件
        "supportResourceManager":true,
        "cfAnalysisUrlCloudbi": "https://res.hc-cdn.com/bi/uba.js"
    };

    return config;
});
