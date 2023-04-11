var usercenter_url, saasServiceCallBackUrl, unpayorder_url, protocol_url, ecsView_url, ecsBuy_url, evsView_url, evsBuy_url, obsView_url, obsBuy_url, ecsView_url_hk, ecsBuy_url_hk, evsView_url_hk, evsBuy_url_hk, obsView_url_hk, ecsPrice, evsPrice, obsPrice, marketing_active_url, isShowUrl, isShowCoupon, productUrlPrefix, productUrlPrefix_hk, manualCustomerServiceUrl, wxPayCodeUrl, balanceRechargeReturnUrl, orderPayReturnUrl, IPSPayErrorReturnUrl, DEVCLOUDURL, realNameAuthUrl, portalLogout, CONSOLE_QUATO_URL1, CONSOLE_QUATO_URL2, DLINE_URL, TICKET_INDEX_CREATE, TICKET_INDEX_CREATE_HK, SERVICEURLMAP, REGDOMAIN, kongs_name, kongs_name_spacial, BILLNEWTAG, PACKAGEMAXNUM, allOrderData, supportEsPtLanguage, multiple_details, customers_queryCusBrief, supportIPS, usePromotion, PAPER_INVOICE, ElEC_INVOICE, defaultInvoiceMode, electronicInvoice, HWProvince, INVOICE_CHANNEL, INVOICE_ISV_ID, subFeeSumInfos, G_currencySymbol, G_currencySymbol_suffix, G_symbol, currentLange, accountType_Predeposit, bpUserActions, bpUserStatus, RECHARGE_ACCOUNT_NAME, RSP_SUCCESS, RSP_ERROR_404, callbackWhiteList, servicePayCallbackWhiteList, aliPayCallbackWhiteList, BETYPE_CSB, BETYPE_SUBNET, BETYPE_PARTNER, BINDTYPE_CSB, BINDTYPE_PARTNER, BINDTYPE_RESALE, BINDTYPE_PARTNER_UNBIND, BINDTYPE_BOTH, BESTATUS_VALID, BINDTYPE_INVALID, MOBILE_TOP_SCROLL, arrVIP, devCloudFlag, cloudServerBackupResourceFlag, REALNAMESTATUS, accountType, searchTime, EXPORTNUM, asyncEXPORTNUM, isAsyncDownload, versionRule, roleRule, userRule, permissionUrlMap, NOPROMOTIONSRESOURCEID, DEVCLOUD_PARAMARS, devCollegeCloudFlag, DEVCLOUD_VIEWMAPS, oldDevCloudCity, softDevCloudFlag, individualNoSurpportByPkgCode, orderItemsNumHaveTips, CUSTOMERLEVEL, CUSTOMERLEVELID, img_level, FREEZEROLE, DISABLE_IP_TYPES, BATCHRENEW_NUM, BATCHRENEWEXPORT_NUM, PAYBYPROXY_OPERATORTYPE, CAPTCH_TYPE, UNSUBSCRIBE_TYPE, RECORD_STATUS, DISMISSONTIMEOUT, BILLINGUSAGESWITH, SCROLLTOP_TIME, SENDSMSCODE_INTERVALS, IDENTIFYTYPE, DEALRECORDNEW, EVS_ENCRYPTION_SUPPORT_REGIONCODE, isShowNewBill, VERSION_KEY_HK, VERSION_KEY_CHINA, VERSION_KEY_RUSSIA, VERSION_KEY_JRZQ, VERSION_KEY_HCSO, isSupportWx, TIMEOUT_WXPAYCODE, showNewConsumeDetail, hideResourceDetail, NEW_RENEWAL, NATIONAL, BANK_ACCOUNT, ENT_RSP_SUCCESS, MYRESOURCE_ON, MYRESOURCE_RSP_SUCCESS, DISCOUNTTYPE, PRICEPLAN, ORDERDETAILS, CARDORDERDETAILS, CHARGEINFOS, CARDCHARGEINFOS, isHKOnlinePayClose, AGENTPAY, NEW_ORDER_FLAG, XDOMAINS, RENEW_WHITELIST, site, biStartDate, newAllview, skiptoiamorusercenter, SALESMAN, TAGLIMIT, isSupportTag, SUBSCRIPTIONSTATUS, subscriptionSwitch, UNSUB_FLAG, BANDWIDTHSHARE, ACCOUNT_OUT_DATE, FIRSTPERFECTINFO, DISCOUNTADAPTER, DEDUCTCHECKFLAG, CHANGEPERIODFLAG, newExportFlag, BUSSINESSDISCOUNTTYPE, DISCOUNTCANSELECT, organizationPoliticsSwitch, costAnalyseSwitch, costAnalyseExportSwitch, ASSOCIATION_FLAG, NEW_RELATION_FLAG, NEW_RELATION_FLAG_UNSUB, NO_CHECKAUTH_REGION, USERTYPE_IND, USERTYPE_ENT, entQuotaSwitch, CONTRACT_BILLING_DATE, projectGroupBillAnalysis, FAILURETIME, ZBJ_BEID, ZKZD_BEID, PRE_CONSUME, NEW_RELATION, DEMANDFLAG, SPOT_BIDDINGINSTANCE, ENTERPRISE_TOTALLEVERS, ENTERPRISE_ORG_TOTALLEVERS, PATYTYPE, LIMITNUM, PERMISSIONID, ERRORCHECKLIST, PERMISSIONIDSTATUS, ENTPARTYSTATUS, ENTRELATIONSTATUS, SUBASSOCIATIONTYPE, BALANCETYPE, TRANSTYPE, ORG_RELATION_TYPE, CLILD_PARTY_TYPE, PERIODDISCOUNT, RELATIONACCOUNTMAXNUM, BINDCARDSWITCH_PAYAFTER, BINDCARD_ISCHANGECONTRY, noTTLList, BATCHUNSUBSCRIBE_NUM, RETREATAMOUNT, ENTBSTATIONSWITCH, HKREGISTINTERVALTIME, PAYMENT_LIMIT_SERVICE, PersonCustmoerApplyBankNOMode, innerCustomerSortId_default, externalCustomerSortId_default, SysCustomerSortId_default, CHARGEMODEOBJ, F_G_CUSTOMER_ORG_BUDGET_DEFAULT, F_ENABLE_ENTERPRISEPROJECT_JRZQ_DEFAULT, F_CLOSE_ACCOUNT_DEFAULT, NEWCONSUME2121, COUPONTYPE, OrgBughetCustomerIdList_DEFAULT, obsbucket, ORIGINAL_RETURN_PERIOD, FULFILLMENTSTATUS, DATAJSON, ISWORDPAY, CommonFunc, commons, __, commOrderCommonConfigDRM, defaultUrlConfigs, defaultConsoleWhiteListUrl;

window.customiseVer = window.customiseVer || '@{VERSION_TYPE}';

window.customiseCode = {
    'v1r2': {
        'routeFiles': [ 'app/business/v1r2/usercenter/configures/usercenterRouterConfig', 'app/business/v1r2/usercenter/configures/enterprisecenterRouterConfig', 'app/business/v1r2/usercenter/configures/accountRouterConfig', 'app/business/v1r2/usercenter/configures/orderRouterConfig', 'app/business/v1r2/usercenter/configures/expenseRouterConfig' ],
        'mobileRouteFiles': [ 'app/business/mobile/configures/mobileRouterConfig' ],
        'additionalModuleNames': [ 'ionic', 'usercenter.config', 'account.config', 'order.config', 'ordercenter.config', 'expense.config' ],
        'pubParams': {
            'globalPhone': '4000-955-988'
        }
    },
    'hk': {
        'routeFiles': [ 'app/business/v1r2/usercenter/configures/usercenterRouterConfig', 'app/business/v1r2/usercenter/configures/enterprisecenterRouterConfig', 'app/business/v1r2/usercenter/configures/accountRouterConfig', 'app/business/v1r2/usercenter/configures/orderRouterConfig', 'app/business/v1r2/usercenter/configures/expenseRouterConfig' ],
        'mobileRouteFiles': [ 'app/business/mobile/configures/mobileRouterConfig' ],
        'additionalModuleNames': [ 'ionic', 'usercenter.config', 'account.config', 'order.config', 'ordercenter.config', 'expense.config' ],
        'pubParams': {
            'globalPhone': '800 93 1448'
        }
    },
    'ru': {
        'routeFiles': [ 'app/business/v1r2/usercenter/configures/usercenterRouterConfig', 'app/business/v1r2/usercenter/configures/accountRouterConfig' ],
        'mobileRouteFiles': [],
        'additionalModuleNames': [ 'ionic', 'usercenter.config', 'account.config' ],
        'pubParams': {
            'globalPhone': '800 93 1448'
        }
    },
    'v1r2-jrzq': {
        'routeFiles': [ 'app/business/v1r2/usercenter/configures/usercenterRouterConfig', 'app/business/v1r2/usercenter/configures/enterprisecenterRouterConfig', 'app/business/v1r2/usercenter/configures/accountRouterConfig', 'app/business/v1r2/usercenter/configures/orderRouterConfig', 'app/business/v1r2/usercenter/configures/expenseRouterConfig' ],
        'mobileRouteFiles': [ 'app/business/mobile/configures/mobileRouterConfig' ],
        'additionalModuleNames': [ 'ionic', 'usercenter.config', 'account.config', 'order.config', 'ordercenter.config', 'expense.config' ],
        'pubParams': {
            'globalPhone': '4000-955-988'
        }
    }
};

window.isHws = !0;

window.isOpenWOClassification = !0;

window.getCustomiseFile = function(cname) {
    if ((customiseVer = customiseVer || 'v1r2') && 0 < customiseVer.length && 'default' !== customiseVer) {
        cname = customiseCode[customiseVer] ? customiseCode[customiseVer][cname] : null;
        if (cname && 0 < cname.length) return cname;
    }
    return null;
};

window.refreshBasicLogic = function(paramArr, cname) {
    cname = getCustomiseFile(cname);
    cname && require([ cname ], function(ctrl) {
        ctrl.refreshLogic(paramArr);
    });
};

window.getCurrentRouteFiles = function() {
    return (isMobile ? getCustomiseFile('mobileRouteFiles') : getCustomiseFile('routeFiles')) || customiseCode.v1r2.routeFiles;
};

window.timeStamp = '';

window.getAddiModuleNames = function() {
    var addFileArray = getCustomiseFile('additionalModuleNames');
    return addFileArray = addFileArray || [];
};

$.ajaxSetup({
    'cache': !0
});

'function' != typeof String.prototype.startsWith && (String.prototype.startsWith = function(prefix) {
    return this.slice(0, prefix.length) === prefix;
});

window.bussinessVersion || (window.bussinessVersion = currentVersion);

window.REPORT_WHITELIST = {
    'retCodes': [ '0', 'CBC.0000', 'CBC.7109', '508040210', 'CBC.7182', '508110527', '508110507', '54' ],
    'apiUrls': [ '/rest/v1/isvMgr/isvInfo', '/rest/v1/partner/paymentaccount/dis-aliaccount-info', '/rest/r2/BSS/OpenApi/v1/invoice/queryBillForInvoices', '/rest/r2/BSS/OpenApi/v1/invoice/queryOrderForInvoices', '/rest/cbc/csbfinancialservice/v1/refund/withdrawals', '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status', '/rest/csb/csbinvoicemgrservice/v1/invoice/invoice-amount', '/rest/cbc/cbccustomerorgservice/v1/em/account/new-sub-customer' ]
};

define('app/business/controllers/urlConfig', [], function() {});

window.UrlConfig = {};

window.iam_url = window.iam_url || '@{IAM_EXTERNAL_URL}';

window.iam_url_auth = window.iam_url_auth || '@{IAM_AUTH_URL}';

usercenter_url = window.location.protocol + '/' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

const authDomain = window.g_Vars.authDomain;

const prodDomainMap = {
    'ulanqab.huawei.com': 'huaweicloud.com',
    'ulanqab.huawei.cn': 'huaweicloud.cn'
};

window.domainNames = {
    'v1r2': {
        'market': 'marketplace.' + authDomain,
        'support': 'support.' + (prodDomainMap[authDomain] || authDomain),
        'www': 'www.' + authDomain,
        'auth': 'auth.' + authDomain,
        'activity': 'activity.' + authDomain,
        'console': 'console.' + authDomain,
        'account': 'account.' + authDomain
    },
    'hk': {
        'intl': 'www.' + authDomain + '/intl',
        'activity-intl': 'activity.' + authDomain + '/intl',
        'support-intl': 'support.' + (prodDomainMap[authDomain] || authDomain) + '/intl',
        'marketplace-intl': 'marketplace.' + authDomain + '/intl',
        'developer-intl': 'developer.' + authDomain + '/intl',
        'edu-intl': 'edu.' + authDomain + '/intl',
        'auth-intl': 'auth.' + authDomain,
        'www': 'www.' + authDomain + '/intl',
        'console': 'console-intl.' + authDomain,
        'support': 'support.' + (prodDomainMap[authDomain] || authDomain),
        'account': 'account-intl.' + authDomain
    },
    'hk-eu': {
        'console': -1 < window.location.host.indexOf('huaweicloud.com') ? 'console.eu.huaweicloud.com' : 'cn-southwest-275-console.huaweicloud.com',
        'support': 'support.' + (prodDomainMap[authDomain] || authDomain) + '/eu',
        'www': 'www.' + authDomain
    },
    'v1r2-jrzq': {
        'market': 'marketplace.jrzq.' + authDomain,
        'support': 'support.' + (prodDomainMap[authDomain] || authDomain),
        'www': 'www.jrzq.' + authDomain,
        'auth': 'auth.jrzq.' + authDomain,
        'activity': 'activity.jrzq.' + authDomain,
        'console': 'console.jrzq.' + authDomain
    },
    'v1r2-hcso': {
        'market': 'marketplace.' + authDomain,
        'support': 'support.' + (prodDomainMap[authDomain] || authDomain),
        'www': 'www.' + authDomain,
        'auth': 'auth.' + authDomain,
        'activity': 'activity.' + authDomain,
        'console': 'console.' + authDomain
    }
};

window.UrlConfig.getTargetDomain = function(service) {
    return {
        'v1r2': {
            'console': 'console',
            'support': 'support',
            'portal': 'portal'
        },
        'hk': {
            'console': 'console-intl',
            'support': 'support-intl',
            'portal': 'portal-intl'
        },
        'hk-ru': {
            'console': 'console-ru1',
            'support': 'support-ru',
            'portal': 'portal-ru'
        },
        'v1r2-jrzq': {
            'console': 'console.jrzq',
            'support': 'docs.jrzq',
            'portal': 'portal.jrzq'
        },
        'v1r2-hcso': {
            'console': 'console',
            'support': 'support',
            'portal': 'portal'
        },
        'hk-eu': {
            'console': 'console.eu',
            'support': 'support',
            'portal': 'portal-eu'
        }
    }[window.realVer || 'v1r2'][service];
};

window.UrlConfig.completeUrl = function(param) {
    var reUrl, type, i, il, j;
    reUrl = {};
    type = window.realVer || 'v1r2';
    for (i = 0, il = param.length; i < il; i++) if (param[i].value) for (j in param[i].value) param[i].value.hasOwnProperty(j) && (reUrl[j] = 'https://' + domainNames[type][param[i].key] + param[i].value[j]);
    return reUrl;
};

saasServiceCallBackUrl = 'https://@{BSS_ADDR}/rest/csbfinancialsaasservice/v2/auth/modifyValidPeriod';

unpayorder_url = '#/userindex/myOrder?orderType=2';

protocol_url = 'http://help.' + authDomain + '/help/obsDataAgreement.html';

ecsView_url = 'http://www.' + authDomain + '/product/ecs.html';

ecsBuy_url = 'https://console.' + authDomain + '/ecm/#/ecs/createVm';

evsView_url = 'http://www.' + authDomain + '/product/evs.html';

evsBuy_url = 'https://console.' + authDomain + '/ecm/#/evs/createvolume';

obsView_url = 'http://www.' + authDomain + '/product/obs.html';

obsBuy_url = 'https://storage.' + authDomain + '/obs';

ecsView_url_hk = 'http://intl.' + authDomain + '/product/ecs.html';

ecsBuy_url_hk = 'https://' + window.UrlConfig.getTargetDomain('console') + '.' + authDomain + '/ecm/#/ecs/createVm';

evsView_url_hk = 'http://intl.' + authDomain + '/product/evs.html';

evsBuy_url_hk = 'https://' + window.UrlConfig.getTargetDomain('console') + '.' + authDomain + '/ecm/#/evs/createvolume';

obsView_url_hk = 'http://intl.' + authDomain + '/product/obs.html';

marketing_active_url = '';

isShowCoupon = !(isShowUrl = !(obsPrice = evsPrice = ecsPrice = 'X'));

productUrlPrefix = 'https://www.' + authDomain;

productUrlPrefix_hk = 'https://intl.' + authDomain;

manualCustomerServiceUrl = 'http://www22.53kf.com/webCompany.php?arg=huawei1111&style=1';

wxPayCodeUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx524f34f66a832093&connect_redirect=1&redirect_uri=MYREDIRECT_URI&response_type=code&scope=snsapi_base&state=MYSTATE#wechat_redirect';

balanceRechargeReturnUrl = usercenter_url + '/usercenter/?hws_route_url=userindex/allview';

orderPayReturnUrl = usercenter_url + '/usercenter/?hws_route_url=paySuccess';

IPSPayErrorReturnUrl = usercenter_url + '/usercenter/?hws_route_url=userindex/myOrder?orderType=6';

DEVCLOUDURL = {
    'VMURL': 'https://console.' + authDomain + '/gratis/?locale=zh-cn&activityID=P17033010392271816F9VDP0SIV6DN#/gratis/ecs',
    'VPCURL': 'https://console.' + authDomain + '/vpc/?agencyId=',
    'BDPARAMS': '#/vpc/vpcmanager/eips',
    'HELPURL': 'https://support.' + authDomain + '/devcloud/index.html',
    'OPENDEVCLOUDMODEL_URL': 'https://console.' + authDomain + '/devcloud/#/apply/devsetmeal'
};

realNameAuthUrl = 'https://account.' + authDomain + '/usercenter/#/accountindex/realNameAuth';

portalLogout = 'https://portal.' + authDomain + '/index/logout';

CONSOLE_QUATO_URL1 = 'https://console.' + authDomain + '/console/?region=';

CONSOLE_QUATO_URL2 = '/#/quota';

DLINE_URL = 'https://console.' + authDomain + '/vpc/?region={0}#/vpc/vpcmanager/dline';

TICKET_INDEX_CREATE = 'https://console.' + authDomain + '/ticket/#/ticketindex/createfeedback';

TICKET_INDEX_CREATE_HK = 'https://' + window.UrlConfig.getTargetDomain('console') + '.' + authDomain + '/ticket/#/ticketindex/createfeedback';

SERVICEURLMAP = {
    'ec2': 'https://console.' + authDomain + '/ecm/#/ecs/createVm',
    'ticket': 'https://console.' + authDomain + '/ticket/#/ticketindex/createfeedback?templeteId=004'
};

REGDOMAIN = {
    'hk': 'https://' + window.UrlConfig.getTargetDomain('console') + '.' + authDomain,
    'v1r2': 'https://reg.' + authDomain
};

define('app/business/controllers/consoleDataCache', [], function() {});

kongs_name_spacial = kongs_name = '/rest/uc.cbc';

BILLNEWTAG = {
    'DEFAULT': 1,
    'HKNEW': 2,
    'OLD': 3,
    'CNNEW': 4
};

PACKAGEMAXNUM = 1e3;

supportEsPtLanguage = !(allOrderData = {});

window.dataCenterListCache = {};

window.regionCodeListCache = {};

multiple_details = {};

customers_queryCusBrief = {};

usePromotion = supportIPS = !0;

electronicInvoice = !(PAPER_INVOICE = 0);

HWProvince = {
    '0021': 'sz',
    '0041': 'su',
    '2821': 'gz',
    '2811': 'wlcb'
};

INVOICE_CHANNEL = {
    'HWS': 0,
    'ISV': defaultInvoiceMode = ElEC_INVOICE = 1
};

INVOICE_ISV_ID = {
    'HWS': '0',
    'YX': '1'
};

subFeeSumInfos = [];

G_currencySymbol_suffix = '';

G_symbol = G_currencySymbol = '¥';

currentLange = 'zh-cn';

accountType_Predeposit = 1;

bpUserActions = {
    'BIND': '1',
    'UNBIND': '2'
};

bpUserStatus = {
    'APPLY': '0',
    'PASS': '1',
    'FAIL': '2'
};

RECHARGE_ACCOUNT_NAME = '华为软件技术有限公司';

RSP_SUCCESS = 0;

RSP_ERROR_404 = '404';

callbackWhiteList = [ 'console.' + domainName + '.com/', 'console.' + domainName + '.com:443/', 'console.huawei.com/', 'console.huawei.com:443/' ];

servicePayCallbackWhiteList = [ 'support.' + domainName + '.com/', 'support-intl.' + domainName + '.com/', 'support-ru.' + domainName + '.com/', 'support.' + domainName + '.com/intl' ];

aliPayCallbackWhiteList = [ 'www.' + domainName + '.com/', 'www.' + domainName + '.com:443/', 'account.' + domainName + '.com/', 'account.' + domainName + '.com:443/', 'account-intl.' + domainName + '.com/', 'account-intl.' + domainName + '.com:443/', 'activity.' + domainName + '.com/', 'activity.' + domainName + '.com:443/', 'account-ru1.' + domainName + '.com/', 'account-ru1.' + domainName + '.com:443/' ];

MOBILE_TOP_SCROLL = 800;

arrVIP = [];

devCloudFlag = {
    'PKG1': '10人_青岛套餐',
    'PKG2': '50人_青岛套餐',
    'PKG3': '软件开发云10人套餐',
    'PKG4': '软件开发云20人套餐',
    'PKG5': '10人_福州套餐',
    'PKG6': '50人_福州套餐',
    'PKG7': '10人_南京套餐',
    'PKG8': '20人_南京套餐',
    'PKG9': '40人_南京套餐'
};

cloudServerBackupResourceFlag = {
    'PKG1': 'csbs.size.vm',
    'PKG2': 'csbs.size',
    'PKG3': 'csbs.appconsistency.pkg'
};

REALNAMESTATUS = {
    'NOAUTH': -(BESTATUS_VALID = BINDTYPE_CSB = BETYPE_CSB = 1),
    'AUTHING': 0,
    'AUTHNOPASS': 1,
    'AUTHOK': BINDTYPE_INVALID = BINDTYPE_PARTNER = BETYPE_SUBNET = 2,
    'AUTHFAIL': BINDTYPE_RESALE = BETYPE_PARTNER = 3
};

EXPORTNUM = 1e4;

asyncEXPORTNUM = 5e5;

versionRule = {
    'black': {
        'v1r2': [],
        'tlf': [],
        'hk': [ '/userindex/privilege', '/userindex/contactsManager', '/userindex/survey', '/userindex/tomyPartner', 'userindex/recommendManagement' ]
    }
};

roleRule = {
    'white': {
        'isVendorSubUser': [ '/accountindex/accountInfo', '/userindex/cusManagement', '/userindex/preference', '/userindex/customerfeedback', '/userindex/createfeedback', '/userindex/survey', '/userindex/questionnaire', '/userindex/feedBackSucess', '/userindex/contactsaddmodify', '/userindex/contactsManager', '/userindex/recommendmanagement', '/userindex/recommend', '/userindex/realNameAuth' ]
    },
    'black': {
        'isBindPartner': [ '/contractApplyByScenes' ]
    }
};

userRule = {
    'black': {
        'isChannel': [],
        'noRealNameAuth': [ '/userindex/createInvoice', '/userindex/createInvoiceTemplate', '/userindex/reqInvoiceSucc', '/userindex/createaddress', '/userindex/contractApply', '/userindex/contractSelectOrder', '/userindex/applyBpInfo' ]
    }
};

permissionUrlMap = {
    '/enterpriseProjectIndex/consumeDetail': 'uc.t2.consumedetail',
    '/enterpriseProjectIndex/resourceConsumeRecord': 'uc.t2.consumedetail',
    '/userindex/billingTrend': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billv1info': 'uc.t2.consumesum',
    '/enterpriseProjectIndex/expenseBills': 'uc.t2.consumesum',
    '/enterpriseProjectIndex/consumeSubDetailn': 'uc.t2.consumedetail',
    '/enterpriseProjectIndex/resourceSubDetail': 'uc.t2.consumedetail',
    '/enterpriseProjectIndex/billDiscountInfo': 'uc.t2.consumelist',
    '/subaccount/consumeDetail': 'uc.t2.consumedetail',
    '/subaccount/consumeRiSubDetail': 'uc.t2.consumedetail',
    '/subaccount/consumeSubDetail': 'uc.t2.consumedetail',
    '/subaccount/resourceSubDetail': 'uc.t2.consumedetail',
    '/subaccount/billDiscountInfo': 'uc.t2.consumelist',
    '/userindex/consumptionStorage': 'uc.t1.consumelist',
    '/enterpriseProjectIndex/consumeTab': 'uc.t2.consumesum',
    '/enterpriseProjectIndex/currentUsage': 'uc.t2.toperiod',
    '/enterpriseProjectIndex/retreatManagement': 'uc.t2.retreat',
    '/enterpriseProjectIndex/billingDistribut': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/enterpriseProjectIndex/feeAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/enterpriseProjectIndex/billAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/enterpriseProjectIndex/costAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/consumeTab': 'uc.t2.consumesum',
    '/expenseIndex/consumeTab': 'uc.t2.consumesum',
    '/userindex/consumeDetail': 'uc.t2.consumedetail',
    '/expenseIndex/consumeDetail': 'uc.t2.consumedetail',
    '/expensecn/billv1info': 'uc.t2.consumedetail',
    '/userindex/resourceConsumeRecord': 'uc.t2.consumedetail',
    '/userindex/costMonthly': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/costv1bill': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billInfoMonthly': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billingAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/oweBusiness': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/oweBusinessDetail': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/feeAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/expenseIndex/feeAnalysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billDiscountInfo': 'uc.t2.consumelist',
    '/userindex/consumeSubDetailn': 'uc.t2.consumedetail',
    '/userindex/resourceSubDetail': 'uc.t2.consumedetail',
    '/userindex/consumeRiSubDetail': 'uc.t2.consumedetail',
    '/userindex/payRecords': 'uc.t2.deal',
    '/userindex/feetag': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/feeTag': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/expenseIndex/feeTag': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billv1Analysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/costv1Analysis': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/costBudgeting': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/costBudgetingUpdate': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/costBudgetingDetail': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/reservedInstance': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/userindex/billPreference': 'uc.t1.consumeexport',
    '/userindex/statusage': 'uc.t2.consumetrade#uc.t2.consumelist',
    '/expenseIndex/payRecords': 'uc.t2.deal',
    '/userindex/adjustRecords': 'uc.t2.deal',
    '/userindex/dealRecords': 'uc.t2.deal',
    '/userindex/deals': 'uc.t2.deal',
    '/userindex/coupons': 'uc.t2.coupon',
    '/userindex/couponDetail': 'uc.t2.coupon',
    '/userindex/couponsActivate': 'uc.t2.coupon',
    '/getCoupons': 'uc.t2.coupon',
    '/userindex/cashCoupon': 'uc.t2.coupon',
    '/userindex/cashCouponDetail': 'uc.t2.coupon',
    '/userindex/storedCard': 'uc.t2.coupon',
    '/userindex/storedCardDetail': 'uc.t2.coupon',
    '/userindex/freePackage': 'uc.t2.discounts',
    '/userindex/invoiceCenter': 'uc.t2.invoice',
    '/userindex/addressAndTemplate': 'uc.t2.account#uc.t2.invoice',
    '/subaccount/addressAndTemplate': 'uc.t2.account#uc.t2.invoice',
    '/createInvoice': 'uc.t2.invoice',
    '/userindex/invoiceDetail': 'uc.t2.invoice',
    '/userindex/invoiceList': 'uc.t2.invoice',
    '/userindex/invoiceWithHoldingTax': 'uc.t2.invoice',
    '/userindex/invoiceWithHoldingTaxDetail': 'uc.t2.invoice',
    '/userindex/invoiceWithHoldingUpload': 'uc.t2.invoice',
    '/userindex/contractCenter': 'uc.t2.contract',
    '/userindex/benefits': 'uc.t2.contract',
    '/userindex/partnerDiscount': 'uc.t2.contract',
    '/userindex/benefitSubDetail': 'uc.t2.contract',
    '/contractApplyByScenes': 'uc.t2.contract',
    '/userindex/offlineDetail': 'uc.t2.contract',
    '/userindex/hcdpDetail': 'uc.t2.contract',
    '/userindex/paperContractApply': 'uc.t2.contract',
    '/userindex/paperSubDetail': 'uc.t2.contract',
    '/userindex/contractDetail': 'uc.t2.contract',
    '/userindex/currentUsage': 'uc.t2.toperiod',
    '/userindex/retreatManagement': 'uc.t2.retreat',
    '/accountindex/accountInfo': 'uc.t2.accountview',
    '/userindex/privilege': 'uc.t2.privilege',
    '/accountindex/privilege': 'uc.t2.privilege',
    '/accountindex/myprize': 'uc.t2.privilege',
    '/userindex/contactsManager': 'uc.t2.contactview',
    '/accountindex/contactsManager': 'uc.t2.contactview',
    '/userindex/customerfeedback': 'uc.t2.feedback',
    '/supportindex/customerfeedback': 'uc.t2.feedback',
    '/userindex/betaManagement': 'uc.t2.beta',
    '/supportindex/betaManagement': 'uc.t2.beta',
    '/userindex/recommendmanagement': 'uc.t2.cps',
    '/accountindex/recommendmanagement': 'uc.t2.cps',
    '/accountindex/recommendedCustomer': 'uc.t2.cps',
    '/accountindex/recommendDetail': 'uc.t2.cps',
    '/accountindex/recommendedRebate': 'uc.t2.cps',
    '/accountindex/exportTask': 'uc.t2.cps',
    '/accountindex/bussinfoCertification': 'uc.t2.cps',
    '/accountindex/promotionTool': 'uc.t2.cps',
    '/accountindex/effectiveOrders': 'uc.t2.cps',
    '/accountindex/recommendQuit': 'uc.t2.cps',
    '/accountindex/generalView': 'uc.t2.cps',
    '/accountindex/rewardBills': 'uc.t2.cps',
    '/userindex/survey': 'uc.t2.survey',
    '/supportindex/survey': 'uc.t2.survey',
    '/userindex/tomyPartner': 'uc.t2.partner',
    '/accountindex/tomyPartner': 'uc.t2.partner',
    '/userindex/realNameAuth': 'uc.t2.realname',
    '/accountindex/realNameAuth': 'uc.t2.realname',
    '/accountindex/realNameAuthing': 'uc.t2.realname',
    '/accountindex/realNameComponent': 'uc.t2.realname',
    '/depositAmount': 'uc.t2.realname',
    '/accountindex/contactsaddmodify': 'uc.t2.contact',
    '/closeAccountCheck': 'uc.t2.account',
    '/closeAccount': 'uc.t2.account',
    '/cancelAccount': 'uc.t2.account',
    '/userindex/studentAuth': 'uc.t2.realname',
    '/accountindex/studentAuth': 'uc.t2.realname',
    '/accountindex/intlStudentAuth': 'uc.t2.realname',
    '/singleRealNameAuthing': 'uc.t2.realname',
    '/singleRealNameAuth': 'uc.t2.realname',
    '/orderPay': 'uc.t2.payorder',
    '/subaccount/invoiceCenter': 'em.t2.cinvoice',
    '/subaccount/consumeTab': 'em.t2.consumeinfo',
    '/subaccount/expenseBills': 'em.t2.consumeinfo',
    '/subaccount/allview': 'em.t2.financeinfo',
    '/modifyCredential': 'uc.t2.account',
    '/complete': 'uc.t2.account',
    '/accountindex/preferenceConfig': 'uc.t2.accountview',
    '/userindex/balanceRecharge': 'uc.t1.recharge',
    '/userindex/rechargeResult': 'uc.t1.recharge',
    '/userindex/historyBill': 'uc.t1.recharge',
    '/userindex/refundRecord': 'uc.t1.refund',
    '/userindex/refundDetail': 'uc.t1.refund',
    '/userindex/refundApplySuccess': 'uc.t1.refund',
    '/userindex/paymentBindresult': 'uc.t1.recharge',
    '/userindex/creditsList': 'uc.t1.recharge',
    '/userindex/creditsHistory': 'uc.t1.recharge',
    '/userindex/consumQuota': 'uc.t1.deal#uc.t2.deal',
    '/subaccount/invoiceDetail': 'uc.t1.invoice#uc.t2.invoice',
    '/userindex/loanDown': 'uc.t1.loandown',
    '/ipspay': 'uc.t1.payorder',
    '/userindex/claimList': 'uc.t1.recharge',
    '/userindex/authentication': 'uc.t1.loandown',
    '/userindex/authenticationDetail': 'uc.t2.loandown',
    '/userindex/loanList': 'uc.t2.loandown',
    '/userindex/loanListDetail': 'uc.t2.loandown',
    '/buyservice/storedValueCard': 'uc.t2.coupon',
    '/mobile/buyservice/storedValueCard': 'uc.t2.coupon',
    '/buyservice/grainCloud': 'uc.t2.discounts',
    '/mobile/buyservice/grainCloud': 'uc.t2.discounts',
    '/userindex/oldmypackage': 'uc.t1.freeresource#uc.t2.freeresource',
    '/userindex/mypackage': 'uc.t1.freeresource#uc.t2.freeresource',
    '/userindex/mypackageDetail': 'uc.t1.freeresource#uc.t2.freeresource',
    '/userindex/myResourcePackage': 'uc.t1.freeresource#uc.t2.freeresource',
    '/userindex/resourcePackageDetail': 'uc.t1.freeresource#uc.t2.freeresource',
    '/ordercenter/userindex/hardwareAfterSale': 'uc.t2.retreat',
    '/relationProcess': 'uc.t1.mypartner.approveCancelRelation#uc.t1.mypartner.cancelRelation'
};

NOPROMOTIONSRESOURCEID = [ 'hws.resource.type.dc.port', 'hws.resource.type.pm' ];

DEVCLOUD_PARAMARS = {
    'IS_SUPPORTED_CLOUD_INIT': isAsyncDownload = !(searchTime = accountType = ''),
    'SUPPORTED_CLOUD_INIT_REGIONS': [ 'eastchina', 'southchina', 'cn-east-2', 'cn-south-1', 'cn-north-1' ],
    'DEFAULT_REGION': 'cn-northeast-1',
    'SUPPORTED_BUYNAME': 'daliangaoxinjisuchanyefazhan',
    'pkg1': {
        'VM_NUM': 2,
        'IP_NUM': 2
    },
    'pkg2': {
        'VM_NUM': 10,
        'IP_NUM': 10
    },
    'pkg3': {
        'VM_NUM': 3,
        'IP_NUM': 1
    },
    'pkg4': {
        'VM_NUM': 6,
        'IP_NUM': 1
    },
    'pkg10_college': {
        'VM_NUM': 2,
        'IP_NUM': 2
    },
    'pkg5': {
        'VM_NUM': 5,
        'IP_NUM': 2
    },
    'pkg6': {
        'VM_NUM': 16,
        'IP_NUM': 4
    },
    'pkg7': {
        'VM_NUM': 4,
        'IP_NUM': 2
    },
    'pkg8': {
        'VM_NUM': BINDTYPE_PARTNER_UNBIND = 8,
        'IP_NUM': 2
    },
    'pkg9': {
        'VM_NUM': 15,
        'IP_NUM': 2
    }
};

devCollegeCloudFlag = {
    'PKG': '高校10人套餐'
};

DEVCLOUD_VIEWMAPS = {
    'VM': {
        'url': 'ordercenter/src/app/business/customize/views/vm.html',
        'config': [ 'images', 'host' ]
    },
    'VM_fuzhou': {
        'url': 'ordercenter/src/app/business/customize/views/vm_fuzhou.html',
        'config': [ 'images', 'host' ]
    },
    'IP': {
        'url': 'ordercenter/src/app/business/customize/views/ip.html'
    }
};

oldDevCloudCity = [];

softDevCloudFlag = {
    'PKG1': '软开云5人官网套餐包'
};

individualNoSurpportByPkgCode = [ 'sms' ];

CUSTOMERLEVEL = {
    'VP': '普通',
    'VL': '乐云',
    'VZ': '尊云',
    'V0': 'v0',
    'V1': 'v1',
    'V2': 'v2',
    'V3': 'v3',
    'V4': 'v4',
    'V5': 'v5'
};

CUSTOMERLEVELID = {
    'VP': 1,
    'VL': 5,
    'VZ': 2,
    'V0': 6,
    'V1': 7,
    'V2': 8,
    'V3': BINDTYPE_BOTH = 9,
    'V4': 10,
    'V5': 11
};

img_level = {
    'V1': '/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/V1-common.png',
    'V2': '/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/V2-le.png',
    'V3': '/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/V3-zun.png',
    'VIP': '/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/VIP.png',
    'v00': 'v00',
    'v01': 'v01',
    'v02': 'v02',
    'v03': 'v03',
    'v04': 'v04',
    'v05': 'v05'
};

FREEZEROLE = 'op_suspended';

DISABLE_IP_TYPES = [ 'union' ];

BATCHRENEWEXPORT_NUM = BATCHRENEW_NUM = 100;

PAYBYPROXY_OPERATORTYPE = {
    'CANCEL_APPLY': 1,
    'AGREE_APPLY': 2,
    'REFUSE_APPLY': 3,
    'UNBIND': 4,
    'UNBIND_APPLY': 5,
    'CANCEL_UNBIND': 6,
    'AGREE_UNBIND': 7,
    'REFUSE_UNBIND': 8
};

CAPTCH_TYPE = {
    'PAY': 1,
    'UNSUBSCRIBE': 2,
    'REFUND': 3,
    'REJUST': 4,
    'PARTNER': 5,
    'APPLY_PAY': 6,
    'CANCEL_APPLY': 7,
    'AGREE_APPLY': 8,
    'REFUSE_APPLY': 9,
    'UNBIND': 10,
    'APPLY_UNBIND': 11,
    'CANCEL_APPLY_UNBIND': 12,
    'AGREE_UNBIND': 13,
    'REFUSE_UNBIND': 14,
    'STRATEGY_BIND': 15,
    'CHANGE_STRATEGY': 16,
    'CONTACT_PAY': 17,
    'INVALIDUAL_BANKCARD_CERTIFICATION': 18,
    'MODYPHONEOREAMIL': 27,
    'EXPORT_ON_OBS': 28,
    'EXPORT_OFF_OBS': 30,
    'NAME_AUTH': 31,
    'CLOSE_ACCOUNT': 32
};

UNSUBSCRIBE_TYPE = {
    'PHONE': 22,
    'EMAIL': 22
};

RECORD_STATUS = {
    'APPLYING': 0,
    'BIND': 1,
    'APPLY_UNBIND': 2,
    'INVALID': 3
};

DISMISSONTIMEOUT = 3e3;

SCROLLTOP_TIME = orderItemsNumHaveTips = 1e3;

SENDSMSCODE_INTERVALS = 60;

IDENTIFYTYPE = {
    'IDCARD': 0,
    'BUSINESSLICENSE': 1,
    'ACCOUNTPUBLICBANK': 2,
    'PASSPORT': 3,
    'FOURELEMENTS': 4,
    'HKANDMACAUPASS': 5,
    'TAIWANPASS': 6,
    'DREVIERLICENSE': 7,
    'APPFACE': 8,
    'HKANDMACAUID': 9,
    'TAIWANID': 10,
    'FACE': 11,
    'VIDEOASR': 12,
    'BUSINESSLICENSEAUTO': 13,
    'THIRDVertify': 14,
    'VIDEO': 15,
    'ENTVIDEO': 16
};

EVS_ENCRYPTION_SUPPORT_REGIONCODE = [ 'cn-north-1', 'northchina' ];

VERSION_KEY_HK = 'hk';

VERSION_KEY_CHINA = 'v1r2';

VERSION_KEY_RUSSIA = 'hk-ru';

VERSION_KEY_JRZQ = 'v1r2-jrzq';

VERSION_KEY_HCSO = 'v1r2-hcso';

TIMEOUT_WXPAYCODE = '508064029';

NATIONAL = !(NEW_RENEWAL = !(hideResourceDetail = !(showNewConsumeDetail = isSupportWx = isShowNewBill = DEALRECORDNEW = BILLINGUSAGESWITH = !0)));

if (customiseVer === VERSION_KEY_HK || customiseVer === VERSION_KEY_RUSSIA) {
    G_currencySymbol = '$';
    G_symbol = G_currencySymbol_suffix = 'USD';
    NATIONAL = !0;
}

(BANK_ACCOUNT = {})[VERSION_KEY_CHINA] = {
    'inside': {
        'bank': '中国工商银行股份有限公司深圳华为支行',
        'name': '华为软件技术有限公司',
        'number': '4000056029100094987',
        'swiftCode': ''
    },
    'outside': {
        'bank': 'Industrial And Commercial Bank of China Huawei Municipal Branch',
        'name': 'Huawei Software Technologies Co., Ltd.',
        'number': '4000056029100094987',
        'swiftCode': 'ICBKCNBJSZN'
    }
};

BANK_ACCOUNT[VERSION_KEY_HK] = {
    'outside': {
        'bank': 'DBS BANK (HONG KONG) LIMITED',
        'name': 'Huawei Services (Hong Kong) Co., Limited',
        'number': '000527950',
        'swiftCode': 'DHBKHKHHXXX',
        'address': '18th Floor, The Center 99 Queen\'s Road Central, Hong Kong',
        'currencyUnit': 'USD'
    },
    'outside_tg': {
        'bank': 'Standard Chartered Bank (Thai) Public Company Limited',
        'name': 'Huawei Technologies (Thailand) Co., Ltd.',
        'number': '001-00877-834',
        'swiftCode': 'SCBLTHBX',
        'address': 'No. 9, G Tower Grand Rama 9, Room No. GN01-04, 34th – 39th Floor, Rama 9 Road, Huaykwang Sub-district, Huaykwang District, Bangkok Metropolis, 10310',
        'currencyUnit': 'USD'
    }
};

MYRESOURCE_ON = !0;

MYRESOURCE_RSP_SUCCESS = ENT_RSP_SUCCESS = 'CBC.0000';

DISCOUNTTYPE = {
    'PROMOTIONS': 0,
    'CONTRACT': 1,
    'BUSINESS': 2,
    'PARTNER': 3,
    'DISCOUNT_COUPON': 300,
    'NEWPTNER': 609
};

PRICEPLAN = {
    'DISCOUNT': 0,
    'APRICE': 1
};

ORDERDETAILS = [];

CARDORDERDETAILS = [];

CHARGEINFOS = [];

XDOMAINS = {
    'FCS': 2,
    'FEDERAL': 3
};

RENEW_WHITELIST = [];

site = {
    'v1r2': 'china',
    'hk': 'hongkong'
};

biStartDate = '20180208';

skiptoiamorusercenter = newAllview = NEW_ORDER_FLAG = AGENTPAY = !(isHKOnlinePayClose = !(CARDCHARGEINFOS = []));

SALESMAN = 'z00369034';

SUBSCRIPTIONSTATUS = {
    'ON': 1,
    'OFF': 2
};

FIRSTPERFECTINFO = 'CBC.7109';

newExportFlag = CHANGEPERIODFLAG = DEDUCTCHECKFLAG = DISCOUNTADAPTER = BANDWIDTHSHARE = UNSUB_FLAG = subscriptionSwitch = !(isSupportTag = !(TAGLIMIT = 10));

NEW_RELATION_FLAG_UNSUB = NEW_RELATION_FLAG = ASSOCIATION_FLAG = costAnalyseExportSwitch = !(costAnalyseSwitch = organizationPoliticsSwitch = DISCOUNTCANSELECT = !(BUSSINESSDISCOUNTTYPE = {
    'OWNDISCONT': 1,
    'INHERITMAIN': 2
}));

NO_CHECKAUTH_REGION = [ 'cn-hk1', 'ap-southeast-1', 'ap-southeast-2', 'af-south-1', 'ap-southeast-3', 'ru-northwest-2' ];

ZBJ_BEID = 8571;

ZKZD_BEID = 9776;

PATYTYPE = {
    'ROOT': USERTYPE_ENT = 1,
    'UNIT': ENTERPRISE_ORG_TOTALLEVERS = ENTERPRISE_TOTALLEVERS = SPOT_BIDDINGINSTANCE = 2,
    'PROJECT': ACCOUNT_OUT_DATE = 3
};

LIMITNUM = {
    'NAME': 15,
    'DESC': 16
};

PERMISSIONID = {
    'FINANCE': 'READ_FINANCE_INFO',
    'CONSUME': 'READ_CONSUME_BILL',
    'TAKEOVERINVOICE': 'TAKE-OVER-OPEN-INVOICE',
    'SUBSTITUTEINVOICE': 'SUBSTITUTE-OPEN-INVOICE',
    'SHARECREDIT': 'SHARE-CREDIT-TO-SUB',
    'BIZDISCOUNT': 'SHARE-BIZ-DISCOUNT-TO-SUB'
};

ERRORCHECKLIST = {
    'PRIMARY_CUSTOMER_NOT_REPEAT_INVITE': 'PRIMARY_CUSTOMER_NOT_REPEAT_INVITE',
    'NOT_EM_SUB_CUSTOMER': 'NOT_EM_SUB_CUSTOMER'
};

PERMISSIONIDSTATUS = {
    'AUTHORING': 1,
    'AUTHORIZED': 2
};

ENTPARTYSTATUS = {
    'NORMAL': 1,
    'NEWING': 2,
    'CLOSING': 3
};

ENTRELATIONSTATUS = {
    'ESTABLISHED': 1,
    'ESTABLISHING': 2,
    'RELEASING': 3,
    'RELEASED': CONTRACT_BILLING_DATE = 4
};

SUBASSOCIATIONTYPE = {
    'GROUPSAMELEGAL': 1,
    'GROUPDIFFLEAGAL': 2,
    'DIFFGROUP': 3
};

BALANCETYPE = {
    'DEBIT': 'BALANCE_TYPE_DEBIT',
    'CREDIT': 'BALANCE_TYPE_CREDIT',
    'CASH': 'COUPON'
};

TRANSTYPE = {
    'TRANS': 'TRANS',
    'RETRIEVE': 'RETRIEVE'
};

ORG_RELATION_TYPE = {
    'ORG_ORG': 1,
    'ORG_SUBACCOUNT': 2,
    'ORG_PRIACOUNT': 3
};

CLILD_PARTY_TYPE = {
    'ENTROOT': 1,
    'ENTACCOUNT': 2,
    'ENTORG': 3,
    'ENTPRIACCOUNT': 4
};

PERIODDISCOUNT = {
    'ONEYEAR': 'oneyear',
    'MONTH': 'month',
    'ONETIME': 'onetime',
    'DEMAND': 'demand'
};

noTTLList = [ '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/usercenter/views/enterpriseHome.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/usercenter/views/openRegion.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/usercenter/views/userindex.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/usercenter/views/userindexhw.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/error401.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/maintainPages.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/myAccessDeclined.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/selectTimeSection.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/timeSection.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/views/uniportalerror401.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/support/views/applyBeta.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/support/views/applySolutions.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/support/views/betaManagement.html', '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/v1r2/support/views/modifyBeta.html' ];

RETREATAMOUNT = 5e4;

ENTBSTATIONSWITCH = BINDCARD_ISCHANGECONTRY = BINDCARDSWITCH_PAYAFTER = !(DEMANDFLAG = !(NEW_RELATION = PRE_CONSUME = projectGroupBillAnalysis = entQuotaSwitch = !(USERTYPE_IND = 0)));

HKREGISTINTERVALTIME = FAILURETIME = 10;

PAYMENT_LIMIT_SERVICE = [ 'hws.service.type.card' ];

innerCustomerSortId_default = '1111';

externalCustomerSortId_default = '0';

SysCustomerSortId_default = '49';

NEWCONSUME2121 = !(F_CLOSE_ACCOUNT_DEFAULT = F_ENABLE_ENTERPRISEPROJECT_JRZQ_DEFAULT = F_G_CUSTOMER_ORG_BUDGET_DEFAULT = !(CHARGEMODEOBJ = {
    'YEAR': 19,
    'MONTH': BATCHUNSUBSCRIBE_NUM = 20,
    'DAY': 24,
    'ONCE': RELATIONACCOUNTMAXNUM = 5
}));

COUPONTYPE = {
    'BALANCE_TYPE_COUPON': PersonCustmoerApplyBankNOMode = 1,
    'BALANCE_TYPE_RCASH_COUPON': 4,
    'BALANCE_TYPE_STORED_VALUE_CARD': 'STORED'
};

obsbucket = {
    'id': 'F_G_USERCENTOR_CONSUMPTION_DATA_STORAGE',
    'value': !(OrgBughetCustomerIdList_DEFAULT = 'none')
};

ORIGINAL_RETURN_PERIOD = 11;

FULFILLMENTSTATUS = {
    'PREEFFECTIVE': 'pre-effective',
    'EFFECTIVE': 'effective',
    'EXPIRED': 'expired'
};

DATAJSON = {
    'es-us': {
        'Dec': 'Dic',
        'Nov': 'Nov',
        'Oct': 'Oct',
        'Sep': 'Sep',
        'Aug': 'Ago',
        'Jul': 'Jul',
        'Jun': 'Jun',
        'May': 'May',
        'Apr': 'Abr',
        'Mar': 'Mar',
        'Feb': 'Feb',
        'Jan': 'Ene'
    },
    'pt-br': {
        'Dec': 'Dez',
        'Nov': 'Nov',
        'Oct': 'Out',
        'Sep': 'Set',
        'Aug': 'Ago',
        'Jul': 'Jul',
        'Jun': 'Jun',
        'May': 'Mai',
        'Apr': 'Abr',
        'Mar': 'Mar',
        'Feb': 'Fev',
        'Jan': 'Jan'
    }
};

ISWORDPAY = '4345933ebd774b54b1e3d9758f37237c,555354f874174aa482cd4f3dffb74261';

define('app/business/controllers/commons', [], function() {});

commons = new (CommonFunc = function() {
    this.__ = function(str, params) {
        if ('object' == typeof params) for (var i = 0; i < params.length; i++) str = str.replace('{n}', params[i]); else 'string' == typeof params && (str = str.replace('{n}', params));
        return str;
    };
    this.discountValue = function(val, language) {
        return val = 'zh-cn' !== language ? 1..sub(parseFloat(val)).mul(100) : parseFloat(val).mul(10);
    };
    this.deepCopy = function(source) {
        var result, key, tmp, i;
        result = {};
        for (key in source) if (source[key]) if (source[key] instanceof Array) {
            tmp = [];
            for (i = 0; i < source[key].length; i++) tmp.push(this.deepCopy(source[key][i]));
            result[key] = tmp;
        } else 'object' == typeof source[key] ? result[key] = this.deepCopy(source[key]) : result[key] = source[key]; else result[key] = source[key];
        return result;
    };
    this.invoicesSort = function(a, b) {
        return a.applyTime > b.applyTime ? -1 : b.applyTime > a.applyTime ? 1 : 0;
    };
    this.getIndex = function(businessClass, businessClassMap) {
        for (var i = 0; i < businessClassMap.length; i++) if (businessClass === businessClassMap[i].label) return i;
        return 0;
    };
    this.getSelectedId = function(businessClass, businessClassMap) {
        for (var i = 0; i < businessClassMap.length; i++) if (businessClass === businessClassMap[i].label) return businessClassMap[i].id;
        return 0;
    };
    this.getSelectedIndex = function(businessClassMap) {
        for (var i = 0; i < businessClassMap.length; i++) if (!0 === businessClassMap[i].checked || 1 === businessClassMap[i].checked) return i;
        return 0;
    };
    this.getProvice = function(proviceName, AllMap) {
        var provice, i;
        for (i = 0; i < AllMap.length; i++) if (AllMap[i].label === proviceName) return provice = AllMap[i];
        return provice;
    };
    this.fMoney = function(s, n) {
        var l, t, i, il;
        n = 0 < n && n <= 20 ? n : 2;
        l = (s = String(parseFloat(String(s).replace(/[^\d\.-]/g, '')).toFixed(n))).split('.')[0].split('').reverse();
        n = s.split('.')[1];
        t = '';
        for (i = 0, il = l.length; i < il; i++) t += l[i] + ((i + 1) % 3 == 0 && i + 1 !== l.length ? ',' : '');
        return t.split('').reverse().join('') + '.' + n;
    };
    this.rMoney = function(s) {
        return parseFloat(String(s).replace(/[^\d\.-]/g, ''));
    };
    this.sortCallbackFormoney = function(arr, sortBy, order) {
        var obj = this;
        arr.sort(function(x, y) {
            return 'asc' === order ? obj.rMoney(x[sortBy]) > obj.rMoney(y[sortBy]) ? 1 : -1 : obj.rMoney(x[sortBy]) < obj.rMoney(y[sortBy]) ? 1 : -1;
        });
    };
    this.getTimes = function(data) {
        var xYear;
        xYear = (data = data ? new Date(data) : new Date()).getYear();
        return (xYear += 1900) + '-' + (xYear = (xYear = data.getMonth() + 1) < 10 ? '0' + xYear : xYear) + '-' + (xYear = (xYear = data.getDate()) < 10 ? '0' + xYear : xYear) + ' ' + (xYear = (xYear = data.getHours()) < 10 ? '0' + xYear : xYear) + ':' + (xYear = (xYear = data.getMinutes()) < 10 ? '0' + xYear : xYear) + ':' + (xYear = (xYear = data.getSeconds()) < 10 ? '0' + xYear : xYear);
    };
    this.sortCallback = function(arr, sortBy, order) {
        arr.sort(function(x, y) {
            return 'asc' === order ? x[sortBy] > y[sortBy] ? 1 : -1 : x[sortBy] < y[sortBy] ? 1 : -1;
        });
    };
    this.currencyUnitConversion = function(amount, measureId) {
        var result = 0;
        if (!amount) return amount;
        amount = parseFloat(amount);
        3 === Number(measureId) ? amount = amount.div(100) : 2 === Number(measureId) && (amount = amount.div(10));
        result = parseFloat(amount);
        return result = Math.abs(result) < 1e-4 ? 0 : result;
    };
    this.currencyUnitConversionLeftSix = function(amount, measureId) {
        var result = 0;
        if (!amount) return amount;
        amount = parseFloat(amount);
        3 === Number(measureId) ? amount = amount.div(100) : 2 === Number(measureId) && (amount = amount.div(10));
        result = parseFloat(amount);
        return result = Math.abs(result) < 1e-6 ? 0 : result;
    };
    this.usageUnitForGB = function(usage, measureId) {
        var result = 0;
        if (!usage) return usage;
        usage = parseFloat(usage);
        13 === Number(measureId) ? usage = usage.div(1024).div(1024).div(1024) : 12 === Number(measureId) ? usage = usage.div(1024).div(1024) : 11 === Number(measureId) && (usage = usage.div(1024));
        result = parseFloat(usage);
        return result = Math.abs(result) < 1e-4 ? 0 : result;
    };
    this.format_curreny = function(currencySymbol, amount) {
        return 'undefined' !== amount && null != amount ? currencySymbol + amount + G_currencySymbol_suffix : currencySymbol;
    };
    this.cloneSelectArrayObject = function(selectArr) {
        var mapArr, i, obj;
        mapArr = [];
        for (i = 0; i < selectArr.length; i++) {
            (obj = {}).id = selectArr[i].selectId || selectArr[i].id;
            obj.label = selectArr[i].label;
            mapArr.push(obj);
        }
        return mapArr;
    };
    this.checkInWhiteList = function(whiteList, serviceUrl) {
        for (var i = 0; i < whiteList.length; i++) if (0 === serviceUrl.indexOf('http://' + whiteList[i], 0) || 0 === serviceUrl.indexOf('https://' + whiteList[i], 0)) return !0;
        return !1;
    };
    this.accAdd = function(arg1, arg2) {
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (0 < c) {
            c = Math.pow(10, c);
            if (r2 < r1) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * c;
            } else {
                arg1 = Number(arg1.toString().replace('.', '')) * c;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        } else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    };
    this.accSub = function(arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(r2 <= r1 ? r1 : r2));
    };
    this.accMul = function(arg1, arg2) {
        var m;
        m = 0;
        arg1 = arg1.toString();
        arg2 = arg2.toString();
        try {
            m += arg1.split('.')[1].length;
        } catch (e) {}
        try {
            m += arg2.split('.')[1].length;
        } catch (e) {}
        return Number(arg1.replace('.', '')) * Number(arg2.replace('.', '')) / Math.pow(10, m);
    };
    this.accDiv = function(arg1, arg2) {
        var t1, t2;
        t2 = t1 = 0;
        try {
            t1 = arg1.toString().split('.')[1].length;
        } catch (e) {}
        try {
            t2 = arg2.toString().split('.')[1].length;
        } catch (e) {}
        return (Number(arg1.toString().replace('.', '')) / Number(arg2.toString().replace('.', ''))).mul(Math.pow(10, t2 - t1).toFixed(Math.abs(t2 - t1)));
    };
    this.getTimezone = function() {
        return -new Date().getTimezoneOffset() / 60;
    };
    this.getTimezoneFloat = function() {
        var data, dataString;
        return data = -1 === (dataString = String(this.getTimezone())).indexOf('.') ? dataString + '.0' : data;
    };
    this.decodeHtml = function(s) {
        var HTML_DECODE;
        HTML_DECODE = {
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&nbsp;': ' ',
            '&quot;': '"',
            '&copy;': ''
        };
        return 'string' != typeof (s = null != s ? s : '') ? s : s.replace(/&\w+;|&#(\d+);/g, function($0, $1) {
            var c = HTML_DECODE[$0];
            return c = null == c ? isNaN($1) ? $0 : String.fromCharCode(160 === $1 ? 32 : $1) : c;
        });
    };
    this.findElem = function(arrayToSearch, attr, val) {
        for (var i = 0; i < arrayToSearch.length; i++) if (arrayToSearch[i][attr] === val) return i;
        return -1;
    };
    this.getLastDay = function(year, month) {
        year = new Date(year, month, 1);
        return new Date(year.getTime() - 864e5).getDate();
    };
    this.formatDate = function(date) {
        var month0;
        return [ (date = date || new Date()).getFullYear(), month0 = (month0 = date.getMonth() + 1) < 10 ? '0' + month0 : month0, month0 = (month0 = date.getDate()) < 10 ? '0' + month0 : month0 ].join('-');
    };
    this.getMonInMM = function(mon) {
        return mon < 10 ? '0' + mon : mon;
    };
    this.preMonth = function(n, separator) {
        var nowYearPre, datePre, preMonth, nyear;
        nowYearPre = (datePre = new Date()).getFullYear();
        datePre = datePre.getMonth() + 1;
        preMonth = 0;
        0;
        nyear = Math.floor(n / 12);
        datePre <= (n = n % 12) && nyear++;
        preMonth = n <= datePre - 1 ? datePre - n : 12 - (n - (datePre - 1)) + 1;
        return separator ? nowYearPre - nyear + separator + this.getMonInMM(preMonth) : String(nowYearPre - nyear) + this.getMonInMM(preMonth);
    };
    this.preMonthNumber = function(dateFrom) {
        var monthNum, nowYearPre, datePre, dateYearFrom;
        monthNum = 0;
        if (7 === dateFrom.length) {
            nowYearPre = (datePre = new Date()).getFullYear();
            datePre = datePre.getMonth() + 1;
            dateYearFrom = dateFrom.substr(0, 4);
            dateFrom = dateFrom.substr(5, 2);
            monthNum = 0 < (monthNum = (nowYearPre - dateYearFrom).mul(12) + (datePre - dateFrom) + 1) ? monthNum : 12;
        } else monthNum = 12;
        return monthNum;
    };
    this.moneyChange = function(num) {
        var strOutput, strUnit, intPos, i;
        strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
        0 <= (intPos = (num = (num += '00').replace(',', strOutput = '')).indexOf('.')) && (num = num.substring(0, intPos) + num.substr(intPos + 1, 2));
        strUnit = strUnit.substr(strUnit.length - num.length);
        for (i = 0; i < num.length; i++) strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
        return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元');
    };
    this.uploadAlarm = function(domainId, reason, value) {};
    var subRegRex = /\${\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;
    this.specReplace = function(s, o) {
        return s.replace ? s.replace(subRegRex, function(match, key) {
            return angular.isUndefined(o[key]) ? match : o[key];
        }) : s;
    };
    this.checkPermission = function(permissionCode, permissionList) {
        var noRight, permissionCodes, type, i, length;
        noRight = !1;
        permissionCodes = [];
        0;
        0;
        if ((length = i = type = 0) < permissionCode.indexOf('&')) {
            length = (permissionCodes = permissionCode.split('&')).length;
            type = 1;
        } else if (0 < permissionCode.indexOf('#')) {
            length = (permissionCodes = permissionCode.split('#')).length;
            type = 2;
        }
        if (0 === type) noRight = $.inArray(permissionCode, permissionList) < 0; else if (1 === type) {
            for (;i < length; i++) if ($.inArray(permissionCodes[i], permissionList) < 0) {
                noRight = !0;
                break;
            }
        } else if (2 === type) {
            for (;i < length && !(0 <= $.inArray(permissionCodes[i], permissionList)); i++);
            length <= i && (noRight = !0);
        }
        return noRight;
    };
    this.calculateExactPercent = function(numList, totalNum, type) {
        var score, percent, i, totalLeft;
        score = 100;
        i = 0;
        if (!totalNum) for (i = totalNum = 0; i < numList.length; i++) {
            'unSub' === type && numList[i].numberForCalculate < 0 && (numList[i].numberForCalculate = 0);
            totalNum = totalNum.add(numList[i].numberForCalculate);
        }
        totalLeft = totalNum;
        for (i = 0; i < numList.length; i++) if (0 < totalNum) {
            if (totalLeft) {
                percent = Math.round(numList[i].numberForCalculate.mul(100).mul(score).div(totalLeft)).div(100);
                totalLeft = totalLeft.sub(numList[i].numberForCalculate);
                score = score.sub(percent);
            } else percent = 0;
            numList[i].percentNumber = percent;
            numList[i].percent = percent.toFixed(2) + '%';
        } else {
            numList[i].percentNumber = 0;
            numList[i].percent = '--';
        }
        return numList;
    };
    this.formatDatesForSL = function(str, language) {
        var tempStr1;
        tempStr1 = str.substr(0, 3);
        str = str.substr(3, str.length - 3);
        return DATAJSON[language][tempStr1] + str;
    };
    this.Base64 = new function() {
        var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        this.encode = function(input) {
            var result, charactor1, charactor3, binary1, binary2, binary3, binary4, i;
            result = '';
            i = 0;
            input = function(str) {
                var utfResult, n, char;
                str = str.replace(/\r\n/g, '\n');
                utfResult = '';
                for (n = 0; n < str.length; n++) (char = str.charCodeAt(n)) < 128 ? utfResult += String.fromCharCode(char) : utfResult = 127 < char && char < 2048 ? (utfResult += String.fromCharCode(char >> 6 | 192)) + String.fromCharCode(63 & char | 128) : (utfResult = (utfResult += String.fromCharCode(char >> 12 | 224)) + String.fromCharCode(char >> 6 & 63 | 128)) + String.fromCharCode(63 & char | 128);
                return utfResult;
            }(input);
            for (;i < input.length; ) {
                binary1 = (charactor1 = input.charCodeAt(i++)) >> 2;
                binary2 = (3 & charactor1) << 4 | (charactor1 = input.charCodeAt(i++)) >> 4;
                binary3 = (15 & charactor1) << 2 | (charactor3 = input.charCodeAt(i++)) >> 6;
                binary4 = 63 & charactor3;
                isNaN(charactor1) ? binary3 = binary4 = 64 : isNaN(charactor3) && (binary4 = 64);
                result = result + _keyStr.charAt(binary1) + _keyStr.charAt(binary2) + _keyStr.charAt(binary3) + _keyStr.charAt(binary4);
            }
            return result;
        };
        this.decode = function(input) {
            var result, a2, a3, binary1, binary2, binary3, binary4, i;
            i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, result = '');
            for (;i < input.length; ) {
                binary1 = _keyStr.indexOf(input.charAt(i++));
                a2 = (15 & (binary2 = _keyStr.indexOf(input.charAt(i++)))) << 4 | (binary3 = _keyStr.indexOf(input.charAt(i++))) >> 2;
                a3 = (3 & binary3) << 6 | (binary4 = _keyStr.indexOf(input.charAt(i++)));
                result += String.fromCharCode(binary1 << 2 | binary2 >> 4);
                64 !== binary3 && (result += String.fromCharCode(a2));
                64 !== binary4 && (result += String.fromCharCode(a3));
            }
            return result = function(utftext) {
                var string, i, charactor, charactor2, charactor3;
                string = '';
                charactor2 = i = 0;
                for (;i < utftext.length; ) if ((charactor = utftext.charCodeAt(i)) < 128) {
                    string += String.fromCharCode(charactor);
                    i++;
                } else if (191 < charactor && charactor < 224) {
                    charactor2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode((31 & charactor) << 6 | 63 & charactor2);
                    i += 2;
                } else {
                    charactor2 = utftext.charCodeAt(i + 1);
                    charactor3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode((15 & charactor) << 12 | (63 & charactor2) << 6 | 63 & charactor3);
                    i += 3;
                }
                return string;
            }(result);
        };
    }();
})();

__ = function(str, params) {
    if ('object' == typeof params) for (var i = 0; i < params.length; i++) str = str.replace('{n}', params[i]); else 'string' == typeof params && (str = str.replace('{n}', params));
    return str;
};

function format_curreny(currencySymbol, amount) {
    var tmp_suffix = '';
    G_currencySymbol_suffix && (tmp_suffix = ' ' + G_currencySymbol_suffix);
    if (null != amount && 'undefined' !== amount) {
        if ('-' === amount[0] && '-' !== amount[1]) return '-' + currencySymbol + String(amount).substr(1) + tmp_suffix;
        return currencySymbol + amount + tmp_suffix;
    }
    return currencySymbol;
}

Array.prototype.remove = function(dx) {
    if (isNaN(dx) || dx > this.length) return;
    this.splice(dx, 1);
};

Array.prototype.uniqueByKey = function(key) {
    var n, r, len, val, i;
    n = {};
    r = [];
    len = this.length;
    for (i = 0; i < len; i++) if (!n[val = this[i][key]]) {
        n[val] = !0;
        r.push(this[i]);
    }
    return r;
};

Date.prototype.format = function(format) {
    var o, k;
    o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    };
    /(y+)/.test(format) && (format = format.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length)));
    for (k in o) new RegExp('(' + k + ')').test(format) && (format = format.replace(RegExp.$1, 1 === RegExp.$1.length ? o[k] : ('00' + o[k]).substr(String(o[k]).length)));
    return format;
};

Number.prototype.add = function(arg) {
    return commons.accAdd(this, arg);
};

Number.prototype.sub = function(arg) {
    return commons.accSub(this, arg);
};

Number.prototype.minus = function(arg) {
    return commons.accSub(this, arg);
};

Number.prototype.mul = function(arg) {
    return commons.accMul(this, arg);
};

Number.prototype.div = function(arg) {
    return commons.accDiv(this, arg);
};

String.prototype.add = function(arg) {
    return commons.accAdd(this, arg);
};

String.prototype.sub = function(arg) {
    return commons.accSub(this, arg);
};

String.prototype.minus = function(arg) {
    return commons.accSub(this, arg);
};

String.prototype.mul = function(arg) {
    return commons.accMul(this, arg);
};

String.prototype.div = function(arg) {
    return commons.accDiv(this, arg);
};

function getPreMonth(N, separator) {
    var arrayMonth, i;
    arrayMonth = [];
    for (i = 0; i < N; i++) arrayMonth[N - 1 - i] = commons.preMonth(i, separator);
    return arrayMonth;
}

function getCurrentTime() {
    var date, month;
    return (date = new Date()).getFullYear() + '-' + (month = (month = date.getMonth() + 1) < 10 ? '0' + month : month) + '-' + (month = (month = date.getDate()) < 10 ? '0' + month : month) + ' ' + (month = (month = date.getHours()) < 10 ? '0' + month : month) + ':' + (month = (month = date.getMinutes()) < 10 ? '0' + month : month) + ':' + (month = (month = date.getSeconds()) < 10 ? '0' + month : month);
}

function uniqueHandle(originalArr) {
    var arr, i;
    arr = [];
    for (i = 0; i < originalArr.length; i++) -1 === arr.indexOf(originalArr[i]) && arr.push(originalArr[i]);
    return arr;
}

define('app/business/mobile/configures/commParams', [], function() {});

window.ORDER_PACK_TYPE = 'GRUNT';

window.RSP_CBC_SUCCESS = 'CBC.0000';

window.COMMENT_IFRAME_MESSAGE_TYPE = {
    'PIC_PREVIEW': 'PIC_PREVIEW',
    'HEIGHT_SETTING': 'HEIGHT_SETTING'
};

window.RETCODE_SUCCESS = '0';

window.RETCODE_SUCCESS_INT = 0;

window.RETCODE_SUCCESS_STR = 'CBC.0000';

window.ORDER_PAYWAY = {
    'PARTNER_PAY': 100,
    'BALANCE_PAY': 1,
    'ONLINE_PAY': 2,
    'MONTH_PAY': 4
};

window.PATH_SOURCE = {
    'EXPENSE': 'expense',
    'PROJECT_CONSUME': 'projectConsume'
};

window.SalerTypeEnum = {
    'SYSADMIN': 0,
    'RESELLER': 3,
    'ACCOUNT_MANAGER': 1,
    'OPERATION_MANAGER': 4
};

window.selectorderId = null;

window.timeFrom = 0;

window.timeTo = 0;

window.myOrderStatus = {};

window.myRenewalStatus = {};

window.ORDERSTATUS_INIT = 0;

window.ORDERSTATUS_WAITINGAUDIT = 1;

window.ORDERSTATUS_WAITINGREFOUNDING = 2;

window.ORDERSTATUS_OPENING = 3;

window.ORDERSTATUS_ABORTED = 4;

window.ORDERSTATUS_COMPLETED = 5;

window.ORDERSTATUS_WAITINGPAYMENT = 6;

window.ORDERSTATUS_COMPENSATING = 7;

window.ORDERSTATUS_WAITINGAPPROVAL = 8;

window.ORDERSTATUS_WAITINGRENEW = 11;

window.ORDERSTATUS_WAITINGCONFIRM = 9;

window.ORDERTYPE_ORDER = 1;

window.ORDERTYPE_CHANGE = 3;

window.ORDERTYPE_RENEW = 2;

window.ORDERTYPE_UNSUBSCRIBR = 4;

window.ORDERTYPE_CYCLETOONDEMAND = 10;

window.ORDERTYPE_ONDEMANDTOCYCLET = 11;

window.ORDERTYPE_REVERSE_ADJUSTMENT = 15;

window.ORDERTYPE_RETURN = 16;

window.ORDERTYPE_EXCHANGE = 17;

window.ORDERTYPE_REFUND = 18;

window.BOX_RETREAT_REASON_OTHERS = 0;

window.BOX_RETREAT_REASON_QUALITY = 20;

window.BOX_RETREAT_REASON_DELIVERY = 21;

window.BOX_RETREAT_REASON_SHIPMENT_FAIL = 30;

window.BOX_RETREAT_REASON_USER_REJECT = 31;

window.BOX_RETREAT_REASON_USER_CANCEL = 32;

window.BOX_RETREAT_REASON_SEND_GOOD_FAILED = 44;

window.BOX_RETREAT_REASON_REJECT_GOODS1 = 41;

window.BOX_RETREAT_REASON_REJECT_GOODS2 = 43;

window.RESOURCE_DIMENSION = 2;

window.ORDER_DIMENSION = 1;

window.BUNDLE_DIMENSION = 3;

window.RESERVEINSTANCE_DIMENSION = 4;

window.ADD_AFFILIATE = 102;

window.CANNOTOPERATEREASON = 'CanNotOperateReason.IN_PROCESS';

window.NOT_SHOW = 0;

window.SHOW = 1;

window.GREY = 1;

window.CLICK = 2;

window.NEW_BUSINESS = 1;

window.PRODUCT_FAMILY_ENUM = {
    'HWS_COMMON': 1,
    'MKT_SELECTED': 2,
    'MKT_COMMON': 3,
    'MKT_SOLUTION': 4,
    'HWS_HARDWARE': 5,
    'MKT_OWNED': 6,
    'HWS_SOFT_WARE': 7
};

window.ORDER_PRODUCT_FAMILY = {
    'HWS_CLOUD_SERVICE': 0,
    'HWS_HARDWARE': 1,
    'MKT_HARDWARE': 2,
    'HWS_RESERVE_INTANCE': 3,
    'SELF_MARKETPLACE_PRODUCT1': 6,
    'SELF_MARKETPLACE_PRODUCT2': 8,
    'SELF_MARKETPLACE_PRODUCT3': 9,
    'HWS_COMPOSITION_HARDWARE': 90
};

window.ORDER_HARD_WARE_FAMILIES = [ ORDER_PRODUCT_FAMILY.HWS_HARDWARE, ORDER_PRODUCT_FAMILY.HWS_COMPOSITION_HARDWARE, ORDER_PRODUCT_FAMILY.MKT_HARDWARE ];

window.SELF_MARKETPLACE_PRODUCT_FAMILYS = [ ORDER_PRODUCT_FAMILY.SELF_MARKETPLACE_PRODUCT1, ORDER_PRODUCT_FAMILY.SELF_MARKETPLACE_PRODUCT2, ORDER_PRODUCT_FAMILY.SELF_MARKETPLACE_PRODUCT3 ];

window.ORDER_SOURCE_TYPE = {
    'CUSTOMER': 1,
    'AGENT': 2,
    'CONTRACT': 3,
    'DISTRIBUTE': 4,
    'DELETE': 5,
    'MAKEUP': 6,
    'COMPENSATION': 7
};

window.ORDER_OP_TYPE = {
    'DETAIL': 1,
    'CANCEL_DETAIL': 2,
    'PAY_CANCEL_DETAIL': 3,
    'WITHDRAW_CANCEL_DETAIL': 4,
    'NO_WITHDRAW_CANCEL_DETAIL': 5
};

window.LOAN_STATUS = {
    'DOWN_PAYMENT_UNPAID': 'DOWN_PAYMENT_UNPAID',
    'DOWN_PAYMENT_PAID': 'DOWN_PAYMENT_PAID',
    'APPLY_SUCCESS': 'APPLY_SUCCESS',
    'APPLY_FAIL': 'APPLY_FAIL',
    'BALANCE_PAYMENT_PAID': 'BALANCE_PAYMENT_PAID',
    'DOWN_PAYMENT_PAID_UNSUB': 'DOWN_PAYMENT_PAID_UNSUB',
    'BALANCE_PAYMENT_PAID_UNSUB': 'BALANCE_PAYMENT_PAID_UNSUB',
    'APPLY_LOAN_FAIL_CANCEL': 'APPLY_LOAN_FAIL_CANCEL',
    'SCAN_AUTO_CANCEL': 'SCAN_AUTO_CANCEL',
    'MANUAL_CANCEL': 'MANUAL_CANCEL'
};

window.EXPIRE_MODE = {
    'MANUAL_RENEWALS': 0,
    'TO_PAY_PER_USER': 1,
    'AUTO_RENEWALS': 3,
    'RENEWAL_CANCELED': 4
};

window.SEARCH_BOX_ID = {
    'NAME': 1,
    'ORDER': 2,
    'ID': 3
};

window.LOAN_NOT_REPAID = '0';

window.BATCH_TO_DEMOND_NUM = 1;

window.O_CHANGEPERIODTYPE = 0;

window.O_CHANGESPEC = 1;

window.O_RENEW = 2;

window.O_UNSUBSCRIBE = 5;

window.POLICY_ONEOFFCHARGE = 1;

window.POLICY_CYCLECHARGE = 2;

window.POLICY_USAGECHARGE = 3;

window.POLICY_DISCOUNT_RATE = 4;

window.POLICY_DISCOUNT_CHARGE = 5;

window.POLICY_DISCOUNT_RECURRING = 6;

window.POLICY_RATING_BONUS = 7;

window.POLICY_PENALTY = 8;

window.PERIODTYPE_ONDEMAND = 6;

window.NEW_PERIODTYPE_ONYEAR = 19;

window.NEW_PERIODTYPE_ONMONTH = 20;

window.NEW_PERIODTYPE_ONDAY = 24;

window.NEW_PERIODTYPE_ONHOUR = 25;

window.PERIODTYPE_ONYEAR = 3;

window.PERIODTYPE_ONMONTH = 2;

window.PERIODTYPE_ONWEEK = 1;

window.PERIODTYPE_ONDAY = 0;

window.PRICE_ONHOUR = 4;

window.PERIODTYPE_ONEOFFCHARGE = 5;

window.CYCLE_TYPE_ONYEAR = 1;

window.SUBSCRIPTIONSTATUS_NOTINFORCE = 1;

window.SUBSCRIPTIONSTATUS_INFORCE = 2;

window.SUBSCRIPTIONSTATUS_EXPIRED = 3;

window.SUBSCRIPTIONSTATUS_FREEZE = 4;

window.SUBSCRIPTIONSTATUS_WAITINGRENEW = 5;

window.SUBSCRIPTIONSTATUS_FREEZING = 6;

window.SUBSCRIPTIONSTATUS_UNFREEZING = 7;

window.SUBSCRIPTIONSTATUS_CLOSING = 8;

window.PRODUCT_TYPE_BUNDLE = 2;

window.RESOURCE_EXPIREMODE_KEEPAUTOUNSUBSCRIBE = 0;

window.RESOURCE_EXPIREMODE_TOONDEMAND = 1;

window.RESOURCE_EXPIREMODE_AUTOUNSUBSCRIBE = 2;

window.RESOURCE_EXPIREMODE_AUTORENEW = 3;

window.ORDER_PART_OPERATION_FLAG = !1;

window.G_ClOUDSERVICETYPE = [ 6, 12, 1, 15, 4, 5, 14, 7, 8, 100, 2, 3, 10, 17, 16, 11, 18, 13, 19, -99, 'hws.service.type.ec2', 'hws.service.type.vpc', 'hws.service.type.eip', 'hws.service.type.bandwidth', 'hws.service.type.vdi', 'hws.service.type.rds', 'hws.service.type.elb', 'hws.service.type.ebs', 'hws.service.type.obs', 'hws.service.type.dec', 'hws.service.type.image', 'hws.service.type.marketplace', 'hws.service.type.vbs', 'hws.service.type.eae', 'hws.service.type.bigdata', 'hws.service.type.devcloud', 'hws.service.type.ecpc', 'hws.service.type.redis', 'hws.service.type.des', 'hws.service.type.streaming', 'hws.service.type.mls', 'hws.service.type.baremetal', 'hws.service.type.kms', 'hws.service.type.smn', 'hws.service.type.olap', 'hws.service.type.dis', 'hws.service.type.dta', 'hws.service.type.dps', 'hws.service.deduct.precision', 'hws.service.type.dms', 'hws.service.type.dcs', 'hws.service.type.offline', 'hws.service.type.saas', 'hws.service.type.sfs', 'hws.service.type.scs', 'hws.service.type.cloudvc', 'hws.service.type.costmanager', 'hws.service.type.visual', 'hws.service.type.cdn', 'hws.service.type.workspace', 'hws.service.type.hcna', 'hws.service.type.hcnp', 'hws.service.type.csbs', 'hws.service.type.servicestage', 'hws.service.type.cad', 'hws.service.type.cloudecpstn', 'hws.service.type.dess', 'hws.service.type.cs', 'hws.service.type.dws', 'hws.service.type.cloudvoice', 'hws.service.type.cloudipcc', 'hws.service.type.sas', 'hws.service.type.uquery', 'hws.service.type.dss', 'hws.service.type.drs', 'hws.service.type.ddm', 'hws.service.type.hss', 'hws.service.type.domains', 'hws.service.type.apm', 'hws.service.type.rtcsms', 'hws.service.type.privatenumber', 'hws.service.type.aos', 'hws.service.type.swr', 'hws.service.type.natgateway', 'hws.service.type.cse', 'hws.service.type.cpts', 'hws.service.type.dbss', 'hws.service.type.dds', 'hws.service.type.functionstage', 'hws.service.type.dls', 'hws.service.type.cci', 'hws.service.type.ges', 'hws.service.type.webscan', 'hws.service.type.irs', 'hws.service.type.waf', 'hws.service.type.ims' ];

window.G_ClOUDRESOURCETYPE = [ 'hws.resource.type.vm', 'hws.resource.type.volume', 'hws.resource.type.image', 'hws.resource.type.ip', 'hws.resource.type.bandwidth', 'hws.resource.type.vbs', 'hws.resource.type.vpnconnection', 'hws.resource.type.elb', 'hws.resource.type.rds.vm', 'hws.resource.type.rds.volume', 'hws.resource.type.vdi.campus', 'hws.resource.type.dev.projectman', 'hws.resource.type.ecpc', 'hws.resource.type.redis', 'hws.resource.type.marketplace', 'hws.resource.type.bw', 'hws.resource.type.dev.codeci', 'hws.resource.type.vdi.mgr', 'hws.resource.type.dev.codehub', 'hws.resource.type.database', 'hws.resource.type.vdi.bundle', 'hws.resource.type.des', 'hws.resource.type.mls', 'hws.resource.type.pm', 'hws.resource.type.cmk', 'hws.resource.type.olap', 'hws.resource.type.dis', 'hws.resource.type.dta', 'hws.resource.type.dps', 'hws.resource.type.smn', 'hws.resource.type.addbandwidth', 'hws.resource.type.dcs', 'hws.resource.type.dms', 'hws.resource.type.container', 'hws.resource.type.dev.testman', 'hws.resource.type.devcloud', 'hws.resource.type.dev.tier', 'hws.resource.type.codecheck', 'hws.resource.type.dev.codecheck', 'hws.resource.type.dec', 'hws.resource.type.obs', 'hws.resource.type.vpc', 'hws.resource.type.rds', 'hws.resource.type.bigdata', 'hws.resource.type.extended.disk', 'hws.resource.type.dev.releaseman', 'hws.resource.type.rds.obs', 'hws.resource.type.dc.install', 'hws.resource.type.dc.port', 'hws.resource.type.dc.bandwidth', 'hws.resource.type.rds.bandwidth', 'hws.resource.type.rds.ip', 'hws.resource.type.streaming', 'hws.resource.type.inforsight', 'hws.resource.type.bandwidth.fixed.r2', 'hws.resource.type.bandwidth.flow.r2', 'hws.resource.type.bandwidth.elastic.r2', 'hws.resource.type.obs.r2', 'hws.resource.type.general', 'hws.resource.type.devcloudpackage', 'hws.resource.type.saas', 'hws.resource.type.scs', 'hws.resource.type.rds.license', 'hws.resource.type.videohd', 'hws.resource.type.kms', 'hws.resource.type.dms.api', 'hws.resource.type.dms.queue', 'hws.resource.type.sfs', 'hws.resource.type.dcs.obs', 'hws.resource.type.cdn', 'hws.resource.type.dec.storage', 'hws.resource.type.visual', '1', '3', '5', '15', '19', '21', '37', '28', '101', '36', '32', '2', '18', '12', '29', '22', '35', '39', '53', '1000', '4', '6', '7', '8', '9', '10', '11', '13', '14', '16', '17', '20', '23', '24', '26', '27', '30', '31', '34', '40', '41', '42', '52', '54', '301', '302', '303', '304', '305', '306', '307', '1001', '1002', '1003', '9999', 'hws.resource.type.workspace.base', 'hws.resource.type.workspace.vm', 'hws.resource.type.workspace.volume', 'hws.resource.type.workspace.deh', 'hws.resource.type.dev.package', 'hws.resource.type.csbs', 'hws.resource.type.servicestage', 'hws.resource.type.dess', 'hws.resource.type.dc.setup', 'hws.resource.type.spu', 'hws.resource.type.dws.vm', 'hws.resource.type.dws.obs', 'hws.resource.type.rtc.voicecall', 'hws.resource.type.cc.agent', 'hws.resource.type.cc.outgoing', 'hws.resource.type.cc.incominglocal', 'hws.resource.type.cc.incoming400', 'hws.resource.type.cc.incoming95', 'hws.resource.type.dev.mobiletest', 'hws.resource.type.sas', 'hws.resource.type.uquery.storage', 'hws.resource.type.uquery.scan', 'hws.resource.type.uquery.queue', 'hws.resource.type.uquery.internaltable', 'hws.resource.type.dss.pool', 'hws.resource.type.drs.vm', 'hws.resource.type.drs.volume', 'hws.resource.type.ddm', 'hws.resource.type.hss', 'hws.resource.type.resgister', 'hws.resource.type.redeem', 'hws.resource.type.apm.instance', 'hws.resource.type.rtcsms', 'hws.resource.type.rtc.privatenumber', 'hws.resource.type.aos', 'hws.resource.type.swr.store', 'hws.resource.type.swr.downflow', 'hws.resource.type.natgateway', 'hws.resource.type.dcs.memcached', 'hws.resource.type.cse', 'hws.resource.type.cpts', 'hws.resource.type.dcs.imdg', 'hws.resource.type.dbss', 'hws.resource.type.dds.vm', 'hws.resource.type.dds.volume', 'hws.resource.type.dds.obs', 'hws.resource.type.functionstage', 'hws.resource.type.dls.vm', 'hws.resource.type.dls.notebook', 'hws.resource.type.container.instance', 'hws.resource.type.ges', 'hws.resource.type.webscan', 'hws.resource.type.smn.global', 'hws.resource.type.irs.api', 'hws.resource.type.dls.vm', 'hws.resource.type.waf', 'hws.resource.type.cad.servicebandwidth', 'hws.resource.type.ims', 'hws.resource.type.vdi.base', 'hws.resource.type.vdi.vm', 'hws.resource.type.vdi.volume', 'hws.resource.type.vdi.deh', 'hws.resource.type.dcs2' ];

window.G_SHOW_SPECCODE = [ 'core', 'storageLevel', 'linkType', 'maxRequestRates', 'maxConnectsNum', 'imageSize', 'bitNumber', 'baseUdsStorage', 'baseUdsflow', 'dbType', 'image', 'cpu_cores', 'mem', 'dbMaxConnects', 'cpu', 'memory_mb', 'EIPType', 'type', 'adapterType', 'maxRequestPort', 'maxRelationVM', 'hardwareParam', 'baseUdsMeter', 'dbVersion', 'maxDbNum', 'maxAccount', 'maxConnect', 'loc', 'duration', 'appName', 'quality', 'repoCount', 'repoSize', 'velocityLevel', 'user', 'deviceModule', 'radinfo', 'vendor', 'Imageformat', 'volumeType', 'DEC_STORAGE_TYPE', 'DEC_STORAGE_CAPACITY', 'dssType', 'typeWAF', 'verison', 'instances' ];

window.RESOURCE_MAPS = {
    'hws.resource.type.vm': '1',
    'hws.resource.type.volume': '3',
    'hws.resource.type.obs': '4',
    'hws.resource.type.ip': '5',
    'hws.resource.type.vm2': '7',
    'hws.resource.type.image': '15'
};

window.AUTO_RENEW_TYPE = {
    'SET': 0,
    'MODIFY': 1,
    'CLOSE': 2,
    'MIX': 3
};

window.RELETIVE_TYPE = {
    'ATTACH': 0,
    'BIND': 1,
    'CASCADING': 2,
    'SUB_RESOURCE': 3
};

window.PERIOD_TYPE_CONVERT = {
    'MONTH': {
        'NAME': 'mouth',
        'NEW_PERIODTYPE': window.NEW_PERIODTYPE_ONMONTH,
        'PERIOD_TYPE': window.PERIODTYPE_ONMONTH
    },
    'YEAR': {
        'NAME': 'year',
        'NEW_PERIODTYPE': window.NEW_PERIODTYPE_ONYEAR,
        'PERIOD_TYPE': window.PERIODTYPE_ONYEAR
    }
};

window.CHANGEPERIODTYPE = 1;

window.CHANGETOOfFFICIAL = 2;

window.MAINSUBSCRIPTION_RESOURCES = [ 'hws.resource.type.vm', 'hws.resource.type.ip' ];

window.SUPPORT_AUTORENEWAL_SERVICETYPES = [ 'hws.service.type.ec2', 'hws.service.type.ebs' ];

window.SUPPORT_AUTORENEWAL_RESOURCETYPES = [ 'hws.resource.type.iotdmp', 'hws.resource.type.cbh', 'hws.resource.type.cen', 'hws.resource.type.dcs', 'hws.resource.type.rds.vm', 'hws.resource.type.rds.volume', 'hws.resource.type.rds.obs', 'hws.resource.type.rds.ip', 'hws.resource.type.rds.bandwidth', 'hws.resource.type.dc.port', 'hws.resource.type.waf', 'hws.resource.type.dc.port', 'hws.resource.type.pm', 'hws.resource.type.vm', 'hws.resource.type.volume', 'hws.resource.type.ip', 'hws.resource.type.bandwidth' ];

window.SUPPORT_CUSTOM_TIME_PACKAGES = [ 'hws.service.type.ief', 'hws.service.type.obs', 'hws.service.type.vbs', 'hws.service.type.csbs' ];

window.regionArrayCache = {};

window.regionSelection = [];

window.PRODUCTMODE_PACKAGE = 1;

window.PRODUCTMODE_NO_PACKAGE = 0;

window.SUBJECT_AS_BACK_BTN_SERVICES = [ 'hws.service.type.ec2' ];

window.LOCAL_KEY_PREFIX = {
    'SERVICE_PAY_SUBJECT': 'service|pay|subject|',
    'SERVICE_PAY_SERVICE': 'service|'
};

window.INITIAL = '10';

window.WAITING_DELIVER = '20';

window.CANCELLING_DELIVER = '21';

window.CANCELLING_DELIVER_SUCCESS = '45';

window.IN_DELIVERY = '30';

window.LOG_LEVEL = 'info';

window.LOG_LEVELS = [ 'fatal', 'error', 'warning', 'info', 'debug' ];

window.MAX_RECORDED_LENGTH = 2e5;

window.NEED_TRACEID_ERROR_CODES = [ '403', '500', '5005', '5006', '5080105', '50806010', '101000003', '111112075', '111118434', '208070312', '208070425', '508010506', '508010509', '508030103', '508030104', '508030108', '508030109', '508030110', '508030111', '508030112', '508030115', '508030119', '508030120', '508030121', '508030123', '508030132', '508030150', '508030160', '508030161', '508030162', '508030163', '508030164', '508030170', '508030180', '508030198', '508030199', '508030200', '508030201', '508030202', '508030203', '508030213', '508030221', '508030300', '508030301', '508030302', '508030303', '508030400', '508030401', '508030402', '508030403', '508030405', '508030406', '508030407', '508030409', '508030410', '508030411', '508030412', '508030413', '508030414', '508030415', '508030416', '508030417', '508030445', '508030446', '508030500', '508030501', '508030502', '508030503', '508030504', '508030507', '508030514', '508030515', '508030516', '508030517', '508040181', '508040808', '508040833', '508040834', '508040835', '508040862', '508040876', '508040884', '508040900', '508050201', '508060100', '508060103', '508060104', '508060108', '508060110', '508060300', '508060301', '508060302', '508064029', '508070210', '508070211', '508070216', '508070217', '508070218', '5080204001', '5080204006', '5080204012', '!0', 'CBC.0100', 'CBC.0300', 'CBC.0999', 'CBC.3109', 'CBC.3113', 'CBC.3115', 'CBC.3117', 'CBC.8002', 'CBC.8221', 'CODE_CBC.0999', 'apply_CBC.0999', 'errDefalutNotice', 'modifycontract_CBC.0999', 'network_error', 'phone_111111001', 'phone_111113009', 'common_err_operate', 'common_err_query', 'common_err_query_part', '508030480', '508030463', '508030462', 'CBC.3180', '508030148', '508090601', '508060115', 'CBC.7262', '111118409', '111118422', '508060409', '508060410', '508060411', '508060423', '508060424', '508060425', '508060432', '508060434', '508060451', '508060453', '508060454', '508110510', '2030000000005', 'CODE_CBC.4002', 'CODE_CBC.4003', 'errorMsgNoCode', 'invoice.111118401', 'invoice.111118422', 'invoice.508060424', 'invoice.508060434', 'modifycontract_CBC.0102', 'modifycontract_CBC.0200', 'modifycontract_CBC.0300' ];

window.REG = /^[a-zA-Z0-9-]+$/;

window.ORDER_ITEM_CACELLED = 4;

window.ORDER_ITEMTYPE_REDUCE = 302;

window.ORDER_SERVICE_NAME_MAX_LENGTH = 64;

commOrderCommonConfigDRM = {};

try {
    commOrderCommonConfigDRM = JSON.parse(window.systemConfig.orderCommonConfigDRM);
} catch (e) {}

window.ORDER_TOP_LEVEL_DOMAIN = commOrderCommonConfigDRM.ORDER_TOP_LEVEL_DOMAIN || '.com';

defaultUrlConfigs = {
    'AGC_CHARGE_LINK': 'https://developer.huawei.com/consumer/cn/console#/myaccount/mainbalance/0/mainbalance-bill/0',
    'HARDWARE_PROTOCAL_LINK': 'https://www.huaweicloud.com/declaration/sa_hsa.html',
    'error_page_backhome_link': 'https://www.huaweicloud.com/',
    'CRM_DOMAIN_URL': 'https://huaweicloud.my.salesforce.com',
    'CONTRACT_CUSTOMER_LINK': customiseVer !== VERSION_KEY_HK ? 'https://console.huaweicloud.com/smartadvisor/' : 'https://console-intl.huaweicloud.com/smartadvisor/',
    'BANNER_SCRIPT_LINK_en_us': 'https://res.hc-cdn.com/cnpm-portal-smart-recommends/1.3.2/portalSmartRecommends.window.js',
    'BANNER_SCRIPT_LINK_zh_cn': 'https://res.hc-cdn.com/cnpm-portal-smart-recommends/1.3.2/portalSmartRecommends.window.js',
    'ZBJ_RECHARGE_LINK': 'http://cloud.zbj.com/detail/index?id=9',
    'ZKZD_RECHARGE_LINK': 'https://passport.cloudbest.cn/charge',
    'HARDWARE_CENTER_INDEX_LINK': 'https://hdmarket.huaweicloud.com/',
    'TEST_BIRD_HELP': 'https://app.huaweicloud.com/product/00301-69130-0--0',
    'COMMENT_IFRAME_URL': 'https://marketplace.{DOMAIN}.com/comment/info/?app_id={app_id}&sku_code={sku_code}&resource_type_code={resource_type_code}&offset=0&limit=10',
    'COMMENT_URL': 'https://console.{DOMAIN}.com/marketplace/tenant/#/comment?appId={appId}&commentObjects={commentObjects}&lastURL={lastURL}&orderId={orderId}&commentRules={commentRules}',
    'PAYSUCCESS_AND_RETREATSUCCESS_BANNER_LINK_HEAD': 'https://portal.huaweicloud.com/rest/cbc/portalapppublishservice/v1/ad/disp',
    'PAYSUCCESS_BANNER_SCRIPT_LINK': 'www.huaweicloud.com/ad/order_success_board.html',
    'RETREATSUCCESS_BANNER_SCRIPT_LINK': 'www.huaweicloud.com/ad/order_refund_board.html'
};

window.ORDER_URL_CONFIG = $.extend({}, defaultUrlConfigs, commOrderCommonConfigDRM.ORDER_URL_CONFIG);

window.ORDER_CONSOLE_URL_WHITE_LIST = (defaultConsoleWhiteListUrl = [ 'huaweicloud.com', 'myhuaweicloud.com', 'myhuaweicloud.cn', 'huaweicloud.cn', 'huawei.com' ]).concat(commOrderCommonConfigDRM.ORDER_CONSOLE_URL_WHITE_LIST || []);

define('app/business/mobile/configures/orderCommons', [], function() {});

window.formatGMTtoLocal = function(time) {
    return time && time.substr(0, 19).replace('T', ' ');
};

window.filter_xss = function(str) {
    if (str) return str = (str = str.replace(/</g, '&lt;')).replace(/>/g, '&gt;');
};

window.formatDateTime = function(Time) {
    var time_arr, h_tmp;
    if (Time && -1 < Time.indexOf('GMT')) Time = (time_arr = Time.split('GMT'))[0].replace(/-/g, '/') + time_arr[1].replace(/:/g, ''); else if (Time && -1 < Time.indexOf('T')) {
        h_tmp = (time_arr = Time.split('T'))[1].substr(0, 8) + ' ' + time_arr[1].substr(8, time_arr[1].length);
        Time = time_arr[0].replace(/-/g, '/') + ' ' + h_tmp;
    }
    return Time;
};

window._utf8_encode = function(str) {
    var utfResult, n, char;
    str = str.replace(/\r\n/g, '\n');
    utfResult = '';
    for (n = 0; n < str.length; n++) (char = str.charCodeAt(n)) < 128 ? utfResult += String.fromCharCode(char) : utfResult = 127 < char && char < 2048 ? (utfResult += String.fromCharCode(char >> 6 | 192)) + String.fromCharCode(63 & char | 128) : (utfResult = (utfResult += String.fromCharCode(char >> 12 | 224)) + String.fromCharCode(char >> 6 & 63 | 128)) + String.fromCharCode(63 & char | 128);
    return utfResult;
};

window.Base64 = function() {
    var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.encode = function(input) {
        var result, charactor1, charactor3, binary1, binary2, binary3, binary4, i;
        result = '';
        i = 0;
        input = _utf8_encode(input);
        for (;i < input.length; ) {
            binary1 = (charactor1 = input.charCodeAt(i++)) >> 2;
            binary2 = (3 & charactor1) << 4 | (charactor1 = input.charCodeAt(i++)) >> 4;
            binary3 = (15 & charactor1) << 2 | (charactor3 = input.charCodeAt(i++)) >> 6;
            binary4 = 63 & charactor3;
            isNaN(charactor1) ? binary3 = binary4 = 64 : isNaN(charactor3) && (binary4 = 64);
            result = result + _keyStr.charAt(binary1) + _keyStr.charAt(binary2) + _keyStr.charAt(binary3) + _keyStr.charAt(binary4);
        }
        return result;
    };
    this.decode = function(input) {
        var result, a2, a3, binary1, binary2, binary3, binary4, i;
        i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, result = '');
        for (;i < input.length; ) {
            binary1 = _keyStr.indexOf(input.charAt(i++));
            a2 = (15 & (binary2 = _keyStr.indexOf(input.charAt(i++)))) << 4 | (binary3 = _keyStr.indexOf(input.charAt(i++))) >> 2;
            a3 = (3 & binary3) << 6 | (binary4 = _keyStr.indexOf(input.charAt(i++)));
            result += String.fromCharCode(binary1 << 2 | binary2 >> 4);
            64 != binary3 && (result += String.fromCharCode(a2));
            64 != binary4 && (result += String.fromCharCode(a3));
        }
        return result = function(utftext) {
            var string, i, charactor, charactor2, charactor3;
            string = '';
            i = 0;
            charactor = 0;
            0;
            charactor2 = 0;
            charactor3 = 0;
            for (;i < utftext.length; ) if ((charactor = utftext.charCodeAt(i)) < 128) {
                string += String.fromCharCode(charactor);
                i++;
            } else if (191 < charactor && charactor < 224) {
                charactor2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode((31 & charactor) << 6 | 63 & charactor2);
                i += 2;
            } else {
                charactor2 = utftext.charCodeAt(i + 1);
                charactor3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode((15 & charactor) << 12 | (63 & charactor2) << 6 | 63 & charactor3);
                i += 3;
            }
            return string;
        }(result);
    };
};

window.set_myorder_status = function(status) {
    if (status) try {
        return {
            'status': encodeURIComponent(new Base64().encode(JSON.stringify(status)))
        };
    } catch (err) {
        return {
            'status': encodeURIComponent(new Base64().encode(JSON.stringify({})))
        };
    }
    try {
        return {
            'status': encodeURIComponent(new Base64().encode(JSON.stringify(myOrderStatus)))
        };
    } catch (err) {
        return {
            'status': encodeURIComponent(new Base64().encode(JSON.stringify({})))
        };
    }
};

window.get_myorder_status = function(str) {
    try {
        var o = JSON.parse(new Base64().decode(decodeURIComponent(str)));
        return 'object' == typeof o ? o : {};
    } catch (err) {
        return {};
    }
};

window.set_renewal_status = function(status) {
    if (status) try {
        return {
            'renewalparams': encodeURIComponent(new Base64().encode(JSON.stringify(status)))
        };
    } catch (err) {
        return {
            'renewalparams': encodeURIComponent(new Base64().encode(JSON.stringify({})))
        };
    }
    try {
        return {
            'renewalparams': encodeURIComponent(new Base64().encode(JSON.stringify(myRenewalStatus)))
        };
    } catch (err) {
        return {
            'renewalparams': encodeURIComponent(new Base64().encode(JSON.stringify({})))
        };
    }
};

window.getProductSpec = function(i18order, item, product, productType) {
    var desc, resTypeId, s, d;
    if (null == item || null == product || null == productType) return '';
    desc = resType[product.productSpec.resTypeId];
    if (1 == productType) if (item.productRealSize) {
        resTypeId = product.productSpec.resTypeId;
        'DISK' == resType[resTypeId] || 'RDS_DISK' == resType[resTypeId] ? desc = Math.abs(item.productRealSize) + 'G' : 'BD_E' != resType[resTypeId] && 'BD_F' != resType[resTypeId] && 'galax' != resType[resTypeId] || (desc = Math.abs(item.productRealSize) + 'Mbps');
    } else desc = product.productSpec.productSpecSysDesc; else if (2 == productType) {
        productType = product.productSpec.specDetail;
        try {
            productType = $.parseJSON(productType);
        } catch (e) {
            window.console && console.log && window.console.log('parse specDetail json err!');
            return desc;
        }
        resTypeId = product.productSpec.resTypeId;
        if ('DISK' == resType[resTypeId]) item.productRealSize ? desc = Math.abs(item.productRealSize) + 'G' : productType.disk && productType.disk[0] && (desc = productType.disk[0].dataDisk + 'G'); else if ('BD_E' == resType[resTypeId] || 'BD_F' == resType[resTypeId] || 'galax' == resType[resTypeId]) 4 == item.periodType || 5 == item.periodType || 6 == item.periodType ? desc = i18order.periodType.on_demand : productType.bd && productType.bd[0] && 2 == productType.bd[0].bdType ? desc = i18order.periodType.by_traffic : item.productRealSize ? desc = Math.abs(item.productRealSize) + 'Mbps' : productType.bd && pecDetail.bd[0] && (desc = productType.bd[0].bdSize + 'Mbps'); else if ('VM' == resType[resTypeId]) {
            if (productType.vm && productType.vm[0]) {
                product = productType.vm[0].cpuCore;
                item = productType.vm[0].memSize;
                s = productType.vm[0].sysDisk;
                d = '0';
                productType.disk && productType.disk[0] && (d = productType.disk[0].dataDisk);
                s = parseInt(s) + parseInt(d);
                if (item < 1024) desc = product + i18order.spec.Core + '/' + item + 'M/' + s + 'G'; else {
                    item = parseInt(item) / 1024 * 10 / 10;
                    desc = product + i18order.spec.Core + '/' + item + 'G/' + s + 'G';
                }
            }
        } else if ('IMAGE' == resType[resTypeId]) productType.sys && productType.sys[0] && (desc = productType.sys[0].sysType); else if ('IP_G' == resType[resTypeId]) {
            if (productType.ip && productType.ip[0]) {
                d = productType.ip[0].linkType;
                desc = i18order.linkType[d];
            }
        } else 'DISKSPACE' == resType[resTypeId] ? productType.iSpace && productType.iSpace[0] && (desc = productType.iSpace[0].size + 'G') : 'DEVICE' == resType[resTypeId] ? productType.tc && productType.tc[0] && (desc = productType.tc[0].mf + '/' + productType.tc[0].mod + '/' + productType.tc[0].conf) : 'VPC' == resType[resTypeId] && productType.vpcSuit && productType.vpcSuit[0] && (desc = productType.vpcSuit[0].subnet + i18order.spec.Subnet_1firewall + productType.vpcSuit[0].vpn + 'vpn');
    }
    return desc;
};

window.log = function(message) {
    DEBUG && window.console;
};

window.getStepUnitPrice = function(tariffStepInto, productRealSize) {
    var rates, size, price, r, preMax, preRatio, i;
    size = productRealSize;
    if (!(rates = tariffStepInto) || 0 == rates.length) return 0;
    for (i = preRatio = preMax = price = 0; i < rates.length; i++) {
        r = rates[i];
        if (Number(r.endValue) > preMax) {
            preMax = Number(r.endValue);
            preRatio = Number(r.ratio);
        }
        size > Number(r.startValue) && (size <= Number(r.endValue) ? price += Number(r.ratio) * (size - Number(r.startValue)) : price += Number(r.ratio) * (Number(r.endValue) - Number(r.startValue)));
        if (i == rates.length - 1) return preMax < size && (price += preRatio * (size - preMax)), 
        parseFloat(price.toFixed(2));
    }
    return;
};

window.getUnit = function(i18order, periodType) {
    var _unit = '';
    switch (periodType) {
      case 0:
        _unit = '/' + i18order.myorder.service_time_day;
        break;

      case 1:
        _unit = '/' + i18order.myorder.service_time_week;
        break;

      case 2:
        _unit = '/' + i18order.myorder.service_time_month;
        break;

      case 3:
        _unit = '/' + i18order.myorder.service_time_year;
        break;

      case 4:
      case 5:
      case 6:
        _unit = '/' + i18order.myorder.service_time_hour;
    }
    return _unit;
};

window.getStdPrice = function(price, unit) {
    return 1 == unit ? price : 2 == unit ? price / 10 : 3 == unit ? price / 100 : price;
};

window.getValidPricePlan = function(pricePlans, validTime) {
    var buf, periodType, pricePlan, pricePlanLength, i, validTime_valid, expireTime_expire, price;
    if (validTime) {
        validTime = formatDateTime(validTime);
        validTime = Date.parse(validTime);
    } else validTime = (validTime = new Date()).getTime();
    buf = [];
    periodType = null;
    pricePlan = '';
    pricePlanLength = pricePlans.length;
    for (i = 0; i < pricePlanLength; i++) {
        validTime_valid = (pricePlan = pricePlans[i]).validTime.replace(/-/g, '/');
        validTime_valid = Date.parse(validTime_valid);
        expireTime_expire = pricePlan.expireTime.replace(/-/g, '/');
        if (Date.parse(expireTime_expire) < validTime || validTime < validTime_valid) continue;
        if (null === periodType || pricePlan.periodType == periodType) periodType = pricePlan.periodType; else {
            if (!(-1 < pricePlan.periodType && pricePlan.periodType > periodType || -1 == periodType && pricePlan.periodType > periodType)) continue;
            periodType = pricePlan.periodType;
            buf = [];
        }
        if (!buf[periodType]) {
            buf[periodType] = [];
            buf[periodType] = pricePlan;
        }
    }
    if (buf[periodType]) {
        0;
        price = 0;
        price += getStdPrice(buf[periodType].price, buf[periodType].currencyUnit);
        if (pricePlan = buf[periodType]) return {
            'price': pricePlan.isStepTariff ? pricePlan.tariffStepInfo[0].ratio : price,
            'tariffStepInfo': pricePlan.isStepTariff ? pricePlan.tariffStepInfo : '',
            'periodType': pricePlan.periodType,
            'periodCount': pricePlan.periodNum,
            'chargingMode': pricePlan.chargingMode
        };
    }
    return !1;
};

define('remote-lib/analysis', [], function() {});

require([ 'frameworkCommons' ], function() {
    'use strict';
    require.config({
        'baseUrl': '/res.hc-cdn.com',
        'waitSeconds': 0,
        'paths': {
            'm-app': 'mobile/src/app',
            'm-lib': 'usercenter/8.3.203/mobile/lib',
            'app': 'usercenter/8.3.203/src/app',
            'business-app-remote': 'src/app',
            'app-remote': '/console-static.huaweicloud.com/static/framework/5.0.0/src/app',
            'angular': '/console-static.huaweicloud.com/static/framework/5.0.0/lib/angular',
            'ui-router': '/console-static.huaweicloud.com/static/framework/5.0.0/lib/angular-ui/ui-router',
            'bootstrap': '/console-static.huaweicloud.com/static/framework/5.0.0/lib/bootstrap3.3.6/js',
            'moment': '/console-static.huaweicloud.com/static/framework/5.0.0/lib/moment/moment.min',
            'language': 'usercenter/8.3.203/i18n/default/' + 'zh-cn',
            'language-remote': '/console-static.huaweicloud.com/static/framework/5.0.0/i18n/default/' + 'zh-cn',
            'lazy-load': '/console-static.huaweicloud.com/static/framework/5.0.0/lib/lazy-load',
            'fixtures': 'usercenter/8.3.203/fixtures',
            'remote-lib': '/console-static.huaweicloud.com/static/framework/5.0.0/lib',
            'app-account': 'accountcenter/' + window.act_v + '/src/app',
            'language-account': 'accountcenter/' + window.act_v + '/i18n/default/' + 'zh-cn',
            'app-order': 'ordercenter/' + window.ord_v + '/src/app',
            'language-order': 'ordercenter/' + window.ord_v + '/i18n/default/' + 'zh-cn',
            'app-support': 'supportcenter/src/app',
            'language-support': 'supportcenter/i18n/default/' + 'zh-cn',
            'app-expense': 'expensecenter/' + window.exp_v + '/src/app',
            'app-enterprise': 'enterprisecenter/' + window.ent_v + '/src/app',
            'language-expense': 'expensecenter/' + window.exp_v + '/i18n/default/' + 'zh-cn',
            'language/pep_errMsg': '/res.hc-cdn.com/usercenter/8.3.203/i18n/default/' + 'zh-cn' + '/errmsg/usercenter.requirejs_nonmodel'
        },
        'priority': [ 'angular' ]
    });
    define('lazy-load/lazyLoad', [ 'ui-router/angular-ui-router' ], function(router) {
        var lazy = angular.module('lazy', [ 'ui.router' ]);
        lazy.makeLazy = function(module) {
            module.config(function($compileProvider, $filterProvider, $controllerProvider, $provide) {
                module.tinyDirective = lazy.register($compileProvider.directive);
                module.tinyFilter = lazy.register($filterProvider.register);
                module.tinyController = lazy.register($controllerProvider.register);
                module.tinyProvider = lazy.register($provide.provider);
                module.tinyService = lazy.register($provide.service);
                module.tinyFactory = lazy.register($provide.factory);
                module.tinyValue = lazy.register($provide.value);
                module.tinyConstant = lazy.register($provide.constant);
            });
            module.tinyStateConfig = function(rConfig) {
                if (!angular.isObject(rConfig)) return;
                module.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
                    if (isConfigArrayLike(rConfig.stateConfig)) {
                        var normalConfig;
                        angular.forEach(rConfig.stateConfig, function(stateConfig, key) {
                            normalConfig = lazy.parseConfig(stateConfig);
                            $stateProvider.state(normalConfig);
                        });
                    }
                    isConfigArrayLike(rConfig.urlMatch) && angular.forEach(rConfig.urlMatch, function(urlMatch, key) {
                        2 === urlMatch.length ? $urlRouterProvider.when(urlMatch[0], urlMatch[1]) : 1 === urlMatch.length && $urlRouterProvider.otherwise(urlMatch[0]);
                    });
                } ]);
                function isConfigArrayLike(config) {
                    return angular.isArray(config) && 0 < config.length;
                }
            };
            return module;
        };
        lazy.register = function(registrationMethod) {
            return function(name, constructor) {
                registrationMethod(name, constructor);
            };
        };
        lazy.parseConfig = function(sConfig) {
            if (!sConfig.scripts) return sConfig;
            sConfig.resolve = sConfig.resolve || {};
            sConfig.resolve.deps = function($q, $rootScope) {
                return $q.all([ load(sConfig.scripts.directives || null), load(sConfig.scripts.services || null), load(sConfig.scripts.controllers || null), load(sConfig.scripts.factories || null), load(sConfig.scripts.js || null) ]);
                function load(reqUrl) {
                    var deferred = $q.defer();
                    if (null === reqUrl) return deferred.resolve(), deferred.promise;
                    require(reqUrl, function() {
                        $rootScope.$apply(function() {
                            deferred.resolve();
                        });
                    });
                    return deferred.promise;
                }
            };
            return sConfig;
        };
        return lazy;
    });
    define('framework.tpls', [], function() {});
    define('app/business/mobile/services/mobileMaskService', [], function() {
        return [ '$ionicLoading', function($ionicLoading) {
            this.show = function() {
                $ionicLoading.show({
                    'template': isIOS ? '<ion-spinner icon="ios"></ion-spinner>' : '<ion-spinner icon="android"></ion-spinner>',
                    'duration': 15e3
                }).then(function() {});
            };
            this.hide = function() {
                $ionicLoading.hide().then(function() {});
            };
            this.pageInitShow = function() {
                this.show();
            };
            this.pageInitHide = function() {
                this.hide();
            };
        } ];
    });
    define('app/framework/configures/frameworkRouterConfig', [ 'lazy-load/lazyLoad' ], function(lazyLoadModule) {
        var configArr = [ {
            'name': 'otherwise',
            'url': '*'
        }, {
            'name': 'frameworkIndex',
            'url': '/frameworkIndex'
        }, {
            'name': 'nonsupportRegion',
            'url': '/nonsupportRegion',
            'templateUrl': 'src/app/framework/views/nonsupportRegion.html',
            'controller': 'nonsupportRegion.ctrl',
            'scripts': {
                'controllers': [ 'app-remote/framework/controllers/nonsupportRegionCtrl' ]
            }
        }, {
            'name': 'beingMaintained',
            'url': '/beingMaintained',
            'templateUrl': 'src/app/framework/views/beingMaintained.html',
            'controller': 'beingMaintained.ctrl',
            'scripts': {
                'controllers': [ 'app-remote/framework/controllers/beingMaintainedCtrl' ]
            }
        }, {
            'name': 'accessDeclined',
            'url': '/accessDeclined',
            'templateUrl': 'src/app/framework/views/accessDeclined.html',
            'controller': 'accessDeclined.ctrl',
            'scripts': {
                'controllers': [ 'app-remote/framework/controllers/accessDeclinedCtrl' ]
            }
        } ], frmModule = angular.module('frm', [ 'ui.router' ]);
        (frmModule = lazyLoadModule.makeLazy(frmModule)).tinyStateConfig({
            'stateConfig': configArr
        });
        frmModule.filter('maxDigits', function() {
            return function(input, digits) {
                digits = Math.pow(10, digits) - 1;
                return input = digits < input ? digits + '+' : input;
            };
        });
        return frmModule;
    });
    define('language/user', [], function() {
        return {
            'localeRule': {
                'DATETIME_FORMATS': {
                    'csbTime': 'yyyy/MM/dd HH:mm:ss \'GMT\'Z',
                    'csbTimeMobile': 'y/MM/dd HH:mm:ss',
                    'csbTimeByZone': 'y/MM/dd HH:mm:ss \'GMT\'',
                    'shortTimeDate': 'y/MM/dd',
                    'shortestTimeDate': 'y/MM',
                    'timeExceptSecond': 'y/MM/dd HH:mm'
                }
            },
            'commonSelect': {
                'position': [ '--请选择职位--', '技术管理员', '系统管理员/运维工程师', '系统架构师', '软件工程师', '技术或IT副总监', '技术或IT总监', 'CTO', 'CEO', '其他' ]
            },
            'allview_credit_bindtype3_hk': '合作伙伴为您设置的月度预算是: ',
            'allview_title_bindtype3_hk': '本月剩余预算',
            'allview_subcustomer_tip_bindtype3_1': '剩余预算 {1} = 月度预算 - （本月消费 - 本月已抵扣代金券 - 预计月底可抵扣代金券）<br>',
            'allview_subcustomer_tip_bindtype3_2': '月度预算 {1}<br>',
            'allview_subcustomer_tip_bindtype3_3': '本月消费 {1}<br>',
            'allview_subcustomer_tip_bindtype3_4': '本月已抵扣代金券 {1}<br>',
            'allview_subcustomer_tip_bindtype3_5': '预计月底可抵扣代金券 {1}<br>',
            'allview_subcustomer_tip_bindtype3_6': '其中预计月底可抵扣代金券为预计金额，最终抵扣金额以出账后的消费汇总为准。',
            'allview_subcustomer_tip_unopen': '您的{1}年度预算尚未设置。如果当前预算不足，请联系您的企业主账号为你设置。',
            'allview_subcustomer_tip_open': '您的{1}年度预算为{2}，如果当前预算不足，请联系您的企业主账号为你设置。',
            'allview_customer_tip_unopen': '您的{1}年度预算尚未设置。如果当前预算不足，请及时进行设置。',
            'allview_customer_tip_open': '您的{1}年度预算为{2}，如果当前预算不足，请及时进行设置。',
            'allview_subcustomer_tip_1': '本年度剩余预算 {1} = 本年度总预算 - 本年度已消费金额（本年度已消费金额为延时数据）<br>',
            'allview_subcustomer_tip_2': '本年度总预算 {1}<br>',
            'allview_subcustomer_tip_3': '本年度已消费金额 {1}',
            'allview_title_subcustomer': '本年度剩余预算',
            'allview_title_subcustomer_all': '企业主账号为您设置的年度预算是: ',
            'allview_title_subcustomer_tip': '如您的下一年预算尚未设置，或者当前预算不足，请联系您的企业主账号为你设置。',
            'allview_title_customer_all': '您的年度预算是: ',
            'allview_title_customer_tip': '如您的下一年预算尚未设置，或者当前预算不足，请及时进行设置。',
            'allview_invoice_0': '可开票金额仅针对华为云和云市场已消费金额，每月的按需消费金额次月3号以后才会体现。',
            'allview_invoice_1': '可开票金额仅针对华为云和云市场已消费金额，每月的消费金额次月3号出账以后才会体现。',
            'allview_title_bindtype3': '剩余预算',
            'allview_credit_bindtype3': '合作伙伴为您设置的消费预算是: ',
            'allview_consume_bindtype3_limit2_new': '该预算主要用于管理您每月新增消费金额，基于华为云官网价计算。如果消费超出预算，伙伴可能会对您及您购买的资源，采取冻结措施，详情请咨询您的合作伙伴。',
            'package_usage_detail': '使用详情',
            'operator_not_available': '抱歉，当前操作出现异常，请稍后再试。',
            'nodata_part_tip': '部分数据加载失败，请稍后再试',
            'nodata_table_tip': '数据加载失败，请稍后再试',
            'allview_consume_limit_bindtype3': '剩余预算: ',
            'package_notininforce': ' (未生效)',
            'authority_msg': '您没有进行此操作的权限，请联系管理员！',
            'err_access_title_servicePay': '很抱歉，您没有支付权限。',
            'err_access_content_servicePay': '请联系有支付权限的管理员在待支付订单页面进行支付。',
            '/userindex/benefits': '费用中心-商务折扣',
            '/userindex/partnerDiscount': '费用中心-伙伴授予折扣',
            '/enterpriseFinaceIndex/exportRecords': '企业项目财务信息-导出记录',
            '/enterpriseFinaceIndex/projectConsume': '企业项目财务信息-总览',
            '/enterpriseindex/allview': '企业中心-总览',
            '/enterpriseindex/organizationlist': '企业中心-组织与账号',
            '/enterpriseindex/policysManagement': '企业中心-组织策略管理',
            '/enterpriseindex/loanAndRecycling': '企业中心-资金放款与开票',
            '/enterpriseindex/transferRecords': '企业中心-资金往来明细',
            '/enterpriseindex/consumSum': '企业中心-消费汇总',
            '/enterpriseindex/consumResbill': '企业中心-消费明细',
            '/enterpriseindex/budgetManagement': '企业中心-预算管理',
            '/enterpriseindex/budgetManage': '企业中心-预算管理',
            '/enterpriseindex/exportRecords': '企业中心-导出记录',
            '/enterpriseProjectIndex/billingDistribut': '企业项目-账单分析',
            '/enterpriseProjectIndex/currentUsage': '企业项目-转包周期',
            '/enterpriseProjectIndex/renewalManagement': '企业项目-续费管理',
            '/enterpriseProjectIndex/consumeTab': '企业项目-消费汇总',
            '/enterpriseProjectIndex/consumeDetail': '企业项目-消费明细',
            '/enterpriseProjectIndex/costAnalyseDetail': '企业项目-消耗分析',
            '/enterpriseProjectIndex/quotaManage': '企业项目-配额管理',
            '/enterpriseProjectIndex/myOrder': '企业项目-我的订单',
            '/enterpriseProjectIndex/expenseBills': '企业项目-费用账单',
            '/enterpriseProjectIndex/exportRecords': '企业项目-导出记录',
            '/enterpriseProjectIndex/retreatManagement': '企业项目-云服务退订',
            '/enterpriseProjectIndex/orderDetail': '企业项目-我的订单-详情',
            '/enterpriseProjectIndex/feeAnalysis': '企业项目-费用分析',
            '/enterpriseProjectIndex/billAnalysis': '企业项目-账单分析',
            '/enterpriseProjectIndex/costAnalysis': '企业项目-消耗分析',
            '/enterpriseProjectIndex/exportRecord': '企业项目-导出记录',
            '/userindex/allview': '费用中心-总览',
            '/userindex/balanceRecharge': '费用中心-充值',
            '/userindex/oweBusiness': '费用中心-欠费',
            '/userindex/refundRecord': '费用中心-提现',
            '/userindex/refundApply': '费用中心-提现-申请提现',
            '/userindex/refundDetail': '费用中心-提现-详情',
            '/userindex/refundApplySuccess': '费用中心-提现-提现成功',
            '/userindex/dealRecords': '费用中心-收支明细',
            '/userindex/deals': '费用中心-收支明细',
            '/userindex/adjustRecords': '费用中心-调账记录',
            '/userindex/invoiceCenter': '费用中心-发票管理',
            '/subaccount/invoiceCenter': '费用中心-发票管理',
            '/userindex/invoiceDetail': '费用中心-发票管理-发票详情',
            '/subaccount/invoiceDetail': '费用中心-发票管理-发票详情',
            '/createInvoice': '费用中心-发票管理-索取发票',
            '/userindex/addressAndTemplate': '费用中心-发票管理-收件地址&发票信息',
            '/subaccount/addressAndTemplate': '费用中心-发票管理-收件地址&发票信息',
            '/userindex/createInvoiceTemplate': '费用中心-发票管理-索取发票-编辑模板',
            '/userindex/invoiceList': '费用中心-发票管理-客户信息',
            '/userindex/invoiceWithHoldingTax': '费用中心-发票管理-代扣税凭证管理',
            '/userindex/invoiceWithHoldingTaxDetail': '费用中心-发票管理-代扣税凭证管理-详情',
            '/userindex/invoiceWithHoldingUpload': '费用中心-发票管理-代扣税凭证管理-上传代扣税凭证',
            '/userindex/creditsList': '费用中心-支付方式',
            '/userindex/paymentBindresult': '费用中心-支付方式-绑卡',
            '/userindex/creditsHistory': '费用中心-支付方式-绑卡历史记录',
            '/userindex/rechargeRecord': '费用中心-总览-充值记录',
            '/userindex/presentRecord': '费用中心-总览-奖励记录',
            '/userindex/renewalManagement': '费用中心-续费管理',
            '/userindex/costanalyse': '费用中心-消耗分析',
            '/userindex/authentication': '费用中心-云闪贷认证',
            '/userindex/authenticationDetail': '费用中心-云闪贷认证',
            '/userindex/loanList': '费用中心-贷款管理',
            '/batchrenewal': '批量续费',
            '/complete': '完善信息',
            '/exportbatchrenewal': '导出待续费清单',
            '/renewal': '续费/转按需',
            '/retreatSuccess': '费用中心-云服务退订-退订成功',
            '/failedRetreatSuccess': '费用中心-云服务退订-退订成功',
            '/failedRetreat': '费用中心-云服务退订-退订',
            '/release': '释放',
            '/userindex/myOrder': '费用中心-我的订单',
            '/userindex/orderDetail': '费用中心-我的订单-详情',
            '/batchretreat': '费用中心-云服务退订',
            '/orderPay': '支付',
            '/servicePay': '支付',
            '/loanPay': '云闪贷支付',
            '/userindex/consumeTab': '费用中心-费用账单',
            '/userindex/billDiscountInfo': '费用中心-消费汇总-已优惠',
            '/userindex/payRecords': '费用中心-付款历史记录',
            '/userindex/feeAnalysis': '费用中心-费用分析',
            '/userindex/billv1Analysis': '费用中心-费用分析',
            '/userindex/costBudgeting': '费用中心-费用预算',
            '/userindex/feetag': '费用中心-费用分配标签',
            '/userindex/reservedInstance': '费用中心-预留实例报告',
            '/userindex/costv1Analysis': '费用中心-成本分析',
            '/userindex/consumeDetail': '费用中心-消费明细',
            '/userindex/consumeSubDetailn': '费用中心-消费明细-流水概览',
            '/userindex/resourceConsumeRecord': '费用中心-资源消费',
            '/userindex/resourceSubDetail': '费用中心-资源消费-消费概览',
            '/userindex/consumeRiSubDetail': '费用中心-资源消费-消费概览',
            '/userindex/billAnalysis': '费用中心-消费分析',
            '/userindex/billingAnalysis': '费用中心-消费分析',
            '/userindex/billingTrend': '费用中心-消费走势分析',
            '/userindex/billingDistribut': '费用中心-消费走势分析',
            '/userindex/exportRecords': '费用中心-导出记录',
            '/userindex/consumptionStorage': '费用中心-消费数据存储',
            '/userindex/costv1bill': '费用中心-月度成本',
            '/userindex/costMonthly': '费用中心-月度成本消耗',
            '/userindex/statusage': '费用中心-用量明细',
            '/userindex/coupons': '费用中心-优惠券',
            '/userindex/couponDetail': '费用中心-优惠券详情',
            '/userindex/couponsActivate': '费用中心-优惠券-激活优惠券',
            '/userindex/contractCenter': '费用中心-合同与商务',
            '/userindex/contractApply': '费用中心-合同与商务-合同申请',
            '/userindex/currentUsage': '费用中心-按需资费变更',
            '/userindex/projectConsume': '费用中心-总览-企业项目财务',
            '/userindex/quotaManage': '费用中心-总览-企业项目财务-额度设置',
            '/changeToPeriod': '费用中心-按需资费变更-按需转包周期',
            '/batchChangeToPeriod': '费用中心-按需资费变更-按需转包周期',
            '/userindex/retreatManagement': '费用中心-云服务退订',
            '/retreat': '费用中心-云服务退订-退订',
            '/accountindex/accountInfo': '账号中心-基本信息',
            '/accountindex/rightsInterest': '账号中心-基本信息-我的权益',
            '/accountindex/realNameAuth': '账号中心-实名认证',
            '/accountindex/realNameAuthing': '账号中心-实名认证',
            '/accountindex/studentAuth': '账号中心-学生认证',
            '/accountindex/privilege': '账号中心-我的特权',
            '/accountindex/tomyPartner': '账号中心-我的合作伙伴',
            '/accountindex/contactsManager': '账号中心-联系人管理',
            '/accountindex/contactsaddmodify': '账号中心-联系人管理-编辑',
            '/accountindex/recommendmanagement': '账号中心-我的推荐',
            '/supportindex/customerfeedback': '服务支持中心-工单管理',
            '/supportindex/feedbacksort': '服务支持中心-工单管理-工单分类',
            '/supportindex/createfeedback': '工单管理-工单分类-新建工单',
            '/supportindex/customerfeedbackDetail': '工单管理-工单详情',
            '/supportindex/betaManagement': '资源中心-我的公测',
            '/applyBeta': '申请公测',
            '/supportindex/survey': '服务支持中心-问卷调查',
            '/orderindex/package': '资源中心-我的套餐',
            '/orderindex/resource': '资源中心-我的资源',
            '/unsubscribe': '销户',
            '/registSuccess': '注册引导',
            '/accountindex/enterprise': '账号中心-企业管理',
            '/accountindex/enterprise/list': '账号中心-企业管理',
            '/accountindex/bpInfoModify': '账号中心-修改资质信息',
            '/accountindex/unBind': '账号中心-申请解除关联',
            '/accountindex/toBindBp': '账号中心-关联商业合作伙伴',
            '/accountindex/applyBpInfo': '账号中心-申请成为商业合作伙伴',
            '/getCoupons': '领取优惠券',
            '/userindex/bonusConsume': '费用中心-优惠券-奖励金券详情',
            '/closeAccount': '关闭帐号',
            '/accountindex/developerAuth': '开发者联盟授权认证',
            'accountIndex/authorization': '华为云实名认证数据授权',
            '/cancelAccount': '注销帐号',
            '/userindex/accountInfo': '账号中心-基本信息',
            '/userindex/realNameAuth': '账号中心-实名认证',
            '/userindex/studentAuth': '账号中心-学生认证',
            '/userindex/privilege': '账号中心-我的特权',
            '/userindex/tomyPartner': '账号中心-我的合作伙伴',
            '/userindex/contactsManager': '账号中心-联系人管理',
            '/userindex/contactsaddmodify': '账号中心-联系人管理-编辑',
            '/userindex/recommendmanagement': '账号中心-我的推荐',
            '/userindex/customerfeedback': '服务支持中心-工单管理',
            '/userindex/feedbacksort': '服务支持中心-工单管理-工单分类',
            '/userindex/createfeedback': '工单管理-工单分类-新建工单',
            '/userindex/customerfeedbackDetail': '工单管理-工单详情',
            '/userindex/betaManagement': '服务支持中心-公测管理',
            '/userindex/survey': '服务支持中心-问卷调查',
            '/package': '资源中心-我的套餐',
            '/resource': '资源中心-我的资源',
            '/subaccount/exportRecords': '子账号管理-导出记录',
            '/subaccount/allview': '子账号管理-财务信息',
            '/subaccount/consumeTab': '子账号管理-消费汇总',
            '/subaccount/consumeDetail': '子账号管理-消费明细',
            '/subaccount/accountinfo': '子账号管理-账号信息',
            '/subaccount/myOrder': '子账号管理-订单信息',
            '/subaccount/orderDetail': '子账号管理-订单信息-详情',
            '/subaccount/expenseBills': '子账号管理-费用账单',
            'applyBeta_CSV_Validation': '去空格和tab字符后，首字符或逗号后不允许为+-=@',
            'allview_account_num_tip': '账户具体收支变化，请查看“账单-收支明细”',
            'allview_consume_num_tip': '本月消费数据为延迟数据，实时数据请查看“<a href=\'#/userindex/consumeDetail\'>消费明细</a>”',
            'allview_taxamount': '含税金: ',
            'beta_management_tip': '公测申请提交后，我们将在5个工作日内完成审核，感谢您的支持。',
            'beta_management_filter': '显示已过期公测记录',
            'allview_consume_limit': '剩余消费额度: ',
            'allview_consume_bindtype2_limit': '企业主账号授予您的消费额度是: ',
            'allview_consume_bindtype3_limit1': '合作伙伴授予您的消费额度是: ',
            'allview_consume_bindtype3_limit2': '消费额度由您归属的伙伴设置，按华为云官网价计算的。<br>包括现金消费和代金券消费。',
            'allview_consume_inneruser_limit': '总消费限额: ',
            'allview_consume_balanceLess': '消费额度少于{n}',
            'allview_consume_limit_set': '预警阈值修改',
            'allview_amount_limit': '消费额度预警',
            'allview_consume_use': '可用余额',
            'allview_consume_title': '消费金额',
            'allview_consume_max': '消费额度',
            'allview_consume_mon_am': ' 消费金额',
            'allview_consume_pay': '累计应还款金额',
            'allview_consume_vd': '查看',
            'allview_consume_vd1': '未还清账单',
            'allview_consume_tip_dt': '华为云授予您的信用额度为{n},额度范围产生的消费需要您付款结清，',
            'allview_consume_tip_dt1': '详情',
            'allview_consume_tip_re': '最近一次的信用卡扣款不成功，',
            'allview_consume_tip_re0': '可能的原因',
            'allview_consume_tip_re1': '1.您的信用卡已注销<br>2.您的信用卡的可用额度不足',
            'allview_consume_tip_re2': '已超信用额度消费，相关资源可能被停止服务或逾期释放，请立即还款恢复可用信用额度',
            'allview_consume_tip_sub': '请联系您的主账号进行还款',
            'allview_consume_tip': '月度消费限额由您归属的伙伴设置，按华为云官网价计算的。包括现金消费和代金券消费。',
            'allview_change_adjusturl': '如您需要查看历史的调账记录，请<a href=\'#/userindex/adjustRecords?beId={n}\'>点此</a>查看',
            'allview_consume_bind3': '月度消费限额由您归属的伙伴设置，按华为云官网价计算的。包括现金消费和代金券消费。',
            'consumedetail_exception': '如账单数据汇总加载失败，请联系客服获取',
            'menu_hi': '您好, ',
            'menu_account': '账号管理',
            'menu_allview': '总览',
            'menu_finance': '费用中心',
            'menu_consumedetails': '消费明细',
            'menu_consumedetailsNew': '消费流水',
            'menu_resourceConsumeRecord': '资源消费',
            'menu_resourceConsumeRecordNew': '消费详情',
            'menu_dealrecords': '收支明细',
            'menu_payrecords': '付款历史记录',
            'menu_bills': '费用账单',
            'menu_saleDataStore': '消费数据存储',
            'menu_exportrecords': '导出记录',
            'menu_invoicecenter': '发票管理',
            'menu_usage': '按需资源管理',
            'menu_currentUsage': '运行中资源',
            'menu_historyUsage': '历史按需资源',
            'menu_myorder': '我的订单',
            'menu_unpayorder': '待支付订单',
            'menu_memOrder': '企业子账号订单',
            'menu_retreat_after_sale': '退订与退换货',
            'menu_order_management': '订单管理',
            'menu_order_all': '全部订单',
            'menu_orderManagement_myOrder': '我的订单',
            'menu_contractCenter': '合同管理',
            'menu_coupons': '优惠券',
            'menu_coupons_hk': '优惠券',
            'menu_storedCard': '储值卡',
            'menu_consumesum': '消费汇总',
            'menu_billInfoMonthly': '月度消费',
            'menu_billAnalysis1': '消费分析',
            'menu_costMonthly': '月度成本消耗',
            'menu_costMonthly_new': '月度成本',
            'menu_statusage_new': '用量明细',
            'menu_demandResources': '转包周期',
            'menu_retreatManagement': '云服务退订',
            'menu_solution': '我的解决方案',
            'menu_supportcenter': '服务支持中心',
            'menu_resourcecenter': '资源中心',
            'menu_quota': '我的配额',
            'menu_application': '我的云市场',
            'menu_accountcenter': '账号中心',
            'menu_enterprise_center': '企业中心',
            'menu_new_finance': '账单管理',
            'menu_new_discounts': '优惠折扣',
            'menu_new_contract_invoice': '合同与发票',
            'menu_new_retreat_change': '退订与变更',
            'menu_retreatGoods': '硬件退货',
            'menu_hardware_after_sale': '硬件退换货',
            'menu_free_package': '免费套餐',
            'menu_fee_analysis': '费用分析',
            'menu_fee_analysis_hk': '费用分析',
            'menu_fee_costcenter': '成本中心',
            'menu_fee_tag': '费用分配标签',
            'menu_fee_cost': '成本管理',
            'menu_cost_analysis': '成本分析',
            'menu_resource': '我的资源',
            'menu_package': '我的套餐',
            'menu_betamanagement': '我的公测',
            'timeinterval': '自定义时间段',
            'confirmButton': '保存',
            'cancelButton': '取消',
            'beta_operater': '操作',
            'beta_userName': '申请人',
            'beta_auditStatus': '审批状态',
            'beta_approval': '审批中',
            'beta_pass': '审批通过',
            'beta_unpass': '审批未通过',
            'beta_limited': '已撤销',
            'beta_beta': '公测中',
            'beta_overTime': '已过期',
            'beta_toBegin': '即将开始公测',
            'beta_choiceApplyBetaService': '请选择可申请公测产品！',
            'beta_error': '系统繁忙，请稍后重试。',
            'beta_label_1': '企业规模: ',
            'beta_label_2': '研发人员比例: ',
            'beta_label_5': '应用场景: ',
            'beta_label_6': '业务当前阶段: ',
            'beta_label_7': '业务描述: ',
            'beta_label_8': '联系人: ',
            'beta_label_9': '联系电话: ',
            'beta_applyBeta': '申请公测',
            'beta_applicableBeta': '申请公测',
            'beta_appliableBetaPro': '申请的公测产品/服务',
            'beta_nullBeta': '暂无可申请的公测产品/服务',
            'beta_applyInfo': '申请信息',
            'beta_agree': '同意',
            'beta_plan': '《公测试用服务协议》',
            'beta_plan_url': 'http://www.' + domainName + '.com/declaration/fsa_test.html',
            'beta_plan_url_international': 'https://www.huaweicloud.com/intl/zh-cn/declaration/fsa_test.html',
            'beta_note1': '1. 在您提交产品/服务公测申请前，请认真阅读《公测免费试用服务协议》的相关内容。如果您确定进行产品/服务公测申请，则表明您已经同意并接受《公测免费试用服务协议》的相关内容。',
            'beta_note5': '2. 您将于产品/服务公测活动期结束前，收到活动结束通知。届时请您按照通知提示进行操作，选择适合您的商用模式继续使用或停止使用。如您选择继续使用，则您的相关数据仍会保留，并请按照收费标准进行付费；如您选择停止使用，您的数据将不会保留。',
            'beta_note6': '3. 本活动最终解释权归华为云所有。',
            'beta_appliedBetaService': '已申请的公测产品/服务',
            'beta_serviceApplyNote3': '提交失败：',
            'beta_serviceApplyNote4': '因当前服务公测过期，您无法申请。或为：您已提交申请，请勿重复提交。',
            'beta_serviceApplyNote5': '提交成功',
            'beta_serviceApplyNote6': '我们已收到您的申请，5个工作日内审核结果将发送到您的邮箱和手机，感谢您的支持。',
            'beta_betaManageBtn': '前往我的公测',
            'beta_serviceApplyNote7': '提交明细如下',
            'beta_applyInstruction': '审批说明',
            'beta_re_apply': '重新申请',
            'beta_time_left_day': '(剩{n}天结束)',
            'beta_serviceApplyNote8': '因当前服务公测过期，您无法申请。',
            'beta_serviceApplyNote9': '您已提交此公测服务申请，请勿重复提交。',
            'table_applyTime': '申请时间',
            'tip_unempty': '不能为空！',
            'tip_7': '号码格式不正确。',
            'valid_errDetail_rangeSize': '输入长度范围为{1}到{2}。',
            'valid_errDetail_maxSize': '请输入{1}个以内的字符。',
            'beta_errorcode_508030750': '用户处于公安冻结中，修改信息失败',
            'beta_errorcode_508030751': '用户公测活动申请不存在',
            'beta_errorcode_508030700': '修改用户信息失败',
            'beta_errorcode_508030757': '该用户没有权限修改该公测申请相关数据',
            'national_num': '+86（中国）',
            'reconmend': '推荐活动',
            'portal_index_url': 'http://www.' + domainName + '.com/',
            'portal_index_url_hk': 'http://intl.' + domainName + '.com/',
            'console_index_url': 'http://console.' + domainName + '.com/',
            'console_index_url_hk': 'http://' + window.UrlConfig.getTargetDomain('console') + '.' + domainName + '.com/',
            'rechargeInfo_balanceLess': '余额少于{n}',
            'rechargeInfo_closeBalanceWarnConfirm_hk': '确定要关闭信用额度预警？',
            'rechargeInfo_closeBalanceWarnConfirm': '确定要关闭余额预警？',
            'rechargeInfo_closeBalanceWarnDes_hk': '关闭信用额度预警后，将无法收到相关通知。',
            'rechargeInfo_closeBalanceWarnDes': '关闭余额预警后，将无法收到相关通知。',
            'rechargeInfo_balanceWarn_hk': '信用额度预警',
            'rechargeInfo_balanceWarn': '余额预警',
            'rechargeInfo_consumeRecord': '调账记录',
            'rechargeInfo_alert1': '请输入大于0且不超过8位的整数。',
            'rechargeInfo_sendMessage': '时发送短信提醒到',
            'balancealert_alert_title': '预警阈值修改',
            'rechargeInfo_modifyPhone': '修改手机号',
            'rechargeInfo_confirm': '确定',
            'rechargeInfo_cancel': '取消',
            'allview_chargeback_tab_1': '新开通按需资源',
            'allview_chargeback_tab_2': '已开通按需资源',
            'allview_chargeback_strategy_alert1': '修改后，新开通的资源将使用“商业合作伙伴子账户”扣费且再无法使用“华为云账户”扣费，请谨慎操作。',
            'allview_chargeback_strategy_alert2': '修改后，已开通的资源将使用“商业合作伙伴子账户”扣费且再无法使用“华为云账户”扣费，请谨慎操作。',
            'allview_chargeback_curr': '当前扣费账户: ',
            'allview_chargeback_after': '修改后扣费账户: ',
            'title_tip_new': '新开通:',
            'title_tip_new_1': '1.默认扣费账户为华为云账户',
            'title_tip_new_2': '2.仅支持设置从华为云账户修改为商业合作伙伴子账户',
            'title_tip_opened': '已开通: ',
            'title_tip_opened_1': '1.可修改已开通按需资源扣费账户的条件',
            'title_tip_opened_1_1': '1）当前扣费账户未欠费',
            'title_tip_opened_1_2': '2）商业合作伙伴子账户余额≥100元',
            'title_tip_opened_2': '2.仅支持将已开通按需资源扣费账户批量修改为商业合作伙伴子账户',
            'title_tip_1': '1. 仅支持将按需资源扣费账户从华为云账户修改为商业合作伙伴子账户',
            'title_tip_2': '2. 切换要求当前账户未欠费，目标账户余额>=100元',
            'title_tip_3': '3. 新开通按需资源默认扣费账户为华为云账户',
            'title_tip_4': '您已设置新开通的资源使用“商业合作伙伴子账户”扣费，不支持再修改为“华为云账户”扣费。',
            'title_tip_5': '您已设置已开通的资源使用“商业合作伙伴子账户”扣费，不支持再修改为“华为云账户”扣费。',
            'btn_dealRecords': '收支明细',
            'btn_balanceRecharge': '充值',
            'button_apply': '立即申请',
            'button_auth': '实名认证',
            'button_goConsole': '返回控制台',
            'button_goBack': '返回原页面',
            'button_goPortal': '华为云官网',
            'allview_chargeback_strategy_label': '按需策略变更',
            'allview_chargeback_strategy_modify': '尚未设置扣费策略',
            'allview_modify': '修改',
            'allview_invoice': '索取发票',
            'codeGot': '手机收到的验证码',
            'code_tip3': '验证码错误，请重新输入。',
            'code_tip4': '验证码已失效，请重新获取。',
            'code_tip5': '获取验证码失败，请稍后再试。',
            'code_tip6': '验证码已发送，请注意查收。',
            'code_get': '获取验证码',
            'msg_send_tip': '{n}秒后重新获取',
            'msg_tip1': '验证码已发至',
            'msg_tip2': '，请注意查收',
            'get_Captcha': '获取验证码',
            'msg_err_tip3': '获取验证码失败',
            'input_tip': '请输入正确验证码。',
            'reminder': '温馨提示: ',
            'msgNotice': '系统繁忙，请稍后重试。',
            'msgNotice1': '系统繁忙，请稍后重试。',
            'customer_realnameauth_upload_IE9tips': '使用IE9浏览器可能看不到预览图片，但不影响上传提交，请继续操作。',
            'customer_realnameauth_uploadtips_success': '上传成功。',
            'bp_fileupload_outtimes': '文件上传次数超出',
            'customer_realnameauth_upload_error_errname': '文件名不能包含*(@#$>等特殊字符，请修改。',
            'customer_realnameauth_upload_error_toomax': '请选择不大于4M的文件。',
            'customer_realnameauth_upload_error_toomax_customize': '请选择不大于{n}M的文件。',
            'customer_realnameauth_upload_error_invalidtype': '请选择 jpeg/jpg/bmp/png/gif/pdf格式的文件。',
            'customer_realnameauth_upload_error_403': '您上传的文件被网络设备所限制，请检查网络，例如Proxy',
            'customer_realnameauth_uploadtips_fail': '上传失败，请稍后重试。',
            'customer_realnameauth_uploadtips_modify': '点击修改',
            'bi_search': '搜索',
            'bi_pageSizeChange': '切换列表数量',
            'bi_select': '筛选',
            'bi_detail': '详情',
            'userinfo_appscene_0': '--请选择--',
            'userinfo_appscene_1': '数据分析',
            'userinfo_appscene_2': '在线培训',
            'userinfo_appscene_3': '会议',
            'userinfo_appscene_4': '图片&音频&视频',
            'userinfo_appscene_5': '能力包装',
            'userinfo_appscene_6': 'Web托管',
            'userinfo_appscene_7': '电子商务',
            'userinfo_appscene_8': 'Saas&Paas应用',
            'userinfo_appscene_9': '企业办公',
            'userinfo_appscene_10': '工作流',
            'userinfo_appscene_11': '应用托管',
            'userinfo_appscene_12': '备份/归档/容灾',
            'userinfo_appscene_13': '移动互联网APP',
            'userinfo_appscene_14': '网络游戏/社交游戏',
            'userinfo_appscene_15': '消费者网盘',
            'userinfo_appscene_16': '企业网盘',
            'userinfo_appscene_17': '渲染服务',
            'userinfo_appscene_18': '内容/数据存储',
            'userinfo_appscene_19': '研发/测试',
            'userinfo_appscene_20': 'HPC超算',
            'userinfo_appscene_21': '其他',
            'customer_studentauth_newTips_success': '您已经通过华为云学生认证',
            'customer_realnameauth_perauth_label_idvalue': '证件号码: ',
            'customer_studentauth_label_schoollocation': '学校所在地: ',
            'customer_studentauth_label_schoolname': '学校名称: ',
            'customer_studentauth_label_education': '学历: ',
            'customer_studentauth_label_indate': '入学时间: ',
            'graduationDateLable': '预计毕业时间: ',
            'customer_realnameauth_label_authOKtime': '认证时间: ',
            'customer_realnameauth_label_authtime': '提交时间: ',
            'customer_studentauth_label_studentcard_cover': '学生证封面',
            'customer_studentauth_label_studentcard_info': '学生证内页',
            'tab_serviceManagement_allService': '全部服务',
            'tab_serviceManagement_runningService': '运行中',
            'tab_serviceManagement_renewService': '待续费',
            'table_datacenterName': '云服务区',
            'tab_all_order': '全部',
            'table_orderType': '订单类型',
            'table_servicetype': '产品类型',
            'table_beName': '供应商',
            'table_createTime': '创建时间',
            'couponsView_discount': '折',
            'couponsView_usingRules': '使用限制: ',
            'couponsView_validDate': '有效期: ',
            'couponsView_expire_time': '失效时间: ',
            'couponsView_activate_time': '激活时间: ',
            'couponsView_use_time': '使用时间: ',
            'couponsView_to': ' ~ ',
            'couponCenter_no_userule': '无',
            'table_resourceType': '资源类型',
            'table_resource': '资源标识',
            'serviceManagement_table_serviceID': '产品实例ID',
            'table_periodTypeNum': '服务时长',
            'table_expireMode': '到期处理',
            'menu_servicemanager': '周期资源管理',
            'customer_person2_success_tips1_before': '1.您的实名认证申请正在等待人工复核，复核期间不影响您正常使用华为云业务。',
            'customer_person2_success_tips2_before': '2. 如果复核不通过，需要您重新提交实名认证申请，否则将会影响您正常使用华为云业务。',
            'refund_valid_errDetail_required': '输入不能为空',
            'complete_step3page_success_title': '信用卡绑定成功',
            'bename_bp': '子账户',
            'bename_hw': '账户',
            'couponsView_usingConditionStart': '满',
            'couponsView_usingConditionEnd': '可用',
            'couponsView_limitBaseValue': '可用',
            'couponsView_usingConditionAll': '不限金额',
            'consumedetail_productclass': '服务类型: ',
            'couponCenter_t_condition': '适用产品',
            'consumedetail_label_chargemode': '计费模式: ',
            'couponsDetail_expiretime': '有效期至: ',
            'order_detail_create': '资源创建中，请耐心等待。',
            'table_paymentTime': '支付时间',
            'nameAndID': '名称/ID',
            'table_productSpec': '产品规格',
            'new_order_detail_amount': '订单金额',
            'orderpay_need_payamount': '应付金额',
            'retreat_paidAmount': '实付金额',
            'retreat_consumedAmount': '已消费金额',
            'retreat_commissionAmount': '手续费',
            'retreat_retreatAmount': '退订金额: ',
            'retreat_couponAmount': '退还代金券: ',
            'retreat_cashcouponAmount': '退还现金券: ',
            'retreat_amount2': '退还余额:',
            'table_productClass': '产品类型',
            'couponsView_expiration_date': '失效时间',
            'demandList_noPay_success_title2': '订单金额',
            'dealrecords_title_coupons': '优惠券',
            'order_payment_deductions': '折扣',
            'couponsView_unused': '可使用',
            'couponsDetail_title': '优惠券详情',
            'couponsDetail_name': '名称: ',
            'couponsDetail_amount': '余额: ',
            'couponsDetail_deduct': '折扣: ',
            'couponsDetail_status': '状态: ',
            'couponsDetail_ID': 'ID: ',
            'couponsDetail_facevalue': '面值: ',
            'couponsDetail_coupontype': '类型: ',
            'couponCenter_serviceType': '服务类型: ',
            'paybyproxy_detail_paymethod': '计费模式: ',
            'couponsView_applicable_products': '适用产品: ',
            'dealrecords_beName': '供应商: ',
            'couponsDetail_userrule': '使用限制: ',
            'couponsDetail_title_record': '使用记录',
            'complete_step3page_errorbind_title': '信用卡绑定失败',
            'complete_step3page_errorbind_resontitle': '原因可能如下: ',
            'complete_step3page_errorbind_tip1': '1. 所绑的信用卡信息无效/有误：请核实填写信用卡信息、检查信用卡有效性。',
            'complete_step3page_errorbind_tip3': '3. 所绑的卡不是VISA、Master、American Express或JCB卡：请选择这些类型的信用卡。',
            'complete_step3page_errorbind_tip4': '4. 所绑的卡已经在其他华为云账户绑定过：请换为一张未曾在华为云账户上绑定过的卡。',
            'complete_step3page_errorbind_tip5': '5. 预授权申请（1美金）失败：请检查信用卡剩余额度，保证信用卡能正常使用。',
            'complete_step3page_errorbind_tip6': '6. 其他未知原因，请通过工单联系我们。',
            'complete_step3page_newfirst_title2': '2. 目前华为云支持的信用卡类型有VISA、MasterCard、American Express、JCB。',
            'complete_step3page_newfirst_title3': '3. 一个华为云账号可以绑定多张信用卡，一张信用卡仅能绑定一个华为云账户。',
            'complete_step3page_newfirst_title4': '4. 信用卡信息提交后，系统将向信用卡扣除1美元的授权保证金，该授权保证金将会自动返还到您的信用卡中。 ',
            'complete_step3page_newfirst_title5': '5. 绑卡验证有一定的时延。如已绑卡，请耐心等待。',
            'payment_error_createDealFailed': '创建交易失败，请稍后刷新页面重试。',
            'periodType_6': '按需',
            'pak_product': '套餐产品',
            'resource_pkg': '套餐资源',
            'couponCenter_to': '至',
            'customer_realnameauth_desc2_ok': '您已通过华为云实名认证预审',
            'setAutoRenewal': '开通自动续费',
            'open': '开通',
            'modifyAutoRenewal': '修改自动续费',
            'commonBtn_sure': '确定',
            'commonBtn_cancel': '取消',
            'commonBtn_continue': '继续',
            'commonBtn_close': '关闭',
            'modifyRenewTime': '修改续费时长',
            'cancelAutoRenewal': '关闭自动续费',
            'autoRenewal_set_tips': '关闭自动续费后，资源到期将不会被自动续费。',
            'unit_periodType_20': '{1}个月',
            'unit_periodType_20s': '{1}个月',
            'unit_periodType_19': '{1}年',
            'unit_periodType_19s': '{1}年',
            'autoRenewal_set_notice5': '系统将于资源到期前开始尝试扣款，直到资源到期时间，请保持余额充足。',
            'autoRenewal_set_notice2': '前{0}天',
            'renewal_no_subscrition': '您所操作的资源不存在。',
            'renewal_bundle_tips': '续费周期在{1}~{2}{3}可享受套餐优惠，最多可续费{4}次，您已经续费了{5}次。',
            'paybyproxy_agree_success': '操作成功。',
            'paybyproxy_chargemode_0': '包周期',
            'hws.service.type.obs': '对象存储服务',
            'expireMode_0': '保留期后自动删除',
            'expireMode_1': '转按需',
            'expireMode_2': '自动退订',
            'expireMode_3': '自动续费',
            'expireMode_2_1': '自动失效',
            'expireMode_trial': '试用到期后自动删除',
            'usageListStaus': '',
            'unsubscribe_help_url': 'http://support.huaweicloud.com/usermanual-billing/zh-cn_topic_0077628999.html',
            'unsubscribe_help_url_hk': 'http://support-intl.huaweicloud.com/zh-cn/usermanual-billing/zh-cn_topic_0077628999.html',
            'payment_help_url': 'http://support.huaweicloud.com/usermanual-billing/zh-cn_topic_0031512547.html',
            'payment_help_url_hk': 'http://support-intl.huaweicloud.com/zh-cn/usermanual-billing/zh-cn_topic_0031512547.html',
            'cancelOrder_help_url': 'http://support.huaweicloud.com/usermanual-billing/zh-cn_topic_0031465730.html',
            'cancelOrder_help_url_hk': 'http://support-intl.huaweicloud.com/zh-cn/usermanual-billing/zh-cn_topic_0031465730.html',
            'table_currencyAfterDisount_new': '订单金额({n})',
            'advanced_search': '高级搜索',
            'please_select_dc': '请先选择云服务区',
            'search_orderId': '请输入订单号',
            'table_orderId': '订单号',
            'table_status': '订单状态',
            'table_currency_new': '价格({n})',
            'table_operate': '操作',
            'table_organization': '项目组',
            'table_project': '项目',
            'operator_payOrder': '支付',
            'operator_cancelOrder': '取消',
            'operator_OrderDetail': '详情',
            'cancelOrder_confirm': '您确定要取消以下订单吗？',
            'cancelOrder_confirm_detail': '取消操作无法恢复，请谨慎操作！',
            'trail_true': '是',
            'cancelOrder_success': '订单 {0} 已取消。',
            'trail_false': '否',
            'tableLoading': '正在加载...',
            'all': '全部',
            'couponsView_used': '已用完',
            'couponsView_overdue': '已过期',
            'couponsView_allCoupons': '全部类型',
            'couponCenter_couponType_1': '代金券',
            'couponCenter_couponType_4': '现金券',
            'couponCenter_couponType_2': '折扣券',
            'couponCenter_couponType_3': '奖励金券',
            'coupon_limit_discount_tip': '折扣低于{1}不可用',
            'cycleType_all': '',
            'cycleType_0': '包周期',
            'cycleType_1': '包年',
            'cycleType_2': '包月',
            'cycleType_3': '包天',
            'cycleType_4': '包小时',
            'cycleType_5': '按需',
            'cycleType_6': '通用',
            'cycleType_7': '一次性计费',
            'cycleType_8': '预留实例',
            'cycleType_19': '年',
            'cycleType_20': '月',
            'cycleType_24': '天',
            'cycleType_25': '小时',
            'cycleType_new_0': '包周期',
            'cycleType_new_1': '包年',
            'cycleType_new_2': '包月',
            'cycleType_new_3': '包天',
            'cycleType_new_4': '包小时',
            'cycleType_new_5': '按需',
            'cycleType_new_6': '通用',
            'cycleType_new_7': '一次性计费',
            'cycleType_new_8': '预留实例',
            'cycleType_new_19': '包年',
            'cycleType_new_20': '包月',
            'cycleType_new_24': '包天',
            'cycleType_new_25': '包小时',
            'cycleType_new__1': '年',
            'cycleType_new__2': '月',
            'cycleType_new__3': '天',
            'cycleType_new__4': '小时',
            'cycleType_new__19': '年',
            'cycleType_new__20': '月',
            'cycleType_new__24': '天',
            'cycleType_new__25': '小时',
            'All': '全部',
            'couponsView_applicable_products_all': '该服务类型全部产品',
            'all_region_conpus': '不限区域',
            'coupon_split': '、',
            'couponsView_dataCenter_1': '适用{1}云服务区',
            'coupons_usageTime': '可分{n}次抵扣',
            'coupons_limitContract': '不可与商务授权折扣/伙伴授予折扣同享',
            'couponsView_free': '免费体验',
            'promptInfo_overdueSoon': '即将过期',
            'coupons_firstOrderInService': '首次购买使用',
            'promptInfo_CouponFirstUse': '订购时使用；',
            'promptInfo_CouponRenewUse': '续费时使用；',
            'promptInfo_CouponChangeUse': '变更时使用；',
            'promptInfo_CouponNewRenewUse': '订购或续费时使用；',
            'promptInfo_CouponNewChangeUse': '订购或变更时使用；',
            'promptInfo_RenewRenewChangeUse': '续费或变更时使用；',
            'coupons_cycleNum': '周期数量限制: ',
            'orderDevCloudButton': '暂未开放购买',
            'SOURCE_OPERAIION_RECHARGE': '充值',
            'couponsDetail_type_0': '包周期代金券',
            'couponsDetail_type_1': '按需代金券',
            'couponsDetail_type_2': '通用券',
            'periodType_days': '天',
            'periodType_day': '天',
            'periodType_hours': '小时',
            'periodType_minutes': '分钟',
            'periodType_minute': '分钟',
            'periodType_seconds': '秒',
            'periodType_hour': '小时',
            'periodType_second': '秒',
            'msgCodeSendFailed': '验证码发送失败，请重新获取。',
            'complete_step2form_realName_label': '姓名',
            'complete_step2form_entRealName_label': '联系人姓名',
            'workorder_system_busy': '系统繁忙，请稍后重试。',
            'contryCode': '+86(中国)',
            'emptyTxt': '该项不能为空且不能包含空格。',
            'validPhone': '请输入有效的手机号码。',
            'customer_realnameauth_bankauth_tatted_placeholder': '请输入6位数字的验证码',
            'address_modify_address1': '地址行1',
            'address_modify_address2': '地址行2',
            'address_modify_city': '城市',
            'complete_step1form_regmobilePhone_helptip': '需绑定账号注册地的手机号',
            'complete_step1form_SMSCoce_label': '短信验证码',
            'complete_step2form_customerType_label': '账号类型',
            'complete_step2form_corpName_label': '公司名称',
            'complete_step2form_job_label': '职位',
            'account_info_currency_placehoder': '付款货币',
            'complete_step2form_appIndustry_label': '应用行业',
            'complete_step1form_getSMSCoce_label': '获取验证码',
            'mobile_valid': '该手机号码注册的账号数已经达到系统允许的最大值，请您更换手机号码。',
            'customer_enterpriseauth_btn_stepnext': '下一步',
            'picRandomCodeError': '验证码错误，请重新输入。',
            'complete_step3page_first_btntext': '去绑卡',
            'complete_step3page_rebindCard_btntext': '重新绑卡',
            'complete_step3page_success_goback_btntext': '返回页面',
            'ipsPay_wxpay_codeerror': '支付超时，请点击确定重试！',
            'resource_0': '--',
            'resource_1': '云主机',
            'resource_2': '桌面云主机',
            'resource_3': '云硬盘',
            'resource_4': '云存储',
            'resource_5': '公网IP',
            'resource_6': 'UC网络会议',
            'resource_7': '虚拟主机',
            'resource_8': 'OVP',
            'resource_9': 'EMR',
            'resource_10': 'AME',
            'resource_11': 'CDN',
            'resource_12': '流量带宽',
            'resource_13': 'OBS线下数据传输',
            'resource_14': 'EC2按需',
            'resource_15': '镜像',
            'resource_16': '托管设备',
            'resource_17': '租赁设备',
            'resource_18': '弹性带宽',
            'resource_19': '固定带宽',
            'resource_20': 'ISV应用',
            'resource_21': 'ELB',
            'resource_22': '私网IP',
            'resource_23': 'VLAN资源',
            'resource_24': '镜像磁盘空间',
            'resource_25': '--',
            'resource_26': '瘦终端',
            'resource_27': 'VDC计算节点',
            'resource_28': 'RDS',
            'resource_29': '云硬盘备份',
            'resource_30': 'VPC基础套件',
            'resource_31': 'Redis',
            'resource_32': 'VPC',
            'resource_34': '容器',
            'resource_35': '开发测试云',
            'resource_36': 'VPN',
            'resource_37': 'RDS数据库',
            'resource_39': '通信平台云',
            'resource_40': '云桌面管理',
            'resource_41': '云桌面套餐',
            'resource_42': '园区桌面套餐',
            'resource_52': '专线初装费',
            'resource_53': '专线端口类型',
            'resource_54': '专线带宽',
            'resource_101': '高性能计算',
            'resource_301': '项目管理',
            'resource_302': '配置管理',
            'resource_303': '代码检查',
            'resource_304': '编译构建',
            'resource_305': '开发云套餐',
            'resource_306': '测试管理',
            'resource_307': '发布管理',
            'resource_1000': '通用规格',
            'resource_1001': 'VDC纯主机',
            'resource_1002': 'VDC纯硬盘',
            'resource_1003': 'VDC纯镜像',
            'resource_9999': '虚拟数据中心(专属云)',
            'hws.resource.type.bandwidth': '固定带宽',
            'system_reason': '您绑定的华为云账号已成功成为商业合作伙伴，请重新登录',
            'system_but_relogin': '重新登录',
            'authentication_mfa_tip': '请输出您从Google Authenticator应用程序中获取的6位MFA验证码。',
            'orderPay_paySure': '确认',
            'unpaid_month': '账单月',
            'unpaid_amount': '应还金额({n})',
            'remain_unpaid_amount': '剩余应还金额',
            'month_end_exchange_rate': '账单月底日汇率',
            'unpaid_status': '逾期状态',
            'unpaid_date': '还款截止日期',
            'unpaid_title': '未还清账单',
            'unpaid_tip': '逾期未还会影响您在华为云的信用，请及时补缴逾期欠款避免影响您信用额度的使用。',
            'unpaid_amount_nounit': '应还金额',
            'unpaid_tip1': '请立即',
            'unpaid_tip1_en': '还款',
            'unpaid_tipNew': '充值还款',
            'unpaid_0': '逾期',
            'unpaid_1': '未逾期',
            'unpaid_duetime_tip': '其中逾期: ',
            'unpaid_paid_tip1': '请于还款日{2}前{1}还款',
            'close': '关闭',
            'openRegin_open': '开通海外云业务',
            'openRegin_NOAUTH': '开通海外云前，您必须先进行实名认证。',
            'openRegin_AUTHING': '开通申请正在审批中，1个工作日内审批完成',
            'openRegin_AUTHNOPASS': '开通申请<span class=\'common-red\'>审批不通过</span>！华为云客服人员将与您联系。',
            'openRegin_ACTIVE': '开通申请已通过',
            'couponCenter_region': '云服务区: ',
            'openRegin_NOACTIVE': '尊敬的华为云客户，您开通海外云的申请已经审批通过，账号正在激活中，有疑问请咨询客服。',
            'openRegin_NOAPPLY_0': '尊敬的华为云客户，欢迎您访问海外云欧洲、拉美等区域云服务',
            'openRegin_NOAPPLY_1': '1、海外云包括以下云服务区：',
            'openRegin_NOAPPLY_2': '2、您需遵从当地相关法律以及数据隐私保护政策。',
            'openRegin_NOAPPLY_3': '3、申请提交后，1个工作日内审批完成。',
            'accountviw_guidance_tip1': '用户中心全面改版',
            'accountviw_guidance_tip2': '原用户中心功能拆分到“费用中心”、“服务支持中心”与“账号中心”',
            'accountviw_guidance_tip3': '点击“费用”进入费用中心，您可以进行续费、订单管理、查看消费记录等',
            'accountviw_guidance_tip4': '点击“工单”进入服务支持中心，您可以提交工单、查看公测申请状态以及参与问卷调查等',
            'accountviw_guidance_tip5': '点击您的用户名进入账号中心，您可以管理账号信息、进行实名认证、推荐用户等',
            'customer_realnameauth_button_nextstep': '下一步',
            'orderWidget_finishOrder': '完成',
            'consumebill_newtitle': '查看项目财务信息',
            'allview_help_url_hk': 'https://support-intl.huaweicloud.com/zh-cn/usermanual-billing/zh-cn_topic_0031465732.html',
            'allview_help_url': 'https://support.huaweicloud.com/usermanual-billing/zh-cn_topic_0031465732.html',
            'help_tip_title': '帮助',
            'account_view_top_tip': '您是伙伴转售类客户，费用中心的消费金额及相关统计，均是基于华为云官网价计算，用于云服务资源用量参考，并非您真实要支付的金额。请联系合作伙伴获取您实际消费的账单及明细信息。',
            'balanceview_withdrawals': '提现',
            'accountview_balancePost': '可用额度',
            'accountview_balance': '可用额度',
            'accountview_account_recharge': '现金账户余额',
            'consumebill_table_debt_no': '欠费金额',
            'accountview_account_toupbanlance': '现金账户余额',
            'accountview_account_presentbanlance': '奖励余额',
            'accountview_credit_title': '授信额度',
            'accountview_credit_title_hk': '信用额度(先用后还)',
            'allview_credit_tip_hk': '',
            'account_view_tip_fortype3': '如授信额度不足或需要还款，请联系您的合作伙伴为您调整额度或者还款',
            'accountviw_owe_tip_1': '您已经处于欠款状态，相关资源可能会被停止服务或逾期释放，请及时充值。',
            'allview_owe_detail': '欠费详情',
            'accountviw_owe_tip_2': '您已经处于欠款状态，相关资源可能会被停止服务或逾期释放，请及时联系您的合作伙伴为您调账。',
            'allview_owe_tip_after': '请联系您的主账号为您还款',
            'allview_owe_tip_inner': '请联系您的客户经理还款',
            'dealrecords_QueryTrade_RECHARGE': '充值',
            'accountview_payment': '本月消费',
            'overview_card_coupon': '卡券',
            'accountviw_couponsmenual': '张',
            'allview_willexpirecoupon': '7天内到期: ',
            'promptInfo_buyNow': '立即使用',
            'accountview_invoice': '可开票',
            'accountview_create_invoice': '去开发票',
            'accountviw_waitpay_order': '订单',
            'accountviw_waitforpay': '个待支付',
            'pay': '立即支付',
            'accountview_renewal_source': '续费资源',
            'accountview_business_num': '个',
            'accountview_renewal': '立即续费',
            'balance_advance_open': '预警阈值: ',
            'accountview_balanceWarn_tip': '当您的可用额度、通用代金券和现金券的总金额低于预警阈值时，系统自动发送短信通知提醒。',
            'accountview_balanceWarn_tip_type3': '当您的可用额度、通用代金券的总金额低于预警阈值时，系统自动发送短信通知提醒。',
            'retreat_success_description_3_2': '',
            'balanceview_chargeback_strategy_title': '按需扣费策略',
            'agentPay_phoneChange': '修改手机号码',
            'bp_msg_validator_capthca': '请输入正确的短信验证码。',
            'calllink_deductcheck': '余额查询',
            'menu_renewalmanager': '续费管理',
            'billingAnalysis_title': '账单分析',
            'couponCenter_couponType_4s': '现金券',
            'order_payment_contract_discount_new': '商务折扣',
            'partner_discount': '伙伴授予折扣',
            'creditsList_title': '支付方式',
            'recharge_success_tip': '本次充值已成功，充值金额会在几分钟内到账，请留意通知短信及时查看充值到账情况。',
            'recharge_success_tip_hk': '本次充值已成功，充值金额会在3分钟内到账，请留意通知和短信及时查看充值到账情况。',
            'bp_submitBindSuccess_btn': '我已了解',
            'bp_recharge_success_tip': '转账成功，请及时联系您的合作伙伴为您调账已完成充值。<br /><a href=\'#/userindex/tomyPartner\'>查看合作伙伴信息</a>',
            'bi_overview': '总览',
            'bi_balanceAdvance': '余额预警',
            'bi_open': '开通',
            'bi_modify': '修改',
            'accountview_balance_tip_nocredit_en': '可用额度=现金余额-欠费金额',
            'accountview_balance_tip': '可用额度=现金余额+授信额度-未结清信用额度。',
            'couponsView_cash_tip': '现金券是代替现金消费的一种票据凭证，有失效时间限制。',
            'accountview_renewal_source_tip': '指您账号当前可按消费索取发票金额。',
            'fillInputInfo': '立即完善',
            'showComplete_tip': '使用云服务之前需完善帐号信息，并绑定付款方式。为避免影响使用，请您{n}。',
            'balance_advance': '余额预警 ',
            'balance_advance_hk': '信用额度预警 ',
            'accountview_account_unclearbanlance_hk': '未结清信用额度(应还金额+本月未出账单金额)',
            'accountview_account_unclearbanlance': '未结清信用额度',
            'bi_recharge': '充值',
            'bi_refund': '提现',
            'bi_ask_invoice': '索取发票',
            'bi_dealRecords': '收支明细',
            'bi_adjust_records': '调账记录',
            'bi_account_detail': '可用额度详情',
            'bi_coupon': '优惠券',
            'bi_viewAllCoupons': '查看全部',
            'bi_cashcoupon': '现金券',
            'bi_consumedetails': '消费明细',
            'bi_business': '商务',
            'bi_business_new': '续费资源',
            'bi_strategy': '按需扣费策略',
            'bi_consumSummary': '消费汇总',
            'bi_close': '关闭',
            'bi_owe_detail': '欠费详情',
            'bi_hwBe': '华为云账户',
            'bi_partnerBe': '合作伙伴子账户',
            'recharge_bp_tips1_hk': '请线下联系您的合作伙伴调账以完成还款',
            'recharge_bp_tips1': '请联系您的<a href=\'#/accountindex/tomyPartner\'>合作伙伴</a>拨款',
            'allview_willexpireSorce_30day': '30日内到期资源',
            'allview_willexpireSorce_15day': '15日内到期资源',
            'allview_willexpireSorce_7day': '7日内到期资源',
            'benefitsDetail_table2_td_to': '至',
            'customer_realnameauth_status_null': '未实名认证',
            'customer_realnameauth_button_toauth': '马上认证',
            'customer_realnameauth_tips_alarm_authing': '您的实名认证正在审核中，部分功能将受到影响，请耐心等待。',
            'customer_realnameauth_button_viewdetail': '查看',
            'customer_realnameauth_status_bankcoding': '企业认证信息已提交，待提交验证码',
            'customer_realnameauth_status_nok': '实名认证审核不通过',
            'allview_repay': '还款',
            'accountview_balance_tip_en': '可用额度=现金余额+可用信用额度-未结清费用-欠费金额',
            'accountviw_credit': '授信额度: ',
            'account_view_amounttip_fortype3': '您可以开通价值{n}的资源',
            'arrears_information_be_tips': '您的{0}账户已欠费{1}，{2}账户已欠费{3}。',
            'arrears_information_tips': '您的{0}账户已欠费{1}。',
            'allview_yes': '确认',
            'allview_no': '取消',
            'accountview_balance_tip_inner_en': '可用额度=可用信用额度-未结清费用-欠费金额',
            'accountview_recharge_tip_en': '如需要还款请联系您的客户经理。',
            'account_balance_be': '{n}账户余额',
            'userindex_distributor': '商业合作伙伴',
            'userindex_hw_service': '华为云',
            'accountview_balance_tip_type3': '可用额度=可用信用额度-欠费金额。',
            'allview_deduct_set_tip': '您当前未设置按需资源扣费账户。',
            'allview_deduct_set_tip2': '为避免账户欠费导致资源冻结，建议您将已开通、新开通的按需资源扣费账户设置为合作伙伴子账户。',
            'allview_deduct_set_tip_btn1': '去设置',
            'couponActivity_buyLater': '以后再说',
            'balanceview_chargeback_select_1': '华为云账户',
            'balanceview_chargeback_select_0': '商业合作伙伴消费账户',
            'balanceview_chargeback_fail1': '余额不足{n}，请先充值后再修改扣费策略！',
            'balanceview_chargeback_fail2': '余额不足，请先充值后再修改扣费策略！',
            'balanceview_chargeback_titleTip': '提示: ',
            'balanceview_chargeback_strategy_modify_fail': '按需扣费策略修改失败',
            'balanceview_chargeback_strategy_modify_sec': '按需扣费策略修改成功',
            'accountview_recharge_tip': '如需要充值请联系您的客户经理。',
            'openRegin_fail': '开通申请提交失败。',
            'balanceview_chargeback_phone': '手机号码 : ',
            'agentPay_verifyCode': '短信验证码: ',
            'balanceview_chargeback_captchaTip': '{n}秒后重新获取',
            'modifyDeductTips': '您已欠费，不允许修改。请先充值后再调整扣费策略。',
            'customer_realnameauth_tips_beta': '您尚未实名认证，申请公测产品/服务需要先进行实名认证。',
            'customer_enterpriseauth_btn_immediately_auth': '立即认证',
            'beta_applied': '您已提交此服务的公测申请，无需重复申请',
            'betaManagement_ManagementTitle': '我的公测',
            'mypackage_goConsole': '前往控制台',
            'betaManagement_modifyPersonalInformation': '修改个人信息',
            'betaManagement_modifysuccess': '修改成功',
            'couponCenter_empty_tip': '暂无数据',
            'workorder_createtime_select_0': '所有时间',
            'workorder_createtime_select_1': '最近七天',
            'workorder_createtime_select_2': '最近一个月',
            'workorder_createtime_select_3': '最近三个月',
            'workorder_createtime_select_4': '最近六个月',
            'workorder_createtime_select_5': '自定义时间段',
            'betaManagement_tipDes': '您可以简单描述下您目前项目及业务的实际情况，请输入至少15个字。',
            'workorder_noempty': '输入不能为空。',
            'feedback_email_label': '电子邮箱: ',
            'validEmail': '请输入有效的邮箱地址。',
            'beta_aotoGo': '{n}秒后自动进入我的公测',
            'betaManagement_select': '请选择',
            'betaManagement_input': '请输入',
            'agentPay_selectTip': '请选择',
            'betaManagement_serviceName': '产品/服务',
            'betaManagement_status': '公测状态',
            'usage_detail': '使用量详情',
            'privileges_packageName': '套餐名称',
            'devcloud_confirmorder_region': '云服务区',
            'myresource_title': '我的资源',
            'myresource_description': '我的资源展示您当前在华为云创建的资源信息，包括所在的云服务区、续费提醒等。',
            'myresource_toExpire': '到期状态:',
            'myresource_waittingRenew': '待续费',
            'myresource_renewal_tip': '查看更多待续费资源，请进入',
            'renewalManagement_page_title': '续费管理',
            'myresource_nodata_tip1': '尚未购买相关资源',
            'myresource_nodata_tip2': '当前"我的资源" 暂无法覆盖到全部服务',
            'myresource_nodata_tip3': '可能导致部分服务购买后无法显示',
            'myresource_nodata_tip4': '查看已支持的服务',
            'resourceType': '',
            'myresource_cycle': '包年包月',
            'myresource_demand': '按需',
            'myresource_created': '已创建',
            'myresource_quotaapply': '配额已满，点击申请',
            'myresource_tip': '我的资源暂未覆盖所有云服务<br/>将会逐渐完善<br/>',
            'myresource_supportService': '已支持的服务',
            'solution_name': '我的解决方案',
            'solution_operate_deploy': '部署',
            'devcloud_confirmorder': '订单详情',
            'workorder_col_title_status': '状态',
            'solution_type': '类型',
            'table_expireTime': '到期时间',
            'category': '',
            'service': '',
            'package_name': '我的套餐',
            'mypackage_help_tip1': '1、我的套餐目前仅为部分按需服务提供按需套餐包。',
            'mypackage_help_tip2': '2、您的按需资源会优先扣除已购买的按需套餐包，超出的部分以按量付费的方式进行结算。按需付费的价格请以各个云服务为准。',
            'mypackage_help_tip3': '查看产品价格详情',
            'mypackage_help_tip4': '3、您套餐内的用量超过您所购买套餐的80%时，华为云会通过短信的方式通知您。您可以通过再次购买同样的套餐以及时补充免费用量。',
            'packagewarning_help_tip1': '1.目前仅支持自定义设置动态bgp包月流量套餐的剩余使用量预警。（其他类型套餐包默认在剩余使用量达到20%、0%时进行提醒）',
            'packagewarning_help_tip2': '2.当套餐包剩余使用量达到预警阀值，将会给您发送短信、邮件提醒。（当有多个套餐包叠加使用时，会叠加统计剩余使用量)',
            'packagewarning_help_tip3': '3.套餐包新购、续费后总量增加时，重新触发预警判断。',
            'packagewarning_help_tip4': '4.使用量只适用于某个区域时，不同区域会分别统计。',
            'consumedetail_tabtitle_useage': '使用量',
            'consumeDetail_consumeType2': '续费',
            'consumeDetail_consumeType1': '新购',
            'consumedetail_label_createtime': '生效时间: ',
            'consumebill_nodata': '当前没有数据',
            'devcloud_confirmorder_detail_service': '服务',
            'usage_name': '套餐项目名称',
            'usage_remaining': '剩余使用量(使用量/总量)',
            'mypackage_detail_title': '使用趋势',
            'usage_total': '总量',
            'mypackage_help_url2': 'http://support.huaweicloud.com/pro_price/',
            'mypackage_help_url2_hk': 'http://intl.huaweicloud.com/zh-cn/price_detail.html',
            'usage_remainingAmount': '剩余量',
            'table_remark': '备注',
            'paybyproxy_table_operate': '操作',
            'bi_myPackage': '我的套餐',
            'bi_dataCenter': '云服务区',
            'bi_package_name': '套餐名称',
            'mypackage_select_tip': '全部资源包',
            'package_search_name_tip': '请输入套餐名称',
            'mypackage_btn_export': '导出使用明细',
            'no_pkg_record': '暂无使用中套餐',
            'package_remark_1': '使用量将于每小时统计一次',
            'package_remark_2': '使用量将于每天清零一次',
            'package_remark_3': '使用量将于每周清零一次',
            'package_remark_4': '使用量将于每月清零一次',
            'package_remark_5': '使用量将于每年清零一次',
            'quotaReuse_tips': '已使用量将在{n}清零',
            'emptyTable': '暂无数据',
            'orderType_1': '新购',
            'mypackage_tip_usedup_1': '该套餐包内有使用量即将使用完，请及时{n}以及时补充使用量。',
            'mypackage_tip_usedup_2': '该套餐包内有使用量即将使用完，请及时{n}套餐包以补充免费使用量。',
            'mypackage_tip_expire_1': '该套餐包即将到期，请及时<a target=\'_blank\' href=\'#/renewal?subscriptionId={m}&isFrom=expense\'>续费</a>以及时补充使用量。',
            'mypackage_tip_expire_2': '该套餐包即将到期，请及时{n}套餐包以补充免费使用量。',
            'solution_status_tip': '',
            'shop_solution_program': '电商解决方案',
            'hpc_solution_program': 'HPC解决方案',
            'no_solution_record': '暂无解决方案',
            'customer_realnameauth_freeze_tips_alarm': '您的账号已经被冻结，部分功能将受到影响。',
            'customer_realnameauth_title': '实名认证',
            'help_url_realnameauth': 'http://support.huaweicloud.com/usermanual-account/zh-cn_topic_0057005689.html',
            'help_url_realnameauth_hk': 'http://support-intl.huaweicloud.com/zh-cn/usermanual-account/zh-cn_topic_0119621530.html',
            'customer_realnameauth_but_gohelp': '这里',
            'customer_studentauth_button_toauth': '立即认证',
            'customer_realnameauth_tips_alarm1': '【重要通知】根据国家法律规定，使用云服务的用户必须完成实名认证。为避免影响使用，请您{0}。',
            'customer_realnameauth_link_goAuth': '前往{0}',
            'serviceTypeCode': '',
            'productClass_1': '对象存储服务',
            'productClass_2': '云桌面',
            'productClass_3': '云存储线下服务',
            'productClass_4': '托管产品',
            'productClass_5': '租赁产品',
            'productClass_6': '弹性计算云',
            'productClass_7': '云会议',
            'productClass_8': '负载均衡',
            'productClass_9': '普通产品',
            'productClass_10': '弹性云主机',
            'productClass_11': '云硬盘备份',
            'productClass_12': '云托管',
            'productClass_13': '套餐业务',
            'productClass_14': '云市场',
            'productClass_15': '虚拟数据中心',
            'productClass_16': '关系型数据库',
            'productClass_17': '虚拟私有云',
            'productClass_18': '大数据',
            'productClass_19': '线下专属云',
            'productClass_100': '高性能计算',
            'productClass_-99': '大订单',
            'consumedetail_servicetype_all': '全部',
            'bankId_icbc': '中国工商银行股份有限公司深圳华为支行',
            'bankId_boc': '中国银行',
            'bankId_ccb': '建设银行',
            'bankId_cmb': '招商银行',
            'bankId_others': '其他银行',
            'enterPrise_tree_all': '全部',
            'consume_1': '1月',
            'consume_2': '2月',
            'consume_3': '3月',
            'consume_4': '4月',
            'consume_5': '5月',
            'consume_6': '6月',
            'consume_7': '7月',
            'consume_8': '8月',
            'consume_9': '9月',
            'consume_10': '10月',
            'consume_11': '11月',
            'consume_12': '12月',
            'errorCode': '异常码',
            'errorMsg': '异常描述',
            'customer_studentauth_education_college': '专科',
            'customer_studentauth_education_bachelor': '本科',
            'customer_studentauth_education_master': '硕士',
            'customer_studentauth_education_doctor': '博士',
            'customer_realnameauth_perauth_idtype_idcard': '中华人民共和国居民身份证',
            'customer_realnameauth_perauth_idtype_passport': '护照',
            'customer_realnameauth_perauth_idtype_HKAndMacauPass': '港澳居民来往内地通行证',
            'customer_realnameauth_perauth_idtype_TaiwanPass': '台湾居民来往大陆通行证',
            'customer_realnameauth_perauth_idtype_gangaoID': '港澳居民居住证',
            'customer_realnameauth_perauth_idtype_taiwanID': '台湾居民居住证',
            'customer_realnameauth_perauth_idtype_driverLicense': '中国以外驾照',
            'date_expiredTime': '到期时间',
            'customTime': '自定义时间',
            'authentication': '身份认证',
            'authentication_tip': '为了您的账户安全，完成敏感操作需进行身份认证',
            'authentication_email_error_tip': '邮箱验证码有误，请输入正确验证码。',
            'authentication_sms_error_tip': '短信验证码有误，请输入正确验证码。',
            'authentication_mfa_error_tip': 'MFA验证码有误，请输入正确验证码。',
            'authentication_bindEmail': '绑定邮箱',
            'authentication_changeEmail': '切换邮箱',
            'authentication_email_placeholder': '请输入邮箱验证码',
            'email_code': '邮箱验证码',
            'authentication_bindPhone': '绑定手机',
            'authentication_changePhone': '切换手机',
            'authentication_sms_placeholder': '请输入短信验证码',
            'sms_code': '短信验证码',
            'authentication_servicetype': '设备类型',
            'authentication_servicefmatype': '虚拟FMA设备',
            'authentication_mfa_placeholder': '请输入MFA验证码',
            'mfa_code': 'MFA验证码',
            'serviceManagement_expiredTime': '到期时间: ',
            'recharge_success_tipTitle': '本次充值已成功',
            'recharge_success_tipContent': '充值金额会在几分钟内到账，请留意通知短信及时查看充值到账情况。',
            'recharge_success_tipContent_hk': '充值金额会在3分钟内到账，请留意通知和短信及时查看充值到账情况。',
            'recharge_success_title_tip': '提示',
            'path': '',
            'commonselect_businessClass': [ '--请选择所属行业--', '移动应用服务', '社交', '在线教育', '电子商务', '精准营销', '网络游戏', '在线视频', '互联网金融', '互联网-其他', '媒体•出版•文化传播', 'IT服务•系统集成', '计算机软件', '计算机硬件•网络设备', '软件外包', '批发•零售', '银行', '保险', '基金•证券•期货•投资', '政府•事业单位•非营利机构', '电子•微电子', '通信（设备、运营、增值服务）', '娱乐•运动•休闲', '教育•培训•科研•院校', '医疗•保健•美容•卫生服务', '旅游•酒店•餐饮服务', '交通运输•物流', '能源（电力、石油）•水利', '家电业', '制药•生物工程', '房地产服务（中介•物业管理•监理•设计院）', '贸易•进出口', '广告•会展•公关', '专业服务（咨询、财会、法律等）', '房地产开发•建筑与工程', '快速消费品（食品、饮料、日化、烟酒等）', '家居•室内设计•装潢', '办公设备•用品', '医疗设备•器械', '汽车•摩托车（制造、维护、配件、销售、服务）', '环保', '印刷•包装•造纸', '中介服务（人才、商标、专利）', '仪器•仪表•工业自动化•电气', '耐用消费品（服饰、纺织、家具）', '机械制造•机电•重工', '原材料及加工（金属、塑料、陶瓷、玻璃、橡胶、木材、建材等）', '化工', '采掘•冶炼', '国防•军队', '渲染', '农•林•牧•渔', '航天•航空', '其它' ],
            'commonselect_entScaleData': [ '请选择企业规模', '50人以下', '50-100人', '100-200人', '200-500人', '500人以上' ],
            'commonselect_appSceneData': [ '请选择应用场景', 'Web', '移动与社交应用程序', '数字媒体与市场营销', '企业应用、游戏等程序开发', '备份、存档与灾难恢复', '大数据与HPC', '电子商务', '其他' ],
            'commonselect_busStatusData': [ '请选择业务当前阶段', '开发', '测试', '试运行', '正式运营' ],
            'commonselect_devProData': [ '请选择研发人员比例', '0 ~ 10%', '10% ~ 20%', '20% ~ 30%', '30% ~ 40%', '40% ~ 50%', '50% ~ 60%', '60% ~ 70%', '70% ~ 80%' ],
            'common_click_here': '点击这里',
            'dev_term_notopen_label': '注意: 开通校园套餐前，需开通相同地域(中国华北区1或中国华东区2)的基础套餐。请{0}开通后，返回本页面购买。',
            'not_allowed_unsubscribe_tips': '该按需套餐包不可退订',
            'createTimeSelect': [ '近三个月', '近六个月', '近一年', '近三年', '自定义时间段' ],
            'isUnsubscribedSelect': [ '全部', '未退订', '已退订' ],
            'consume_status_1': '待处理',
            'consume_status_2': '已支付',
            'consume_status_3': '欠费',
            'consume_status_4': '已取消',
            'consume_status_5': '内部结算',
            'consume_status_6': '未结算',
            'consume_status_2_3': '已退订',
            'accountView_refund_tip': '伙伴账户余额不支持提现',
            'package_project_all': '不限（全部套餐包）',
            'package_project_allpro': '所有项目',
            'package_project_label': '适用企业项目: ',
            'package_name_label': '套餐包名称:',
            'return_old': '返回旧版',
            'return_new': '体验新版',
            'fee_tag_title': '费用分配标签',
            'fee_RI_title': '预留实例报告',
            'CostBudgeting': '费用预算',
            'nvl_bill_deal_menu_title': '资金管理',
            'nvl_bill_title': '费用账单',
            'authentication_listTitle': '云闪贷认证',
            'loanList_listTitle': '贷款管理',
            'loanList_Management': '云闪贷',
            'loanList_Management_tip': '云闪贷是华为云与中国工商银行合作推出的一项贷款服务，给在华为云实名认证后的小微企业提供灵活便捷的在线分期付款服务，具有“开通易、额度高、费率低、放款快”等优势。客户通过少量现金流即可享受众多云上服务，旨在推进更多小微企业普惠上云。',
            'allview_payCash': '现金支付',
            'allview_payCoupon': '代金券抵扣',
            'allview_amount': '总计：',
            'allview_estimatedAmount_legend': '预估金额(不区分现金和代金券)',
            'allview_estimatedAmount': '预估金额',
            'package_remainWarning': '剩余使用量预警',
            'package_remainUseThreshold': '剩余使用量阀值',
            'switch': '开关',
            'renew_retention': '已冻结',
            'not_permissions_tip': '请联系管理员给您配置action: {n}',
            'package_faq_help': '常见问题',
            'claimlist_menu_title': '汇款认领',
            'menu_preference': '首选项',
            'menu_consumeQuota': '消费配额',
            'menu_resourcePackages': '资源包',
            '/userindex/billPreference': '费用中心-账单设置',
            'maintainpage_tips': '该页面处于维护状态，请稍后刷新页面再试或联系客服' + customiseCode[customiseVer].pubParams.globalPhone + '。',
            'tiIntro_title': '“免费套餐”菜单位置调整',
            'tiIntro_content': '“免费套餐”菜单从一级菜单移至“优惠与折扣”内，在此刻查看免费套餐权益及余量',
            'tiIntro_button': '我知道了',
            'unidownload_button': '关闭当前页',
            'unidownload_success': '下载成功',
            'unidownload_fail': '下载失败',
            'unidownload_downloaded': '已下载大小: ',
            'console_term_tipInfo_IE_label': 'Edge93 + 以上版本',
            'console_term_tipInfo_Chrome_label': 'Chrome93 + 以上版本',
            'console_term_tipInfo_Firefox_label': 'FireFox91 + 以上版本',
            'console_term_title_label': '用户中心'
        };
    });
    define('app/business/controllers/mIndexCtrl', [ 'language/errMsg', 'language/v1r2', 'language/usercenter', 'language/user', 'app/business/controllers/consoleDataCache', 'app/business/controllers/commons' ], function(i18err, i18v1r2, i18user, i18new) {
        return [ '$rootScope', '$scope', '$timeout', '$state', 'frameworkService', '$location', 'camel', 'csbMessage', '$filter', function($rootScope, $scope, $timeout, $state, frameworkService, $location, camel, csbMessage, $filter) {
            function refreshQiankunAppShow() {
                if (!window.ConsoleCommon) return;
                window.ConsoleCommon.isQiankunApp($location.path()) ? $rootScope.showNg9Single = !0 : $rootScope.showNg9Single = !1;
            }
            function callEvent() {
                var dmpJsonParam = {};
                dmpJsonParam.D15 = 'UC';
                setTimeout(function() {
                    onPageView($location.path(), dmpJsonParam);
                }, 0);
            }
            function getUrlParm() {
                var returnParam = $location.search(), urlParm = '';
                $.each(returnParam, function(key, value) {
                    key && (urlParm += urlParm ? '&' + key + '=' + value : key + '=' + value);
                });
                return urlParm = urlParm ? '?' + urlParm : '';
            }
            function getNewMobileUrl(path, urlParm) {
                var accountTinyMobileRounter = window.systemConfig && window.systemConfig.accountTinyMobileRounter, accountTinyMobilePages = {};
                try {
                    accountTinyMobilePages = JSON.parse(accountTinyMobileRounter);
                } catch (e) {
                    accountTinyMobilePages = {};
                }
                if (accountTinyMobilePages[path]) return window.location.replace(window.appWebPath + '/accountcenter/mobile/#' + accountTinyMobilePages[path] + urlParm), 
                1;
                return;
            }
            function checkUrl(path) {
                path = function(currentUrl) {
                    if (versionRule.black[customiseVer] && 0 <= $.inArray(currentUrl, versionRule.black[customiseVer])) return 'undefined';
                    if ($scope.isVendorSubUser && $.inArray(currentUrl, roleRule.white.isVendorSubUser) < 0) return !1;
                    if (Number($rootScope.bindType) === BINDTYPE_PARTNER && -1 < $.inArray(currentUrl, roleRule.black.isBindPartner)) return !1;
                    return !0;
                }(path);
                if (!1 === path) return checkUrlForAccessDeclined(), 1;
                if ('undefined' === path) return window.location.href = window.location.pathname + '?ttr=' + Date.now() + '#/userindex/allview', 
                1;
                return;
            }
            function checkMaintainPage(path) {
                var maintainPages = window.systemConfig && window.systemConfig.maintainPages;
                if (maintainPages) {
                    try {
                        maintainPages = JSON.parse(maintainPages);
                    } catch (e) {
                        maintainPages = {};
                    }
                    if (maintainPages[path]) {
                        $rootScope.maintainBeforePath = path;
                        $timeout(function() {
                            $location.path(maintainPages[path]).replace().search({
                                'pageName': path
                            });
                        }, 300);
                        return 1;
                    }
                }
                return;
            }
            function checkEveryStep(toParams) {
                var path = $location.path();
                if (function(path, toParams) {
                    var urlParm = getUrlParm();
                    if (isCallFromMobile && getNewMobileUrl(path, urlParm)) return;
                    if (isCallFromMobile && ('/accountindex/realNameAuth' === path || '/accountindex/realNameAuthing' === path) && 'zh-cn' === 'zh-cn' && customiseVer === VERSION_KEY_CHINA) return window.location.replace(window.appWebPath + '/mobile/#/mobile/activityPersonalAuth' + urlParm), 
                    1;
                    if (isCallFromMobile && 'zh-cn' === 'zh-cn' && '/accountIndex/confirmSigningEntity' === path && customiseVer === VERSION_KEY_CHINA) return window.location.replace(window.appWebPath + '/mobile/#/mobile/confirmSigningEntity' + urlParm), 
                    1;
                    if (isCallFromMobile && '/complete' === path && customiseVer === VERSION_KEY_HK) return window.location.replace(window.appWebPath + '/mobile/#/mobile/mComplete' + urlParm), 
                    1;
                    if (isCallFromMobile && '/modifySignEntity' === path && customiseVer === VERSION_KEY_HK) return window.location.replace(window.appWebPath + '/mobile/#/mobile/mModifySignEntity' + urlParm), 
                    1;
                    if (isCallFromMobile && '/accountindex/studentAuth' === path && 'zh-cn' === 'zh-cn') return window.location.replace(window.appWebPath + '/mobile/#/mobile/student' + urlParm), 
                    1;
                    if (!isSupportWx && isCallFromMobile && '/userindex/balanceRecharge' === path && 'zh-cn' === 'zh-cn' && (!toParams || !toParams.mybeId)) return window.location.replace(window.appWebPath + '/mobile/?hws_route_url=mobile/recharge'), 
                    1;
                    return;
                }(path, toParams)) return;
                if (checkMaintainPage(path)) return;
                if (function(path) {
                    var i, length;
                    if (0 === path.indexOf('/enterpriseindex/allview')) return;
                    i = 0;
                    length = roleBlackList.length;
                    for (;i < length; i++) if (0 <= $.inArray(roleBlackList[i], currentRoleTags)) return checkUrlForAccessDeclined(), 
                    1;
                    i = 0;
                    length = roleWhiteList.length;
                    for (;i < length; i++) if (0 <= $.inArray(roleWhiteList[i], currentRoleTags)) return;
                    checkUrlForAccessDeclined();
                    return 1;
                }(path)) return;
                if (checkUrl(path)) return;
                currentUrl = path, $scope.$watch('realnameStatus', function(newV, oldV) {
                    (!0 === newV || 0 <= $.inArray('op_suspended', currentRoleTags)) && 0 <= $.inArray(currentUrl, userRule.black.noRealNameAuth) && checkUrlForAccessDeclined();
                });
                var currentUrl;
                (function(path) {
                    function checkPermissionInner(path0) {
                        path0 = permissionUrlMap[path0];
                        if (!path0) return;
                        commons.checkPermission(path0, $rootScope.currentPermission) && checkUrlForAccessDeclined();
                    }
                    $rootScope.isPermissionReady ? checkPermissionInner(path) : $scope.$on('rightsOK', function() {
                        checkPermissionInner(path);
                    });
                })(path);
            }
            function checkTitle() {
                var path = $location.path();
                i18new[path] ? document.title = i18new[path] : 0 < path.toString().indexOf('userindex') ? document.title = i18new.menu_finance : 0 < path.toString().indexOf('accountindex') ? document.title = i18new.menu_accountcenter : 0 < path.toString().indexOf('supportindex') ? document.title = i18new.menu_supportcenter : 0 < path.toString().indexOf('orderindex') ? document.title = i18new.menu_resourcecenter : 0 < path.toString().indexOf('enterpriseindex') && (document.title = i18new.menu_enterprise_center);
            }
            function initPage() {
                0 <= $.inArray('op_gated_pc_vendor_subuser', currentRoleTags) || 0 <= $.inArray('op_pc_vendor_subuser', currentRoleTags) ? $scope.isPcVendorSubuser = !0 : $scope.isPcVendorSubuser = !1;
                $scope.isOldUser = -1 !== $.inArray('op_legacy', currentRoleTags);
                (function() {
                    if (isMobile) return;
                    camel.get({
                        'url': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-status',
                        'params': {
                            'customerId': currentDomainId
                        },
                        'timeout': 6e4,
                        'beforeSend': function(request) {
                            request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                        }
                    }).then(function(data) {
                        data && REALNAMESTATUS.AUTHOK !== Number(data.verifiedStatus) ? $scope.realnameStatus = customiseVer !== VERSION_KEY_HK : $scope.realnameStatus = !1;
                    }).finally(function(error) {
                        null === $scope.realnameStatus && ($scope.realnameStatus = !1);
                    });
                })();
                checkTitle();
                (isEnterpriseProject ? checkEveryStep : checkMaintainPageFun)();
                $scope.$on('$locationChangeSuccess', function() {
                    refreshQiankunAppShow();
                    if ('/newaccessDeclined' !== $location.path()) {
                        checkTitle();
                        isEnterpriseProject ? checkEveryStep($location.search()) : checkMaintainPageFun();
                    }
                });
                $rootScope.isPageReady = !0;
                $rootScope.$broadcast('pageReady');
            }
            function checkBePartner() {

					const data = {"retCode":0,"retDesc":"success","privilegeCodeList":["uc.t1.coupon","uc.t2.coupon","uc.t1.discounts","uc.t2.discounts","uc.t1.cps","uc.t2.cps","uc.t1.payorder","uc.t1.renew","uc.t1.workorder","uc.t1.realname","uc.t1.recharge","uc.t1.deal","uc.t1.invoice","uc.t1.refund","uc.t1.accountalarm","uc.t1.consume","uc.t1.downorder","uc.t1.orderdetail","uc.t2.consume","uc.t1.consumedetail","uc.t2.consumedetail","uc.t2.deal","uc.t2.invoice","uc.t1.contract","uc.t2.contract","uc.t1.toperiod","uc.t2.toperiod","uc.t1.retreat","uc.t2.retreat","uc.t1.account","uc.t2.account","uc.t2.realname","uc.t1.privilege","uc.t2.privilege","uc.t1.contact","uc.t2.contact","uc.t1.feedback","uc.t2.feedback","uc.t1.beta","uc.t2.beta","uc.t1.recommend","uc.t2.recommend","uc.t1.survey","uc.t2.survey","uc.t1.partner","uc.t2.partner","uc.t1.cancelorder","uc.t2.payorder","uc.t2.renew","uc.t2.recharge","uc.t1.todemand","uc.t2.todemand","uc.t1.release","uc.t2.release","uc.t1.autofee","uc.t2.accountmgr","uc.t2.supportmgr","uc.t2.entsubaccount","uc.t1.consumetrade","uc.t2.consumetrade","uc.t1.consumesum","uc.t2.consumesum","uc.t1.consumelist","uc.t2.consumelist","uc.t1.consumeexport","uc.t2.consumeexport","uc.t1.consumedexp","uc.t2.consumedexp","uc.t1.dealexp","uc.t2.dealexp","uc.t1.toperiodoprt","uc.t2.toperiodoprt","uc.t1.accountview","uc.t2.accountview","uc.t1.contactview","uc.t2.contactview","uc.t1.budget","uc.t1.freeresource","uc.t2.freeresource","em.t1.addprojgroup","em.t1.modprojgroup","em.t1.delprojgroup","em.t1.moveproject","em.t1.revmoveproj","em.t2.groupmgr","em.t1.creategroup","em.t2.creategroup","em.t1.gaddaccount","em.t2.gaddaccount","em.t1.modgroup","em.t2.modgroup","em.t1.delgroup","em.t2.accountmgr","em.t1.putm","em.t2.putm","em.t1.getm","em.t2.getm","em.t1.cinvoice","em.t2.cinvoice","em.t1.financeinfo","em.t2.financeinfo","em.t1.consumeinfo","em.t2.consumeinfo","em.t1.modright","em.t2.modright","em.t1.modaccount","em.t2.modaccount","em.t1.delaccoun","em.t2.flowlist","uc.t1.loandown","uc.t2.loandown","uc.t1.mypartner.cancelRelation","uc.t1.mypartner.approveCancelRelation","uc.t2.coststart","uc.t2.costview","uc.t1.costexport","uc.t2.costreportview","uc.t1.costreportupdate","uc.t2.budgetupdate","uc.t2.budgetview","uc.t2.rianalysisview","uc.t2.costetagview","uc.t1.costetagupdate","uc.t1.budgetreportupdate","uc.t1.budgetreportdelete","uc.t2.budgetreportview","uc.t1.costunitupdate","uc.t1.costunitdelete","uc.t2.costunitview","uc.t1.monitorupdate","uc.t1.monitordelete","uc.t2.monitorview","uc.t1.monitoralertupdate","uc.t2.monitoralertview","uc.t2.costoptimizationview","uc.t2.resourcepackageview","uc.t1.instanceoptimizationupdate","uc.t2.instanceoptimizationview","uc.t2.costpreferencesupdate","uc.t2.costpreferencesdelete","uc.t2.packagerecommendation.view"]}
                    data && RSP_SUCCESS === data.retCode && ($rootScope.currentPermission = data.privilegeCodeList);
					$.isArray($rootScope.currentPermission) || ($rootScope.currentPermission = []);
                    $rootScope.isPermissionReady = !0;
                    $rootScope.$broadcast('rightsOK');
               
                if (isMobile) {
                    var urlParm = getUrlParm();
                    isCallFromMobile && getNewMobileUrl($location.path(), urlParm);
                    return;
                }
                initPage();
            }
            function checkUrlForAccessDeclined() {
                var localURL = $location.path();
                if (-1 < localURL.indexOf('newaccessDeclined')) return;
                -1 < localURL.indexOf('servicePay') ? window.location.href = window.location.pathname + '?ttr=' + Date.now() + '#/newaccessDeclined?type=servicePay' : window.location.href = window.location.pathname + '?ttr=' + Date.now() + '#/newaccessDeclined';
            }
            function init() {
                currentRoleTags = $rootScope.userRoles;
                currentDomainId = $rootScope.domainId;
                checkBePartner();
            }
            var currentRoleTags, currentDomainId, roleWhiteList, roleBlackList, checkMaintainPageFun, getLanguageName, param, isEnterpriseProject;
            refreshQiankunAppShow();
            $rootScope.i18err || ($rootScope.i18err = i18err);
            $rootScope.i18v1r2 || ($rootScope.i18v1r2 = i18v1r2);
            $rootScope.i18new || ($rootScope.i18new = i18new);
            $rootScope.i18user || ($rootScope.i18user = i18user);
            if (supportEsPtLanguage && customiseVer === VERSION_KEY_HK) {
                getLanguageName = function(key, languages) {
                    if (languages) for (var i = 0; i < languages.length; i++) if (key === languages[i][0]) return languages[i][1];
                    return null;
                };
                $rootScope.supportLanguage = [ [ 'en-us', 'English' ], [ 'zh-cn', '简体中文' ], [ 'es-us', 'Español' ], [ 'pt-br', 'Português' ] ];
                $rootScope.languageName = getLanguageName($rootScope.language, $rootScope.supportLanguage);
            }
            $rootScope.isShowMobile = isMobile;
            $rootScope.isPageReady = !1;
            $rootScope.hasTips = !1;
            $rootScope.currentPermission = [];
            $rootScope.isPermissionReady = !1;
            currentRoleTags = [];
            currentDomainId = '';
            roleWhiteList = [ 'te_admin', 'bss_adm', 'bss_pay', 'bss_ops', 'op_fine_grained' ];
            roleBlackList = [ 'op_support' ];
            $rootScope.$watch('userRoles', function(newValue, oldvalue) {
                newValue && Array.isArray(newValue) && 0 !== newValue.length && (currentRoleTags = newValue);
            });
            if ($rootScope.i18n) {
                $rootScope.i18n.console_term_tipInfo_IE_label = i18new.console_term_tipInfo_IE_label;
                $rootScope.i18n.console_term_tipInfo_Chrome_label = i18new.console_term_tipInfo_Chrome_label;
                $rootScope.i18n.console_term_tipInfo_Firefox_label = i18new.console_term_tipInfo_Firefox_label;
            } else $rootScope.$watch('i18n', function(newValue, oldvalue) {
                newValue.console_term_tipInfo_IE_label && (newValue.console_term_tipInfo_IE_label = i18new.console_term_tipInfo_IE_label);
                newValue.console_term_tipInfo_Chrome_label && (newValue.console_term_tipInfo_Chrome_label = i18new.console_term_tipInfo_Chrome_label);
                newValue.console_term_tipInfo_Firefox_label && (newValue.console_term_tipInfo_Firefox_label = i18new.console_term_tipInfo_Firefox_label);
            });
            $rootScope.$on('$viewContentLoaded', function() {
                $('#transition-frame').remove();
            });
            $scope.realnameStatus = null;
            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                'undefined' != typeof onPageView && onPageView ? callEvent() : $scope.$on('cloudbiOK', callEvent);
            });
            checkMaintainPageFun = function() {
                if (checkMaintainPage($location.path())) return;
            };
            getLanguageName = $location.path();
            param = $location.search();
            isEnterpriseProject = !getLanguageName.startsWith('/enterpriseProjectIndex') || !(param && param.projectid);
            isMobile && frameworkService.getLoginUser().then(function(data) {
                $rootScope.userId = data.id;
                $rootScope.username = data.name;
                $rootScope.projectId = data.projectId;
                $rootScope.projectName = data.region;
                $rootScope.userRoles = data.roles;
                $rootScope.domainId = data.domainId;
                $rootScope.$broadcast('initUser');
                $rootScope.isPageReady = !0;
                $rootScope.$broadcast('pageReady');
            });
            if (window.domainId && '$domainId$' !== window.domainId) {
                currentDomainId = window.domainId;
                window.myRoleTags && 0 < window.myRoleTags.length && 'roleTagInit' !== window.myRoleTags[0] && (currentRoleTags = window.myRoleTags);
                checkBePartner();
            } else $rootScope.domainId ? init() : $scope.$on('initUser', init);
        } ];
    });
    define('app/business/services/validatorService', [ 'language/errMsg' ], function(i18errMsg) {
        function Validator($rootScope) {
            this.rootScope = $rootScope;
            this.ChineseRe1 = '/^[\\u4e00-\\u9fa5a-zA-Z0-9-_]*$/';
            this.ChineseRe = '/^[\\u4e00-\\u9fa5a-zA-Z0-9]*$/';
            this.specialCharCheck1 = '^[^&*#^+|=<>@\\\\/\']+$';
            this.companyNameCheck = '^[^<>]+$';
            this.ecmChineseRe = '/^[\\u4e00-\\u9fa5a-zA-Z0-9-_]*$/';
            this.contactEmail = '/^((([A-Za-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([A-Za-z]|\\d|[!#\\$%&\'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([A-Za-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([A-Za-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([A-Za-z]|\\d|-|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([A-Za-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([A-Za-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([A-Za-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([A-Za-z]|\\d|-|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([A-Za-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$/';
            this.nameCheck1 = /^[a-zA-Z\u4e00-\u9fa5]+[a-zA-Z0-9\u4e00-\u9fa5\·\s]*[a-zA-Z0-9\u4e00-\u9fa5]$/;
            this.emoji = '/[�|�|�][�-�][‍|️]|[�|�|�][�-�]|[0-9|*|#]️⃣|[0-9|#]⃣|[‼-㊙]️‍|[‼-㊙]️|[™-⭕]|〽|[A9|AE]〰/i';
        }
        var subRegRex;
        Validator.prototype.getErrMsg = function(retCode, defaultMsg, isoperate) {
            var title, retMsg = '';
            if (i18errMsg[retCode]) retMsg = i18errMsg[retCode]; else {
                retMsg = isoperate ? defaultMsg || i18errMsg.common_err_operate : defaultMsg || i18errMsg.common_err_query;
                try {
                    title = 'error Code Miss Match:' + retCode;
                    PMP && PMP.RavenSendException(title, title + window.location.href, 'error');
                } catch (e) {}
            }
            return retMsg;
        };
        subRegRex = /\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;
        Validator.prototype.i18nReplace = function(s, o) {
            return s.replace ? s.replace(subRegRex, function(match, key) {
                return angular.isUndefined(o[key]) ? match : o[key];
            }) : s;
        };
        Validator.prototype.idNumValidator = function(idNum) {
            if (/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/.test(idNum) || /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.idNumValidator18 = function(_id) {
            var num, power, i, powers = [ '7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2' ];
            num = (_id = String(_id)).substr(0, 17);
            _id = _id.substr(17);
            for (i = power = 0; i < 17; i++) {
                if (num.charAt(i) < '0' || '9' < num.charAt(i)) return !1;
                power += parseInt(num.charAt(i)) * parseInt(powers[i]);
            }
            if ([ '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2' ][parseInt(power) % 11] === _id.toUpperCase()) return !0;
            return !1;
        };
        Validator.prototype.idNumValidator15 = function(_id) {
            var i, yearStr, monthStr, dayStr;
            _id = String(_id);
            for (i = 0; i < _id.length; i++) if (_id.charAt(i) < '0' || '9' < _id.charAt(i)) return !1;
            yearStr = _id.substr(6, 2);
            monthStr = _id.substr(8, 2);
            if ((dayStr = _id.substr(10, 2)) < '01' || '31' < dayStr) return !1;
            if (monthStr < '01' || '12' < monthStr) return !1;
            if (yearStr < '01' || '90' < yearStr) return !1;
            return !0;
        };
        Validator.prototype.bankAccountValidator = function(idNum) {
            if (/^[0-9a-zA-Z\-]{1,100}$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.HKMCheckValidator = function(idNum) {
            if (/^(H|M)\d{8,10}$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.TWCheckValidator = function(idNum) {
            if (/^\d{8,11}$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.DLCheckValidator = function(idNum) {
            if (/^[a-zA-Z0-9\-]{0,20}$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.fileNumCheckValidator = function(idNum) {
            if (/^[0-9a-zA-Z]{1,32}$/.test(idNum)) return !0;
            return !1;
        };
        Validator.prototype.zoneValidator = function(id) {
            if (/^(^[0-9][0-9]{2,3}$)$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.phoneNumValidator = function(id, zoneId) {
            if (/^[0-9][0-9]{2,3}$/.test(zoneId)) {
                if (3 === zoneId.length) {
                    if (/^[0-9]{8}$/.test(id)) return !0;
                } else if (/^[0-9]{7,8}$/.test(id)) return !0;
                return !1;
            }
            return !1;
        };
        Validator.prototype.bankAccValidator = function(id) {
            if (/^([0-9]{1,40})$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.businessLicenseValidator = function(id) {
            if (id && '' !== $.trim(id) && /^([a-zA-Z0-9\.\(\)_\-\s]{1,32})$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.groupValidator = function(id) {
            if (!id || '' === $.trim(id) || /[\^\!\@\#\$\%\^\&\*\<\\\>]+/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.organizationCodeValidator = function(id) {
            if (/^([a-zA-Z0-9]{8}-[a-zA-Z0-9])$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.specialCharCheckValidator = function(id) {
            if (/([\`~!@#\$%\^￥&\*\(\)_\+=\-{}\]\[;'":<>\?/\.,\|\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.specialCharCheckValidatorforAddr = function(id) {
            if (/([!@#\$%\^&\*<>\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.companyNameCheckValidator = function(id) {
            return new RegExp(this.companyNameCheck).test(id);
        };
        Validator.prototype.specialCharCheckValidator1 = function(id) {
            return new RegExp(this.specialCharCheck1).test(id);
        };
        Validator.prototype.specialCharCheckValidator2 = function(id) {
            if (/([\`~@#\$%\^￥&\*\(\)_\+=\-{}\]\[;'":<>\/\|\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.securityCharValidate = function(id) {
            if (/([&'"<>])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.subSpecialCharCheckValidator = function(id) {
            if (/([\`~!@#\$%\^￥&\*\(\)_\+={}\]\[;'":<>\?/\.,\|\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.subSpecialCharCheckValidator_2 = function(id) {
            if (/([\`~!@\$%\^￥&\*\(\)_\+={}\]\[;'":<>\?/\.,\|\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.subSpecialCharCheckValidator2 = function(id) {
            if (/([@#\^&\*\\])/.test(id)) return !1;
            return !0;
        };
        Validator.prototype.isCaptchaCode = function(id) {
            if (/^([0-9]{6})$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.webUrlCheck = function(id) {
            if (/^[0-9a-zA-Z]+[0-9a-zA-Z\.-]*\.[a-zA-Z]{2,4}$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.emailCheck = function(id) {
            if (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/.test(id)) return !0;
            return !1;
        };
        Validator.prototype.webSiteCheck = function(id) {
            if (new RegExp('(http|https)://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?').test(id)) return !0;
            return !1;
        };
        Validator.prototype.userNameCheck = function(id) {
            if (new RegExp('[a-zA-Z0-9\\u4e00-\\u9fa5]{0,}').test(id)) return !0;
            return !1;
        };
        Validator.prototype.phoneNumCheck = function(num) {
            return /^((\+|00)86\-?)?1[3456789]\d{9}$/.test(num);
        };
        Validator.prototype.mobilePhoneCheck_R2 = function(num) {
            return /^([0-9\-]{1,32})$/.test(num);
        };
        Validator.prototype.rechargeMoneyCheck = function(id) {
            var index, length;
            if ('0' === id || '0.' === id || '0.0' === id || '0.00' === id || '' === id) return !1;
            index = id.indexOf('0');
            length = id.length;
            if (0 === index && 1 < length) return !!/^[0]{1}[.]{1}[0-9]{1,2}$/.test(id);
            if (99999999.99 < id) return !1;
            return !!/^[1-9]{1}[0-9]{0,7}[.]{0,1}[0-9]{0,2}$/.test(id);
        };
        Date.prototype.format = function(formatStr) {
            var k, o = {
                'M+': this.getMonth() + 1,
                'q+': Math.floor((this.getMonth() + 3) / 3),
                'd+': this.getDate(),
                's+': this.getSeconds(),
                'm+': this.getMinutes(),
                'h+': this.getHours(),
                'S': this.getMilliseconds()
            };
            /(y+)/.test(formatStr) && (formatStr = formatStr.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length)));
            for (k in o) new RegExp('(' + k + ')').test(formatStr) && (formatStr = formatStr.replace(RegExp.$1, 1 === RegExp.$1.length ? o[k] : ('00' + o[k]).substr(String(o[k]).length)));
            return formatStr;
        };
        Validator.prototype.realNameCheck = function(name) {
            if (name && /^[a-zA-Z0-9\u4e00-\u9fa5]{1,32}$/.test(name)) return !0;
            return !1;
        };
        Validator.prototype.realNameCheck1 = function(name) {
            if (this.nameCheck1.test(name)) return !0;
            return !1;
        };
        Validator.prototype.checkPwdSecLevel = function(pwd) {
            var reg1, reg2, reg3, reg4, len;
            try {
                reg1 = /[A-Z]/g;
                reg2 = /[a-z]/g;
                reg3 = /[0-9]/g;
                reg4 = /[\!\@\$\%\^\-\_\=\+\[\{\}\]\:\,\.\/\?]/g;
                len = 8 <= pwd.length ? 12 <= pwd.length ? 20 : 10 : 0;
                return (reg1.test(pwd) ? 1 < pwd.match(reg1).length ? 20 : 10 : 0) + (reg2.test(pwd) ? 1 < pwd.match(reg2).length ? 20 : 10 : 0) + (reg3.test(pwd) ? 1 < pwd.match(reg3).length ? 20 : 10 : 0) + (reg4.test(pwd) ? 1 < pwd.match(reg4).length ? 20 : 10 : 0) + len;
            } catch (e) {
                return 0;
            }
        };
        Validator.prototype.checkNotContain = function(pwd) {
            var len, index;
            if (!pwd) return !1;
            0;
            len = pwd.length;
            for (index = 0; index < len; index++) if (0 <= ' ~`#&*();"\'<>|\\'.indexOf(pwd[index])) return !1;
            return !0;
        };
        Validator.prototype.checkComplexity = function(pwd) {
            var len, index, reg2, reg3, reg4, rate, char;
            if (!pwd) return !1;
            0;
            len = pwd.length;
            for (index = 0; index < len; index++) {
                if ((char = pwd.charCodeAt(index)) < 32 || 126 < char) return !1;
                if (0 <= ' ~`#&*();"\'<>|\\'.indexOf(pwd[index])) return !1;
            }
            try {
                reg2 = /.*[a-z]+.*/;
                reg3 = /.*[0-9]+.*/;
                reg4 = /[\!\@\$\%\^\-\_\=\+\[\{\}\]\:\,\.\/\?]+/;
                rate = 0;
                /.*[A-Z]+.*/.test(pwd) && rate++;
                reg2.test(pwd) && rate++;
                reg3.test(pwd) && rate++;
                reg4.test(pwd) && rate++;
                return 3 <= rate;
            } catch (e) {
                return !1;
            }
        };
        Validator.prototype.checkContainUserName = function(pwd, userName) {
            try {
                if (!userName) return !1;
                var revertUserName = userName.split('').reverse().join('');
                if (0 <= pwd.indexOf(userName) || 0 <= pwd.indexOf(revertUserName)) return !0;
            } catch (e) {
                return !1;
            }
            return !1;
        };
        Validator.prototype.checkContainSubUserName = function(pwd, userName) {
            var index, sub;
            try {
                if (!userName && userName.length < 3) return !1;
                for (index = 0; index <= userName.length - 3; index++) {
                    sub = userName.substring(index, index + 3);
                    if (0 <= pwd.indexOf(sub)) return !0;
                }
            } catch (e) {
                return !1;
            }
            return !1;
        };
        Validator.prototype.newUserAndCorpName = function(value) {
            return null != value && 0 !== $.trim(value).length && !/^([0-9]+)$/.test(value) && !/^([\`~!@#\$%\^&\*\(\)_\+=\-{}\]\[;'":<>\?/\.,\|\\]+)$/.test(value);
        };
        Validator.prototype.checkCSVInjection = function(value) {
            return null != value && 0 !== $.trim(value).length && !/^([@\+=\-])/.test(value);
        };
        Validator.prototype.checkIdNumber = function(value) {
            return !!new RegExp('^((\\s?[A-Za-z])|([A-Za-z]{2}))\\d{6}((\\([0-9A-Za-z]\\))|([0-9A-Za-z]))$').test(value) || !!/^[1|5|7][0-9]{6}\([0-9Aa]\)/.test(value) || /^[A-Za-z][0-9]{9}$/.test(value);
        };
        Validator.prototype.checkCNParentheses = function(value) {
            return -1 < value.indexOf('（') || -1 < value.indexOf('）');
        };
        Validator.prototype.checkArtificialPersonId = function(value) {
            return value && '' !== $.trim(value) && /^([a-zA-Z0-9\(\)（）_\-\s]{1,32})$/.test(value);
        };
        Validator.prototype.checkRdsContain = function(pwd) {
            var typesofCharacters = 0;
            /[a-z]+/.test(pwd) && typesofCharacters++;
            /[A-Z]+/.test(pwd) && typesofCharacters++;
            /[0-9]+/.test(pwd) && typesofCharacters++;
            /[\~\!\@\#\%\^\*\-\_\=\+\?]+/.test(pwd) && typesofCharacters++;
            if (typesofCharacters < 4) return !1;
            if (!/^[a-zA-Z0-9\~\!\@\#\%\^\*\-\_\=\+\?]+$/.test(pwd)) return !1;
            return !0;
        };
        Validator.prototype.checkWeakPassword = function(pwd, weakPasswordArry) {
            if (pwd) {
                weakPasswordArry = _.filter(weakPasswordArry, function(item) {
                    return pwd === item;
                });
                if (angular.isObject(weakPasswordArry) && 0 < weakPasswordArry.length) return !1;
            }
            return !0;
        };
        Validator.prototype.checkRdsPwdSecLevel = function(pwd) {
            var reg1, reg2, reg3, reg4, len;
            try {
                reg1 = /[A-Z]/g;
                reg2 = /[a-z]/g;
                reg3 = /[0-9]/g;
                reg4 = /[\~\!\@\#\%\^\*\-\_\=\+\?]/g;
                len = 8 <= pwd.length ? 12 <= pwd.length ? 20 : 10 : 0;
                return (reg1.test(pwd) ? 1 < pwd.match(reg1).length ? 20 : 10 : 0) + (reg2.test(pwd) ? 1 < pwd.match(reg2).length ? 20 : 10 : 0) + (reg3.test(pwd) ? 1 < pwd.match(reg3).length ? 20 : 10 : 0) + (reg4.test(pwd) ? 1 < pwd.match(reg4).length ? 20 : 10 : 0) + len;
            } catch (e) {
                return 0;
            }
        };
        Validator.prototype.isEmoji = function(value) {
            return new RegExp(this.emoji).test(value);
        };
        return [ '$rootScope', Validator ];
    });
    define('app/business/filters/hwsFilter', [ 'language/user', 'app/business/controllers/commons' ], function(i18new) {
        function dealMathNum(num) {
            num = Number(num);
            try {
                var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
                return num.toFixed(Math.max(0, (m[1] || '').length - Number.parseInt(m[2], 10)));
            } catch (e) {
                return num.toFixed(20);
            }
        }
        var domain_pre, hwsModule = angular.module('hwsFilter', [ 'ng' ]);
        hwsModule.filter('formatDate', function($filter) {
            var DATE_FORMATS = {
                'F': function(date, format) {
                    format = format.replace('F', 'Z');
                    return date = (date = $filter('date')(date, format)).replace(/([\+|\-])([\d]{2})([\d]{2})$/, '$1$2:$3');
                }
            };
            return function(date, format) {
                var i, key, flag = !0;
                for (i in format) if (Object.prototype.hasOwnProperty.call(format, i) && (key = format[i]) && DATE_FORMATS[key]) {
                    date = (0, DATE_FORMATS[key])(date, format);
                    flag = !1;
                    break;
                }
                flag && (date = $filter('date')(date, format));
                return $.encoder.encodeForHTML(date);
            };
        });
        hwsModule.filter('csbFormatDate', function($filter) {
            return function(date, format) {
                if (!date) return '';
                date = (date = $filter('date')(date, format)).replace(/([\+|\-])([\d]{2})([\d]{2})$/, '$1$2:$3');
                return $.encoder.encodeForHTML(date);
            };
        });
        hwsModule.filter('csbShortFormatDate', function($filter) {
            return function(date, format) {
                if ((date = date || new Date()).length < 11) {
                    var timezone = (date = new Date(date.replace(/\/|-|,/g, '-'))).getTimezoneOffset();
                    date = date.getTime() + 60 * timezone * 1e3;
                }
                date = (date = $filter('date')(date, format)).replace(/([\+|\-])([\d]{2})([\d]{2})$/, '$1$2:$3');
                return $.encoder.encodeForHTML(date);
            };
        });
        hwsModule.filter('csbDateByZone', function($filter) {
            return function(date, format, zone) {
                var dateo;
                zone && zone === parseInt(zone) || (zone = 0);
                (dateo = new Date(date)).setMinutes(dateo.getMinutes() + zone);
                date = $filter('date')(dateo, format, 'UTC');
                if (zone < 0) {
                    date += ' -';
                    zone = 0 - zone;
                } else date += ' +';
                return date = date + ((dateo = Math.floor(zone / 60)) < 10 ? '0' + dateo + ':' : dateo + ':') + ((format = zone % 60) < 10 ? '0' + format : format);
            };
        });
        hwsModule.filter('csbNumber', function($filter) {
            return function(number) {
                number = dealMathNum(number);
                var decimal_places = 0;
                try {
                    -1 < number.toString().indexOf('.') && (decimal_places = number.toString().split('.')[1].length);
                } catch (e) {
                    decimal_places = 0;
                }
                return number = decimal_places <= 2 ? $filter('number')(number, 2) : decimal_places <= 4 ? $filter('number')(number, decimal_places) : $filter('number')(number, 4);
            };
        });
        hwsModule.filter('csb_number', function($filter) {
            return function(number, fractionSize) {
                number = dealMathNum(number);
                fractionSize = fractionSize || 3;
                var decimal_places = 0;
                try {
                    -1 < number.toString().indexOf('.') && (decimal_places = number.toString().split('.')[1].length);
                } catch (e) {
                    decimal_places = 0;
                }
                if (!(decimal_places <= fractionSize)) {
                    number = (number = number.toString()).substring(0, number.length - (decimal_places - fractionSize));
                    number = parseFloat(number);
                }
                return number = $filter('number')(number, fractionSize);
            };
        });
        hwsModule.filter('base64Decode', function($filter) {
            return function(input) {
                return window.commons.Base64.decode(input);
            };
        });
        hwsModule.filter('base64Encode', function($filter) {
            return function(input) {
                return window.commons.Base64.encode(input);
            };
        });
        hwsModule.filter('highLight', function($filter, $sce) {
            return function(content, match) {
                var tmp_arr;
                if (match && content && -1 < content.indexOf(match)) {
                    tmp_arr = [];
                    tmp_arr = content.split(match);
                    match = '<span style=\'background-color: #3399ff;color:#ffffff\'>' + $.encoder.encodeForHTML(match) + '</span>';
                    content = tmp_arr.join(match);
                }
                return $sce.trustAsHtml(content);
            };
        });
        hwsModule.filter('entList_highLight', function($sce) {
            return function(content, match) {
                var tmp_arr;
                if (match && content && -1 < content.indexOf(match)) {
                    tmp_arr = [];
                    tmp_arr = content.split(match);
                    match = '<span style=\'background-color: #ff9900;color:#ffffff\'>' + $.encoder.encodeForHTML(match) + '</span>';
                    content = tmp_arr.join(match);
                }
                return $sce.trustAsHtml(content);
            };
        });
        domain_pre = (window.location.host || '').split('.')[0] || '';
        hwsModule.directive('csbBi', [ '$rootScope', function($rootScope) {
            return {
                'restrict': 'A',
                'link': function(scope, elem, attrs) {
                    elem.bind('click', function() {
                        function callEvent() {
                            onEvent((ge_gets[0] || '').replace('www', domain_pre), ge_gets[1] || '', value2, ge_gets[3] || 1, jsonParamEvent);
                        }
                        var value2, jsonParamEvent = {}, ge_gets = attrs.csbBi.split('.');
                        if (ge_gets.length) {
                            value2 = ge_gets[2] || '';
                            jsonParamEvent.C1 = $rootScope.domainId || '';
                            'undefined' != typeof onEvent && onEvent ? callEvent() : scope.$on('cloudbiOK', callEvent);
                        }
                    });
                }
            };
        } ]);
        hwsModule.directive('csbBidmp', [ '$rootScope', function($rootScope) {
            return {
                'restrict': 'A',
                'link': function(scope, elem, attrs) {
                    elem.bind('click', function() {
                        function callEvent() {
                            onDmpa($rootScope.domainId, dmpJsonParam);
                        }
                        var value2, dmpJsonParam = {}, ge_gets = attrs.csbBidmp.split('.');
                        if (ge_gets.length) {
                            value2 = ge_gets[2] || '';
                            dmpJsonParam.C1 = ge_gets[0];
                            dmpJsonParam.D15 = value2;
                            'undefined' != typeof onDmpa && onDmpa ? callEvent() : scope.$on('cloudbiOK', callEvent);
                        }
                    });
                }
            };
        } ]);
        hwsModule.directive('csbBipv', [ '$rootScope', '$location', function($rootScope, $location) {
            return {
                'restrict': 'A',
                'link': function(scope, elem, attrs) {
                    var attrs = attrs.csbBipv;
                    if (attrs) if ((attrs = attrs.split('.')).length) {
                        attrs[2];
                        attrs[0];
                        0;
                        attrs[3];
                    } else 0; else 0;
                }
            };
        } ]);
        hwsModule.directive('csbUpload', [ '$rootScope', '$timeout', 'storage', 'publicService', function($rootScope, $timeout, storage, publicService) {
            function rollbackPreview(previewId) {
                previewId = $('#' + previewId);
                previewId.children('img').first().remove();
                if (previewId.hasClass('after_preview')) {
                    previewId.removeClass('after_preview');
                    previewId.addClass('preview');
                    previewId.children('p').show();
                }
            }
            function preview(file, previewId) {
                var prevDiv = $('#' + previewId);
                if (file._file) {
                    (previewId = new FileReader()).onload = function(evt) {
                        prevDiv.children('img').first().remove();
                        evt = 'data:application/pdf' === evt.target.result.substr(0, 20) ? '<img class="img" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/pdfexample.png" />' : '<img class="img" src="' + evt.target.result + '" />';
                        prevDiv.prepend(evt);
                        if (prevDiv.hasClass('preview')) {
                            prevDiv.removeClass('preview');
                            prevDiv.addClass('after_preview');
                            prevDiv.children('p').hide();
                        }
                    };
                    previewId.readAsDataURL(file._file);
                } else {
                    prevDiv.children('img').first().remove();
                    $scope.fileValue = file.file.name;
                    previewId = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src=\'{{fileValue}}\'">' + (function() {
                        var agent = navigator.userAgent.toLowerCase();
                        if ((agent = /(msie\s|trident.*rv:)([\w.]+)/.exec(agent)) && 9 === Number(agent[2])) return 1;
                        return;
                    }() ? '<div class="ie9spectips">' + i18new.customer_realnameauth_upload_IE9tips + '</div>' : '') + '</div>';
                    previewId = publicService.createNode($scope, previewId);
                    prevDiv.prepend(previewId);
                    if (prevDiv.hasClass('preview')) {
                        prevDiv.removeClass('preview');
                        prevDiv.addClass('after_preview');
                        prevDiv.children('p').hide();
                    }
                }
            }
            function fireUpload(fileItem) {
                fileItem.uploader.uploadItems([ fileItem ]);
            }
            function getExif(fileItem) {
                try {
                    (fileItem._file.size > 1024 * authFileNeedCompressSize * 1024 ? function(fileItem) {
                        var file = fileItem;
                        (fileItem = new FileReader()).onload = function(e) {
                            var img = new Image();
                            img.src = e.target.result;
                            img.onload = function() {
                                var ctx, imgWidth = this.width, imgHeight = this.height, isShowPress = !1;
                                if (imgHeight < imgWidth && pic_width < imgWidth) {
                                    imgWidth = pic_width;
                                    imgHeight = Math.ceil(pic_width * this.height / this.width);
                                    isShowPress = !0;
                                } else if (imgWidth < imgHeight && pic_height < imgHeight) {
                                    imgWidth = Math.ceil(pic_height * this.width / this.height);
                                    imgHeight = pic_height;
                                    isShowPress = !0;
                                }
                                if (isShowPress) {
                                    ctx = (isShowPress = document.createElement('canvas')).getContext('2d');
                                    isShowPress.width = imgWidth;
                                    isShowPress.height = imgHeight;
                                    ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
                                    HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                                        'value': function(callback, type) {
                                            var i, type = this.toDataURL(type, quality).split(',')[1], binStr = atob(type), len = binStr.length, tmparr = new Uint8Array(len);
                                            for (i = 0; i < len; i++) tmparr[i] = binStr.charCodeAt(i);
                                            callback(new Blob([ tmparr ], {
                                                'type': file._file.type
                                            }));
                                        }
                                    });
                                    isShowPress.toBlob(function(blob) {
                                        blob = new Blob([ blob ], {
                                            'type': file._file.type
                                        });
                                        file._file = blob;
                                        fireUpload(file);
                                    }, file._file.type, quality);
                                } else fireUpload(file);
                            };
                        };
                        fileItem.readAsDataURL(file._file);
                    } : fireUpload)(fileItem);
                } catch (err) {
                    fireUpload(fileItem);
                }
            }
            function changefileName(fileName) {
                if (fileName) return function(randomFlag, min, max) {
                    var i, str = '', range = min, arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
                    randomFlag && (range = Math.round(Math.random() * (max - min)) + min);
                    for (i = 0; i < range; i++) str += arr[Math.round(Math.random() * (arr.length - 1))];
                    return str;
                }(!1, 32) + fileName.substring(fileName.lastIndexOf('.'));
                return fileName;
            }
            function showUploadResult(id, status, maxSize, option) {
                var tips, tipsel = $('#uploadtips_' + id);
                tipsel.removeClass('succ');
                tipsel.removeClass('fail');
                tipsel.removeClass('proxyfail');
                if (RSP_SUCCESS === Number(status)) {
                    tips = i18new.customer_realnameauth_uploadtips_success;
                    tipsel.addClass('succ');
                } else if ('508040824' === String(status)) {
                    tips = i18new.bp_fileupload_outtimes;
                    tipsel.addClass('fail');
                } else if ('508040825' === String(status)) {
                    tips = option && option.errMsg ? option.errMsg : i18new.customer_realnameauth_upload_error_invalidtype;
                    tipsel.addClass('fail');
                } else if (-1 < $.inArray('maxSize', status)) {
                    tips = i18new.customer_realnameauth_upload_error_toomax;
                    maxSize && (tips = i18new.customer_realnameauth_upload_error_toomax_customize.replace(/\{n\}/g, maxSize));
                    tipsel.addClass('fail');
                } else if (-1 < $.inArray('fileType', status)) {
                    tips = option && option.errMsg ? option.errMsg : i18new.customer_realnameauth_upload_error_invalidtype;
                    tipsel.addClass('fail');
                } else if ('string' == typeof status && 0 <= status.indexOf('Uploading is Restricted')) {
                    tips = i18new.customer_realnameauth_upload_error_403;
                    tipsel.addClass('proxyfail');
                } else {
                    tips = i18new.customer_realnameauth_uploadtips_fail;
                    tipsel.addClass('fail');
                }
                tipsel.text(tips);
                tipsel.show();
                $timeout(function() {
                    tipsel.fadeOut();
                }, 2e3);
            }
            var authFileNeedCompress, authFileNeedCompressSize, quality, pic_width, pic_height, F_COMPRESSED_PICTURE_SWITCH, authFileNeedCompressSizeTemp = publicService.getSystemConfigsByKey('PCCompressionParams');
            authFileNeedCompressSizeTemp = authFileNeedCompressSizeTemp && authFileNeedCompressSizeTemp.PCCompressionParams ? authFileNeedCompressSizeTemp.PCCompressionParams : '{"maxSize":2,"quality":0.8,"width":4000,"height":3000}';
            authFileNeedCompress = '';
            try {
                authFileNeedCompress = JSON.parse(authFileNeedCompressSizeTemp);
            } catch (err) {
                authFileNeedCompress = {
                    'maxSize': 2,
                    'quality': .7,
                    'width': 4e3,
                    'height': 3e3
                };
            }
            authFileNeedCompressSize = authFileNeedCompress.maxSize;
            quality = authFileNeedCompress.quality;
            pic_width = authFileNeedCompress.width;
            pic_height = authFileNeedCompress.height;
            F_COMPRESSED_PICTURE_SWITCH = publicService.getCharactSwitchByKey('F_COMPRESSED_PICTURE_SWITCH', !1);
            return {
                'restrict': 'EA',
                'templateUrl': '/res.hc-cdn.com/usercenter/8.3.203/src/app/business/filters/csbUpload.html',
                'replace': !0,
                'scope': {
                    'uploadModel': '=uploadModel'
                },
                'link': function($scope, elem, attrs) {
                    $scope.isShowHover = !1;
                    $scope.componentId = attrs.componentId;
                    var M = parseInt(attrs.maxSize);
                    $scope.maxSize = 1024 * (M = M || 4) * 1024;
                    $scope.hoverTips = i18new.customer_realnameauth_uploadtips_modify;
                    $scope.isUploading = !1;
                    $scope.fileType = $scope.uploadModel.option && $scope.uploadModel.option.fileType ? $scope.uploadModel.option.fileType : '.jpeg,.jpg,.png,.bmp,.gif,.pdf';
                    $scope.uploadOptions = {
                        'styleOptions': {
                            'btnText': ' ',
                            'showDetail': !1
                        },
                        'uploaderConfig': {
                            'isAutoUpload': !1,
                            'filters': [ {
                                'name': 'fileType',
                                'params': [ $scope.fileType ]
                            }, {
                                'name': 'maxSize',
                                'params': [ $scope.maxSize ]
                            }, {
                                'name': 'maxCount',
                                'params': [ 1 ]
                            } ],
                            'alias': 'tinyfileName',
                            'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/file?cftk=' + (storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cftk') || '') + '&cf2-cftk=' + (storage.cookieStorage.getItem((window.app_cookie_prefix || '') + 'cf2_cftk') || ''),
                            'onAddItemFailed': function(fileObj, validResultArr) {
                                rollbackPreview(attrs.id);
                                $scope.uploadModel.uploadFileName = '';
                                showUploadResult(attrs.componentId, validResultArr, M, $scope.uploadModel.option);
                            },
                            'onCompleteItem': function(fileItem, responseText, status) {
                                $('#uploadloading_' + attrs.componentId).hide();
                                $scope.isUploading = !1;
                                if (0 === parseInt(responseText)) {
                                    $scope.uploadModel.uploadSuccess = !0;
                                    preview(fileItem, attrs.id, attrs.componentId);
                                    showUploadResult(attrs.componentId, 0);
                                } else {
                                    rollbackPreview(attrs.id);
                                    $scope.uploadModel.uploadFileName = '';
                                    showUploadResult(attrs.componentId, responseText);
                                }
                            },
                            'onBeforeSendItem': function(fileItem) {
                                fileItem.formData = {
                                    'tinyFormDatas': JSON.stringify({
                                        'model': 'customer',
                                        'attachedType': attrs.attachedType
                                    })
                                };
                                fileItem.headers = {
                                    'X-CF2-PASSTHROUGH': !0,
                                    'X-Channel-From': 'usercenter',
                                    'X-EnvType': window.x_env_type
                                };
                            },
                            'onAddItemSuccess': function(fileItem) {
                                $scope.uploadModel.uploadSuccess = !1;
                                fileItem.file.name = changefileName(fileItem.file.name);
                                $scope.uploadModel.uploadFileName = fileItem.file.name;
                                $(attrs.id).removeClass('upload_no_pic');
                                $('#uploadloading_' + attrs.componentId).show();
                                $scope.isUploading = !0;
                                (F_COMPRESSED_PICTURE_SWITCH ? getExif : fireUpload)(fileItem);
                            }
                        }
                    };
                }
            };
        } ]);
        hwsModule.directive('repeatFinish', function($timeout) {
            return {
                'restrict': 'A',
                'link': function(scope, elem, attr) {
                    !0 === scope.$last && $timeout(function() {
                        scope.$emit('repeatFinishCallback');
                    }, 100);
                }
            };
        });
        hwsModule.directive('csbRight', [ '$rootScope', '$timeout', '$location', function($rootScope, $timeout, $location) {
            return {
                'restrict': 'A',
                'priority': -1,
                'link': function(scope, elem, attrs) {
                    function checkPermission(permissionCode, permissions) {
                        commons.checkPermission(permissionCode, permissions) && elem && $timeout(function() {
                            elem.remove();
                        }, 0);
                    }
                    var id, attrs = attrs.csbRight, path = $location.path();
                    if (-1 < attrs.indexOf('|')) {
                        id = attrs.split('|')[0];
                        if ('false' === attrs.split('|')[1]) return;
                    } else id = attrs;
                    if (!id) return;
                    path.startsWith('/enterpriseProjectIndex') ? $rootScope.isProjectPermissionReady ? checkPermission(id, $rootScope.currentProjectPermission) : scope.$on('projectRightsOK', function() {
                        checkPermission(id, $rootScope.currentProjectPermission);
                    }) : $rootScope.isPermissionReady ? checkPermission(id, $rootScope.currentPermission) : scope.$on('rightsOK', function() {
                        checkPermission(id, $rootScope.currentPermission);
                    });
                }
            };
        } ]);
        hwsModule.directive('ngMousedown', [ '$parse', '$rootScope', '$filter', function($parse, $rootScope, $filter) {
            return {
                'restrict': 'A',
                'compile': function($element, attr) {
                    return function(scope, element) {
                        element.on('mousedown', function(event) {
                            var classListMaps = {
                                'ti-head-filter-container': {
                                    'needF': function(event) {
                                        window.filterLable = $.trim($(event.target).parents('th').text());
                                    }
                                },
                                'ti-searchbox-search': {
                                    'needF': function(event) {
                                        window.filterLable = '';
                                        return i18new.bi_search;
                                    }
                                },
                                'ti-dropdown-option': {
                                    'needF': function(event) {
                                        var tmpStr = '';
                                        $('.view-style').find('.ti-tab-active') && (tmpStr = $.trim($('.view-style').find('.ti-tab-active').text()));
                                        if ($(event.target).parents('.ti-page-size-option').length) tmpStr = i18new.bi_pageSizeChange; else {
                                            tmpStr = tmpStr ? tmpStr + '-' + i18new.bi_select : i18new.bi_select;
                                            window.filterLable && (tmpStr += window.filterLable);
                                        }
                                        return tmpStr;
                                    }
                                },
                                'ti-select-dominator-dropdown-btn': {
                                    'needF': function(event) {
                                        window.filterLable = '';
                                    }
                                }
                            };
                            (function(scope) {
                                var eventLabel, parent_title, win_title, site_name;
                                if (event.timeStamp !== window.timeStamp) {
                                    window.timeStamp = event.timeStamp;
                                    site_name = win_title = parent_title = eventLabel = '';
                                    if ((eventLabel = function(event) {
                                        var i, desc = '';
                                        if (event && event.currentTarget && event.currentTarget.classList && event.currentTarget.classList.value) for (i in classListMaps) if (-1 < event.currentTarget.classList.value.indexOf(i)) {
                                            classListMaps[i].needF && (desc = classListMaps[i].needF(event));
                                            break;
                                        }
                                        return desc;
                                    }(event)) && event.currentTarget.innerText) {
                                        eventLabel = eventLabel + '-' + event.currentTarget.innerText;
                                        arr = (arr = (location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?')) && arr[0];
                                        site_name = 'uc_auto_' + (site_name = site && customiseVer && site[customiseVer] ? site[customiseVer] + '_' : site_name) + 'zh-cn' + arr;
                                        $(event.currentTarget).parents('.ti-modal-dialog').find('.ti-modal-header') && (win_title = $.trim($(event.currentTarget).parents('.ti-modal-dialog').find('.ti-modal-header').text()));
                                        (parent_title = $(event.currentTarget).closest('[bi_parent_name]') ? $.trim($(event.currentTarget).closest('[bi_parent_name]').attr('bi_parent_name')) : parent_title) ? eventLabel = parent_title + '_' + eventLabel : win_title && (eventLabel = win_title + '_' + eventLabel);
                                        eventLabel && (-1 < eventLabel.indexOf('$') || -1 < eventLabel.indexOf('¥')) && i18new && i18new.bi_detail && (eventLabel = i18new.bi_detail);
                                        scope.$emit('ngMousedownChange', {
                                            'eventCategory': site_name,
                                            'type': 'click',
                                            'eventLabel': eventLabel,
                                            'eventObj': event
                                        });
                                        -1 < (arr = window.location.hash).indexOf('?') && (arr = arr.split('?')[0]);
                                        window.linkInfo = $filter('base64Encode')(document.domain + '/usercenter/' + arr + '|' + event.currentTarget.id + '|click|' + eventLabel) + '.' + $rootScope.domainId + '.' + new Date().getTime();
                                    }
                                }
                                var arr;
                            })(scope);
                        });
                    };
                }
            };
        } ]);
        hwsModule.directive('compileHtml', [ '$compile', function($compile) {
            return {
                'restrict': 'A',
                'replace': !0,
                'link': function(scope, ele, attrs) {
                    scope.$watch(function() {
                        return scope.$eval(attrs.ngBindHtml);
                    }, function(html) {
                        ele.html(html);
                        $compile(ele.contents())(scope);
                    });
                }
            };
        } ]);
        hwsModule.filter('mouseDownLabel', function($filter) {
            return function(event) {
                var pagetitle, classListMaps = {
                    'ti-head-filter-container': {
                        'needF': function(nevent) {
                            window.filterLable = $.trim($(nevent.target).parents('th').text());
                        }
                    },
                    'ti-searchbox-search': {
                        'needF': function(nevent) {
                            var tmpStr, tmpPreLabel, tmpInput;
                            try {
                                tmpStr = i18new.bi_search;
                                tmpPreLabel = $.trim($(nevent.target).parents('ti-select-searchbox').text());
                                tmpInput = (tmpInput = $.trim($(nevent.target).parents('ti-select-searchbox').find('.ti-searchbox-input').val())) || $.trim($(nevent.target).parents('.ti-searchbox-container').find('.ti-searchbox-input').val());
                                tmpPreLabel && (tmpStr += '-' + tmpPreLabel);
                                tmpInput && (tmpStr += '-' + tmpInput);
                                window.filterLable = '';
                            } catch (e) {}
                            return tmpStr;
                        }
                    },
                    'ti-dropdown-option': {
                        'needF': function(nevent) {
                            var tmpStr = '';
                            if ($(nevent.target).parents('.ti-page-size-option').length) tmpStr = i18new.bi_pageSizeChange; else {
                                tmpStr = (tmpStr = $('.view-style').find('.ti-tab-active ti-tab-head') ? $.trim($('.view-style').find('.ti-tab-active ti-tab-head').text()) : tmpStr) ? tmpStr + '-' + i18new.bi_select : i18new.bi_select;
                                window.filterLable && (tmpStr += window.filterLable);
                            }
                            return tmpStr;
                        }
                    },
                    'ti-select-dominator-dropdown-btn': {
                        'needF': function(nevent) {
                            window.filterLable = '';
                        }
                    }
                }, eventLabel = '', eventCategory = '', parent_title = '', win_title = '', site_name = '';
                try {
                    eventLabel = (eventLabel = (eventLabel = function(nevent) {
                        var i, desc = '';
                        if (nevent && nevent.currentTarget && nevent.currentTarget.classList && nevent.currentTarget.classList.value) for (i in classListMaps) if (-1 < nevent.currentTarget.classList.value.indexOf(i)) {
                            classListMaps[i].needF && (desc = classListMaps[i].needF(nevent));
                            break;
                        }
                        return desc;
                    }(event)) || $(event.target).attr('bi_name')) || $(event.target).parent([ 'bi_name' ]).attr('bi_name');
                    pagetitle = (arr = (location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?')) && arr[0];
                    eventCategory = 'uc_auto_' + (site_name = site && customiseVer && site[customiseVer] ? site[customiseVer] + '_' : site_name) + 'zh-cn' + pagetitle;
                    if (eventLabel && event.currentTarget.innerText) {
                        eventLabel = eventLabel + '-' + event.currentTarget.innerText;
                        $(event.currentTarget).parents('.ti-modal-dialog').find('.ti-modal-header') && (win_title = $.trim($(event.currentTarget).parents('.ti-modal-dialog').find('.ti-modal-header').text()));
                        (parent_title = $(event.currentTarget).closest('[bi_parent_name]') ? $.trim($(event.currentTarget).closest('[bi_parent_name]').attr('bi_parent_name')) : parent_title) ? eventLabel = parent_title + '_' + eventLabel : win_title && (eventLabel = win_title + '_' + eventLabel);
                        eventLabel && (-1 < eventLabel.indexOf('$') || -1 < eventLabel.indexOf('¥')) && i18new && i18new.bi_detail && (eventLabel = i18new.bi_detail);
                    }
                } catch (e) {}
                var arr;
                return {
                    'eventCategory': eventCategory,
                    'type': 'click',
                    'eventLabel': eventLabel
                };
            };
        });
        return hwsModule;
    });
    define('mobile/mobile-business.tpls', [ 'app/business/filters/hwsFilter' ], function(module) {
        module.run([ '$templateCache', function($templateCache) {
            $templateCache.put('src/app/business/mobile/account/views/activityBankAuth.html', '<style>#once,#six[disabled]{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-4.9rem;top:.35rem;width:4.5rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.scroll-content{height:auto!important}#idperpic .ti-file-upload-container .ti-file-btn{height:15.5rem}@media screen and (orientation:landscape){.photo-box1New{background-size:8rem;height:9rem}.activity-photo-4corner{background-size:8rem;height:10rem}}</style><div ng-controller="activityBankAuth.ctrl" bi_parent_name="{{i18mobile.bi_arealAuth_type_bankCardType}}"><div ng-show="starTakePhoto"><div class="takePho-box"><div class="activity-photo-4corner"><div class="photo-box1New"><div style="position:absolute;width:100%"><ti-file-upload bi_name="{{i18mobile.bi_aclick_picclick}}" id="{{idperpic.id}}" class="add-ti-file-btn transparent" style-options="idperpic.styleOptions" uploader="idperpic.uploaderConfig"></ti-file-upload></div><div id="previewIdPerH5New"></div></div></div><div ng-if="takePhotoFrist" class="face-tip"><p ng-bind="i18mobile.face_tip_takePhoto" calss="face-tip-top"></p><div class="face-tip-first" ng-style="{\'line-height\':isRotated?\'22px\':\'\'}"><span ng-bind="i18mobile.face_tip1"></span> <span ng-bind="i18mobile.face_tip2"></span></div></div><div ng-if="takePhotoSecond" class="face-tip"><p ng-bind="i18mobile.face_tip_takePhoto_1" calss="face-tip-top"></p><p ng-bind="i18mobile.face_tip_takePhoto_2" calss="face-tip-top"></p></div><p ng-bind="i18mobile.face_tip_takePhoto_3" style="font-size:.75rem;margin-top:.95rem" ng-if="false"></p><p ng-bind="i18mobile.face_tip_takePhoto_4" style="font-size:.75rem" ng-if="false"></p><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" ng-style="{\'position\':isRotated?\'unset\':\'absolute\'}"><div class="double-buttonH5 greButtonH5" ng-if="takePhotoFrist" style="text-align:center"><div class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle"></div><span class="fl" style="text-align:left;margin-bottom:.5rem" ng-bind="i18mobile.face_onePageTipTitle_camera"></span> <span id="starTakePhoto" class="perInfo-nextNew seconds-next" on-tap="idperpicReClick()" ng-bind="i18mobile.face_button_starTakePhoto" bi-name="{{i18mobile.bi_click_bankpic}}"></span></div><div class="double-button greButtonH5" ng-if="takePhotoSecond" style="text-align:center;display:block"><span id="goToNext" class="perInfo-nextNew perInfo-nextNew-marTop seconds-next" style="display:inline-block;width:100%" on-tap="gotoBankPhoneCerti()" ng-bind="i18mobile.face_button_next" bi_name="{{i18mobile.bi_click_bankpicNext}}"></span><br><span id="reStarTakePhoto" class="perInfo-nextGre activityAuthRePic" ng-bind="i18mobile.mobile_rePhoto" on-tap="idperpicReClick()" style="color:#111;font-size:.75rem;display:inline-block;margin-top:.804rem"></span></div></div></div></div><div class="perInformation big-box" style="font-size:.7rem" ng-show="bankPerPhoneInformation"><div class="bank-information-confirm"><div><p><span ng-bind="i18mobile.personalCertifi_text_name"></span><span>：</span><span id="bankCardAuth-name">{{personal.name}}</span></p><p style="margin-top:.804rem"><span ng-bind="i18mobile.personalCertifi_placeholder_idCardNum"></span><span>：</span><span id="bankCardAuth-IDNumber">{{personal.idCard}}</span></p></div></div><div class="bank-none"></div><div class="bank-phone-box"><div class="bank-information-box bank-information-phone"><div class="cardChange-box" style="margin-top:.5rem"><div on-tap="gotoBankCradType()"></div><p id="BankNumid"></p><input style="margin-top:0" id="bankCard" type="text" maxlength="19" placeholder="{{i18mobile.personBank_BankCardNumber_lable}}" ng-model="bankCardAuth.BankCardNumber.value" bi_name="{{i18mobile.bi_bankCardNumber}}" ng-change="bankCardAuth.BankCardNumber.change()" ng-blur="bankCardAuth.BankCardNumber.blur()"></div><div class="cardChange-box"><p id="BankNameid"></p><input id="bankName" type="text" readonly="readonly" placeholder="发卡行"></div><div class="cardChange-box"><div class="bank-i" on-tap="gotoBankPhonePrompt()"></div><p id="BankPhoneid"></p><input id="BankPhone" type="text" maxlength="11" bi_name="{{i18mobile.bi_bankPhone}}" placeholder="银行预留手机号码" ng-model="bankPhone" ng-change="swatchThree()"></div><div class="cardChange-box"><p id="upid"></p><div id="smsBtnId" class="bank-mesg" on-tap="bankCardAuth.querySMSCode.click()"><span ng-bind="bankCardAuth.querySMSCode.text">1</span></div><input id="megSMScode" class="bank-meg-width" type="text" bi_name="{{i18mobile.bi_megSMScode}}" maxlength="6" placeholder="短信验证码" ng-model="SMScode" ng-change="swatchThree()"></div><button class="perInfo-nextNew perInfo-nextNew-marTop bank-confirm" id="six" bi_name="{{i18mobile.bi_activityBankAuthSubmit}}" on-tap="bankCardAuth.bankCardAuth_submit.click()" ng-bind="i18mobile.face_button_submit" style="border:none;font-size:.8rem;line-height:2.2rem" ng-disabled="sixDisable || bankCardAuth.BankCardNumber.isError"></button></div></div></div><div class="success big-box" ng-show="bankSuccess"><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> {{i18mobile.personalCertifi_tip_confirmInfoSuccess}}</p></div><div class="confirm-info"><div><p ng-bind="i18mobile.realAuth_allianceAuth_customerType"></p><p ng-bind="i18mobile.customerType1"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box"><div class="perInfo-nextNew perInfo-nextNew-marTop" ng-show="isActivity" on-tap="gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div><div class="perInfo-nextNew perInfo-nextNew-marTop" ng-show="promotion && !isActivity" on-tap="redirectBack()" ng-bind="i18mobile.system_button_redirect_back"></div></div></div><div class="fail" ng-show="bankFail"><div class="infoCheck-success-fail"><div class="failPho"></div><p><span class="icon-fail"></span> {{errtext}}</p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name">{</p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box" ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><span class="msg-tip" ng-if="resetPersonalInfoShow" ng-bind="i18mobile.video_authfailed_toInv"></span><div class="perInfo-nextNew" on-tap="gotoResetByType()" id="gotoResetByType" ng-bind="i18mobile.realAuth_type_personalCardType" ng-if="resetPersonalInfoShow" bi_name="{{i18mobile.bi_face_button_resetpersonal}}"></div><div class="perInfo-nextNew" id="gotoReset" on-tap="gotoReset()" ng-bind="i18mobile.personalCertifi_button_resetCertifi" ng-if="!resetPersonalInfoShow"></div><div class="perInfo-nextGre activityAuthRePic" id="gotoPortal" on-tap="gotoPortal()" bi_name="{{i18mobile.recharge_button_home}}" ng-bind="i18mobile.recharge_button_home" ng-show="gotoPortalShow"></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/activityPassportAuth.html', '<style>.popup-body{padding:.5rem}.popup-head{padding:.75rem .5rem}#once{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-3.4rem;top:.35rem;width:3rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.takePho-box .double-button{position:relative;z-index:100}.big-box .add-ti-file-btn .ti-file-btn{overflow:hidden}@media screen and (orientation:landscape){.photo-box1NewWithID{background-size:12rem;height:13rem}}.common-ti-file-input .ti-btn,.common-ti-file-input input,.common-ti-file-inputNocram{width:9.6rem!important;height:7rem;opacity:0;position:relative}.common-ti-file-input{padding:0 0;width:9.6rem;height:7.2rem;background:url(../images/icon_camera.png) no-repeat center 2.5rem;background-size:1.8rem 1.8rem;border:none}</style><div ng-controller="activityPassportAuth.ctrl" bi_parent_name="{{i18mobile.bi_arealAuth_type_passCardType}}" style="height:100%"><div class="TakePhoto" style="padding:1.5rem 0 .3rem" ng-show="starTakePhoto"><div class="takePho-box"><p ng-bind="i18mobile.realAuth_passportPicTip" style="font-size:.85rem;margin-bottom:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_1" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><p ng-bind="i18mobile.realAuth_passportPicReTip2" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><div class="activity-photo-4cornerWithID"><div class="photo-box1NewWithID"><div style="position:absolute;width:100%;height:inherit"><ti-file-upload bi_name="{{i18mobile.bi_personalCertifi_title_takePhoto}}" id="{{idperpic.id}}" class="common-ti-file-inputNocram add-ti-file-btn transparent" style-options="idperpic.styleOptions" uploader="idperpic.uploaderConfig"></ti-file-upload></div><div id="previewIdPerH5New"></div></div></div><p ng-bind="i18mobile.face_tip_takePhoto_3" style="font-size:.75rem;margin-top:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_4" style="font-size:.75rem" ng-if="takePhotoFrist"></p><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" ng-style="{\'position\':isRotated?\'unset\':\'absolute\'}"><div class="double-buttonH5 greButtonH5" ng-if="takePhotoFrist" style="text-align:center"><span id="idperpicReClick_pass" class="perInfo-next seconds-next" on-tap="idperpicReClick_pass()" style="display:inline-block;width:100%" ng-bind="i18mobile.face_button_starTakePhoto" bi_name="{{i18mobile.bi_click_passportpic}}"></span><br></div><div class="double-button activityAuthButtonH5" ng-if="takePhotoSecond"><span id="paas_uploadPhotoId" class="perInfo-next seconds-next activityAuthsubmit" on-tap="gotoSubmitInfo.click()" style="display:inline-block;width:100%" ng-disabled="!idCardFrontModel.uploadFileName || !idCardBackModel.uploadFileName ||!idperpic.uploadFileName" ng-bind="i18mobile.face_button_submit" bi_name="{{i18mobile.bi_click_passportSubmit}}"></span><br><span id="paas_rePhotoId" class="perInfo-nextGre activityAuthRePic" ng-bind="i18mobile.mobile_rePhoto" bi_name="{{i18mobile.bi_click_passportpicRe}}" on-tap="idperpicReClick_pass()"></span></div></div></div></div><div class="takePhotoCard big-box ng-hide" style="padding:1.5rem 0 .3rem" ng-show="takePhotoCard"><div class="takePho-box"><p class="idcard-front" ng-bind="i18mobile.personalCertifi_tip_passFront"></p><div class="Cardphoto-top"><div id="previewIdFront"></div><ti-file-upload bi_name="{{i18mobile.bi_personalCertifi_tip_passFront}}" id="{{idCardFrontModel.id}}" style-options="idCardFrontModel.styleOptions" uploader="idCardFrontModel.uploaderConfig" class="common-ti-file-input"></ti-file-upload></div><p class="idcard-back" ng-bind="i18mobile.personalCertifi_tip_passBack"></p><div class="Cardphoto-bottom"><div id="previewIdBack"></div><ti-file-upload bi_name="{{i18mobile.bi_personalCertifi_tip_passBack}}" id="{{idCardBackModel.id}}" class="common-ti-file-input add-ti-file-btn" style-options="idCardBackModel.styleOptions" uploader="idCardBackModel.uploaderConfig"></ti-file-upload></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" ng-style="{\'position\':isRotated?\'unset\':\'absolute\'}"><div class="double-button greButtonH5" style="text-align:center;display:block"><div style="margin:0 5%"><div class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle"></div><span class="fl" style="text-align:left;margin-bottom:.5rem" ng-bind="i18mobile.face_onePageTipTitle_camera"></span></div><button class="perInfo-next" id="paas_takePhotoCardNext" bi_name="{{i18mobile.bi_activityPassportPicNext}}" ng-disabled="!idCardFrontModel.uploadSuccess||!idCardBackModel.uploadSuccess" on-tap="gotoStarTakePhoto()" ng-bind="i18mobile.personalCertifi_button_next"></button></div></div></div></div><div class="loading big-box ng-hide" ng-show="loading"><div class="infoCheck"><div class="lodingGif"></div><p ng-bind="i18mobile.personalCertifi_tip_confirmInfoLoading"></p><p ng-bind="i18mobile.personalCertifi_tip_confirmInfoTime"></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_placeholder_passCard"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box ng-hide" ng-show="isMcloudApps"><div class="perInfo-next" id="paas_backHome" on-tap="backHome()">返回个人首页</div></div><div class="next-box ng-hide" ng-show="!isMcloudApps"><a href="{{hwUrl}}" ng-show="!isActivity"><div class="perInfo-next" id="paas_backHome">返回首页</div></a><div ng-show="isActivity"><div class="activity-tip" ng-bind="i18mobile.activity_tip"></div><div class="perInfo-next" id="paas_gotoActivity" on-tap="gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div></div></div></div><div class="fail big-box ng-hide" ng-show="fail"><div class="infoCheck-success-fail"><div class="failPho"></div><p><span class="icon-fail"></span>{{i18mobile.personalCertifi_tip_confirmInfoFail}}</p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box"><div class="perInfo-next" id="paas_gotoReset" on-tap="gotoReset()" ng-bind="i18mobile.personalCertifi_button_resetCertifi"></div></div></div><div class="success big-box ng-hide" ng-show="success"><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> <span ng-bind="confirmInfoSuccess"></span></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.realAuth_allianceAuth_customerType"></p><p ng-bind="i18mobile.customerType1"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_placeholder_passCard"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div ng-if="verifyFlow" style="padding:.5rem"><p style="font-size:.7rem" ng-bind="i18mobile.customer_person2_success_tips1_before"></p><p style="font-size:.7rem" ng-bind="i18mobile.customer_person2_success_tips2_before"></p></div><div class="next-box"><div class="perInfo-next" id="paas_redirectBack" on-tap="redirectBack()" ng-bind="i18mobile.system_button_redirect_back" ng-show="promotion"></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/activityPersonalAuth.html', '<style>#once{color:rgba(255,255,255,.5)}@media screen and (orientation:landscape){html{font-size:26.67px}.activityAuth_cert-type-bottom-info{position:unset}}a:visited{color:#387ef5}.fontBold{font-weight:700}.appfooter{text-align:center;font-size:12px;position:absolute;bottom:0;left:0;right:0;margin-bottom:3.2rem}.app-perInfo-boxAuth{margin:17.5rem auto auto;width:80%;height:auto;font-size:.7rem;position:relative}.cloudapp{font-family:FZLTHK--GBK1-0;font-size:16px;color:#000;letter-spacing:1px;text-align:center;line-height:32px}</style><div class="big-box"><div id="CBC_RiskCheck_RiskInfo_Form"></div><div id="personalhidden" style="display:none" bi_parent_name="" ng-cloak><div class="authTitleH5" meta-data-adjust-app="hide" ng-if="pageShow.perInformation"><span class="authTitleH5_personalAuth" ng-bind="realAuth_personalAuth" ng-if="!pageShow.perInformation"></span></div><div class="perInformationfirPage" style="margin-top:1.804rem" ng-show="pageShow.perInformation"><div class="activityAuth_personalAuthTitle" ng-style="{\'overflow\':isRotated?\'visible\':\'\'}" ng-bind="pageShow.personalAuthTitle"></div><div class="mobileVideoConfimTip" ng-bind-html="pageShow.personalAuthContent"></div><div class="perInfo-boxAuth" ng-style="{\'overflow\':isRotated?\'visible\':\'\'}"><p id="nameid" class="complete_input_lable" ng-bind="personal.name?formItems.realName.label:\'\'"></p><input type="text" bi_name="{{i18mobile.bi_input_name}}" placeholder="{{formItems.realName.placeholder}}" ng-focus="formItems.realName.focus()" ng-blur="formItems.realName.blur()" id="{{formItems.realName.id}}" ng-model="personal.name" ng-change="formItems.realName.change()" ng-minlength="1" maxlength="{{formItems.realName.maxLength}}"> <span class="info-error" ng-show="inputNameErrorMsg" ng-bind="inputNameErrorMsg"></span><div class="cardChange-box"><p id="comCardid" class="complete_input_lable" ng-bind="personal.idCard?formItems.idCard.label:\'\'"></p><input type="{{formItems.idCard.type}}" bi_name="{{i18mobile.bi_input_num}}" placeholder="{{formItems.idCard.placeholder}}" ng-focus="formItems.idCard.focus()" ng-blur="formItems.idCard.blur()" id="{{formItems.idCard.id}}" ng-change="formItems.idCard.change()" ng-model="personal.idCard" ng-minlength="1" maxlength="18" ng-maxlength="18" required> <span class="info-error" ng-show="inputIdCardErrorMsg" ng-bind="inputIdCardErrorMsg"></span></div><p class="resetAgree" style="padding-bottom:1rem"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" ng-checked="formItems.agree.agreeCheck" on-tap="formItems.agree.focus()" ng-model="formItems.agree.agreeCheck" style="vertical-align:middle" value="#f0544d" bi_name="{{i18mobile.bi_click_agree}}"> <label for="color-input-red" style="padding:.4rem" on-tap="formItems.idCard.onBlur()"></label> <span class="resetAgreelable" style="padding-left:.2rem"><span id="resett1" style="color:#34475f" ng-click="formItems.agree.clickAgree()" bi_name="{{i18mobile.bi_click_agree}}" ng-bind="i18mobile.realAuth_title_agree"></span> <span id="resett" ng-click="formItems.agree.gotoAgreeMengBanShow()" ng-bind="i18mobile.realAuth_agree_tipContont"></span></span></p><div class="nextButtonNew" id="onceActity" name="nextBtn" bi_name="{{i18mobile.bi_activityPensonalAuthNext}}" ng-disabled="!personal.idCardFlag||!personal.nameFlag||!formItems.agree.agreeCheck" on-tap="nextBtn();event.stopPropagation()" ng-bind="i18mobile.personalCertifi_button_next"></div></div><div class="activityAuth_cert-type-bottom-info"><div ng-if="fromPage!=\'qrcode\'" id="cardChangeNew" on-tap="formItems.changeAuthType.click()" bi_name="{{i18mobile.bi_activitypensonalAuthchange}}"><span ng-bind="i18mobile.realAuth_changeTypeTitle_idCardType"></span></div></div></div><div id="nextBtnContent" style="display:none;height:calc(100% - 2.36rem)"><div ng-include="personalInfourl" style="height:100%"></div></div><div class="mengban" ng-if="comBankMengban"><div><div id="bankPrompt"><div id="Bankbg"></div><p ng-bind="i18mobile.company_tip_loginPC"></p><p ng-bind="i18mobile.company_tip_loginWeb"></p><p class="choose"><span id="BankSure" ng-bind="i18mobile.company_button_loginWebSure" on-tap="gotoComBankMengBanHide()"></span></p></div></div></div><div ng-show="formItems.changeAuthType.isShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8" on-tap="formItems.changeAuthType.closeClick()"></div><div id="changeAuthTypePage" style="background-color:#f8f9fb;position:fixed;border-radius:5px 5px 0 0;z-index:11;right:0;left:0;bottom:0;margin:auto;max-width:470px;overflow:auto"><div class="comfimTitle"><span ng-bind="i18mobile.realAuth_changeAuthType"></span> <span style="float:right" on-tap="formItems.changeAuthType.closeClick()" id="button-close"></span></div><div style="text-align:center;padding:0 15px"><div class="changeTypeTitle" ng-bind="i18mobile.realAuth_personalAuth"></div><div class="changeType" ng-if="formItems.changeAuthType.changeType.videoType && !isShowAPP" id="changeidCardType" on-tap="formItems.changeAuthType.change(\'videoType\',true)"><span class="changeTypeImage changeType-individ_face"></span><div class="changeTypeContent"><div class="changeTypeContentTitle"><span ng-bind="i18mobile.realAuth_type_idCardType"></span> <span ng-bind="i18mobile.realAuth_now" class="changeTypeContentTitlePoint"></span> <span ng-bind="i18mobile.video_95" class="changeTypeContentTitlePoint"></span></div><div ng-bind="i18mobile.video_faceTip" class="changeTypeContentTitlePoint2"></div></div></div><div class="changeType" ng-if="formItems.changeAuthType.changeType.personalCardType" id="changepersonalCardType" on-tap="formItems.changeAuthType.change(\'personalCardType\')"><span class="changeTypeImage changeType-individ_idCard"></span><div class="changeTypeContent"><div class="changeTypeContentTitle"><span ng-bind="i18mobile.realAuth_type_personalCardType"></span></div></div></div><div class="changeType" ng-if="formItems.changeAuthType.changeType.bankCardType" id="changebankCardType" on-tap="formItems.changeAuthType.change(\'bankCardType\')"><span class="changeTypeImage changeType-individ_bank"></span><div class="changeTypeContent"><div class="changeTypeContentTitle"><span ng-bind="i18mobile.realAuth_type_bankCardType"></span> <span ng-bind="i18mobile.realAuth_now" class="changeTypeContentTitlePoint"></span></div><div ng-bind="i18mobile.video_bankTip" class="changeTypeContentTitlePoint2"></div></div></div><div class="changeType" ng-if="isShowAPP" id="changeidCardType" on-tap="showAppPage()"><span class="changeTypeImage changeType-individ_face"></span><div class="changeTypeContent"><div class="changeTypeContentTitle"><span ng-bind="i18mobile.realAuth_type_idCardType"></span> <span ng-bind="i18mobile.realAuth_now" class="changeTypeContentTitlePoint"></span></div><div ng-bind="i18mobile.video_faceTip" class="changeTypeContentTitlePoint2"></div></div></div><div class="changeType" on-tap="formItems.changeAuthType.change(\'passCardType\')"><span class="changeTypeImage changeType-individ_paas"></span><div class="changeTypeContent"><div class="changeTypeContentTitle"><span ng-bind="i18mobile.realAuth_type_passCardType"></span></div></div></div><div class="changeTypeTitle" style="margin:17px 0 .5rem" ng-bind="i18mobile.realAuth_companyAuth"></div><span class="comfimTitle-ent-desc" ng-bind="i18mobile.realAuth_personalAuthCompanyTip"></span><div class="changeType" on-tap="gotoEntAuth()" id="gotoEntAuth" style="margin-bottom:.7rem"><span class="changeTypeImage changeType-individ_ent"></span><div class="changeTypeContent"><span class="changeTypeContentTitle" ng-bind="i18mobile.realAuth_compAuth"></span></div></div><div ng-show="isShowAllianceAuth"><div class="changeTypeTitle" style="margin:17px 0 .5rem" ng-bind="i18mobile.realAuth_alliance_title"></div><div class="changeType" on-tap="allianceAuth()" id="alliance" style="margin-bottom:.7rem;height:inherit"><div class="changeTypeContent" style="padding-left:1rem"><span class="changeTypeContentTitle" ng-bind="i18mobile.realAuth_alliance" style="font-size:.7rem!important"></span></div></div></div></div></div></div><div id="allianceContent" style="display:none;height:calc(100% - 2.36rem)"><div ng-include="allianceContent" style="height:100%"></div></div><div ng-show="isShowPrivacy"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8" on-tap="formItems.agree.closePrivacy()"></div><div id="privacyContent" style="font-size:.75rem;height:75%;background-color:#f8f9fb;position:fixed;border-radius:5px 5px 0 0;z-index:11;right:0;left:0;bottom:0;margin:auto;max-width:470px"><div class="comfimTitle"><span ng-bind="i18mobile.privacy"></span> <span style="float:right" on-tap="formItems.agree.closePrivacy()" class="button-close"></span></div><div style="overflow-y:auto;height:100%;text-align:left;padding:0 15px;color:#666"><div id="privacy"></div></div></div></div><div class="app-tip" ng-if="isShowAPP && !pageShow.perInformation && pageShow.isShowApp"><div class="app-perInfo-boxAuth"><div class="cloudapp" ng-bind-html="fromPage === \'qrcode\'?i18mobile.error_wxNoSupport:i18mobile.error_wxNoSupport_actity" ng-if="isCallFromWX"></div><div class="cloudapp" ng-bind-html="fromPage === \'qrcode\'?i18mobile.error_browserNoSupport:i18mobile.error_browserNoSupport_actity" ng-if="!isCallFromWX"></div></div><div style="width:90%;margin:auto;left:0;right:0;position:fixed;bottom:2rem"><div class="nextButtonNew" id="redirectBack" name="redirectBack" ng-if="redirUrl" on-tap="redirectBack();event.stopPropagation()" ng-bind="i18mobile.system_button_redirect_back"></div></div></div></div></div><div style="width:0;height:0" ng-show="videoActionValue" class="video-exmp-small-new-{{videoActionValue}}"></div>');
            $templateCache.put('src/app/business/mobile/account/views/activityPersonalCard.html', '<style>.popup-body{padding:.5rem}.popup-head{padding:.75rem .5rem}#once{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-3.4rem;top:.35rem;width:3rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.takePho-box .double-button{position:relative;z-index:100}.big-box .add-ti-file-btn .ti-file-btn{overflow:hidden}@media screen and (orientation:landscape){.photo-box1NewWithID{background-size:10rem;height:10rem}.activity-photo-4cornerWithID{height:10.5rem}}</style><div ng-controller="activityPersonalCard.ctrl" bi_parent_name="{{i18mobile.bi_arealAuth_type_personalCardType}}" style="height:100%"><div class="TakePhoto" style="padding:1.5rem 0 .3rem" ng-show="starTakePhoto"><div class="takePho-box"><p ng-bind="i18mobile.realAuth_passportPicTip" style="font-size:.85rem;margin-bottom:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_1" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><p ng-bind="i18mobile.realAuth_passportPicReTip2" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><div class="activity-photo-4cornerWithID"><div class="photo-box1NewWithID"><div style="position:absolute;width:100%;height:inherit"><ti-file-upload bi_name="{{i18mobile.bi_personalCertifi_title_takePhoto}}" id="{{idperpic.id}}" class="add-ti-file-btn transparent" style-options="idperpic.styleOptions" uploader="idperpic.uploaderConfig"></ti-file-upload></div><div id="previewIdPerH5New"></div></div></div><p ng-bind="i18mobile.face_tip_takePhoto_3" style="font-size:.75rem;margin-top:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_4" style="font-size:.75rem" ng-if="takePhotoFrist"></p><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" ng-style="{\'position\':isRotated?\'unset\':\'absolute\'}"><div class="double-buttonH5 greButtonH5" ng-if="takePhotoFrist" style="text-align:center"><span id="per_uidperpicReClick" class="perInfo-next seconds-next" on-tap="idperpicReClick_pass()" style="display:inline-block;width:100%" ng-bind="i18mobile.face_button_starTakePhoto" bi_name="{{i18mobile.bi_click_passportpic}}"></span><br></div><div class="double-button activityAuthButtonH5" ng-if="takePhotoSecond"><span id="per_uploadPhotoId" class="perInfo-next seconds-next activityAuthsubmit" on-tap="gotoSubmitInfo.click()" style="display:inline-block;width:100%" ng-disabled="!idCardFrontModel.uploadFileName || !idCardBackModel.uploadFileName ||!idperpic.uploadFileName" ng-bind="i18mobile.face_button_submit" bi_name="perIDSubmit"></span><br><span id="rePhotoId" class="perInfo-nextGre activityAuthRePic" ng-bind="i18mobile.mobile_rePhoto" bi_name="i18mobile.bi_personalCertifi_title_takePhoto" on-tap="idperpicReClick_pass()"></span></div></div></div></div><div class="takePhotoCard big-box ng-hide" style="padding:1.5rem 0 .3rem" ng-show="takePhotoCard"><div class="takePho-box"><p class="idcard-front" ng-bind="i18mobile.personalCertifi_tip_idCardFront"></p><div class="Cardphoto-top"><div id="previewIdFront"></div><ti-file-upload bi_name="{{i18mobile.bi_click_picclickIDCardFront}}" id="{{idCardFrontModel.id}}" style-options="idCardFrontModel.styleOptions" uploader="idCardFrontModel.uploaderConfig"></ti-file-upload></div><p class="idcard-back" ng-bind="i18mobile.personalCertifi_tip_idCardBack"></p><div class="Cardphoto-bottom"><div id="previewIdBack"></div><ti-file-upload bi_name="{{i18mobile.bi_click_picclickIDCardBack}}" id="{{idCardBackModel.id}}" class="add-ti-file-btn" style-options="idCardBackModel.styleOptions" uploader="idCardBackModel.uploaderConfig"></ti-file-upload></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" ng-style="{\'position\':isRotated?\'unset\':\'absolute\'}"><button class="perInfo-next" id="per_takePhotoCardNext" bi_name="per_first_{{i18mobile.bi_company_button_next}}" ng-disabled="!idCardFrontModel.uploadSuccess||!idCardBackModel.uploadSuccess" on-tap="gotoStarTakePhoto()" ng-bind="i18mobile.personalCertifi_button_next"></button></div></div></div><div class="loading big-box ng-hide" ng-show="loading"><div class="infoCheck"><div class="lodingGif"></div><p ng-bind="i18mobile.personalCertifi_tip_confirmInfoLoading"></p><p ng-bind="i18mobile.personalCertifi_tip_confirmInfoTime"></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box ng-hide" ng-show="isMcloudApps"><div class="perInfo-next" id="per_backHome" on-tap="backHome()">返回个人首页</div></div><div class="next-box ng-hide" ng-show="!isMcloudApps"><a href="{{hwUrl}}" id="per_backHome" ng-show="!isActivity"><div class="perInfo-next">返回首页</div></a><div ng-show="isActivity"><div class="activity-tip" ng-bind="i18mobile.activity_tip"></div><div class="perInfo-next" id="per_gotoActivity" on-tap="gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div></div></div></div><div class="fail big-box ng-hide" ng-show="fail"><div class="infoCheck-success-fail"><div class="failPho"></div><p><span class="icon-fail"></span>{{i18mobile.personalCertifi_tip_confirmInfoFail}}</p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box"><div class="perInfo-next" id="per_gotoReset" on-tap="gotoReset()" ng-bind="i18mobile.personalCertifi_button_resetCertifi"></div></div></div><div class="success big-box ng-hide" ng-show="success"><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> <span ng-bind="confirmInfoSuccess"></span></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div ng-if="verifyFlow" style="padding:.5rem"><p style="font-size:.7rem" ng-bind="i18accountV1r2.customer_person2_success_tips1_before"></p><p style="font-size:.7rem" ng-bind="i18accountV1r2.customer_person2_success_tips2_before"></p></div><div class="next-box"><div class="perInfo-next" id="per_redirectBack" on-tap="redirectBack()" ng-bind="i18mobile.system_button_redirect_back" ng-show="promotion"></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/activityVideo.html', '<style>.box-left,.box-right{width:50%;height:100%;box-sizing:border-box;position:absolute;top:0;overflow:hidden}.box-left,.circle-left{left:0}.noPrimseTip{line-height:.7rem;font-size:.7rem;padding:.05rem .5rem;margin:.2rem 0;border-right:1px solid #c2c4ca}.noPrimseTip:last-child{border:none}.box-right,.circle-right{right:0}.circle-left,.circle-right{width:200%;height:100%;box-sizing:border-box;border:4px #50d4ab solid;border-radius:50%;position:absolute;top:0}.circle-left{border-top-color:transparent;border-left-color:transparent;transform:rotate(-45deg)}.circle-right{border-bottom-color:transparent;border-right-color:transparent;transform:rotate(-45deg)}.errorRecom{background:#f5f5f6;width:90%;font-size:14px;font-size:.7rem;text-align:left;margin-left:calc(5%);margin-top:2rem;line-height:1.3rem}.errorRecom-content{padding:.6rem}.hrefClass{color:#526ecc;text-decoration:none}.video-exmp{height:100%}.videoBody{padding-top:3.4rem;text-align:center}.topTip{font-size:.9rem}.next-box{height:auto}.inputstyle{cursor:pointer;font-size:30px;outline:medium none;position:absolute;-moz-opacity:0;opacity:0!important;left:0;top:0}.centerClass{display:flex;justify-content:center;align-items:center}.privacyDetail{padding:0 .8rem;font-size:.6rem;font-family:PingFangSC,PingFangSC-Regular;text-align:left;color:#575d6c;line-height:.9rem}.codeBack.activityVideoCss{position:absolute;left:0;top:0;bottom:0;margin:auto}.codeBack.activityVideoCss::before{width:0}.video-container{position:relative}</style><div class="videoBody" id="videoBody" bi_parent_name="getUserMedia" ng-controller="activityVideo.ctrl"><div id="videoUpload" ng-show="!videoError.isShow && !gotoSubmitInfo.isSubmitSuccess && !gotoEntSubmitInfo.isSubmitSuccess"><div id="topTipMsg" ng-bind-html="video.topTip" ng-show="!isShowH5 || (isShowH5 && video.isShowSaomiao)" class="topTip"></div><div id="showVideoCycle"><div class="videoPlay"><video id="videoNew" ng-show="!isShowH5 && video.isShowVideo" muted controls="controls" playsinline></video><div id="nods" class="{{videoActionValue}}" ng-show="!isShowH5 && video.isShowNods"></div><div id="saomiao" ng-if="video.isShowSaomiao"></div><div id="saomiao1" ng-if="video.isShowSaomiao"></div></div><div id="indicatorContainer" ng-if="video.isShowCycle"><div class="box-left" ng-if="video.isShowCycleNew"><div class="circle-left"></div></div><div class="box-right" ng-if="video.isShowCycleNew"><div class="circle-right"></div></div></div></div><div><p class="videodeclaring" style="margin-top:2rem" ng-bind="i18mobile.video_tip"></p></div></div><div id="goRecordVideoID" ng-if="goRecordVideo.isShow && !videoError.isShow"><div class="video-exmp" id="video-exmp" ng-if="goRecordVideo.isShow"><div class="video-remindTitle" ng-if="isShowH5"><div ng-bind-html="i18mobile.videoTopTip_1" style="line-height:1.3rem"></div><div ng-bind-html="i18mobile.videoNew_H5Exam_tip" style="margin-top:.5rem;line-height:1rem"></div></div><div class="video-exmp-small-new-{{videoActionValue}}" ng-if="isShowH5"></div><div id="videoUpload11" style="margin-top:1.6rem" ng-show="!isShowH5"><div id="topTipMsg" ng-bind-html="i18mobile.video_step2" class="topTip"></div><div id="showVideoCycle"><div class="videoPlay"><div id="nods" class="{{videoActionValue}}"></div></div></div></div><div style="margin-top:2.4rem"><div class="video-exmp-tipImage video-exmp-tipImage1"></div><div class="video-exmp-tipImage video-exmp-tipImage2"></div><div class="video-exmp-tipImage video-exmp-tipImage3"></div></div><div style="display:inline-block;width:100%"><div class="video-exmp-tipImage video-exmp-tipStest"><span class="video-exmp-tipS" ng-bind-html="i18mobile.video_remind__clickafterTip_1"></span></div><div class="video-exmp-tipImage video-exmp-tipStest"><span class="video-exmp-tipS" ng-bind-html="i18mobile.video_remind__clickafterTip_2"></span></div><div class="video-exmp-tipImage video-exmp-tipStest"><span class="video-exmp-tipS" ng-bind-html="i18mobile.video_remind__clickafterTip_3"></span></div></div><div class="double-button greButtonH5" style="z-index:1;margin-top:2.47rem"><span ng-if="!isShowH5" id="videoInputShow" class="nextButtonNew perInfo-next buttonconfirm com_button" on-tap="videoClick()">{{goRecordVideo.label}} </span><span ng-if="isShowH5" id="videoInputShow" class="nextButtonNew perInfo-next buttonconfirm com_button" style="margin-top:0">{{goRecordVideo.label}} </span><input ng-if="isShowH5" style="margin-top:0" id="videoInput" name="videoInput" class="inputstyle nextButtonNew perInfo-next buttonconfirm com_button" type="file" accept="video/*" capture="user" bi_name="{{goRecordVideo.label}}" value="{{goRecordVideo.label}}" on-tap="sendUBAStep()" onchange="angular.element(this).scope().goRecordVideo.onchange()"></div><div class="videobottom centerClass"><p id="noPrimseTipNew" style="color:#526ecc" class="noPrimseTip" on-tap="privacyPage.problemClick()" ng-bind="i18mobile.privacy_page"></p><p id="noPrimseTipNew" style="color:#526ecc" class="noPrimseTip" on-tap="remindPage.problemClick()" ng-bind="i18mobile.video_noPrimseTip"></p></div></div></div><div id="remindPageID" ng-if="remindPage.isShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8"></div><div class="video-exmp container animated fadeInRight" style="height:70%"><div class="video-remindTitle video-container"><span ng-bind="i18mobile.video_helpTitle"></span> <span id="perVideo_goBack" on-tap="remindPage.problemGoBack()" class="codeBack activityVideoCss"></span></div><div class="video-exmp-help"></div><div class="remind_problem_content" ng-bind="i18mobile.face_onePageTipTitle_camera"></div></div></div><div id="privacyPageID" ng-show="privacyPage.isShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8"></div><div class="video-exmp container animated fadeInRight" style="height:70%"><div class="video-remindTitle video-container"><span ng-bind="i18mobile.privacy_title"></span> <span id="perVideo_goBack" on-tap="privacyPage.problemGoBack()" class="codeBack activityVideoCss"></span></div><ul class="privacyDetail" id="privacyDetail"></ul></div></div><div id="videoError" ng-if="videoError.isShow"><div class="videoErrorTop"></div><p ng-bind="i18mobile.video_failed" class="videoMsgtitle"></p><p ng-bind-html="errtext" class="videoMsg"></p><div class="next-box" ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="nextButtonNew" on-tap="videoError.buttonClick()" id="gotoReset" ng-bind="videoError.buttonLable" bi_name="{{videoError.buttonLable}}"></div><div class="button_second" ng-if="activityUrl" on-tap="gotoSubmitInfo.submitSuccessPageButton.click()" id="redirectBack" name="redirectBack" ng-if="redirUrl" ng-bind="gotoSubmitInfo.submitSuccessPageButton.lable" bi_name="redirectBack"></div></div><div class="errorRecom" ng-show="errorScen"><div class="errorRecom-content"><p ng-bind="errorScen == errorScens.moreTimes?i18mobile.mobile_moreTimesTitle:i18mobile.mobile_errorRecomTitle"></p><p ng-bind-html="i18mobile.mobile_errorRecom_change" ng-show="errorScen === errorScens.noRecording"></p><p ng-bind-html="i18mobile.mobile_errorRecom_onvBank" ng-if="!isEntType && errorScen === errorScens.moreTimes"></p><p ng-bind-html="i18mobile.mobile_errorRecom_downApp" ng-if="!isEntType"></p><p ng-bind-html="i18mobile.mobile_errorRecom_entbank" ng-if="isEntType && errorScen === errorScens.moreTimes"></p><p ng-bind-html="i18mobile.mobile_errorRecom_order" ng-show="errorScen === errorScens.moreTimes"></p></div></div></div><div id="videoSucc" ng-if="gotoSubmitInfo.isSubmitSuccess"><div class="videoSuccTop"></div><p ng-bind="i18mobile.video_verfiedSuccess" class="videoMsgtitle"></p><div class="next-box" ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="nextButtonNew" on-tap="gotoSubmitInfo.submitSuccessPageButton.click()" id="gotoReset" ng-bind="gotoSubmitInfo.submitSuccessPageButton.lable" bi_name="{{i18mobile.bi_face_button_resetpersonal}}"></div></div></div><div id="entvideoSucc" ng-if="gotoEntSubmitInfo.isSubmitSuccess"><div class="videoSuccTop"></div><p ng-bind="i18mobile.realAuth_entType_successTitle" class="videoMsgtitle"></p><p ng-bind-html="i18mobile.realAuth_entSuccess" class="videoMsg"></p><div class="next-box" ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="nextButtonNew" on-tap="gotoEntSubmitInfo.submitSuccessPageButton.click()" id="gotoReset" ng-bind="gotoEntSubmitInfo.submitSuccessPageButton.lable" bi_name="{{gotoEntSubmitInfo.submitSuccessPageButton.lable}}"></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/allianceAuth.html', '<style>a{color:#526ecc!important;text-decoration:none!important}.alliance_step_title{width:100%;background-color:#eee;line-height:1.2rem;padding:.4rem .75rem;margin:.7rem 0;font-size:.857rem;border:.05rem solid #eee;color:#222;box-sizing:border-box}.alliance_step_title>img{width:.8rem;height:.8rem;vertical-align:middle;margin-right:.45rem}.alliance_step_title>span{vertical-align:middle}.alliance_step2_btn{display:flex;flex-flow:row nowrap;justify-content:space-between}.alliance_step2_btn button{width:48%}.btn_red{text-align:center;border-radius:4px;font-size:.8rem!important;color:#fff;background:#c7000b;border:none}.btn_red:hover{background:rgba(245,111,105,.6)}.btn_white{text-align:center;border-radius:4px;font-size:.8rem!important;color:#252b3a;background:#fff;border:.05rem solid #adb0b8}.btn_white:hover{color:#007acc;border:.05rem solid #007acc}.alliance_step2_title{font-size:.8rem;line-height:1rem;font-weight:600;margin-bottom:1.5rem}.alliance_step2_list,.alliance_step3_list{display:flex;flex-flow:row nowrap;justify-content:space-between;font-size:.6rem;line-height:.9rem}.alliance_step2_content,.alliance_step3_content{margin-bottom:2rem}.alliance_step3_title{font-size:.9rem;line-height:1.1rem;font-weight:600;margin:1rem auto}.allianceAgree{margin-top:.8rem;font-size:.8rem}.allianceAgreelable{display:inline-block;vertical-align:top;width:calc(100% - 1.2rem)}.allianceAgree_checkbox{width:.9rem;height:.9rem;border:.05rem solid #adb0b8;border-radius:.1rem}.titleThick{font-weight:600}.agreeNextButton{background:linear-gradient(338deg,#e6000d 100%,#c7000b 100%);text-align:center;line-height:2.2rem;color:#fff;border-radius:4px;font-size:.8rem!important;border:none}.agreeNextButton[disabled]{background:rgba(245,111,105,.6)}.allianceAgree_boldContent{font-weight:700}</style><div style="height:100%;margin:.75rem;font-size:.75rem;overflow:auto" class="big-box"><div class="alliance_step_title"><img ng-show="currentStep !==1" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok.png" alt=""> <span ng-show="currentStep !==1" style="font-weight:500" ng-bind="i18mobile.realAuth_allianceAuth_step1_pass"></span> <span ng-show="currentStep ==1" ng-class="{\'titleThick\':currentStep ==1}" ng-bind="i18mobile.realAuth_allianceAuth_step1"></span></div><div ng-show="currentStep ==1"><div ng-if="!isGoDevelopAuthorize"><div ng-bind="i18mobile.depAuth_authorize_title" style="font-weight:600;margin-top:.75rem"></div><div style="margin:.75rem 0 1.5rem;line-height:1.2rem"><div ng-bind="i18mobile.depAuth_authorize_first"></div><div ng-bind="i18mobile.depAuth_authorize_content1"></div><div ng-bind-html="i18mobile.depAuth_authorize_content2"></div><div ng-bind-html="i18mobile.depAuth_authorize_content3"></div><div ng-bind-html="i18mobile.depAuth_authorize_content4"></div><div ng-bind="i18mobile.depAuth_authorize_content5" style="font-weight:600"></div></div></div><div ng-if="isGoDevelopAuthorize"><div ng-bind="i18mobile.depAuth_authorize_title_go" style="font-weight:600;margin-top:.75rem"></div><div style="margin:.75rem 0 1.5rem;line-height:1.2rem"><div ng-bind-html="depAuth_authorize_content_go"></div></div></div><div class="alliance_step2_btn"><button class="agreeNextButton" id="allianceAgreeBtn" ng-bind="isGoDevelopAuthorize?i18mobile.button_AuthCompleted:i18mobile.button_agree" on-tap="nextBtn()"></button> <button class="btn_white" id="allianceAgreeCancelBtn" on-tap="cancelAuth()" ng-bind="i18mobile.realAuth_allianceAuth_step2_cancelBtn"></button></div></div><div class="alliance_step_title"><img ng-show="currentStep ==3" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok.png" alt=""> <span ng-show="currentStep ==3" style="font-weight:500" ng-bind="i18mobile.realAuth_allianceAuth_step2_pass"></span> <span ng-show="currentStep !==3" ng-class="{\'titleThick\':currentStep ==2}" ng-bind="i18mobile.realAuth_allianceAuth_step2"></span></div><div ng-show="currentStep ==2"><div ng-bind="i18mobile.realAuth_allianceAuth_step2_title" class="alliance_step2_title"></div><div class="alliance_step2_content"><div ng-repeat="item in useAllianceAuthInfoList track by $index" style="margin-bottom:1rem"><div class="alliance_step2_list"><span style="width:30%;text-align:left" ng-bind="item.label"></span> <span style="width:70%;text-align:left" ng-bind="item.value"></span></div></div></div><div class="alliance_step2_btn"><button class="btn_red" id="allianceAuthBtn" on-tap="gotoAllianceAuth()" ng-bind="i18mobile.realAuth_allianceAuth_step2_okBtn"></button> <button class="btn_white" id="allianceAuthCancelBtn" on-tap="cancelAuth()" ng-bind="i18mobile.realAuth_allianceAuth_step2_cancelBtn"></button></div></div><div class="alliance_step_title"><span ng-class="{\'titleThick\':currentStep ==3}" ng-bind="i18mobile.realAuth_allianceAuth_step3"></span></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/companyCertification.html', '<style>.popup-body{padding:.5rem}.popup-head{padding:.75rem .5rem}#once{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-3.4rem;top:.35rem;width:3rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.infoCheck-success-fail p:nth-child(2){padding-top:.657rem;font-weight:700;font-size:.85rem;width:90%;line-height:1.18rem;margin:0 auto}.infoCheck-success-fail p:nth-child(3){color:#939393;margin-top:.3rem;margin-bottom:.9rem;line-height:0}@media screen and (orientation:landscape){html{font-size:26.67px}.technologicalProcess span{overflow:visible}.ios-select-widget-box ul li.side1{font-size:20px}.ios-select-widget-box ul li.at{font-size:20px}.ios-select-widget-box header.iosselect-header a{font-size:20px}.ios-select-widget-box #iosSelectTitle{font-size:20px}.lingxing>div:not(:first-child):before{display:none}.tip{position:unset}}</style><div class="firPage"><div class="mengban" style="text-align:center" ng-if="attorViewPage" ng-click="attorView()"><div class="attorViewPageBig"></div></div><ion-content style="overflow-x:hidden;overflow-y:scroll;top:0;bottom:0;right:0;left:0;position:absolute"><div class="mengban" ng-if="comBankMengban"><div><div id="bankPrompt"><div id="Bankbg"></div><p ng-bind="i18mobile.company_tip_loginPC"></p><p ng-bind="i18mobile.company_tip_loginWeb"></p><p class="choose"><span id="BankSure" ng-bind="i18mobile.company_button_loginWebSure" on-tap="gotoComBankMengBanHide()"></span></p></div></div></div><div class="loading ng-hide" ng-show="comLoading"><div class="infoCheck"><div class="lodingGif"></div><p ng-bind="i18mobile.company_content_checkLoad1"></p><p ng-bind="i18mobile.company_content_checkLoad2"></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.company_content_companyName"></p><p class="info-certifi-name" ng-bind="company.name"></p></div><div><p ng-bind="i18mobile.compy_entName_title"></p><p ng-bind="company.registrationNumber"></p></div><div><p ng-bind="i18mobile.auth_authTime"></p><p ng-bind="company.lastapplyTime"></p></div></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" style="width:90%;margin:0 auto"><a href="{{hwUrl}}" id="backHome2" ng-if="!promotion && !isActivity && !isMcloudApps"><div class="perInfo-nextNew" ng-bind="i18mobile.recharge_button_home"></div></a><div ng-if="isActivity && !isMcloudApps"><div class="activity-tip" ng-bind="i18mobile.activity_tip"></div><div class="perInfo-nextNew" id="gotoActivity" on-tap="buttonClicks.gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div></div><div id="redirectBack" class="perInfo-nextNew" ng-if="promotion && !isActivity && !isMcloudApps" on-tap="buttonClicks.redirectBack()" ng-bind="i18mobile.system_button_redirect_back"></div><div id="appBack" class="perInfo-nextNew" ng-if="isMcloudApps" on-tap="buttonClicks.redirectBack()" ng-bind="i18mobile.system_button_back"></div></div></div><div class="fail ng-hide" ng-show="comFail"><div class="infoCheck-success-fail"><div class="failPho"></div><p><span class="icon-fail"></span></p><div ng-bind-html="errtext"></div><p></p><p><span style="font-size:.657rem" ng-bind="auditMemo"></span></p></div><div class="confirm-info" ng-if="company.name && company.registrationNumber && !comStarTakePhoto"><div><p ng-bind="i18mobile.company_content_companyName"></p><p class="info-certifi-name">{{company.name}}</p></div><div><p ng-bind="i18mobile.compy_entName_title"></p><p>{{company.registrationNumber}}</p></div><div><p ng-bind="i18mobile.auth_authTime"></p><p>{{company.lastapplyTime}}</p></div></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" style="width:90%;margin:0 auto"><div class="perInfo-nextNew" on-tap="gotoPortal()" bi_name="{{i18mobile.recharge_button_home}}" ng-bind="i18mobile.recharge_button_home" ng-show="(gotoPortalShow&& !isMcloudApps) ||comStarTakePhoto"></div></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" style="width:90%;margin:0 auto" ng-show="!comStarTakePhoto"><div class="perInfo-nextNew" on-tap="gotoComStarTakePhoto()" bi_name="{{i18mobile.bi_face_button_face}}" ng-bind="i18mobile.company_button_resetInformation"></div></div></div><div class="success big-box" ng-show="comSuccess"><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> <span ng-bind="confirmInfoSuccess"></span></p></div><div class="confirm-info" ng-if="!showCompanyBankCard"><div class="confirm-your-info" style="margin-bottom:.965rem" ng-bind="i18mobile.realAuth_authInfo"></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_customerType"></p><p ng-bind="i18mobile.customerType2"></p></div><div><p ng-bind="i18mobile.company_content_companyName"></p><p style="height:100%">{{company.name}}</p></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_ent_verified_number"></p><p>{{company.registrationNumber}}</p></div><div><p ng-bind="i18mobile.auth_authTime"></p><p>{{company.lastapplyTime}}</p></div></div><div class="confirm-info" ng-if="showCompanyBankCard" style="overflow:scroll;height:53%"><div class="confirm-your-info" style="margin-bottom:.965rem" ng-bind="i18mobile.realAuth_authInfo"></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_customerType"></p><p ng-bind="i18mobile.customerType2"></p></div><div><p ng-bind="i18mobile.company_content_companyName"></p><p style="height:100%">{{company.name}}</p></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_ent_verified_number"></p><p>{{company.registrationNumber}}</p></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_bankAccountName"></p><p style="height:100%">{{company.name}}</p></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_ent_bank_name"></p><p>{{company.bankName}}</p></div><div><p ng-bind="i18mobile.customer_submitauthinfor_page2_bankaddr"></p><p>{{company.city}}</p></div><div><p ng-bind="i18mobile.customer_submitauthinfor_page1_bankdev"></p><p>{{company.subbranch}}</p></div><div><p ng-bind="i18mobile.realAuth_allianceAuth_ent_bank_account"></p><p>{{company.bankAccount}}</p></div><div><p ng-bind="i18mobile.auth_authTime"></p><p>{{company.lastapplyTime}}</p></div></div><div ng-if="verifyFlow" style="padding:.5rem"><p style="font-size:.7rem" ng-bind="i18mobile.customer_person2_success_tips1_before"></p><p style="font-size:.7rem" ng-bind="i18mobile.customer_person2_success_tips2_before"></p></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}" style="width:90%;margin:0 auto"><div id="gotoActivity" class="perInfo-nextNew" ng-if="isActivity&&!isMcloudApps" on-tap="buttonClicks.gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div><div id="redirectBack" class="perInfo-nextNew" ng-if="promotion && !isActivity && !isMcloudApps" on-tap="buttonClicks.redirectBack()" ng-bind="i18mobile.system_button_redirect_back"></div><div id="appBack" class="perInfo-nextNew" ng-if="isMcloudApps" on-tap="buttonClicks.redirectBack()" ng-bind="i18mobile.system_button_back"></div><div id="goBackOriginalPage" class="perInfo-nextNew" ng-if="!promotion && !isActivity && !isMcloudApps" on-tap="buttonClicks.goBackOriginalPage()" ng-bind="i18mobile.system_button_redirect_back"></div></div></div></ion-content></div>');
            $templateCache.put('src/app/business/mobile/account/views/confirmSigningEntity.html', '<style>.languageSwitch{position:absolute;top:43px;right:9px;color:#fff;border:1px #fff;z-index:999;background-color:#252b3a;width:90px;line-height:30px;padding:0;font-size:14px;text-align:center}</style><div class="TitleH5New"><span class="fl huawei_zh" on-tap="gotoPortal()"></span> <span class="fr" style="margin-top:4px"><span ng-bind="languageName_com" style="margin-right:.3rem" on-tap="languageArrow()"></span></span></div><div style="text-align:left;width:90%;margin:1rem auto"><div ng-bind="i18mobile.changeTitle" class="font18" style="font-size:18px;text-align:center;margin:48px 0"></div><div ng-bind="i18mobile.contentTitle" class="font14" style="font-size:14px;margin-bottom:20px"></div><div class="font14" style="font-size:14px;line-height:22px;text-indent:2em"><div ng-bind="i18mobile.content_first" style="font-size:14px"></div><div ng-bind="i18mobile.content_1" style="font-size:14px"></div><div ng-bind="i18mobile.content_2" style="font-size:14px"></div></div><div class="perInfo-next" style="margin-top:48px" on-tap="eflowsApplication(\'agree\')" ng-disabled="applybuttonDisable">{{applybuttonlable}}</div><div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/mAuthorization.html', '<style>a{color:#526ecc!important;text-decoration:none!important}.alliance_step2_btn{display:flex;flex-flow:row nowrap;justify-content:space-between}.alliance_step2_btn button{width:48%}.btn_white{text-align:center;border-radius:4px;font-size:.8rem!important;color:#252b3a;background:#fff;border:.05rem solid #adb0b8}.btn_white:hover{color:#007acc;border:.05rem solid #007acc}.allianceAgree{margin-top:.8rem;font-size:.8rem}.allianceAgree_checkbox{width:.9rem;height:.9rem;border:.05rem solid #adb0b8;border-radius:.1rem}.titleThick{font-weight:600}.agreeNextButton{background:linear-gradient(338deg,#e6000d 100%,#c7000b 100%);text-align:center;line-height:2.2rem;color:#fff;border-radius:4px;font-size:.8rem!important;border:none}.agreeNextButton[disabled]{background:rgba(245,111,105,.6)}.allianceAgree_boldContent{font-weight:700}</style><div class="big-box" style="height:100%;margin:.75rem;font-size:.75rem;overflow:auto"><div ng-bind="i18mobile.authorization_title" style="font-weight:600;margin-top:.75rem;font-size:1rem"></div><div style="margin:1rem 0 1.5rem;line-height:1.2rem"><div ng-bind="i18mobile.authorization_content"></div></div><div><p class="resetAgree" style="padding-bottom:2rem"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" ng-checked="agree.agreeCheck" ng-model="agree.agreeCheck" style="vertical-align:middle" value="#f0544d" bi_name="{{i18mobile.bi_click_agree}}"> <label for="color-input-red" style="padding:.4rem"></label> <span class="resetAgreelable" style="padding-left:.2rem"><span style="padding-left:.2rem;color:#34475f" ng-bind-html="i18mobile.authorization_checkContent"></span></span></p></div><div class="alliance_step2_btn"><button class="agreeNextButton" ng-disabled="!agree.agreeCheck || isAgreed" id="allianceAgreeBtn" ng-bind="i18mobile.button_agree" on-tap="nextBtn()"></button> <button class="btn_white" id="allianceAgreeCancelBtn" on-tap="cancelAuth()" ng-bind="i18mobile.realAuth_allianceAuth_step2_cancelBtn"></button></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/mComplete.html', '<style>.complete_cardChange-boxnoborder{position:relative;border-bottom:0;padding-top:.7rem;margin-top:.5rem;margin-right:.2rem}.com_button{border:none;font-size:.8rem;line-height:2.2rem}.buttonconfirm[disabled]{color:#fff;background:#ccc;border-color:#ccc}.scroll-content{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;margin-top:-1px;padding-top:1px;margin-bottom:-1px;width:auto;height:100%!important}#color-input-red+label{display:inline-block;width:.8rem;height:.8rem;cursor:pointer;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/notChecked.png) 0 0/100% 100% no-repeat}.resetAgreelable{line-height:.75rem;display:inline-block;vertical-align:top;margin-top:.3rem;width:calc(100% - 1.5rem)}.resetAgree span{margin-left:.1rem;font-size:.65rem}.perInfo-next{margin-top:.504rem!important}.offline-InternalUser{font-size:.867rem;line-height:1rem;margin-top:2rem}.offline-InternalUser a{color:#387ef5;font-size:.867rem;line-height:1rem}.offline-InternalUser .offline-InternalUser-content{font-size:14px;margin-top:30px;margin-bottom:50px}.complete_cardChange-box{margin-top:0}input{width:100%}.complete_input_lable a{color:#499df3;font-size:.6rem;letter-spacing:0}.bsPhoneTipVal{margin-top:6px;line-height:18px}.languageSwitch{position:absolute;top:43px;right:9px;color:#fff;border:1px #fff;z-index:999;background-color:#252b3a;width:90px;line-height:30px;padding:0;font-size:14px;text-align:center}.complete_noComplete{font-size:.8rem}</style><div class="TitleH5"><span class="fl huawei"></span> <span class="fr" style="margin-top:4px"><span ng-bind="languageName_com" style="margin-right:.3rem" on-tap="languageArrow()"></span><span id="languageArrow" class="arrow-down" on-tap="languageArrow()"></span></span><div class="languageSwitch"><div ng-repeat="languageArr in supportLanguage_com" ng-if="languageArr[0] !== language"><span ng-bind="languageArr[1]" ng-show="languageSwitch" on-tap="changeLanguage(languageArr[0])"></span></div></div></div><div class="perInfo-box perInfo-boxComplete" id="boxComplete" style="display:none"><div><span class="complete_noComplete" ng-bind="i18mobile.complete_gobackTip1"></span> <span class="complete_noComplete" style="color:#499df3" ng-bind="i18mobile.complete_gobackTip2" ng-click="gobackPage()"></span></div><div class="complete_step_div" ng-hide="currentStep > 1"><span ng-class="{\'complete_step_div_icon\':currentStep > 0}"><span ng-show="currentStep ==0">1</span></span> <span ng-bind="i18accountV1r2.complete_wizard_step0"></span></div><div id="step0" ng-show="currentStep ==0"><div class="complete_cardChange-boxnoborder" ng-show="!isVerifiEmail"><p id="emailAddressId01" class="complete_input_lable" ng-bind="step1ForDatas.formItems.emailAddress.label"></p><div class="cardChangefl"><span ng-bind="step1ForDatas.formItems.emailAddress.origvalue"></span></div></div><div class="complete_cardChange-boxnoborder" ng-show="isVerifiEmail"><p id="mobilePhoneId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.mobilePhone.label"></p><div class="cardChangefl noborder"><span ng-bind="step1ForDatas.formItems.mobilePhone.value"></span></div></div><div class="complete_cardChange-boxnoborder" ng-show="step1ForDatas.formItems.step1SMSCoce.show"><p id="step1SMSCoceId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.step1SMSCoce.label"></p><button on-tap="step1ForDatas.getStep1Code.click()" ng-disabled="step1ForDatas.getStep1Code.disable" ng-bind="step1ForDatas.getStep1Code.text" class="cardChangefl fr complete_button_1"></button> <input type="text" style="border-bottom:1px solid #ececec" class="complete_inputmobile_1 perInfo-boxCompleteAutoInput" placeholder="{{step1ForDatas.formItems.step1SMSCoce.placeholder}}" ng-focus="step1ForDatas.formItems.step1SMSCoce.focus()" ng-blur="step1ForDatas.formItems.step1SMSCoce.blur()" id="{{step1ForDatas.formItems.step1SMSCoce.id}}" ng-model="step1ForDatas.formItems.step1SMSCoce.value" ng-change="step1ForDatas.formItems.step1SMSCoce.change()" ng-minlength="1" maxlength="6" required></div><button class="perInfo-next com_button" id="{{step1ForDatas.getStep1Code.id}}" on-tap="step1ForDatas.getStep1Code.click()" ng-bind="step1ForDatas.getStep1Code.label" ng-show="!step1ForDatas.formItems.step1SMSCoce.show"></button> <button class="perInfo-next buttonconfirm com_button" id="nextBtn" ng-disabled="nextBtn.disable0" ng-show="step1ForDatas.formItems.step1SMSCoce.show" on-tap="nextBtn.click()" ng-bind="nextBtn.text"></button></div><div class="complete_step_div" ng-hide="currentStep > 1"><span ng-class="{\'complete_step_div_icon\':currentStep > 1}"><span ng-show="currentStep <2">2</span></span> <span ng-bind="complete_step1_title"></span></div><div id="step1" ng-show="currentStep == 1"><div class="complete_cardChange-box" ng-show="!isVerifiEmail"><p id="newMobilePhoneId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.newMobilePhone.label"></p><div class="cardChangefl" ng-if="!completeCountryCodeSwitch" on-tap="step1ForDatas.formItems.nationalCode.click()"><span ng-bind="step1ForDatas.formItems.nationalCode.placeholder"></span> <span class="jiantoudown"></span></div><div class="cardChangefl" ng-if="completeCountryCodeSwitch" style="margin-right:.4rem"><span ng-bind="step1ForDatas.formItems.nationalCode.placeholder"></span></div><input type="text" class="complete_inputmobile_1" placeholder="{{step1ForDatas.formItems.newMobilePhone.placeholder}}" ng-focus="step1ForDatas.formItems.newMobilePhone.focus()" ng-blur="step1ForDatas.formItems.newMobilePhone.blur()" id="{{step1ForDatas.formItems.newMobilePhone.id}}" ng-model="step1ForDatas.formItems.newMobilePhone.value" ng-change="formItemstiValidation(step1ForDatas.formItems.newMobilePhone.id)" ng-minlength="1" maxlength="20" ng-maxlength="20" required style="display:inline-block"></div><p id="newMobilePhoneId" class="complete_input_lable bsPhoneTipVal" ng-if="isHwId" ng-bind="bsPhoneTipVal"></p><div ng-class="{\'complete_cardChange-box\':step1ForDatas.formItems.emailAddress.isChange,\'complete_cardChange-boxnoborder\':!step1ForDatas.formItems.emailAddress.isChange}" ng-show="isVerifiEmail"><p id="emailAddressId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.emailAddress.label"></p><div class="cardChangefl fr" ng-show="!step1ForDatas.formItems.emailAddress.isChange"><span ng-bind="step1ForDatas.formItems.emailAddress.changeLable" on-tap="step1ForDatas.changeEmail()"></span></div><div class="cardChangefl" ng-show="!step1ForDatas.formItems.emailAddress.isChange"><span ng-bind="step1ForDatas.formItems.emailAddress.value"></span></div><input type="text" ng-focus="step1ForDatas.formItems.emailAddress.focus()" ng-blur="step1ForDatas.formItems.emailAddress.blur()" ng-show="step1ForDatas.formItems.emailAddress.isChange" id="{{step1ForDatas.formItems.emailAddress.id}}" ng-model="step1ForDatas.formItems.emailAddress.value" ng-change="step1ForDatas.formItems.emailAddress.change()" ng-minlength="1" maxlength="128" ng-maxlength="128" required></div><div class="complete_cardChange-boxnoborder" ng-show="step1ForDatas.formItems.step2SMSCoce.show"><p id="step2SMSCoceId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.step2SMSCoce.label"></p><button on-tap="step1ForDatas.getStep2Code.click()" ng-bind="step1ForDatas.getStep2Code.text" ng-disabled="step1ForDatas.getStep2Code.disable" class="cardChangefl fr complete_button_1"></button> <input type="text" style="border-bottom:1px solid #ececec" class="complete_inputmobile_1 perInfo-boxCompleteAutoInput" placeholder="{{step1ForDatas.formItems.step2SMSCoce.placeholder}}" ng-focus="step1ForDatas.formItems.step2SMSCoce.focus()" ng-blur="step1ForDatas.formItems.step2SMSCoce.blur()" id="step1ForDatas.formItems.step2SMSCoce.id" ng-model="step1ForDatas.formItems.step2SMSCoce.value" ng-change="step1ForDatas.formItems.step2SMSCoce.change()" ng-minlength="1" maxlength="6" required></div><button class="perInfo-next buttonconfirm com_button" id="once2" ng-show="!step1ForDatas.formItems.step2SMSCoce.show" on-tap="step1ForDatas.getStep2Code.click()" ng-bind="step1ForDatas.getStep2Code.text"></button> <button class="perInfo-next buttonconfirm com_button" id="nextBtn2" ng-disabled="nextBtn.disable1" ng-show="step1ForDatas.formItems.step2SMSCoce.show" on-tap="nextBtn.click()" ng-bind="nextBtn.text"></button></div><div class="complete_step_div" ng-hide="currentStep>2"><span ng-class="{\'complete_step_div_icon\':currentStep > 2}"><span ng-show="currentStep <=2">3</span></span> <span ng-bind="i18mobile.complete_step2"></span></div><div ng-show="currentStep == 2" class="complete_step2_div"><div style="height:100%"><div ng-include="mModfyInfoUrl"></div><button class="perInfo-next buttonconfirm com_button" id="nextBtn2" ng-disabled="!modfyFunction.vaildResult" on-tap="nextBtn.click()" ng-bind="nextBtn.text"></button></div></div><div class="complete_step_div" ng-hide="showSuccess"><span><span>4</span></span> <span ng-bind="!isOffline?i18mobile.complete_step3:i18ac.offline_stepTitle4"></span></div><div ng-if="!isOffline&&currentStep ==3"><div id="uc_discount" module="usercenter.config"></div></div><div ng-if="isOffline&&currentStep ==3" style="overflow-y:auto" ng-style="{\'max-height\':currentLanguage===\'en-us\'?\'24rem\':\'23rem\'}"><div ng-if="!isInternalUser" class="associated-header associated-header-complete"><div class="completeTitle"><span ng-bind-html="i18ac.offline_title"></span></div><div class="willComplete-associate"><div id="" class="radio-panel" ng-class="{active:offline.radioList.selectId==offline.radioList.data[2].id}" ng-click="offline.radioList.click(offline.radioList.data[2].id)" style="display:flex;justify-content:space-between"><div class="radio-panel-heading" style="width:7%;padding-top:.1rem"><input id="radio1" type="radio" ng-model="offline.radioList.selectId" ng-value="offline.radioList.data[2].id" ng-disabled="offline.radioList.data[2].disable" ti-radio="offline.radioList.data[2].key"></div><div class="radio-panel-body" style="width:92%"><div><span class="radio-panel-title" ng-bind="i18ac.offline_way3"></span></div><div class="light-grey"><span ng-bind="i18ac.offline_way3_tip"></span></div></div></div><div id="" class="radio-panel" ng-class="{active:offline.radioList.selectId==offline.radioList.data[0].id}" ng-click="offline.radioList.click(offline.radioList.data[0].id)" style="display:flex;justify-content:space-between"><div class="radio-panel-heading" style="width:7%;padding-top:.1rem"><input id="radio1" type="radio" ng-model="offline.radioList.selectId" ng-value="offline.radioList.data[0].id" ng-disabled="offline.radioList.data[0].disable" ti-radio="offline.radioList.data[0].key"></div><div class="radio-panel-body" style="width:92%"><div><span class="radio-panel-title" ng-bind="i18ac.offline_way1"></span></div><div class="light-grey"><span ng-bind="i18ac.offline_way1_tip"></span></div></div></div><div class="radio-panel" ng-class="{active:offline.radioList.selectId==offline.radioList.data[1].id}" ng-click="offline.radioList.click(offline.radioList.data[1].id)" style="display:flex;justify-content:space-between"><div class="radio-panel-heading" style="width:7%;padding-top:.1rem"><input id="radio2" type="radio" ng-model="offline.radioList.selectId" ng-value="offline.radioList.data[1].id" ng-disabled="offline.radioList.data[1].disable" ti-radio="offline.radioList.data[1].key"></div><div class="radio-panel-body" style="width:92%"><div><span class="radio-panel-title" ng-bind="i18ac.offline_way2"></span></div><div class="light-grey"><span ng-bind-html="i18ac.offline_way2_tip"></span></div></div></div><button id="transButton" type="button" class="perInfo-next buttonconfirm com_button" ng-bind="offline.button.lable" ng-disabled="offline.button.disable" ng-click="offline.button.click()"></button></div></div><div class="offline-InternalUser" ng-if="isInternalUser"><div style="font-size:.875rem" ng-bind-html="i18ac.offline_huaweiAccount_title"></div><div class="offline-InternalUser-content" ng-bind-html="i18ac.offline_huaweiAccount"></div></div></div></div><div ng-show="model.countryCodeShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8" on-tap="goBack()"></div><div id="areaCode" style="height:75%;background-color:#fff;position:fixed;border-radius:5px 5px 0 0;z-index:11;right:0;left:0;bottom:0;margin:auto;max-width:470px"><div class="contry-code" style="text-align:center;padding:10px 15px 0"><span ng-bind="i18mobile.title_label_natity_hk"></span> <span style="float:right" on-tap="goBack()"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div class="search-out"><input id="search-input" ng-model="model.searchValue" placeholder="{{i18mobile.title_label_natity_hk}}" ng-change="searchChange()"> <span class="clear-img"><img on-tap="clear()" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div id="codeList" class="out-div" style="overflow:auto;height:75%"><div ng-repeat="item in countryCodeList" class="item-div" on-tap="clickAreaCode(item)"><span class="country-font">{{item.value}}</span><span class="code-font">{{item.label}}</span></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/mModfyInfo.html', '<div id="mModfyInfo" ng-controller="mModfyInfo.ctrl"><div><button class="complete_button complete_button_2" ng-if="!modfyfrom.formItems.itemCustomerType.personalDisable" ng-class="{\'complete_button_red\':modfyfrom.formItems.itemCustomerType.personalVal ==modfyfrom.formItems.itemCustomerType.defaultSelected}" on-tap="modfyfrom.formItems.itemCustomerType.click(modfyfrom.formItems.itemCustomerType.personalVal)" ng-bind="modfyfrom.formItems.itemCustomerType.personalDisp"></button> <button style="margin-left:.9rem" class="complete_button complete_button_2" ng-if="!modfyfrom.formItems.itemCustomerType.enterpriseDisable" on-tap="modfyfrom.formItems.itemCustomerType.click(modfyfrom.formItems.itemCustomerType.enterpriseVal)" ng-bind="modfyfrom.formItems.itemCustomerType.enterpriseDisp" ng-class="{\'complete_button_red\':modfyfrom.formItems.itemCustomerType.enterpriseVal ==modfyfrom.formItems.itemCustomerType.defaultSelected}"></button></div><div class="complete_cardChange-box" ng-show="!modfyfrom.formItems.realName.hide"><p id="realNameId" class="complete_input_lable" ng-bind="modfyfrom.formItems.realName.label"></p><input type="text" placeholder="{{modfyfrom.formItems.realName.placeholder}}" ng-focus="modfyfrom.formItems.realName.focus()" ng-blur="modfyfrom.formItems.realName.blur()" id="modfyfrom.formItems.realName.id" ng-model="modfyfrom.formItems.realName.value" ng-change="modfyfrom.formItems.realName.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.realName.maxLength}}"></div><div class="complete_cardChange-box" ng-show="!modfyfrom.formItems.corpName.hide&&modfyfrom.formItems.itemCustomerType.defaultSelected==1"><p id="corpNameId" class="complete_input_lable" ng-bind="modfyfrom.formItems.corpName.label"></p><input type="text" placeholder="{{modfyfrom.formItems.corpName.placeholder}}" ng-focus="modfyfrom.formItems.corpName.focus()" ng-blur="modfyfrom.formItems.corpName.blur()" ng-change="modfyfrom.formItems.corpName.change()" id="modfyfrom.formItems.corpName.id" ng-disabled="searchAddressByTaxNo" ng-model="modfyfrom.formItems.corpName.value" ng-change="modfyfrom.formItems.corpName.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.corpName.maxLength}}" required></div><div class="complete_cardChange-box"><p id="taxNoId" class="complete_input_lable" ng-bind="modfyfrom.formItems.taxNo.label"></p><input type="text" placeholder="{{modfyfrom.formItems.taxNo.placeholder}}" ng-focus="modfyfrom.formItems.taxNo.focus()" ng-blur="modfyfrom.formItems.taxNo.blur()" ng-change="modfyfrom.formItems.taxNo.change()" id="modfyfrom.formItems.taxNo.id" ng-model="modfyfrom.formItems.taxNo.value" ng-change="modfyfrom.formItems.taxNo.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.taxNo.maxLength}}"></div><div ng-bind-html="taxNoHelp" class="complete_input_lable" ng-if="isShowTaxNoDetail" style="margin-top:.3rem"></div><div ng-bind="i18mobile.taxNo_tip" class="complete_input_lable" style="margin-top:.3rem;color:#8a8e99" ng-show="searchAddressByTaxNo"></div><div class="complete_cardChange-box" ng-if="!modfyfrom.formItems.businessScope.hide"><p id="businessScopeId" class="complete_input_lable" ng-bind="modfyfrom.formItems.businessScope.label"></p><input type="text" placeholder="{{modfyfrom.formItems.businessScope.placeholder}}" ng-focus="modfyfrom.formItems.businessScope.focus()" ng-blur="modfyfrom.formItems.businessScope.blur()" ng-change="modfyfrom.formItems.businessScope.change()" id="modfyfrom.formItems.businessScope.id" ng-model="modfyfrom.formItems.businessScope.value" ng-change="modfyfrom.formItems.businessScope.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.businessScope.maxLength}}"></div><div ng-bind-html="modfyfrom.formItems.businessScope.businessScope_placeholder" class="complete_input_lable" ng-if="!modfyfrom.formItems.businessScope.hide" style="margin-top:.3rem"></div><div class="complete_cardChange-box"><p id="address1Id" class="complete_input_lable" ng-bind="modfyfrom.formItems.address1.label"></p><input type="text" placeholder="{{modfyfrom.formItems.address1.placeholder}}" ng-focus="modfyfrom.formItems.address1.focus()" ng-blur="modfyfrom.formItems.address1.blur()" ng-change="modfyfrom.formItems.address1.change()" id="modfyfrom.formItems.address1.id" ng-model="modfyfrom.formItems.address1.value" ng-minlength="1" maxlength="{{modfyfrom.formItems.address1.maxLength}}" ng-disabled="searchAddressByTaxNo" required></div><div class="complete_cardChange-box"><p id="address2Id" class="complete_input_lable" ng-bind="modfyfrom.formItems.address2.label"></p><input type="text" placeholder="{{modfyfrom.formItems.address2.placeholder}}" ng-focus="modfyfrom.formItems.address2.focus()" ng-blur="modfyfrom.formItems.address2.blur()" id="modfyfrom.formItems.address2.id" ng-model="modfyfrom.formItems.address2.value" ng-minlength="1" maxlength="{{modfyfrom.formItems.address2.maxlength}}" ng-disabled="searchAddressByTaxNo" required></div><div class="complete_cardChange-box" ng-show="hideIndiaProvinces"><p id="hk_provinceId" class="complete_input_lable" ng-bind="modfyfrom.formItems.hk_province.label"></p><input type="text" placeholder="{{modfyfrom.formItems.hk_province.placeholder}}" ng-focus="modfyfrom.formItems.hk_province.focus()" ng-blur="modfyfrom.formItems.hk_province.blur()" id="modfyfrom.formItems.hk_province.id" ng-model="modfyfrom.formItems.hk_province.value" ng-change="infoItemstiValidation(modfyfrom.formItems.hk_province.id)" ng-minlength="1" maxlength="{{modfyfrom.formItems.hk_province.maxlength}}" ng-disabled="searchAddressByTaxNo" required></div><div ng-show="!hideIndiaProvinces" class="complete_cardChange-box"><p id="hk_provinceId" class="complete_input_lable" ng-bind="modfyfrom.formItems.indiaProvinces.label"></p><div class="cardChangefl fr" ng-if="!modfyfrom.formItems.indiaProvinces.disable" on-tap="modfyfrom.formItems.indiaProvinces.click()"><span ng-bind="modfyfrom.formItems.indiaProvinces.selectlabel"></span> <span class="jiantou"></span></div><input type="text" style="width:74%!important;overflow:hidden" class="perInfo-boxCompleteAutoInput" placeholder="{{modfyfrom.formItems.indiaProvinces.placeholder}}" disabled="true" id="{{modfyfrom.formItems.indiaProvinces.id}}" ng-model="modfyfrom.formItems.indiaProvinces.value" ng-minlength="1" maxlength="{{modfyfrom.formItems.indiaProvinces.maxLength}}" required><div ng-bind="modfyfrom.formItems.indiaProvinces.disable?i18mobile.addr_indiaProvinces_tip_other:i18mobile.addr_indiaProvinces_tip_once" style="margin-top:4px;color:#f83;font-size:.536rem;margin-bottom:20px"></div></div><div class="complete_cardChange-box"><p id="hk_cityId" class="complete_input_lable" ng-bind="modfyfrom.formItems.hk_city.label"></p><input type="text" placeholder="{{modfyfrom.formItems.hk_city.placeholder}}" ng-focus="modfyfrom.formItems.hk_city.focus()" ng-blur="modfyfrom.formItems.hk_city.blur()" id="modfyfrom.formItems.hk_city.id" ng-model="modfyfrom.formItems.hk_city.value" ng-change="modfyfrom.formItems.hk_city.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.hk_city.maxLength}}" ng-disabled="searchAddressByTaxNo" required></div><div class="complete_cardChange-box"><p id="zipcodeId" class="complete_input_lable" ng-bind="modfyfrom.formItems.zipcode.label"></p><input type="text" placeholder="{{modfyfrom.formItems.zipcode.placeholder}}" ng-focus="modfyfrom.formItems.zipcode.focus()" ng-blur="modfyfrom.formItems.zipcode.blur()" id="modfyfrom.formItems.zipcode.id" ng-model="modfyfrom.formItems.zipcode.value" ng-change="modfyfrom.formItems.zipcode.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.zipcode.maxLength}}" ng-disabled="searchAddressByTaxNo" required></div><div class="complete_cardChange-boxnoborder" ng-if="setModfyInfoInput.nationalityNewName"><p id="nationalityId" class="complete_input_lable" ng-bind="step1ForDatas.formItems.nationality.label"></p><div style="margin-top:4px;font-size:.536rem" ng-bind="setModfyInfoInput.nationalityNewName"></div></div><div style="margin-top:.3rem;font-size:.536rem;color:#f83" ng-bind="setModfyInfoInput.nationalityName" ng-if="setModfyInfoInput.nationalityNewName"></div><div class="complete_cardChange-boxnoborder" ng-if="!setModfyInfoInput.nationalityNewName"><p id="nationalityId" class="complete_input_lable" ng-bind="modfyfrom.formItems.nationality.label"></p><div class="cardChangefl noborder"><span ng-bind="modfyfrom.formItems.nationality.value"></span></div></div><div class="complete_cardChange-box" ng-show="!modfyfrom.formItems.entRealName.hide"><p id="entRealNameId" class="complete_input_lable" ng-bind="modfyfrom.formItems.entRealName.label"></p><input type="text" placeholder="{{modfyfrom.formItems.entRealName.placeholder}}" ng-focus="modfyfrom.formItems.entRealName.focus()" ng-blur="modfyfrom.formItems.entRealName.blur()" id="modfyfrom.formItems.entRealName.id" ng-model="modfyfrom.formItems.entRealName.value" ng-change="modfyfrom.formItems.entRealName.change()" ng-minlength="1" maxlength="{{modfyfrom.formItems.entRealName.maxLength}}" required></div><div ng-show="!modfyfrom.formItems.job.hide" class="complete_cardChange-box"><p id="jobId" class="complete_input_lable" ng-bind="modfyfrom.formItems.job.label"></p><div class="cardChangefl fr" on-tap="modfyfrom.formItems.job.click()"><span ng-bind="modfyfrom.formItems.job.selectlabel"></span> <span class="jiantou"></span></div><input type="text" style="width:80%!important;overflow:hidden" class="perInfo-boxCompleteAutoInput" placeholder="{{modfyfrom.formItems.job.placeholder}}" disabled="true" id="modfyfrom.formItems.job.id" ng-model="modfyfrom.formItems.job.value" ng-minlength="1" maxlength="{{modfyfrom.formItems.job.maxLength}}" required></div><div ng-show="!modfyfrom.formItems.currencyType.hide" class="complete_cardChange-box"><p id="currencyTypeId" class="complete_input_lable" ng-bind="modfyfrom.formItems.currencyType.label"></p><div class="cardChangefl fr" on-tap="modfyfrom.formItems.currencyType.click()"><span ng-bind="modfyfrom.formItems.currencyType.selectlabel"></span> <span class="jiantou"></span></div><input type="text" style="width:80%!important;overflow:hidden" class="perInfo-boxCompleteAutoInput" placeholder="{{modfyfrom.formItems.currencyType.placeholder}}" disabled="true" id="{{modfyfrom.formItems.currencyType.id}}" ng-model="modfyfrom.formItems.currencyType.value" ng-minlength="1" maxlength="{{modfyfrom.formItems.currencyType.maxLength}}" required></div><div class="complete_cardChange-box" ng-hide="modfyfrom.formItems.appIndustry.hide"><p id="appIndustryId" class="complete_input_lable" ng-bind="modfyfrom.formItems.appIndustry.label"></p><div class="cardChangefl fr" on-tap="modfyfrom.formItems.appIndustry.click()"><span ng-bind="modfyfrom.formItems.appIndustry.selectlabel"></span> <span class="jiantou"></span></div><input type="text" style="width:80%!important;overflow:hidden" class="perInfo-boxCompleteAutoInput" placeholder="{{modfyfrom.formItems.appIndustry.placeholder}}" ng-focus="modfyfrom.formItems.appIndustry.focus()" ng-blur="modfyfrom.formItems.appIndustry.blur()" id="modfyfrom.formItems.appIndustry.id" ng-model="modfyfrom.formItems.appIndustry.value" disabled="true" ng-minlength="1" maxlength="{{modfyfrom.formItems.appIndustry.maxLength}}" required></div><div class="complete_cardChange-box" ng-show="!modfyfrom.formItems.subIndustry.hide"><p id="subIndustryId" class="complete_input_lable" ng-bind="modfyfrom.formItems.subIndustry.label"></p><div class="cardChangefl fr" on-tap="modfyfrom.formItems.subIndustry.click()"><span ng-bind="modfyfrom.formItems.subIndustry.selectlabel"></span> <span class="jiantou"></span></div><input type="text" style="width:80%!important;overflow:hidden" class="perInfo-boxCompleteAutoInput" placeholder="{{modfyfrom.formItems.subIndustry.placeholder}}" ng-focus="modfyfrom.formItems.subIndustry.focus()" ng-blur="modfyfrom.formItems.subIndustry.blur()" id="modfyfrom.formItems.subIndustry.id" ng-model="modfyfrom.formItems.subIndustry.value" disabled="true" ng-minlength="1" maxlength="{{modfyfrom.formItems.subIndustry.maxLength}}" required></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/mModifySignEntity.html', '<style>.complete_cardChange-boxnoborder{position:relative;border-bottom:0;padding-top:.7rem;margin-top:.5rem;margin-right:.2rem}.com_button{border:none;font-size:.8rem;line-height:2.2rem}.buttonconfirm[disabled]{color:#fff;background:#ccc;border-color:#ccc}.scroll-content{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;margin-top:-1px;padding-top:1px;margin-bottom:-1px;width:auto;height:100%!important}#color-input-red+label{display:inline-block;width:.8rem;height:.8rem;cursor:pointer;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/notChecked.png) 0 0/100% 100% no-repeat}.resetAgreelable{line-height:.75rem;display:inline-block;vertical-align:top;margin-top:.3rem;width:calc(100% - 1.5rem)}.resetAgree span{margin-left:.1rem;font-size:.65rem}.perInfo-next{margin-top:.504rem!important}.offline-InternalUser{font-size:.867rem;line-height:1rem;margin-top:2rem}.offline-InternalUser a{color:#387ef5;font-size:.867rem;line-height:1rem}.offline-InternalUser .offline-InternalUser-content{font-size:14px;margin-top:30px;margin-bottom:50px}.complete_cardChange-box{margin-top:0}.sign_entity_title,.sign_entity_title span{font-size:.536rem;color:#252b3a;top:0;left:0;z-index:10;line-height:.6rem}.sign_entity_title span{font-weight:700}.sign_entity_title_background{border:1px solid #5e7ce0;background-color:#f2f5fc;border-radius:2px;padding:10px 9px}.sign_button_blue{border-color:#5e7ce0;color:#5e7ce0}.sign_step2_div{left:0;background-color:rgba(255,255,255,0);box-shadow:none;height:27.5rem;overflow:scroll}button[class~=perInfo-next]{border:none;font-size:.8rem;line-height:2.2rem;width:100%;margin:0}input{width:100%}.complete_input_lable a{color:#499df3;font-size:.6rem;letter-spacing:0}</style><div class="TitleH5"><span class="fl huawei"></span> <span class="fr" style="margin-top:4px"><span ng-bind="languageName_com" style="margin-right:.3rem" on-tap="languageArrow()"></span><span id="languageArrow" class="arrow-down" on-tap="languageArrow()"></span></span><div ng-repeat="languageArr in supportLanguage_com" ng-if="languageArr[0] !== language"><span ng-bind="languageArr[1]" id="languageSwitch" ng-show="languageSwitch" on-tap="changeLanguage(languageArr[0])"></span></div></div><div class="perInfo-box perInfo-boxComplete" id="boxComplete" style="display:none"><div class="sign_step2_div" ng-if="!errorMsg"><div style="margin:10px 0"><div ng-bind="i18ac.signEntity_head_title" style="margin:10px 0;font-size:20px"></div><div id="tiAlert02" class="sign_entity_title_background"><span ng-bind-html="headTipContent" class="sign_entity_title"></span></div></div><div><div class="complete_cardChange-box" ng-hide="!isChangeSignEntity"><p id="changeSignEntityNameId" class="complete_input_lable" ng-bind="i18ac.signEntity_party"></p><div ng-bind="changeSignEntityName" style="margin-top:4px;font-size:.536rem"></div></div><div ng-hide="!isChangeSignEntity" ng-bind="signingEntityName" style="margin-top:4px;color:#f83;font-size:.536rem;margin-bottom:20px"></div><div style="margin-top:.16rem;color:#f83;font-size:.536rem;margin-bottom:.5rem" ng-if="isChangeCountry" ng-bind="step1ForDatas.formItems.nationality.value" style="color:#f83"></div><div ng-include="mModfyInfoUrl"></div><p class="resetAgree" style="padding-bottom:1rem" ng-if="isChangeSignEntity"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" ng-click="agree.clickAgree()" name="color-input-red" ng-checked="agree.agreeCheck" ng-model="agree.agreeCheck" style="vertical-align:middle" value="#f0544d" bi_name="{{i18mobile.bi_click_agree}}"> <label for="color-input-red" style="padding:.4rem;margin-top:.2rem"></label> <span class="resetAgreelable" style="padding-left:.2rem"><span id="resett1" style="color:#34475f" ng-click="agree.clickAgree(!agree.agreeCheck)" bi_name="{{i18mobile.realAuth_title_agree}}" ng-bind="i18ac.signEntity_title_agree"></span> <span id="resett" ng-click="agree.gotoAgreeMengBanShow()" ng-bind="signEntity_user_agree"></span></span></p><button class="perInfo-next buttonconfirm com_button" id="nextBtn2" ng-disabled="!modfyFunction.vaildResult && ((isChangeSignEntity && agree.agreeCheck) || !isChangeSignEntity)" on-tap="nextBtn.click()" ng-bind="nextBtn.text"></button> <button class="perInfo-next com_button" style="background:#fff;color:#000;border:1px solid #000" id="{{cancelBtn.id1}}" type="button" ng-click="cancelBtn.click()" ng-bind="cancelBtn.text" style="margin-top:20px"></button></div></div><div style="margin-top:20px;text-align:center" ng-if="errorMsg"><div ng-bind-html="errorMsg" class="sign_entity_title"></div></div></div><div ng-show="model.countryCodeShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8" on-tap="goBack()"></div><div id="areaCode" style="height:75%;background-color:#fff;position:fixed;border-radius:5px 5px 0 0;z-index:11;right:0;left:0;bottom:0;margin:auto;max-width:470px"><div class="contry-code" style="text-align:center;padding:10px 15px 0"><span ng-bind="i18mobile.title_label_natity_hk"></span> <span style="float:right" on-tap="goBack()"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div class="search-out"><input id="search-input" ng-model="model.searchValue" placeholder="{{i18mobile.title_label_natity_hk}}" ng-change="searchChange()"> <span class="clear-img"><img on-tap="clear()" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div id="codeList" class="out-div" style="overflow:auto;height:75%"><div ng-repeat="item in countryCodeList" class="item-div" on-tap="clickAreaCode(item)"><span class="country-font">{{item.value}}</span><span class="code-font">{{item.label}}</span></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/personalInfo.html', '<style>.takePho-box .double-button{position:relative;z-index:100}.big-box .add-ti-file-btn .ti-file-btn{overflow:hidden}</style><div class="perInformation" style="font-size:.7rem" ng-controller="personalInfo.ctrl"><p class="bank-information"><span class="fl" ng-bind="personal.topTitle"></span></p><div class="bank-information-box"><div class="perInfo-box"><div class="cardChange-box" style="margin-top:.7rem"><p style="color:#9c9da3;font-size:.6rem" ng-bind="i18mobile.face_idtype"></p><p class="cardType" ng-bind="i18mobile.face_text_idCardType"></p></div><div class="cardChange-boxhaveborder"><div class="cardChangefl fr" ng-if="isNessCarm"><div bi_name="{{i18mobile.bi_clickIDCarmInter}}" ng-click="takePhotoBefore()" class="camera-img"></div><ti-file-upload style="display:none;width:100%;margin-top:0;line-height:1.6rem" class="add-ti-file-btn perInfo-next seconds-next" style-options="idImage.styleOptions" uploader="idImage.uploaderConfig" element-id="idImage.id"></ti-file-upload></div><p id="nameid"></p><input id="name" bi_name="{{i18nolang.bi_name}}" type="text" class="perInfo-boxCompleteAutoInput" placeholder="{{i18mobile.face_text_name}}" ng-model="personal.name" ng-change="swatchName(personal.name)" maxlength="{{personal.perNameLength}}"></div><span class="info-error" ng-show="inputNameError" ng-bind="inputNameErrorMsg"></span><div class="cardChange-box"><p id="upid"></p><input id="idCard" bi_name="{{i18nolang.bi_idCard}}" type="text" maxlength="18" placeholder="{{i18mobile.face_text_idCardNum}}" ng-model="personal.idCard" ng-change="checkIdCard(personal.idCard)" ng-blur="swatchidCard(personal.idCard)" ng-minlength="1" required> <span class="info-error" ng-show="inputIdCardError" ng-bind="inputIdCardErrorMsg"></span></div><p class="resetAgree" style="padding-bottom:1rem" ng-if="agree.display"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" ng-checked="agree.agreeCheck" ng-model="agree.agreeCheck" style="vertical-align:middle" value="#f0544d" bi_name="{{i18mobile.bi_click_agree}}"> <label for="color-input-red" style="padding:.4rem"></label> <span class="resetAgreelable" style="padding-left:.2rem"><span id="resett1" style="color:#34475f" ng-click="clickAgree()" bi_name="{{i18mobile.bi_click_agree}}" ng-bind="i18mobile.face_agree_1"></span> <span id="resett" ng-click="gotoAgreeMengBanShow()" ng-bind="i18mobile.face_agree_2"></span> <span id="resett2" ng-click="clickAgree()" bi_name="{{i18mobile.bi_click_agree}}" style="color:#34475f" ng-bind="i18mobile.face_agree_3"></span></span></p></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/photographingFace.html', '<style>.infoCheck-success-fail{background:0 0}.big-box{position:static}</style><div class="big-box"><div id="personalhidden" ng-cloak style="display:none"><div class="big-box" ng-show="starTakePhoto && !idperpic.uploadSuccess"><div class="takePho-box"><div class="activity-photo-4corner"><div class="photo-box1New"><div style="position:absolute;width:100%"><ti-file-upload bi_name="{{i18mobile.bi_aclick_picclick}}" id="{{idperpic.id}}" class="add-ti-file-btn transparent" style-options="idperpic.styleOptions" uploader="idperpic.uploaderConfig"></ti-file-upload></div><div id="previewIdPerH5New"></div></div></div><div ng-if="takePhotoFrist" class="face-tip"><p ng-bind="i18mobile.face_tip_takePhoto" calss="face-tip-top"></p><div class="face-tip-first"><span ng-bind="i18mobile.face_tip1"></span> <span ng-bind="i18mobile.face_tip2"></span></div></div><div ng-if="takePhotoSecond" class="face-tip"><p ng-bind="i18mobile.personback_tip3" calss="face-tip-top"></p></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><p class="resetAgree" style="padding-bottom:.2rem;text-align:left;width:89%" ng-if="takePhotoFrist"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" ng-checked="agree.agreeCheck" ng-model="agree.agreeCheck" style="vertical-align:middle" value="#f0544d" bi_name="{{i18mobile.bi_click_agree}}"> <label for="color-input-red" style="padding:.4rem"></label> <span class="resetAgreelable" style="padding-left:.2rem"><span id="resett1" style="color:#34475f" ng-click="agree.clickAgree()" bi_name="{{i18mobile.bi_click_agree}}" ng-bind="i18mobile.agree_bank"></span></span></p><div class="double-buttonH5 greButtonH5" style="text-align:center" ng-if="takePhotoFrist"><span id="starTakePhoto" class="nextButtonNew perInfo-next seconds-next" ng-disabled="!agree.agreeCheck" on-tap="idperpicReClick()" style="display:inline-block;width:100%" ng-bind="i18mobile.face_button_starTakePhoto"></span></div><div class="double-button greButtonH5" ng-if="takePhotoSecond" style="text-align:center;display:block"><span id="uploadPhotoId" class="perInfo-next seconds-next" on-tap="uploadPhoto()" style="display:inline-block;width:100%" ng-bind="i18mobile.button_upload" bi_name="{{i18mobile.bi_button_upload}}"></span><br><span id="rePhotoId" class="perInfo-nextGre activityAuthRePic seconds-next" ng-bind="i18mobile.mobile_rePhoto" on-tap="idperpicReClick()" style="display:inline-block;color:#111;font-size:.75rem;margin-top:.804rem"></span></div></div></div></div><div class="success big-box ng-hide" ng-show="idperpic.uploadSuccess"><div class="infoCheck-success-fail" style="padding-top:4.35rem"><p><span class="icon-okBig"></span></p><p ng-bind="i18mobile.personback_success_tip1"></p><p ng-bind="i18mobile.personback_success_tip2" style="margin-top:.567rem;font-size:.75rem"></p></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/qrcodeForRegistH5.html', '<style>.ti-alert-container{animation:ti-alert-entrance-keyframes .4s cubic-bezier(.4,0,.2,1) 0s forwards,ti-fade-in-keyframes .4s cubic-bezier(.4,0,.2,1) 0s forwards}.ti-alert-prompt-container{background:#f5faff;border-color:#39f;color:#39f}.ti-alert-container{padding:8px 15px 8px 15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:1px solid;border-radius:2px;width:100%;line-height:.965rem;font-size:.643rem;font-weight:400}.ti-alert-prompt-container .ti-alert-label{color:#39f}.ti-alert-label{width:calc(100% - 16px - 12px);display:inline-block;line-height:.965rem;font-size:.643rem;word-wrap:break-word;overflow-wrap:break-word}.ti-alert-type-icon{display:inline-block;width:.428rem;font-size:.428rem;margin-right:10px;vertical-align:top;line-height:.589rem}.ti-btn-item-sup-soldout,.ti-icon,.ti-select-dominator-clear-btn,.ti-select-dominator-plus-btn,.ti-table-soldout{font-family:tiFont!important;speak:none;font-style:normal;text-transform:none;-moz-osx-font-smoothing:grayscale}.url-prompt-container{background:#f5f5f5;border-color:#f5f5f5;color:#f5f5f5}.url-alert-container{padding:8px 15px 8px 15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border:1px solid;border-radius:2px;width:100%;line-height:.965rem;font-size:.643rem;font-weight:400}.url-prompt-container .url-label{color:#39f}.url-label{width:100%;display:inline-block;line-height:.857rem;font-size:.75rem;word-break:break-all}.qrcodeCanvasBig{margin:9rem auto;border:.1px solid transparent;border-radius:4px;width:85%;color:#939393;padding-top:1.2rem;font-size:.75rem;position:relative}</style><ion-content><div class="mengban" style="text-align:center" ng-if="qrcodeCanvasBig" on-tap="closeQrcodeCanvasBig()"><div class="qrcodeCanvasBig"><div id="qrcodeCanvasBig"></div></div></div><div style="padding:5%"><div class="recommand-header"><span ng-bind="i18account.recommand_by_qrcode_module_title"></span></div><div><div class="ti-alert-container ng-isolate-scope ti-alert-prompt-container"><span class="ti-alert-type-icon ti-icon ng-scope ti-icon-info-circle"></span><div class="ti-alert-label ng-binding ng-scope ti-alert-label-with-typeIcon" ng-bind="i18account.recommand_by_qrcode_module_label"></div></div><div ng-show="!qrcodeInvaild"><div style="text-align:center;margin-top:2.68rem" on-tap="bigBox()"><div class="qrcodeCanvasinvail mysprite-kk"><div id="qrcodeCanvas" ng-show="!qrcodeCanvasBig"></div><div class="qrcodeCanvasinvailImage"><span class="mysprite-realnameError" style="margin-bottom:20px"></span><br></div></div><div class="qconde_big" ng-bind="i18account.qrcode_big"></div></div></div><div ng-show="qrcodeInvaild"><div class="qrcodevaild"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/qrcodeinvalid.png" width="75%"><br><span style="font-size:.965rem;font-weight:700;margin-top:.965rem;display:inline-block" ng-bind="i18account.regist_qrCodeFlash"></span></div><div class="perInfo-next" on-tap="getCustomerTicket()" ng-bind="i18account.regist_qrCodeFlashButton" style="position:absolute;bottom:1rem;width:90%"></div></div></div></div><div class="recommand-link" ng-show="!qrcodeInvaild"><p ng-bind="i18account.regist_url_label" style="padding:5px 0;font-size:.75rem"></p><div class="url-alert-container url-prompt-container" style="margin-bottom:.536rem;margin-top:.536rem"><p ng-bind="qrCodeUrl" class="url-label" style="padding:5px 0"></p></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/account/views/studentCertification.html', '<style>p{margin:0 .536rem}.ti-icon-warn:before{content:""}.ti-msg-icon{margin-top:0}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-3.4rem;top:.35rem;width:3rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.certificates-box{max-height:13rem;overflow-y:auto}.perInfo-box input:nth-child(1){margin-top:0}.upload_pic{float:none;height:7rem;width:auto}.upload_pic.preview.uhover .add-ti-file-btn .ti-file-btn{background:0 0}.big-box .add-ti-file-btn .ti-file-btn{position:absolute}.authfiles .filelabel{width:100%;font-size:.856rem;text-align:center;color:#34475f;padding-top:1.857rem;padding-bottom:.567rem}.once{width:90%!important;margin-left:auto!important;margin-right:auto!important}.infoCheck-success-fail{height:100%}.ti-file-upload-container .ti-file-input{width:9.6rem;height:7.2rem;opacity:0}.Cardphoto-bottoms img{max-width:11rem;height:6.375rem}#previewIdBacks{width:100%;height:0%}.infoCheck-success-fail p:nth-child(2){padding-top:.657rem;font-weight:700;font-size:.85rem}.infoCheck-success-fail p:nth-child(3){color:#939393;margin-top:.3rem;margin-bottom:.9rem;line-height:0}#idCardBack .ti-btn,#idCardFront .ti-btn,#studentCard1 .ti-btn,#studentCard2 .ti-btn{background:0 0!important}.perInfo-next{margin-top:.857rem}.backdrop{background:0 0;background-color:rgba(0,0,0,.4)}@media screen and (orientation:landscape){html{font-size:26.67px}.studentBottom{position:unset}}#idCardBack .ti-btn,#idCardFront .ti-btn{background:0 0!important}</style><div ng-show="currentPage==1"><div ng-show="currentStudentStatus == 2" class="infoCheck-success-fail"><div class="successStuPho"></div><p style="margin-bottom:.5rem"><span class="icon-ok"></span> <span ng-bind="i18mobile.customer_studentauth_newTips_success" style="font-size:.9rem"></span></p></div><div ng-show="currentStudentStatus == 1" class="infoCheck-success-fail"><div class="failStuPho"></div><p><span class="icon-fail"></span><span style="font-size:.9rem" ng-bind="i18mobile.customer_studentauth_desc_nok"></span></p><p><span style="font-size:.657rem" ng-bind="authInfo.auditMemo"></span></p></div><div ng-show="currentStudentStatus == 0" class="infoCheck-success-fail"><div class="loadStuPho"></div><p><span style="font-size:.857rem" ng-bind="i18mobile.customer_studentauth_newTips_applying1"></span></p><p><span style="font-size:.657rem" ng-bind="i18mobile.customer_studentauth_applying_tip"></span></p></div><div class="confirm-info"><div ng-hide="thirdVertify && !authInfo.name"><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name" ng-bind="authInfo.name"></p></div><div ng-hide="thirdVertify && !authInfo.code"><p ng-bind="i18mobile.customer_realnameauth_perauth_label_idvalue"></p><p class="cardType" ng-bind="authInfo.code"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_schoollocation"></p><p ng-bind="authInfo.schoolLocation"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_schoolname"></p><p ng-bind="authInfo.schoolName"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_education"></p><p ng-bind="authInfo.education"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_indate"></p><p ng-bind="authInfo.indate"></p></div><div><p ng-bind="i18mobile.graduationDateLable"></p><p ng-bind="authInfo.graduationDate"></p></div><div ng-if="currentStudentStatus != 2 && currentStudentStatus != 1"><p ng-bind="i18mobile.customer_realnameauth_label_authtime"></p><p ng-bind="authInfo.submitTime"></p></div></div><div class="next-box"><div id="resubmit" ng-show="currentStudentStatus == 1 && currentPage==1" class="perInfo-next" on-tap="btn_resubmit.click()">重新认证</div></div></div><div ng-show="currentPage==2"><div class="infoCheck-success-fail"><div class="failStuPho"></div><p style="margin-bottom:.857rem"><span ng-bind="customerType ==1?i18mobile.customer_studentauth_tips_noauth:i18mobile.customer_studentauth_newtips_toperauth" style="font-size:.9rem;padding:0 .5rem;font-weight:400"></span></p></div></div><div ng-show="currentPage==0"><div ng-show="step1" class="takePhotoCard big-box"><div class="information-step"><div class="lingxing"><div class="lv"><span>1</span></div><div class="hui"><span>2</span></div><div class="hui"><span>3</span></div><div class="hui"><span>4</span></div></div><p class="technologicalProcess"><span class="lvkuai" ng-bind="i18mobile.personalCertifi_title_writeInfo"></span> <span class="huikuai" ng-bind="i18mobile.student_onePage"></span> <span class="huikuai" ng-bind="i18mobile.student_twoPage"></span> <span class="huikuai" ng-bind="i18mobile.personalCertifi_title_confirm"></span></p></div><div class="perInfo-box student_perInfo-boxComplete perInfo-boxStudent"><div class="complete_cardChange-box"><p class="complete_input_lable" ng-bind="i18mobile.personalCertifi_text_name"></p><span class="cardChangefl" style="margin:.2rem 0 .71rem" ng-bind="authInfo.name"></span></div><div class="complete_cardChange-box"><p class="complete_input_lable" ng-bind="i18mobile.customer_realnameauth_perauth_label_idvalue"></p><span class="cardChangefl" style="margin:.2rem 0 .71rem" ng-bind="authInfo.code"></span></div><div class="complete_student_cardChange-box" id="schoolLocationID" on-tap="selectClickType(schoolLocation.id)"><div class="cardChangefl fr"><span id="idCar" ng-bind="schoolLocation.defaultSelectlable"></span> <span class="jiantou"></span></div><div class="cardChangefl" type="text" ng-bind="schoolLocation.label" name="idCar"></div></div><div class="complete_student_cardChange-box" id="selectAreaCodeID" on-tap="selectAreaCode()"><div class="cardChangefl fr" style="max-width:70%"><span id="schoolName" ng-bind="schoolName.defaultSelectlable"></span> <span class="jiantou"></span></div><div class="cardChangefl" type="text" ng-bind="schoolName.label" name="idCar"></div></div><div class="complete_student_cardChange-box" id="educationID" on-tap="selectClickType(education.id)"><div class="cardChangefl fr"><span id="{{education.id}}" ng-bind="education.defaultSelectlable"></span> <span class="jiantou"></span></div><div class="cardChangefl" type="text" ng-bind="education.label" name="{{education.id}}"></div></div><div class="complete_student_cardChange-box" id="indateID" on-tap="selectClickType(indate.id)"><div class="cardChangefl fr"><span id="{{indate.id}}" ng-bind="indate.defaultSelectlable"></span> <span class="jiantou"></span></div><div class="cardChangefl" type="text" ng-bind="indate.label" name="{{indate.id}}"></div></div><div class="complete_student_cardChange-box" id="graduationDateID" on-tap="selectClickType(graduationDate.id)"><div class="cardChangefl fr"><span id="{{graduationDate.id}}" ng-bind="graduationDate.defaultSelectlable"></span> <span class="jiantou"></span></div><div class="cardChangefl" type="text" ng-bind="graduationDate.label" name="{{graduationDate.id}}"></div></div><div class="perInfo-next" style="margin-top:2.412rem" id="once1" ng-bind="i18mobile.company_button_next" id="gotoNextID" on-tap="gotoNext1()" ng-disabled="!(schoolLocation.selectId && schoolName.defaultSelectid &&\n                        education.selectId && graduationDate.selectIds.length>0 && indate.selectIds.length>0)"></div></div></div><div ng-show="step2" class="takePhotoCard big-box"><div class="information-step"><div class="lingxing"><div class="lv"><span>1</span></div><div class="lv"><span>2</span></div><div class="hui"><span>3</span></div><div class="hui"><span>4</span></div></div><p class="technologicalProcess"><span class="lvkuai" ng-bind="i18mobile.personalCertifi_title_writeInfo"></span> <span class="lvkuai" ng-bind="i18mobile.student_onePage"></span> <span class="huikuai" ng-bind="i18mobile.student_twoPage"></span> <span class="huikuai" ng-bind="i18mobile.personalCertifi_title_confirm"></span></p></div><div class="authfiles"><div class="filelabel"><div><span ng-bind="i18v1r2.customer_studentauth_label_studentcard_cover"></span></div></div><div class="studentCardphoto-top"><div id="previewIdFront"></div><ti-file-upload bi_name="{{i18mobile.bi_aclick_picclick}}" id="{{studentCoverModels.id}}" style-options="studentCoverModels.styleOptions" class="add-ti-file-btn" uploader="studentCoverModels.uploaderConfig"></ti-file-upload></div></div><div class="studentBottom"><div class="perInfo-next once" ng-bind="i18mobile.company_button_next" id="gotoNex2ID" on-tap="gotoNext2()" ng-disabled="!studentCoverModels.uploadSuccess"></div><div class="perInfo-before once" on-tap="gotobefore1()" ng-bind="i18mobile.company_button_previous"></div></div></div><div id="step3Id" ng-show="step3" class="takePhotoCard big-box"><div class="information-step"><div class="lingxing"><div class="lv"><span>1</span></div><div class="lv"><span>2</span></div><div class="lv"><span>3</span></div><div class="hui"><span>4</span></div></div><p class="technologicalProcess"><span class="lvkuai" ng-bind="i18mobile.personalCertifi_title_writeInfo"></span> <span class="lvkuai" ng-bind="i18mobile.student_onePage"></span> <span class="lvkuai" ng-bind="i18mobile.student_twoPage"></span> <span class="huikuai" ng-bind="i18mobile.personalCertifi_title_confirm"></span></p></div><div class="authfiles"><div class="filelabel"><div><span ng-bind="i18v1r2.customer_studentauth_label_studentcard_info"></span></div></div><div class="studentCardphoto-bottom"><div id="previewIdBack"></div><ti-file-upload id="{{studentModels.id}}" class="add-ti-file-btn" style-options="studentModels.styleOptions" uploader="studentModels.uploaderConfig"></ti-file-upload></div></div><div class="authfiles"><div class="filelabel"><div><span ng-bind="i18v1r2.customer_studentauth_label_studentcard_info +i18mobile.student_notrequired"></span></div></div><div class="studentCardphoto-bottoms"><div id="previewIdBacks"></div><ti-file-upload id="{{studentModels2.id}}" class="add-ti-file-btn" style-options="studentModels2.styleOptions" uploader="studentModels2.uploaderConfig"></ti-file-upload></div></div><div style="bottom:.268rem;text-align:center"><div class="perInfo-next once" ng-bind="i18mobile.company_button_next" id="gotoNex3ID" on-tap="gotoNext3()" ng-disabled="!studentModels.uploadSuccess"></div><div class="perInfo-before once" id="gotobefore2ID" on-tap="gotobefore2()" ng-bind="i18mobile.company_button_previous"></div><div class="studentpicTip once"><span ng-bind="i18mobile.customer_realnameauth_student_limits"></span></div></div></div><div ng-show="step4" class="takePhotoCard big-box"><div class="information-step"><div class="lingxing"><div class="lv"><span>1</span></div><div class="lv"><span>2</span></div><div class="lv"><span>3</span></div><div class="lv"><span>4</span></div></div><p class="technologicalProcess"><span class="lvkuai" ng-bind="i18mobile.personalCertifi_title_writeInfo"></span> <span class="lvkuai" ng-bind="i18mobile.student_onePage"></span> <span class="lvkuai" ng-bind="i18mobile.student_twoPage"></span> <span class="lvkuai" ng-bind="i18mobile.personalCertifi_title_confirm"></span></p></div><div class="confirm-info"><div ng-hide="thirdVertify && !authInfo.name"><p ng-bind="i18mobile.personalCertifi_text_name"></p><p class="info-certifi-name" ng-bind="authInfo.name"></p></div><div ng-hide="thirdVertify && !authInfo.code"><p ng-bind="i18mobile.customer_realnameauth_perauth_label_idvalue"></p><p class="cardType" ng-bind="authInfo.code"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_schoollocation"></p><p ng-bind="schoolLocation.defaultSelectlable"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_schoolname"></p><p ng-bind="schoolName.defaultSelectlable"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_education"></p><p ng-bind="education.defaultSelectlable"></p></div><div><p ng-bind="i18mobile.customer_studentauth_label_indate"></p><p ng-bind="indate.defaultSelectlable"></p></div><div><p ng-bind="i18mobile.graduationDateLable"></p><p ng-bind="graduationDate.defaultSelectlable"></p></div></div><div style="text-align:center"><div class="perInfo-next once" id="submitID" on-tap="btn_submit.click()" ng-bind="i18mobile.student_button_submit"></div><div class="perInfo-before once" id="gotoStep1ID" on-tap="gotoStep1()" ng-bind="i18mobile.student_button_edit"></div></div></div></div><div class="perInformation big-box" style="font-size:.7rem" ng-show="schoolNameInput.show"><p class="bank-information"><span class="fl" ng-bind="i18mobile.student_schoolName"></span></p><div class="bank-information-box"><div class="perInfo-box"><div class="cardChange-box"><p id="schoolNameInputid" ng-bind="schoolNameInput.label"></p><form action="" id="form"><div class="complete_cardChange-box" style="padding-top:0"><div class="cardChangefl fr" id="schoolNameInputID" on-tap="schoolNameInput.close()"><span class="closePic"></span></div><input id="schoolNameInput" style="width:80%!important;overflow:hidden;border-bottom:none" type="text" ng-model="schoolNameInput.value" ng-change="schoolNameInput.validate(schoolNameInput.value)" maxlength="30"></div></form></div></div></div></div><div ng-show="model.countryCodeShow"><div id="popLayer" style="background-color:#b3b3b3;position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;-moz-opacity:.8;opacity:.8" on-tap="goBack()"></div><div id="areaCode" style="height:75%;background-color:#fff;position:fixed;border-radius:5px 5px 0 0;z-index:11;right:0;left:0;bottom:0;margin:auto;max-width:470px"><div class="contry-code" style="text-align:center;padding:10px 15px 0"><span ng-bind="i18mobile.customer_studentauth_label_schoolname"></span> <span style="float:right" id="goBackID" on-tap="goBack()"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div class="search-out"><input id="search-input" ng-model="model.searchValue" placeholder="{{i18mobile.student_search}}" ng-change="searchChange()"> <span class="clear-img"><img id="clearID" on-tap="clear()" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/closevbox.png"></span></div><div id="codeList" class="out-div" style="overflow:auto;height:75%"><div ng-repeat="item in countryCodeList" class="item-div" on-tap="clickAreaCode(item)"><span class="country-font" ng-if="item.id!=10000">{{item.label}}</span><span ng-if="item.id!=10000" class="code-font"></span> <span class="country-font" ng-if="item.id==10000">{{item.label}}</span><span class="code-font" ng-if="item.id==10000"><span style="margin-right:.37rem" ng-bind="schoolNameInput.value"></span><span class="jiantou"></span></span></div></div></div></div>');
            $templateCache.put('src/app/business/mobile/account/views/videoCertification.html', '<style>.popup-body{padding:.5rem;border-bottom:.0268rem solid rgba(138,141,147,.15)}.backdrop{background:0 0;background-color:rgba(0,0,0,.4)}.popup-head{padding:.75rem .5rem}#once{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-3.4rem;top:.35rem;width:3rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.takePho-box .double-button{position:relative;z-index:100}.big-box .add-ti-file-btn .ti-file-btn{overflow:hidden}.bank-confirm[disabled]{color:#fff;background:#ccc;border-color:#ccc}.ti-btn,[ti-button]{padding:0 2.2rem;height:2.2rem;line-height:2.2rem;background:#499df2;color:#fff;border-radius:4px;font-size:.8rem}.mengban .agreePromptAlert{padding-top:0;width:70%}.agreePromptAlert p{width:auto;padding:.6rem}.agreePromptAlert .choose{padding:0;height:2rem;border-top:1px solid #9c9da3;line-height:2rem;text-align:center}.agreePromptAlert .choose span{width:auto;margin:auto;border:none;color:red}@media screen and (orientation:landscape){html{font-size:26.67px}.double-button{display:block}.photo-box-videoH5New{background-size:12rem;height:13rem}.mengban .processPrompt{margin:6rem auto}.noticeMaskH5 .imgtips2{margin:0 26%}.noticeMaskH5 .imgtips1{width:70%;height:70%;margin:auto;background-size:90%}.photo-box-videoH5NewTip{font-size:20px!important;line-height:20px}.tipH5{position:unset}}</style><ion-content><div class="big-box"><div class="mengban mengbanprocessPrompt" ng-if="runProgress.progressView"><div class="processPrompt"><div id="uploadImging"><div class="progress round-conner"><div class="curRate round-conner" ng-style="runProgress.progressCurrentWidthPageView"></div></div><p ng-bind="i18mobile.video_UploadWatingTip" class="processTitle"></p></div><div id="uploaded" style="display:none"><div style="text-align:center"><div class="uploadSuccess_stautsQuery"></div></div><p ng-bind="i18mobile.video_stautsQuery" class="processTitle"></p></div></div></div><div id="personalhidden" ng-cloak style="display:none"><div ng-show="perInformation"><div ng-include="personalInfourl"></div><button class="perInfo-next bank-confirm" id="submitInfoId" on-tap="gotoSubmitInfo.click()" ng-bind="i18mobile.face_button_submit" style="border:none;font-size:.8rem;line-height:2.2rem;width:90%;margin:0 5%" ng-disabled="!agree.agreeCheck ||!personal.idCardFlag||!personal.nameFlag || agree.goSub"></button></div><div ng-show="starTakePhoto"><div class="noticeMaskH5" id="noticeMaskH5" ng-show="videoNoticeTip"><div id="imgtips1" class="imgtips1"></div><div id="imgtips2"><div class="imgtips2" on-tap="closeVideoNoticeTip()" bi_name="{{i18mobile.bi_understandbtn}}" ng-bind="i18mobile.video_iknowe"></div></div></div><div class="mengban" ng-if="agreeMengban"><div class="agreePrompt"><p ng-bind="i18mobile.video_UploadWatingTip"></p><div class="progress round-conner"><div class="curRate round-conner"></div></div></div></div><div class="takePho-boxVideo"><div><div class="photo-box-videoH5New"></div><div class="video_num_divNew"><div><div class="video_numNew photo-box-videoH5New1"></div><div class="video_numNew photo-box-videoH5New2"></div><div class="video_numNew photo-box-videoH5New3"></div></div><div style="display:inline-block;width:100%"><div ng-bind="i18mobile.videoNew_1" class="video_numNew photo-box-videoH5NewTip"></div><div ng-bind="i18mobile.videoNew_2" class="video_numNew photo-box-videoH5NewTip"></div><div ng-bind="i18mobile.videoNew_3" class="video_numNew photo-box-videoH5NewTip"></div></div></div></div><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="double-button greButtonH5" style="z-index:1"><span id="videoInputShow" class="perInfo-next buttonconfirm com_button" ng-show="viewVideoInput"><input id="videoInput" type="file" accept="video/*" capture="user" bi_name="{{goRecordVideo.label+\'_real\'}}" onchange="angular.element(this).scope().goRecordVideo.onchange()">{{goRecordVideo.label}}</span><div ng-show="!viewVideoInput" class="perInfo-next buttonconfirm com_button" on-tap="openVideo()" bi_name="{{goRecordVideo.label}}" ng-bind="goRecordVideo.label"></div></div></div></div></div><div class="fail" ng-show="faceError"><div class="infoCheck-success-fail"><div class="failPho"></div></div><p class="faseUserOnePageTopH5Tip"><span class="icon-fail"></span>{{errtext}}</p><div class="next-box"><span class="msg-tip" ng-show="resetPersonalInfoShow" ng-bind="i18mobile.video_authfailed_toInv"></span><div class="perInfo-nextNew" on-tap="gotoResetByType()" ng-bind="i18mobile.realAuth_type_personalCardType" ng-show="resetPersonalInfoShow" bi_name="{{i18mobile.bi_face_button_resetpersonal}}"></div><div class="perInfo-next" on-tap="gotoReset()" ng-bind="i18mobile.face_button_face" ng-show="gotoFaseAuthShow"></div><div class="perInfo-next" on-tap="gotoPortal()" bi_name="{{i18mobile.recharge_button_home}}" ng-bind="i18mobile.recharge_button_home" ng-show="gotoPortalShow"></div></div></div><div class="success ng-hide" ng-show="success"><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> <span ng-bind="confirmInfoSuccess"></span></p></div><div class="confirm-info"><div><p ng-bind="i18mobile.face_text_name"></p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.face_text_idCard"></p><p class="cardType" ng-bind="i18mobile.face_text_idCardType"></p></div><div><p ng-bind="i18mobile.face_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box"><div class="gre" ng-show="!promotion && !isActivity"><p ng-bind="i18mobile.face_authSucess_tip1"></p><p ng-bind="i18mobile.face_authSucess_tip2"></p></div><div ng-show="isActivity"><div class="perInfo-next" style="margin-top:.53rem" on-tap="gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div></div><div class="perInfo-next" style="margin-top:.53rem" ng-show="promotion && !isActivity" on-tap="redirectBack()" ng-bind="i18mobile.system_button_redirect_back"></div></div></div></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/account/views/videoOnePageH5.html', '<style>#once,#six{color:rgba(255,255,255,.5)}.big-box .big-box_en{line-height:normal}.backdrop{background:0 0;background-color:rgba(0,0,0,.4)}@media screen and (orientation:landscape){html{font-size:26.67px}.tipH5{position:unset}}</style><ion-content><div><div ng-include="uiViewurl" style="height:100%"></div></div><div class="big-boxH5 face-authentication" ng-if="showPage"><div class="perInformationH5 big-box"><div class="faseUserOnePageTitleH5"><span class="fl huawei"></span> <span class="fr">{{i18mobile.face_accountname}}：<span ng-bind="username"></span></span></div><div class="faseUserOnePage-boxH5"><div class="faseUserOnePageTopH5"><p ng-bind="i18mobile.face_welcom"></p><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/videoman.png"></div><div class="perInfo-wenziH5"><div ng-class="{\'big-box_en\':isEnUs}" ng-bind-html="i18mobile.video_onepageTip1"></div><p ng-class="{\'big-box_en\':isEnUs}" ng-bind-html="i18mobile.video_onepageTip2"></p><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="greH5" ng-class="{\'big-box_en\':isEnUs}"><div class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle"></div><br><span class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle1"></span><br><span class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle2"></span><br><span class="fl" style="text-align:left" ng-bind="i18mobile.face_onePageTipTitle3"></span></div><div class="greButtonH5"><div class="perInfo-next bank-next" id="once" style="margin-top:.81rem" on-tap="faceUser()" ng-bind="i18mobile.face_button_start"></div></div></div></div></div></div></div><div class="noticeMaskH5" id="noticeMaskH5" ng-show="redirect"><div class="imgtips"></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/enterprise/views/massociated.html', '<ion-view><ion-header-bar align-title="center" no-tap-scroll="true" class="bar-dark" id="mheader"><h1 class="title" ng-bind="bar_title"></h1></ion-header-bar><ion-content class="content has-header has-footer"><div class="big-box" style="overflow:scroll"><div ng-if="(customerEmType && customerEmType==\'primaryCustomer\') || showOneMsg"><div style="text-align:center;padding-top:30%"><span class="fontS14" ng-bind-html="oneMsgContent"></span></div></div><div ng-if="customerEmType && customerEmType!=\'primaryCustomer\' && !showOneMsg"><div ng-if="customerEmType==\'subCustomer\'" ng-style="{\'margin-top\': (!subCustomer_unbind && !subCustomer_grant) ? \'1.5rem\': \'\' }"><div ng-if="subCustomer_unbind"><div class="associate-ctitle fontS16"><span ng-bind="massociated_unbind"></span></div><div class="associate-ctitle" style="padding:0 1.1rem .5rem"><span class="fontS14" ng-bind-html="i18mobile.unbindTip"></span></div></div><div ng-if="subCustomer_grant"><div class="associate-ctitle fontS16"><span ng-bind="massociated_grant"></span></div><div class="list addRecommend-list fontS12"><div class="basicinfo"><div class="fontS12" ng-repeat="itemadd in permissionsObj.add track by $index"><span ng-bind="($index + 1 ) + i18mobile.massociated_prmission_symbol + i18mobile.massociated_apply_msg"></span><span style="color:red" ng-bind="i18mobile.massociated_apply_add"></span><span ng-bind="itemadd.permission_name_to_sub"></span></div><div class="fontS12" ng-repeat="itemReduce in permissionsObj.reduce track by $index"><span ng-bind="(permissionsObj.add.length + $index + 1) + i18mobile.massociated_prmission_symbol + i18mobile.massociated_apply_msg"></span><span style="color:green" ng-bind="i18mobile.massociated_apply_cancel"></span><span ng-bind="itemReduce.permission_name_to_sub"></span></div></div></div></div></div><div ng-if="customerEmType==\'subCustomerApply\'"><div class="associate-ctitle fontS16" style="padding-bottom:.5rem"><span ng-if="!isOpenFinancialCu" ng-bind="massociated_apply"></span> <span ng-if="isOpenFinancialCu" ng-bind="(curAccountInfo.primary_customer_name || customer_em_infos.primary_customer_name) + i18mobile.massociated_applyCu_unkown"></span></div></div><div class="list addRecommend-list fontS12"><h1 class="associate-basic-title fontS16"><span ng-bind="i18mobile.massociated_basicinfo_title"></span></h1><div class="basicinfo"><div class="fontS12"><span ng-bind="i18mobile.massociated_basicinfo_priName"></span> <span ng-bind="curAccountInfo.primary_customer_name || customer_em_infos.primary_customer_name"></span></div><div class="fontS12"><span ng-bind="i18mobile.massociated_basicinfo_entName"></span> <span ng-bind="curAccountInfo.pri_customer_real_name || customer_em_infos.pri_customer_real_name"></span></div><div class="fontS12" ng-if="curAccountInfo.apply_content_parsed.sub_customer_association_type ==1 || curAccountInfo.apply_content_parsed.sub_customer_association_type ==2"><span ng-bind="i18mobile.massociated_basicinfo_associateType"></span> <span ng-bind="i18mobile[\'customer_association_type_\'+curAccountInfo.apply_content_parsed.sub_customer_association_type]"></span><div ng-if="customerEmType==\'subCustomerApply\'" style="background-color:#f1f1f1;padding:.5em"><span class="fontS12" ng-if="curAccountInfo.apply_content_parsed.sub_customer_association_type == 2" ng-bind="i18mobile[\'massociated_elationshipType_\'+curAccountInfo.apply_content_parsed.sub_customer_association_type]"></span><div class="fontS12" ng-if="curAccountInfo.apply_content_parsed.sub_customer_association_type == 1"><span ng-bind-html="i18mobile[\'massociated_elationshipType_\'+curAccountInfo.apply_content_parsed.sub_customer_association_type]"></span></div></div></div><div class="fontS12" ng-if="isOpenFinancialCu && !isHKStation"><span ng-bind="i18mobile.associationPattern_label"></span> <span ng-bind="i18mobile.financialCustody_label"></span></div><div class="fontS12"><span ng-bind="i18mobile.massociated_basicinfo_associateStaus"></span> <span ng-style="{\'color\':customer_em_infos.sub_customer_status==1 ? \'#00CC99\': \'\' }" ng-bind="i18mobile[\'massociated_sub_customer_status_\'+customer_em_infos.sub_customer_status]"></span></div><div class="fontS12" ng-if="curAccountInfo.apply_time"><span ng-bind="massociated_basicinfo_applytime"></span> <span ng-bind="curAccountInfo.apply_time_lable"></span></div></div></div><div class="list addRecommend-list fontS12" ng-if="!isOpenFinancialCu"><h1 class="associate-basic-title fontS16"><span ng-bind="i18mobile.massociated_grant_title"></span></h1><div class="basicinfo"><div ng-repeat="item in permissionsObj.all track by $index"><span ng-bind="($index + 1)+i18mobile.massociated_prmission_symbol+item.permission_name_to_sub"></span></div><div ng-if="permissionsObj.all.length == 0"><span ng-bind="i18mobile.massociated_grant_nopermissons"></span></div></div></div><div class="list addRecommend-list fontS12" ng-if="isOpenFinancialCu"><h1 class="associate-basic-title fontS16"><span ng-bind="i18mobile.associate_responsibility_title"></span></h1><div class="basicinfo"><div ng-repeat="item in responsibilityList.data track by $index"><div ng-show="($index > 1 && isShowList) || $index <= 1"><span ng-bind="item"></span></div></div><a><span ng-bind="showMoreLabel" ng-click="showMoreDetail()"></span></a></div></div><div ng-if="isOpenFinancialCu && customerEmType ==\'subCustomerApply\' && !isHKStation"><h1 class="associate-basic-title fontS16"><span ng-bind="i18mobile.associate_coupon_title"></span> <span ng-if="languageZHCN" style="color:#9da0a9;font-size:12px;margin-left:5px" ng-bind="couponTip"></span></h1><div class="associate-ctitle fontS12" style="padding:.3rem .8rem"><div class="basicinfo"><div ng-if="!languageZHCN" style="margin-bottom:.2rem" ng-bind="couponTip"></div><div ng-hide="couponNum === 0" ng-repeat="item in radioCouponDeal.data track by $index"><input type="radio" ng-model="radioCouponDeal.selectedId" ng-value="item.id" ng-disabled="item.disable" ti-radio="item.key" element-id="item.elementId"> <span class="radio-panel-title" ng-bind="item.key"></span></div></div></div></div></div><br></div></ion-content><ion-footer-bar align-title="center" no-tap-scroll="true" class="subCustomerApplyH" ng-if="customerEmType && customerEmType!=\'primaryCustomer\' && !showOneMsg && ((customerEmType==\'subCustomerApply\' && curAccountInfo) || (subCustomer_unbind || subCustomer_grant))"><div ng-if="customerEmType==\'subCustomerApply\' && curAccountInfo"><div id="agreeId" style="padding:.2rem 0 .2rem .3rem"><input id="agreeId_ipt" type="checkbox" ng-model="agreeId.checked" ng-click="agreeId.change()"> <span class="fontS12" ng-bind-html="agreeId.text"></span></div><div class="buttons associate-btn"><button id="operateConfirmid" class="button button-assertive" style="width:45%" ng-disabled="agreeId.disable" on-tap="operateConfirm()"><span class="fontS16" ng-bind="i18mobile.massociated_btn_accpetApply"></span></button> <button id="operateCancelid" class="button" style="width:35%;margin-left:.5em;border:1px solid #ddd" on-tap="operateCancel()"><span class="fontS16" ng-bind="i18mobile.massociated_btn_rejectApply"></span></button></div></div><div ng-if="customerEmType==\'subCustomer\' && (subCustomer_unbind || subCustomer_grant)"><div id="agreeCreate_01" ng-if="showUnbind" style="padding:.2rem 0 .2rem .3rem"><input id="agreeCreate" type="checkbox" ng-model="agreeCreate.checked" ng-click="agreeCreate.change()"> <span class="fontS12" ng-bind-html="agreeCreate.text"></span></div><div class="buttons associate-btn" style="margin-top:.5em"><button id="operateConfirmid" style="width:45%" ng-disabled="subCustomer_unbind ? agreeCreate.disable : !subCustomer_grant" class="button button-assertive fontS16" on-tap="operateConfirm()"><span class="fontS16" ng-bind="i18mobile.massociated_btn_accpet"></span></button> <button id="operateCancelid" style="width:35%;margin-left:.5em;border:1px solid #ddd" class="button fontS16" on-tap="operateCancel()"><span class="fontS16" ng-bind="i18mobile.massociated_btn_reject"></span></button></div></div></ion-footer-bar></ion-view><style>.associate-ctitle{text-align:left;padding:1rem 1.1rem 0;line-height:1.5em}.addRecommend-list>div{padding:.3rem .8rem}.associate-basic-title{border-bottom:1px solid #ccc;padding:.2rem .8rem .3rem}.basicinfo div{line-height:1.5rem}#agreeId a{text-decoration:none;color:#387ef5!important}#agreeCreate_01 a{text-decoration:none;color:#387ef5!important}.associate-btn{text-align:center}.successClsbg{background-position:center top;background-image:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/com_success_big.png);background-repeat:no-repeat;height:48px}.subCustomerApplyH{height:6.5rem!important}.html-font-family-zh-cn subCustomerApplyH{height:5rem!important}.has-footer{bottom:5rem}#agreeId_ipt{line-height:20px;height:20px;vertical-align:middle;display:inline-block;margin-top:.3rem}</style>');
            $templateCache.put('src/app/business/mobile/expense/views/paymentBindcard.html', '<div class="content" id="bindCard"><div style="padding:1.5rem .75rem 0"><div style="width:100%;height:10px;border-radius:5px;color:#eef0f5;background-color:#eef0f5"></div><div style="width:90%;height:10px;background-image:linear-gradient(to right,#6882da,#c8d5ff);border-radius:5px;margin-top:-10px"></div></div><div class="bind-card-content"><div ng-show="showBindcard"><div><span style="font-size:.875rem" ng-bind="i18mobile.bindcard_title"></span></div><div class="mg-top" style="line-height:22px;padding:10px;border:solid 1px #5e7ce0;color:#252b3a;background:#f2f5fc"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/prompt_icon.png"><p class="tips-mgLeft normal-font" style="margin-top:-20px" ng-bind="i18mobile.bindcard_tips1"></p><p class="tips-mgLeft normal-font" ng-bind="i18mobile.bindcard_tips2"></p><p class="tips-mgLeft normal-font" ng-bind="i18mobile.bindcard_tips3"></p></div><div><form><div class="mg-top" style="position:relative"><span class="bind-span" ng-show="showCard0" ng-bind="i18mobile.bindcard_cardnum"></span> <input ng-if="!hasFullCardNo" type="number" oninput="24<value.length&&(value=value.slice(0,24))" id="bindcardInputId0" ng-focus="showInput(0)" ng-blur="remoreInput()" placeholder="" class="long-input bindcard-input" ng-model="bindcardParams.cardNumber"><input ng-if="hasFullCardNo" type="text" readonly="readonly" id="bindcardInputId0" ng-focus="showInput(0)" ng-blur="remoreInput()" placeholder="" class="long-input bindcard-input readonly" ng-model="bindcardParams.cardNumber"><p class="normal-font tips-text" ng-show="showCard0" ng-blur="remoreInput()">{{i18mobile.bindcard_card1 + " "}} <img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/bindcard_list.png" style="vertical-align:middle"> {{" "+i18mobile.bindcard_card2}}</p><p class="error-tip">{{cardNumberError}}</p></div><div class="mg-top" style="position:relative"><span class="bind-span" ng-show="showCard1" ng-bind="i18mobile.bindcard_cardname"></span> <input ng-if="!hasCardHolderName" type="text" maxlength="80" id="bindcardInputId1" ng-focus="showInput(1)" ng-blur="remoreInput()" placeholder="" class="long-input bindcard-input" ng-model="bindcardParams.cardName"><input ng-if="hasCardHolderName" type="text" readonly="readonly" maxlength="80" id="bindcardInputId1" ng-focus="showInput(1)" ng-blur="remoreInput()" placeholder="" class="long-input bindcard-input readonly" ng-model="bindcardParams.cardName"><p class="error-tip">{{cardNameError}}</p></div><div class="mg-top"><div style="display:inline-block"><div style="position:relative;width:55%;float:left"><div style="position:relative;width:45%;float:left"><span class="bind-span" ng-show="showCard2" ng-bind="i18mobile.bindcard_cardtime_month"></span> <img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_down.png" class="selet-down" on-tap="showInput(2)"> <input type="text" readonly="readonly" id="bindcardInputId2" ng-focus="showInput(2)" ng-blur="remoreInput()" placeholder="i18mobile.bindcard_cardname" class="long-input bindcard-input readonly" ng-model="selectMonthVal"></div><div style="position:relative;width:45%;float:left;margin-left:5px"><span class="bind-span" ng-show="showCard3" ng-bind="i18mobile.bindcard_cardtime_year"></span> <img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_down.png" class="selet-down" on-tap="showInput(3)"> <input type="text" readonly="readonly" id="bindcardInputId3" ng-focus="showInput(3)" ng-blur="remoreInput()" placeholder="i18mobile.bindcard_cardname" class="long-input bindcard-input readonly" ng-model="selectYearVal"></div><p class="error-tip" style="float:left">{{cardDateError}}</p></div><div style="position:relative;float:right;width:45%"><span class="bind-span" ng-show="showCard4" ng-bind="i18mobile.bindcard_cardcode"></span> <input type="number" id="bindcardInputId4" ng-focus="showInput(4)" ng-blur="remoreInput()" maxlength="4" class="bindcard-input" oninput="4<value.length&&(value=value.slice(0,4))" placeholder="i18mobile.bindcard_cardcode" style="width:100%;float:right;font-size:.8rem" ng-model="bindcardParams.securityCode"><div class="mg-top" ng-show="showCard4"><span class="normal-font tips-text" style="float:right;line-height:.7rem;width:60%;margin-top:10px" ng-bind="i18mobile.bindcard_securityTip"></span> <img style="float:right;margin-top:10px" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/security.png"></div><p class="error-tip" style="clear:both" ng-if="cardCodeError">{{cardCodeError}}</p></div></div></div><div class="mg-top" style="position:relative" ng-show="isAuthenticate"><span class="bind-span" ng-show="showCard5" ng-bind="i18mobile.bindCard_idType"></span> <img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_down.png" class="selet-down" on-tap="showInput(5)"> <input type="text" readonly="readonly" id="bindcardInputId5" ng-focus="showInput(5)" ng-blur="remoreInput()" placeholder="i18mobile.bindcard_cardname" class="long-input bindcard-input readonly" ng-model="bindcardParams.idType"><p class="normal-font tips-text" ng-if="idTypeDes">{{idTypeDes}}</p><p class="error-tip">{{idTypeError}}</p></div><div class="mg-top" style="position:relative" ng-show="isAuthenticate"><span class="bind-span" ng-show="showCard6" ng-bind="i18mobile.bindCard_idNumber"></span> <input type="text" id="bindcardInputId6" ng-focus="showInput(6)" ng-blur="remoreInput()" placeholder="i18mobile.bindcard_cardname" class="long-input bindcard-input" ng-model="bindcardParams.idNumber"><p class="normal-font tips-text" ng-if="idTypeDes">{{idTypeExample}}</p><p class="error-tip">{{idNumberError}}</p></div></form><div style="clear:both"></div><div class="mg-top"><div class="normal-font"><span style="font-size:.8rem" ng-bind="i18mobile.bindcard_deposit"></span> <span style="margin-left:.5rem;font-size:.8rem">{{amounts}}</span></div><p class="normal-font tips-text" ng-bind="isEdit ? i18mobile.bindcard_depositTip2 : i18mobile.bindcard_depositTip"></p></div><div class="mg-top"><input type="checkbox" style="margin-top:0" ng-checked="agreeCheck" ng-model="agreeCheck" on-tap="clickAgree()"><span class="normal-font" ng-bind="i18mobile.bindcard_agree1" style="margin-left:10px"></span> <a class="normal-font" on-tap="bindcardAgreement()" ng-bind="i18mobile.bindcard_agree2"></a></div><button class="perInfo-next bank-confirm" on-tap="bindcardFn()" id="bindcardId" style="border:none;font-size:.8rem;line-height:2.2rem;width:100%;margin:.6rem .75rem 0 0" ng-disabled="!agreeCheck" ng-bind="i18mobile.system_alert_button_ok"></button></div></div><div ng-show="showError" class="error-div"><div><a style="float:right;margin-right:.75rem" class="close-btn" on-tap="closeError()"></a></div><div style="clear:both"></div><div style="margin-top:2rem"><div class="text-center"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_error_2x.png"><p class="mg-top"><span class="title-font" style="font-size:1rem" ng-bind="i18mobile.bindcard_result2"></span></p></div><div class="mg-top"><p class="normal-font" style="margin-top:3px;margin-left:10px;text-align:center">{{errorMseeage}}</p></div></div><button class="perInfo-next bank-confirm" on-tap="closeError()" id="bindcardFailId" style="border:none;font-size:.8rem;line-height:2.2rem;width:60%;margin:1rem 20% 0 20%" ng-bind="i18mobile.system_alert_button_ok"></button></div><div ng-show="showSuccess" class="error-div" style="height:200px"><div style="margin-top:2rem"><div class="text-center"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok.png"></div><div class="mg-top"><p class="normal-font" style="margin-top:3px;margin-left:10px;text-align:center" ng-bind="i18mobile.creditsResult_error.PaymentFailCode08"></p></div></div></div></div><div class="error-bg" ng-show="showError || showMonth || showYear || showIdType || showSuccess"></div><div ng-if="showMonth" class="select-div"><div class="big-font" style="font-size:.8rem;margin-bottom:10px" ng-bind="i18mobile.bindcard_month"></div><ul class="selet-option" id="selectMonth"><li class="normal-font selet-option-li" on-tap="selectMonth(item)" ng-repeat="item in monthList">{{item.value}}</li></ul></div><div ng-if="showYear" class="select-div"><div style="font-size:.8rem;margin-bottom:10px" ng-bind="i18mobile.bindcard_year"></div><ul class="selet-option" id="selectYear"><li class="normal-font selet-option-li" on-tap="selectYear(item)" ng-repeat="item in yearList">{{item.value}}</li></ul></div><div ng-if="showIdType" class="select-div"><div style="font-size:.8rem;margin-bottom:10px" ng-bind="i18mobile.bindCard_idType"></div><ul class="selet-option" id="selectIdType"><li class="normal-font selet-option-li" on-tap="selectIdType(item)" ng-repeat="item in idTypeList">{{item.label}}</li></ul></div></div><div id="hwmeta" style="display:none"></div><script>$(function(){var c=document.createElement("script");c.type="text/javascript",c.async="async",customiseVer==VERSION_KEY_CHINA?c.src="https://res.hc-cdn.com/riskcontrol/1.0.0/riskIntegrated/cn/acctguard.js":c.src="https://res.hc-cdn.com/riskcontrol/1.0.0/riskIntegrated/intl/acctguard.js",document.body.appendChild(c)})<\/script><style>.select-div{bottom:0;width:100%;position:absolute;height:12rem;background:#fff;z-index:9999;padding:.75rem}.error-tip{color:red;font-size:.56rem}.close-btn{position:absolute;right:.75rem;width:1em;height:1em;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_close.svg) no-repeat;background-size:100%}.selet-option-li{line-height:1.5rem}.selet-option{-webkit-overflow-scrolling:touch;overflow-y:scroll;height:9rem;width:92%;text-align:center;border:1px solid #39f;position:absolute;background:#fff;z-index:999}.selet-down{position:absolute;right:5px;top:.6rem}#timeSelect dd:last-child{margin-bottom:220px}.bind-card-content{padding:.75rem}.big-font{font-size:.875rem}.normal-font{font-size:.56rem}.tips-mgLeft{margin-left:20px;line-height:.8rem}.mg-top{margin-top:1rem}.ipspayBtn{margin:2.25rem .75rem .75rem .75rem;height:2.2rem;line-height:2.2rem;background-color:#e41f2b;color:#fff;text-align:center;font-size:.8rem;border-radius:2.5rem;background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 100%)}.error-bg{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:.5;opacity:.5}.error-div{width:80%;height:300px;overflow:hidden;padding:.75rem;z-index:9999;position:absolute;top:8rem;background:#fff;margin:0 6%;border-radius:8px}.long-input{width:100%}.bindcard-input{padding:0 0 0 15px!important;font-size:.8rem!important;height:2rem!important;border:1px solid #c0bcbc!important}.bindcard-input:focus{border:1px solid #5e7ce0!important}.bind-span{position:absolute;font-size:12px;top:-10px;margin-left:1rem;background:#fff;color:#5e7ce0;padding:0 5px}.tips-text{color:#8a8e99}.readonly{background-color:#fff!important}</style>');
            $templateCache.put('src/app/business/mobile/expense/views/paymentBindresult.html', '<ion-view><ion-content class="content has-header"><div style="padding:0 .75rem 0" ng-if="showHelp"><div style="width:100%;height:10px;background-image:linear-gradient(to right,#6882da,#c8d5ff);border-radius:5px"></div></div><div class="bind-card-content"><div ng-if="showSuccess"><div class="text-center"><p><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok.png"></p><p></p><p class="mg-top"><span class="title-font" ng-bind="i18mobile.bindcard_result1"></span></p></div><ul class="mg-bigtop ul-mgLeft"><li class="normal-font ul-item" ng-bind="i18mobile.bindcard_success_tip1"></li><li class="normal-font ul-item" ng-bind="i18mobile.bindcard_success_tip2"></li></ul><div class="ipspayBtn" id="goback1" on-tap="goBack()" ng-bind="i18mobile.recharge_button_home"></div><div class="banktransferBtn" id="goback2" on-tap="goPayment()" ng-bind="i18mobile.paymrntBindresult_back"></div></div><div ng-if="showError"><div class="text-center"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_error_2x.png"><p class="mg-top"><span class="title-font" ng-bind="i18mobile.bindcard_result2"></span></p></div><ul class="mg-bigtop ul-mgLeft"><li class="normal-font" ng-bind="i18mobile.bindcard_error_tip1"></li><li class="normal-font ul-item" ng-bind="i18mobile.bindcard_error_tip2"></li><li class="normal-font ul-item" ng-bind="i18mobile.bindcard_error_tip3"></li></ul><div><a class="normal-font" ng-bind="i18mobile.bindcard_help" on-tap="contactSales()"></a></div><div class="ipspayBtn" id="ipspayBtn" on-tap="reBindCard()" ng-bind="i18mobile.bindcard_reBind"></div><div class="banktransferBtn" id="goback2" on-tap="goBack()" ng-bind="i18mobile.recharge_button_home"></div></div><div ng-if="showHelp"><p ng-bind="i18mobile.bindResult_payOnlineDown_title1"></p><div><span class="title-font" ng-bind="i18mobile.bindResult_payOnlineDown_title" style="color:#8a8e99"></span></div><div class="help-div" ng-class="{\'active-div\':item.active}" ng-repeat="item in helpList" style="margin-top:.8rem" on-tap="selectTab(item)"><div style="float:left"><input type="checkbox" style="margin-top:0;margin-left:10px" ng-class="{\'normal-checkbox\':!item.active,\'active-checkbox\':item.active,}" ng-checked="item.active" ng-model="item.active"></div><div style="margin-left:2rem"><p class="title-font" ng-bind="item.title"></p><p class="normal-font" ng-bind="item.content" style="color:#575d6c"></p></div></div><div class="ipspayBtn" id="goback3" on-tap="helpFn()" ng-bind="helpBtnText"></div></div></div></ion-content></ion-view><style>.active-div{border:1px solid #39f!important}.active-checkbox{background-image:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/checkbox_select.svg)}.normal-checkbox{background-image:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/checkbox_normal.svg)}.help-div{border:1px solid #b2b2b2;padding:.75rem .75rem .75rem 0;position:relative}.help-div img{position:absolute;right:0;top:0}.text-center{text-align:center}.bind-card-content{margin-top:1.5rem;padding:.75rem}.title-font{font-size:.8rem}.normal-font{font-size:.56rem}.tips-mgLeft{margin-left:20px;line-height:1.1rem}.mg-bigtop{margin-top:2rem}.mg-top{margin-top:.5rem}.ipspayBtn{margin:.75rem 0;height:2.2rem;line-height:2.2rem;background-color:#e41f2b;color:#fff;text-align:center;font-size:.8rem;border-radius:5px;background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 100%)}.banktransferBtn{margin:.75rem 0;height:2.2rem;line-height:2.2rem;background:#fff;color:#34475f;text-align:center;font-size:.8rem;border:1px solid rgba(138,141,147,.5);border-radius:5px}.ul-item{list-style-type:disc}.ul-mgLeft{margin:.75rem}</style>');
            $templateCache.put('src/app/business/mobile/views/activeCoupons.html', '<ion-content class="activeCoupons"><div class="item item-divider"><span ng-bind="i18mobile.coupons_label_active"></span></div><div class="list"><div class="item item-input" style="padding-left:.75rem;padding-right:.75rem;height:2.5rem"><input type="text" id="code1" ng-model="model.code" maxlength="19" autofocus> <span ng-click="cleanCode()" class="del-btn" ng-if="model.code"></span></div></div><div class="button-wrap"><button class="button button-block button-assertive" ng-disabled="!model.code" on-tap="activeCoupons()">{{i18mobile.coupons_button_activenow}}</button></div><div class="item friendly-tipsre" style="margin-top:8.7em"><span class="tips" ng-bind="i18mobile.coupons_tips_active"></span><hr class="leftline"></div><div class="item friendlytips-content"><span ng-bind="i18mobile.coupons_tips_item1"></span></div></ion-content><style>.item-divider{font-size:.6rem;padding:1rem .75rem}.button-wrap{padding:0;margin:0 .75rem;margin-top:2rem;height:2.2rem}.button-wrap .button{font-size:.8rem;height:100%;min-height:auto;border-radius:.1rem}</style>');
            $templateCache.put('src/app/business/mobile/views/authorizedBook.html', '<ion-content><div class="authorized_book"><div><p style="color:#34475f">请您了解</p></div><div style="font-size:.6rem;line-height:200%">{{i18mobile.authorized_book_tip1}} <span>(</span>{{username}}<span>)</span></div><div class="" style="font-size:.6rem;line-height:200%">{{i18mobile.authorized_book_tip2}}</div><p style="font-size:.6rem;line-height:200%;text-indent:1.2rem">{{i18mobile.authorized_book_tip3}}</p><div style="font-size:.6rem;line-height:200%">{{i18mobile.authorized_book_tip4}}<br>{{i18mobile.authorized_book_tip5}}<br>{{i18mobile.authorized_book_tip6}}<br>{{i18mobile.authorized_book_tip7}}<br>{{i18mobile.authorized_book_tip8}}<br>{{i18mobile.authorized_book_tip9}}<br><br></div><div style="font-size:.6rem;line-height:200%;font-weight:700;color:#34475f;padding-bottom:.6rem">{{i18mobile.authorized_book_tip10}}<br></div><div style="font-size:.6rem;line-height:120%;text-align:right;color:#34475f;padding-bottom:.75rem" ng-bind="i18mobile.authorized_book_tip11"></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/autorenmanage.html', '<style type="text/css">.autotime .autoday{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png) no-repeat .25rem .7rem;background-size:.4rem .55rem;width:1rem;height:1.5rem;color:red;text-align:right;padding-right:1rem;margin-right:.75rem}</style><div ng-init="$Get(\'autorenmanageRenderService\').autoRender(this)"><div ng-controller="modifyautorenewal2.ctrl" id="modyfyauto"><ion-content><div><div style="background:#fff"><p class="autorenman">自动续费<span id="open" class="open" on-tap="openauto(this)"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/ui_07.png"></span></p></div><div style="background:#fff"><p class="autotime" on-tap="gotoAddTime()">自动续费周期 <span class="autoday"></span> <span id="oday" style="color:red" ng-bind="oday"></span></p></div><div style="background:#fff" class="renmanage-tip"><p>提示：</p><p>1. 设置成功后，系统自动以此时长进行续费。</p><p>2. 自动续费将于服务到期前开始扣款，请保持余额充足。</p><p>3. 如您在扣款日前人工续费，则系统按最新到期时间自动进行续费。</p><p>注: 支持现金余额扣款，暂不支持代金券余额扣款</p></div></div></ion-content><div id="renewtime-bg"></div><div id="renewtime-bombbox"><ul style="height:100%"><li ng-repeat="ros in sliderModel.scales" on-tap="scales(ros,$index, this)"><span ng-bind="ros" style="font-size:.75rem"></span></li><li class="time-line"></li><li on-tap="hidediv()">取消</li></ul></div></div><div class="movehere" style="display:none"></div></div><style type="text/css">div.backdrop.visible{display:none}</style>');
            $templateCache.put('src/app/business/mobile/views/balancePay.html', '<div class="list addRecommend-list"><div class="item"><span ng-bind="i18mobile.myorder_label_orderfee"></span> <span style="color:red;float:right" ng-bind="amount"></span></div><div class="item"><span ng-bind="i18mobile.myrecommend_label_mobilephone"></span> <span style="float:right" ng-bind="phone"></span></div><div class="item item-input item-getCoder"><input type="text" maxlength="6" placeholder="{{i18mobile.myorder_placehold_code}}" id="code" ng-model="code"> <button id="getcode" class="button button-positive" ng-disabled="!isCodeButActive" style="height:1.6rem" ng-bind="buttonmsg" on-tap="getCode()"></button></div></div><div class="button-wrap"><button class="button button-block button-assertive" style="width:100%" ng-disabled="!isPayButActive" id="balancepay" on-tap="balancePay()">{{i18mobile.myorder_button_paynow}}</button></div>');
            $templateCache.put('src/app/business/mobile/views/bankCertification.html', '<style>#once,#six[disabled]{color:rgba(255,255,255,.5)}.lingxing div{position:relative}.lingxing>div:not(:first-child):before{content:"";position:absolute;left:-4.9rem;top:.35rem;width:4.5rem;height:1px;background:#8a8d93}.lingxing>.lv:not(:first-child):before{background:#f66f6a}.scroll-content{height:auto!important}#idperpic .ti-file-upload-container .ti-file-btn{height:15.5rem}</style><ion-content><div class="big-box"><div class="information-step" ng-show="switchPerBankPortraitAutoAuth &&(bankPerInformation || starTakePhoto || bankPerPhoneInformation)"><div class="lingxing"><div class="lv"><span>1</span></div><div ng-class="{lv:starTakePhoto ||bankPerPhoneInformation,hui:!(starTakePhoto ||bankPerPhoneInformation)}"><span>2</span></div><div ng-class="{lv:bankPerPhoneInformation,hui:!bankPerPhoneInformation}"><span>3</span></div></div><p class="technologicalProcess"><span class="lvkuai" ng-bind="i18mobile.personBank_title_IDInfo"></span> <span ng-class="{lvkuai:starTakePhoto || bankPerPhoneInformation,huikuai:!(starTakePhoto || bankPerPhoneInformation)}" ng-bind="i18mobile.personBank_title_face"></span> <span ng-class="{lvkuai:bankPerPhoneInformation,huikuai:!bankPerPhoneInformation}" ng-bind="i18mobile.personBank_title_IDCARD"></span></p></div><div class="perInformation" style="font-size:.7rem" ng-if="bankPerInformation"><div id="bank-information-box"><div ng-include="personalInfourl"></div><div class="tipH5_bank" style="width:90%;left:5%"><div class="bank-tips" ng-bind="i18mobile.bankinformation_tip_cost"></div><div class="perInfo-next bank-next" id="once" on-tap="switchPerBankPortraitAutoAuth?gotoStarTakePhoto():gotoBankPhoneCerti()" ng-bind="i18mobile.personalCertifi_button_next"></div></div></div></div><div ng-if="starTakePhoto"><div class="takePho-box"><p ng-bind="i18mobile.face_tip_takePhotographing" style="width:100%;font-size:.85rem;margin-bottom:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_1" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><p ng-bind="i18mobile.face_tip_takePhoto_2" style="font-size:.75rem" class="takePho-boxPH5" ng-if="takePhotoSecond"></p><div class="photo-boxH5_noTop"><div style="position:absolute;width:100%"><ti-file-upload id="{{idperpic.id}}" bi_name="{{i18mobile.bi_aclick_picclick}}" class="add-ti-file-btn transparent" style-options="idperpic.styleOptions" uploader="idperpic.uploaderConfig"></ti-file-upload></div><div id="previewIdPerH5"></div></div><p ng-bind="i18mobile.face_tip_takePhoto_3" style="font-size:.75rem;margin-top:.95rem" ng-if="takePhotoFrist"></p><p ng-bind="i18mobile.face_tip_takePhoto_4" style="font-size:.75rem" ng-if="takePhotoFrist"></p><div ng-class="{\'tipH5Huawei\':isHuaweiDis,\'tipH5\':!isHuaweiDis}"><div class="double-button greButtonH5" ng-if="takePhotoFrist" style="text-align:center"><span class="perInfo-next seconds-next" style="width:100%" ng-bind="i18mobile.face_button_starTakePhoto" on-tap="idperpicReClick()" style="color:#111;font-size:.75rem;display:inline-block;margin-top:.804rem"></span></div><div class="double-button greButtonH5" ng-if="takePhotoSecond" style="text-align:center;display:block"><span class="perInfo-next seconds-next" style="display:inline-block;width:100%" on-tap="gotoBankPhoneCerti()" ng-bind="i18mobile.face_button_next" bi_name="{{i18mobile.bi_click_next2}}"></span><br><span class="perInfo-nextGre seconds-next" ng-bind="i18mobile.mobile_rePhoto" on-tap="idperpicReClick()" style="color:#111;font-size:.75rem;display:inline-block;margin-top:.804rem"></span></div></div></div></div><div class="perInformation big-box" style="font-size:.7rem" ng-show="bankPerPhoneInformation"><div class="mengban" ng-show="BankPhoneMengban"><div><div class="agreePrompt"><p ng-bind="i18mobile.bankinformation_tip_connact"></p><div class="choose"><span class="bank-phone-sure" on-tap="gotoPhoneMengBanHide()" ng-bind="i18mobile.system_alert_button_ok"></span></div></div></div></div><div class="mengban" ng-if="agreeMengban"><div class="agreePrompt"><p>{{i18mobile.bankinformation_tip_apply}}<span style="color:#499df3"> <a href="http://www.huaweicloud.com/declaration/sa_cua.html" style="color:#499df3" target="_blank">{{i18mobile.bankinformation_tip_agreement}}</a></span> {{i18mobile.bankinformation_tip_agreement1}}</p><div class="choose"><span class="bank-phone-sure" on-tap="gotoAgreeMengBanHide()" ng-bind="i18mobile.system_alert_button_ok"></span></div></div></div><div class="bank-information-confirm"><div><p><span ng-bind="i18mobile.personalCertifi_text_name"></span><span>：</span><span id="bankCardAuth-name">{{personal.name}}</span></p><p><span ng-bind="i18mobile.personalCertifi_placeholder_idCardNum"></span><span>：</span><span id="bankCardAuth-IDNumber">{{personal.idCard}}</span></p></div></div><div class="bank-none"></div><div class="bank-phone-box"><div class="bank-information-box bank-information-phone"><div class="cardChange-box"><div on-tap="gotoBankCradType()"></div><p id="BankNumid"></p><input id="bankCard" type="text" maxlength="19" placeholder="{{i18mobile.personBank_BankCardNumber_lable}}" ng-model="bankCardAuth.BankCardNumber.value" bi_name="{{i18mobile.bi_bankCardNumber}}" ng-change="bankCardAuth.BankCardNumber.change()" ng-blur="bankCardAuth.BankCardNumber.blur()"></div><div class="cardChange-box"><p id="BankNameid"></p><input id="bankName" type="text" readonly="readonly" placeholder="发卡行"></div><div class="cardChange-box"><div class="bank-i" on-tap="gotoBankPhonePrompt()"></div><p id="BankPhoneid"></p><input id="BankPhone" type="text" maxlength="11" placeholder="银行预留手机号码" ng-model="bankPhone" ng-change="swatchThree()" bi_name="{{i18mobile.bi_bankPhone}}"></div><div class="cardChange-box"><div class="bank-mesg" on-tap="bankCardAuth.querySMSCode.click()"><span ng-bind="bankCardAuth.querySMSCode.text">1</span></div><input id="megSMScode" bi_name="{{i18mobile.bi_megSMScode}}" bi_name="{{i18mobile.bi_megSMScode}}" class="bank-meg-width" type="text" maxlength="6" placeholder="短信验证码" ng-model="SMScode" ng-change="swatchThree()"></div><div class="resetAgree" style="font-size:.75rem"><input id="color-input-red" class="chat-button-location-radio-input" type="checkbox" name="color-input-red" ng-checked="agree.agreeCheck" ng-model="agree.agreeCheck" style="vertical-align:middle" bi_name="{{i18mobile.bi_click_agree}}" ng-change="swatchThree()"> <label for="color-input-red"></label> <span style="display:inline-block;vertical-align:middle"><span id="resett1" style="color:#222;padding-left:.2rem" on-tap="clickAgree()" bi_name="{{i18mobile.bi_click_agree}}" ng-bind="i18mobile.face_agree_1"></span><span id="resett" on-tap="gotoAgreeMengBanShow()" bi_name="{{i18mobile.bi_click_agreeContent}}" ng-bind="i18mobile.face_agree_2"></span><span id="resett2" on-tap="clickAgree()" style="color:#222;margin-left:.1rem" bi_name="{{i18mobile.bi_click_agree}}" ng-bind="i18mobile.face_agree_3"></span></span></div><button class="perInfo-next bank-confirm" id="six" on-tap="bankCardAuth.bankCardAuth_submit.click()" ng-bind="i18mobile.face_button_submit" style="border:none;font-size:.8rem;line-height:2.2rem" ng-disabled="!agree.agreeCheck"></button></div></div></div><div class="success big-box" ng-if="bankSuccess"><div class="mengban" ng-show="agreeMengban"><div><div id="lkj"><p ng-bind="i18mobile.personalCertifi_tip_resetCertifiConfirmInfo"></p><p class="choose"><span on-tap="gotoAgreeMengBanHide()" ng-bind="i18mobile.system_alert_button_cancel"></span> <span on-tap="gotoReset()" ng-bind="i18mobile.personalCertifi_button_resetCertifi"></span></p></div></div></div><div class="infoCheck-success-fail"><div class="successPho"></div><p><span class="icon-ok"></span> {{i18mobile.personalCertifi_tip_confirmInfoSuccess}}</p></div><div class="confirm-info"><div><p ng-bind="i18mobile.personalCertifi_text_name"></p><p ng-bind="personal.name" class="info-certifi-name"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p ng-bind="personal.idCard"></p></div></div><div class="next-box"><div class="perInfo-next" ng-show="isActivity" on-tap="gotoActivity()" ng-bind="i18mobile.system_button_goto_activity"></div><div class="perInfo-next" ng-show="promotion && !isActivity" on-tap="redirectBack()" ng-bind="i18mobile.system_button_redirect_back"></div></div></div><div class="fail big-box" ng-show="bankFail"><div class="infoCheck-success-fail"><div class="failPho"></div><p><span class="icon-fail"></span> {{i18mobile.company_content_checkFail}}</p></div><div class="confirm-info" ng-hide="faceError"><div><p ng-bind="i18mobile.personalCertifi_text_name">{</p><p class="info-certifi-name">{{personal.name}}</p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCard"></p><p class="cardType" ng-bind="i18mobile.personalCertifi_text_idCardType"></p></div><div><p ng-bind="i18mobile.personalCertifi_text_idCardNum"></p><p>{{personal.idCard}}</p></div></div><div class="next-box"><div class="perInfo-next" on-tap="gotoReset()" ng-bind="i18mobile.personalCertifi_button_resetCertifi"></div></div></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/bankTransfer.html', '<style>.tabs{width:100%;color:#34475f;position:relative;top:0;padding-top:0;border-bottom:1px solid #ececec}.tab{width:26%;height:100%;margin:0 12%;text-align:center;font-size:inherit}.activeTab{color:#e41f2b;border-bottom:2px solid #e41f2b}.item{padding-top:0;padding-bottom:0;border-bottom:1px solid #e2e2e2;padding:.5rem .75rem}.itemKey{width:5em;display:inline-block}.itemValue{display:inline-block;padding-top:.2rem;font-size:.8rem!important;color:#34475f}.friendly-tips{height:1.5em}.item-divider{padding:.5rem .75rem;font-size:.6rem}.item-divider .form-label{color:#8a8d93;display:inline-block;white-space:normal;line-height:.9rem}.list{margin-bottom:0}.bankTransfer-field{color:#8a8d93}.dsn{display:none;height:100%}</style><ion-content><div class="dsn"><div class="list" ng-if="realNameAuth==2 && subAccount"><div class="item item-divider"><span class="form-label" style="font-size:.6rem;color:#8a8d93;font-weight:700;line-height:.6rem;margin-bottom:.5rem">专用充值账户</span><br><span class="form-label">请汇款至您的专属汇款账号进行充值，系统在收到银行汇款后将自动匹配到您的华为云账户并为您完成充值 ( 3分钟到账 <span on-tap="tipAlert()" class="icon-cloud-action-tip"></span> )</span><br><span class="form-label" style="padding-top:.5rem">汇款账号如下:</span></div><div class="item" style="padding-top:1em"><span ng-bind="i18mobile.recharge_banktransfer_label_receiver" class="bankTransfer-field itemKey"></span><br><span ng-bind="i18user.rechargeInfo.companyName" class="itemValue"></span></div><div class="item"><span ng-bind="i18mobile.recharge_banktransfer_label_bank" class="bankTransfer-field itemKey"></span><br><span ng-bind="bankName" class="bankTransfer-info itemValue"></span></div><div class="item" style="padding-bottom:1em"><span ng-bind="i18mobile.recharge_banktransfer_label_account" class="bankTransfer-field itemKey"></span><br><span ng-bind="subAccount" class="bankTransfer-info itemValue"></span></div></div><div class="list" style="height:100%" ng-if="!(realNameAuth==2 && subAccount)"><div class="item" style="height:100%"><p style="text-align:center;margin-top:2.25rem"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/blue.png"></p><p style="text-align:center;margin-top:1rem;font-size:.8rem;color:#34475f">您尚未开通华为云专属账号。</p><p style="text-align:center;margin-top:.5rem;font-size:.8rem;color:#34475f">可以通过<a style="font-size:.8rem" on-tap="gotoWork()">提交工单</a>申请您的华为云专属汇款账号。</p></div></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/base.html', '<div ui-view></div>');
            $templateCache.put('src/app/business/mobile/views/bpbalancePay.html', '<div class="list addRecommend-list"><div class="item"><span ng-bind="i18mobile.myorder_label_orderfee"></span> <span style="color:red;float:right" ng-bind="amount"></span></div><div class="item"><span ng-bind="i18mobile.myrecommend_label_mobilephone"></span> <span style="float:right" ng-bind="phone"></span></div><div class="item item-input item-getCoder"><input type="text" maxlength="6" placeholder="{{i18mobile.myorder_placehold_code}}" id="code" name="code" ng-model="code"> <button id="getcode" class="button button-positive" ng-disabled="!isCodeButActive" style="height:1.6rem" ng-bind="buttonmsg" on-tap="getCode()"></button></div></div><div class="button-wrap"><button class="button button-block button-assertive" style="width:100%" ng-disabled="!isPayButActive" id="balancepay" on-tap="bpbalancePay()">{{i18mobile.myorder_button_paynow}}</button></div>');
            $templateCache.put('src/app/business/mobile/views/browerError.html', '<ion-content><div class="success big-box big-boxH5"><div class="BrowserError-fail"><div class="BrowserError"></div></div><div><div class="faseUserOnePageTopH5Tip" ng-bind="i18mobile.face_BrowserError_title"></div><div class="greTip" style="margin-top:-1rem"><span ng-bind="userAgent"></span> <span ng-bind="i18mobile.face_BrowserError_tip1"></span><br><span ng-bind="i18mobile.face_BrowserError_tip2"></span></div></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/buyservice.html', '<style>#mheader .buttons button{margin-top:0;height:1rem}.popup-head{padding:.3rem .4rem;background-color:#18235b;border-color:#18235b;text-align:center}.popup-head.h3{color:#fff}.popup-container .popup{border:unset}.popup-title{color:#fff!important}.item{color:#34475f}.buyButton{border-radius:2px;background:#f66f6a;color:#fff;font-size:.7rem;display:inline;width:6rem;margin-top:unset!important}.buyButton:active,.buyButton:hover,.buyButton:link,.buyButton:visited{background:#f66f6a;color:#fff}.buyButton.activated,.buyButton.active{background:#ea3930;color:#fff}.ion-minus,.ion-plus{border-color:#ccc;border-radius:0;min-height:1.5rem;line-height:1rem!important}.footerSpace{height:.7rem;background:#f5f5f5}.list-explain{font-size:.6rem;color:#8a8d93;opacity:.89;padding:.5rem .75rem}.list-explain-red{opacity:.89;font-family:PingFangSC-Regular;color:#f66f6a;letter-spacing:0}.item-divider-white{background:#fff}.bar.bar-dark-hw{border-color:#18235b;background-color:#18235b;color:#fff}.bar-subfooter{height:2rem!important;bottom:2.5rem;background:#fff3eb}.ti-msg-content-wrapper{line-height:1rem}.title{font-size:18px!important}.display-inlineblock{display:inline-block}.vetical-alin-top{vertical-align:top}.price-width{width:60%}.button.button-csb,.button.button-csbok{font-size:16px;color:#6882da;letter-spacing:0;text-align:center;line-height:24px}.scroll{background-color:rgba(238,240,245,.4)}.serviceAgreementModel-input-check{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/checked.png) 0 0/100% 100% no-repeat;width:.8rem;height:.8rem}.serviceAgreementModel-input-uncheck{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/notChecked.png) 0 0/100% 100% no-repeat;width:.8rem;height:.8rem}</style><ion-view><ion-header-bar align-title="center" class="bar-dark bar-dark-hw" id="mheader" meta-data-adjust-app="hide" ng-if="!pcloudApp"><div class="buttons"><button class="button icon ion-ios-arrow-left button-clear" ng-click="returnBack()"></button></div><h1 class="title" ng-bind="buy_title"></h1></ion-header-bar><ion-content><div ui-view></div></ion-content><ion-footer-bar style="background-color:#fff;border-top-color:#f0f0f0;border-top-style:solid;background-image:unset"><div style="padding-top:.4rem"><div style="width:62%;display:inline-block;float:left;line-height:.7rem;margin-top:.3rem"><div class="display-inlineblock vetical-alin-top"><span style="color:#34475f;font-size:.8rem">{{buyLayer.costs[0].label}}:</span></div><div class="display-inlineblock vetical-alin-top price-width"><span style="color:#f66f6a;font-size:.8rem">{{buyLayer.costUnit}}{{buyLayer.costs[0].value | number: 2}}</span><div ng-if="buyLayer.costs[0].discount && buyLayer.costs[0].discount > 0" class="display-inlineblock"><span style="color:#8a8e99;font-size:.6rem;opacity:.89">{{i18reserve.pay_price_saving}}{{buyLayer.costUnit}}{{buyLayer.costs[0].discount | number: 2}}</span></div></div></div><div style="width:30%;display:inline-block;float:right"><button class="button buyButton" ng-show="steps.currentStep == 1" on-tap="btnBuyNow.click()" ng-disabled="aliasValidatorResult.isEmpty||aliasValidatorResult.isInvalid||aliasValidatorResult.rangeSize">{{i18reserve.ecs_term_buyImmediately_label}}</button> <button class="button buyButton" ng-disabled="btnSubmit.disabled" ng-show="steps.currentStep == 2" on-tap="btnSubmit.click()">{{i18reserve.ecs_term_payOrder_button}}</button></div><div style="clear:both"></div></div></ion-footer-bar><ion-footer-bar class="bar-subfooter" ng-show="isShowServiceAgreement" style="padding-left:0"><div style="padding:.45rem"><span style="display:inline-block;padding-left:.45rem" ng-click="serviceAgreementModel.titleClick()"><div style="display:inline-block;vertical-align:middle"><div class="serviceAgreementModel-input-check" ng-show="serviceAgreementModel.checked"></div><div class="serviceAgreementModel-input-uncheck" ng-show="!serviceAgreementModel.checked"></div></div><div ng-bind="serviceAgreementConfig.title" style="font-size:.6rem;display:inline;color:#8a8d93;margin-left:10px"></div></span><span style="display:inline-block;margin-left:5px"><a style="font-size:.6rem;color:#499df2" ng-click="serviceAgreementModel.click()" ng-bind="serviceAgreementConfig.name"></a></span></div></ion-footer-bar></ion-view>');
            $templateCache.put('src/app/business/mobile/views/coupons.html', '<style type="text/css">.tab-item span{font-size:.75rem;height:inherit;display:inline-block}.activeTab{border-bottom:2px solid #e41e2b;color:#e41e2b}.couponse-top{width:100%;height:3rem;line-height:3rem;background-color:#ccc;text-align:center;color:#fff;vertical-align:middle}.couponse-price{width:60%;height:100%;padding-left:1.5em;float:left;text-align:left;font-size:.52em}.couponse-describe{width:40%;height:100%;padding-right:1.5em;float:left;text-align:right;font-size:.52em;line-height:normal}.bigSpan{font-family:Arial;font-size:2.1em!important}.smallSpan{font-weight:700}.couponse-type{font-size:1.5em;margin-top:.3em}.couponse-limit{font-size:inherit;margin-top:.2em}.couponse-bottom{width:100%;border-top:1px dashed #ccc;background-color:#fff;display:table}.couponse-detail{width:75%;padding-left:.75rem;padding-top:.625rem;padding-bottom:.625rem;font-size:.52em;color:#34475f;line-height:1.6em;text-align:left;display:table-cell}.couponse-detail p{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:19.5em;font-size:.6rem;margin-bottom:0}.couponse-btn{width:6%;height:auto;text-align:left;vertical-align:middle;display:table-cell}.couponse-btn img{height:.6rem}.couponse-attention{width:5em;height:1.5em;background-color:#f60;color:#fff;font-size:.6em;text-align:center;position:absolute;right:0;top:5.5em}.couponse-type-div{width:100%;height:2rem;line-height:2rem;background-color:#fff;font-size:.7rem;border-bottom:1px solid #ececec;padding-left:.75rem;padding-right:.75rem;color:#8a8d93}.marginTop-div{margin-top:2rem}.marginTop{margin-top:4rem}.marginBottom{margin-bottom:0}.couponse-type-div-1{width:27%;height:100%;text-align:left;float:left;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/down.png) no-repeat scroll right center transparent;background-size:13%;font-size:inherit}.couponse-type-div-1 span{font-size:inherit}.couponse-type-div-1.select{color:#499df3;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/up.png) no-repeat scroll right center transparent;background-size:13%}.semi-circle-new{position:absolute;width:.6em;height:.6em;content:\'\';display:block;background:#f5f5f5;z-index:999;border-radius:100%}.semi-circle-left{top:3rem;margin-top:-.3em;left:0;margin-left:-.3em}.semi-circle-right{top:3rem;margin-top:-.3em;right:0;margin-right:-.3em}.gray-font{color:#999}.black-font{color:#34475f;margin-left:.2em}.green-back{background-color:#3dcca6}.yellow-back{background-color:#f83}.blue-back{background-color:#499df3}.blue-font{color:#499df3}.couponse-hasbeenUse-icon{width:19%;height:auto;text-align:center;vertical-align:middle;display:table-cell;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/coupon_used.png) left no-repeat;background-size:2em}.couponse-hasGone-icon{width:19%;height:auto;text-align:center;vertical-align:middle;display:table-cell;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/coupon_expire.png) left no-repeat;background-size:2em}.couponse-type-optionList{width:100%;background-color:#fff;font-size:.56em}.couponse-type-option{width:100%;height:3.14em;line-height:3.14em;padding-left:.75rem;padding-right:.75rem;font-size:inherit;border-bottom:1px solid #f4f4fc}.couponse-type-option div{font-size:inherit;float:left;width:50%;height:100%}.option-selected-icon{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/check.png) no-repeat scroll right center transparent;background-size:9%}.option-selected{font-size:.7rem}.tab-item{height:100%;line-height:inherit;font-size:1.2em;opacity:1}.mask{width:100%;height:100%;background-color:#000;opacity:.4;position:absolute;top:0;left:0;bottom:0;right:0;z-index:50}.pageTopDiv{width:100%;height:auto;position:absolute;top:0;z-index:99;background-color:#f4f4fc}.tabs{border-bottom:1px solid #ececec}</style><div class="pageTopDiv"><div id="tabs" class="tabs tabs-top tabs-default" ng-if="$root.bpBeId && $root.csbBeId"><a id="tab_2" class="tab-item" ng-if="$root.bpBeId" on-tap="getTagCoupons(0)"><span ng-bind="$root.bpBeName + i18v1r2.bename_bp" ng-class="{\'activeTab\':(businessEntityType==0)}"></span> </a><a id="tab_3" class="tab-item" ng-if="$root.csbBeId" on-tap="getTagCoupons(1)"><span ng-bind="$root.csbBeName + i18v1r2.bename_hw" ng-class="{\'activeTab\':(businessEntityType==1)}"></span></a></div><div class="couponse-type-div" ng-class="{\'marginTop-div\': $root.bpBeId && $root.csbBeId}"><div class="couponse-type-div-1" ng-class="{\'select\':ifShowSelctTypeIfUse}" on-tap="showSelectDiv(0)"><span>{{selectTypeIfUse}}</span> <span ng-if="currentCouponIndex == 2">({{coupons_count_2}})</span> <span ng-if="currentCouponIndex == 3">({{coupons_count_3}})</span> <span ng-if="currentCouponIndex == 4">({{coupons_count_4}})</span></div><div class="couponse-type-div-1" ng-class="{\'select\':ifShowSelctTypeIfCash}" on-tap="showSelectDiv(1)" style="margin-left:2em">{{selectTypeIfCash}}</div></div><div class="couponse-type-optionList" ng-if="ifShowSelctTypeIfUse"><div class="couponse-type-option" ng-repeat="option in optionList" on-tap="getCoupons(option.status,currentTypeIndex,0,option.showIndex)"><div class="option-selected" ng-if="option.status == 2" ng-class="{\'blue-font\' : currentCouponIndex == option.status}">{{option.name}} <span class="option-selected" ng-if="currentCouponIndex == option.status">{{\'(\'+coupons_count_2+\')\'}}</span></div><div class="option-selected" ng-if="option.status == 3" ng-class="{\'blue-font\' : currentCouponIndex == option.status}">{{option.name}} <span class="option-selected" ng-if="currentCouponIndex == option.status">{{\'(\'+coupons_count_3+\')\'}}</span></div><div class="option-selected" ng-if="option.status == 4" ng-class="{\'blue-font\' : currentCouponIndex == option.status}">{{option.name}} <span class="option-selected" ng-if="currentCouponIndex == option.status">{{\'(\'+coupons_count_4+\')\'}}</span></div><div class="option-selected-icon" ng-if="currentCouponIndex == option.status"></div></div></div><div class="couponse-type-optionList" ng-if="ifShowSelctTypeIfCash"><div class="couponse-type-option" ng-repeat="option in optionList" on-tap="getCoupons(currentCouponIndex,option.couponType,1,option.showIndex)"><div class="option-selected" ng-class="{\'blue-font\' : currentTypeIndex == option.couponType}">{{option.name}}</div><div class="option-selected-icon" ng-if="currentTypeIndex == option.couponType"></div></div></div></div><div class="mask" ng-if="ifShowSelctTypeIfUse || ifShowSelctTypeIfCash" on-tap="hideMask()"></div><ion-content overflow-scroll="false" class="coupons-content csbcontent tabs-space" ng-class="{\'marginTop\': $root.bpBeId && $root.csbBeId,\'marginBottom\': isMcloudApp}" on-swipe-up="viewNoMoreData(items, moredata)" on-scroll="ViewScrollTop(items)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-slide><ion-item ng-if="items.length == 0 && isShowLoadText" ng-bind="coupon_noData" class="data-null"></ion-item><ion-list><ion-item class="item" ng-if="items.length > 0" style="padding-top:.25rem"><div ng-repeat="item in items"><div class="coupons-basic" ng-class="{\'coupons-used\':item.status ==4 || item.status ==3}" style="margin-bottom:.5rem"><table><tr><div class="couponse-top" ng-class="{\'green-back\': (item.couponType == 1) && (item.status == 2),\'blue-back\': (item.couponType == 2) && (item.status == 2),\'yellow-back\': (item.couponType == 4) && (item.status == 2)}"><div class="couponse-price" ng-if="item.couponType == COUPONTYPE_DISCOUNT"><span class="bigSpan" ng-bind="item.faceValue"></span> <span class="bigSpan" ng-bind="i18v1r2.couponsView_discount"></span></div><div class="couponse-price" ng-if="item.couponType != COUPONTYPE_DISCOUNT"><span class="bigSpan" ng-bind="currency"></span> <span class="bigSpan" ng-if="item.couponVersion==2&&(item.couponType==1||item.couponType==3||item.couponType==4)&&(item.status==2||item.status==4)" ng-bind="item.balance"></span> <span class="bigSpan" ng-if="(item.couponVersion==1&&(item.couponType==1||item.couponType==3||item.couponType==4))||(item.status==3&&(item.couponType==1||item.couponType==3 || item.couponType==4))" ng-bind="item.faceValue"></span></div><div class="couponse-describe"><div class="couponse-type" ng-bind="i18mobile[\'coupons_type_\'+item.couponType]"></div><div class="couponse-limit" ng-if="item.baseValue != null&&item.limitValue==null">{{i18v1r2.couponsView_usingConditionStart + item.baseValue + i18v1r2.couponsView_usingConditionEnd}}</div><div class="couponse-limit" ng-if="item.baseValue != null&&item.limitValue!=null">{{item.baseValue + i18v1r2.couponsView_to + item.limitValue2 + i18v1r2.couponsView_limitBaseValue}}</div><div class="couponse-limit" ng-if="item.baseValue==null&&item.limitValue==null">{{i18v1r2.couponsView_usingConditionAll}}</div><div class="couponse-limit" ng-if="item.baseValue==null&&item.limitValue!=null">{{item.limitValue + i18v1r2.couponsView_limitBaseValue}}</div></div></div><div class="couponse-bottom" on-tap="goCouponsDetail(item)"><div class="couponse-detail"><p><span class="gray-font" ng-bind="i18v1r2.consumedetail_productclass"></span> <span ng-class="{\'gray-font\':item.status!=2,\'black-font\':item.status==2}" ng-bind="item.serviceTypeText"></span></p><p><span class="gray-font" ng-bind="i18v1r2.couponCenter_t_condition + \':\'"></span> <span ng-class="{\'gray-font\':item.status!=2,\'black-font\':item.status==2}" ng-bind="item.productText"></span></p><p><span class="gray-font" ng-bind="i18v1r2.consumedetail_label_chargemode"></span> <span ng-class="{\'gray-font\':item.status!=2,\'black-font\':item.status==2}" ng-bind="item.cycleTypeName"></span></p><p><span class="gray-font" ng-bind="i18v1r2.couponsView_usingRules"></span> <span ng-class="{\'gray-font\':item.status!=2,\'black-font\':item.status==2}" ng-bind="item.usingRulesText"></span></p><p><span class="gray-font" ng-bind="i18v1r2.couponsDetail_expiretime"></span> <span ng-class="{\'gray-font\':item.status!=2,\'black-font\':item.status==2}" ng-bind="item.expireTi"></span></p></div><div class="couponse-hasbeenUse-icon" ng-if="item.hasbeenUsed==true"></div><div class="couponse-hasGone-icon" ng-if="item.status == 4"></div><div class="couponse-btn"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></div></div></tr></table><div class="semi-circle-new semi-circle-left"></div><div class="semi-circle-new semi-circle-right"></div></div></div></ion-item><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-list></ion-slide></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)"></div><div class="bar bar-footer" ng-if="!isMcloudApp"><button class="button button-assertive fr" on-tap="gotoActive()">{{i18mobile.coupons_button_addcoupon}}</button></div>');
            $templateCache.put('src/app/business/mobile/views/couponsDetail.html', '<style>.divInfo{background-color:#fff;padding:.5rem 0}.moduleHeader{margin:0;padding-left:.75rem;padding-bottom:.5rem;padding-top:.75rem;background-color:#fff;border-bottom:1px solid #ececec;font-size:.8rem}.item_style1,.item_style2{width:100%;margin-top:0}.item_style1 .content_info,.item_style1 .content_info span,.item_style1 .label_info,.item_style2 .content_info,.item_style2 .content_info span,.item_style2 .label_info{font-size:.7rem;display:inline-block;vertical-align:top}.item_style1 .label_info,.item_style2 .label_info{padding-left:.75rem;width:80px;color:#8a8d93}.item_style1 .content_info,.item_style2 .content_info{padding-left:.75rem;width:calc(95% - 80px)}#coupon_expireTime{display:inline-block;padding-left:.75rem;width:calc(95% - 80px)!important}.tabClick{display:inline-block;font-size:.75rem;width:20%;text-align:center;line-height:1.9rem;background-color:#fff;border-bottom:0}.tabClick span{font-size:.7rem}.item_styles{background-color:#fff}.item_styles .item_style1:last-child{padding-bottom:.75rem}.activeline{display:inline-block;color:#e41e2b;border-bottom:2px solid #e41e2b}.noDadaInfo{margin:0;padding:.3rem 0;background-color:#fff;color:#8a8d93}.showRecord{margin-top:1rem}</style><ion-content overflow-scroll="false" ng-init="$Get(\'couponsDetailCtrl\').couponsDetail(this)" class="" on-swipe-up="viewNoMoreData(srcData.data, moredata)" on-scroll="ViewScrollTop(srcData.data)"><div class="moduleHeader" ng-bind="i18v1r2.couponsDetail_title"></div><div class="divInfo" id="divInfo"><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_name.split(\':\')[0]"></div><div id="coupon_name" class="content_info" ng-bind="planName"></div></div><div ng-if="coupontype!=2" class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_amount.split(\':\')[0]"></div><div id="coupon_balance" class="content_info" ng-bind="balance"></div></div><div ng-if="coupontype==2" class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_deduct.split(\':\')[0]"></div><div id="coupon_deduct" class="content_info" ng-bind="faceValue"></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_status.split(\':\')[0]"></div><div id="coupon_status" class="content_info" ng-bind="status"></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_ID.split(\':\')[0]"></div><div id="coupon_id" class="content_info" ng-bind="couponId"></div></div><div ng-if="coupontype!=2" class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_facevalue.split(\':\')[0]"></div><div id="coupon_faceValue" class="content_info"><span ng-bind="faceValue"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_coupontype.split(\':\')[0]"></div><div id="coupon_type" class="content_info"><span ng-bind="couponType"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponCenter_serviceType.split(\':\')[0]"></div><div id="coupon_serviceType" class="content_info" title="{{serviceTypeText}}"><span ng-bind="serviceTypeText"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsView_activate_time.split(\':\')[0]"></div><div id="coupon_activeTime" class="content_info" title="{{activeTime}}"><span ng-bind="activeTime"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.paybyproxy_detail_paymethod.split(\':\')[0]"></div><div id="coupon_cycleType" class="content_info"><span ng-bind="cycleTypeName"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsView_applicable_products.split(\':\')[0]"></div><div id="coupon_product" class="content_info" title="{{productText}}"><span ng-bind="productText"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.dealrecords_beName.split(\':\')[0]"></div><div id="coupon_be" class="content_info"><span ng-bind="beName"></span></div></div><div class="item_style2"><div class="label_info" ng-bind="i18v1r2.couponsView_validDate.split(\':\')[0]"></div><div id="coupon_expireTime" style="width:auto" class="content_info" title="{{expireTime}}"><span ng-bind="expireTime"></span></div></div><div class="item_style1"><div class="label_info" ng-bind="i18v1r2.couponsDetail_userrule.split(\':\')[0]"></div><div id="coupon_rules" class="content_info" title="{{usingRulesText}}"><span ng-bind="usingRulesText"></span></div></div></div><div ng-show="showRecord" class="moduleHeader showRecord" ng-bind="i18v1r2.couponsDetail_title_record"></div><div ng-show="showRecord" ng-cloak ng-if="currentType==2" style="background-color:#fff;border-bottom:1px solid #ececec"><ul><li class="tabClick" on-tap="tabClickMobile(tab.payMethod)" ng-repeat="tab in tabs"><span ng-class="{activeline:tab.active}">{{tab.title}}</span></li></ul></div><div ng-show="showRecord" ng-cloak><div class="ti-resize-wrapper ti-table-container" style="background-color:#fff;padding-top:.75rem"><div ng-if="srcData.data.length > 0"><div ng-repeat="row in srcData.data" class="item_styles"><div class="item_style1 item_div" ng-if="isOrderShow"><div class="label_info">{{columns[0].title}}</div><div class="content_info">{{row.orderId}}</div></div><div class="item_style1"><div class="label_info">{{columns[1].title}}</div><div class="content_info">{{row.productName}}</div></div><div class="item_style1"><div class="label_info">{{columns[2].title}}</div><div class="content_info">{{row.cloudServiceTypeCode_tab}}</div></div><div class="item_style1"><div class="label_info">{{columns[3].title}}</div><div class="content_info">{{row.regionname}}</div></div><div class="item_style1" ng-if="isResourceShow"><div class="label_info">{{columns[4].title}}</div><div class="content_info">{{row.resourceInstanceId}}</div></div><div class="item_style1"><div class="label_info">{{columns[5].title}}</div><div class="content_info">{{row.consumeTime_tab}}</div></div><div class="item_style1"><div class="label_info">折扣金额</div><div class="content_info">{{\'￥\'+row.consumeAmount_tab}}</div></div></div></div><div ng-if="srcData.data.length === 0"><div class="item_style1 noDadaInfo"><div class="content_info" style="width:100%;text-align:center">暂无数据</div></div></div></div></div><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)"></div>');
            $templateCache.put('src/app/business/mobile/views/discountdetail.html', '<ion-content><div id="discount-details"><div class="all-discounts"><div class="all-discountsKid"><span class="discountCandelete1" ng-bind="i18mobile.discount_detail_all_discounts_candelete1"></span><span class="discount-num">{{promotionNum+contractNum}}</span><span class="discountCandelete1" ng-bind="i18mobile.discount_detail_all_discounts_candelete2"></span><span id="discountNums" class="discount-num">0</span></div></div><div class="branch-discounts"><div class="contract-discounts"><span class="discountsSpan" ng-bind="i18mobile.discount_detail_branch_type1"></span><ul class="contract-top"></ul></div><div class="promotion-discounts"><span class="discountsSpan" ng-bind="i18mobile.discount_detail_branch_type2"></span><ul class="contract-down"></ul></div></div></div></ion-content><div class="bar bar-footer"><button class="button button-assertive fr" on-tap="discountTrue()" ng-bind="i18mobile.discount_detail_trues"></button></div><div class="mengban mengban1" ng-if="TipBankMengban"><div><div id="bankPrompt" style="height:7rem;padding-top:1rem"><p class="person-text2" ng-bind="i18mobile.discount_detail_mengban"></p><p class="person-text3" style="margin:0 0"><span on-tap="cancel()" ng-bind="i18mobile.discount_detail_mengban_cancel"></span><span on-tap="ok()" ng-bind="i18mobile.discount_detail_mengban_ok"></span></p></div></div></div>');
            $templateCache.put('src/app/business/mobile/views/getCoupons.html', '<div id="tabs" class="tabs tabs-top tabs-default"><a id="tab_1" class="tab-item active" on-tap="getAvailableCoupons(1)">{{i18mobile.coupons_type_1}} </a><a id="tab_2" class="tab-item" on-tap="getAvailableCoupons(2)">{{i18mobile.coupons_type_2}} </a><a id="tab_3" class="tab-item" on-tap="getAvailableCoupons(3)">{{i18mobile.coupons_type_3}}</a></div><div class="content" style="margin-top:92px"><ion-item><div class="item" style="margin-bottom:10px" ng-repeat="item in items"><span ng-bind="currency + item.faceValue"></span> <span style="float:right" ng-bind="i18mobile[\'coupons_type_\'+item.couponType]"></span><br></div></ion-item></div>');
            $templateCache.put('src/app/business/mobile/views/grainCloud.html', '<style>.item{border-width:.5px!important;border-color:#f0f0f0}.item-keep-rigth{float:right}.item-gray-style{padding:.5rem .75rem;text-align:center}.list,.list:last-child{margin-bottom:0}.description-exceed-limit{width:99%;display:inline-block;word-break:break-all;white-space:normal}.item-pinner-input{float:left;text-align:center;width:2.5rem!important;height:1.5rem!important;border-width:1px 0 1px 0!important;border-style:solid!important;border-color:#ccc!important;font-size:.8rem!important;background:0 0}.textRight{text-align:right}.list-divider{background-color:#f5f5f5;height:.3em}.bottom-blank-height{height:2.5rem}input::-webkit-input-placeholder{color:#99999}input::-moz-placeholder{color:#99999}input:-moz-placeholder{color:#99999}input:-ms-input-placeholder{color:#99999}.backdrop{background:0 0;background-color:rgba(0,0,0,.4)}.popup-body{padding:.5rem;border-bottom:.0268rem solid rgba(138,141,147,.15)}.mobileConfirmTwoButton .popup-head{padding:.3rem .4rem;background-color:#fff;border-color:#fff;text-align:center}.text-align-left{text-align:left;font-size:.6em}.head-padding-height{height:45px}.autoRenewSwitch-input-check{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/checked.png) 0 0/100% 100% no-repeat;width:.8rem;height:.8rem}.autoRenewSwitch-input-uncheck{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/notChecked.png) 0 0/100% 100% no-repeat;width:.8rem;height:.8rem}</style><div class="item item-divider item-divider-white item-gray-style text-align-left head-padding-height" meta-data-adjust-app="hide" ng-if="!pcloudApp"><span></span> <span></span></div><div class="list" ng-if="DisplayRegion"><div class="item item-icon-left" href="#"><span>{{dataCenterModel.label}}</span> <span class="item-keep-rigth" on-tap="dataCenterModel.openModal(dataCenterModel.label,\'region\')"><span style="margin-right:.45rem">{{dataCenterModel.dcLabel}}</span> <span ng-if="dataCenterModel.values.length >1"><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></div><div class="item item-icon-left" href="#" ng-if="!noAZFlag"><span>{{fieldProperties.avaliableZone.label | uppercase}}</span> <span class="item-keep-rigth" on-tap="azOpenModal(fieldProperties.avaliableZone.label,\'az\')"><span style="margin-right:.45rem">{{fieldProperties.avaliableZone.mText}}</span> <span ng-if="fieldProperties.avaliableZone.options.length >1"><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></div></div><div class="item item-divider list-explain"><span class="description-exceed-limit">{{orderi18order.solution_region_explain}}</span></div><div class="item item-divider list-explain" ng-if=" group.name == orderi18order.domain_register" ng-repeat="group in drawingModel.productGroups track by $index"><span class="description-exceed-limit">{{orderi18order.domain_announcement}}<br>{{orderi18order.domain_announcement_tip1}}<br>{{orderi18order.domain_announcement_tip2}}<br>{{orderi18order.domain_announcement_tip3}}</span></div><div ng-repeat="group in drawingModel.productGroups track by $index"><div ng-repeat="item in group.subGroup" style="width:100%" ng-if="!item.displayType"><div ng-repeat="sub_item in item.products track by $index" ng-if="sub_item.products.length!=0 && sub_item.display!=\'false\'"><div class="item item-divider item-divider-white item-gray-style text-align-left">{{sub_item.name}}</div><ul class="list"><div ng-if="refContain.display" ng-repeat="refContain in sub_item.refContains track by $index"><div ng-repeat="attribute in refContain.attributes track by $index"><li class="item item-icon-left"><span>{{attribute.resourceName}}</span><span class="item-keep-rigth" style="margin-left:2.5rem"><span style="margin-right:.45rem;white-space:pre-wrap" style="display:block">{{attribute.propertiesDes}}</span></span></li></div></div><div ng-if="!(sub_item.limit.min == sub_item.limit.max && sub_item.limit.min == 1&&sub_item.limit.max ==1)"><li class="item item-icon-left"><span>{{orderi18order.pay_quantity}}</span> <span class="item-keep-rigth"><button class="button ion-minus" style="float:left" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'less\')"></button> <input type="number" class="item-pinner-input" ng-model="sub_item.limit.default" ng-blur="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'input\')"> <button class="button ion-plus" style="float:left" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'plus\')"></button></span></li></div></ul></div></div><div ng-if=" group.name == orderi18order.domain_register && propertieGroups.id == \'domain\'" ng-repeat="propertieGroups in propertieGroupsModel.propertieGroups track by $index"><div><div ng-repeat="field in propertieGroups.properties track by $index" ng-if="field.enable &&field.id!=\'norms\'"><ul class="list" ng-if="!field.hide && field.type != \'notice\'&&field.type != \'plugin\'"><li class="item item-icon-left"><span>{{field.label | uppercase}}</span><span class="item-keep-rigth" ng-if="field.type === \'urlGet\'"><span ng-if="!field.disable">{{field.value}}</span> </span><span class="item-keep-rigth" ng-if="field.type === \'domainTimeString\'&& oncedomainflag"><span ng-if="!field.disable">{{field.value}}</span></span></li><div ng-if="field.type === \'notice\' && !field.hide "><div class="item item-divider list-explain list-explain-red"><span class="description-exceed-limit">{{field.redTip}}</span></div></div></ul><div ng-if="$index==1" class="list-divider"></div></div></div></div><div ng-if="group.name != orderi18order.domain_register && propertieGroups.id != \'region\'&& propertieGroups.id != \'domain\'  " ng-repeat="propertieGroups in propertieGroupsModel.propertieGroups track by $index"><div><div ng-repeat="field in propertieGroups.properties track by $index" ng-if="field.enable &&field.id!=\'norms\'"><div ng-if="$index==0" class="list-divider"></div><ul class="list" ng-if=" !field.hide && field.type != \'notice\'"><li class="item item-icon-left" ng-if="field.type !== \'plugin\'"><span>{{field.label}}</span> <span class="item-keep-rigth" ng-if="field.type === \'password\'"><input type="password" class="textRight" ng-model="field.value" placeholder="{{field.placeholder}}" ng-blur="" style="color:#333" required> </span><span class="item-keep-rigth" ng-if="field.type === \'string\' || field.type === \'integer\' || field.type === \'number\' || field.type === \'email\'"><input type="text" class="textRight" ng-model="field.value" placeholder="{{field.placeholder}}" ng-if="!field.disable" ng-blur="" style="color:#333;margin-right:.45rem" required> <span ng-if="field.disable">{{field.value}}</span> </span><span class="item-keep-rigth" ng-if="field.type === \'labeltext\'"><span ng-if="!field.disable">{{field.value}}</span> </span><span class="item-keep-rigth" ng-if="field.id == \'ecsLoginMode\'" on-tap="logMethodOpenModal(sub_item,refContain,field,\'logMethod\')"><span style="margin-right:.45rem">{{field.mText}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span><span class="item-keep-rigth" ng-if="field.id == \'dcsType\'" on-tap="speSelectOpenModal(sub_item,refContain,field,\'mselect\')"><span style="margin-right:.45rem">{{field.value}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span><span class="item-keep-rigth" ng-if="field.subs && field.type === \'enumGet\'" on-tap="imageSelectOpenModal(fieldProperties.imsType,field,\'spec\')"><span style="margin-right:.45rem;white-space:pre-wrap" title="{{field.mvalue}}">{{field.mvalue}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span><span class="item-keep-rigth" ng-if="!field.subs && field.type === \'enumGet\'" on-tap="speSelectOpenModal(sub_item,refContain,field,\'mselect\')"><span style="margin-right:.45rem;white-space:pre-wrap">{{fieldProperties[field.id].mSelectName}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></li><li><span ng-if="!field.subs && field.type === \'plugin\'"><div ng-include="field.templateUrl"></div></span></li></ul><div ng-if="field.type === \'notice\' && !field.hide "><div class="item item-divider list-explain list-explain-red"><span class="description-exceed-limit">{{field.redTip}}</span></div></div></div></div></div></div><div class="list-divider"></div><div class="item item-divider item-divider-white item-gray-style text-align-left"><span ng-bind="orderi18order.lbl_common_term_purchase"></span></div><div class="list"><div class="item item-icon-left" ng-if="ProductSubscribeFlag"><span>{{orderi18order.vbs_bugTime_title}}</span> <span ng-if="!onlyOnePeridFlag" class="item-keep-rigth" on-tap="periodSlider.durationSelectOpenModal(\'duration\')"><span style="margin-right:.45rem">{{periodSlider.valueLable}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span><span ng-if="onlyOnePeridFlag" class="item-keep-rigth"><span style="margin-right:.45rem">{{periodSlider.valueLable}}</span></span></div><div class="item item-icon-left" ng-if="grainAutoRenewal"><span>{{autoRenewSwitch.title}}</span> <span class="item-keep-rigth" ng-click="autoRenewSwitch.titleClick()"><div style="display:inline-block;vertical-align:middle"><div class="autoRenewSwitch-input-check" ng-show="autoRenewSwitch.checked"></div><div class="autoRenewSwitch-input-uncheck" ng-show="!autoRenewSwitch.checked"></div></div></span></div><div class="item item-divider list-explain" ng-if="autoRenewSwitch.checked"><span class="description-exceed-limit" ng-bind-html="autoRenewSwitch.tip"></span></div><div class="item item-icon-left"><span>{{orderi18order.pay_quantity}}</span> <span class="item-keep-rigth"><button class="button ion-minus" style="float:left" on-tap="mobileSpinnerChange(mobileProduct,null,null,\'less\')"></button> <input type="number" class="item-pinner-input" ng-model="mobileProduct.limit.default" ng-blur="mobileSpinnerChange(mobileProduct,null,null,\'input\')"> <button class="button ion-plus" style="float:left" on-tap="mobileSpinnerChange(mobileProduct,null,null,\'plus\')"></button></span></div></div><div class="item item-divider list-explain"><span class="description-exceed-limit">{{amount_desc}}</span></div><div class="bottom-blank-height"></div><div class="footerSpace"></div>');
            $templateCache.put('src/app/business/mobile/views/home.html', '<div class="list"><a class="item item-icon-right" on-tap="gotoRecharge()"><span ng-bind="i18user.dealRecords.recharge"></span> <i class="icon ion-ios-arrow-right"></i> </a><a class="item item-icon-right" on-tap="gotoCoupons()"><span ng-bind="i18mobile.coupons_title"></span> <i class="icon ion-ios-arrow-right"></i> </a><a class="item item-icon-right" on-tap="gotoOwe()"><span ng-bind="i18mobile.owe_title"></span> <i class="icon ion-ios-arrow-right"></i> </a><a class="item item-icon-right" on-tap="gotoRecommend()"><span ng-bind="i18mobile.myrecommend_title"></span> <i class="icon ion-ios-arrow-right"></i> </a><a class="item item-icon-right" on-tap="gotoCertification()"><span ng-bind="i18mobile.certification_title"></span> <i class="icon ion-ios-arrow-right"></i> </a><a class="item item-icon-right" style="display:none" on-tap="gotoStudent()"><span>学生认证</span> <i class="icon ion-ios-arrow-right"></i></a></div>');
            $templateCache.put('src/app/business/mobile/views/ipsOrderSuccess.html', '<style>.btnGradient{background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 100%);border-radius:2.5rem}.font16{font-size:.8rem}</style><ion-content><div><div class="item main-content-container title-with-pic" id="result" style="display:none"><img class="pic" ng-src="{{title_img}}"><span class="word" ng-bind="title_content"></span></div><div class="list"><div class="item pay-detail"><div><span ng-bind="i18mobile.recharge_label_fee"></span> <span ng-bind="amount" class="fr"></span></div><div><span ng-bind="i18mobile.recharge_label_type"></span> <span ng-bind="type" class="fr"></span></div><div><span ng-bind="i18mobile.recharge_label_no"></span> <span ng-bind="tradeNo" class="fr"></span></div></div></div></div><div class="button-wrap" ng-if="!isXKL"><button class="button button-block button-assertive" on-tap="gotoRecharge()">{{i18mobile.recharge_button_complete}}</button></div><div class="button-wrap" ng-if="!isXKL && tradeNo"><button class="button button-block button-stable" on-tap="gotoOrderDetail()">{{i18mobile.myorder_button_detail}}</button></div><div class="button-wrap" ng-if="isXKL"><button class="button button-block button-assertive btnGradient font16" on-tap="gotoReturnUrl()">{{i18mobile.return_back_url}}</button></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/myOrder.html', '<style>.order-content{z-index:10}.order-content .orderitem{margin:.5rem 0}.tabs{height:2rem}.tabs-top>.tabs,.tabs.tabs-top{background:#22263f;position:relative;z-index:99}.order-button-csbcancel{height:1.3rem;position:relative;color:#8a8d93;background-color:#fff;border:none;text-align:right;font-size:.7rem;padding:0;padding-right:.75rem;line-height:1.3rem!important}.order-button-csbok{width:3.5rem;color:#f66f6a;height:1.3rem;background-color:#fff;border:1px solid #f66f6a;border-radius:2.5rem;line-height:calc(1.3rem - 4px)!important;margin-right:.75rem;margin-left:0}.order-butWarp.orderbut{border-radius:0 0 2px 2px}.order-collect p span:first-child{text-align:left;width:auto;margin-right:0}.orderitem .item{border:0;font-size:.7rem;padding:.75rem .75rem}.order-butWarp.orderbut span{line-height:2.5rem}.order-collect p+p{margin-top:0}.tab-items{display:inline-block;width:49%;text-align:center;color:#34475f;height:2rem}.myorderTab{display:inline-block;height:1.7rem;line-height:2rem;vertical-align:top;color:#fff}.tab-items .active{color:#f66f6a;border-bottom:2px solid #f66f6a}.order-butWarp.orderbut div{position:relative}.img-width{width:1rem}.item.order-title,.orderitem .order-collect{border-top:1px solid rgba(138,141,147,.15)!important}.order-content .orderitem:first-child{margin:0}.order-content{margin-top:2rem}.order-collect p{height:1.1rem;line-height:1.1rem}</style><div id="tabs" class="tabs tabs-top tabs-default"><ul style="width:100%;border-bottom:1px solid rgba(138,141,147,.15)"><li id="tab_1" class="tab-items" on-tap="getOrders(1)"><span class="myorderTab" ng-class="{\'active tab-item-calm\':(currentOrderIndex==1)}" style="font-size:.7rem">{{i18mobile.tab_all_orders}}</span></li><li id="tab_6" class="tab-items" on-tap="getOrders(6)"><span class="myorderTab" ng-class="{\'active tab-item-calm\':(currentOrderIndex==6)}" style="font-size:.7rem">{{i18v1r2.status_6}}<span style="font-size:.7rem">({{status_6_count}})</span></span></li></ul></div><ion-content overflow-scroll="false" class="order-content" on-swipe-up="viewNoMoreData(items, moredata)" on-scroll="ViewScrollTop(items)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getOrders(statusIndex[$index], true)" class="slider-layer"><ion-slide ng-repeat="cStatus in statusIndex"><ion-item ng-if="items.length == 0 && isShowLoadText" ng-bind="order_noData" class="data-null"></ion-item><div ng-if="items.length > 0 && cStatus == currentOrderIndex" ng-repeat="item in items" class="orderitem"><p class="item order-title" on-tap="gotoOrderDetail(item.orderId)"><span class="fl" style="font-size:.8rem;width:75%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="item.orderId"></span> <span class="fr"><span style="color:#f66f6a;font-size:.8rem" ng-if="item.status==6" ng-bind="i18v1r2[\'status_\'+item.status]"></span> <span style="color:#499df3;font-size:.8rem" ng-if="item.status!=5 && item.status!=4 && item.status!=6 " ng-bind="i18v1r2[\'status_\'+item.status]"></span> <span style="color:#3dcca6;font-size:.8rem" ng-if="item.status==5" ng-bind="i18v1r2[\'status_\'+item.status]"></span> <span style="color:#8a8d93;font-size:.8rem" ng-if="item.status==4" ng-bind="i18v1r2[\'status_\'+item.status]"></span> <img style="padding-left:.25rem;height:.6rem" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></p><div class="item order-collect" on-tap="gotoOrderDetail(item.orderId)" bi_name="{{currentOrderIndex==1?\'全部订单\':i18v1r2.status_6}}_{{item.serviceTypeName+\'_\'+i18v1r2[\'orderType_\'+item.orderType]}}"><p><span class="fl" style="margin-right:2.2rem;color:#8a8d93;height:100%;line-height:inherit">{{i18v1r2.table_productClass}}</span> <span class="fl" style="height:100%;line-height:inherit" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="item.serviceTypeName"></span></p><p><span class="fl" style="margin-right:2.2rem;color:#8a8d93;height:100%;line-height:inherit">{{i18v1r2.table_createTime}}</span> <span class="fl" style="height:100%;line-height:inherit" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="item.createTimeView"></span></p><p ng-if="item.status != 6"><span class="fl" style="margin-right:2.2rem;color:#8a8d93;height:100%;line-height:inherit">{{i18v1r2.table_paymentTime}}</span> <span class="fl" style="height:100%;line-height:inherit" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="item.paymentView"></span></p><p ng-if="item.status == 6"><span class="fl" style="margin-right:2.2rem;color:#8a8d93;height:100%;line-height:inherit">{{i18v1r2.couponsView_expiration_date}}</span> <span class="fl" style="height:100%;line-height:inherit" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="item.expirationTimeFormat"></span></p><p><span class="fl" style="margin-right:2.2rem;color:#8a8d93;height:100%;line-height:inherit">{{i18v1r2.table_orderType}}</span> <span class="fl" style="height:100%;line-height:inherit" ng-style="{\'color\':item.status!=4 ? \'#34475F\' : \'#8A8D93\' }" ng-bind="i18v1r2[\'orderType_\'+item.orderType]"></span></p></div><div class="orderbut order-butWarp"><div><span style="font-size:.7rem;position:absolute;top:0;left:.8rem" ng-style="{\'color\':item.status!=4 ? \'#F66F6A\' : \'#8A8D93\' }" ng-bind="item.currencyAfterDiscountView"></span> <button class="order-button-csbcancel" bi_name="{{currentOrderIndex==1?\'全部订单\':i18v1r2.status_6}}_{{i18mobile.myorder_button_cancel}}" on-tap="cancelOrder(item.orderId)" ng-if="item.status == 6 || item.status == 1">{{i18mobile.myorder_button_cancel}}</button> <button csb-right="uc.t1.payorder" class="order-button-csbok" on-tap="payOrder(item.orderId)" bi_name="{{currentOrderIndex==1?\'全部订单\':i18v1r2.status_6}}_{{i18mobile.myorder_button_pay}}" ng-if="item.status == 6">{{i18mobile.myorder_button_pay}}</button> <span ng-if="item.status==3"><span style="font-size:.7rem;color:#8a8d93;margin-right:.5rem" class="fr" ng-bind-html="item.expirationTip"></span> <span style="vertical-align:middle;margin-right:.25rem" class="fr" ng-bind-html="item.orderStatus"></span></span></div></div></div><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)" style="z-index:10000000"></div>');
            $templateCache.put('src/app/business/mobile/views/myOrder1.html', '<div id="tabs" class="tabs tabs-top tabs-default" ng-init="$Get(\'myOrderViewRenderService\').myOrderViewRender(this)"><a id="tab_1" class="tab-item" ng-class="{\'active tab-item-calm\':(currentOrderIndex==1)}" on-tap="onSelectAllOrders();currentOrderIndex=1;">{{i18mobile.tab_all_orders}} </a><a id="tab_6" class="tab-item" ng-class="{\'active tab-item-calm\':(currentOrderIndex==6)}" on-tap="onSelectWaitPay();currentOrderIndex=6;">{{i18v1r2.status_6}}<span style="color:#e41e2b;font-size:.7rem">({{status_6_count}})</span> </a><a id="tab_5" class="tab-item" ng-class="{\'active tab-item-calm\':(currentOrderIndex==5)}" on-tap="onSelectAleadyFinish();currentOrderIndex=5;">{{i18v1r2.status_5}}</a></div><ion-content overflow-scroll="false" class="order-content" on-swipe-up="viewNoMoreData(orderdatas.data, moredata)" on-scroll="ViewScrollTop(orderdatas.data)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshQueryOrderList()"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getOrders(statusIndex[$index], true)" class="slider-layer"><ion-slide><ion-item ng-if="orderdatas.data.length == 0 && isShowLoadText" ng-bind="order_noData" class="data-null"></ion-item><div ng-if="orderdatas.data.length > 0" ng-repeat="item in orderdatas.data track by $index" class="orderitem" ng-init="finishLoading(this)"><a class="item order-title" on-tap="openResourceDetail(item.orderId)"><span class="fl" ng-bind="item.orderId"></span> <span class="fr" style="font-weight:700" ng-bind="i18v1r2[\'status_\'+item.status]"></span></a><div class="item order-collect"><p><span class="fl" ng-bind="i18v1r2.table_orderType"></span> <span class="fl" ng-bind="i18v1r2[\'orderType_\'+item.orderType]"></span></p><p><span class="fl" ng-bind="i18v1r2.table_servicetype"></span> <span ng-bind="item.orderServiceNames"></span></p><p><span class="fl" ng-bind="i18v1r2.table_beName"></span> <span class="fl" ng-bind="item.beName"></span></p><p><span class="fl" ng-bind="i18v1r2.table_createTime"></span> <span class="fl" ng-bind="item.createTimeFormat"></span></p><p><span class="fl" ng-bind="orderCurrencyAfterDiscount_text"></span> <span class="fl" style="color:#e41e2b;font-size:.7rem" ng-bind="G_currencySymbol + item.currencyAfterDiscount"></span></p></div><div class="item orderbut order-butWarp" ng-if="item.status == 6"><div><button class="button button-csbcancel" ng-if="isCancel(item)" on-tap="cancelOrder(item.orderId)">{{i18mobile.myorder_button_cancel}}</button> <button class="button button-csbok" ng-if="item.status == 6" on-tap="payOrder(item.orderId)">{{i18mobile.myorder_button_pay}}</button></div></div></div><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moreData()"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(orderdatas.data)"></div>');
            $templateCache.put('src/app/business/mobile/views/orderDetail_ty.html', '<ion-content class="order-details" ng-init="$Get(\'orderDetailRenderService\').orderDetailRender(this)"><div class="item order-title"><span class="fl" ng-bind="order.orderID"></span> <span style="font-weight:700" class="fr" ng-bind="order.statusText"></span></div><div class="item order-list"><div ng-repeat="lineItem in orderItemDetailDatas.data" class="product-list"><p><span ng-bind="getSpecView(lineItem)" class="fl"></span> <span ng-bind="\'¥\'+lineItem.amount" class="fr red"></span></p><p><span ng-bind="i18v1r2.table_periodTypeNum + \': \' + lineItem.chargeType" class="fl"></span> <span ng-bind="\'x\'+lineItem.purchaseNum" class="fr"></span></p></div></div><div class="item order-collect"><p><span ng-bind="i18mobile.myorder_detail_label_ordertype" class="fl"></span> <span ng-bind="order.orderTypeName" class="fl"></span></p><p><span ng-bind="i18mobile.myorder_detail_label_ordertime" class="fl"></span> <span ng-bind="order.createTime" class="fl"></span></p></div><div class="item order-collect"><p><span class="fl" ng-bind="i18mobile.myorder_detail_label_amount"></span> <span ng-bind="order.amount" class="fl red"></span></p><p><span ng-bind="i18mobile.myorder_detail_label_discount" class="fl"></span> <span ng-bind="&#39;-&#39; + discount" class="fl red"></span></p><p><span ng-bind="i18mobile.myorder_detail_label_amountafterdiscount" class="fl"></span> <span ng-bind="order.currencyAfterDiscountFormat" class="fl red"></span></p></div><div class="button-wrap" ng-if="order.status == 6"><button class="button button-block button-assertive" on-tap="payOrder(order.orderID)">{{i18mobile.myorder_button_pay}}</button></div><div class="button-wrap" ng-if="isCancel(order)"><button class="button button-block button-stable" on-tap="cancelOrder(order.orderID)">{{i18mobile.myorder_button_cancel}}</button></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/orderDetail.html', '<style>.InfoItem{font-size:.7rem;padding:0;height:1.1rem;line-height:1.1rem}.InfoItem .formLabel{font-size:.7rem;width:5rem;color:#8a8d93;float:left}.InfoItem .formLabel span{color:#8a8d93}.InfoItem .formCont{margin:0;font-size:.7rem;color:#34475f;overflow:auto;white-space:normal;text-overflow:clip}#detail_Id,#detail_statusText{display:inline-block}#detail_statusText{float:right;color:#499df3}#detail_Id span{font-size:.8rem;color:#34475f}#detail_statusText span{font-size:.8rem}.order-details{margin-bottom:2.8rem}.button-wrap{position:fixed;bottom:0;width:100%;background-color:#fff;margin-top:0}.orderdetail_btn{width:6.01rem;height:1.7rem;font-size:.7rem;line-height:1.7rem;margin:0;color:#8a8d93;margin-left:0;margin-right:.25rem;border:1px solid #a4a4a4;border-radius:2px;text-align:center}.orderdetailcancel{border:none;width:auto;text-align:right}.orderdetailpay{border-color:#f66f6a;background-color:#f66f6a;background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 100%);color:#fff}.InfoItemdetail{font-size:.7rem;height:auto;line-height:1rem;padding:.75rem 0}.detail_chargeType{color:#8a8d93;padding-bottom:.75rem}.detail_chargeType_pic_down{display:inline-block;width:1rem;height:1rem;float:right;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/down-s.png) no-repeat scroll right center transparent}.detail_chargeType_pic_up{display:inline-block;width:1rem;height:1rem;float:right;background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/up-s.png) no-repeat scroll right center transparent}.order-collect-item{background-color:#fff;margin-top:0;padding-top:0;border-top:1px solid rgba(138,141,147,.15)}.detail_chargeType,.formConttitle{font-size:.7rem}.formConttitle *{font-size:.8rem;color:#34475f}.pay-tip{background:rgba(246,111,106,.1)}.pay-tip1{background:rgba(73,157,243,.05);text-align:center}.box-padd{padding:.5rem .75rem}.order-details .order-collect{margin-top:0}</style><div ng-init="$Get(\'orderDetailRenderService\').orderDetailRender(this)"><ion-content ng-class="{\'order-details\':order.status==1||order.status==6}"><div class="pay-tip"><p class="fontS12" style="color:#f56e69;line-height:.9rem;padding:.5rem .75rem;margin:0" ng-if="order.status==6" ng-bind="payTip"></p></div><div class="pay-tip1"><p class="fontS12" style="color:#499df3;line-height:.9rem;padding:.5rem .75rem;margin:0" ng-if="order.status==3 && !(orderItemDetailFialedDatas.data.length>0)" ng-bind="i18v1r2.order_detail_create"></p></div><div class="order-title"><div class="InfoItem" style="height:2.5rem;line-height:2.5rem;padding:0 .75rem;background-color:#fff;border-bottom:1px solid rgba(138,141,147,.15)"><div class="formCont" id="detail_Id"><span ng-bind="order.orderID"></span></div><div ng-if="order.status!=6 && order.status!=5 && order.status!=4" class="formCont" id="detail_statusText"><span ng-bind="order.statusText"></span></div><div ng-if="order.status==6" class="formCont" id="detail_statusText" style="color:#f66f6a"><span ng-bind="order.statusText"></span></div><div ng-if="order.status==5" class="formCont" id="detail_statusText" style="color:#3dcca6"><span ng-bind="order.statusText"></span></div><div ng-if="order.status==4" class="formCont" id="detail_statusText" style="color:#8a8d93"><span ng-bind="order.statusText"></span></div></div><div class="item detailContent" style="width:100%;margin:0"><div class="InfoItem"><div class="formLabel"><span ng-bind="i18v1r2.table_createTime"></span></div><div class="formCont"><span id="detail_createTime" ng-bind="order.createTime"></span></div></div><div class="InfoItem"><div class="formLabel"><span ng-bind="i18v1r2.table_paymentTime"></span></div><div class="formCont"><span id="detail_payTime" ng-bind="order.paymentTime"></span></div></div><div class="InfoItem"><div class="formLabel"><span ng-bind="i18v1r2.table_orderType"></span></div><div class="formCont"><span id="detail_typeName" ng-bind="order.orderTypeName"></span></div></div><div class="InfoItem" ng-if="discountValue" style="margin-top:.5rem"><div class="formLabel" ng-if="discountStr &&(waitPayDiscountType==605 || waitPayDiscountType==606 || waitPayDiscountType==607 || waitPayDiscountType == 300)"><span ng-bind="discountStr"></span></div><div class="formLabel" ng-if="discountStr &&(waitPayDiscountType!=605 && waitPayDiscountType!=606 && waitPayDiscountType!=607 && waitPayDiscountType != 300)"><span ng-bind="discountStr"></span></div><div class="formCont" style="text-align:right;color:#f77f7a" ng-if="discountValue"><span id="detail_typeName" ng-bind="\'-\'+discountValue"></span></div></div></div></div><div style="border-bottom:1px solid rgba(138,141,147,.15)"><div class="pay-tip" ng-if="orderItemDetailFialedDatas.data.length>0"><p class="fontS12" style="color:#f56e69;min-height:2rem;line-height:2rem;margin:0;text-align:center;font-size:.6rem">{{i18v1r2.orderItemDetailFialed_tip}}</p></div><div class="order-collect order-collect-item" ng-if="orderItemDetailFialedDatas.data.length>0" ng-repeat="row in orderItemDetailFialedDatas.data"><div class="detailContent"><div style="padding:0 .75rem"><div class="InfoItemdetail" on-tap="toggleShow(row)"><div class="formConttitle" style="display:inline-block;font-size:.8rem"><span ng-bind="row.cloudServiceTypeCode"></span></div><span ng-class="{detail_chargeType_pic_down:!row.showDetail,detail_chargeType_pic_up:row.showDetail}"></span> <span class="fontS16 fr" id="currencyOfficial" style="color:#f66f6a" ng-bind="unit+row.amount"></span></div></div><div class="InfoItem" ng-show="row.showDetail" style="height:auto;padding:.75rem;border-top:1px solid rgba(138,141,147,.15)"><div><div ng-bind="i18v1r2.nameAndID" class="formLabel" style="display:inline-block;vertical-align:top"></div><div class="formCont" style="display:inline-block;vertical-align:top;width:calc(100% - 5rem)" ng-bind-html="(row.productInstanceName||\'--\')+\'<br/>\'+row.productInstanceId"></div></div><div><div ng-bind="i18v1r2.table_productSpec" class="formLabel" style="display:inline-block;vertical-align:top"></div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind-html="row.resourceSpecDesc"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.billing_mode}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind="i18v1r2.billAnalysis_cycyle +\' | \'+row.chargeType"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.consumeSubDetail_time}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind-html="row.productTime"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.table_productAmount}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind="row.purchaseNum"></div></div></div></div></div></div><div style="border-bottom:1px solid rgba(138,141,147,.15)"><div style="font-size:.8rem;color:#8a8d93" ng-if="orderItemDetailDatas.data.length>0 && orderItemDetailFialedDatas.data.length>0">{{i18v1r2.orderdetail_Resources_opened}}</div><div style="font-size:.6rem;color:#8a8d93;padding:.75rem .75rem .5rem;line-height:.6rem" ng-if="orderItemDetailDatas.data.length>0 && orderItemDetailFialedDatas.data.length==0">{{i18v1r2.resourceInfo}}</div><div class="order-collect order-collect-item" ng-if="orderItemDetailDatas.data.length>0" ng-repeat="row in orderItemDetailDatas.data"><div class="detailContent"><div style="padding:0 .75rem"><div class="InfoItemdetail" on-tap="toggleShow(row)"><div class="formConttitle" style="display:inline-block;font-size:.8rem"><span ng-bind="row.cloudServiceTypeCode"></span></div><span ng-class="{detail_chargeType_pic_down:!row.showDetail,detail_chargeType_pic_up:row.showDetail}"></span> <span class="fontS16 fr" id="currencyOfficial" style="color:#f66f6a" ng-bind="unit+row.amount"></span></div></div><div class="InfoItem" ng-show="row.showDetail" style="height:auto;padding:.75rem;border-top:1px solid rgba(138,141,147,.15)"><div><div ng-bind="i18v1r2.nameAndID" class="formLabel" style="display:inline-block;vertical-align:top"></div><div class="formCont" style="display:inline-block;vertical-align:top;width:calc(100% - 5rem)" ng-bind-html="(row.productInstanceName||\'--\')+\'<br/>\'+row.productInstanceId"></div></div><div><div ng-bind="i18v1r2.table_productSpec" class="formLabel" style="display:inline-block;vertical-align:top"></div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind-html="row.resourceSpecDesc"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.billing_mode}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind="i18v1r2.billAnalysis_cycyle +\' | \'+row.chargeType"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.consumeSubDetail_time}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind-html="row.productTime"></div></div><div><div class="formLabel" style="display:inline-block;vertical-align:top">{{i18v1r2.table_productAmount}}</div><div class="formCont" style="display:inline-block;vertical-align:top" ng-bind="row.purchaseNum"></div></div></div></div></div></div><div class="InfoItem" style="height:auto;background:#fff" ng-if="order.orderType!==4 && showdTableAmount"><div ng-if="order.status != 6 && order.status != 4" style="overflow:hidden;margin-top:.2rem;padding:.5rem .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="i18v1r2.new_order_detail_amount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="currencyOfficial"></div></div><div ng-repeat="item in discountDetailDatas.data" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div ng-if="(item.discountType!==608 && item.discountType!==700 && item.discountType!==609 && !hideContractLink) && !comefromEnter" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="item.discountTypeName"></div><div ng-if="(item.discountType!==608 && item.discountType!==700 && item.discountType!==609 && !hideContractLink) && comefromEnter" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="item.discountTypeName"></div><div ng-if="item.discountType==608 || item.discountType==700 || item.discountType==609 || hideContractLink" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="item.discountTypeName"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="\'-\'+item.discountAmountFormat"></div></div><div ng-if="order.status==5||order.status==3" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;font-size:.8rem;color:#34475f" ng-bind="i18v1r2.orderpay_need_payamount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;font-size:.8rem;color:#f77f7a" ng-bind="cashamount"></div></div><div style="min-height:1px;background:rgba(138,141,147,.15);margin:1rem 0" ng-if="(order.status==5||order.status==3)&&paymentDetailDatas.data.length"></div><div style="overflow:hidden;margin-top:.2rem;padding:0 .75rem" ng-if="(order.status==5||order.status==3)&&paymentDetailDatas.data.length && !agentPayAmount" ng-repeat="payItem in paymentDetailDatas.data"><div ng-if="payItem.couponType && !comefromEnter" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="payItem.paymentType"></div><div ng-if="payItem.couponType && comefromEnter" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="payItem.paymentType"></div><div ng-if="!payItem.couponType" class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="payItem.paymentType"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="payItem.paymentAmountG"></div></div><div style="overflow:hidden;margin-top:.2rem;padding:0 .75rem" ng-if="(order.status==5||order.status==3)&&agentPayAmount"><div class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="payingAgentName"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="agentPayAmount"></div></div></div><div class="InfoItem box-padd" style="height:auto;background:#fff" ng-if="order.orderType==4 && showdTableAmount"><div ng-show="paidAmountShow" style="overflow:hidden;margin-top:.2rem;padding:.5rem .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="i18v1r2.retreat_paidAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="paidAmount"></div></div><div ng-show="consumedAmountShow" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="i18v1r2.retreat_consumedAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="\'-\'+consumedAmount"></div></div><div ng-show="commissionAmountShow" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;color:#8a8d93" ng-bind="i18v1r2.retreat_commissionAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="\'-\'+commissionAmount"></div></div><div style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;font-size:.8rem;color:#34475f" ng-bind="i18v1r2.retreat_retreatAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;font-size:.8rem;color:#f77f7a" ng-bind="retreatAmount"></div></div><div style="min-height:1px;background:rgba(138,141,147,.15);margin:1rem 0" ng-if="unsubscribeAmountInfo.retreatAmount"></div><div ng-if="unsubscribeAmountInfo.couponAmount && unsubscribeAmountInfo.couponAmount>0" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;font-size:.8rem;color:#8a8d93" ng-bind="i18v1r2.retreat_couponAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="couponAmountRetreat"></div></div><div ng-if="unsubscribeAmountInfo.cashcouponAmount && unsubscribeAmountInfo.cashcouponAmount>0" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;font-size:.8rem;color:#8a8d93" ng-bind="i18v1r2.retreat_cashcouponAmount"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="cashcouponAmountRetreat"></div></div><div ng-if="unsubscribeAmountInfo.amount && unsubscribeAmountInfo.amount>0" style="overflow:hidden;margin-top:.2rem;padding:0 .75rem"><div class="formLabel" style="display:inline-block;vertical-align:top;font-size:.8rem;color:#8a8d93" ng-bind="i18v1r2.retreat_amount2"></div><div class="formCont fr" style="display:inline-block;vertical-align:top;width:55%;text-align:right;color:#8a8d93" ng-bind="amount"></div></div></div></ion-content><div class="button-wrap" ng-if="order.status == 6"><p class="fl" style="margin:0;height:1.7rem;line-height:1.7rem"><span style="color:#34475f;font-size:.8rem" ng-bind="i18v1r2.orderpay_need_payamount+\':\'"></span><span style="padding-left:.25rem;color:#f66f6a;font-size:.8rem" ng-bind="order.currencyAfterDiscountFormat"></span></p><p csb-right="uc.t1.payorder" class="fr orderdetail_btn orderdetailpay" style="border-radius:.85rem" id="orderdetailpay" on-tap="payOrder(order.orderID)">{{i18v1r2.pay}}</p><p class="fr orderdetail_btn orderdetailcancel" id="orderdetailcancel" on-tap="cancelOrder(order.orderID)">{{i18mobile.myorder_button_cancel}}</p></div><div class="button-wrap" ng-if="order.status == 1"><p class="fr orderdetail_btn orderdetailcancel" id="orderdetailcancel" on-tap="cancelOrder(order.orderID)">{{i18mobile.myorder_button_cancel}}</p></div></div>');
            $templateCache.put('src/app/business/mobile/views/orderPay_old.html', '<div></div>');
            $templateCache.put('src/app/business/mobile/views/orderPay.html', '<ion-content><div class="list"><div class="item orderitem"><span style="float:left" ng-bind="i18mobile.myorder_label_orderno"></span> <span style="float:right" ng-bind="orderId"></span></div><div class="item orderitem1"><span style="float:left" ng-bind="i18mobile.myorder_label_orderfee"></span> <span style="float:right;color:#fc4f4b" ng-bind="orderFee"></span></div><div class="item item-divider">{{i18mobile.recharge_payway_title}}</div><a id="paynameid" class="item item-icon-left item-icon-right balancepay bpbalancepay" on-tap="bpbalancePay()"><span class="payname" ng-bind="bpPaymentWay"></span> <span class="desc" ng-bind="i18mobile.myorder_payway_desc_balance"></span><span style="font-size:13px;color:red" ng-bind="mybpBalance"></span><div class="order-btn"></div><div style="position:absolute;color:#fc4f4b"></div></a><a class="item item-icon-left item-icon-right balancepay" on-tap="balancePay()"><span class="payname" ng-bind="i18mobile.myorder_payway_type_balance2"></span> <span class="desc" ng-bind="i18mobile.myorder_payway_desc_balance"></span><span style="font-size:13px;color:red" ng-bind="myBalance"></span><div class="order-btn" style="color:#fc4f4b"></div></a><a class="item item-icon-left item-icon-right alipay" on-tap="aliPay()" ng-show="!supportIPS"><span class="payname" ng-bind="i18mobile.recharge_payway_alipay"></span> <span class="desc" ng-bind="i18mobile.recharge_payway_alipay_desc"></span> </a><a class="item item-icon-left item-icon-right ipspay" on-tap="ipsPay()" ng-show="supportIPS"><span class="payname" ng-bind="i18mobile.recharge_payway_ipspay"></span> <span class="desc" ng-bind="i18mobile.recharge_payway_ipspay_desc"></span><div class="order-btn"></div></a></div><div id="aliPay"><form id="alipaysubmit" name="alipaysubmit" action="https://mapi.alipay.com/gateway.do?_input_charset=utf-8" method="POST"><input type="hidden" name="sign" value="{{ali_sign}}"> <input type="hidden" name="extra_common_param" value="{{ali_extraCommonParam}}"> <input type="hidden" name="subject" value="{{ali_subject}}"> <input type="hidden" name="total_fee" value="{{ali_totalFee}}"> <input type="hidden" name="sign_type" value="{{ali_signType}}"> <input type="hidden" name="service" value="{{ali_service}}"> <input type="hidden" name="notify_url" value="{{ali_notifyUrl}}"> <input type="hidden" name="return_url" value="{{ali_returnUrl}}" ng-if="ali_returnUrl"> <input type="hidden" name="partner" value="{{ali_partner}}"> <input type="hidden" name="seller_email" value="{{ali_sellerEmail}}"> <input type="hidden" name="out_trade_no" value="{{ali_outTradeNo}}"> <input type="hidden" name="payment_type" value="{{ali_paymentType}}"> <input type="hidden" name="qr_pay_mode" value="{{ali_qrPayMode}}"> <input type="hidden" name="defaultbank" value="{{ali_defaultbank}}"> <input type="submit" value="next" style="display:none"></form></div><div id="ipsPay"><form id="ipspaysubmit" name="ipspaysubmit" action="https://finance.huawei.com/cashier/mapi/hpay.htm" method="POST"><input type="hidden" name="sign" value="{{sign}}"> <input type="hidden" name="charset" value="{{charset}}"> <input type="hidden" name="subject" value="{{subject}}"> <input type="hidden" name="trade_amount" value="{{trade_amount}}"> <input type="hidden" name="sign_type" value="{{sign_type}}"> <input type="hidden" name="notify_url" value="{{notify_url}}"> <input type="hidden" name="version" value="{{version}}"> <input type="hidden" name="out_trade_no" value="{{out_trade_no}}"> <input type="hidden" name="merchant_no" value="{{merchant_no}}"> <input type="hidden" name="biz_order_no" value="{{biz_order_no}}"> <input type="hidden" name="trade_description" value="{{trade_description}}"> <input type="hidden" name="currency" value="{{currency}}"> <input type="hidden" name="product_code" value="{{product_code}}"> <input type="hidden" name="order_type" value="{{order_type}}"> <input type="hidden" name="timestamp" value="{{timestamp}}"> <input type="hidden" name="return_url" value="{{return_url}}"> <input type="hidden" name="biz_order_date" value="{{biz_order_date}}"> <input type="hidden" name="pay_tools" value="{{pay_tools}}"> <input type="hidden" name="card_type" value="{{card_type}}"> <input type="hidden" name="bank_code" value="{{bank_code}}"> <input type="hidden" name="channel_code" value="{{channel_code}}"> <input type="hidden" name="instalment_param" value="{{instalment_param}}"> <input type="hidden" name="expiry_time" value="{{expiry_time}}"> <input type="hidden" name="customer_type" value="{{customer_type}}"> <input type="hidden" name="customer_no" value="{{customer_no}}"> <input type="hidden" name="logistics" value="{{logistics}}"> <input type="hidden" name="bill_address" value="{{bill_address}}"> <input type="hidden" name="goods" value="{{goods}}"> <input type="hidden" name="error_return_url" value="{{error_return_url}}"> <input type="submit" value="next" style="display:none"></form></div><div class="item orderitem1 orderitem2" id="settlement"><span style="float:left" ng-bind="i18mobile.myorder_label_orderpay"></span> <span style="float:left;color:red" ng-bind="addamount"></span> <span style="float:right" class="renewal-btn" on-tap="choosePay()">支付</span></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/orderPayCombined.html', '<style>body,html{width:100%;height:100%}.orderitem1 .renewal-btn{color:#fff}.orderitem1 .orderpay-btn-disable{color:rgba(255,255,255,.3)}.ordercombined-content{margin-bottom:2.5rem}.order-pay-item{width:100%;position:relative;overflow:hidden;margin-bottom:.5rem;border-bottom:1px solid #ececec;border-top:1px solid #ececec}.order-checkbox-btn{width:2.7rem;height:5.175rem}.orderpay-chk{width:1.2rem;height:1.2rem;position:absolute;top:36%;left:50%;transform:translate(-50%)}.item-checkbox{padding:0;width:1.2rem;height:1.2rem;border-radius:50%;position:absolute;top:37%;left:51%;transform:translate(-50%);opacity:0}.orderpay-chk-bg{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/10_16.png) 0 0/100% 100% no-repeat}.orderpay-chk-bg-ok{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok_new.png) 0 0/100% 100% no-repeat}.orderpay-chk-disable{background:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/10_06.png) 0 0/100% 100% no-repeat}.card-infors{width:100%;padding:0;padding-left:2.7rem;padding-right:.75rem;position:absolute;top:0;height:auto;z-index:-1}.card-infors .card-infor-title{margin:0;padding:.75rem 0 .5rem 0;color:#34475f;font-size:.8rem}.card-infors .card-infor{margin:0;font-size:.7rem}.card-infors .card-infor:last-child{padding-bottom:.75rem}.orderpay-chk1{display:inline-block;width:1.2rem;height:1.2rem;border-radius:50%;vertical-align:middle}.orderpay-allchk{width:1.2rem;height:1.2rem;position:absolute;left:1.4rem;top:33%;opacity:0}.orderitem1{height:2.5rem;padding:.38rem .75rem .35rem .75rem}.orderpay-btn-disable{color:#fff}</style><div ng-init="$Get(\'myOrderViewRenderService\').myOrderViewRender(this)"><ion-content overflow-scroll="false" class="ordercombined-content" id="order-pay-combined" on-swipe-up="viewNoMoreData(orderdatas.data, moreData())" on-scroll="ViewScrollTop(orderdatas.data)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshQueryOrderLis(orderdatas.data.allchkorderpay)"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getOrders(statusIndex[$index], true)" class="slider-layer"><ion-slide><ion-item ng-if="true" class="data-null">暂不支持</ion-item><div ng-if="false" ng-repeat="row in orderdatas.data track by $index" class="order-pay-item" ng-init="finishLoading(this)"><div class="item order-checkbox-btn fl"><span class="orderpay-chk" ng-class="{\'orderpay-chk-disable\':row.checkDisabled,\'orderpay-chk-bg\':(!row.chk&&!row.checkDisabled),\'orderpay-chk-bg-ok\':(row.chk&&!row.checkDisabled)}" id="order_td_{{$index}}_0" ng-show="orderType==6" class="formatContrl"></span><ion-checkbox ng-click="mobilecheckboxFn(row, row.chk)" ng-model="row.chk" checked-id="check.checkedList" ng-disabled="row.checkDisabled" ng-checked="row.chk"></ion-checkbox></div><div class="item card-infors fr"><p class="card-infor-title order-title"><span class="fl" style="width:85%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis" ng-bind="row.orderServiceNames"></span> <span class="fr" style="font-size:.7rem;color:#499df3" ng-bind="i18v1r2[\'status_\'+row.status]"></span></p><p class="card-infor"><span style="color:#ff4c4c;font-size:.7rem;font-size:.75rem;text-align:left">{{unit}} {{row.currencyAfterDiscount|number:2}}</span> | <span class="" ng-bind="i18v1r2[\'orderType_\'+row.orderType]"></span></p><p class="card-infor"><span class="fl">下单时间</span> <span class="fl" ng-bind="row.createTimeFormat"></span></p></div></div><ion-infinite-scroll ng-if="false" on-infinite="loadMore()" immediate-check="false" distance="5%" ng-if="moreData()"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="item orderitem1 orderitem2" id="settlement"><span class="orderpay-chk1" ng-class="{\'orderpay-chk-bg\':!orderdatas.data.allchkorderpay,\'orderpay-chk-bg-ok\':orderdatas.data.allchkorderpay}"></span><ion-checkbox class="orderpay-allchk" ng-click="mobileallcheckboxFn(orderdatas.data, orderdatas.data.allchkorderpay)" ng-model="orderdatas.data.allchkorderpay" ng-checked="orderdatas.data.allchkorderpay" ng-disabled="true"></ion-checkbox><span style="display:inline-block;line-height:1.7rem;font-size:.7rem;margin-left:.51rem">全选</span> <span class="renewal-btn" on-tap="payorder()" ng-class="{\'orderpay-btn-disable\':combinedPayModel.disabled}">合并支付</span> <span style="display:inline-block;line-height:1.7rem;font-size:.7rem;color:#333;padding-left:1rem">总金额：</span> <span style="display:inline-block;line-height:1.7rem;color:#e41f2b;font-size:.7rem" ng-bind="unit+combinedPayOrderAmount"></span></div></div>');
            $templateCache.put('src/app/business/mobile/views/owe.html', '<ion-list class="disable-user-behavior"><div class="list circle-chart"><div class="item ng-binding"><div><span ng-bind="i18mobile.owe_label_owesum"></span><br><span ng-bind="totalDebt"></span></div></div></div></ion-list><div class="item item-divider ng-binding">{{i18mobile.owe_label_owenum}}</div><ion-content class="csbcontent scroll-content ionic-scroll overflow-scroll tardy-cost"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-item ng-repeat="item in items" class="item order-list"><div><p><span ng-bind="item.productName" class="ng-binding fl"></span> <span ng-bind="item.debt" class="ng-binding fr red"></span></p><p><span ng-bind="i18mobile.owe_usage" class="ng-binding fl"></span><span class="ng-binding fl" ng-bind="item.usage"></span> <span ng-bind="(item.createTime|csbFormatDate:\'csbTime\')" class="ng-binding fr"></span></p></div></ion-item><div class="button-wrap"><button class="button button-full button-assertive ng-binding disable-user-behavior" on-tap="gotoRecharge()">{{i18mobile.owe_button_recharge}}</button></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/packageConfirm.html', '<style>.item-keep-rigth{float:right}.detail_pic_down{display:inline-block;width:1rem;height:1rem;background-image:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/down-s.png);background-position:50% 50%;background-size:80% 50%;background-repeat:no-repeat}.detail_pic_up{display:inline-block;width:1rem;height:1rem;background-image:url(//res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/up-s.png);background-position:50% 50%;background-size:80% 50%;background-repeat:no-repeat}.common-font1{font-size:.8rem}.common-font2{color:#8a8d93;font-size:.7rem}.li-div-1{width:25%;color:#8a8d93;font-size:.7rem;display:inline-block;vertical-align:top}.li-dev-2{width:75%;font-size:.7rem;display:inline-block;white-space:normal}</style><div class="item item-divider item-divider-white item-gray-style text-align-left head-padding-height" meta-data-adjust-app="hide" ng-if="!pcloudApp"><span></span> <span></span></div><ul class="list"><div ng-repeat="data in confirmTable.srcData.data track by $index"><div ng-if="data.solutionType == 1"><li class="item"><div class="common-font1"><span style="display:inline-block" ng-bind="data.productName"></span> <span class="item-keep-rigth" ng-class="{\'detail_pic_down\':!data.showDetail,\'detail_pic_up\':data.showDetail}" on-tap="toggleDetail(data)"></span></div><div class="common-font2" ng-if="data.productNum !== \'--\'">{{data.payment}} | {{data.validityPeriod}}| {{data.productNum}}台</div></li><li class="item" ng-show="data.showDetail"><div class="li-div-1"><span ng-bind="i18reserve.lbl_common_term_detail_col2"></span></div><div class="li-dev-2"><span style="display:block" ng-repeat="spec in data.specification track by $index"><span style="display:block" ng-repeat="attr in spec">{{attr.label}}: {{attr.value}}</span></span></div></li><li class="item"><div class="common-font2"><span style="display:inline-block" ng-bind="i18v1r2.demandList_noPay_success_title2"></span> <span class="item-keep-rigth" style="color:red" ng-bind="data.singleFee"></span></div></li></div><div ng-if="data.solutionType == 2"><li class="item"><div class="common-font1"><span style="display:inline-block;white-space:normal;width:65%" ng-bind="data.productName"></span> <span class="item-keep-rigth"><span ng-class="{\'detail_pic_down\':!data.showDetail,\'detail_pic_up\':data.showDetail}" on-tap="toggleDetail(data)"></span></span></div></li><li class="item" ng-show="data.showDetail"><div><div class="li-div-1"><span ng-bind="i18reserve.lbl_common_term_detail_col2"></span></div><div class="li-dev-2"><span style="display:block" ng-repeat="spec in data.specification track by $index"><span style="display:block" ng-repeat="attr in spec">{{attr.label}}: {{attr.value}}</span></span></div></div><div><div class="li-div-1" style="vertical-align:middle"><span ng-bind="i18reserve.lbl_common_term_detail_col3"></span></div><div class="li-dev-2"><span style="display:block">{{data.payment}} | {{data.validityPeriod}}</span></div></div><div><div class="li-div-1" style="vertical-align:middle"><span ng-bind="i18reserve.lbl_common_term_detail_col5"></span></div><div class="li-dev-2"><span style="display:block">{{data.productNum}}</span></div></div></li></div></div></ul>');
            $templateCache.put('src/app/business/mobile/views/packageLayout.html', '<style>.popup-body button{line-height:1.2em}.checkbox{padding:0;padding-left:15px}.mButton{max-height:2rem;border-color:#eee;border-width:1px;background-color:#fff;font-size:14px!important;min-height:34px}.mButton.button-positive.button-outline{border-color:#6882da;background-color:rgba(104,130,218,.1);color:#6882da}.ionicModal-button-block{width:100%;margin:5px}.imageSelectmodalBarHead{display:inline-block}.imageSelectmodalBarHeadL{float:left}.imageSelectmodalBarHeadC h1{font-size:.8rem;color:#fff;vertical-align:middle}.imageSelectmodalBarHeadR{float:right;vertical-align:middle}.imageSelectmodalBarHeadR span{font-size:.6rem;vertical-align:middle}.popup-head{background-color:#18235b;border-color:#18235b}.popup-head .h3{color:#fff}</style><div ng-include="steps.step1Url" ng-show="steps.currentStep == 1"></div><div ng-include="steps.step2Url" ng-show="steps.currentStep == 2"></div><div ng-include="steps.step3Url" ng-show="steps.currentStep == 3"></div><script id="speSelectModal.html" type="text/ng-template"><div class="popup-container popup-showing active" style="top: unset;">\n        <div class="popup" style="width:100%;margin:auto;max-height: 480px;">\n            <div class="popup-head">\n                <span style="float: left;color:#888888;font-size: 0.6rem" on-tap="$floatModal.hide()">\n                    {{i18reserve.common_term_cancel_button}}\n                </span>\n                <span style="color: #222222;font-size: 0.8rem">{{modalTitle}}</span>\n                <span style="float: right;color: #888888;font-size: 0.6rem" on-tap="$floatModal.hide()">\n                    {{i18reserve.common_term_ok_button}}\n                </span>\n            </div>\n            <div class="popup-body" style="padding:16px 0px;">\n                <div style="width:90%;margin: auto;">\n                    \x3c!--区域--\x3e\n                    <div ng-if="ionicModalDatasType == \'region\'">\n                        <button class="button ionicModal-button mButton"  ng-class="data.mobileClass" ng-repeat="data in ionicModalDatas" on-tap="dataCenterModel.change(data)">\n                            {{data.text}}\n                        </button>\n                    </div>\n                    \x3c!--可用区域--\x3e\n                    <div ng-if="ionicModalDatasType == \'az\'">\n                        <button class="button ionicModal-button mButton" ng-disabled="data.disable" ng-class="data.mobileClass"  ng-repeat="data in fieldProperties.avaliableZone.options" on-tap="propertieGroupsModel.mAZChange(fieldProperties.avaliableZone,data)">\n                            {{data.text}}\n                        </button>\n                    </div>\n                    \x3c!--登录方式--\x3e\n                    <div ng-if="ionicModalDatasType == \'logMethod\'">\n                        <button style="width:100%;margin: auto;" class="button ionicModal-button mButton" ng-class="data.mobileClass"  ng-repeat="data in ionicModalDatas.options" on-tap="propertieGroupsModel.logMethodChange(fieldProperties,ionicModalDatas,data)">\n                            {{data.text}}\n                        </button>\n                    </div>\n                    \x3c!--购买时长--\x3e\n                    <div ng-if="ionicModalDatasType == \'duration\'">\n                        <button class="button ionicModal-button mButton" ng-class="data.mobileClass" ng-repeat="data in ionicModalDatas" on-tap="periodSlider.changeStop(data)">\n                            {{data.text}}<img ng-if="data.isSaleShow" style="height: 0.55rem;width:0.9rem;padding-left:0.2rem;" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/resources/default/images/benefit_zh.png">\n                        </button>\n                    </div>\n                    \x3c!--规格--\x3e\n                    <div ng-if="ionicModalDatasType == \'spec\'">\n                        <div ng-repeat="propertie in ionicModalDatas.properties">\n\n                            <div ng-if="propertie.displayType">\n                                <div class="popup-body-content-lable">\n                                    {{propertie.description?propertie.description:"容量"}}\n                                </div>\n\n                                \x3c!-- 规格属性 --\x3e\n                                <div ng-if="propertie.options" >\n                                    <div class="popup-body-content-button"  ng-repeat="option in propertie.options">\n                                        <button class="button ionicModal-button-Bury-Tag-Class" ng-class="option.mobileClass" style="width:90%" on-tap="drawingModel.chooseEventModel.change(\'\', ionicModalDatas, propertie, option.id)">\n                                            {{option.text}}\n                                        </button>\n                                    </div>\n                                </div>\n                                \x3c!-- 线性属性 --\x3e\n                                <div ng-if="!propertie.options">\n                                    <div class="popup-body-content-spinner">\n                                        <button  class="button ion-minus" style="float:left; min-width: 2rem;" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(null,ionicModalDatas,propertie,\'less\')"></button>\n                                        <input type="number" class="item-pinner-input" ng-model="propertie.limit.default" ng-blur="drawingModel.chooseEventModel.mobileSpinnerChange(null,ionicModalDatas,propertie,\'input\')">\n                                        <button  class="button ion-plus" style="float:left; min-width: 2rem;" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(null,ionicModalDatas,propertie,\'plus\')"></button>\n                                        <span style="float: left;line-height: 1rem;">{{propertie.unit}}</span>\n                                        <div style="clear: both;"></div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div ng-if="ionicModalDatasType == \'mselect\'">\n                        <button class="button ionicModal-button-block mButton"  ng-class="data.mobileClass" ng-repeat="data in fieldProperties[ionicModalDatas.id].options" on-tap="propertieGroupsModel.mSelectEvent(ionicModalDatas,data)">\n                            {{data.name||data.label}}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div><\/script><script id="softwareSelectmodal.html" type="text/ng-template"><ion-modal-view style="left: 0;top:0;width: 100%;height: 100%;">\n        <ion-header-bar class="bar bar-dark bar-dark-hw">\n            <h1 class="title" style="color: white;text-align:center">\n                <span style="width:60%;display: inline-block;font-size: 0.8rem">{{modalTitle}}</span>\n                <span style="width:20%;display: inline-block;font-size: 0.6rem" on-tap="modal.hide()">{{i18reserve.common_term_ok_button}}</span>\n            </h1>\n        </ion-header-bar>\n        <ion-content>\n            <div ng-repeat="product in ionicModalDatas.products">\n                <ul class="list">\n                    <li class="item" style="padding: 0.4rem;" on-tap="toggleDetail(product)">\n                        <label class="checkbox">\n                            <input class = "ionicModal-button-Bury-Tag-Class" type="checkbox" ng-checked="product.style[\'border-color\'] == \'#3399ff\'" on-tap="drawingModel.chooseEventModel.onClick(ionicModalDatas,product)">\n                            <span style="display: inline-block;font-size: 0.6rem;padding-left:0.8rem;">{{product.name}}</span>\n                        </label>\n                    </li>\n                    <li ng-show="product.showDetail">\n                        <div class="popup-body-content-lable">请选择版本号</div>\n                        <div style="width:95%;margin: auto;">\n                            <div ng-repeat="refContain in product.refContains">\n                                <div ng-repeat="attribute in refContain.attributes">\n                                    <div ng-repeat="propertie in attribute.properties">\n                                        <button class="button ionicModal-button mButton"  ng-class="option.mobileClass" ng-repeat="option in propertie.options" on-tap="drawingModel.chooseEventModel.change(product,attribute,propertie,option.id)">\n                                            {{option.text}}\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </ion-content>\n    </ion-modal-view><\/script><script id="imageSelectmodal.html" type="text/ng-template"><ion-modal-view style="left: 0;top:0;width: 100%;height: 100%;">\n        <ion-header-bar class="bar bar-dark bar-dark-hw">\n            <h1 class="title" style="color: white;text-align:center">\n                <div class = "imageSelectmodalBarHead imageSelectmodalBarHeadL">\n                    <button class="button icon ion-ios-arrow-left button-clear" ng-click="modal.hide()"></button>\n                </div>\n                <div class = "imageSelectmodalBarHead imageSelectmodalBarHeadC">\n                    <h1 ng-bind="modalTitle"></h1>\n                </div>\n                <div class = "imageSelectmodalBarHead imageSelectmodalBarHeadR">\n                    <span on-tap="modal.hide()" ng-bind="i18reserve.common_term_ok_button"> </span>\n                </div>\n                \x3c!--<span style="float:left;display: inline-block;font-size: 0.6rem" on-tap="modal.hide()">{{i18reserve.common_term_cancel_button}}</span>--\x3e\n                \x3c!--<span style="width:60%;display: inline-block;font-size: 0.8rem">{{modalTitle}}</span>--\x3e\n                \x3c!--<span style="float:right;display: inline-block;font-size: 0.6rem" on-tap="modal.hide()">{{i18reserve.common_term_ok_button}}</span>--\x3e\n            </h1>\n        </ion-header-bar>\n        <ion-content>\n                <ul class="list"ng-repeat="product in ionicModalDatas.products">\n                    <li ng-if = "ionicModalDatas.products.length > 1" class="item" on-tap="toggleDetail(product)"> {{mImageSelect}}\n                        <i class="icon ion-checkmark-circled" ng-class="{true : \'dark\',false : \'positive\'}[product.disable]"></i> {{product.name}}\n                    </li>\n                    <li >\n                        \x3c!--<div ng-repeat="sub in field.subs" class="item item-input item-select" data-tap-disabled="true" ng-init="subIndex = $index;">--\x3e\n\n                            \x3c!--<div class="input-label" ng-if="subIndex==0">--\x3e\n                                \x3c!--操作系统--\x3e\n                            \x3c!--</div>--\x3e\n                            \x3c!--<div class="input-label" ng-if="subIndex==1">--\x3e\n                                \x3c!--系统版本--\x3e\n                            \x3c!--</div>--\x3e\n                            \x3c!--<select ng-model="mImageSelect" ng-required="true" selected-id="fieldProperties[sub.id].selectId" ng-change="propertieGroupsModel.imgSelectEvent(field,sub,mImageSelect)" ng-options="option.label for option in fieldProperties[sub.id].options track by option.id">--\x3e\n                                \x3c!--<option value="">&#45;&#45;请选择&#45;&#45;</option>--\x3e\n                            \x3c!--</select>--\x3e\n                        \x3c!--</div>--\x3e\n\n                        <div ng-if = "field.subs[0]" class="item item-input item-select" data-tap-disabled="true" >\n                            <div class="input-label">\n                                操作系统\n                            </div>\n                            <select ng-model="mImageSelectA" ng-required="true" selected-id="field.subs[0].selectId" ng-change="propertieGroupsModel.imgSelectEvent(field,field.subs[0],mImageSelectA)" ng-options="option.label for option in fieldProperties[field.subs[0].id].options track by option.id" ng-init="mImageSelectA = fieldProperties[field.subs[0].id].options[0]">\n                                <option value="">--请选择--</option>\n                            </select>\n                        </div>\n                        <div ng-if = "field.subs[1]"  class="item item-input item-select" data-tap-disabled="true" >\n                            <div class="input-label">\n                                系统版本\n                            </div>\n                            <select ng-model="mImageSelectB" ng-required="true" selected-id="fieldProperties[field.subs[1].id].selectId" ng-change="propertieGroupsModel.imgSelectEvent(field,field.subs[1],mImageSelectB)" ng-options="option.label for option in fieldProperties[field.subs[1].id].options track by option.id" ng-init="mImageSelectB = fieldProperties[field.subs[1].id].options[0]">\n                                <option value="">--请选择--</option>\n                            </select>\n                        </div>\n                    </li>\n                </ul>\n        </ion-content>\n    </ion-modal-view><\/script>');
            $templateCache.put('src/app/business/mobile/views/paySuccess.html', '<style>.pay-success{margin-top:0;margin-bottom:3rem}.pay-success .successtitlePic{padding-bottom:0;padding-top:2rem;font-size:2rem}.successtitleCont{font-size:1.2rem!important;color:#3dcca6}.pay-success .successtitleButtom{padding-bottom:1.8em;padding-top:.5rem;border-color:transparent}.btnGradient{background-image:linear-gradient(140deg,#ff4c4c 0,#f66f6a 100%);border-radius:.1rem}.button{min-height:2rem}.pay-success-title{background-color:#252b3a;text-align:center;height:2rem}.pay-success-title span{font-weight:400;font-style:normal;font-size:1.125rem;color:#fff;line-height:2rem}.pay-success-description{background-color:#fff;text-align:center}.pay-success-description span{font-weight:400;font-style:normal;font-size:.875rem}.pay-success-description a{font-weight:400;font-style:normal;font-size:.875rem}.pay-success-description .amount{font-weight:400;font-style:normal;font-size:.875rem;color:#ff4c4c}.return-back-url{text-align:center;margin-top:.625rem}.return-back-url span{color:#333;font-weight:400;font-style:normal;font-size:1rem}.trade_not_finish_tip{margin-top:1rem}</style><div class="pay-success-title"><span>{{getI18FromKey(\'pay_success\')}}</span></div><div class="pay-success" ng-if="!tradeNotFinish"><div class="item successtitle successtitlePic"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok.png"></div><div class="item successtitle successtitleButtom"><span class="successtitleCont" ng-bind="getI18FromKey(\'order_pay_success\')"></span></div><div class="pay-success-description"><span>{{getI18FromKey(\'bill_amount\')}}<span class="amount" ng-bind="amount"></span>{{getI18FromKey(\'paySuccess_symbol_comma\')}}<a ng-if="!multiOrderFlag" on-tap="gotoOrderDetail()">{{getI18FromKey(\'paySuccess_view_order_detail\')}}</a><a ng-if="multiOrderFlag" on-tap="gotoOrderList()">{{getI18FromKey(\'paySuccess_view_order_list\')}}</a></span></div></div><div class="pay-success" ng-if="tradeNotFinish"><div class="item successtitle successtitlePic"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_ok_new.png"></div><div class="pay-success-description trade_not_finish_tip"><span>{{i18mobile.myorder_pay_trade_not_finished_tips}}</span></div></div><div ng-cloak class="button-wrap" ng-if="!multiOrderFlag && cloudServiceConsoleURL"><button id="view_product_button_id" class="button button-block button-assertive btnGradient" on-tap="viewBuyProduct()">{{getI18FromKey(\'paySuccess_view_product\')}}</button></div><div ng-cloak class="button-wrap" ng-if="!returnURL && (multiOrderFlag||(cloudServiceConsoleURLCheckedFlag&&!cloudServiceConsoleURL))"><button id="goto_console_button_id" class="button button-block button-assertive btnGradient" on-tap="gotoConsole()">{{getI18FromKey(\'paySuccess_visit_console\')}}</button></div><div ng-cloak class="return-back-url" ng-if="returnURL"><span id="return_back_button_id" ng-bind="getI18FromKey(\'paySuccess_return_back\')" on-tap="gotoReturnUrl()"></span></div>');
            $templateCache.put('src/app/business/mobile/views/recharge.html', '<style>.ionic-scroll{height:100%!important}.recharge-username-content{height:2.5rem;color:#34475f;margin-bottom:.5rem}.recharge-title-accountName{width:50%;text-align:left;float:left;font-size:.8rem;color:#34475f}.recharge-title-balance{width:50%;text-align:right;float:left;font-size:.8rem;color:#34475f}.ipspayBtn{margin:2.25rem .75rem .75rem .75rem;height:2.2rem;line-height:2.2rem;background-color:#e41f2b;color:#fff;text-align:center;font-size:.8rem;border-radius:2.5rem;background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 100%)}.banktransferBtn{margin:0 .75rem 0 .75rem;height:2.2rem;line-height:2.2rem;background:#fff;color:#34475f;text-align:center;font-size:.8rem;border:1px solid rgba(138,141,147,.5);border-radius:2.5rem}#money{color:#34475f;font-size:.8rem;margin-left:1.2em}.btn-disabled{background-color:#ccc}.input-opcation{color:rgba(138,141,147,.6)!important}.input-label{color:rgba(138,141,147,.6)!important}.item-clearborder{padding:.75rem .75rem}.moneyIcon{position:absolute;left:.75rem;margin-top:.05rem;font-size:.8rem!important;color:#34475f;display:inline-block}.friendlytips-content{color:#8a8d93}input::-webkit-input-placeholder{color:rgba(138,141,147,.6)}input::-moz-placeholder{color:rgba(138,141,147,.6)}input:-moz-placeholder{color:rgba(138,141,147,.6)}input:-ms-input-placeholder{color:rgba(138,141,147,.6)}</style><div class="noticeMask" id="noticeMask"><div class="imgtips"></div></div><ion-content><div class="list"><div class="item recharge-username-content" ng-if="bindType!=2"><p class="recharge-username"></p><div class="recharge-title-accountName"><span>华为云</span>账户</div><div ng-if="!debtAmount" class="recharge-title-balance">{{accountMoney}}</div><div ng-if="debtAmount" class="recharge-title-balance">{{debtAmount}}</div><p></p></div><div class="item recharge-username-content" ng-if="bindType==2"><p class="recharge-username"></p><div class="recharge-title-accountName"><span ng-bind="bpBeName"></span>账户</div><div class="recharge-title-balance">{{accountMoney}}</div><p></p></div><div class="item item-clearborder"><p class="input-label input-opcation">充值金额</p><p style="margin-top:1.2rem;margin-bottom:0"></p><div class="moneyIcon">￥</div><input type="number" ng-maxlength="16" placeholder="{{i18mobile.recharge_amount_placehold}}" id="money" ng-model="params.money"> <span ng-click="cleanCurrentData(\'money\')" class="del-btn" ng-if="params.money" style="top:3.2rem;right:.75rem"></span><p></p></div><div class="ipspayBtn" ng-class="{\'btn-disabled\':bindType==2}" id="ipspayBtn" on-tap="ipspayRecharge()" ng-bind="i18mobile.recharge_payway_pay"></div><div class="banktransferBtn" id="banktransferBtn" on-tap="bankTransfer()" ng-bind="i18mobile.recharge_payway_banktransfer"></div></div><div class="item friendlytips-content" style="position:absolute;bottom:0"><span ng-bind="i18mobile.coupons_tips_active" style="font-weight:700"></span> <span ng-bind="i18mobile.recharge_tips_item1"></span> <span ng-bind-html="i18mobile.recharge_tips_item2"></span> <span>3. 如果您使用通用充值账号转账汇款，请<span style="display:inline;color:#499df3" on-tap="remit()">提交汇款工单</span>。</span></div><div id="aliPay"><form id="alipaysubmit" name="alipaysubmit" action="https://mapi.alipay.com/gateway.do?_input_charset=utf-8" method="POST"><input type="hidden" name="sign" value="{{ali_sign}}"> <input type="hidden" name="extra_common_param" value="{{ali_extraCommonParam}}"> <input type="hidden" name="subject" value="{{ali_subject}}"> <input type="hidden" name="total_fee" value="{{ali_totalFee}}"> <input type="hidden" name="sign_type" value="{{ali_signType}}"> <input type="hidden" name="service" value="{{ali_service}}"> <input type="hidden" name="notify_url" value="{{ali_notifyUrl}}"> <input type="hidden" name="return_url" value="{{ali_returnUrl}}" ng-if="ali_returnUrl"> <input type="hidden" name="partner" value="{{ali_partner}}"> <input type="hidden" name="seller_email" value="{{ali_sellerEmail}}"> <input type="hidden" name="out_trade_no" value="{{ali_outTradeNo}}"> <input type="hidden" name="payment_type" value="{{ali_paymentType}}"> <input type="hidden" name="qr_pay_mode" value="{{ali_qrPayMode}}"> <input type="hidden" name="defaultbank" value="{{ali_defaultbank}}"> <input type="submit" value="next" style="display:none"></form></div><div id="ipsPay"><form id="ipspaysubmit" name="ipspaysubmit" action="https://finance.huawei.com/cashier/mapi/hpay.htm" method="POST"><input type="hidden" name="sign" value="{{sign}}"> <input type="hidden" name="charset" value="{{charset}}"> <input type="hidden" name="subject" value="{{subject}}"> <input type="hidden" name="trade_amount" value="{{trade_amount}}"> <input type="hidden" name="sign_type" value="{{sign_type}}"> <input type="hidden" name="notify_url" value="{{notify_url}}"> <input type="hidden" name="version" value="{{version}}"> <input type="hidden" name="out_trade_no" value="{{out_trade_no}}"> <input type="hidden" name="merchant_no" value="{{merchant_no}}"> <input type="hidden" name="biz_order_no" value="{{biz_order_no}}"> <input type="hidden" name="trade_description" value="{{trade_description}}"> <input type="hidden" name="currency" value="{{currency}}"> <input type="hidden" name="product_code" value="{{product_code}}"> <input type="hidden" name="order_type" value="{{order_type}}"> <input type="hidden" name="timestamp" value="{{timestamp}}"> <input type="hidden" name="return_url" value="{{return_url}}"> <input type="hidden" name="biz_order_date" value="{{biz_order_date}}"> <input type="hidden" name="pay_tools" value="{{pay_tools}}"> <input type="hidden" name="card_type" value="{{card_type}}"> <input type="hidden" name="bank_code" value="{{bank_code}}"> <input type="hidden" name="channel_code" value="{{channel_code}}"> <input type="hidden" name="instalment_param" value="{{instalment_param}}"> <input type="hidden" name="expiry_time" value="{{expiry_time}}"> <input type="hidden" name="customer_type" value="{{customer_type}}"> <input type="hidden" name="customer_no" value="{{customer_no}}"> <input type="hidden" name="logistics" value="{{logistics}}"> <input type="hidden" name="bill_address" value="{{bill_address}}"> <input type="hidden" name="goods" value="{{goods}}"> <input type="hidden" name="error_return_url" value="{{error_return_url}}"> <input type="hidden" name="extraCommonParam" value="{{extraCommonParam}}"> <input type="submit" value="next" style="display:none"></form></div><div class="mengban" ng-if="showBpAccount" style="top:0"><div class="agreePrompt" style="padding-top:.5rem"><p style="font-size:1rem;color:#333">抱歉</p><p>暂不支持当前类型账户充值，请您线下联系您的合作伙伴调账以完成充值。</p><p class="choose" style="margin-left:0;margin-right:0;width:100%"><span ng-click="sureBotton()" style="width:100%;color:#e94a4a;background-color:#fff;border-color:#fff;font-size:.75rem;border-top:1px solid #ececec;margin-left:0;margin-right:0;margin-bottom:.2rem">确定</span></p></div></div></ion-content><script type="text/javascript">$(function(){isCallFromWX&&$(".noticeMask").show()})<\/script>');
            $templateCache.put('src/app/business/mobile/views/rechargeSuccess.html', '<style>.list{margin-top:.5rem;margin-bottom:2.5rem!important}#result{padding-top:0;padding-bottom:0;min-height:3em}.title-with-pic{background-color:#fff}.button-wrap{padding:.33em .66em}.title-with-pic .pic{width:2.2rem;height:auto}.button{background-color:#ccc;color:#fff}.button-stable-new{background-color:#fff;border:1px solid #ccc;color:#aaa}.redBack{background-color:#e41f2b}.pay-detail-spa{display:inline-block;width:5rem}.pay-detail-span{color:#34475f}.pay-detail-amount{color:#e41f2b}.button-radius{border-radius:2rem}.html-font-family-zh-cn button{font-size:.8rem}.item.pay-detail>div>span:nth-child(1){color:#8a8d93}.item.pay-detail>div>span:nth-child(2){opacity:.89;font-size:.7rem;color:#34475f;display:inline-block}.removePadding{padding-top:1.1rem;padding-bottom:0}.title-with-pic .word{margin-left:.93em;font-size:.8rem;color:#34475f}.item+.item,.orderitem .item{border:none}.button-wrap .button{min-height:2.1rem;line-height:2.1rem}</style><ion-content style="background-color:#fff"><div><div class="item main-content-container title-with-pic removePadding"><img class="pic" ng-src="{{title_img_waiting}}" ng-if="countDown != 0"> <img class="pic" ng-src="{{title_img}}" ng-if="countDown === 0 && showResult"></div><div class="item main-content-container title-with-pic" id="result"><span class="word" ng-if="countDown != 0">请等待 {{countDown}}s</span><span class="word" ng-if="countDown === 0 && showResult" ng-bind="title_content"></span></div><div class="list"><div class="item pay-detail"><div><span class="pay-detail-spa" ng-bind="i18mobile.recharge_label_fee"></span> <span class="pay-detail-amount" ng-bind="amount"></span></div><div><span class="pay-detail-spa" ng-bind="i18mobile.recharge_label_type"></span> <span class="pay-detail-span" ng-bind="type"></span></div><div><span class="pay-detail-spa" ng-bind="i18mobile.recharge_label_no"></span> <span class="pay-detail-span" ng-bind="tradeNo"></span></div></div></div></div><div class="button-wrap"><button style="background-image:linear-gradient(140deg,#f77f79 0,#f66f6a 63%)" class="button button-block button-radius" ng-class="{\'redBack\':countDown === 0}" on-tap="goHome()">{{but.Complete}}</button></div><div class="button-wrap"><button style="color:#34475f;border-radius:rgba(138,141,147,.5)" class="button button-block button-radius button-stable-new" on-tap="gotoRecharge()">{{but.Continue}}</button></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/redirect.html', '<div class="noticeMaskH5" id="noticeMaskH5"><div class="imgtips"></div></div><div><p align="center" id="prompt"></p></div><div><p align="center" id="url"></p></div>');
            $templateCache.put('src/app/business/mobile/views/registSuccess.html', '<style>.mobilebody{background:#fff}p{font-size:1rem;line-height:1.5rem;color:#34475f;text-align:center;margin-top:.5rem;padding:0 20px}span{font-size:.85rem}.btn-goto{background-color:#fff;height:2rem;text-align:center;line-height:1.8rem;width:90%;margin:1rem auto;border-radius:2px;border:1px solid #ccc}.btn-red{background-color:#ff4c4c;color:#fff;border:none}.associatedTip{position:relative;width:90%;margin:2rem auto 1rem auto;padding:1rem;border:1px solid #ccc;color:#666}.associatedTip:after,.associatedTip:before{position:absolute;content:\'\';width:13px;height:13px;border:1px solid #a4a5a8}.associatedTip:before{left:5px;top:5px;border-width:1px 0 0 1px}.associatedTip:after{right:5px;bottom:5px;border-width:0 1px 1px 0}.tipText{font-size:.7rem;line-height:.7rem}a{color:#387ef5!important;font-size:.85rem}.transferAmount_title{padding:20px;color:#252b3a;text-align:center}.transferAmount_title_text{font-size:.8rem;line-height:1.2rem}.transferAmount_content{padding:0 20px;text-align:left}.transferAmount_content_text{font-size:.7rem;line-height:1rem}</style><div ng-show="init"><div style="height:2rem;background:#252b3a"><span class="head-logo-img" on-tap="gotoindex()"></span></div><div ng-show="isSuccess" style="overflow-y:auto" ng-style="{\'max-height\':isSafari?\'30rem\':\'32rem\'}"><div style="text-align:center;margin:1rem 0"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/10_11.png"></div><div><p ng-bind="i18mobile.regist_success_mobile_1"></p><p ng-bind="inviteCorpName" style="font-weight:700"></p><p ng-bind="i18mobile.regist_success_mobile_2"></p></div><div class="associatedTip"><span class="tipText" ng-bind="i18mobile.contentTitle"></span><br><span class="tipText" ng-bind-html="i18mobile.regist_system_success_Content1"></span></div><div class="btn-goto btn-red" on-tap="gotoActivity()"><span ng-bind="btnGotoActOrCon"></span></div><div class="btn-goto" on-tap="gotoindex()"><span ng-bind="i18mobile.complete_home"></span></div></div><div ng-show="hasBeenRecordedTip"><div style="text-align:center;margin:1rem 0"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_i.png"></div><div><p ng-bind="recordedTip"></p></div><div class="btn-goto btn-red" on-tap="inviteCustomer()" id="continue_bind"><span ng-bind="i18mobile.continue_bind"></span></div><div class="btn-goto" on-tap="gotoindex()" id="button_Cancel"><span ng-bind="i18mobile.button_Cancel"></span></div></div><div ng-show="!isSuccess && !hasBeenRecordedTip && !transferAmount"><div style="text-align:center"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/registFaild.png"></div><div style="text-align:center"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/alarm.png"></div><div style="text-align:center;width:90%;margin:1rem auto"><div ng-if="!bpNotExist"><span ng-bind-html="errorResule"></span></div><div ng-if="bpNotExist"><span ng-bind="errorResule_bpNotExist"></span></div><div ng-if="errorResult2" style="font-size:.7rem;color:#8a8d93;margin-top:.5rem" ng-bind="errorResult2"></div></div><div class="btn-goto" style="margin-top:2rem" on-tap="gotoindex()"><span style="font-size:.8rem" ng-bind="i18mobile.complete_home"></span></div></div><div ng-show="transferAmount"><div style="text-align:center;margin:3rem 0 1rem"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/icon_i.png"></div><div class="transferAmount_title"><div class="transferAmount_title_text" ng-bind="i18mobile.regist_system_less2000_tip1"></div></div><div class="transferAmount_content"><div class="transferAmount_content_text" ng-bind-html="regist_system_less2000_chosetip2_content1"></div><div class="transferAmount_content_text" ng-bind="i18mobile.regist_system_less2000_chosetip2_content2"></div></div><div class="btn-goto btn-red" on-tap="inviteCustomer()" id="transButton"><span ng-bind="i18mobile.recommendCreate_commitSure"></span></div></div></div>');
            $templateCache.put('src/app/business/mobile/views/renewal.html', '<style>.renewal-btn[disabled]{color:rgba(255,255,255,.3)}.scroll-bar-v{top:2rem;right:3px;bottom:2px;width:3px}</style><div style="background:#fff" id="tabs" class="tabs tabs-top tabs-default renewal-box" ng-init="$Get(\'renewalRenderService\').renewalRender(this)"><div class="renewal-box-title" style="width:100%"><ul><li ng-repeat="act in acts" on-tap="queryByStatus(act.statu)"><span ng-class="{ischeckedred:act.ischecked}">{{act.name}}<span ng-show="act.statu==5">({{waitingtotal}})</span></span></li></ul></div></div><ion-content style="padding-top:2rem" overflow-scroll="false" on-swipe-up="viewNoMoreData(srcData.data, moreData())" on-scroll="ViewScrollTop(srcData.data)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><div class="renewal-item" ng-repeat="item in srcData.data track by $index" style="margin-bottom:.5rem;background:#fff" ng-init="finishLoading(this)"><div class="renewal-item-title card-infors-title" on-tap="gotoRenManageDetails(item)">{{item.cloudServiceTypeStr}}<span ng-bind="item.subscriptionStatus"></span></div><div class="card-infors" on-tap="gotoRenManageDetails(item)"><div class="card-infor" ng-bind="item.resName"></div><div class="card-infor" ng-bind="item.datacenterName"></div><div class="card-infor" ng-bind="getproductSpecDesc(item)"></div></div><div class="renewal-item-foot"><span ng-bind="getLinktip(item)" ng-if="item.status == 5 || item.status == 4||item.status == 3 || getOverdueDay(item)<=15 ||(item.status == 2&&!(getOverdueDay(item)>=15))" style="font-size:.7rem;color:#e41f2b"></span> <span ng-bind="getLinktip(item)" ng-if="item.status != 5 && item.status != 4 && getOverdueDay(item)>15" style="font-size:.7rem"></span> <span class="renewal-btn" ng-bind="item.actionMenuOption.items[0].title" bi_name="{{subscriptionStatus==5?\'急需续费\':\'全部服务\'}}_续费_{{item.cloudServiceTypeStr+\'_\'+getproductSpecDesc(item)+\'_\'+item.datacenterName+\'_\'+item.subscriptionStatus+\'_\'+getLinktip(item)}}" on-tap="gotoRenManage($event,item)">续费</span></div><span style="display:none" ng-if="$last" ng-init="$loadingFlag.isLoading=0"></span></div><div style="height:2.5rem"></div><span style="display:none" ng-if="srcData.data.length==0 && totalItems==0 && $loadingFlag.isLoading!=0" ng-init="$loadingFlag.isLoading=0"></span><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" ng-if="moreData()" distance="1%"></ion-infinite-scroll><div class="movehere" style="display:none"></div><div style="display:none" on-tap=""></div></ion-content><div ng-if="totalItems==0" style="margin-top:80%;line-height:100%;font-size:.8rem;color:#8a8d93;text-align:center">暂无数据</div><div ng-if="totalItems==undefined" style="margin-top:80%;line-height:100%;font-size:.8rem;color:#8a8d93;text-align:center">加载中...</div><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(srcData.data)"></div><style type="text/css">.renewal-item div ul li div:nth-child(1){display:inline-block;width:80px;text-align:left;color:#8a8d93;padding-left:.75rem;vertical-align:top}div.loading-container.active.visible{display:none}div.backdrop.visible{display:none}.card-infors-title{font-size:.8rem!important;padding:.75rem;height:auto;line-height:normal}.card-infors{font-size:.7rem;padding:0 .75rem;color:#8a8d93}.card-infors .card-infor:last-child{padding-bottom:.75rem}</style>');
            $templateCache.put('src/app/business/mobile/views/renewService.html', '<ion-content><div class="item" style="margin-bottom:10px"><span style="float:left;font-size:small" ng-bind="orderId"></span> <span style="float:right;font-size:small;font-weight:700" ng-bind="status"></span></div><div class="item" style="margin-bottom:10px"><div ng-repeat="lineItem in orderLineItems" style="clear:both;margin-bottom:30px"><span style="float:left;font-size:small" ng-bind="lineItem.spec"></span> <span style="float:right;font-size:small" ng-bind="lineItem.price"></span><br><span style="float:left;font-size:small" ng-bind="lineItem.period"></span><span style="float:right;font-size:small" ng-bind="lineItem.num"></span></div></div><div class="item" style="margin-bottom:10px"><span style="float:left;font-size:small" ng-bind="i18mobile.myorder_detail_label_ordertype"></span><span style="float:right;font-size:small" ng-bind="ordertype"></span><br><br><span style="float:left;font-size:small" ng-bind="i18mobile.myorder_detail_label_ordertime"></span><span style="float:right;font-size:small" ng-bind="ordertime"></span></div><div class="item" style="margin-bottom:10px"><span style="float:left;font-size:small" ng-bind="i18mobile.myorder_detail_label_amount"></span><span style="float:right;font-size:small;color:red" ng-bind="amount"></span><br><span style="float:left;font-size:small" ng-bind="i18mobile.myorder_detail_label_discount"></span><span style="float:right;font-size:small;color:red" ng-bind="\'-\' + discount"></span><br><span style="float:left;font-size:small" ng-bind="i18mobile.myorder_detail_label_amountafterdiscount"></span><span style="float:right;font-size:16px;color:red" ng-bind="amountafterdiscount"></span></div><div class="button-wrap" ng-if="origstatus == 6"><button class="button button-block button-assertive" on-tap="payOrder(orderId)">{{i18mobile.myorder_button_pay}}</button></div><div class="button-wrap" ng-if="origstatus == 6 || origstatus == 1"><button class="button button-block button-stable" on-tap="cancelOrder(orderId)">{{i18mobile.myorder_button_cancel}}</button></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/renmanage.html', '<style>.renprompt[disabled]{color:rgba(255,255,255,.3)!important}#gotoRenPrompt.renprompt{border:1px solid #fff!important;background:#e94a4a;color:#fff!important}div.loading-container.active.visible{display:none}div.backdrop.visible{display:none}</style><div ng-init="$Get(\'renmanageRenderService\').renmanageRender(this)"><div id="renew-detail" ng-show="renewdetail" ng-controller="renewalSubsciptionDetail.ctrl"><div class="main-top"><span>倒计时:&nbsp;&nbsp;</span><span ng-bind="getLinktip(row)"></span></div><div class="instance-info"><div class="instance-title">实例信息</div><div class="instance-body"><ul><li><span>实例名称</span><span ng-bind="row.instanceInfo.resources[0].resourceName || \'--\'"></span></li><li><span>实例ID</span><span ng-bind="row.instanceInfo.resources[0].resourceId || \'--\'"></span></li><li><span>产品类型</span><span ng-bind="row.cloudServiceTypeStr || \'--\'"></span></li><li><span>地域</span><span ng-bind="row.datacenterName || \'--\'"></span></li><li><span>规格</span><span ng-bind="getproductSpecDesc(row)"></span></li></ul></div></div><div class="opening-info"><span class="opening-title">开通信息</span><div class="opening-body"><ul><li><span>供应商</span><span ng-bind="row.beName"></span></li><li><span>开通时间</span><span ng-bind="validTime"></span></li><li><span>到期时间</span><span ng-bind="expireTime"></span></li><li><span>状态</span><span ng-bind="i18mobile[\'renewal_status_\' + row.status]"></span></li><li><span>所属订单</span><span ng-bind="row.subscribeSource.customerOrderId"></span></li><li><span>到期处理</span><span ng-if="$subscription_expireMode" ng-bind="$subscription_expireMode"></span> <span ng-if="!$subscription_expireMode" ng-bind="subscription_expireMode"></span></li></ul></div></div><div class="auto-renew" on-tap="gotoAutoRenmanage($event,row)" ng-disabled="autoDisabled"><span ng-disabled="autoDisabled">自动续费</span><div ng-disabled="autoDisabled"><i ng-bind="auto" ng-disabled="autoDisabled">已开启 </i><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png" ng-disabled="autoDisabled"></div></div><div class="main-bottom"><div class="main-bottombox"><span id="gotoRenPrompt" class="renprompt" on-tap="gotoRenPrompt($event,row)" ng-bind="row.actionMenuOption.items[0].title">续费</span></div></div><div id="renew-bombbox" ng-controller="renewal_new.ctrl" style="height:100%;background:rgba(0,0,0,.7)"><div style="height:75%" on-tap="hidediv()"></div><div style="background:#fff;height:25%"><p>计费详情</p><p>扣费金额:&nbsp;&nbsp;<span>¥</span><span ng-bind="totalFee"></span>/<span ng-bind="measureUnitAll[usageValueMeasure]"></span></p><p>在<span ng-bind="endTime">2017-09-30&nbsp;15:26:26</span>开始计费</p><p on-tap="submitorder(this)">提交订单</p></div></div></div><div class="movehere" style="display:none"></div></div>');
            $templateCache.put('src/app/business/mobile/views/serviceDetail.html', '<ion-content class="order-details"><div ng-repeat="detail in details"><div class="item order-title"><span class="fl" ng-bind="detail.name"></span> <span style="font-weight:700" class="fr" ng-bind="detail.status"></span></div><div class="item order-collect service-item"><p><span ng-bind="i18v1r2.table_servicetype" class="fl"></span> <span ng-bind="detail.cloudServiceType" class="fl"></span></p><p><span ng-bind="i18v1r2.table_resourceType" class="fl"></span> <span ng-bind="detail.resourceTypeCode" class="fl"></span></p><p><span ng-bind="i18v1r2.table_resource" class="fl"></span> <span ng-bind="resouceIDs[detail.resourceId]?resouceIDs[detail.resourceId]:detail.resourceId" class="fl"></span></p><p><span ng-bind="i18v1r2.serviceManagement_table_serviceID" class="fl"></span> <span ng-bind="detail.subscriptionId" class="fl"></span></p><p><span ng-bind="i18v1r2.table_periodTypeNum" class="fl"></span> <span ng-bind="detail.periodTypeNum" class="fl"></span></p><p><span ng-bind="i18v1r2.table_expireMode" class="fl"></span> <span ng-bind="detail.expireMode" class="fl"></span></p></div></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/serviceManagement.html', '<div id="tabs" class="tabs tabs-top tabs-default"><a id="tab_1" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentServiceIndex==1)}" on-tap="getServices(1)">{{i18v1r2.tab_serviceManagement_allService}} </a><a id="tab_2" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentServiceIndex==2)}" on-tap="getServices(2)">{{i18v1r2.tab_serviceManagement_runningService}} </a><a id="tab_3" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentServiceIndex==3)}" on-tap="getServices(3)">{{i18v1r2.tab_serviceManagement_renewService}}<span class="red">({{status_waitingRenew_count}})</span></a></div><ion-content overflow-scroll="false" class="order-content" on-swipe-up="viewNoMoreData(items, moredata)" on-scroll="ViewScrollTop(items)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getServices($index + 1, true)" class="slider-layer"><ion-slide ng-repeat="cStatus in statusIndex"><ion-item ng-if="items.length == 0 && isShowLoadText" ng-bind="service_noData" class="data-null"></ion-item><div ng-if="items.length > 0 && cStatus == currentServiceIndex" ng-repeat="item in items" class="orderitem"><a class="item order-title" on-tap="gotoDetail(item.subscriptionId,item.productInstance.bundleFlag)"><span class="fl" ng-bind="item.resourceInfo"></span> <span class="fr" style="font-weight:700" ng-bind="item.status"></span></a><div class="item order-collect"><p><span class="fl" ng-bind="i18v1r2.table_datacenterName"></span> <span class="fl" ng-bind="item.dataCenter"></span></p><p ng-repeat="attr in item.attrs"><span class="fl" ng-bind="attr.name"></span> <span class="fl" ng-bind="attr.value"></span></p><p><span class="fl" ng-bind="i18mobile.label_validate_time"></span> <span class="fl" ng-bind="item.time_str"></span></p></div></div><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)"></div>');
            $templateCache.put('src/app/business/mobile/views/solutionCloud.html', '<style>.item{border-width:1px!important}.item-keep-rigth{float:right}.item-gray-style{padding:.5rem .75rem;font-size:.6rem}.list,.list:last-child{margin-bottom:0}.description-exceed-limit{width:99%;display:inline-block;word-break:break-all;white-space:normal}.item-pinner-input{float:left;text-align:center;width:2.5rem!important;height:1.5rem!important;border-width:1px 0 1px 0!important;border-style:solid!important;border-color:#ccc!important;font-size:.8rem!important;background:0 0}.haveSelection{margin-right:.45rem}.noHaveSelection{margin-right:.92rem}.modal-backdrop{background-color:rgba(0,0,0,.5)}.popup-head{padding:.3rem .4rem;background-color:#181818;border-color:#181818;text-align:center}.popup-title{color:#e8ebef}.ionicModal-button{width:48%;margin:.1rem}.popup-body-content-lable{width:95%;margin:.4rem auto;font-size:.5rem;color:silver}.popup-body-content-button{display:inline-block;width:50%;text-align:center;padding-bottom:.4rem}.popup-body-content-spinner{width:95%;margin:0 auto}</style><div class="item item-divider item-gray-style"><span class="description-exceed-limit">{{i18reserve.solution_region_explain}}</span></div><div class="item item-divider item-gray-style"><span ng-bind="i18reserve.hcnap_term_area"></span></div><div class="list"><div class="item item-icon-left" href="#"><span>{{dataCenterModel.label}}</span> <span class="item-keep-rigth" on-tap="dataCenterModel.openModal(dataCenterModel.label,\'region\')"><span ng-class="{\'haveSelection\':attribute.isHaveSelection,\'noHaveSelection\':!attribute.isHaveSelection}">{{dataCenterModel.dcLabel}}</span> <span ng-if="dataCenterModel.isHaveSelection"><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></div></div><div ng-repeat="group in drawingModel.productGroups track by $index"><div ng-repeat="item in group.subGroup track by $index" style="width:100%" ng-if="item.displayType == \'group\' && item.products.length!=0"><div ng-if="$index==0" class="item item-divider item-gray-style"><span ng-bind="group.name"></span></div><ul class="list"><li class="item item-icon-left"><span>{{item.name}}</span> <span class="item-keep-rigth" on-tap="softSelectOpenModal(item,\'soft\')"><span ng-repeat="product in item.products"><span ng-repeat="refContain in product.refContains"><span ng-repeat="attribute in refContain.attributes" ng-class="{\'haveSelection\':attribute.isHaveSelection,\'noHaveSelection\':!attribute.isHaveSelection}">{{product.name}}{{attribute.propertiesDes}}</span> <span ng-if="attribute.isHaveSelection"><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></span></span></li></ul></div><div ng-repeat="item in group.subGroup" style="width:100%" ng-if="!item.displayType"><div ng-repeat="sub_item in item.products track by $index" ng-if="sub_item.products.length!=0"><div class="item item-divider item-gray-style">{{sub_item.name}}</div><ul class="list"><div ng-repeat="refContain in sub_item.refContains track by $index"><div ng-repeat="attribute in refContain.attributes track by $index"><li class="item item-icon-left"><span>{{attribute.resourceName}}</span> <span class="item-keep-rigth" on-tap="speSelectOpenModal(sub_item,refContain,attribute,\'spec\')"><span ng-class="{\'haveSelection\':attribute.isHaveSelection,\'noHaveSelection\':!attribute.isHaveSelection}">{{attribute.propertiesDes}}</span> <span ng-if="attribute.isHaveSelection"><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></li></div></div><div ng-if="!(sub_item.limit.min == sub_item.limit.max && sub_item.limit.min == 1&&sub_item.limit.max ==1)"><li class="item item-icon-left"><span>{{i18reserve.pay_quantity}}</span> <span class="item-keep-rigth"><button class="button ion-minus" style="float:left" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'less\')"></button> <input type="number" class="item-pinner-input" ng-model="sub_item.limit.default" ng-blur="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'input\')"> <button class="button ion-plus" style="float:left" on-tap="drawingModel.chooseEventModel.mobileSpinnerChange(sub_item,null,null,\'plus\')"></button></span></li></div></ul></div></div></div><div class="item item-divider" style="padding:.1rem"><span></span></div><div class="list"><div class="item item-icon-left"><span>{{i18reserve.common_term_name_label}}</span> <span class="item-keep-rigth"><input type="text" ng-model="drawingModel.instanceAlias" ng-change="aliasMode.validatorFuc(drawingModel.instanceAlias)" placeholder="{{aliasMode.aliasPlaceholder}}" style="color:#34475f"></span></div></div><div class="item item-divider item-gray-style"><span style="color:red;display:block" ng-show="aliasValidatorResult.isEmpty">{{i18v1r2.refund_valid_errDetail_required}}</span> <span style="color:red;display:block" ng-show="aliasValidatorResult.isInvalid">{{i18reserve.solution_input_validation}}</span> <span style="color:red;display:block" ng-show="aliasValidatorResult.rangeSize">{{i18reserve.valid_errDetail_rangeSize}}</span> <span class="description-exceed-limit" style="display:block" ng-bind="i18reserve.solution_input_explain"></span></div><div class="list"><div class="item item-icon-left"><span>{{i18reserve.vbs_bugTime_title}}</span> <span class="item-keep-rigth" on-tap="periodSlider.durationSelectOpenModal(\'duration\')"><span style="margin-right:.45rem">{{periodSlider.valueLable}}</span> <span><img style="vertical-align:middle" src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/arrow.png"></span></span></div></div>');
            $templateCache.put('src/app/business/mobile/views/storedValueCard.html', '<style>.ti-form .ti-form-content{line-height:32px}.stored_value_card_img{background:#fff;height:200px;width:350px;border-radius:4px}.button{height:10%;width:29%;border-radius:4px;border:1px solid #eee}.list-divider{background-color:#f5f5f5;height:20px;margin-left:0;margin-right:0;border:0;padding:0}.item-pinner-input{float:left;text-align:center;width:2.5rem!important;height:1.5rem!important;border-width:1px 0 1px 0!important;border-style:solid!important;border-color:#ccc!important;font-size:.8rem!important;background:0 0}.focus{border-color:#f66f6a}.bottom-blank-height{height:2.5rem}.validPeriod{color:#222}.stored_value_card_desc{position:relative;left:30px;display:inline-block;max-width:720px}.stored_value_card_desc_title{font-size:18px;color:#333}.stored_value_card_desc_content{font-size:14px;color:#2a2a2a;line-height:25px}.stored_value_card_note{border-style:solid;font-size:14px;border-width:1.4px;height:40px;line-height:40px;background:#fff6f6;border-color:#ff4c4c;color:#ff4c4c}.cloud-tips_error{line-height:80px;text-indent:2px;padding-left:15px;padding-bottom:3px}</style><div class="cti-wizard-content" csb-bipv><div class="item item-divider item-divider-white item-gray-style text-align-left head-padding-height"><div style="margin-top:50px" class="item item-icon-left"><span style="font-size:15px" ng-bind="i18reserve.stored_value_card_face_value_label"></span><div style="margin-left:2%;margin-top:2%"><input type="button" id="svcId5" ng-click="onClick(storedValueCardSVCID_5)" class="button" value="￥100" ng-disabled="cardDisable"> <input type="button" id="svcId6" ng-click="onClick(storedValueCardSVCID_6)" class="button" style="margin-left:3%" value="￥1000" ng-disabled="cardDisable"> <input type="button" id="svcId8" ng-click="onClick(storedValueCardSVCID_8)" class="button" style="margin-left:3%" value="￥5000" ng-disabled="cardDisable"></div><div style="margin-top:5%;margin-left:2%"><input type="button" id="svcId1" ng-click="onClick(storedValueCardSVCID_1)" class="button" value="￥10000" ng-disabled="cardDisable"> <input type="button" id="svcId3" ng-click="onClick(storedValueCardSVCID_3)" class="button" style="margin-left:3%" value="￥50000" ng-disabled="cardDisable"> <input width="300px" id="svcId9" ng-click="onClick(customizeCardDenomination)" class="button" style="font-size:.45em;margin-left:3%" ng-model="customizeCardDenomination.value" ng-change="change()" ng-blur="blur()" ti-validation="validationOption" ng-disabled="cardDisable" placeholder="{{customizeCardDenomination.placeholder}}" ti-text></div></div><div class="item item-divider list-explain" ng-if="isShowNote">{{i18reserve.stored_value_card_price_range}}</div><div class="item item-icon-left" href="#"><span>{{i18reserve.stored_value_card_valid_time_label}}</span> <span class="item-keep-rigth" style="margin-right:.45rem">{{selectedCard.validPeriod}}{{year}}</span></div><div class="item item-icon-left"><span>{{i18reserve.stored_value_card_purchase_quality_label}}</span> <span class="item-keep-rigth"><button class="button ion-minus" style="float:left" on-tap="mobileSpinnerChange(selectedCard.purchaseQuality,null,null,\'less\')"></button> <input type="number" class="item-pinner-input" ng-model="selectedCard.purchaseQuality.value" ng-blur="mobileSpinnerChange(selectedCard.purchaseQuality,null,null,\'input\')"> <button class="button ion-plus" style="float:left" on-tap="mobileSpinnerChange(selectedCard.purchaseQuality,null,null,\'plus\')"></button></span></div></div></div><ion-footer-bar class="bar-subfooter" ng-show="isIllegalCustomer" style="padding-left:0"><div style="padding:.45rem"><div style="display:inline-block;font-size:.6rem;display:inline;color:#8a8d93;vertical-align:middle;padding-left:.45rem">{{i18reserve.stored_value_card_verify_customer_info_Illegal}}</div><span style="display:inline-block;margin-left:5px"><a style="font-size:.6rem;color:#499df2" ng-href="{{helpUrl}}" ng-bind="i18reserve.learn_more"></a></span></div></ion-footer-bar>');
            $templateCache.put('src/app/business/mobile/views/storedValueCardConfirm.html', '<style>.item-keep-rigth{float:right}.common-font1{font-size:.8rem}.common-font2{color:#8a8d93;font-size:.7rem}.li-div-1{width:25%;color:#8a8d93;font-size:.7rem;display:inline-block;vertical-align:top}.li-dev-2{width:75%;font-size:.7rem;display:inline-block;vertical-align:top;white-space:normal}</style><div ng-repeat="data in confirmTable.srcData.data track by $index"><div><li class="item"><div class="common-font1"><span style="display:inline-block;margin-top:12%;white-space:normal;width:65%" ng-bind="data.name"></span> <span class="item-keep-rigth"><span ng-class="detail_pic_up"></span></span></div></li><li class="item"><div><div class="li-div-1"><span ng-bind="i18reserve.stored_value_card_valid_time_label"></span></div><div class="li-dev-2"><span>{{data.validPeriod}}</span></div></div><div><div class="li-div-1"><span ng-bind="i18reserve.lbl_common_term_detail_col5"></span></div><div class="li-dev-2"><span>{{data.purchaseQuality}}</span></div></div><div><div class="li-div-1"><span ng-bind="i18user.couponsView.denomination"></span></div><div class="li-dev-2"><span style="display:block">{{currencySign}}{{data.cost}}</span></div></div></li></div></div>');
            $templateCache.put('src/app/business/mobile/views/test.html', '<ion-content><div><p class="autorenman">自动续费<span id="open" class="open" style="text-align:right" on-tap="openauto(this)"><img src="/res.hc-cdn.com/usercenter/8.3.203/theme/bssconsole/mobile/images/ui_07.png"></span></p></div><div><p class="autotime">自动续费周期<span id="oday" on-tap="gotoAddTime()" style="color:red">一个月></span></p></div><div class="renmanage-tip"><p>提示：</p><p>1. 设置成功后，系统自动以此时长进行续费。</p><p>2. 自动续费将于服务到期前开始扣款，请保持余额充足。</p><p>3. 如您在扣款日前人工续费，则系统按最新到期时间自动进行续费。</p><p>注: 支持现金余额扣款，暂不支持代金券余额扣款</p></div><div id="renewtime-bg"></div><div id="renewtime-bombbox"><ul ng-click="gotoComplete()"><li on-tap="show(1)">1个月</li><li on-tap="show(3)">3个月</li><li on-tap="show(6)">6个月</li><li on-tap="show(9)">9个月</li><li on-tap="show(10)"><span>1年</span></li><li on-tap="show(11)"><span>2年</span></li><li on-tap="show(12)" class="time-borders"><span>3年</span></li><li class="time-line"></li><li on-tap="hidedivs()">取消</li></ul></div></ion-content>');
            $templateCache.put('src/app/business/mobile/views/usageManagement.html', '<div id="tabs" class="tabs tabs-top tabs-default"><a id="tab_0" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentUsageIndex==0)}" on-tap="getUsages(0)">{{i18user.menus.menu_currentUsage}} </a><a id="tab_1" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentUsageIndex==1)}" on-tap="getUsages(1)">{{i18user.menus.menu_historyUsage}}</a></div><ion-content overflow-scroll="false" class="order-content" on-swipe-up="viewNoMoreData(items, moredata)" on-scroll="ViewScrollTop(items)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getUsages($index, true)" class="slider-layer"><ion-slide ng-repeat="cStatus in statusIndex"><ion-item ng-if="items.length == 0 && isShowLoadText" ng-bind="usage_noData" class="data-null"></ion-item><div ng-if="items.length > 0 && cStatus == currentUsageIndex" ng-repeat="item in items" class="orderitem"><a class="item" on-tap="gotoDetail(item.subscriptionId)"><span style="float:left;font-size:small" ng-bind="item.resourceInfo"></span> <span style="float:right;font-size:small;font-weight:700" ng-bind="item.status"></span></a><div class="item"><span style="float:left;font-size:small" ng-bind="i18v1r2.table_datacenterName"></span> <span style="font-size:small" ng-bind="item.dataCenter"></span><br><span style="float:left;font-size:small" ng-bind="item.productSpecDesc"></span><br><span style="float:left;font-size:small" ng-bind="item.time_str"></span></div></div><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)"></div>');
            $templateCache.put('src/app/business/mobile/views/usecoupons.html', '<div id="tabs" class="tabs tabs-top tabs-default"><a id="tab_2" class="usecoupons-nav" ng-class="{\'tab-item\':true,\'active tab-item-calm\':(currentCouponIndex==2)}" on-tap="getCoupons(0)">{{i18mobile.coupons_content_use}}<span class="red">({{coupons_count_2}})</span></a><p class="youhuiamount">已选中1张，<span ng-bind="i18mobile.coupon_all_ducted"></span><span>{{couponOffsetStr|number:2}}</span><span ng-bind="i18mobile.coupon_all_ducted"></span></p></div><ion-content overflow-scroll="false" class="coupons-content csbcontent tabs-space" style="margin-bottom:4rem" on-swipe-up="viewNoMoreData(items, moredata)" on-scroll="ViewScrollTop(items)"><ion-refresher pulling-text="{{i18mobile.system_tips_downrefresh}}" on-refresh="refreshItems()"></ion-refresher><ion-slide-box show-pager="false" on-slide-changed="getCoupons(0)" class="slider-layer"><ion-slide ng-repeat="couponTitle in model.title"><ion-item ng-if="items.length == 0 && isShowLoadText" ng-bind="coupon_noData" class="data-null"></ion-item><ion-item class="item" ng-if="items.length > 0"><div ng-if="couponTitle.status == currentCouponIndex" ng-repeat="item in items" on-tap="chooseCou(item,$event)"><div class="coupons-basic choose-yes" ng-class="{\'coupons-used\':item.status ==4 || item.status ==3}"><table><tr><td><div ng-if="item.couponType == COUPONTYPE_DISCOUNT"><span class="bigSpan" ng-bind="item.faceValue"></span> <span class="smallSpan" ng-bind="i18v1r2.couponsView_discount"></span></div><div ng-if="item.couponType != COUPONTYPE_DISCOUNT"><span class="smallSpan" ng-bind="currency"></span> <span class="bigSpan" ng-bind="item.faceValue"></span></div><div><span ng-bind="i18mobile[\'coupons_type_\'+item.couponType]"></span></div><div><span ng-bind="item.conditionText"></span></div></td><td><p ng-class="{\'used-badge\':item.hasbeenUsed==true,\'registered-badge\':item.hasGive==true}" ng-if="item.hasbeenUsed==true || item.hasGive==true"></p><div><span ng-bind="i18v1r2.couponsView_usingRules" class="fl"></span><div class="item-dark"><span ng-bind="item.usingRulesText"></span></div></div><div><span class="fl" ng-if="item.status ==2" ng-bind="i18v1r2.couponsView_validDate"></span> <span class="fl" ng-if="item.status ==4" ng-bind="i18v1r2.couponsView_expire_time"></span> <span class="fl" ng-if="item.status ==3 && item.hasGive" ng-bind="i18v1r2.couponsView_activate_time"></span> <span class="fl" ng-if="item.status ==3 && item.hasbeenUsed" ng-bind="i18v1r2.couponsView_use_time"></span><div class="item-dark" ng-if="item.status ==2"><span ng-if="item.noTime==false" ng-bind="(item.validTi) + i18v1r2.couponsView_to"></span> <span ng-if="item.noTime==false" ng-bind="item.expireTi"></span> <span ng-if="item.noTime==true" ng-bind="i18v1r2.couponCenter_no_userule"></span></div><div class="item-dark" ng-if="item.status !=2"><span ng-if="item.status==4" ng-bind="item.expireTi"></span> <span ng-if="item.status==3 && item.hasGive" ng-bind="item.acTime"></span> <span ng-if="item.status==3 && item.hasbeenUsed" ng-bind="item.reTime"></span></div></div><div class="coupons-number"><span ng-bind="item.couponId"></span></div></td></tr></table><p class="choose-yes-nav"></p><div class="semi-circle semi-circle-top"></div><div class="semi-circle semi-circle-bottom"></div></div></div></ion-item><ion-infinite-scroll on-infinite="loadMore()" immediate-check="false" distance="1%" ng-if="moredata"></ion-infinite-scroll></ion-slide></ion-slide-box></ion-content><div class="backTop" ng-show="scrollTopTag" ng-click="scrollTop(items)"></div><div class="bar bar-footer"><button class="button button-assertive fr" on-tap="gotoactive()">{{i18mobile.coupons_button_active1}}</button></div><div class="mengban mengban1" ng-if="TipBankMengban"><div><div id="bankPrompt" style="height:7rem;padding-top:1rem"><p class="person-text2">该优惠券与已选的折扣返利冲突，只能选择一种，确定选择该折扣？</p><p class="person-text3" style="margin:0 0"><span on-tap="cancel()">取消</span><span on-tap="ok()">确定</span></p></div></div></div>');
        } ]);
        return module;
    });
    define('app/business/mobile/configures/mobileRouterConfig', [ 'lazy-load/lazyLoad', 'app/business/mobile/configures/commParams', 'app/business/controllers/commons', 'app/business/mobile/configures/orderCommons', 'app/business/controllers/consoleDataCache' ], function(lazyLoadModule) {
        var configArr = [ {
            'name': 'mobile',
            'url': '/mobile',
            'templateUrl': 'src/app/business/mobile/views/base.html',
            'controller': 'base.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/baseCtrl' ],
                'services': [ 'app/business/mobile/services/mobileCommonService', 'app/business/mobile/services/order/customerOrderService', 'app/business/mobile/services/order/commonService', 'app/business/services/publicService', 'app/business/mobile/services/mobileCustomerService' ],
                'js': [ 'app/business/controllers/urlConfig' ]
            }
        }, {
            'name': 'mobile.home',
            'url': '/home',
            'templateUrl': 'src/app/business/mobile/views/home.html',
            'controller': 'mHome.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/homeCtrl' ],
                'services': [],
                'js': []
            }
        }, {
            'name': 'mobile.registSuccess',
            'url': '/registSuccess?bpName?inviteCode?bindType?cooperateSourceID?bpInvite',
            'templateUrl': 'src/app/business/mobile/views/registSuccess.html',
            'controller': 'registSuccess.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/registSuccessCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService', 'app/business/services/publicService' ],
                'js': []
            }
        }, {
            'name': 'mobile.personalcertification',
            'url': '/personalcertification?resetRealName?isShowFace?service',
            'onEnter': function($state, $stateParams) {
                $state.go('mobile.activityPersonalAuth', $stateParams);
            }
        }, {
            'name': 'mobile.bankcertification',
            'url': '/bankcertification?sourceType?service',
            'onEnter': function($state, $stateParams) {
                $stateParams.type = 'bankCardType';
                $state.go('mobile.activityPersonalAuth', $stateParams);
            }
        }, {
            'name': 'mobile.student',
            'url': '/student',
            'templateUrl': 'src/app/business/mobile/account/views/studentCertification.html',
            'controller': 'student.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/studentCtrl' ],
                'services': [ 'app/business/services/commonSelect', 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.companycertification',
            'url': '/companycertification?resetRealName?isShowFace?service?fromPage',
            'templateUrl': 'src/app/business/mobile/account/views/companyCertification.html',
            'controller': 'companyCertification.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/companyCertificationCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.myorder',
            'url': '/myorder?queryParams?paid',
            'templateUrl': 'src/app/business/mobile/views/myOrder.html',
            'controller': 'mMyOrder.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/myOrderCtrl' ],
                'services': [ 'app/business/mobile/services/orderCommonService', 'app/business/mobile/services/mobileCommonService', 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/order/customerOrderService' ],
                'js': [ 'app/business/mobile/controllers/payment/payDataCache' ]
            }
        }, {
            'name': 'mobile.orderdetail',
            'url': '/orderdetail?orderId?renewalOrderPay',
            'templateUrl': 'src/app/business/mobile/views/orderDetail.html',
            'controller': 'orderDetail.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/order/orderDetailCtrl', 'app/business/mobile/controllers/order/getUnsubScribeCaptcha', 'app/business/hardware/services/hardwareService', 'app/business/hardware/services/commonParam', 'app/business/mobile/controllers/order/cancelOrderCtrl' ],
                'services': [ 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/order/customerOrderService', 'app/business/mobile/services/order/productService', 'app/business/services/commonSelect', 'app/business/mobile/controllers/orderDetailService', 'app/business/mobile/services/orderCommonService', 'app/business/mobile/services/payment/orderPayService' ],
                'js': []
            }
        }, {
            'name': 'mobile.realName',
            'url': '/realName?isShowFace?service',
            'onEnter': function($state, $stateParams) {
                $state.go('mobile.activityPersonalAuth', $stateParams);
            }
        }, {
            'name': 'mobile.buyservice',
            'url': '/buyservice',
            'templateUrl': 'src/app/business/mobile/views/buyservice.html',
            'controller': 'buyservice.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/buyserviceCtrl' ],
                'services': [ 'app/business/mobile/services/mobileOrderCaptureService', 'app/business/mobile/services/reserveInstance/reserveCommonService', 'app/business/mobile/services/reserveInstance/reserveProductService', 'app/business/mobile/services/order/productService', 'app/business/mobile/services/order/customerOrderService', 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/mobileCustomerService', 'app/business/mobile/services/reserveInstance/packageService', 'app/business/services/publicService' ],
                'js': [ 'app/business/controllers/urlConfig', 'app/business/mobile/services/reserveInstance/utilSet' ]
            }
        }, {
            'name': 'mobile.buyservice.grainCloud',
            'url': '/grainCloud?promotionId?promotionPlanId?solutionCode?activityURL?pkgPeriodType?pkgPeriodNum?pkgCount?paySuccessCallbackURL?domainName?service',
            'templateUrl': 'src/app/business/mobile/views/packageLayout.html',
            'controller': 'mGrainCloud.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/grainCloudCtrl', 'app/business/mobile/controllers/grainCloud/rdsv1Ctrl', 'app/business/mobile/controllers/grainCloud/ddsv1Ctrl', 'app/business/mobile/controllers/grainCloud/cloudsitev1Ctrl' ],
                'services': [ 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/solution/solutionService', 'app/business/mobile/services/solution/renderToolService', 'app/business/mobile/services/grain/solutionRenderToolService', 'app/business/mobile/services/grain/ddsv1Service', 'app/business/mobile/services/customize/customizeService', 'app/business/mobile/services/domain/registerService' ],
                'js': []
            }
        }, {
            'name': 'mobile.browserError',
            'url': '/browserError',
            'templateUrl': 'src/app/business/mobile/views/browerError.html',
            'controller': 'browserError.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/browserError' ],
                'services': [],
                'js': []
            }
        }, {
            'name': 'mobile.redirect',
            'url': '/redirect',
            'templateUrl': 'src/app/business/mobile/views/redirect.html',
            'controller': 'redirect.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/redirect' ],
                'services': [],
                'js': []
            }
        }, {
            'name': 'mobile.qrcodeForRegistH5',
            'url': '/qrcodeForRegistH5?customerId?fromUser',
            'templateUrl': 'src/app/business/mobile/account/views/qrcodeForRegistH5.html',
            'controller': 'qrcodeForRegistH5.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/qrcodeForRegistH5Ctrl' ],
                'services': [ 'app/business/mobile/services/orderCommonService', 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.mComplete',
            'url': '/mComplete?status?service'
        }, {
            'name': 'mobile.mModifySignEntity',
            'url': '/mModifySignEntity?status'
        }, {
            'name': 'mobile.massociated',
            'url': '/massociated',
            'templateUrl': 'src/app/business/mobile/enterprise/views/massociated.html',
            'controller': 'massociated.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/enterprise/controllers/massociatedCtrl' ],
                'services': [ 'app/business/mobile/enterprise/services/mobileEnterpriseService' ],
                'js': []
            }
        }, {
            'name': 'mobile.buyservice.storedValueCard',
            'url': '/storedValueCard?defaultSelectedCardValue',
            'templateUrl': 'src/app/business/mobile/views/packageLayout.html',
            'controller': 'mStoredValueCard.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/storedValueCardCtrl' ],
                'services': [],
                'js': []
            }
        } ];
        VERSION_KEY_CHINA === customiseVer && (configArr = configArr.concat([ {
            'name': 'mobile.faceUserOnePageH5',
            'url': '/faceUserOnePageH5?userName?service?fromPage?type?isnew?envType',
            'templateUrl': 'src/app/business/mobile/account/views/activityPersonalAuth.html',
            'controller': 'activityPersonalAuth.ctrl',
            'onEnter': function($state, $stateParams) {
                $state.go('mobile.activityPersonalAuth', $stateParams);
            }
        }, {
            'name': 'mobile.faceH5',
            'url': '/faceH5?service?fromPage?type?isnew?envType',
            'templateUrl': 'src/app/business/mobile/account/views/activityPersonalAuth.html',
            'controller': 'activityPersonalAuth.ctrl',
            'onEnter': function($state, $stateParams) {
                $state.go('mobile.activityPersonalAuth', $stateParams);
            }
        }, {
            'name': 'mobile.activityPersonalAuth',
            'url': '/activityPersonalAuth?resetRealName?isShowFace?service?fromPage?type?isnew?envType',
            'templateUrl': 'src/app/business/mobile/account/views/activityPersonalAuth.html',
            'controller': 'activityPersonalAuth.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/activityPersonalAuthCtrl', 'app/business/mobile/account/controllers/activityBankAuthCtrl', 'app/business/mobile/account/controllers/activityPassportAuthCtrl', 'app/business/mobile/account/controllers/activityPersonalCardCtrl', 'app/business/mobile/account/controllers/activityVideoCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.videoOnePageH5',
            'url': '/videoOnePageH5?userName?service?fromPage?type?isnew?envType',
            'templateUrl': 'src/app/business/mobile/account/views/activityPersonalAuth.html',
            'controller': 'activityPersonalAuth.ctrl',
            'onEnter': function($state, $stateParams) {
                systemSwitch && 'true' === systemSwitch.F_REAL_NAME_H5VIDEO_TYPE || $state.go('mobile.activityPersonalAuth', $stateParams);
            },
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/activityPersonalAuthCtrl', 'app/business/mobile/account/controllers/activityVideoCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.photographingFace',
            'url': '/photographingFace?status',
            'templateUrl': 'src/app/business/mobile/account/views/photographingFace.html',
            'controller': 'photographingFace.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/photographingFaceCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.entVideoH5',
            'url': '/entVideoH5?userName?service?fromPage?type?entType?isnew?envType',
            'templateUrl': 'src/app/business/mobile/account/views/activityPersonalAuth.html',
            'controller': 'activityPersonalAuth.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/activityPersonalAuthCtrl', 'app/business/mobile/account/controllers/activityVideoCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.confirmSigningEntity',
            'url': '/confirmSigningEntity',
            'templateUrl': 'src/app/business/mobile/account/views/confirmSigningEntity.html',
            'controller': 'confirmSigningEntity.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/confirmSigningEntityCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.developerAuth',
            'url': '/developerAuth',
            'templateUrl': 'src/app/business/mobile/account/views/allianceAuth.html',
            'controller': 'allianceAuth.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/allianceAuthCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        }, {
            'name': 'mobile.mAuthorization',
            'url': '/mAuthorization?isShowFace?service?type',
            'templateUrl': 'src/app/business/mobile/account/views/mAuthorization.html',
            'controller': 'mAuthorization.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/account/controllers/mAuthorizationCtrl' ],
                'services': [ 'app/business/mobile/services/mobileAccountService' ],
                'js': []
            }
        } ]));
        window.useTinyMobileRoute || (configArr = configArr.concat([ {
            'name': 'mobile.paymentBindCard',
            'url': '/paymentBindcard?isEdit?bindCardId',
            'templateUrl': 'src/app/business/mobile/expense/views/paymentBindcard.html',
            'controller': 'paymentBindCard.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/expense/controllers/paymentBindcardCtrl' ],
                'services': [ 'app/business/mobile/expense/services/mobilePaymentService' ],
                'js': []
            }
        }, {
            'name': 'mobile.paymentBindresult',
            'url': '/paymentBindresult?status',
            'templateUrl': 'src/app/business/mobile/expense/views/paymentBindresult.html',
            'controller': 'paymentBindresult.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/expense/controllers/paymentBindresultCtrl' ],
                'services': [ 'app/business/mobile/expense/services/mobilePaymentService' ],
                'js': []
            }
        }, {
            'name': 'mobile.orderpay',
            'url': '/orderpay?code?orderId?geshu?num?addamount?couponId?ids?one?prama?orderDis?couponMessage?renewalOrderPay?activityURL?paySuccessCallbackURL?service',
            'templateUrl': 'src/app/business/mobile/views/orderPay_old.html',
            'controller': 'orderPay.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/order/payment/orderPayCtrl', 'app/business/mobile/controllers/order/getUnsubScribeCaptcha', 'app/business/controllers/captcha', 'app/business/mobile/controllers/order/payment/showDetailDialogCtrl', 'app/business/mobile/controllers/mOrderPayCtrl', 'app/business/mobile/controllers/order/payment/discountDetailCtrl_new', 'app/business/mobile/controllers/order/payment/productInsCouponsPulldownCtrl_new' ],
                'services': [ 'app/business/mobile/services/order/customerOrderService', 'app/business/mobile/services/payment/orderPayService', 'app/business/mobile/expense/services/coupon/queryCouponsInfo', 'app/business/mobile/expense/services/finance/financeInfoService', 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/order/productService', 'app/business/mobile/services/mobileCustomerService', 'app/business/services/publicService', 'app/business/mobile/services/orderCommonService', 'app/business/services/commonSelect' ],
                'js': [ 'app/business/mobile/controllers/payment/payDataCache', 'app/business/controllers/urlConfig' ]
            }
        }, {
            'name': 'orderPay',
            'url': '/orderpay?orderId?geshu?num?addamount?couponId?ids?one?prama?orderDis?couponMessage?renewalOrderPay?activityURL',
            'templateUrl': 'src/app/business/mobile/views/orderPay_old.html',
            'controller': 'orderPay.ctrl',
            'scripts': {
                'controllers': [ 'app/business/mobile/controllers/order/payment/orderPayCtrl', 'app/business/mobile/controllers/order/getUnsubScribeCaptcha', 'app/business/controllers/captcha', 'app/business/mobile/controllers/order/payment/showDetailDialogCtrl', 'app/business/mobile/controllers/mOrderPayCtrl', 'app/business/mobile/controllers/order/payment/discountDetailCtrl_new', 'app/business/mobile/controllers/order/payment/productInsCouponsPulldownCtrl_new' ],
                'services': [ 'app/business/mobile/services/order/customerOrderService', 'app/business/mobile/services/payment/orderPayService', 'app/business/mobile/expense/services/coupon/queryCouponsInfo', 'app/business/mobile/expense/services/finance/financeInfoService', 'app/business/mobile/services/order/commonService', 'app/business/mobile/services/mobileCustomerService', 'app/business/services/publicService', 'app/business/mobile/services/orderCommonService', 'app/business/services/commonSelect' ],
                'js': [ 'app/business/mobile/controllers/payment/payDataCache', 'app/business/controllers/urlConfig' ]
            }
        } ]));
        if (isMobile) {
            var tmpModule = angular.module('usercenter.config', [ 'ui.router' ]);
            (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
                'stateConfig': []
            });
            tmpModule = angular.module('order.config', [ 'ui.router' ]);
            (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
                'stateConfig': []
            });
            tmpModule = angular.module('account.config', [ 'ui.router' ]);
            (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
                'stateConfig': []
            });
            tmpModule = angular.module('expense.config', [ 'ui.router' ]);
            (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
                'stateConfig': []
            });
            tmpModule = angular.module('ordercenter.config', [ 'ui.router' ]);
            (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
                'stateConfig': []
            });
            configArr.push({
                'name': 'uindex',
                'url': '/uindex',
                'controller': 'index.ctrl',
                'scripts': {
                    'controllers': [ 'app/business/v1r2/usercenter/controllers/indexCtrl' ],
                    'services': [],
                    'js': [ 'app/business/controllers/urlConfig' ]
                }
            });
        }
        tmpModule = angular.module('mobile.config', [ 'ui.router' ]);
        (tmpModule = lazyLoadModule.makeLazy(tmpModule)).tinyStateConfig({
            'stateConfig': configArr
        });
        return tmpModule;
    });
    define('app-remote/services/msgService', [], function() {
        var encoder = $.encoder;
        return function() {
            this.exceptionMsg = function(code, desc, cause, solution) {
                code = {
                    'type': 'error',
                    'content': '异常码: ' + encoder.encodeForHTML(code) + '<br/>异常描述: ' + encoder.encodeForHTML(desc),
                    'width': '360px',
                    'height': '200px'
                };
                new tinyWidget.Message(code).show();
            };
            this.oneBtnMsg = function(options) {
                var configs = {
                    'type': options.type || 'prompt',
                    'content': encoder.encodeForHTML(options.message),
                    'width': '360px',
                    'height': '200px',
                    'buttons': [ {
                        'label': '确定',
                        'focused': !0,
                        'handler': function(event) {
                            msg.destroy();
                            options.callback && options.callback();
                        }
                    } ]
                }, msg = new tinyWidget.Message(configs);
                msg.show();
            };
            this.twoBtnMsg = function(options) {
                var configs = {
                    'type': options.type || 'warn',
                    'content': encoder.encodeForHTML(options.message),
                    'width': '360px',
                    'height': '200px',
                    'buttons': [ {
                        'label': '确定',
                        'focused': !1,
                        'handler': function(event) {
                            msg.destroy();
                            options.callback && options.callback();
                        }
                    }, {
                        'label': '取消',
                        'focused': !0,
                        'handler': function(event) {
                            msg.destroy();
                        }
                    } ]
                }, msg = new tinyWidget.Message(configs);
                msg.show();
            };
        };
    });
    define('m-lib/component/hwUploadMobile', [], function() {
        var hwUploadMobileModule = angular.module('hwUploadMobile', [ 'ng' ]), isHTML5 = !(!window.File || !window.FormData);
        hwUploadMobileModule.constant('tiFileUploadConfig', {
            'type': 'button'
        });
        hwUploadMobileModule.directive('tiFileSelect', function() {
            function onFileChange(fileInputThis, uploadInst) {
                var isRemoveInput, files = isHTML5 ? fileInputThis.files : $(fileInputThis), files = uploadInst.addToQueue(files);
                if (isHTML5) $(fileInputThis).val(''); else {
                    isRemoveInput = 0 === files.length;
                    (function($fileSel, uploadInst, isRemoveInput) {
                        $fileSel.off('change');
                        var $fileSelNew = $fileSel.clone();
                        if (isRemoveInput) $fileSel.replaceWith($fileSelNew); else {
                            $fileSel.hide();
                            $fileSel.after($fileSelNew);
                        }
                        $fileSelNew.on('change', function() {
                            onFileChange(this, uploadInst);
                        });
                    })($(fileInputThis), uploadInst, isRemoveInput);
                }
                !1 !== uploadInst.options.isAutoUpload && 0 !== files.length && uploadInst.uploadItems(files);
            }
            return {
                'restrict': 'A',
                'link': function($scope, $element, attrs) {
                    $element.on('change', function() {
                        var uploadInst = $scope.$eval(attrs.tiFileSelect);
                        if (!uploadInst) return;
                        onFileChange(this, uploadInst);
                    });
                }
            };
        });
        hwUploadMobileModule.directive('tiFileUpload', [ 'tiFileUploader', 'tiFileUploadConfig', function(uploaderService, tiFileUploadConfig) {
            return {
                'restrict': 'E',
                'templateUrl': 'lib/component/hwUploadMobile.html',
                'replace': !0,
                'scope': {
                    'uploader': '=?',
                    'styleOptions': '=?',
                    'elementId': '=?'
                },
                'link': function($scope, $element, attrs) {
                    var isAutoUpload, styleOptions;
                    $scope.inputFieldInfo = {};
                    !attrs.id && _.isString($scope.elementId) && '' !== $scope.elementId && $element.attr('id', $scope.elementId);
                    attrs = $scope.uploadInst = uploaderService.createUploader($scope.uploader);
                    styleOptions = $scope.styleOptions || {};
                    $scope.title = '';
                    $scope.type = styleOptions.type || tiFileUploadConfig.type;
                    if ('inputField' === $scope.type) {
                        isAutoUpload = !1 !== attrs.options.isAutoUpload;
                        $scope.showSubmitBtn = _.isUndefined(styleOptions.showSubmitBtn) ? !isAutoUpload : styleOptions.showSubmitBtn;
                        $scope.text = styleOptions.btnText || '';
                        $scope.placeholder = styleOptions.placeholder;
                    } else {
                        isAutoUpload = styleOptions.showDetail;
                        $scope.showDetail = !!_.isUndefined(isAutoUpload) || isAutoUpload;
                        $scope.text = styleOptions.btnText || '';
                    }
                    isAutoUpload = attrs.options.filters;
                    -1 !== (styleOptions = _.findIndex(isAutoUpload, {
                        'name': 'fileType'
                    })) && ($scope.accept = isAutoUpload[styleOptions].params[0]);
                    attrs.isSingleFile || setTimeout(function() {
                        $element.find('[type = file]').attr('multiple', !0);
                    }, 0);
                }
            };
        } ]);
        hwUploadMobileModule.factory('$tiUpload', [ '$rootScope', function($rootScope) {
            function render() {
                $rootScope.$evalAsync();
            }
            function getItemIndex(item) {
                if (item && item.uploader) return _.findIndex(item.uploader.queue, {
                    'index': item.index
                });
                return -1;
            }
            function isValidFileItem(item) {
                return -1 !== getItemIndex(item);
            }
            function uploadItem(items) {
                var i, j;
                for (i = 0; i < items.length; i++) if (!isValidFileItem(items[i]) || items[i].isUploading) return;
                (function(items) {
                    var i, onBeforeSendItem;
                    for (i = 0; i < items.length; i++) {
                        items[i].isReady = !0;
                        items[i].isUploading = !1;
                        items[i].isUploaded = !1;
                        items[i].isSuccess = !1;
                        items[i].isError = !1;
                        items[i].isCancel = !1;
                        items[i].progress = 0;
                    }
                    if (1 === items.length) {
                        onBeforeSendItem = items[0].uploader.onBeforeSendItem;
                        _.isFunction(onBeforeSendItem) && onBeforeSendItem(items[0]);
                    } else {
                        onBeforeSendItem = items[0].uploader.onBeforeSendItems;
                        _.isFunction(onBeforeSendItem) && onBeforeSendItem(items);
                    }
                    onBeforeSendItem = items[0].onBeforeSend;
                    _.isFunction(onBeforeSendItem) && onBeforeSendItem();
                })(items);
                for (j = 0; j < items.length; j++) {
                    if (items[j].isCancel) return;
                    items[j].isUploading = !0;
                }
                (isHTML5 ? function(items) {
                    function addFile() {
                        for (var i = 0; i < items.length; i++) formDataObj.append(items[i].alias, items[i]._file, items[i].file.name);
                    }
                    function addFormData() {
                        _.forEach(items[0].formData, function(value, key) {
                            formDataObj.append(key, value);
                        });
                    }
                    var xhr, j, i, formDataObj = new FormData();
                    if (items[0].isFormDataFirst) {
                        addFormData();
                        addFile();
                    } else {
                        addFile();
                        addFormData();
                    }
                    xhr = new XMLHttpRequest();
                    for (j = 0; j < items.length; j++) items[j]._xhr = xhr;
                    xhr.upload.onprogress = function(event) {
                        var lengthComputable = event.lengthComputable, loaded = event.loaded, event = event.total, lengthComputable = Math.round(lengthComputable ? 100 * loaded / event : 0);
                        onProgress(items, lengthComputable);
                    };
                    xhr.onload = function() {
                        var response = xhr.response, status = xhr.status;
                        (!function(status) {
                            return 200 <= status && status < 300 || 304 === status;
                        }(status) ? onError : onSuccess)(items, response, status);
                        onComplete(items, response, status);
                    };
                    xhr.onerror = function() {
                        var response = xhr.response, status = xhr.status;
                        onError(items, response, status);
                        onComplete(items, response, status);
                    };
                    xhr.onabort = function() {
                        var response = xhr.response, status = xhr.status;
                        onCancel(items, response, status);
                        onComplete(items, response, status);
                    };
                    xhr.open(items[0].method, items[0].url, !0);
                    _.forEach(items[0].headers, function(value, key) {
                        xhr.setRequestHeader(key, value);
                    });
                    xhr.send(formDataObj);
                    for (i = 0; i < items.length; i++) items[i].isUploading = !0;
                } : function(items) {
                    function addFile() {
                        for (var i = 0; i < items.length; i++) {
                            ($inputSubmit = $(items[i]._input)).attr('name', items[i].alias);
                            $inputSubmit.after($form);
                            $form.append($inputSubmit);
                        }
                    }
                    function addFormData() {
                        var $formDataDomItem;
                        _.forEach(items[0].formData, function(value, key) {
                            ($formDataDomItem = $('<input type="hidden" name="' + key + '" />')).val(value);
                            $form.append($formDataDomItem);
                        });
                    }
                    var $form, j, $iframe, progressInterval, $inputSubmit = $(items[0]._input);
                    items._form && items._form.replaceWith($inputSubmit);
                    $form = $('<form style="display: none;"></form>');
                    for (j = 0; j < items.length; j++) items[j]._form = $form;
                    if (items[0].isFormDataFirst) {
                        addFormData();
                        addFile();
                    } else {
                        addFile();
                        addFormData();
                    }
                    $iframe = $('<iframe name="tiFileIframe' + $.guid++ + '"></iframe>');
                    $form.attr({
                        'action': items[0].url,
                        'method': items[0].method,
                        'target': $iframe.attr('name'),
                        'enctype': 'multipart/form-data'
                    });
                    $form.append($iframe);
                    $form[0].submit();
                    0;
                    progressInterval = setInterval(function() {
                        onProgress(items, 2);
                    }, 10);
                    $iframe.on('load', function() {
                        var response = '', status = 200;
                        clearInterval(progressInterval);
                        try {
                            response = $iframe[0].contentDocument.body.innerHTML;
                            onSuccess(items, response, status);
                        } catch (e) {
                            onError(items, response = e, status = 520);
                        }
                        onComplete(items, response, status);
                    });
                    $form.abort = function() {
                        clearInterval(progressInterval);
                        $iframe.off('load');
                        $form.replaceWith($inputSubmit);
                        onCancel(items, void 0, 0);
                        onComplete(items, void 0, 0);
                    };
                })(items);
                render();
            }
            function cancelItem(items) {
                var i;
                for (i = 0; i < items.length; i++) {
                    if (!isValidFileItem(items[i])) return;
                    items[i].isCancel = !0;
                }
                if (items[0].isUploading) (isHTML5 ? items[0]._xhr : items[0]._form).abort(); else {
                    0;
                    onCancel(items, void 0, 0);
                    onComplete(items, void 0, 0);
                }
            }
            function onProgress(items, progress) {
                var onProgressItem, i;
                if (1 === items.length) {
                    onProgressItem = items[0].uploader.onProgressItem;
                    _.isFunction(onProgressItem) && onProgressItem(items[0], progress);
                } else {
                    onProgressItem = items[0].uploader.onProgressItems;
                    _.isFunction(onProgressItem) && onProgressItem(items, progress);
                }
                onProgressItem = items[0].onProgress;
                _.isFunction(onProgressItem) && onProgressItem(progress);
                for (i = 0; i < items.length; i++) items[i].progress = progress;
                render();
            }
            function onSuccess(items, response, status) {
                var i, onSuccessItem;
                for (i = 0; i < items.length; i++) {
                    items[i].isReady = !1;
                    items[i].isUploading = !1;
                    items[i].isUploaded = !0;
                    items[i].isSuccess = !0;
                    items[i].isError = !1;
                    items[i].isCancel = !1;
                    items[i].progress = 100;
                }
                if (1 === items.length) {
                    onSuccessItem = items[0].uploader.onSuccessItem;
                    _.isFunction(onSuccessItem) && onSuccessItem(items[0], response, status);
                } else {
                    onSuccessItem = items[0].uploader.onSuccessItems;
                    _.isFunction(onSuccessItem) && onSuccessItem(items, response, status);
                }
                onSuccessItem = items[0].onSuccess;
                _.isFunction(onSuccessItem) && onSuccessItem(response, status);
            }
            function onError(items, response, status) {
                var i, onErrorItem;
                for (i = 0; i < items.length; i++) {
                    items[i].isReady = !1;
                    items[i].isUploading = !1;
                    items[i].isUploaded = !0;
                    items[i].isSuccess = !1;
                    items[i].isError = !0;
                    items[i].isCancel = !1;
                    items[i].progress = 0;
                }
                if (1 === items.length) {
                    onErrorItem = items[0].uploader.onErrorItem;
                    _.isFunction(onErrorItem) && onErrorItem(items[0], response, status);
                } else {
                    onErrorItem = items[0].uploader.onErrorItems;
                    _.isFunction(onErrorItem) && onErrorItem(items, response, status);
                }
                onErrorItem = items[0].onError;
                _.isFunction(onErrorItem) && onErrorItem(response, status);
            }
            function onComplete(items, response, status) {
                var i, readyItemsArr;
                for (i = 0; i < items.length; i++) items[i].isUploading = !1;
                if ((readyItemsArr = items[0].uploader.getReadyItems()) && 0 !== readyItemsArr.length) uploadItem([ readyItemsArr[0] ]); else if (1 === items.length) {
                    readyItemsArr = items[0].uploader.onCompleteAll;
                    _.isFunction(readyItemsArr) && readyItemsArr(items[0], response, status);
                } else {
                    readyItemsArr = items[0].uploader.onCompleteAllItems;
                    _.isFunction(readyItemsArr) && readyItemsArr(items, response, status);
                }
                if (1 === items.length) {
                    readyItemsArr = items[0].uploader.onCompleteItem;
                    _.isFunction(readyItemsArr) && readyItemsArr(items[0], response, status);
                } else {
                    readyItemsArr = items[0].uploader.onCompleteItems;
                    _.isFunction(readyItemsArr) && readyItemsArr(items, response, status);
                }
                readyItemsArr = items[0].onComplete;
                _.isFunction(readyItemsArr) && readyItemsArr(response, status);
                render();
            }
            function onCancel(items, response, status) {
                var i, onCancelItem;
                for (i = 0; i < items.length; i++) {
                    items[i].isReady = !1;
                    items[i].isUploading = !1;
                    items[i].isUploaded = !1;
                    items[i].isSuccess = !1;
                    items[i].isError = !1;
                    items[i].isCancel = !0;
                    items[i].progress = 0;
                }
                if (1 === items.length) {
                    onCancelItem = items[0].uploader.onCancelItem;
                    _.isFunction(onCancelItem) && onCancelItem(items[0], response, status);
                } else {
                    onCancelItem = items[0].uploader.onCancelItems;
                    _.isFunction(onCancelItem) && onCancelItem(items, response, status);
                }
                onCancelItem = items[0].onCancel;
                _.isFunction(onCancelItem) && onCancelItem(response, status);
            }
            return {
                'uploadItem': uploadItem,
                'cancelItem': cancelItem,
                'removeItem': function(items) {
                    var i, j, itemsArr = angular.copy(items);
                    for (i = 0; i < items.length; i++) if (!isValidFileItem(items[i])) return;
                    items[0].isUploading && cancelItem(items);
                    for (j = 0; j < items.length; j++) {
                        items[j].uploader.queue.splice(getItemIndex(items[j]), 1);
                        itemsArr[j].destroy();
                    }
                    (function(items) {
                        var onRemoveItem;
                        if (1 === items.length) {
                            onRemoveItem = items[0].uploader.onRemoveItem;
                            _.isFunction(onRemoveItem) && onRemoveItem(items[0]);
                        } else {
                            onRemoveItem = items[0].uploader.onRemoveItems;
                            _.isFunction(onRemoveItem) && onRemoveItem(items);
                        }
                        onRemoveItem = items[0].onRemove;
                        _.isFunction(onRemoveItem) && onRemoveItem();
                    })(itemsArr);
                }
            };
        } ]);
        hwUploadMobileModule.factory('$tiFileItem', [ '$tiUpload', 'tiTipService', function($tiUpload, tiTipService) {
            function formatSize(size) {
                var kbSize = size / 1024;
                return kbSize < 1 ? size.toFixed(2) + 'B' : kbSize < 1024 ? kbSize.toFixed(2) + 'KB' : kbSize < 1048576 ? (kbSize / 1024).toFixed(2) + 'MB' : (kbSize / 1024 / 1024).toFixed(2) + 'GB';
            }
            return {
                'createFileItem': function(tifileObject, fileOrInput, options, uploader) {
                    var _file = null, _input = null;
                    angular.isElement(fileOrInput) ? _input = $(fileOrInput) : _file = fileOrInput;
                    return {
                        'url': options.url || '/',
                        'file': tifileObject,
                        'alias': options.alias || 'tiFile',
                        '_file': _file,
                        '_input': _input,
                        'formData': options.formData || {},
                        'isFormDataFirst': options.isFormDataFirst || !1,
                        'headers': options.headers || {},
                        'method': options.method || 'post',
                        'isBatchSend': options.isBatchSend || !1,
                        'uploader': uploader,
                        'upload': function() {
                            $tiUpload.uploadItem([ this ]);
                        },
                        'cancel': function() {
                            $tiUpload.cancelItem([ this ]);
                        },
                        'remove': function() {
                            $tiUpload.removeItem([ this ]);
                        },
                        'destroy': function() {
                            this._input && this._input.remove();
                            this._form && this._form.remove();
                            this._input = null;
                            this._form = null;
                        },
                        'mouseenter': function(event) {
                            var $tipContent, $tipName, $tipSize;
                            if (this.disable) return;
                            this.isHover = !0;
                            $tipName = $('<span class="ti-aui-file-tip-name">' + this.file.name + '</span>');
                            $tipSize = $('<div class="ti-aui-file-tip-size"><span>(</span><span>' + this.file.sizeWithUnit + '</span><span>)</span></div>');
                            ($tipContent = $('<div class = "ti-aui-file-tip-content"></div>')).append($tipName);
                            $tipContent.append($tipSize);
                            if (this.isError) {
                                $tipName = this.errorInfo || '';
                                $tipSize = $('<div class="ti-aui-file-tip-error"><span class="ti-aui-file-tip-error-icon ti-icon ti-icon-exclamation-circle"></span></div>');
                                $tipName = $('<span class="ti-aui-file-tip-error-msg"></span>').html($tipName);
                                $tipContent.append($tipSize.append($tipName));
                            }
                            ($tipSize = $(event.currentTarget))[0].tiTooltip || ($tipSize[0].tiTooltip = tiTipService.createTip($tipSize, {
                                'position': 'top-left',
                                'triggerEvent': 'none',
                                'maxWidth': 'auto',
                                'content': ''
                            }));
                            $tipSize[0].tiTooltip.show({
                                'content': $tipContent
                            });
                        },
                        'mouseleave': function(event) {
                            this.isHover = !1;
                            (event = $(event.currentTarget))[0].tiTooltip && event[0].tiTooltip.hide();
                        },
                        'isReady': !1,
                        'isUploading': !1,
                        'isUploaded': !1,
                        'isCancel': !1,
                        'isSuccess': !1,
                        'isError': !1
                    };
                },
                'createFileObject': function(fileThis) {
                    var path, fileSize, fileObject = {};
                    if (angular.isElement(fileThis)) {
                        path = fileThis.value;
                        fileObject = {
                            'lastModifiedDate': null,
                            'size': fileSize = _.isUndefined(fileThis.size) ? null : fileThis.size,
                            'sizeWithUnit': _.isNaN(fileSize) ? '' : formatSize(fileSize / 1024),
                            'name': path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2),
                            'type': path.slice(path.lastIndexOf('.') + 1).toLowerCase(),
                            '_file': null,
                            '_input': $(fileThis)
                        };
                    } else {
                        fileSize = fileThis.name;
                        fileObject = {
                            'lastModifiedDate': fileThis.lastModifiedDate,
                            'size': fileThis.size,
                            'sizeWithUnit': formatSize(fileThis.size),
                            'name': fileThis.name,
                            'type': fileSize.slice(fileSize.lastIndexOf('.') + 1).toLowerCase(),
                            '_file': fileThis,
                            '_input': null
                        };
                    }
                    return fileObject;
                }
            };
        } ]);
        hwUploadMobileModule.factory('tiFileUploader', [ '$rootScope', '$tiFileItem', '$tiUpload', function($rootScope, $tiFileItem, $tiUpload) {
            var filterRules = {
                'maxSize': function(fileObj, params) {
                    fileObj = fileObj.size;
                    if (!_.isNumber(fileObj)) return !0;
                    return !(fileObj > params[0]);
                },
                'minSize': function(fileObj, params) {
                    fileObj = fileObj.size;
                    if (!_.isNumber(fileObj)) return !0;
                    return !(fileObj < params[0]);
                },
                'fileType': function(fileObj, params) {
                    var i, len, typeArray = params[0].split(','), fileName = fileObj.name, isValidType = !1;
                    for (i = 0, len = typeArray.length; i < len; i++) if (null !== fileName.match(new RegExp('.(' + typeArray[i].replace(/\./g, '\\.') + ')$', 'i'))) {
                        isValidType = !0;
                        break;
                    }
                    return isValidType;
                },
                'maxCount': function(fileObj, params) {
                    return !(this.length >= params[0]);
                }
            };
            return {
                'createUploader': function(options) {
                    function getNotUploadedItems() {
                        return fileQueue.filter(function(item) {
                            return !item.isUploaded;
                        });
                    }
                    function uploadItems(items) {
                        var i, len = items.length;
                        if (0 === len) return;
                        for (i = 0; i < len; i++) items[i].isReady = !0;
                        items[0].isBatchSend ? $tiUpload.uploadItem(items) : $tiUpload.uploadItem([ items[0] ]);
                    }
                    var uploader = {}, fileQueue = [], fileIndex = 0, filters = options.filters || [], isSingleFile = function(filtersArr) {
                        var maxCountIndex = _.findIndex(filtersArr, {
                            'name': 'maxCount'
                        });
                        if (-1 === maxCountIndex) return !1;
                        return 1 === filtersArr[maxCountIndex].params[0];
                    }(filters);
                    filters = function(rules) {
                        if (isSingleFile) return _.reject(rules, function(obj) {
                            return 'maxCount' === obj.name;
                        });
                        return rules;
                    }(filters);
                    return uploader = {
                        'queue': fileQueue,
                        'isSingleFile': isSingleFile,
                        'options': options,
                        'addToQueue': function(files) {
                            var tifileObject, invalidArr, fileOrInput, i, len, addedItems = [], isValid = !1;
                            for (i = 0, len = files.length; i < len; i++) {
                                fileOrInput = files[i];
                                isValid = !(invalidArr = function(tifileObject, filtersRules) {
                                    var invalidRetArr, filterConfig, filterName, ruleFn, i, filterLen = filtersRules.length;
                                    if (0 === filterLen) return [];
                                    invalidRetArr = [];
                                    for (i = 0; i < filterLen; i++) {
                                        filterConfig = filtersRules[i];
                                        filterName = filterConfig.name;
                                        ruleFn = _.has(filterRules, filterName) ? filterRules[filterName] : filterConfig.fn;
                                        _.isFunction(ruleFn) && !ruleFn.call(fileQueue, tifileObject, filterConfig.params) && invalidRetArr.push(filterName);
                                    }
                                    return invalidRetArr;
                                }(tifileObject = $tiFileItem.createFileObject(fileOrInput), filters)).length;
                                if (isSingleFile) {
                                    fileQueue[0] && fileQueue[0].remove();
                                    0 === invalidArr.length && (isValid = !0);
                                }
                                if (isValid) {
                                    fileOrInput = $tiFileItem.createFileItem(tifileObject, fileOrInput, options, uploader);
                                    addedItems.push(fileOrInput);
                                    fileQueue.push(fileOrInput);
                                    fileOrInput.index = ++fileIndex;
                                    _.isFunction(options.onAddItemSuccess) && options.onAddItemSuccess(fileOrInput);
                                } else _.isFunction(options.onAddItemFailed) && options.onAddItemFailed(tifileObject, invalidArr);
                            }
                            $rootScope.$evalAsync();
                            return addedItems;
                        },
                        'getNotUploadedItems': getNotUploadedItems,
                        'getReadyItems': function() {
                            return fileQueue.filter(function(item) {
                                return item.isReady && !item.isUploading;
                            }).sort(function(item1, item2) {
                                return item1.index - item2.index;
                            });
                        },
                        'uploadAll': function() {
                            uploadItems(getNotUploadedItems().filter(function(item) {
                                return !item.isUploading;
                            }));
                        },
                        'isUploadedAll': function() {
                            return 0 === getNotUploadedItems().filter(function(item) {
                                return !item.isUploading;
                            }).length;
                        },
                        'removeAll': function() {
                            for (;0 !== this.queue.length; ) this.queue[0].remove();
                        },
                        'cancelAll': function() {
                            var items = this.getNotUploadedItems();
                            _.forEach(items, function(item) {
                                item.cancel();
                            });
                        },
                        'reloadAll': function() {
                            uploadItems(fileQueue);
                        },
                        'reloadAllError': function() {
                            uploadItems(fileQueue.filter(function(item) {
                                return item.isError;
                            }).sort(function(item1, item2) {
                                return item1.index - item2.index;
                            }));
                        },
                        'uploadItems': uploadItems,
                        'removeItems': function(items) {
                            if (items[0].isBatchSend) $tiUpload.removeItem(items); else for (;0 !== items.length; ) items[0].remove();
                        },
                        'cancelItems': function(items) {
                            if (items[0].isBatchSend) $tiUpload.cancelItem(items); else for (var i = 0, len = items.length; i < len; i++) $tiUpload.cancelItem([ items[i] ]);
                        },
                        'onBeforeSendItem': options.onBeforeSendItem,
                        'onProgressItem': options.onProgressItem,
                        'onSuccessItem': options.onSuccessItem,
                        'onErrorItem': options.onErrorItem,
                        'onCancelItem': options.onCancelItem,
                        'onRemoveItem': options.onRemoveItem,
                        'onCompleteItem': options.onCompleteItem,
                        'onCompleteAll': options.onCompleteAll,
                        'onBeforeSendItems': options.onBeforeSendItems,
                        'onProgressItems': options.onProgressItems,
                        'onSuccessItems': options.onSuccessItems,
                        'onErrorItems': options.onErrorItems,
                        'onCancelItems': options.onCancelItems,
                        'onCompleteItems': options.onCompleteItems,
                        'onCompleteAllItems': options.onCompleteAllItems,
                        'onRemoveItems': options.onRemoveItems
                    };
                }
            };
        } ]);
        return hwUploadMobileModule;
    });
    define('mobile/lib/mobile-libcomponent.tpls', [ 'm-lib/component/hwUploadMobile' ], function(module) {
        module.run([ '$templateCache', function($templateCache) {
            $templateCache.put('lib/component/hwUploadMobile.html', '<div><div class="ti-file-upload-container" ng-if="type === \'button\'"><div class="ti-btn ti-btn-default ti-file-btn" ng-disabled="styleOptions.disable"><input class="ti-file-input" type="file" ti-file-select="uploadInst" title="{{title}}" accept="{{accept}}" ng-disabled="styleOptions.disable"> <span class="ti-file-text" ng-bind="text"></span></div></div></div>');
        } ]);
        return module;
    });
    define('m-app/framework/framework', [ 'framework.tpls', 'app/business/mobile/services/mobileMaskService', 'app-remote/services/httpService', 'app-remote/services/cookieService', 'app-remote/services/exceptionService', 'app-remote/framework/controllers/serviceCtrl', 'app-remote/framework/services/frameworkService', 'app-remote/services/utilService', 'app-remote/services/messageService', 'language-remote/framework', 'app/framework/configures/frameworkRouterConfig', 'app/business/controllers/mIndexCtrl', 'app/business/services/validatorService', 'mobile/mobile-business.tpls', 'language/v1r2', 'app/business/mobile/configures/mobileRouterConfig', 'app-remote/services/msgService', 'mobile/lib/mobile-libcomponent.tpls' ], function(hws, mask, http, storage, exception, serviceCtrl, frameworkServ, utilService, msgService, i18n, frameworkConfig, mIndexCtrl, validator, hwsFilter, csbi18n, mobileConfig, csbMessage, hwUploadMobile) {
        var framework, locale, frameworkConfig = [ 'ng', 'ngAnimate', 'ui.router', 'hws', 'hwsFilter', 'hwUploadMobile', frameworkConfig.name, mobileConfig.name ];
        frameworkConfig = frameworkConfig.concat(getAddiModuleNames());
        (framework = angular.module('framework', frameworkConfig)).value('globalRegionName', 'userCenter');
        framework.value('endpointId', 'usercenter_center');
        framework.value('currentService', '');
        framework.value('favoriteServiceMax', 10);
        framework.value('heartbeatInterval', 3e5);
        framework.value('sharedProperties', {});
        framework.controller('serviceCtrl', serviceCtrl);
        framework.controller('mIndexCtrl', mIndexCtrl);
        framework.service('mask', mask);
        framework.service('camel', http);
        framework.service('exception', exception);
        framework.service('storage', storage);
        framework.service('frameworkService', frameworkServ);
        framework.service('utilService', utilService);
        framework.service('msgService', msgService);
        framework.service('localeService', function() {
            return {
                'getZoneSuffix': function(object) {
                    return;
                }
            };
        });
        framework.service('validator', validator);
        framework.service('csbMessage', [ '$ionicPopup', '$rootScope', '$filter', 'camel', function($ionicPopup, $rootScope, $filter, camel) {
            return {
                'oneBtnMsg': function(options) {
                    $ionicPopup.confirm({
                        'title': options.title || csbi18n.promptInfo_prompt,
                        'template': options.message || '',
                        'okText': options.okText || csbi18n.commonBtn_sure,
                        'okType': 'button-csbok',
                        'cancelText': options.cancelText || csbi18n.commonBtn_cancel,
                        'cancelType': 'button-csbcancel'
                    }).then(function(res) {
                        options.callback && options.callback();
                    });
                },
                'doException': function(object) {},
                'alert': function(options) {
                    $ionicPopup.alert({
                        'title': options.title || '提示',
                        'template': options.message || '',
                        'okText': options.okText || csbi18n.commonBtn_sure,
                        'okType': 'button-csb'
                    }).then(function(res) {
                        options.callback && options.callback();
                    });
                },
                'parseToUTCTime': function(time) {
                    if (time) {
                        time = time.replace(/-/g, '/');
                        time = new Date(time);
                    } else time = new Date();
                    return $filter('date')(time, 'yyyy-MM-ddTHH:mm:ss\'Z\'', 'UTC');
                },
                'trimEmpty': function(value) {
                    if (!value) return '';
                    return value.replace(/(^\s*)|(\s*$)/g, '');
                },
                'getCookie': function(key) {
                    var consoleCookies, cookie, i;
                    if (!document.cookie) return null;
                    consoleCookies = document.cookie.split(';');
                    for (i = 0; i < consoleCookies.length; i++) if ((cookie = consoleCookies[i].split('=')) && 2 <= cookie.length && key === this.trimEmpty(cookie[0])) return this.trimEmpty(cookie[1]);
                },
                'postUOR': function(eventCategory, eventAction, eventLabel, eventValue, jsonParam) {
                    var tmp, tmpVisitKey = this.getCookie('vk');
                    try {
                        tmp = {
                            'visitKey': tmpVisitKey || 'noVisitKey',
                            'eventCategory': eventCategory ? String(eventCategory).substr(0, 256) : '',
                            'eventAction': eventAction ? String(eventAction).substr(0, 256) : '',
                            'eventLabel': eventLabel ? String(eventLabel).substr(0, 256) : '',
                            'eventValue': eventValue ? String(eventValue).substr(0, 256) : '',
                            'customerId': $rootScope.domainId || '',
                            'currentUrl': window.location.href.substr(0, 256),
                            'createTime': this.parseToUTCTime(),
                            'clientIp': '',
                            'fromUrl': document.referrer ? document.referrer.substr(0, 512) : '',
                            'userAgent': navigator.userAgent.substr(0, 1024),
                            'jsonParam': jsonParam ? jsonParam.substr(0, 2048) : ''
                        };
                        return camel.post({
                            'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/util/uor',
                            'timeout': 6e4,
                            'params': tmp,
                            'beforeSend': function(request) {
                                request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                            }
                        });
                    } catch (error) {}
                    return !1;
                },
                'checkPostUOR': function(eventCategory, eventAction, eventLabel, eventValue, jsonParam) {
                    return !!/activityPersonalAuth|activityPersonalTestAuth|videoH5|videoOnePageH5|entVideoH5|photographingFace|mAuthorization|developerAuth/i.test(window.location.href) && this.postUOR(eventCategory, eventAction, eventLabel, eventValue, jsonParam);
                }
            };
        } ]);
        framework.service('tiModal', function() {
            return {};
        });
        framework.service('tiValid', function() {
            return {
                'check': function(object) {}
            };
        });
        framework.service('tiMessage', function() {
            return {
                'open': function(object) {}
            };
        });
        framework.service('tiTipService', function() {
            return {
                'setDefaults': function(object) {}
            };
        });
        window.appWebPath = '/usercenter';
        try {
            -1 === window.location.pathname.indexOf('/usercenter/') && (window.appWebPath = window.appWebPath.replace(/usercenter/, window.location.pathname.split('/')[1]));
        } catch (e) {}
        window.global_endpoint_id = '';
        window.app_cookie_prefix = '';
        window.app_enable_framework_503 = !1;
        framework.config([ '$controllerProvider', '$compileProvider', '$sceDelegateProvider', function($controllerProvider, $compileProvider, $sceDelegateProvider) {
            framework.controllerProvider = $controllerProvider;
            framework.compileProvider = $compileProvider;
            $sceDelegateProvider.resourceUrlWhitelist([ 'self', 'https://console-static.huaweicloud.com/static/**', 'https://uc-static.huaweicloud.com/usercenter/**', 'https://uc-static-intl.huaweicloud.com/usercenter/**', 'https://res.hc-cdn.com/**', 'https://static-resource.obs.cn-north-1.myhwclouds.com/**', 'https://test-static-resource.obs.cn-north-1.myhwclouds.com/**', 'https://static-resource.obs.cn-north-7.ulanqab.huawei.com/**' ]);
        } ]);
        framework.run([ '$rootScope', '$timeout', 'csbMessage', function($rootScope, $timeout, csbMessage) {
            var jsonParamInit, isTest;
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                'function' == typeof ha && $timeout(function() {
                    ha('setAutoSendPV', !1);
                    ha('set', {
                        'url': location.href
                    });
                    ha('trackPageView', {
                        'page_hierarchy': 'c:{' + toState.name.replace(/\./g, '/') + '}'
                    });
                }, 1);
            });
            $rootScope.supportMultiProject = !0;
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                if (options.url.match(/.(json|js|html)$/)) {
                    delete options.headers;
                    delete originalOptions.contentType;
                    return;
                }
                if (options.headers) {
                    options.headers['X-Channel-From'] = 'usercenter';
                    options.headers['X-EnvType'] = window.x_env_type;
                }
            });
            jsonParamInit = {
                'UserAccount': domainId && '$domainId$' != domainId ? domainId : 'host',
                'isdebug': !0
            };
            //$.getScript('https://res-static.hc-cdn.cn/aem/content/dam/cloudbu-site/archive/commons/apm/wise_trace.min.js', function() {});
            isTest = -1 < window.iam_url_auth.indexOf('ulanqab.huawei');
            $.getScript(isTest ? 'https://100.94.30.197/sdk/uba.js' : 'https://res.hc-cdn.com/bi/alpha/uba.js', function() {
                function getPageTitle() {
                    var arr = (location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?');
                    return arr && arr[0];
                }
                function checkValidate(targetElement) {
                    var jqEvents = $._data(targetElement, 'events'), flag_href = !!$(targetElement).attr('href'), flag_onclick = !!targetElement.onclick, jqEvents = jqEvents && jqEvents.click && jqEvents.click.length > jqEvents.click.delegateCount, flag_jqClick2 = !!$(targetElement).attr('ng-click') || !!$(targetElement).attr('on-tap'), flag_angularClick = !!$(targetElement).attr('ng-mouseenter'), flag_fileClick = $(targetElement).hasClass('ti-file-input') || 'file' == $(targetElement).attr('type'), targetElement = $(targetElement).hasClass('ti-radio-skin') || $(targetElement).hasClass('ti-radio-label');
                    return flag_href || flag_onclick || jqEvents || flag_angularClick || targetElement || flag_fileClick || flag_jqClick2;
                }
                function checkFocusout() {
                    var textTypeFlag = 'text' != $(event.target).attr('type') && 'textarea' != $(event.target)[0].type, topSearchFlag = $(event.target).hasClass('top-search-input');
                    return textTypeFlag || topSearchFlag || $(event.target)[0].value;
                }
                var clickTimeStamp;
                init(2, 'c9770c4dac06fe3b76ec9c7ad47273d0', 'UA-55836286-1', jsonParamInit);
                $rootScope.$broadcast('cloudbiOK');
                $(document).on('click', 'button,.ti-file-upload-container input,.service-content-view span,.service-content-view a,[bi_name],.service-content-view [ng-click],[on-tap],[ng-click]', function(event) {
                    var pagetitle, parent_title, eventCategory, eventLabel, bi_name, site_name, mate_data_ts, click_data_ts, jsonParamEvent;
                    if (event && clickTimeStamp !== event.timeStamp && 'BODY' != event.currentTarget.nodeName) try {
                        if (!function(event) {
                            var targets, target, targetElement, up_num = 4, flag = !1;
                            if (event && event.target) if (flag = checkValidate(event.target)) 'true' == $(event.target).attr('disable') && (flag = !1); else {
                                targets = [ event.target ];
                                for (;targets.length; ) {
                                    up_num--;
                                    target = targets.shift();
                                    !(flag = checkValidate(targetElement = $(target).parent().get(0))) && 0 < up_num && targets.push(targetElement);
                                    flag && $(target).hasClass('cti-btn-disable') && (flag = !1);
                                }
                            }
                            return flag;
                        }(event)) return;
                        clickTimeStamp = event.timeStamp;
                        pagetitle = document.title;
                        pagetitle = getPageTitle() + '_' + pagetitle;
                        parent_title = site_name = '';
                        mate_data_ts = 'app_' + (site_name = site && customiseVer && site[customiseVer] ? site[customiseVer] + '_' : site_name) + 'zh-cn' + pagetitle;
                        click_data_ts = '';
                        $(this).closest('[bi_parent_name]') && (parent_title = $.trim($(this).closest('[bi_parent_name]').attr('bi_parent_name')));
                        (bi_name = (bi_name = $(event.target).attr('bi_name')) || $(event.target).closest('div[bi_name]').attr('bi_name')) ? click_data_ts = bi_name : $.trim(this.innerText) ? click_data_ts = $.trim(this.innerText) : (click_data_ts = function eachchild(dom, click_data_ts) {
                            $.each(dom.childNodes, function() {
                                if (3 === this.nodeType && $.trim(this.innerText)) return click_data_ts += $.trim(this.innerText), 
                                !1;
                                eachchild(this, click_data_ts);
                            });
                            return click_data_ts;
                        }(this, click_data_ts)) || this.parentNode && this.parentNode.innerText && (click_data_ts = $.trim(this.parentNode.innerText));
                        click_data_ts = (click_data_ts = parent_title ? parent_title + '_' + click_data_ts : click_data_ts) && click_data_ts.replace(/(\s*)/g, '');
                        eventCategory = mate_data_ts;
                        eventLabel = click_data_ts;
                        (jsonParamEvent = {}).C1 = $rootScope.domainId || '';
                        onEvent(eventCategory, 'click', eventLabel, 1, jsonParamEvent);
                        csbMessage.checkPostUOR(eventCategory, 'click', eventLabel, 1, JSON.stringify(jsonParamEvent));
                    } catch (e) {}
                });
                $(document).on('focusout', 'input', function(event) {
                    var pagetitle, win_title, parent_title, eventCategory, eventLabel, site_name, mate_data_ts, click_data_ts, jsonParamEvent;
                    if (event && clickTimeStamp !== event.timeStamp) try {
                        if (!checkFocusout()) return;
                        $(event.target).hasClass('ti-head-filter-container') && $.trim($(event.target).parents('th').text());
                        clickTimeStamp = event.timeStamp;
                        pagetitle = document.title;
                        pagetitle = getPageTitle() + '_' + pagetitle;
                        $(this).parents('.ti-modal-dialog').find('.ti-modal-header') && (win_title = $.trim($(this).parents('.ti-modal-dialog').find('.ti-modal-header').text()));
                        $(this).closest('[bi_parent_name]') && (parent_title = $.trim($(this).closest('[bi_parent_name]').attr('bi_parent_name')));
                        site_name = '';
                        mate_data_ts = 'app_auto_' + (site_name = site && customiseVer && site[customiseVer] ? site[customiseVer] + '_' : site_name) + 'zh-cn' + pagetitle;
                        click_data_ts = '';
                        click_data_ts = $(event.target).attr('bi_name') || $(event.target).parent([ 'bi_name' ]).attr('bi_name') || $(event.target).attr('id') || click_data_ts;
                        parent_title && (click_data_ts = parent_title + '_' + click_data_ts);
                        click_data_ts = (click_data_ts = win_title ? win_title + '_' + click_data_ts : click_data_ts) && click_data_ts.replace(/(\s*)/g, '');
                        eventCategory = mate_data_ts;
                        eventLabel = click_data_ts;
                        (jsonParamEvent = {}).C1 = $rootScope.domainId || '';
                        if (!$(event.target).parents('[no_auto_bi]').length) {
                            onEvent(eventCategory, 'input_' + eventLabel, eventLabel, 1, jsonParamEvent);
                            csbMessage.checkPostUOR(eventCategory, 'input_' + eventLabel, eventLabel, 1, JSON.stringify(jsonParamEvent));
                        }
                    } catch (e) {}
                });
            });
        } ]).factory('$exceptionHandler', function() {
            return function(exception, cause) {
                PMP && PMP.RavenSendException(exception, cause, 'error', {});
                throw exception;
            };
        });
        mobileConfig = angular.injector([ 'ng' ]).get('$locale');
        locale = $.extend(!0, mobileConfig, i18n.localeRule, csbi18n.localeRule);
        angular.module('ngLocale').config(function($provide) {
            $provide.value('$locale', locale);
        });
        return framework;
    });
    define('app/business/mobile/services/mobileCommonService', [ 'language/usercenter', 'language/v1r2', 'language/order', 'language/mobile', 'language/errMsg', 'language/common', 'https://res.hc-cdn.com/cnpm-ua-parser/2.0.13/UaParser.index.umd.js', 'https://res.hc-cdn.com/cnpm-ua-parser/2.0.13/UaParser.deviceHuaweiPlugin.umd.js' ], function(i18user, i18v1r2, i18order, i18mobile, i18Err, i18common, UAParser, deviceHuaweiPlugin) {
        var service = [ '$rootScope', '$ionicPopup', '$filter', '$state', '$ionicPopover', '$timeout', '$ionicLoading', 'csbMessage', function($rootScope, $ionicPopup, $filter, $state, $ionicPopover, $timeout, $ionicLoading, csbMessage) {
            this.initLanguage = function() {
                $rootScope.i18v1r2 || ($rootScope.i18v1r2 = i18v1r2);
                $rootScope.i18mobile || ($rootScope.i18mobile = i18mobile);
                $rootScope.i18user || ($rootScope.i18user = i18user);
                $rootScope.i18order || ($rootScope.i18order = i18order);
                $rootScope.i18Err || ($rootScope.i18Err = i18Err);
                $rootScope.i18common || ($rootScope.i18common = i18common);
                this.isAppHideHtml();
            };
            this.mobileAlert = function(title, content, callBack, buttontxt) {
                title = title || $rootScope.i18mobile.system_alert_alert;
                buttontxt = buttontxt || $rootScope.i18mobile.system_alert_button_ok;
                $ionicPopup.alert({
                    'title': title,
                    'template': content = content || '',
                    'okText': buttontxt
                }).then(function(res) {
                    callBack && callBack();
                });
            };
            this.mobilePopOver = function($scope, content, timeout, callBack) {
                if (!$scope.popover) {
                    $scope.popover = $ionicPopover.fromTemplate('<ion-popover-view id=\'popovercontent\'></ion-popover-view>', {
                        'scope': $scope
                    });
                    $scope.$on('$destroy', function() {
                        $scope.popover.remove();
                    });
                    $scope.$on('popover.hidden', function() {});
                    $scope.$on('popover.removed', function() {});
                }
                $scope.openPopover = function($event) {
                    $scope.popover.show($event);
                };
                $scope.closePopover = function() {
                    callBack && callBack();
                    $scope.popover.hide();
                };
                $scope.openPopover();
                $('#popovercontent').text(content);
                timeout && $timeout(function() {
                    $scope.closePopover();
                }, 1e3 * timeout);
            };
            this.mobileConfirm = function(title, content, okCallBack, cancelCallBack, buttonoktxt, buttoncanceltxt) {
                title = title || $rootScope.i18mobile.system_alert_alert;
                buttonoktxt = buttonoktxt || $rootScope.i18mobile.system_alert_button_ok;
                buttoncanceltxt = buttoncanceltxt || $rootScope.i18mobile.system_alert_button_cancel;
                $ionicPopup.confirm({
                    'title': title,
                    'template': content = content || null,
                    'okText': buttonoktxt,
                    'okType': 'button-csbok',
                    'cancelText': buttoncanceltxt,
                    'cancelType': 'button-csbcancel',
                    'cssClass': 'mobileConfirmTwoButton'
                }).then(function(res) {
                    res ? okCallBack && okCallBack() : cancelCallBack && cancelCallBack();
                });
            };
            this.mobileConfirmNoTitle = function(options) {
                options.content || (options.content = null);
                options.buttonoktxt || (options.buttonoktxt = $rootScope.i18mobile.system_alert_button_ok);
                options.buttoncanceltxt || (options.buttoncanceltxt = $rootScope.i18mobile.system_alert_button_cancel);
                $ionicPopup.confirm({
                    'template': options.content,
                    'okText': options.buttonoktxt,
                    'okType': 'button-csbok',
                    'cancelText': options.buttoncanceltxt,
                    'cancelType': 'button-csbcancel',
                    'cssClass': 'mobileConfirmTwoButton'
                }).then(function(res) {
                    res ? options.okCallBack && options.okCallBack() : options.cancelCallBack && options.cancelCallBack();
                });
            };
            this.mobileAlertOneButton = function(content, title, buttontxt, callBack, type) {
                title = title || $rootScope.i18mobile.system_alert_alert;
                buttontxt = buttontxt || $rootScope.i18mobile.system_alert_button_ok;
                var myPopup = $ionicPopup.show({
                    'title': title,
                    'template': content = content || '',
                    'scope': $rootScope,
                    'cssClass': 'mobileAlertOneButton',
                    'buttons': [ {
                        'text': buttontxt,
                        'type': type || 'button-light',
                        'onTap': function() {
                            myPopup.close();
                        }
                    } ]
                });
                myPopup.then(function(res) {
                    callBack && callBack();
                });
            };
            this.mobileAlertOneButtonNew = function(params) {
                params.title || (params.title = $rootScope.i18mobile.system_alert_alert);
                params.content || (params.content = '');
                params.buttontxt || (params.buttontxt = $rootScope.i18mobile.system_alert_button_ok);
                params.type || (params.type = 'error');
                var myPopup = $ionicPopup.show({
                    'title': '<span>' + params.title + '</span>',
                    'template': params.content,
                    'scope': $rootScope,
                    'cssClass': 'mobileAlertOneButtonNew mobileAlertOneButton-' + params.type,
                    'buttons': [ {
                        'text': params.buttontxt,
                        'type': params.buttonType || 'button-light',
                        'onTap': function() {
                            myPopup.close();
                        }
                    } ]
                });
                myPopup.then(function(res) {
                    params.callBack && params.callBack();
                });
            };
            this.refreshQueryParam = function(url, newParams) {
                var length, currentNode, i, params, plength, ii, stack = $rootScope.stepStack;
                if (stack) {
                    length = stack.length;
                    for (i = 0; i < length; i++) if (stack[i].url === url) {
                        currentNode = stack[i];
                        break;
                    }
                    if (currentNode) {
                        params = currentNode.params;
                        plength = newParams.length;
                        for (ii = 0; ii < plength; ii++) params[newParams[ii].key] = newParams[ii].value;
                    }
                }
            };
            this.serializeParams = function(paramObj) {
                return $filter('base64Encode')(JSON.stringify(paramObj));
            };
            this.unSerializeParams = function(paramStr) {
                return JSON.parse($filter('base64Decode')(paramStr));
            };
            this.goBack = function() {
                if ($rootScope.stepStack && 0 < $rootScope.stepStack.length) {
                    $rootScope.stepStack.pop();
                    var lastStep = $rootScope.stepStack.pop();
                    if (lastStep) return $state.go(lastStep.url, lastStep.params), 
                    void 0;
                }
                this.goHome();
            };
            this.goHome = function() {
                $rootScope.stepStack && ($rootScope.stepStack.length = 0);
                $state.go('mobile.home');
            };
            this.callMCloudWhenMove = function(target, params, otherFunc, rnparams) {
                if (rnparams) if (isMcloudApp && (window.postMessage || window.mcloudNative)) {
                    target = target || 'handlerForH5';
                    window.mcloudNative && window.mcloudNative.callActJsFunction ? window.mcloudNative.callActJsFunction(target, params ? '{"params":' + JSON.stringify(params) + '}' : '') : window.postMessage(rnparams);
                } else otherFunc(); else if (isMcloudApp && window.mcloudNative) {
                    target = target || 'handlerForH5';
                    window.mcloudNative.callActJsFunction(target, params ? '{"params":' + JSON.stringify(params) + '}' : '');
                } else otherFunc();
            };
            this.format_curreny = function(currencySymbol, amount) {
                return 'undefind' !== amount && null !== amount ? currencySymbol + amount : currencySymbol;
            };
            this.isWifi = function() {
                var wifi, ua, con, network;
                try {
                    wifi = !0;
                    ua = window.navigator.userAgent;
                    con = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || {
                        'type': 'unknown'
                    };
                    if (/MicroMessenger/.test(ua)) {
                        if (0 <= ua.indexOf('WIFI')) return !0;
                        wifi = !1;
                    } else con && (network = con.type) && 'wifi' !== network && '2' !== network && 'unknown' !== network && 'none' !== network && (wifi = !1);
                    return wifi;
                } catch (e) {
                    return !0;
                }
            };
            this.callEvent = function(eventLabel, pValue, type) {
                var arr, eventCategory, parent_title, jsonParamEvent;
                try {
                    arr = (location.hash || '').replace(/^\#/, '').replace(/\//g, '_').split('?');
                    eventCategory = 'app_' + site[customiseVer] + '_' + 'zh-cn' + arr[0];
                    parent_title = document.title;
                    $(this).closest('[bi_parent_name]') && (parent_title += $.trim($(this).closest('[bi_parent_name]').attr('bi_parent_name')));
                    eventCategory += parent_title ? '_' + parent_title : '';
                    type = type || 'information';
                    (jsonParamEvent = {}).C1 = $rootScope.domainId || '';
                    if ('undefined' != typeof onEvent) {
                        pValue = pValue || '1';
                        onEvent && onEvent(eventCategory, type, eventLabel, pValue, jsonParamEvent);
                    }
                    csbMessage.checkPostUOR(eventCategory, type, eventLabel, pValue, '');
                    return !0;
                } catch (e) {
                    return !0;
                }
            };
            this.show = function() {
                $ionicLoading.show({
                    'content': 'Loading',
                    'animation': 'fade-in',
                    'showBackdrop': !0,
                    'showDelay': 0
                });
            };
            this.hide = function() {
                $ionicLoading.hide();
            };
            this.isHuaweiDis = function() {
                var deviceHuaweiPluginTemp, getUAInfo;
                if (UAParser) {
                    getUAInfo = UAParser.getUAInfo;
                    deviceHuaweiPluginTemp = deviceHuaweiPlugin.default;
                    if ((getUAInfo = getUAInfo(navigator.userAgent, 'all', {}, [ deviceHuaweiPluginTemp ])).device && getUAInfo.browser && /荣耀V?(8|9|10)/.test(getUAInfo.device.model) && 'QQBrowser' === getUAInfo.browser.name && parseInt(getUAInfo.browser.version[0], 10) < 9) return !0;
                }
                return !1;
            };
            this.getBrowserName = function() {
                var getUAInfo, deviceHuaweiPluginTemp;
                if (UAParser) {
                    getUAInfo = UAParser.getUAInfo;
                    deviceHuaweiPluginTemp = deviceHuaweiPlugin.default;
                    return getUAInfo(navigator.userAgent, 'all', {}, [ deviceHuaweiPluginTemp ]).browser.name;
                }
                return '';
            };
            this.isAppHideHtml = function() {
                try {
                    endCustomer && 'function' == typeof endCustomer && endCustomer();
                    return !0;
                } catch (e) {
                    return !1;
                }
            };
            this.getIosVerStr = function() {
                var reg, userAgent;
                if (!isIOS) return !1;
                return (userAgent = (userAgent = navigator.userAgent).match(reg = /CPU iPhone OS (.*?) like Mac OS/i) && userAgent.match(reg)[1]) && userAgent.replace(/_/g, '.');
            };
            this.isVerLessThan = function(ver, compareVer) {
                var verArr, compareVerArr, minLength, isless, i;
                if (ver === compareVer) return !0;
                verArr = ver.split('.');
                compareVerArr = compareVer.split('.');
                minLength = Math.max(compareVerArr.length, verArr.length);
                isless = !0;
                for (i = 0; i < minLength; i++) {
                    if (verArr[i] > compareVerArr[i] && verArr[i] != compareVerArr[i] || verArr[i] && !compareVerArr[i]) {
                        isless = !1;
                        break;
                    }
                    if (verArr[i] < compareVerArr[i]) {
                        isless = !0;
                        break;
                    }
                }
                return isless;
            };
            this.changefileName = function(fileName) {
                var fileNameNew = fileName;
                return fileNameNew = fileName ? function(randomFlag, min, max) {
                    var i, str = '', rangeScope = min, keyArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
                    randomFlag && (rangeScope = Math.round(Math.random() * (max - min)) + min);
                    for (i = 0; i < rangeScope; i++) str += keyArr[Math.round(Math.random() * (keyArr.length - 1))];
                    return str;
                }(!1, 32) + fileName.substring(fileName.lastIndexOf('.')) : fileNameNew;
            };
            this.isNeedRotate = function() {
                var chromeVersion = navigator.userAgent.toLowerCase().match(/chrome\/([\d\.]+)/), needRotate = !0;
                return needRotate = chromeVersion && chromeVersion[1] ? chromeVersion[1].slice(0, 2) < 81 : needRotate;
            };
        } ];
        angular.module('mobile.config').tinyService('mobileCommonService', service);
    });
    define('language/url', [], function() {
        var param = '/usermanual-billing', param2 = '/usermanual-account';
        if ('v1r2-jrzq' == window.realVer) {
            param = '/zh-cn/usermanual/billing';
            param2 = '/usermanual/account';
        }
        0;
        param = [ {
            'key': 'support',
            'value': {
                'unsubscribe_help_url': param + '/zh-cn_topic_0077628999.html',
                'payment_help_url': param + '/zh-cn_topic_0031512547.html',
                'cancelOrder_help_url': param + '/zh-cn_topic_0031465730.html',
                'allview_help_url': param + '/zh-cn_topic_0031465732.html',
                'overview_new_help_url': param + '/Overview_topic_0000001.html',
                'mypackage_help_url2': '/pro_price/',
                'help_url_realnameauth': param2 + '/zh-cn_topic_0057005689.html',
                'console_term_helpCenter_link': '/?locale=zh-cn'
            }
        }, {
            'key': 'support-intl',
            'value': {
                'unsubscribe_help_url_hk': '/zh-cn/usermanual-billing/zh-cn_topic_0077628999.html',
                'payment_help_url_hk': '/zh-cn/usermanual-billing/zh-cn_topic_0031512547.html',
                'cancelOrder_help_url_hk': '/zh-cn/usermanual-billing/zh-cn_topic_0031465730.html',
                'allview_help_url_hk': '/zh-cn/usermanual-billing/zh-cn_topic_0031465732.html',
                'help_url_realnameauth_hk': '/zh-cn/usermanual-account/zh-cn_topic_0119621530.html',
                'support_domain': '/zh-cn/',
                'complete_step3page_newfirst_title_url': '/zh-cn/intl_faq/zh-cn_topic_0115884676.html',
                'complete_step3page_errorbind_tip_url': '/zh-cn/intl_faq/zh-cn_topic_0115884676.html'
            }
        }, {
            'key': 'www',
            'value': {
                'console_term_lawyerInCharge_link': '/declaration/statement.html',
                'console_term_privacyProtect_link': '/declaration/sa_prp.html',
                'console_term_legalAgreement_link': '/declaration/sa_cua.html',
                'console_term_networkAccess_link': '/declaration/sa_nisr.html',
                'console_term_portal_link': '/?locale=zh-cn',
                'beta_plan_url': '/declaration/fsa_test.html',
                'portal_index_url': '/',
                'apply_solution_url': '/rest/portal/v1/banner?position=page_product&containerId=activityDiv&format=innerHTML'
            }
        }, {
            'key': 'auth',
            'value': {
                'console_term_loginIn_link': '/authui/login'
            }
        }, {
            'key': 'activity',
            'value': {
                'bind_adsLink': '/newuser_trial/index.html'
            }
        }, {
            'key': 'intl',
            'value': {
                'mypackage_help_url2_hk': '/zh-cn/price_detail.html',
                'portal_index_url_hk': '/'
            }
        }, {
            'key': 'console',
            'value': {
                'console_index_url': '/',
                'console_index_url_hk': '/'
            }
        } ];
        return window.UrlConfig.completeUrl(param);
    });
    define('language/rspdata', [], function() {
        return {
            'allmeasure': {
                'measureUnitList': [ {
                    'measureID': 1,
                    'measureType': 1,
                    'unitCNName': '元',
                    'unitENName': 'YUAN',
                    'unitName': '元',
                    'abbreviation': 'Y',
                    'currencyClass': 1,
                    'currencySign': '￥',
                    'createTime': 1565292624e3,
                    'createTimeShow': '2019-08-08 19:30:24',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': 'CNY'
                }, {
                    'measureID': 2,
                    'measureType': 1,
                    'unitCNName': '角',
                    'unitENName': 'JIAO',
                    'unitName': '角',
                    'abbreviation': 'J',
                    'currencyClass': 1,
                    'currencySign': '￥',
                    'createTime': 1565292624e3,
                    'createTimeShow': '2019-08-08 19:30:24',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': 'CNY'
                }, {
                    'measureID': 3,
                    'measureType': 1,
                    'unitCNName': '分',
                    'unitENName': 'FEN',
                    'unitName': '分',
                    'abbreviation': 'F',
                    'currencyClass': 1,
                    'currencySign': '￥',
                    'createTime': 1559782537e3,
                    'createTimeShow': '2019-06-06 00:55:37',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': 'CNY'
                }, {
                    'measureID': 0,
                    'measureType': 2,
                    'unitCNName': '天',
                    'unitENName': 'DAY',
                    'unitName': '天',
                    'abbreviation': 'd',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782529e3,
                    'createTimeShow': '2019-06-06 00:55:29',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 4,
                    'measureType': 2,
                    'unitCNName': '小时',
                    'unitENName': 'Hour',
                    'unitName': '小时',
                    'abbreviation': 'h',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 155978254e4,
                    'createTimeShow': '2019-06-06 00:55:40',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 5,
                    'measureType': 2,
                    'unitCNName': '分钟',
                    'unitENName': 'MINUTE',
                    'unitName': '分钟',
                    'abbreviation': 'm',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782543e3,
                    'createTimeShow': '2019-06-06 00:55:43',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 6,
                    'measureType': 2,
                    'unitCNName': '秒',
                    'unitENName': 'SECOND',
                    'unitName': '秒',
                    'abbreviation': 's',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782546e3,
                    'createTimeShow': '2019-06-06 00:55:46',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 7,
                    'measureType': 3,
                    'unitCNName': 'EB',
                    'unitENName': 'EB',
                    'unitName': 'EB',
                    'abbreviation': 'E',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048901e3,
                    'createTimeShow': '2019-06-20 16:41:41',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 8,
                    'measureType': 3,
                    'unitCNName': 'PB',
                    'unitENName': 'PB',
                    'unitName': 'PB',
                    'abbreviation': 'P',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048903e3,
                    'createTimeShow': '2019-06-20 16:41:43',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 9,
                    'measureType': 3,
                    'unitCNName': 'TB',
                    'unitENName': 'TB',
                    'unitName': 'TB',
                    'abbreviation': 'T',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048906e3,
                    'createTimeShow': '2019-06-20 16:41:46',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 10,
                    'measureType': 3,
                    'unitCNName': 'GB',
                    'unitENName': 'GB',
                    'unitName': 'GB',
                    'abbreviation': 'G',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048909e3,
                    'createTimeShow': '2019-06-20 16:41:49',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 11,
                    'measureType': 3,
                    'unitCNName': 'MB',
                    'unitENName': 'MB',
                    'unitName': 'MB',
                    'abbreviation': 'M',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048911e3,
                    'createTimeShow': '2019-06-20 16:41:51',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 12,
                    'measureType': 3,
                    'unitCNName': 'KB',
                    'unitENName': 'KB',
                    'unitName': 'KB',
                    'abbreviation': 'K',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048913e3,
                    'createTimeShow': '2019-06-20 16:41:53',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 13,
                    'measureType': 3,
                    'unitCNName': 'Byte',
                    'unitENName': 'Byte',
                    'unitName': 'Byte',
                    'abbreviation': 'Byte',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048916e3,
                    'createTimeShow': '2019-06-20 16:41:56',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 14,
                    'measureType': 4,
                    'unitCNName': '个(次)',
                    'unitENName': 'amount',
                    'unitName': '个(次)',
                    'abbreviation': 'AM',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782548e3,
                    'createTimeShow': '2019-06-06 00:55:48',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 15,
                    'measureType': 3,
                    'unitCNName': 'Mbps',
                    'unitENName': 'Mbps',
                    'unitName': 'Mbps',
                    'abbreviation': 'Mbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048918e3,
                    'createTimeShow': '2019-06-20 16:41:58',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 16,
                    'measureType': 7,
                    'unitCNName': 'Byte',
                    'unitENName': 'Byte',
                    'unitName': 'Byte',
                    'abbreviation': 'B',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048919e3,
                    'createTimeShow': '2019-06-20 16:41:59',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 17,
                    'measureType': 7,
                    'unitCNName': 'GB',
                    'unitENName': 'GB',
                    'unitName': 'GB',
                    'abbreviation': 'G',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048921e3,
                    'createTimeShow': '2019-06-20 16:42:01',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 18,
                    'measureType': 9,
                    'unitCNName': 'KLOC',
                    'unitENName': 'KLOC',
                    'unitName': 'KLOC',
                    'abbreviation': 'KLOC',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048924e3,
                    'createTimeShow': '2019-06-20 16:42:04',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 19,
                    'measureType': 10,
                    'unitCNName': '年',
                    'unitENName': 'YEAR',
                    'unitName': '年',
                    'abbreviation': 'Y',
                    'currencyClass': 0,
                    'currencySign': 'y',
                    'createTime': 1559782551e3,
                    'createTimeShow': '2019-06-06 00:55:51',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 20,
                    'measureType': 10,
                    'unitCNName': '月',
                    'unitENName': 'MONTH',
                    'unitName': '月',
                    'abbreviation': 'M',
                    'currencyClass': 0,
                    'currencySign': 'm',
                    'createTime': 1559782554e3,
                    'createTimeShow': '2019-06-06 00:55:54',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 21,
                    'measureType': 7,
                    'unitCNName': 'MB',
                    'unitENName': 'MB',
                    'unitName': 'MB',
                    'abbreviation': 'M',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1561048926e3,
                    'createTimeShow': '2019-06-20 16:42:06',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 22,
                    'measureType': 11,
                    'unitCNName': '赫兹',
                    'unitENName': 'GHz',
                    'unitName': '赫兹',
                    'abbreviation': 'G',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782557e3,
                    'createTimeShow': '2019-06-06 00:55:57',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 23,
                    'measureType': 4,
                    'unitCNName': '核',
                    'unitENName': 'CORE',
                    'unitName': '核',
                    'abbreviation': 'C',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 155978256e4,
                    'createTimeShow': '2019-06-06 00:56:00',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 24,
                    'measureType': 10,
                    'unitCNName': '天',
                    'unitENName': 'DAY',
                    'unitName': '天',
                    'abbreviation': 'D',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782563e3,
                    'createTimeShow': '2019-06-06 00:56:03',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 25,
                    'measureType': 10,
                    'unitCNName': '小时',
                    'unitENName': 'HOUR',
                    'unitName': '小时',
                    'abbreviation': 'H',
                    'currencyClass': 0,
                    'currencySign': '',
                    'createTime': 1559782566e3,
                    'createTimeShow': '2019-06-06 00:56:06',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 30,
                    'measureType': 12,
                    'unitCNName': '个数',
                    'unitENName': 'number',
                    'unitName': '个数',
                    'abbreviation': 'NUM',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782569e3,
                    'createTimeShow': '2019-06-06 00:56:09',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 31,
                    'measureType': 4,
                    'unitCNName': '千次',
                    'unitENName': 'Thousand times',
                    'unitName': '千次',
                    'abbreviation': 'TM',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782571e3,
                    'createTimeShow': '2019-06-06 00:56:11',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 32,
                    'measureType': 4,
                    'unitCNName': '百万次',
                    'unitENName': 'Million times',
                    'unitName': '百万次',
                    'abbreviation': 'MT',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782574e3,
                    'createTimeShow': '2019-06-06 00:56:14',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 33,
                    'measureType': 4,
                    'unitCNName': '十亿次',
                    'unitENName': 'Billion times',
                    'unitName': '十亿次',
                    'abbreviation': 'BM',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782577e3,
                    'createTimeShow': '2019-06-06 00:56:17',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 34,
                    'measureType': 16,
                    'unitCNName': 'bps',
                    'unitENName': 'bps',
                    'unitName': 'bps',
                    'abbreviation': 'bps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048927e3,
                    'createTimeShow': '2019-06-20 16:42:07',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 35,
                    'measureType': 16,
                    'unitCNName': 'kbps',
                    'unitENName': 'kbps',
                    'unitName': 'kbps',
                    'abbreviation': 'kbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048929e3,
                    'createTimeShow': '2019-06-20 16:42:09',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 36,
                    'measureType': 16,
                    'unitCNName': 'Mbps',
                    'unitENName': 'Mbps',
                    'unitName': 'Mbps',
                    'abbreviation': 'Mbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048931e3,
                    'createTimeShow': '2019-06-20 16:42:11',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 37,
                    'measureType': 16,
                    'unitCNName': 'Gbps',
                    'unitENName': 'Gbps',
                    'unitName': 'Gbps',
                    'abbreviation': 'Gbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048933e3,
                    'createTimeShow': '2019-06-20 16:42:13',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 38,
                    'measureType': 16,
                    'unitCNName': 'Tbps',
                    'unitENName': 'Tbps',
                    'unitName': 'Tbps',
                    'abbreviation': 'Tbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048935e3,
                    'createTimeShow': '2019-06-20 16:42:15',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 39,
                    'measureType': 17,
                    'unitCNName': 'GB-秒',
                    'unitENName': 'GB-seconds',
                    'unitName': 'GB-秒',
                    'abbreviation': 'GB-seconds',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 155978258e4,
                    'createTimeShow': '2019-06-06 00:56:20',
                    'operatorID': null,
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 40,
                    'measureType': 4,
                    'unitCNName': '次',
                    'unitENName': 'times',
                    'unitName': '次',
                    'abbreviation': 'times',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782583e3,
                    'createTimeShow': '2019-06-06 00:56:23',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 41,
                    'measureType': 4,
                    'unitCNName': '个',
                    'unitENName': 'PCS',
                    'unitName': '个',
                    'abbreviation': 'PCS',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782586e3,
                    'createTimeShow': '2019-06-06 00:56:26',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 42,
                    'measureType': 4,
                    'unitCNName': '千个',
                    'unitENName': 'Thousand PCS',
                    'unitName': '千个',
                    'abbreviation': 'TPCS',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782589e3,
                    'createTimeShow': '2019-06-06 00:56:29',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 43,
                    'measureType': 4,
                    'unitCNName': '张',
                    'unitENName': 'PCS',
                    'unitName': '张',
                    'abbreviation': 'PCS',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782592e3,
                    'createTimeShow': '2019-06-06 00:56:32',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 44,
                    'measureType': 4,
                    'unitCNName': '千张',
                    'unitENName': 'Thousand PCS',
                    'unitName': '千张',
                    'abbreviation': 'TPCS',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782595e3,
                    'createTimeShow': '2019-06-06 00:56:35',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 45,
                    'measureType': 18,
                    'unitCNName': '每秒查询率',
                    'unitENName': 'Query Per Second',
                    'unitName': '每秒查询率',
                    'abbreviation': 'qps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782598e3,
                    'createTimeShow': '2019-06-06 00:56:38',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 46,
                    'measureType': 4,
                    'unitCNName': '人/天',
                    'unitENName': 'Man/Day',
                    'unitName': '人/天',
                    'abbreviation': 'M/D',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782601e3,
                    'createTimeShow': '2019-06-06 00:56:41',
                    'operatorID': 'system',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 47,
                    'measureType': 7,
                    'unitCNName': 'TB',
                    'unitENName': 'TB',
                    'unitName': 'TB',
                    'abbreviation': 'T',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048937e3,
                    'createTimeShow': '2019-06-20 16:42:17',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 48,
                    'measureType': 7,
                    'unitCNName': 'PB',
                    'unitENName': 'PB',
                    'unitName': 'PB',
                    'abbreviation': 'P',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048939e3,
                    'createTimeShow': '2019-06-20 16:42:19',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 49,
                    'measureType': 19,
                    'unitCNName': 'bps',
                    'unitENName': 'bps',
                    'unitName': 'bps',
                    'abbreviation': 'bps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048941e3,
                    'createTimeShow': '2019-06-20 16:42:21',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 50,
                    'measureType': 19,
                    'unitCNName': 'kbps',
                    'unitENName': 'kbps',
                    'unitName': 'kbps',
                    'abbreviation': 'kbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048943e3,
                    'createTimeShow': '2019-06-20 16:42:23',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 51,
                    'measureType': 19,
                    'unitCNName': 'Mbps',
                    'unitENName': 'Mbps',
                    'unitName': 'Mbps',
                    'abbreviation': 'Mbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048945e3,
                    'createTimeShow': '2019-06-20 16:42:25',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 52,
                    'measureType': 19,
                    'unitCNName': 'Gbps',
                    'unitENName': 'Gbps',
                    'unitName': 'Gbps',
                    'abbreviation': 'Gbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561048948e3,
                    'createTimeShow': '2019-06-20 16:42:28',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 53,
                    'measureType': 19,
                    'unitCNName': 'Tbps',
                    'unitENName': 'Tbps',
                    'unitName': 'Tbps',
                    'abbreviation': 'Tbps',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 156104895e4,
                    'createTimeShow': '2019-06-20 16:42:30',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 54,
                    'measureType': 4,
                    'unitCNName': '万次',
                    'unitENName': 'Ten thousand times',
                    'unitName': '万次',
                    'abbreviation': 'TTM',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1559782603e3,
                    'createTimeShow': '2019-06-06 00:56:43',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 55,
                    'measureType': 20,
                    'unitCNName': '虚拟用户分钟',
                    'unitENName': 'Virtual USER Minute',
                    'unitName': '虚拟用户分钟',
                    'abbreviation': 'vum',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1561033942e3,
                    'createTimeShow': '2019-06-20 12:32:22',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 0,
                    'isDefaultDisplayUnit': 0,
                    'isBasicUnit': 0,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                }, {
                    'measureID': 56,
                    'measureType': 4,
                    'unitCNName': '万个',
                    'unitENName': 'Ten thousand PCS',
                    'unitName': '万个',
                    'abbreviation': 'TTPCS',
                    'currencyClass': 0,
                    'currencySign': null,
                    'createTime': 1564054822e3,
                    'createTimeShow': '2019-07-25 11:40:22',
                    'operatorID': 'admin',
                    'queryTypeMeasure': 0,
                    'isMiniUnit': 1,
                    'isDefaultDisplayUnit': 1,
                    'isBasicUnit': 1,
                    'aggregateId': null,
                    'atomicUnit1': -1,
                    'atomicUnit2': -1,
                    'currency': null
                } ],
                'measureUnit': null
            },
            'allregion': [ {
                'dcId': 'b0e6ea4cbfb8438ebadc8ed62bd95a07',
                'regionId': 'b0e6ea4cbfb8438ebadc8ed62bd95a07',
                'regionName': 'Langfang IDC',
                'regionCode': 'b0e6ea4cbfb8438ebadc8ed62bd95a07',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'DC001014EAA99C8BD3',
                'regionId': 'cn-north-1',
                'regionName': 'CN North-Beijing1',
                'regionCode': 'cn-north-1',
                'regionDesc': '廊坊',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2015-07-15',
                'availableZones': [ {
                    'availableZoneId': '882f6e449e3245dbb8c1c0fafa494c89',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-north-1c',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'ae04cf9d61544df3806a3feeb401b204',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-1a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'd573142f24894ef3bd3664de068b44b0',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-1b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC0010150DA786B527',
                'regionId': 'cn-northeast-1',
                'regionName': 'CN Northeast-Dalian',
                'regionCode': 'cn-northeast-1',
                'regionDesc': '大连',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2015-07-15',
                'availableZones': [ {
                    'availableZoneId': '25c22556cfe5402e81af21e80e8ddf42',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'az1.cnnortheast1',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC0010155D938DAD60',
                'regionId': 'cn-east-2',
                'regionName': 'CN East-Shanghai2',
                'regionCode': 'cn-east-2',
                'regionDesc': '上海',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2016-06-15',
                'availableZones': [ {
                    'availableZoneId': '38b0f7a602344246bcb0da47b5d548e7',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-east-2b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '5547fd6bf8f84bb5a7f9db062ad3d015',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-east-2c',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '72d50cedc49846b9b42c21495f38d81c',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-east-2a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '7f2165c38c9d45539fdf25f1577ffbbd',
                    'availableZoneName': 'AZ4',
                    'availableZoneCode': 'cn-east-2d',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC0010156962E8D014',
                'regionId': 'cn-south-1',
                'regionName': 'CN South-Guangzhou',
                'regionCode': 'cn-south-1',
                'regionDesc': '广州',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2016-09-15',
                'availableZones': [ {
                    'availableZoneId': '043c7e39ecb347a08dc8fcb6c35a274e',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-south-2b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '34f5ff4865cf4ed6b270f15382ebdec5',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-south-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '9edc00b15b724e85ae9a08cfd59f96cd',
                    'availableZoneName': 'AZ4',
                    'availableZoneCode': 'CN-SOUTH-3',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': 'af1687643e8c4ec1b34b688e4e3b8901',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-south-1c',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'dfeb4826256b47aa828e72d7519e108c',
                    'availableZoneName': 'AZ5',
                    'availableZoneCode': 'cn-south-1e',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'f35674a96d5d4eeca5814fe794dcb49e',
                    'availableZoneName': 'AZ6',
                    'availableZoneCode': 'cn-south-1f',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001015A591CF5C46',
                'regionId': 'cn-hntv-1',
                'regionName': 'CN South-HNTV',
                'regionCode': 'cn-hntv-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 0,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '91009ee9987141418dc5846e0d177e92',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-hntv-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001015C24F29DBA0',
                'regionId': 'cn-north-2',
                'regionName': 'CN North-Beijing2',
                'regionCode': 'cn-north-2',
                'regionDesc': '北京',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 0,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'b92b9fe0292d4c5cbab98b4a990cf10a',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-north-2c',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': 'e3c4da673f5c478686682c3658aa67a6',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-2a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': 'f59168f518b2456c9eabf6b0c868581d',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-2b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'IDC013F4B2957E9002',
                'regionId': 'IDC013F4B2957E9002',
                'regionName': 'Shanghai IDC',
                'regionCode': 'IDC013F4B2957E9002',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'IDC013F5107ADAB001',
                'regionId': 'IDC013F5107ADAB001',
                'regionName': 'Guangzhou IDC',
                'regionCode': 'IDC013F5107ADAB001',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'IDC014257CE5C01002',
                'regionId': 'IDC014257CE5C01002',
                'regionName': 'Suzhou IDC (Anhui)',
                'regionCode': 'IDC014257CE5C01002',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'IDC01464267218E002',
                'regionId': 'IDC01464267218E002',
                'regionName': 'Xiangyang IDC',
                'regionCode': 'IDC01464267218E002',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'IDC014C1604B879002',
                'regionId': 'IDC014C1604B879002',
                'regionName': 'North China 2',
                'regionCode': 'IDC014C1604B879002',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 2,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': []
            }, {
                'dcId': 'DC00201614192BD266',
                'regionId': 'cn-north-gray1',
                'regionName': 'Experience',
                'regionCode': 'cn-north-gray1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '22a2c31979e34232b83eaa59868acedb',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-gray1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '4cea8dc5159f4d518fa5225c8ad2a28e',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-gray1b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201623C34E83D0',
                'regionId': 'ap-southeast-1',
                'regionName': 'AP-Hong Kong',
                'regionCode': 'ap-southeast-1',
                'regionDesc': '香港',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '2018-03-15',
                'availableZones': [ {
                    'availableZoneId': '02b74f50749b4074ab6d486727f6922b',
                    'availableZoneName': 'AZ6',
                    'availableZoneCode': 'ap-southeast-1f',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '19162820ca3d42ce847cc051bedf669a',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-1a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '6d5934192ac043549e3e7baaa3ba3b61',
                    'availableZoneName': 'AZ4',
                    'availableZoneCode': 'ap-southeast-1d',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '6dc7bd3030e84a679fe2397e729e6656',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'ap-southeast-1b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '89c9a62d884d41e4a6508f6e3ebf44ea',
                    'availableZoneName': 'AZ5',
                    'availableZoneCode': 'ap-southeast-1e',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '90470d06d7ca4dfeada9083e26b46434',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'ap-southeast-1c',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201630A4D56E26',
                'regionId': 'ap-southeast-2',
                'regionName': 'AP-Bangkok',
                'regionCode': 'ap-southeast-2',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '2018-09-15',
                'availableZones': [ {
                    'availableZoneId': '1db8e37bd7c84990b3672b2f371908c1',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'ap-southeast-2b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'f0c200748a4b4cb2a3c697ed11e982f7',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-2a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC00101630A4E24631',
                'regionId': 'eu-west-1',
                'regionName': 'EU-Parisold',
                'regionCode': 'eu-west-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '95bebb365f29474ca26e3dd716121c0f',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'eu-west-1b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'c3871d962c284a50b4a4342626edc50d',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'eu-west-1a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC00201630A4EE7456',
                'regionId': 'us-east-1',
                'regionName': 'NA-Atlantaold',
                'regionCode': 'us-east-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '1970-01-01',
                'availableZones': [ {
                    'availableZoneId': '89a304937ca54b42ad5d54fb84cc1480',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'us-east-1a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'e42aa0a9ef314ee5911435092a5848fe',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'us-east-1b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC002016362A1BB5D8',
                'regionId': 'cn-centralfcs-1',
                'regionName': 'CN Central-Xiangyang',
                'regionCode': 'cn-centralfcs-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 0,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'c3b7e970eda24a8caa96c8f223e52eea',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'az1.cn-centralfcs-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016390FEB0180',
                'regionId': 'cn-north-3',
                'regionName': 'CN North-Beijing3',
                'regionCode': 'cn-north-3',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2018-07-15',
                'availableZones': [ {
                    'availableZoneId': '07f6c3d30aa3443da9f13d1e514bf458',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-3a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '74100e2425bd4136a894de99f9b780b7',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-3b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016449649D224',
                'regionId': 'cn-southwest-1',
                'regionName': 'CN Southwest-Guiyang201',
                'regionCode': 'cn-southwest-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '4348104a351c4d95be4bf53b464c8348',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-southwest-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '50ec89c2043742e5a6b6489fce2021fd',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-southwest-1b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201647D38D96D1',
                'regionId': 'cn-south-3',
                'regionName': 'CN South-Dongguan201',
                'regionCode': 'cn-south-3',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '197dfeb3f3b84540a4c1e06f954302dc',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-south-3b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '3a28bd93d53547aa9c109199039e5edd',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-south-3a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201647E6794F56',
                'regionId': 'cn-north-5',
                'regionName': 'CN North-Ulanqab201',
                'regionCode': 'cn-north-5',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '1a4a73e752d248188b2f862444e7f06f',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-5a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '85906f63121546f8b2fd298eef586102',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-5b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC0020164CB5907EF7',
                'regionId': 'cn-south-2',
                'regionName': 'CN South-Shenzhen',
                'regionCode': 'cn-south-2',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2018-10-15',
                'availableZones': [ {
                    'availableZoneId': '713fd680a1924de3940065e3cd7246eb',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-south-2a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC0020164EE1A7CD31',
                'regionId': 'cn-north-6',
                'regionName': 'CN North-Ulanqab202',
                'regionCode': 'cn-north-6',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '430decbdd6184194aa70dc6f51cabd29',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-6b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '5c905b29843f43618fc1e48fdbebf13d',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-6a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '71039a9f6b754c0ca959965d0a92005c',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-north-6c',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC0010164EE20CA313',
                'regionId': 'cn-north-7',
                'regionName': 'CN North-Ulanqab203',
                'regionCode': 'cn-north-7',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'adde4fb21d694eaa81c97e08246716ab',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-7b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': 'ce17eb0843884ad1b8549ceb5736c760',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-7a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201659E08494D2',
                'regionId': 'cn-southwest-2',
                'regionName': 'CN Southwest-Guiyang1',
                'regionCode': 'cn-southwest-2',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2019-02-28',
                'availableZones': [ {
                    'availableZoneId': '10ca1f0007c94b8bac42d6719f10adb4',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-southwest-2c',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '54dcaf4e57c04f368767674f5a4048ab',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-southwest-2b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '8c7f44d39fac49eb8b77ec722516f4d1',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-southwest-2a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC0010165C21659651',
                'regionId': 'cn-north-4',
                'regionName': 'CN North-Beijing4',
                'regionCode': 'cn-north-4',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2018-11-15',
                'availableZones': [ {
                    'availableZoneId': '2178b03aba8a43dc8a6dc34152165f69',
                    'availableZoneName': 'AZ6',
                    'availableZoneCode': 'cn-north-4f',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '2dcb154ac2724a6d92e9bcc859657c1e',
                    'availableZoneName': 'AZ3',
                    'availableZoneCode': 'cn-north-4c',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': '5a863db93c7243fc9fca00304673e42f',
                    'availableZoneName': 'AZ5',
                    'availableZoneCode': 'cn-north-4e',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': 'a0865121f83b41cbafce65930a22a6e8',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-north-4b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'effdcbc7d4d64a02aa1fa26b42f56533',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-4a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'f921044f4b374021b5fe301bf159b54b',
                    'availableZoneName': 'AZ4',
                    'availableZoneCode': 'cn-north-4d',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001016613C5FE4A7',
                'regionId': 'eu-west-0',
                'regionName': 'EU-Paris',
                'regionCode': 'eu-west-0',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': 2,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '1c4f6f32e11147c9b2f611e6573372d0',
                    'availableZoneName': 'FR-B',
                    'availableZoneCode': 'eu-west-0b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '34f669ecc7664c3ea0e2d758ae277d18',
                    'availableZoneName': 'FR-A',
                    'availableZoneCode': 'eu-west-0a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016613CD904D5',
                'regionId': 'as-south-0',
                'regionName': 'AP-Singapore-OP1',
                'regionCode': 'as-south-0',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': 2,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '1970-01-01',
                'availableZones': [ {
                    'availableZoneId': '01ac164f1f4042a89f5715706065d46a',
                    'availableZoneName': 'SG-A',
                    'availableZoneCode': 'as-south-0a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                }, {
                    'availableZoneId': '705900413f6f4977a6bf4c28a0790386',
                    'availableZoneName': 'SG-B',
                    'availableZoneCode': 'as-south-0b',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001016613D76F965',
                'regionId': 'na-east-0',
                'regionName': 'NA-Atlanta',
                'regionCode': 'na-east-0',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': 2,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'bd8c2c74c7ca402fa2e8f0c6d716a5fe',
                    'availableZoneName': 'US-A',
                    'availableZoneCode': 'na-east-0a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016622E905187',
                'regionId': 'cn-north-8',
                'regionName': 'CN North-Beijing201',
                'regionCode': 'cn-north-8',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '804112d0606b43668f6bbd161a826ccf',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-8a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201697F1345153',
                'regionId': 'cn-east-202',
                'regionName': 'CN East-Shanghai201',
                'regionCode': 'cn-east-202',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '71bd63bf8b394c4281d606f7713403ac',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-east-202a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00201697F14AED58',
                'regionId': 'cn-east-203',
                'regionName': 'CN East-Hangzhou201',
                'regionCode': 'cn-east-203',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '01d064608954462991b7f44552fadde9',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-east-203a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00101697F161D3C7',
                'regionId': 'cn-northwest-201',
                'regionName': 'CN Northwest-Xian201',
                'regionCode': 'cn-northwest-201',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '414e109dbb2b4815bab942d209e81294',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-northwest-201a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00101697F17DA455',
                'regionId': 'cn-central-201',
                'regionName': 'CN Central-Wuhan201',
                'regionCode': 'cn-central-201',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '6b92351065394aef8cf8b32fa44943d3',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-central-201a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC00101699E25AF5D8',
                'regionId': 'af-south-1',
                'regionName': 'AF-Johannesburg',
                'regionCode': 'af-south-1',
                'regionDesc': '',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '2019-02-28',
                'availableZones': [ {
                    'availableZoneId': 'fbe9a0a6746243b4b509caf5033a4577',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'af-south-1a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC00101699E26FEDA7',
                'regionId': 'ap-southeast-3',
                'regionName': 'AP-Singapore',
                'regionCode': 'ap-southeast-3',
                'regionDesc': 'AP-Singapore',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': '2019-02-20',
                'availableZones': [ {
                    'availableZoneId': '84ecafac577b4b4cab20ba7cb768f955',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'ap-southeast-3b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'c69f00ca627342ae84eb5c3d3ef01aa5',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-3a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC0010169FA7C83813',
                'regionId': 'cn-east-3',
                'regionName': 'CN East-Shanghai1',
                'regionCode': 'cn-east-3',
                'regionDesc': 'CN East-Shanghai1',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'd90ff6d692954373bf53be49cf3900cb',
                    'availableZoneName': 'AZ2',
                    'availableZoneCode': 'cn-east-3b',
                    'availableZoneType': 1,
                    'istoPublic': 1
                }, {
                    'availableZoneId': 'e7afd64502d64fe3bfb60c2c82ec0ec6',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-east-3a',
                    'availableZoneType': 1,
                    'istoPublic': 1
                } ]
            }, {
                'dcId': 'DC002016A5396A1EF9',
                'regionId': 'cn-northwest-1',
                'regionName': 'CN Northwest-Karamay',
                'regionCode': 'cn-northwest-1',
                'regionDesc': null,
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '1970-01-01',
                'availableZones': [ {
                    'availableZoneId': '76f7999919e243f287119b5f4328a709',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-northwest-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001016ABF3BFD0F6',
                'regionId': 'ap-southeast-201',
                'regionName': 'AP-Jakarta201',
                'regionCode': 'ap-southeast-201',
                'regionDesc': 'AP-BPITCGK1',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': 'eb14744e92ed409cb999953c03cc2ea3',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-201a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016ABF3CFF4F3',
                'regionId': 'ap-southeast-202',
                'regionName': 'AP-Manila201',
                'regionCode': 'ap-southeast-202',
                'regionDesc': 'AP-BPITMNL1',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '24becc628f6440f6b256aa2e095bc53d',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-202a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC001016ABF3DBEC12',
                'regionId': 'ap-southeast-203',
                'regionName': 'AP-Kuala Lumpur201',
                'regionCode': 'ap-southeast-203',
                'regionDesc': 'AP-BPITKUL1',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 0,
                'isPublicRegion': 1,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '869dd3396a6a42d482b7fdb4be0c6ce0',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'ap-southeast-203a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC0020160000000001',
                'regionId': 'global-cbc-1',
                'regionName': 'Global',
                'regionCode': 'global-cbc-1',
                'regionDesc': 'Global default region',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 0,
                'startUseTime': null,
                'availableZones': [ {
                    'availableZoneId': '4c3224e6a6104b298cb7bd9a46b56459',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'global-cbc-1a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            }, {
                'dcId': 'DC002016C2C12DA6B5',
                'regionId': 'cn-north-9',
                'regionName': 'CN North-Ulanqab1',
                'regionCode': 'cn-north-9',
                'regionDesc': 'CN North-Ulanqab1',
                'regionTag': null,
                'dcrType': 1,
                'ally_siteid': null,
                'isChinaMainLandRegion': 1,
                'isPublicRegion': 1,
                'startUseTime': '2019-07-26',
                'availableZones': [ {
                    'availableZoneId': 'a577f74f4edf4592b94e92bad3a83364',
                    'availableZoneName': 'AZ1',
                    'availableZoneCode': 'cn-north-9a',
                    'availableZoneType': 1,
                    'istoPublic': 0
                } ]
            } ]
        };
    });
    define('app/business/services/publicService', [ 'language/url', 'language/usercenter', 'language/v1r2', 'language/order', 'language/reserve', 'language/errMsg', 'language/common', 'language/user', 'language/rspdata' ], function(i18url, i18user, i18v1r2, i18order, i18reserve, i18err, i18common, i18new, i18rspdata) {
        var service = [ '$rootScope', '$compile', 'camel', 'utilService', '$state', '$filter', 'tiMessage', 'tiTipService', 'msgService', 'validator', '$location', '$q', function($rootScope, $compile, camel, utilService, $state, $filter, tiMessage, tiTipService, msgService, validator, $location, $q) {
            function treeFunc(data, callback) {
                var i, treeChildNode1, selectData1, j, treeChildNode2, selectData2, k, treeNode, treeDatas = data, treeNodeSelect = [ {
                    'label': i18new.enterPrise_tree_all,
                    'id': 'all'
                } ], treeChilds1 = {}, treeChilds2 = {};
                for (i = 0; i < treeDatas.length; i++) if (3 !== Number(treeDatas[i].to_party_type)) {
                    treeNodeSelect.push({
                        'label': $.encoder.encodeForHTML(treeDatas[i].to_party_name),
                        'id': treeDatas[i].to_party_id
                    });
                    if (treeChildNode1 = treeDatas[i].child_party_nodes) {
                        treeChilds1[treeDatas[i].to_party_id] = [ {
                            'label': i18new.enterPrise_tree_all,
                            'id': 'all'
                        } ];
                        for (j = 0; j < treeChildNode1.length; j++) if (3 !== Number(treeChildNode1[j].to_party_type)) {
                            selectData1 = {
                                'label': $.encoder.encodeForHTML(treeChildNode1[j].to_party_name),
                                'id': treeChildNode1[j].to_party_id
                            };
                            treeChilds1[treeDatas[i].to_party_id].push(selectData1);
                            if (treeChildNode2 = treeChildNode1[j].child_party_nodes) {
                                treeChilds2[treeChildNode1[j].to_party_id] = [ {
                                    'label': i18new.enterPrise_tree_all,
                                    'id': 'all'
                                } ];
                                for (k = 0; k < treeChildNode2.length; k++) if (3 != treeChildNode2[k].to_party_type) {
                                    selectData2 = {
                                        'label': $.encoder.encodeForHTML(treeChildNode2[k].to_party_name),
                                        'id': treeChildNode2[k].to_party_id
                                    };
                                    treeChilds2[treeChildNode1[j].to_party_id].push(selectData2);
                                }
                            }
                        }
                    }
                }
                $rootScope.treePartyId = void 0;
                $rootScope.treePartyId1 = void 0;
                $rootScope.treePartyId2 = void 0;
                $rootScope.treePartyId3 = void 0;
                $rootScope.treePartyName = '';
                $rootScope.treePartyName1 = '';
                $rootScope.treePartyName2 = '';
                $rootScope.treePartyName3 = '';
                treeNode = {
                    'id': 'level0',
                    'elementId': 'select_level0',
                    'selectedId': 'all',
                    'show': !(treeChild2 = {
                        'id': 'level2',
                        'elementId': 'select_level2',
                        'show': !(treeChild1 = {
                            'id': 'level1',
                            'elementId': 'select_level1',
                            'show': !1,
                            'selectedId': 'all',
                            'disable': !1,
                            'options': [],
                            'change': function(option) {
                                $rootScope.treePartyId3 = void 0;
                                if ('all' !== option.id) {
                                    if (1 < treeChilds2[option.id].length) {
                                        treeChild2.options = treeChilds2[option.id];
                                        treeChild2.show = !0;
                                        treeChild2.selectedId = 'all';
                                    } else {
                                        treeChild2.options = [];
                                        treeChild2.show = !1;
                                    }
                                    $rootScope.treePartyId2 = option.id;
                                    $rootScope.treePartyName2 = option.label;
                                } else {
                                    treeChild2.options = [];
                                    treeChild2.show = !1;
                                    $rootScope.treePartyId2 = '';
                                    $rootScope.treePartyName2 = '';
                                }
                                $rootScope.treePartyId = $rootScope.treePartyId2 || $rootScope.treePartyId1;
                                $rootScope.treePartyName2 ? $rootScope.treePartyName = $rootScope.treePartyName1 + '/' + $rootScope.treePartyName2 : $rootScope.treePartyName = $rootScope.treePartyName1;
                                callback();
                            }
                        }),
                        'selectedId': 'all',
                        'disable': !1,
                        'options': [],
                        'change': function(option) {
                            $rootScope.treePartyId3 = $rootScope.treePartyId2 ? option.id : '';
                            $rootScope.treePartyName3 = $rootScope.treePartyName2 ? option.label : '';
                            $rootScope.treePartyId = $rootScope.treePartyId3 || $rootScope.treePartyId2 || $rootScope.treePartyId1;
                            $rootScope.treePartyName3 ? $rootScope.treePartyName = $rootScope.treePartyName1 + '/' + $rootScope.treePartyName2 + '/' + $rootScope.treePartyName3 : $rootScope.treePartyName = $rootScope.treePartyName1 + '/' + $rootScope.treePartyName2;
                            callback();
                        }
                    }),
                    'options': treeNodeSelect,
                    'change': function(option) {
                        $rootScope.treePartyId3 = void 0;
                        $rootScope.treePartyId2 = void 0;
                        if (1 < treeNodeSelect.length) {
                            $rootScope.partyRight = !0;
                            treeNode.show = !0;
                            if ('all' !== option.id) {
                                if (1 < treeChilds1[option.id].length) {
                                    treeChild1.options = treeChilds1[option.id];
                                    treeChild1.show = !0;
                                    treeChild1.selectedId = 'all';
                                } else {
                                    treeChild1.options = [];
                                    treeChild1.show = !1;
                                }
                                treeChild2.options = [];
                                treeChild2.show = !1;
                                $rootScope.treePartyId1 = option.id;
                                $rootScope.treePartyName1 = option.label;
                            } else {
                                treeChild1.options = [];
                                treeChild1.show = !1;
                                treeChild2.options = [];
                                treeChild2.show = !1;
                                $rootScope.treePartyId1 = void 0;
                                $rootScope.treePartyName1 = '';
                            }
                            $rootScope.treePartyId = $rootScope.treePartyId1;
                            $rootScope.treePartyName = $rootScope.treePartyName1;
                            callback();
                        } else {
                            $rootScope.partyRight = !1;
                            treeNode.show = !1;
                        }
                    }
                };
                1 < treeNodeSelect.length && (treeNode.show = !0);
                return [ treeNode, treeChild1, treeChild2 ];
            }
            var treeChild1, treeChild2, repTimeDown, costcenterOnline, costcenterWhiteUser;
            this.BaseTable = {
                'elementId': '',
                'pageElementId': '',
                'title': 'Table',
                'required': !1,
                'currentPage': 1,
                'pagination': {
                    'currentPage': 1,
                    'itemsPerPage': 10
                },
                'pageSize': {
                    'size': 10,
                    'options': [ 10, 20, 50 ]
                },
                'displayed': [],
                'columns': [],
                'srcData': {
                    'data': [],
                    'state': {
                        'filter': !1,
                        'sort': !1,
                        'pagination': !0
                    }
                },
                'totalItems': 0
            };
            this.initLanguage = function() {
                $rootScope.i18v1r2 || ($rootScope.i18v1r2 = i18v1r2);
                $rootScope.i18user || ($rootScope.i18user = i18user);
                $rootScope.i18order || ($rootScope.i18order = i18order);
                $rootScope.i18reserve || ($rootScope.i18reserve = i18reserve);
                $rootScope.i18err || ($rootScope.i18err = i18err);
                $rootScope.i18common || ($rootScope.i18common = i18common);
                $rootScope.i18new || ($rootScope.i18new = i18new);
            };
            $rootScope.i18url || ($rootScope.i18url = i18url);
            this.beforeSelect = function(item, column) {
                var tmp_hash;
                if (column.id && item.label) {
                    item = column.title + item.label;
                    -1 < (tmp_hash = window.location.hash).indexOf('?') && (tmp_hash = tmp_hash.split('?')[0]);
                    window.linkInfo = $filter('base64Encode')(document.domain + '/usercenter/' + tmp_hash + '|' + column.id + '|select|' + item) + '.' + $rootScope.domainId + '.' + new Date().getTime();
                }
            };
            this.createNode = function($scope, html) {
                var node, html = $compile(html);
                return node = html ? html($scope.$new(!1)) : node;
            };
            this.queryCusBriefInfo = function(currentDomainId) {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/brief/{userid}',
                        'o': {
                            'userid': currentDomainId || $rootScope.domainId
                        }
                    },
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.querySupportOnlinePay = function(currentDomainId) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbpaymentservice/v1/payment/support_special_pay',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'customerId': currentDomainId || $rootScope.domainId
                    },
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.isGiveCoupons = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/systemconf/configration/queryConfigration',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'configItem': 'sendCouponAfterCompleteInfo'
                    },
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getAccountDetailInfo = function(hideMask) {
                var respTime = '', result = camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/detail-info/{customerID}',
                        'o': {
                            'customerID': $rootScope.domainId
                        }
                    },
                    'params': {
                        'customerId': $rootScope.domainId
                    },
                    'mask': !hideMask,
                    'beforeSend': function(request, setting) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
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
                    }
                });
                return result.then(function() {
                    result.$$state.value.respTime = respTime;
                    return result;
                });
            };
            this.queryCusDetailInfo = function(hideMask) {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/detail-info/{customerID}',
                        'o': {
                            'customerID': $rootScope.domainId
                        }
                    },
                    'params': {
                        'customerId': $rootScope.domainId
                    },
                    'mask': !hideMask,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryCusApp = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/attribute/app-scenario',
                    'beforeSend': function(request) {
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryAppIndustry = function(parentName) {
                var params = {
                    'itemType': 'INDUSTRY',
                    'pageNo': 1,
                    'pageSize': 100,
                    'language': $rootScope.currentLanguage
                };
                parentName && (params.parentName = parentName);
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/member/name_by_code',
                    'timeout': 6e4,
                    'params': params,
                    'mask': !0,
                    'beforeSend': function(request) {
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.querySubAppIndustry = function(parentName) {
                var params = {
                    'relactionType': 'SUB_INDUSTRY',
                    'pageNo': 1,
                    'pageSize': 100,
                    'language': $rootScope.currentLanguage
                };
                parentName && (params.parentName = parentName);
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/member/relation_info',
                    'timeout': 6e4,
                    'params': params,
                    'mask': !0,
                    'beforeSend': function(request) {
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.createRealNameAlarm = function(id, $scope, status, isFreeze) {
                var tips;
                if (isFreeze) {
                    isFreeze = '<span style=\'color:#ff8833;font-size: 14px;\'>' + $rootScope.i18new.customer_realnameauth_freeze_tips_alarm + '</span>';
                    isFreeze = this.createNode($scope, isFreeze);
                    $('#' + id).html(isFreeze);
                    $('#' + id).show();
                    return;
                }
                $scope.gotoAuth = function() {
                    $state.go('accountindex.realNameAuth');
                };
                if (REALNAMESTATUS.AUTHING === status) tips = '<span>' + $rootScope.i18new.customer_realnameauth_tips_alarm_authing + '</span>'; else if (null !== status && REALNAMESTATUS.AUTHOK !== Number(status)) {
                    isFreeze = '<a ng-click=\'gotoAuth()\' style=\'color: #3399ff\'>' + $rootScope.i18new.customer_studentauth_button_toauth + ' >></a>';
                    tips = ' <span class="ti-icon ti-icon-warn" style=\'font-size: 14px;color:#f83\'></span><span style=\'color:#ff8833;font-size: 14px;\'>' + utilService.i18nReplace($rootScope.i18new.customer_realnameauth_tips_alarm1, [ isFreeze ]) + '</span>';
                }
                if (null !== status && REALNAMESTATUS.AUTHOK !== Number(status)) {
                    isFreeze = this.createNode($scope, tips);
                    $('#' + id).html(isFreeze);
                    $('#' + id).show();
                }
            };
            this.createRealDevAlarm = function(id, $scope, openUrl, tipMsg) {
                var openUrl = '<a href=\'' + openUrl + '\' target=\'_blank\'>' + $rootScope.i18new.common_click_here + '</a>';
                tipMsg = tipMsg ? utilService.i18nReplace(tipMsg, {
                    '0': openUrl
                }) : utilService.i18nReplace($rootScope.i18new.dev_term_notopen_label, {
                    '0': openUrl
                });
                openUrl = this.createNode($scope, ' <span class="ti-icon icon-cloud-action-state-failed" style=\'font-size: 14px;\'></span><span style=\'color:#ff8833;font-size: 14px;\'>' + tipMsg + '</span>');
                $('#' + id).html(openUrl);
                $('#' + id).show();
            };
            this.createTipsAlarm = function(id, $scope, openUrl, tipMsg) {
                $('#' + id).remove();
                0;
                openUrl = tipMsg ? '<span id=\'' + id + '\' style=\'display:inline-block\'><a href=\'' + openUrl + '\' target=\'_blank\'>' + tipMsg + '</a></span>' : '<span id=\'' + id + '\' style=\'display:inline-block;width:auto\' class=\'ti-alert-container ng-isolate-scope ti-alert-prompt-container\'><span class=\'ti-alert-type-icon ti-icon ti-alert-prompt-container ti-icon-info-circle\'></span><span class=\'ti-alert-label\' style=\'width:auto\'>' + $rootScope.i18new.not_allowed_unsubscribe_tips + '</span></span>';
                tipMsg = this.createNode($scope, openUrl);
                $('.cti-buyLayer-btns').prepend(tipMsg);
            };
            this.createLinkToAuth = function(id, $scope, type) {
                $scope.toAuthByType = function(type0) {
                    1 === Number(type0) ? $state.go('accountindex.realNameAuth', {
                        'type': 1
                    }) : $state.go('accountindex.realNameAuth');
                };
                type = '<a ng-click=\'toAuthByType(' + type + ')\'>' + $rootScope.i18new.customer_realnameauth_title + '</a>';
                type = '<span>' + utilService.i18nReplace($rootScope.i18new.customer_realnameauth_link_goAuth, [ type ]) + '</span>';
                $scope = this.createNode($scope, type);
                $('#' + id).html($scope);
            };
            this.countTime = function(Time) {
                var data_obj = {
                    'd': 0,
                    'h': 0,
                    'm': 0,
                    's': 0,
                    'show': ''
                }, nowTime = new Date().getTime(), Time = new Date(Time).getTime(), Time = Math.abs(Time - nowTime);
                data_obj.d = Math.floor(Time / 864e5);
                data_obj.h = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24) / 36e5);
                data_obj.m = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24 - 1e3 * data_obj.h * 60 * 60) / 6e4);
                data_obj.s = Math.floor((Time - 1e3 * data_obj.d * 60 * 60 * 24 - 1e3 * data_obj.h * 60 * 60 - 1e3 * data_obj.m * 60) / 1e3);
                data_obj.show = 0 < data_obj.d ? 1 < data_obj.d ? data_obj.d + i18new.periodType_days : data_obj.d + i18new.periodType_day : 0 < data_obj.h ? data_obj.h + i18new.periodType_hours : 0 < data_obj.m ? 1 < data_obj.m ? data_obj.m + i18new.periodType_minutes : data_obj.m + i18new.periodType_minute : data_obj.s + i18new.periodType_seconds;
                return data_obj;
            };
            this.getDataCenter = function(callBack) {
                var respromis = camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/regions/multiple/alldetails',
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
                if (callBack) return respromis.then(function(data) {
                    callBack(data);
                }).catch(function() {
                    var tempdata = i18rspdata.allregion || [];
                    callBack(tempdata);
                }), null;
                return respromis;
            };
            this.getNewDataCenterSelect = function(callback, dcrType) {
                var data, obj = this;
                camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/regions/multiple/alldetails',
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                }).then(function(rspdata) {
                    data = obj.translateDc(rspdata);
                }).catch(function() {
                    var tempdata = i18rspdata.allregion || [];
                    data = obj.translateDc(tempdata);
                }).finally(function() {
                    var i, select, dataCenterSelect = [];
                    dataCenterSelect.push({
                        'label': i18new.all,
                        'id': '0'
                    });
                    window.dataCenterListCache = {};
                    window.regionCodeListCache = {};
                    $rootScope.availableAreas = [];
                    if (data) for (i = 0; i < data.length; i++) {
                        data[i].regionName = $.encoder.encodeForHTML(data[i].regionName);
                        window.dataCenterListCache[data[i].dcId] = data[i];
                        window.regionCodeListCache[data[i].regionCode] = data[i];
                        if (!dcrType || 1 !== Number(dcrType) || Number(dcrType) === Number(data[i].dcrType)) {
                            (select = {}).id = data[i].dcId;
                            select.label = data[i].regionName;
                            data[i].disable || dataCenterSelect.push(select);
                            1 === Number(data[i].dcrType) && $rootScope.availableAreas.push(data[i].regionName);
                        }
                    }
                    callback && callback(dataCenterSelect);
                });
            };
            this.getRegionNameByDcIds = function(dataCenterIds, dataCenterListCache) {
                var tempNameArray, name, regionName;
                dataCenterListCache = dataCenterListCache || [];
                0;
                tempNameArray = [];
                name = '';
                (dataCenterIds = (dataCenterIds = dataCenterIds || '').split(',')) && dataCenterIds.length && _.each(dataCenterIds, function(item) {
                    regionName = dataCenterListCache[item] && dataCenterListCache[item].regionName || '';
                    tempNameArray.push(regionName);
                });
                return name = tempNameArray.length ? tempNameArray.join('、') : name;
            };
            this.queryCustomersBEs = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/be-info',
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryHistoryBeInfo = function(subAccount) {
                var req = {
                    'url': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/customers/suppliers',
                    'params': {
                        'usage': 1
                    },
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                };
                if (subAccount) {
                    req.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/csb/csbpartnerresellerservice/v1/customers/suppliers';
                    req.beforeSend = function(request) {
                        request.setRequestHeader('X-Sub-Cust-Id', subAccount);
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    };
                }
                return camel.get(req);
            };
            this.queryDebtbusiness = function(pageno, pagesize, currentDomainId) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/CSBBillingDeductService/rest/billing/deductservice/v1/debtbusiness',
                    'timeout': 6e4,
                    'params': {
                        'customerId': currentDomainId || $rootScope.domainId,
                        'pageNo': pageno,
                        'pageSize': pagesize
                    },
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getDataCenterSelect = function(callback, dcrType) {
                return this.queryDataCenterList.then(function(data) {
                    var i, select, dataCenterSelect = [];
                    dataCenterSelect.push({
                        'label': i18new.all,
                        'id': '0'
                    });
                    window.dataCenterListCache = {};
                    if (data) for (i = 0; i < data.length; i++) {
                        data[i].regionName = $.encoder.encodeForHTML(data[i].regionName);
                        window.dataCenterListCache[data[i].dcId] = data[i];
                        if (!dcrType || 1 !== Number(dcrType) || Number(dcrType) === Number(data[i].dcrType)) {
                            (select = {}).id = data[i].dcId;
                            select.label = data[i].regionName;
                            dataCenterSelect.push(select);
                        }
                    }
                    callback(dataCenterSelect);
                });
            };
            this.getCloudServiceSelect = function(serviceTypeCode) {
                var object, cloudServiceTypesSelect = [];
                cloudServiceTypesSelect.push({
                    'label': i18new.all,
                    'id': '0'
                });
                return (object = this).queryServiceType(serviceTypeCode).then(function(data) {
                    var temp, t_service, i, cloudServerName;
                    if (data && RSP_SUCCESS === Number(data.retCode)) {
                        temp = null === data.serviceTypes || void 0 === data.serviceTypes ? [] : data.serviceTypes;
                        t_service = {};
                        for (i = 0; i < temp.length; i++) if ((cloudServerName = object.getCloudServerName(temp[i].serviceTypeCode)) !== temp[i].serviceTypeCode) {
                            t_service.label = cloudServerName;
                            t_service.id = String(temp[i].serviceTypeCode);
                            cloudServiceTypesSelect.push(t_service);
                        }
                    }
                    return cloudServiceTypesSelect;
                }).catch(function() {
                    return cloudServiceTypesSelect;
                });
            };
            this.initHistoryBes = function(callback, defaultSelectid, isall, subAccount) {
                this.queryHistoryBeInfo(subAccount).then(function(data) {
                    var currentBeIds, historyBeIds, totalBeIds;
                    $rootScope.beIDShow = !1;
                    $rootScope.historyBeIDShow = !1;
                    $rootScope.totalBeIDShow = !1;
                    $rootScope.csbBeId = null;
                    $rootScope.bpBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.processStatus = 0;
                    $rootScope.BEs = {};
                    currentBeIds = [];
                    historyBeIds = [];
                    totalBeIds = [];
                    if (isall && 0 < data.suppliers.length) {
                        currentBeIds = [ {
                            'label': i18new.all,
                            'id': ''
                        } ];
                        totalBeIds = [ {
                            'label': i18new.all,
                            'id': ''
                        } ];
                    }
                    if (data && data.suppliers && 0 < data.suppliers.length) {
                        (function(data, currentBeIds, historyBeIds, totalBeIds) {
                            var i, totalBe_tmp, hisbe_tmp, t_totalBeIds = [], t_historyBeIds = [], t_currentBeIds = [];
                            for (i in data.suppliers) if (data.suppliers[i].beID) {
                                data.suppliers[i].name = $.encoder.encodeForHTML(data.suppliers[i].name);
                                data.suppliers[i].beName = data.suppliers[i].name;
                                if (data.suppliers[i].name && i18new['beName_' + data.suppliers[i].name]) {
                                    data.suppliers[i].name = i18new['beName_' + data.suppliers[i].name];
                                    data.suppliers[i].beName = data.suppliers[i].name;
                                }
                                $rootScope.BEs[data.suppliers[i].beID] = data.suppliers[i];
                                if ($.inArray(data.suppliers[i].beID, t_totalBeIds) < 0) {
                                    t_totalBeIds.push(data.suppliers[i].beID);
                                    (totalBe_tmp = {}).id = data.suppliers[i].beID;
                                    totalBe_tmp.beType = data.suppliers[i].beType;
                                    totalBe_tmp.beName = data.suppliers[i].name;
                                    Number(data.suppliers[i].beType) === BETYPE_CSB ? totalBe_tmp.label = i18new.userindex_hw_service : totalBe_tmp.label = data.suppliers[i].name || i18new.userindex_distributor;
                                    totalBeIds.push(totalBe_tmp);
                                }
                                if ('1' === data.suppliers[i].status) {
                                    if ($.inArray(data.suppliers[i].beID, t_currentBeIds) < 0) {
                                        t_currentBeIds.push(data.suppliers[i].beID);
                                        (totalBe_tmp = {}).id = data.suppliers[i].beID;
                                        totalBe_tmp.beType = data.suppliers[i].beType;
                                        totalBe_tmp.beName = data.suppliers[i].name;
                                        if (Number(data.suppliers[i].beType) === BETYPE_CSB) {
                                            $rootScope.csbBeId = data.suppliers[i].beID;
                                            $rootScope.csbBeName = null === data.suppliers[i].beName || void 0 === data.suppliers[i].beName ? i18new.userindex_hw_service : data.suppliers[i].beName;
                                            totalBe_tmp.label = i18new.userindex_hw_service;
                                        } else {
                                            $rootScope.bpBeId = data.suppliers[i].beID;
                                            $rootScope.bpBeName = null === data.suppliers[i].beName || void 0 === data.suppliers[i].beName ? i18new.userindex_distributor : data.suppliers[i].beName;
                                            totalBe_tmp.label = data.suppliers[i].name || i18new.userindex_distributor;
                                        }
                                        currentBeIds.push(totalBe_tmp);
                                    }
                                } else if ('2' === data.suppliers[i].status && $.inArray(data.suppliers[i].beID, t_historyBeIds) < 0) {
                                    t_historyBeIds.push(data.suppliers[i].beID);
                                    (hisbe_tmp = {}).id = data.suppliers[i].beID;
                                    hisbe_tmp.beType = data.suppliers[i].beType;
                                    hisbe_tmp.beName = data.suppliers[i].name;
                                    Number(data.suppliers[i].beType) === BETYPE_CSB ? hisbe_tmp.label = i18new.userindex_hw_service : hisbe_tmp.label = data.suppliers[i].name || i18new.userindex_distributor;
                                    historyBeIds.push(hisbe_tmp);
                                }
                            }
                        })(data, currentBeIds, historyBeIds, totalBeIds);
                        (!isall && 1 < currentBeIds.length || isall && 2 < currentBeIds.length) && ($rootScope.beIDShow = !0);
                        (!isall && 1 < historyBeIds.length || isall && 2 < historyBeIds.length) && ($rootScope.historyBeIDShow = !0);
                        (!isall && 1 < totalBeIds.length || isall && 2 < totalBeIds.length) && ($rootScope.totalBeIDShow = !0);
                        currentBeIds.sort(function(a, b) {
                            return b.beType - a.beType;
                        });
                        historyBeIds.sort(function(a, b) {
                            return b.beType - a.beType;
                        });
                        totalBeIds.sort(function(a, b) {
                            return b.beType - a.beType;
                        });
                    }
                    $rootScope.beidOptions = currentBeIds;
                    $rootScope.historyBeidOptions = historyBeIds;
                    $rootScope.totalBeIds = totalBeIds;
                    $rootScope.beId = defaultSelectid || (isall ? '' : null !== $rootScope.bpBeId ? $rootScope.bpBeId : $rootScope.csbBeId);
                    callback();
                }).catch(function() {
                    $rootScope.beIDShow = !1;
                    $rootScope.historyBeIDShow = !1;
                    $rootScope.totalBeIDShow = !1;
                    $rootScope.csbBeId = null;
                    $rootScope.bpBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.processStatus = 0;
                    $rootScope.BEs = {};
                    callback();
                });
            };
            this.initBes = function(callback, defaultSelectid, all) {
                this.queryCustomersBEs().then(function(data) {
                    var beIds, _beID, i, be_tmp;
                    $rootScope.beId = defaultSelectid || '';
                    $rootScope.beIDShow = !1;
                    $rootScope.csbBeId = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.BEs = {};
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeName = null;
                    beIds = [];
                    _beID = [];
                    all && (beIds = [ {
                        'label': i18new.all,
                        'id': ''
                    } ]);
                    if (data && data.cusInfoList && 0 < data.cusInfoList.length) {
                        for (i in data.cusInfoList) if (data.cusInfoList[i].beId) {
                            data.cusInfoList[i].beName && i18new['beName_' + data.cusInfoList[i].beName] && (data.cusInfoList[i].beName = i18new['beName_' + data.cusInfoList[i].beName]);
                            $rootScope.BEs[data.cusInfoList[i].beId] = data.cusInfoList[i];
                            if ($.inArray(data.cusInfoList[i].beId, _beID) < 0) {
                                be_tmp = {};
                                _beID.push(data.cusInfoList[i].beId);
                                be_tmp.id = data.cusInfoList[i].beId;
                                be_tmp.beType = data.cusInfoList[i].beType;
                                !data.cusInfoList[i].isDefaultBe || all || defaultSelectid || ($rootScope.beId = data.cusInfoList[i].beId);
                                if (Number(data.cusInfoList[i].beType) === BETYPE_CSB) {
                                    $rootScope.csbBeId = data.cusInfoList[i].beId;
                                    be_tmp.label = i18new.userindex_hw_service;
                                    $rootScope.csbBeName = null === data.cusInfoList[i].beName || void 0 === data.cusInfoList[i].beName ? i18new.userindex_hw_service : data.cusInfoList[i].beName;
                                } else {
                                    $rootScope.bpBeId = data.cusInfoList[i].beId;
                                    $rootScope.bpEffectiveTime = data.cusInfoList[i].effectiveTime;
                                    be_tmp.label = data.cusInfoList[i].beName || i18new.userindex_distributor;
                                    $rootScope.bpBeName = null === data.cusInfoList[i].beName || void 0 === data.cusInfoList[i].beName ? i18new.userindex_distributor : data.cusInfoList[i].beName;
                                }
                                1 === Number(data.cusInfoList[i].beType) ? beIds.push(be_tmp) : all ? beIds.splice(1, 0, be_tmp) : beIds.splice(0, 0, be_tmp);
                            }
                        }
                        1 < _beID.length && ($rootScope.beIDShow = !0);
                    }
                    $rootScope.beidOptions = beIds;
                    callback();
                }).catch(function() {
                    $rootScope.beId = defaultSelectid || '';
                    $rootScope.beIDShow = !1;
                    $rootScope.csbBeId = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.BEs = {};
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeName = null;
                    callback();
                });
            };
            this.getMainBeInit = function(callback) {
                this.queryCustomersBEs().then(function(data) {
                    var i, validTime_valid;
                    $rootScope.bindType = 9;
                    $rootScope.csbBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpBeName = null;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.csbCustomerId = null;
                    $rootScope.BEs = {};
                    if (data && data.cusInfoList && 0 < data.cusInfoList.length) for (i in data.cusInfoList) if (data.cusInfoList[i].beId) {
                        data.cusInfoList[i].beName = $.encoder.encodeForHTML(data.cusInfoList[i].beName);
                        data.cusInfoList[i].beName && i18new['beName_' + data.cusInfoList[i].beName] && (data.cusInfoList[i].beName = i18new['beName_' + data.cusInfoList[i].beName]);
                        $rootScope.BEs[data.cusInfoList[i].beId] = data.cusInfoList[i];
                        new Date().getTime();
                        validTime_valid = data.cusInfoList[i].effectiveTime;
                        Date.parse(validTime_valid);
                        if (Number(data.cusInfoList[i].beType) === BETYPE_CSB) {
                            $rootScope.csbBeId = data.cusInfoList[i].beId;
                            $rootScope.csbCustomerId = data.cusInfoList[i].customerId;
                            $rootScope.csbBeName = null === data.cusInfoList[i].beName || void 0 === data.cusInfoList[i].beName ? i18new.userindex_hw_service : data.cusInfoList[i].beName;
                        } else if (Number(data.cusInfoList[i].beType) === BETYPE_PARTNER) {
                            $rootScope.bpBeId = data.cusInfoList[i].beId;
                            $rootScope.bpBeName = null === data.cusInfoList[i].beName || void 0 === data.cusInfoList[i].beName ? i18new.userindex_distributor : data.cusInfoList[i].beName;
                            $rootScope.bpEffectiveTime = data.cusInfoList[i].effectiveTime;
                        }
                    }
                    callback && callback();
                }).catch(function(rsp) {
                    $rootScope.bindType = 9;
                    $rootScope.csbBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpBeName = null;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.csbCustomerId = null;
                    $rootScope.BEs = {};
                    callback && callback();
                    try {
                        PMP && PMP.RavenSendException(JSON.stringify(rsp.error()), 'promotion-error-tag', 'error');
                    } catch (err) {}
                });
            };
            this.getPhone = function(userId, hideMask) {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name_spacial + '/rest/cbc/cbccustmgrservice/v1/customer/brief/{userid}',
                        'o': {
                            'userid': userId
                        }
                    },
                    'mask': !hideMask,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getBuildCaptcha = function(param) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/csbmessagecenterservice/v1/captcha/buildCaptcha',
                    'params': param,
                    'timeout': 6e4,
                    'mask': !0,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.sendCode = function(param) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbmessagecenterservice/v1/verificationcode/send',
                    'params': param,
                    'timeout': 6e4,
                    'mask': !0,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.checkCode = function(param) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbmessagecenterservice/v1/verificationcode/check',
                    'params': param,
                    'timeout': 6e4,
                    'mask': !0,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getNewBuildCaptcha = function(param) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/csbmessagecenterservice/v1/captcha/buildCaptcha',
                    'params': param,
                    'timeout': 6e4,
                    'mask': !0,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryMeasureUnitAll = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/systemconf/measurement/queryMeasureUnitAll',
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.resolveMeasureUnitList = function(callback) {
                $rootScope.measureUnitAll = [];
                this.queryMeasureUnitAll().then(function(data) {
                    var unitName, measureUnitList, i;
                    if (data && RSP_SUCCESS === Number(data.resultCode) && 0 < data.measureUnitList.length) {
                        unitName = 'unitENName';
                        'zh-cn' === $rootScope.currentLanguage && (unitName = 'unitCNName');
                        if ((measureUnitList = data.measureUnitList) && 0 < measureUnitList.length) for (i in measureUnitList) !measureUnitList[i].measureID && 0 !== measureUnitList[i].measureID || ($rootScope.measureUnitAll[measureUnitList[i].measureID] = $.encoder.encodeForHTML(measureUnitList[i][unitName]));
                    }
                    callback && callback();
                }).catch(function() {
                    var measureUnitList, i, tmpmeasure = i18rspdata.allmeasure, unitName = 'unitENName';
                    'zh-cn' === $rootScope.currentLanguage && (unitName = 'unitCNName');
                    if ((measureUnitList = tmpmeasure.measureUnitList) && 0 < measureUnitList.length) for (i in measureUnitList) !measureUnitList[i].measureID && 0 !== measureUnitList[i].measureID || ($rootScope.measureUnitAll[measureUnitList[i].measureID] = $.encoder.encodeForHTML(measureUnitList[i][unitName]));
                    callback && callback();
                });
            };
            this.parseToUTCTime = function(Time) {
                if (Time) {
                    Time = Time.replace(/-/g, '/');
                    Time = new Date(Time);
                } else Time = new Date();
                return $filter('date')(Time, 'yyyy-MM-ddTHH:mm:ss\'Z\'', 'UTC');
            };
            this.getCloudServerName0 = function(serviceTypeCode) {
                var seName = serviceTypeCode;
                serviceTypeCode || (seName = '--');
                try {
                    i18new[serviceTypeCode] ? seName = i18new[serviceTypeCode] : i18new['productClass_' + serviceTypeCode] && (seName = i18new['productClass_' + serviceTypeCode]);
                } catch (e) {
                    seName = serviceTypeCode;
                }
                return $.encoder.encodeForHTML(seName);
            };
            this.getCloudResourceName0 = function(resourceTypeCode) {
                var reName = resourceTypeCode;
                resourceTypeCode || (reName = '--');
                try {
                    i18new[resourceTypeCode] ? reName = i18new[resourceTypeCode] : i18new['resource_' + resourceTypeCode] && (reName = i18new['resource_' + resourceTypeCode]);
                } catch (e) {
                    reName = resourceTypeCode;
                }
                return $.encoder.encodeForHTML(reName);
            };
            this.getProductServierTypeSelectData0 = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudServierType = G_ClOUDSERVICETYPE, CloudServierType_Len = CloudServierType.length;
                for (i = 0; i < CloudServierType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudServierType[i]) || 'ESC' === serviceType && isNaN(CloudServierType[i])) continue;
                    (typeSelect = {
                        'id': CloudServierType[i]
                    }).label = this.getCloudServerName0(CloudServierType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.getProductServierTypeSelectDataForOrder0 = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudServierType = G_ClOUDSERVICETYPE, CloudServierType_Len = CloudServierType.length;
                for (i = 0; i < CloudServierType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudServierType[i]) || 'ESC' === serviceType && isNaN(CloudServierType[i])) continue;
                    if ('hws.service.deduct.precision' === CloudServierType[i]) continue;
                    (typeSelect = {
                        'id': CloudServierType[i]
                    }).label = this.getCloudServerName0(CloudServierType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.getResourceTypeSelectData0 = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudResourceType = G_ClOUDRESOURCETYPE, CloudResourceType_Len = CloudResourceType.length;
                for (i = 0; i < CloudResourceType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudResourceType[i]) || 'ESC' === serviceType && isNaN(CloudResourceType[i])) continue;
                    (typeSelect = {
                        'id': CloudResourceType[i]
                    }).label = this.getCloudResourceName0(CloudResourceType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.getProductServierTypeSelectData = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudServierType = G_ClOUDSERVICETYPE, CloudServierType_Len = CloudServierType.length;
                for (i = 0; i < CloudServierType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudServierType[i]) || 'ESC' === serviceType && isNaN(CloudServierType[i])) continue;
                    (typeSelect = {
                        'id': CloudServierType[i]
                    }).label = this.getCloudServerName(CloudServierType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.getProductServierTypeSelectDataForOrder = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudServierType = G_ClOUDSERVICETYPE, CloudServierType_Len = CloudServierType.length;
                for (i = 0; i < CloudServierType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudServierType[i]) || 'ESC' === serviceType && isNaN(CloudServierType[i])) continue;
                    if ('hws.service.deduct.precision' === CloudServierType[i]) continue;
                    (typeSelect = {
                        'id': CloudServierType[i]
                    }).label = this.getCloudServerName(CloudServierType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.getResourceTypeSelectData = function(serviceType) {
                var i, typeSelect, typeSelects = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ], CloudResourceType = G_ClOUDRESOURCETYPE, CloudResourceType_Len = CloudResourceType.length;
                for (i = 0; i < CloudResourceType_Len; i++) {
                    if ('OPENSTACK' === serviceType && !isNaN(CloudResourceType[i]) || 'ESC' === serviceType && isNaN(CloudResourceType[i])) continue;
                    (typeSelect = {
                        'id': CloudResourceType[i]
                    }).label = this.getCloudResourceName(CloudResourceType[i]);
                    typeSelects.push(typeSelect);
                }
                return typeSelects;
            };
            this.queryCustomerBankSubAccount = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/csb-financial-service/v1/customerbanksubaccount/query',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getBankName = function(bankId) {
                var bankname = '';
                try {
                    i18new['bankId_' + bankId] && (bankname = i18new['bankId_' + bankId]);
                } catch (e) {
                    bankname = '';
                }
                return bankname;
            };
            this.applyCustomerBankSubAccount = function(params, picRandomCode) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/csb/csbfinancialservice/v1/banksubaccount/auto-binding',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request, setting) {
                        picRandomCode && request.setRequestHeader('X-PicRandomCode', picRandomCode);
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.translateDc = function(data) {
                var k, i, support_regions = [];
                if ($rootScope.regions && 0 < $rootScope.regions.length) for (k in $rootScope.regions) $rootScope.regions[k].id && support_regions.push($rootScope.regions[k].id);
                try {
                    if (data && 0 < data.length) for (i in data) data[i] && data[i].regionId && -1 === $.inArray(data[i].regionId, support_regions) && (data[i].disable = !0);
                } catch (e) {}
                return data;
            };
            this.translateAd = function(tempCloudService, flag) {
                var data, support_regions, k;
                data = flag ? [ {
                    'title': $rootScope.i18expenseV1r2.all_region,
                    'id': 'all'
                } ] : [ {
                    'label': $rootScope.i18expenseV1r2.all_region,
                    'id': '0'
                } ];
                support_regions = [];
                if ($rootScope.regions && 0 < $rootScope.regions.length) for (k in $rootScope.regions) $rootScope.regions[k].id && support_regions.push($rootScope.regions[k].id);
                try {
                    _.each(tempCloudService, function(item) {
                        item.regionId && -1 !== $.inArray(item.regionId, support_regions) && (flag ? data.push({
                            'id': item.regionId,
                            'title': item.regionName
                        }) : data.push({
                            'id': item.regionCode,
                            'label': item.regionName,
                            'dcId': item.dcId
                        }));
                    });
                } catch (e) {}
                return data;
            };
            this.getProjectInfo = function(params, subaccountId) {
                var customerId = $rootScope.domainId;
                params.customer_id = customerId = subaccountId ? subaccountId : customerId;
                customerId = {
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-project/projects',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                };
                if (subaccountId) {
                    customerId.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbccustmgrservice/v1/customer-project/projects';
                    customerId.beforeSend = function(request) {
                        request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    };
                }
                return camel.post(customerId);
            };
            this.batchGetPartys = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/v1/org/batch-get-partys',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryTreeTopDown = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/v1/org/tree-top-down',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryTreeTopDownFun = function(rootTreeId, callback, querysub) {
                rootTreeId = {
                    'owner_party_id': rootTreeId,
                    'party_id': rootTreeId,
                    'relation_types': [ 1, 2 ],
                    'recursive_query': 1,
                    'include_expired_relation': 0
                };
                querysub && (rootTreeId.pri_customer_id = $rootScope.domainId);
                this.queryTreeTopDown(rootTreeId).then(function(data) {
                    if (data && ENT_RSP_SUCCESS === Number(data.error_code)) return $rootScope.enterPriseInfo = treeFunc(data.child_party_nodes, callback), 
                    $rootScope.partyRight = !0;
                    return !1;
                }).catch(function() {
                    return !1;
                });
            };
            this.queryTreeTopDownFun_new = function(rootTreeId, callback, querysub) {
                rootTreeId = {
                    'owner_party_id': rootTreeId,
                    'party_id': rootTreeId,
                    'relation_types': [ 1, 2 ],
                    'recursive_query': 1,
                    'include_expired_relation': 0
                };
                querysub && (rootTreeId.pri_customer_id = $rootScope.domainId);
                this.queryTreeTopDown(rootTreeId).then(function(data) {
                    if (data && ENT_RSP_SUCCESS === Number(data.error_code)) {
                        if (querysub) {
                            $rootScope.sub_enterPriseInfo = function(data, callback) {
                                var i, treeChildNode1, selectData11, j, treeChildNode2, selectData22, k, treeNode, enterPriseInfo = [], treeDatas = data, treeNodeSelect = [ {
                                    'label': i18new.enterPrise_tree_all,
                                    'id': 'all'
                                } ], treeChilds1 = {}, treeChilds2 = {};
                                for (i = 0; i < treeDatas.length; i++) if (3 !== Number(treeDatas[i].to_party_type)) {
                                    treeNodeSelect.push({
                                        'label': $.encoder.encodeForHTML(treeDatas[i].to_party_name),
                                        'id': treeDatas[i].to_party_id
                                    });
                                    if (treeChildNode1 = treeDatas[i].child_party_nodes) {
                                        treeChilds1[treeDatas[i].to_party_id] = [ {
                                            'label': i18new.enterPrise_tree_all,
                                            'id': 'all'
                                        } ];
                                        for (j = 0; j < treeChildNode1.length; j++) if (3 !== Number(treeChildNode1[j].to_party_type)) {
                                            selectData11 = {
                                                'label': $.encoder.encodeForHTML(treeChildNode1[j].to_party_name),
                                                'id': treeChildNode1[j].to_party_id
                                            };
                                            treeChilds1[treeDatas[i].to_party_id].push(selectData11);
                                            if (treeChildNode2 = treeChildNode1[j].child_party_nodes) {
                                                treeChilds2[treeChildNode1[j].to_party_id] = [ {
                                                    'label': i18new.enterPrise_tree_all,
                                                    'id': 'all'
                                                } ];
                                                for (k = 0; k < treeChildNode2.length; k++) if (3 != treeChildNode2[k].to_party_type) {
                                                    selectData22 = {
                                                        'label': $.encoder.encodeForHTML(treeChildNode2[k].to_party_name),
                                                        'id': treeChildNode2[k].to_party_id
                                                    };
                                                    treeChilds2[treeChildNode1[j].to_party_id].push(selectData22);
                                                }
                                            }
                                        }
                                    }
                                }
                                $rootScope.sub_treePartyId = void 0;
                                $rootScope.sub_treePartyId1 = void 0;
                                $rootScope.sub_treePartyId2 = void 0;
                                $rootScope.sub_treePartyId3 = void 0;
                                $rootScope.sub_treePartyName = '';
                                $rootScope.sub_treePartyName1 = '';
                                $rootScope.sub_treePartyName2 = '';
                                $rootScope.sub_treePartyName3 = '';
                                treeNode = {
                                    'id': 'level0',
                                    'elementId': 'select_level0',
                                    'selectedId': 'all',
                                    'show': !(treeChild2 = {
                                        'id': 'level2',
                                        'elementId': 'select_level2',
                                        'show': !(treeChild1 = {
                                            'id': 'level1',
                                            'elementId': 'select_level1',
                                            'show': !1,
                                            'selectedId': 'all',
                                            'disable': !1,
                                            'options': [],
                                            'change': function(option) {
                                                $rootScope.sub_treePartyId3 = void 0;
                                                if ('all' !== option.id) {
                                                    if (1 < treeChilds2[option.id].length) {
                                                        treeChild2.options = treeChilds2[option.id];
                                                        treeChild2.show = !0;
                                                        treeChild2.selectedId = 'all';
                                                    } else {
                                                        treeChild2.options = [];
                                                        treeChild2.show = !1;
                                                    }
                                                    $rootScope.sub_treePartyId2 = option.id;
                                                    $rootScope.sub_treePartyName2 = option.label;
                                                } else {
                                                    treeChild2.options = [];
                                                    treeChild2.show = !1;
                                                    $rootScope.sub_treePartyId2 = '';
                                                    $rootScope.sub_treePartyName2 = '';
                                                }
                                                $rootScope.sub_treePartyId = $rootScope.sub_treePartyId2 || $rootScope.sub_treePartyId1;
                                                $rootScope.sub_treePartyName2 && ($rootScope.sub_treePartyName = $rootScope.sub_treePartyName + '/' + $rootScope.sub_treePartyName2);
                                                callback();
                                            }
                                        }),
                                        'selectedId': 'all',
                                        'disable': !1,
                                        'options': [],
                                        'change': function(option) {
                                            $rootScope.sub_treePartyId3 = $rootScope.sub_treePartyId2 ? option.id : '';
                                            $rootScope.sub_treePartyName3 = $rootScope.sub_treePartyName2 ? option.label : '';
                                            $rootScope.sub_treePartyId = $rootScope.sub_treePartyId3 || $rootScope.sub_treePartyId2 || $rootScope.sub_treePartyId1;
                                            $rootScope.sub_treePartyName3 && ($rootScope.sub_treePartyName = $rootScope.sub_treePartyName + '/' + $rootScope.sub_treePartyName3);
                                            callback();
                                        }
                                    }),
                                    'options': treeNodeSelect,
                                    'change': function(option) {
                                        $rootScope.sub_treePartyId3 = void 0;
                                        $rootScope.sub_treePartyId2 = void 0;
                                        if (1 < treeNodeSelect.length) {
                                            $rootScope.sub_partyRight = !0;
                                            treeNode.show = !0;
                                            if ('all' !== option.id) {
                                                if (1 < treeChilds1[option.id].length) {
                                                    treeChild1.options = treeChilds1[option.id];
                                                    treeChild1.show = !0;
                                                    treeChild1.selectedId = 'all';
                                                } else {
                                                    treeChild1.options = [];
                                                    treeChild1.show = !1;
                                                }
                                                treeChild2.options = [];
                                                treeChild2.show = !1;
                                                $rootScope.sub_treePartyId1 = option.id;
                                                $rootScope.sub_treePartyName1 = option.label;
                                            } else {
                                                treeChild1.options = [];
                                                treeChild1.show = !1;
                                                treeChild2.options = [];
                                                treeChild2.show = !1;
                                                $rootScope.sub_treePartyId1 = void 0;
                                                $rootScope.sub_treePartyName1 = '';
                                            }
                                            $rootScope.sub_treePartyId = $rootScope.sub_treePartyId1;
                                            $rootScope.sub_treePartyName = $rootScope.sub_treePartyName1;
                                            callback();
                                        } else {
                                            $rootScope.sub_partyRight = !1;
                                            treeNode.show = !1;
                                        }
                                    }
                                };
                                if (1 < treeNodeSelect.length) {
                                    treeNode.show = !0;
                                    enterPriseInfo = [ treeNode, treeChild1, treeChild2 ];
                                }
                                return enterPriseInfo;
                            }(data.child_party_nodes, callback);
                            $rootScope.sub_partyRight = !0;
                        } else {
                            $rootScope.enterPriseInfo = treeFunc(data.child_party_nodes, callback);
                            $rootScope.partyRight = !0;
                        }
                        return !0;
                    }
                    return !1;
                }).catch(function() {
                    return !1;
                });
            };
            this.getEmInfos = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/v1/em/account/get-em-infos',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryBusinessService = function(params) {
                return camel.post({
                    'url': window.appWebPath + '/rest/uc.cbc/rest/cbc/cbccustomerorgservice/v1/em/business-service-query',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !0
                });
            };
            this.queryBpInfo = function() {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/customers/bind-info/{customerID}',
                        'o': {
                            'customerID': $rootScope.domainId
                        }
                    },
                    'mask': !1,
                    'timeout': 6e4,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getPartnerCallbackurl = function(params) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/openapi/v1/page_customization/customer/callbackurl',
                    'mask': !1,
                    'timeout': 12e4,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getCustomersBasicInfo = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/get-customers-basic-info',
                    'timeout': 6e4,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getBindInfo = function() {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/customers/bind-info/{customerID}',
                        'o': {
                            'customerID': $rootScope.domainId || window.domainId
                        }
                    },
                    'params': {
                        'usage': 1
                    },
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getBindInfoInit = function(callback) {
                this.getBindInfo().then(function(data) {
                    var beList, i;
                    $rootScope.csbBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpBeName = null;
                    $rootScope.processStatus = 0;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.csbCustomerId = null;
                    $rootScope.BEs = {};
                    $rootScope.bindType = BINDTYPE_BOTH;
                    $rootScope.accountCombine = !1;
                    $rootScope.accountIsShow = 0;
                    $rootScope.agentPayFeeAscription = 0;
                    if (data && RSP_SUCCESS === parseInt(data.retCode) && data.result) {
                        $rootScope.bindType = data.result.bindType;
                        $rootScope.processStatus = data.result.processStatus;
                        $rootScope.isPostpaidBp = data.result.isPostpaidBp;
                        $rootScope.isPostpaidSwitch = data.result.isPostpaidSwitch;
                        $rootScope.accountIsShow = data.result.isShow;
                        $rootScope.agentPayFeeAscription = data.result.agentPayFeeAscription || 0;
                        if ((beList = data.result.beList) && 0 < beList.length) for (i in beList) if (beList[i] && beList[i].beType) {
                            beList[i].beName = $.encoder.encodeForHTML(beList[i].beShowName);
                            if (beList[i].beShowName && i18new['beName_' + beList[i].beShowName]) {
                                beList[i].beShowName = i18new['beName_' + beList[i].beShowName];
                                beList[i].beName = beList[i].beShowName;
                            }
                            $rootScope.BEs[beList[i].beID] = beList[i];
                            if (Number(beList[i].status) === BESTATUS_VALID) if (Number(beList[i].beType) === BETYPE_CSB) {
                                $rootScope.csbBeId = beList[i].beID;
                                $rootScope.csbBeName = null === beList[i].beName || void 0 === beList[i].beName ? i18new.userindex_hw_service : beList[i].beName;
                            } else {
                                $rootScope.bpBeId = beList[i].beID;
                                $rootScope.bpBeName = null === beList[i].beName || void 0 === beList[i].beName ? i18new.userindex_distributor : beList[i].beName;
                            }
                        }
                        $rootScope.csbBeId && $rootScope.bpBeId || ($rootScope.accountCombine = !0);
                        data.result.isSupportPartnerPay && ($rootScope.isSupportPartnerPay = data.result.isSupportPartnerPay);
                    }
                    callback && callback();
                }).catch(function(rsp) {
                    $rootScope.csbBeId = null;
                    $rootScope.csbBeName = null;
                    $rootScope.bpBeId = null;
                    $rootScope.bpBeName = null;
                    $rootScope.processStatus = 0;
                    $rootScope.bpEffectiveTime = null;
                    $rootScope.csbCustomerId = null;
                    $rootScope.BEs = {};
                    $rootScope.bindType = BINDTYPE_BOTH;
                    $rootScope.accountCombine = !1;
                    $rootScope.accountIsShow = 0;
                    $rootScope.agentPayFeeAscription = 0;
                    callback && callback();
                    try {
                        PMP && PMP.RavenSendException(JSON.stringify(rsp.error()), 'promotion-error-tag', 'error');
                    } catch (err) {}
                });
            };
            this.getBeInfoInit = function(callback, currentRoleTags) {
                currentRoleTags && 0 !== currentRoleTags.length || (currentRoleTags = $rootScope.userRoles && 0 < $rootScope.userRoles.length ? $rootScope.userRoles : window.myRoleTags);
                var isPcVendorSubuser = !1;
                (isPcVendorSubuser = 0 <= $.inArray('op_gated_pc_vendor_subuser', currentRoleTags) || 0 <= $.inArray('op_pc_vendor_subuser', currentRoleTags) ? !0 : isPcVendorSubuser) ? this.getBindInfoInit(callback) : this.getMainBeInit(callback);
            };
            this.callBIEvent = function(category, eventLabel) {
                var jsonParamEvent = {};
                jsonParamEvent.C1 = $rootScope.domainId || '';
                onEvent(category, 'click', eventLabel, 1, jsonParamEvent);
            };
            this.cloudBIDealEvent = function(category, EventLabel) {
                'undefined' != typeof onEvent && onEvent ? this.callBIEvent(category, EventLabel) : $rootScope.$on('cloudbiOK', function() {
                    this.callBIEvent(EventLabel);
                });
            };
            this.setCookie = function(cname, cvalue, days) {
                var d = new Date();
                d.setTime(d.getTime() + 24 * days * 60 * 60 * 1e3);
                d = 'expires=' + d.toUTCString();
                document.cookie = days ? cname + '=' + cvalue + ';' + d + ';path=/;domain=' + window.cloudCookieDomain : cname + '=' + cvalue + ';path=/;domain=' + window.cloudCookieDomain;
            };
            this.servicetypes = function(param) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v2/systemconf/configration/servicetypes',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': param,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getAbbreviationTranslate = function(abbreviation) {
                var str_result = '';
                return str_result = abbreviation ? 'zh-cn' !== $rootScope.currentLanguage ? ' (' + $.encoder.encodeForHTML(abbreviation) + ')' : ' ' + $.encoder.encodeForHTML(abbreviation) : str_result;
            };
            this.queryAllServices = function(version, param, callback) {
                var obj = this;
                $rootScope.allSevices = [];
                $rootScope.serviceTypeSelect = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                $rootScope.serviceTypeSelect_R2 = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                obj.servicetypes(param).then(function(data) {
                    var tempArr, i, abbreviation;
                    $rootScope.allSevices = [];
                    $rootScope.serviceTypeSelect = [ {
                        'label': i18new.consumedetail_servicetype_all,
                        'id': '0'
                    } ];
                    $rootScope.serviceTypeSelect_R2 = [ {
                        'label': i18new.consumedetail_servicetype_all,
                        'id': '0'
                    } ];
                    if (data && 'CBC.0000' === data.error_code && 0 < (tempArr = data.service_types || []).length) for (i = 0; i < tempArr.length; i++) {
                        abbreviation = obj.getAbbreviationTranslate(tempArr[i].abbreviation);
                        (0 === Number(tempArr[i].service_type_version) ? $rootScope.serviceTypeSelect_R2 : $rootScope.serviceTypeSelect).push({
                            'serviceDisName': $.encoder.encodeForHTML(tempArr[i].service_type_display_name),
                            'label': $.encoder.encodeForHTML(tempArr[i].service_type_display_name) + abbreviation,
                            'id': tempArr[i].service_type_code
                        });
                        $rootScope.allSevices[tempArr[i].service_type_code] = $.encoder.encodeForHTML(tempArr[i].service_type_display_name);
                    }
                    callback && callback('OPENSTACK' !== version && 'ESC' === version ? $rootScope.serviceTypeSelect_R2 : $rootScope.serviceTypeSelect);
                }).catch(function() {
                    callback && callback('ESC' === version ? obj.getProductServierTypeSelectData0('ESC') : obj.getProductServierTypeSelectData0('OPENSTACK'));
                });
            };
            this.resourcetypes = function(param) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v2/systemconf/configration/resourcetypes',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': param,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryAllResources = function(version, param, callback) {
                var obj = this;
                $rootScope.allResources = [];
                $rootScope.resourceTypeSelect = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                $rootScope.resourceTypeSelect_R2 = [ {
                    'label': i18new.consumedetail_servicetype_all,
                    'id': '0'
                } ];
                obj.resourcetypes(param).then(function(data) {
                    var tempResource, r;
                    if (data && 'CBC.0000' === data.error_code && 0 < (tempResource = data.resource_types || []).length) for (r = 0; r < tempResource.length; r++) {
                        (0 === Number(tempResource[r].resource_type_version) ? $rootScope.resourceTypeSelect_R2 : $rootScope.resourceTypeSelect).push({
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
            this.getCloudServerName = function(serviceTypeCode, type) {
                var tempServiceName = '';
                if (!serviceTypeCode) return '--';
                if ($rootScope.allSevices && $rootScope.allSevices[serviceTypeCode]) tempServiceName = $rootScope.allSevices[serviceTypeCode]; else if (i18new[serviceTypeCode]) tempServiceName = i18new[serviceTypeCode]; else {
                    type = 'noCode' === type ? '' : $.encoder.encodeForHTML(serviceTypeCode);
                    tempServiceName = i18new['productClass_' + serviceTypeCode] || type;
                }
                return tempServiceName;
            };
            this.getCloudResourceName = function(resourceTypeCode) {
                if (!resourceTypeCode) return '--';
                return $rootScope.allResources && $rootScope.allResources[resourceTypeCode] ? $rootScope.allResources[resourceTypeCode] : i18new[resourceTypeCode] || i18new['resource_' + resourceTypeCode] || '';
            };
            $rootScope.countryCodeOptions = [];
            $rootScope.countryCodeKeys = [];
            this.queryCountryCode = function(callback) {
                var param = {};
                param.dataType = 1;
                param.pageNo = -1;
                param.pageSize = -1;
                (function(param) {
                    return camel.get({
                        'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/datadictionary/query-by-type',
                        'timeout': 6e4,
                        'mask': !1,
                        'params': param,
                        'beforeSend': function(request) {
                            request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                        }
                    });
                })(param).then(function(data) {
                    var codeLists, i, option;
                    if ('CBC.0000' === data.error_code) {
                        codeLists = data.datadictionaryList;
                        for (i = 0; i < codeLists.length; i++) {
                            (option = {}).id = String(i);
                            option.label = $.encoder.encodeForHTML(codeLists[i].dataValue);
                            $rootScope.countryCodeOptions.push(option);
                            $rootScope.countryCodeKeys.push(codeLists[i].dataKey);
                        }
                        callback && callback();
                    } else msgService.showError($rootScope.i18new.nodata_part_tip);
                });
            };
            this.getRegistContry = function(code, callback) {
                code = camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/datadictionary/query-country',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'countryAbbreviation': code || '',
                        'lang': 'zh-cn'.toLowerCase(),
                        'pageNo': -1,
                        'pageSize': -1
                    },
                    'beforeSend': function(request) {
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
                return callback ? code.then(function(data) {
                    callback(data);
                }).catch(function(e) {}) : code;
            };
            this.getFunctionFlag = function(params, subaccountId) {
                var function_keys = [], paramsNew = {
                    'customer_id': params.customer_id
                };
                params.check_em_pri_customer && function_keys.push('em_pri_customer');
                params.check_project_group && function_keys.push('project_group');
                params.check_enterprise_project && function_keys.push('enterprise_project');
                params.check_multi_project && function_keys.push('multi_project');
                params.function_keys && 0 < params.function_keys.length ? paramsNew.function_keys = params.function_keys.concat(function_keys) : paramsNew.function_keys = function_keys;
                params = {
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/em-function-flag',
                    'params': paramsNew,
                    'timeout': 48e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                };
                if (subaccountId) {
                    paramsNew.customer_id = subaccountId;
                    params.url = window.appWebPath + kongs_name + '/rest/cbc/cbccustomerorgservice/api-proxy/rest/cbc/cbccustmgrservice/v1/customer/em-function-flag';
                    params.beforeSend = function(request) {
                        request.setRequestHeader('X-Sub-Cust-Id', subaccountId);
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    };
                }
                return camel.post(params);
            };
            this.getCurrentFunctionFlag = function(subaccountId, currentDomainId) {
                var params = {};
                params.customer_id = currentDomainId || $rootScope.domainId;
                params.check_em_pri_customer = 1;
                params.check_project_group = 1;
                params.check_enterprise_project = 1;
                params.check_multi_project = 1;
                return this.getFunctionFlag(params, subaccountId);
            };
            this.showTips = function(evt) {
                var textWidth, $target = $(evt.currentTarget), evt = $($target[0].cloneNode(!0)).css({
                    'font-size': $target.css('font-size'),
                    'font-weight': $target.css('font-weight'),
                    'font-family': $target.css('font-family'),
                    'padding-right': $target.css('paddingRight'),
                    'padding-left': $target.css('paddingLeft'),
                    'border-right': $target.css('borderRightWidth') + ' dotted transparent',
                    'border-left': $target.css('borderLeftWidth') + ' dotted transparent',
                    'white-space': 'nowrap',
                    'height': $target.height()
                });
                evt.addClass('ti-table-cell-clone');
                $('body').append(evt);
                maxWidth = $target[0].getBoundingClientRect().width;
                textWidth = evt[0].getBoundingClientRect().width;
                evt.remove();
                evt = function() {
                    if (!$target) return '';
                    return 'right-bottom';
                }();
                if (maxWidth < textWidth) {
                    $target[0].tiTableTdTooltip || ($target[0].tiTableTdTooltip = tiTipService.createTip($target, {
                        'content': ''
                    }));
                    $target[0].tiTableTdTooltip.show({
                        'content': $target.attr('tip-content') || (maxWidth = $target.text().trim(), 
                        $('<span>').text(maxWidth)[0].innerHTML),
                        'position': $target.attr('tip-position') || evt,
                        'maxWidth': $target.attr('tip-maxWidth') || document.documentElement.clientWidth / 2
                    });
                } else $target[0].tiTableTdTooltip && $target[0].tiTableTdTooltip.hide();
                var maxWidth;
            };
            this.getIamUserinfo = function() {
                return camel.get({
                    'url': {
                        's': window.appWebPath + '/rest/v3.0/OS-MFA/userinfo/{user_id}',
                        'o': {
                            'user_id': $rootScope.userId
                        }
                    }
                });
            };
            this.sendIamCode = function(params) {
                return camel.post({
                    'url': window.appWebPath + '/rest/v3.0/OS-MFA/sendcode',
                    'timeout': 6e4,
                    'params': params
                });
            };
            this.verifyCode = function(params) {
                return camel.post({
                    'url': window.appWebPath + '/rest/v3.0/OS-MFA/verifycode',
                    'timeout': 6e4,
                    'params': params
                });
            };
            this.resultProcessing = function(rsp, ispart, isoperate, mobile) {
                var msg, eMsgObj, title;
                if (403 === rsp.status && rsp && rsp.responseJSON && (rsp.responseJSON.forbidden && 403 === Number(rsp.responseJSON.forbidden.code) || rsp.responseJSON.error_code && 'CBC.0155' === rsp.responseJSON.error_code)) {
                    msg = i18err.not_permissions;
                    rsp.responseJSON.auth_action ? msg += utilService.i18nReplace(i18new.not_permissions_tip, {
                        'n': rsp.responseJSON.auth_action
                    }) : rsp.responseJSON.error_msg ? msg += rsp.responseJSON.error_msg : rsp.responseJSON.forbidden && rsp.responseJSON.forbidden.message && (msg += rsp.responseJSON.forbidden.message);
                    rsp.error_msg = msg;
                    msgService.showError(msg);
                    rsp.noPermission = !0;
                } else if (403 === rsp.status && rsp && rsp.responseJSON) {
                    msg = i18err.not_permissions;
                    if (rsp.responseJSON.error && rsp.responseJSON.error.message) msg += rsp.responseJSON.error.message; else if (rsp.responseJSON.auth_action) msg += utilService.i18nReplace(i18new.not_permissions_tip, {
                        'n': rsp.responseJSON.auth_action
                    }); else if (rsp.responseJSON.error_msg) {
                        eMsgObj = '';
                        try {
                            eMsgObj = $.parseJSON(rsp.responseJSON.error_msg);
                        } catch (e) {
                            eMsgObj = '';
                        }
                        'object' == typeof eMsgObj && eMsgObj instanceof Array && eMsgObj[0] && eMsgObj[0].msgContent ? msg = eMsgObj[0].msgContent : msg += rsp.responseJSON.error_msg;
                    }
                    rsp.error_msg = msg;
                    msgService.showError(msg);
                    rsp.noPermission = !0;
                } else if (429 === rsp.status) {
                    rsp.error_msg = validator.getErrMsg('CBC.0250', '', isoperate);
                    msgService.showError(rsp.error_msg);
                } else {
                    if (rsp && 503 === rsp.status) {
                        eMsgObj = rsp && rsp.responseJSON && rsp.responseJSON.error_code ? rsp.responseJSON.error_code : 'CBC.0303';
                        msg = validator.getErrMsg(eMsgObj, '', isoperate);
                    } else msg = rsp && rsp.responseJSON && rsp.responseJSON.error_code ? validator.getErrMsg(rsp.responseJSON.error_code, '', isoperate) : rsp && rsp.responseJSON && rsp.responseJSON.exceptionId ? validator.getErrMsg(rsp.responseJSON.exceptionId, '', isoperate) : rsp && rsp.responseJSON && rsp.responseJSON.retCode ? validator.getErrMsg(rsp.responseJSON.retCode, '', isoperate) : ispart ? i18new.nodata_part_tip : isoperate ? i18new.operator_not_available : i18new.nodata_table_tip;
                    rsp.error_msg = msg;
                    rsp.showError && msgService.showError(msg);
                }
                rsp.noPermission ? rsp.err_table_tip = i18err.not_permissions : rsp.err_table_tip = rsp.error_msg;
                try {
                    rsp.getResponseHeader('wise_traceid') && PMP && PMP.RavenSetTag('wise_traceid', rsp.getResponseHeader('wise_traceid'));
                    rsp.category && PMP && PMP.RavenSetTag('group', rsp.category);
                    title = 'status:' + rsp.status + ' url:' + window.location.href;
                    rsp && rsp.requestAjaxUrl && (title += ' requestUrl:' + rsp.requestAjaxUrl);
                    PMP && PMP.RavenSendException(title, rsp.responseJSON, 'error');
                } catch (e) {}
            };
            this.getRestricted = function(params) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/restricted',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryByCountryAbbreviation = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbcconfigcenterservice/v1/datadictionary/query-by-countryAbbreviation',
                    'timeout': 6e4,
                    'params': params,
                    'beforeSend': function(request) {
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getSystemConfigsByKey = function(keys) {
                var i, indexKey, configval = {};
                if (systemConfig) if (keys) if (_.isArray(keys)) for (i = 0; i < keys.length; i++) {
                    indexKey = keys[i];
                    void 0 !== systemConfig[indexKey] && (configval[indexKey] = systemConfig[indexKey]);
                } else configval[keys] = systemConfig[keys]; else configval = systemConfig;
                return configval;
            };
            this.queryCustomerType = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbcreditmgrservice/v1/bill/customer/query',
                    'timeout': 6e4,
                    'params': params,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getCharactSwitchByKey = function(key, defaultVal) {
                var keyVal = defaultVal;
                return keyVal = systemSwitch ? angular.isUndefined(systemSwitch[key]) ? defaultVal : 'false' !== systemSwitch[key] && ('true' === systemSwitch[key] || defaultVal) : keyVal;
            };
            this.initPermission = function($scope, callBack) {
                var path, param;
                callBack = callBack || function() {};
                path = $location.path();
                param = $location.search();
                path.startsWith('/enterpriseProjectIndex') && param && param.projectid ? $rootScope.isProjectPermissionReady ? callBack() : $scope.$on('projectRightsOK', callBack) : $rootScope.isPermissionReady ? callBack() : $scope.$on('rightsOK', callBack);
            };
            this.queryProjectPermission = function(enterpriseProjectId) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/csbsystemmanageservice/v1/common/iamuser/userprivileges/query',
                    'params': {
                        'appType': 3
                    },
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        _.isNull(enterpriseProjectId) || _.isUndefined(enterpriseProjectId) || request.setRequestHeader('X-Enterprise-Project-Ids', enterpriseProjectId);
                        customiseVer === VERSION_KEY_RUSSIA && request.setRequestHeader('X-CBC-Site-Type', 'HWC_HK');
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryMonthEndBalance = function(params) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbcreditmgrservice/v1/monthly_settlement_check',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getPayOrderStatusName = function(status, feesourceoperation) {
                return 2 === Number(status) && 4 === Number(feesourceoperation) ? $rootScope.i18new.consume_status_2_3 : status ? $rootScope.i18new['consume_status_' + status] : '--';
            };
            this.isSensitiveContryIdFun = function(id) {
                var sensitiveContryIds = this.getSystemConfigsByKey('sensitive_country_Id');
                if (sensitiveContryIds && sensitiveContryIds.sensitive_country_Id) {
                    sensitiveContryIds = (sensitiveContryIds.sensitive_country_Id ? sensitiveContryIds.sensitive_country_Id.toUpperCase() : '').split(',');
                    if (-1 < $.inArray(id, sensitiveContryIds)) return !0;
                }
                return !1;
            };
            this.querySales = function(salesId) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbinvoicemgrservice/v1/sales/' + salesId,
                    'timeout': 6e4,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getCustomerConfig = function(params) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer-config/get-config',
                    'timeout': 6e4,
                    'params': params,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getUserFreePkgDetailInfo = function(currentPage, pageSize) {
                return camel.post({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbpromotionbenefitservice/v1/user_freepkg/detail',
                    'params': {
                        'customerId': $rootScope.domainId,
                        'isQueryUsageAmount': 1,
                        'isQueryUsedUp': 1,
                        'pageNo': currentPage || 1,
                        'pageSize': pageSize || 10
                    },
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.queryWetherShowTopupButton = function(currentDomainId) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbpaymentservice/v1/topup/support',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'customerId': currentDomainId || $rootScope.domainId
                    },
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.initCurrencyP = function() {
                var systemConfig, temp;
                if (customiseVer !== VERSION_KEY_HK) return !1;
                temp = (systemConfig = this.getSystemConfigsByKey([ 'multiPaymentCurrencySwitch', 'multiPaymentCurrencyCustomerWL' ])).multiPaymentCurrencySwitch ? parseInt(systemConfig.multiPaymentCurrencySwitch) : 0;
                return -1 < (systemConfig.multiPaymentCurrencyCustomerWL || '').indexOf($rootScope.domainId) || temp;
            };
            this.getAuthInfo = function() {
                if (customiseVer === VERSION_KEY_HK) {
                    var defer = $q.defer();
                    defer.resolve({
                        'verifiedStatus': 2,
                        'isVerified': !0,
                        'retCode': '0',
                        'retDesc': 'success'
                    });
                    return defer.promise;
                }
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustomerrnverifyservice/v1/customer/real-name-auth-status',
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'customerId': $rootScope.domainId
                    }
                });
            };
            this.getRealNameAuthInfo = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccustmgrservice/v1/customer/real-name-auth-info/' + $rootScope.domainId,
                    'timeout': 6e4,
                    'mask': !1,
                    'params': {
                        'customerId': $rootScope.domainId
                    }
                });
            };
            this.queryBindBpInfo = function() {
                return camel.get({
                    'url': {
                        's': window.appWebPath + kongs_name + '/rest/csb/csbpartnerresellerservice/v1/customers/bind_info_cache/{customerID}',
                        'o': {
                            'customerID': window.domainId || $rootScope.domainId
                        }
                    },
                    'timeout': 6e4,
                    'mask': !1
                });
            };
            this.getSubCustomerDiscount = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbcpartnertransservice/v1/partner_discount/sub-customer-discounts',
                    'params': {
                        'customer_id': window.domainId || $rootScope.domainId
                    },
                    'timeout': 6e4,
                    'mask': !1
                });
            };
            this.supportShowNewPage = function(customer_id) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/freeresourceservice/v1/freeresource/config/support_show_new_page/' + customer_id,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            repTimeDown = {
                'rtResult': !1,
                'allConfig': ''
            };
            this.getCustomerConfigResult = function() {
                var defer = $q.defer();
                repTimeDown.allConfig ? defer.resolve(repTimeDown.rtResult) : this.queryCustomerConfigCheck({
                    'customer_id': $rootScope.domainId,
                    'dattribute_id': 'newConsume',
                    'app_name': 'CBCSupportCenterWebsite',
                    'resource_id': 'expenseConfig'
                }).then(function(data) {
                    var needResetCostmenu = !(!data || !data.check_result) && 'YES' === data.check_result;
                    repTimeDown.allConfig = data && data.check_result;
                    repTimeDown.rtResult = needResetCostmenu;
                }).catch(function() {
                    repTimeDown.rtResult = !1;
                }).finally(function() {
                    defer.resolve(repTimeDown.rtResult);
                });
                return defer.promise;
            };
            this.queryCustomerConfigCheck = function(params) {
                params = {
                    'url': window.appWebPath + kongs_name + '/rest/cbc/csbbillingqueryservice/v1/sysconfig/customer-config-check',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                };
                return camel.get(params);
            };
            this.getDrmConfig = function(params) {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbcconfigcenterservice/v1/drm/attributeValue',
                    'params': params,
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.checkCostmanagementWhiteUser = function() {
                return camel.get({
                    'url': window.appWebPath + kongs_name + '/rest/cbc/cbccostanalyzeservice/v1/costmgmt/active-costmgmt',
                    'timeout': 6e4,
                    'mask': !1,
                    'beforeSend': function(request) {
                        request.setRequestHeader('X-CF2-PASSTHROUGH', !0);
                    }
                });
            };
            this.getCostcenterOnlineConfigResult = function(req) {
                var defer = $q.defer();
                costcenterOnline ? defer.resolve(costcenterOnline) : this.getDrmConfig(req).then(function(data) {
                    data = data && '1000' == data.retCode && '1' == data.value;
                    costcenterOnline = {
                        'isOnline': data
                    };
                }).catch(function() {
                    costcenterOnline = {
                        'isOnline': !1
                    };
                }).finally(function() {
                    defer.resolve(costcenterOnline);
                });
                return defer.promise;
            };
            this.isCostcenterWhiteUser = function() {
                var defer = $q.defer();
                costcenterWhiteUser ? defer.resolve(costcenterWhiteUser) : this.checkCostmanagementWhiteUser().then(function(data) {
                    costcenterWhiteUser = data && 0 < data.total_count ? {
                        'isWhiteUser': !0
                    } : {
                        'isWhiteUser': !1
                    };
                }).catch(function() {
                    costcenterWhiteUser = {
                        'isWhiteUser': !1
                    };
                }).finally(function() {
                    defer.resolve(costcenterWhiteUser);
                });
                return defer.promise;
            };
        } ];
        angular.module('usercenter.config').tinyService('publicService', service);
    });
    define('app/business/mobile/controllers/baseCtrl', [ 'language/mobile' ], function(i18mobile) {
        var base = [ '$scope', '$stateParams', '$rootScope', '$state', 'mobileCommonService', '$ionicScrollDelegate', '$timeout', 'csbMessage', 'validator', function($scope, $stateParams, $rootScope, $state, mobileCommonService, $ionicScrollDelegate, $timeout, csbMessage, validator) {
            function isViewScrollTop(top, items) {
                $timeout(function() {
                    $scope.$digest();
                }, 0, !1);
                MOBILE_TOP_SCROLL < top && 0 < items.length ? $scope.scrollTopTag = !0 : $scope.scrollTopTag = !1;
            }
            $rootScope.i18mobile || ($rootScope.i18mobile = i18mobile);
            $scope.scrollTopTag = !1;
            $scope.goHome = function() {
                mobileCommonService.goHome();
            };
            $scope.goBack = function() {
                mobileCommonService.goBack();
            };
            $scope.refreshQueryOrderLis = function(flg) {
                $scope.$$childTail.pageSize.size = 10;
                $scope.$$childTail.refreshQueryOrderList();
                $scope.$broadcast('scroll.refreshComplete');
            };
            $scope.payorder = function() {
                var orderIds, i;
                $scope.combinedPayOrderIds = $scope.$$childTail.combinedPayOrderIds;
                if (20 < $scope.combinedPayOrderIds.length) return mobileCommonService.mobilePopOver($scope, '最多支持20个订单合并支付', 2), 
                void 0;
                if ($scope.combinedPayOrderIds && 0 < $scope.combinedPayOrderIds.length) {
                    orderIds = [];
                    for (i in $scope.combinedPayOrderIds) $scope.combinedPayOrderIds[i] && $scope.combinedPayOrderIds[i].orderId && orderIds.push($scope.combinedPayOrderIds[i].orderId);
                }
            };
            $scope.scrollTop = function(items) {
                $ionicScrollDelegate.scrollTop();
                isViewScrollTop($ionicScrollDelegate.getScrollPosition().top, items);
            };
            $scope.ViewScrollTop = function(items) {
                isViewScrollTop($ionicScrollDelegate.getScrollPosition().top, items);
            };
            $scope.viewNoMoreData = function(items, moredata) {
                var scrollPosition = $ionicScrollDelegate.getScrollPosition(), scrollHeight = $ionicScrollDelegate.getScrollView().options.getContentHeight();
                0 === items.length ? $scope.scrollTop(items) : 0 == moredata && (scrollHeight - scrollPosition.top < 500 || scrollPosition.top < 10 || isAndroid && scrollHeight - scrollPosition.top < 600) && mobileCommonService.mobilePopOver($scope, $rootScope.i18mobile.scroll_lastPageTip, 2);
            };
        } ];
        angular.module('mobile.config').tinyController('base.ctrl', base);
    });
    define('app/business/mobile/controllers/homeCtrl', [ 'language/v1r2' ], function(i18v1r2) {
        var home = [ '$scope', '$stateParams', '$rootScope', '$filter', 'utilService', '$state', 'mobileCommonService', function($scope, $stateParams, $rootScope, $filter, utilService, $state, mobileCommonService) {
            mobileCommonService.initLanguage();
            $rootScope.stepStack || ($rootScope.stepStack = []);
            $rootScope.stepStack.push({
                'url': 'mobile.home',
                'params': $stateParams
            });
            $rootScope.baseTitle = $rootScope.i18mobile.usercenter_title;
            $rootScope.i18v1r2 || ($rootScope.i18v1r2 = i18v1r2);
            $scope.gotoOrder = function() {
                $state.go('mobile.myorder');
            };
            $scope.gotoRecharge = function() {
                $state.go('mobile.recharge');
            };
            $scope.gotoCoupons = function() {
                $state.go('mobile.coupons');
            };
            $scope.gotoOwe = function() {
                $state.go('mobile.owe');
            };
            $scope.gotoRecommend = function() {
                $state.go('mobile.recommend');
            };
            $scope.gotoRenewal = function() {
                $state.go('mobile.renewal');
            };
            $scope.gotoServiceManagement = function() {
                $state.go('mobile.serviceManagement');
            };
            $scope.gotoUsageManagement = function() {
                $state.go('mobile.usageManagement');
            };
            $scope.gotoCertification = function() {
                $state.go('mobile.realName');
            };
            $scope.gotoStudent = function() {
                $state.go('mobile.student');
            };
            $rootScope.domainId || $scope.$on('initUser', function() {});
        } ];
        angular.module('mobile.config').tinyController('mHome.ctrl', home);
    });
    define('mobile/businessAll.build', function() {});
    require([ 'm-app/framework/framework' ], function(app) {
        angular.bootstrap($('html'), [ app.name ]);
    });
});