var uba_is_eu=false;if(location&&location.pathname&&location.pathname.indexOf("/eu/")===0||location&&location.hostname&&location.hostname.indexOf(".eu.huaweicloud.com")>-1){uba_is_eu=true}if(typeof _ubaInnerParams==="undefined"&&!uba_is_eu){var URL_REG=["//cloud.sales.huawei.com","//cbc-temp.hc-sre.com/bm","//cbc.huaweicloud.com/cloudmarketing","//cloudcrm.huawei.com","//cloudcrm-intl.huawei.com","311545795327147","511583923082270","471628306059151","211627301621529","741626230344737","//aui.rnd.huawei.com","file:///","ulanqab.huawei.com","cloudioc.huawei.com","mymetatown.huawei.com"];var UBA_COUNTRY_CODES=["TH","TR"];var HOST_REG=["huaweicloud","^cloudbi.huawei.com$","cloudbu.huawei","developer.huawei.com"];var supporteBeacon=false;var postFlag=true;if(navigator&&navigator.sendBeacon){supporteBeacon=true}if(navigator&&navigator.userAgent&&navigator.userAgent.indexOf("iPhone")>-1){postFlag=false;supporteBeacon=false}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj}}else{_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}polyfill.call((typeof window==="undefined"?"undefined":_typeof(window))==="object"?window:undefined||{});function polyfill(){if(isSupported.call(this))return;if(!("navigator"in this))this.navigator={};this.navigator.sendBeacon=sendBeacon.bind(this)}function isSupported(){return"navigator"in this&&"sendBeacon"in this.navigator}function sendBeacon(url,data){var event=this.event&&this.event.type;var sync=event==="unload"||event==="beforeunload";var xhr="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");xhr.open("POST",url,!sync);if(typeof data==="string"){xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");xhr.responseType="text/plain"}else if(data instanceof Blob&&data.type){xhr.setRequestHeader("Content-Type",data.type)}try{xhr.send(data)}catch(error){return false}return true}var _ubaInnerParams=_ubaInnerParams||{};_ubaInnerParams.SERVER_URL="https://uba.huaweicloud.com/sdk/";_ubaInnerParams.SERVER_URL_HK="https://uba-intl.huaweicloud.com/sdk/";_ubaInnerParams.appKey=_ubaInnerParams.appKey||"";_ubaInnerParams.visitKey;_ubaInnerParams.fromPageName=document.referrer;_ubaInnerParams.sessionID="";_ubaInnerParams.sidStartTime="";_ubaInnerParams.lastAdSource="";_ubaInnerParams.lastAccessTime="";_ubaInnerParams.pageHide=false;_ubaInnerParams.unloadActive=false;_ubaInnerParams.channelFrom;_ubaInnerParams.stgForDeliver={};_ubaInnerParams.expireDateTime=0;_ubaInnerParams.plt=0;_ubaInnerParams.vk=getCookieValue("vk");_ubaInnerParams.zone=getLocalTimeZone();_ubaInnerParams.ad_sc="";_ubaInnerParams.ad_mdm="";_ubaInnerParams.cf="";_ubaInnerParams.ad_cmp="";_ubaInnerParams.ad_ctt="";_ubaInnerParams.ad_tm="";_ubaInnerParams.ad_adp="";var _ubaHashChange=false;var _ubaHashTimeStamp=0;function getNameFlag(){var commnFlag=true;if(window&&window.location&&window.location.href&&(window.location.href.indexOf(".com/cloudide/")>-1||window.location.href.indexOf("lab.huaweicloud.com")>-1)){commnFlag=false}return commnFlag}function _initCloudBI(appkey,json){initCountry();if(appkey){_ubaInnerParams.appKey=appkey}_ubaInnerParams.unloadActive=false;if(window.name&&getNameFlag()){try{_ubaInnerParams.stgForDeliver=JSON.parse(window.name);for(var key in _ubaInnerParams.stgForDeliver){setLocalStorage(key,_ubaInnerParams.stgForDeliver[key])}}catch(e){_ubaInnerParams.stgForDeliver={}}}if(_ubaParams&&_ubaParams.userAccount&&_ubaParams.userAccount!=="host"&&_ubaParams.userAccount!=="unknown"&&_ubaParams.userAccount!=="anonymous"&&_ubaParams.userAccount.length>10){addCookie("ua",_ubaParams.userAccount,1*365,"/");setLocalStorage("ua",_ubaParams.userAccount)}_ubaInnerParams.visitKey=getCookieValue("vk");if(_ubaInnerParams.visitKey===""){_ubaInnerParams.visitKey=getLocalStorage("vk");if(_ubaInnerParams.visitKey){addCookie("vk",_ubaInnerParams.visitKey,1*365,"/")}else{_ubaInnerParams.visitKey=guidGenerator();addCookie("vk",_ubaInnerParams.visitKey,1*365,"/");setLocalStorage("vk",_ubaInnerParams.visitKey)}}else{setLocalStorage("vk",_ubaInnerParams.visitKey)}if(_ubaInnerParams.visitKey.toString().length===19){_ubaInnerParams.visitKey=guidGenerator();addCookie("vk",_ubaInnerParams.visitKey,1*365,"/");setLocalStorage("vk",_ubaInnerParams.visitKey)}_ubaInnerParams.vk=getCookieValue("vk");try{if(json&&json.VisitKey){_ubaInnerParams.vk=json.VisitKey}}catch(e){}_ubaInnerParams.sessionID=getCookieValue("SessionID");if(!_ubaInnerParams.sessionID){refreshSession();storageAdField()}clearStorage();if(json){setParams(json)}setAdField();domHasAlready();setPLT();dealSession()}function initCountryInfo(){try{var countrycode=getCookieValue("uba_countrycode");if(countrycode){return}if(window.XMLHttpRequest){var xhr=new XMLHttpRequest}else{var xhr=new ActiveXObject}xhr.open("GET","https://portal-intl.huaweicloud.com/portaluserqueryservice/ipsearch",true);xhr.setRequestHeader("Content-Type","application/json");xhr.timeout=3e3;xhr.send();xhr.onreadystatechange=function(){try{if(xhr.readyState==4&&xhr.status==200){var obj=JSON.parse(xhr.responseText);if(obj.data[0].location.countrycode){addCookie("uba_countrycode",obj.data[0].location.countrycode,1*365,"/")}}}catch(err){}}}catch(err){}}function sendEvent(name,category,eventAction,label,value,extendData){}function _sendEvent(name,category,eventAction,label,value,extendData){try{var tmpParam={};var jsonParam={};jsonParam=getDeviceInfo();jsonParam.VisitKey=_ubaInnerParams.vk;jsonParam.AccessTime=(new Date).getTime();jsonParam.UserAccount=_ubaParams.userAccount;jsonParam.MemberID=_ubaParams.memberID;if(extendData&&(extendData["AppKey"]||extendData["Appkey"])){_ubaInnerParams.appKey=extendData["AppKey"]||extendData["Appkey"]}if(extendData&&extendData["siteId"]){_ubaParams.siteId=extendData["siteId"]}jsonParam.AppKey=_ubaInnerParams.appKey;jsonParam.EventName=name;jsonParam.PageName=window.location.href;if(_ubaParams.companyID){jsonParam.companyID=_ubaParams.companyID}if(_ubaParams.IAMUserID){jsonParam.IAMUserID=_ubaParams.IAMUserID}if(extendData&&extendData.PageName){jsonParam.PageName=extendData.PageName}jsonParam.EventCategory=category;jsonParam.EventAction=eventAction;jsonParam.EventLabel=label;jsonParam.Value=value;jsonParam.Zone=_ubaInnerParams.zone||getLocalTimeZone();jsonParam=AdProcess(jsonParam);jsonParam=setExtendOptionsByStorage_str(jsonParam);if(extendData){for(var key in extendData){jsonParam[key]=extendData[key]}}jsonParam.plt=_ubaInnerParams.plt||setPLT();if(!jsonParam.C1){jsonParam.C1=document.title}tmpParam.EventCategory=category;tmpParam.EventAction=eventAction;tmpParam.EventLabel=label;tmpParam.Value=value;var sendData=formatData(jsonParam);xssPost(sendData,tmpParam)}catch(e){var sendData=formatData({AppKey:_ubaInnerParams.appKey,EventName:name,PageName:window.location.href,EventLable:"Exception"});xssPost(sendData,tmpParam)}}function _sendPageView(page,extendData){try{var jsonParam={};jsonParam=getDeviceInfo();jsonParam.VisitKey=_ubaInnerParams.vk;jsonParam.AccessTime=(new Date).getTime();jsonParam.UserAccount=_ubaParams.userAccount;jsonParam.MemberID=_ubaParams.memberID;if(_ubaParams.companyID){jsonParam.companyID=_ubaParams.companyID}if(_ubaParams.IAMUserID){jsonParam.IAMUserID=_ubaParams.IAMUserID}if(extendData&&(extendData["AppKey"]||extendData["Appkey"])){_ubaInnerParams.appKey=extendData["AppKey"]||extendData["Appkey"]}if(extendData&&extendData["siteId"]){_ubaParams.siteId=extendData["siteId"]}jsonParam.AppKey=_ubaInnerParams.appKey;jsonParam.EventName="pageview";if(typeof page=="string"&&page!=""&&page.indexOf("http")>-1){jsonParam.PageName=page}else{jsonParam.PageName=window.location.href}if(extendData&&extendData.PageName){jsonParam.PageName=extendData.PageName}setLocalStorage("oldPage",jsonParam.PageName);jsonParam.PageViewID=_ubaParams.pageViewID;setLocalStorage("oldPID",_ubaParams.pageViewID);jsonParam.EventMode=0;jsonParam.FromPageName=_ubaInnerParams.fromPageName;jsonParam.Zone=_ubaInnerParams.zone||getLocalTimeZone();jsonParam=AdProcess(jsonParam);jsonParam=setExtendOptionsByStorage_str(jsonParam);if(extendData){for(var key in extendData){jsonParam[key]=extendData[key]}}jsonParam.plt=_ubaInnerParams.plt||setPLT();if(!jsonParam.C1){jsonParam.C1=document.title}jsonParam.loadEventStart=_ubaParams.timinhObj.loadEventStart;jsonParam.navigationStart=_ubaParams.timinhObj.navigationStart;var sendData=formatData(jsonParam);xssPost(sendData)}catch(e){var sendData=formatData({VisitKey:_ubaInnerParams.vk,AppKey:_ubaInnerParams.appKey,EventName:"pageview",PageName:window.location.href,EventLable:"Exception"});xssPost(sendData)}}function getSite(tmpUbaParams){var site="intl";try{if(tmpUbaParams&&tmpUbaParams.siteId){if(tmpUbaParams.siteId=="intl"){site="intl"}else{site="china"}}else{if(window.location.host.indexOf("intl.huaweicloud.com")>-1||window&&window.location&&window.location.href&&window.location.href.indexOf(".huaweicloud.com/intl")>-1){site="intl"}else{site="china"}}}catch(err){}return site}function _reportcurrent(){var jsonParam={};jsonParam=getDeviceInfo();jsonParam.VisitKey=_ubaInnerParams.vk;jsonParam.AccessTime=(new Date).getTime();jsonParam.UserAccount=_ubaParams.userAccount;jsonParam.MemberID=_ubaParams.memberID;jsonParam.AppKey=_ubaInnerParams.appKey;jsonParam.EventName="pageview";jsonParam.PageName=getLocalStorage("oldPage");setLocalStorage("oldPage",window.location.href);jsonParam.PageViewID=getLocalStorage("oldPID");_ubaParams.pageViewID=guidGenerator();setLocalStorage("oldPID",_ubaParams.pageViewID);jsonParam.EventMode=1;jsonParam.FromPageName=_ubaInnerParams.fromPageName;jsonParam.Zone=getLocalTimeZone();if(getLocalStorage("sbp")){jsonParam.subPage=getLocalStorage("sbp")}jsonParam=AdProcess(jsonParam);jsonParam=setExtendOptionsByStorage_str(jsonParam);jsonParam.plt=_ubaInnerParams.plt||setPLT();if(!jsonParam.C1){jsonParam.C1=document.title}var sendData=formatData(jsonParam);xssPost(sendData)}function sendBeaconPost(analyticsData,tmpParam){var uploadMsg;if(_ubaParams&&_ubaParams.siteId){if(_ubaParams.siteId=="intl"){uploadMsg=_ubaInnerParams.SERVER_URL_HK+"download/1.png"}else{uploadMsg=_ubaInnerParams.SERVER_URL+"download/1.png"}}else{if(window.location.host.indexOf("intl.huaweicloud.com")>-1||window&&window.location&&window.location.href&&window.location.href.indexOf(".huaweicloud.com/intl")>-1){uploadMsg=_ubaInnerParams.SERVER_URL_HK+"download/1.png"}else{uploadMsg=_ubaInnerParams.SERVER_URL+"download/1.png"}}if(tmpParam){uploadMsg=uploadMsg+"?EventCategory="+encodeURIComponent(tmpParam.EventCategory)+"&EventAction="+encodeURIComponent(tmpParam.EventAction)+"&EventLabel="+encodeURIComponent(tmpParam.EventLabel)+"&Value="+encodeURIComponent(tmpParam.Value)}var isSent=navigator.sendBeacon(uploadMsg,analyticsData)}function oldPost(postStr){var uploadMsg;if(_ubaParams&&_ubaParams.siteId){if(_ubaParams.siteId=="intl"){uploadMsg=_ubaInnerParams.SERVER_URL_HK+"download/1.png?"+postStr}else{uploadMsg=_ubaInnerParams.SERVER_URL+"download/1.png?"+postStr}}else{if(window.location.host.indexOf("intl.huaweicloud.com")>-1||window&&window.location&&window.location.href&&window.location.href.indexOf(".huaweicloud.com/intl")>-1){uploadMsg=_ubaInnerParams.SERVER_URL_HK+"download/1.png?"+postStr}else{uploadMsg=_ubaInnerParams.SERVER_URL+"download/1.png?"+postStr}}if(uploadMsg.length>2048){var xmlhttp;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}xmlhttp.open("POST",uploadMsg,true);xmlhttp.send()}else{var image=new Image;image.src=uploadMsg}}function initCountry(){try{if(_ubaParams&&_ubaParams.siteId=="intl"||window&&window.location&&window.location.host.indexOf("intl.huaweicloud.com")>-1||window&&window.location&&window.location.href&&window.location.href.indexOf(".huaweicloud.com/intl")>-1){var countrycode=getCookieValue("uba_countrycode");if(!countrycode){initCountryInfo()}}}catch(err){}}function getSendFlag(postStr){var sendFlag=false;var host=window&&window.location&&window.location.host;var href=window&&window.location&&window.location.href;if(href){href=href.split("?")[0]}if(host&&new RegExp(HOST_REG.join("|")).test(host)){sendFlag=true}else if(href&&new RegExp(URL_REG.join("|")).test(href)){sendFlag=true}try{if(_ubaParams&&_ubaParams.siteId=="intl"||window&&window.location&&window.location.host.indexOf("intl.huaweicloud.com")>-1||window&&window.location&&window.location.href&&window.location.href.indexOf(".huaweicloud.com/intl")>-1){var countrycode=getCookieValue("uba_countrycode");if(!countrycode){sendFlag=false}else{var privacyDenyStr=getCookieValue("privacyDeny");if(privacyDenyStr){privacyDenyStr=unescape(privacyDenyStr);var privacyDeny=JSON.parse(privacyDenyStr);if(privacyDeny.analytics=="true"&&postStr.indexOf("EventName=privacy_setting")==-1){sendFlag=false}}if(sendFlag&&UBA_COUNTRY_CODES.indexOf(countrycode)>-1){sendFlag=false;var essentialStr=getCookieValue("essential");var analyticsStr=getCookieValue("Analytics");var advertisingStr=getCookieValue("Advertising");if(essentialStr=="active"&&analyticsStr=="active"&&advertisingStr=="active"){sendFlag=true}var hwcp_eu=getUBACookieValue("hwcp_eu");if(hwcp_eu){var euObj=JSON.parse(hwcp_eu);if(euObj.analysis==1&&euObj.ad==1&&euObj.essential==1){sendFlag=true}}}}}}catch(err){}return sendFlag}function xssPost(postStr,tmpParam){if(getSendFlag(postStr)){if(postFlag){sendBeaconPost(postStr,tmpParam)}else{oldPost(postStr)}}}function beforeUnloadHandler(){try{var before=new Date;var time=before.getTime()+120;if(!_ubaInnerParams.expireDateTime||time>_ubaInnerParams.expireDateTime){_ubaInnerParams.expireDateTime=time}var now;if(_ubaInnerParams.expireDateTime){do{now=new Date}while(now.getTime()<_ubaInnerParams.expireDateTime)}}catch(e){}}function formatData(jsonParam){if(!(typeof jsonParam==="object")){return""}var paramStr="type=2";var tempValue="";for(var key in jsonParam){if(jsonParam[key]!==""&&jsonParam[key]!==null&&jsonParam[key]!==undefined){tempValue="";try{tempValue=encodeURIComponent(jsonParam[key])}catch(e){tempValue=jsonParam[key]}paramStr=paramStr+"&"+key+"="+tempValue}}return paramStr}function setPLT(){if(window.firstScreenTime&&window.firstScreenTime>0){_ubaInnerParams.plt=window.firstScreenTime;return window.firstScreenTime}_ubaParams.timinhObj=window.performance?window.performance.timing:"";if(_ubaParams.timinhObj&&_ubaParams.timinhObj.loadEventStart&&_ubaParams.timinhObj.navigationStart){var plt=_ubaParams.timinhObj.loadEventStart-_ubaParams.timinhObj.navigationStart;if(plt>18e4){return 0}_ubaInnerParams.plt=plt;return plt}return 0}function AdProcess(jsonParam){jsonParam.AdSource=_ubaInnerParams.ad_sc;jsonParam.ChannelFrom=_ubaInnerParams.cf;jsonParam.AdMedium=_ubaInnerParams.ad_mdm;jsonParam.AdCampaign=_ubaInnerParams.ad_cmp;jsonParam.AdContent=_ubaInnerParams.ad_ctt;jsonParam.AdTerm=_ubaInnerParams.ad_tm;jsonParam.AdPlace=_ubaInnerParams.ad_adp;return jsonParam}function storageAdField(){_ubaInnerParams.ad_sc=getUrlAttr("utm_source");addCookie("ad_sc",_ubaInnerParams.ad_sc||"",0,"/");_ubaInnerParams.ad_mdm=getUrlAttr("utm_medium");addCookie("ad_mdm",_ubaInnerParams.ad_mdm||"",0,"/");_ubaInnerParams.ad_cmp=getUrlAttr("utm_campaign");addCookie("ad_cmp",_ubaInnerParams.ad_cmp||"",0,"/");_ubaInnerParams.ad_ctt=getUrlAttr("utm_content");addCookie("ad_ctt",_ubaInnerParams.ad_ctt||"",0,"/");_ubaInnerParams.ad_tm=getUrlAttr("utm_term");addCookie("ad_tm",_ubaInnerParams.ad_tm||"",0,"/");_ubaInnerParams.ad_adp=getUrlAttr("utm_adplace");addCookie("ad_adp",_ubaInnerParams.ad_adp||"",0,"/")}function setAdField(){_ubaInnerParams.ad_sc=getCookieValue("ad_sc");_ubaInnerParams.cf=getCookieValue("cf");_ubaInnerParams.ad_mdm=getCookieValue("ad_mdm");_ubaInnerParams.ad_cmp=getCookieValue("ad_cmp");_ubaInnerParams.ad_ctt=getCookieValue("ad_ctt");_ubaInnerParams.ad_tm=getCookieValue("ad_tm");_ubaInnerParams.ad_adp=getCookieValue("ad_adp")}function refreshSession(){_ubaInnerParams.sessionID=guidGenerator();addCookie("SessionID",_ubaInnerParams.sessionID,0,"/");_ubaInnerParams.sidStartTime=getNowFormatDate(new Date);setLocalStorage("sidStartTime",_ubaInnerParams.sidStartTime)}function dealSession(mode){var utm_s=getUrlAttr("utm_source");if(utm_s||getUrlAttr("utm_medium")||getUrlAttr("utm_campaign")||getUrlAttr("utm_content")||getUrlAttr("utm_term")||getUrlAttr("utm_adplace")){storageAdField()}var adSource=_ubaInnerParams.ad_sc;_ubaInnerParams.channelFrom=adSource||_ubaInnerParams.cf;if(_ubaInnerParams.channelFrom&&_ubaInnerParams.channelFrom.indexOf("cloud.huawei.com")>-1){_ubaInnerParams.channelFrom=""}if(adSource){if(getCookieValue("LastAdSource")!=adSource){storageAdField()}_ubaInnerParams.channelFrom=adSource;addCookie("cf",_ubaInnerParams.channelFrom,0,"/");_ubaInnerParams.cf=_ubaInnerParams.channelFrom;_ubaInnerParams.lastAdSource=adSource;addCookie("LastAdSource",_ubaInnerParams.lastAdSource,0,"/")}_ubaInnerParams.fromPageName=document.referrer;if(!adSource&&_ubaInnerParams.fromPageName&&!hasSameTopLevelDomain()&&_ubaInnerParams.fromPageName.indexOf("cloud.huawei.com")===-1){if(!mode){storageAdField()}_ubaInnerParams.channelFrom=getFullDomainName(_ubaInnerParams.fromPageName);_ubaInnerParams.cf=_ubaInnerParams.channelFrom;addCookie("cf",_ubaInnerParams.channelFrom,0,"/")}if(!_ubaInnerParams.channelFrom){_ubaInnerParams.channelFrom="Direct";addCookie("cf",_ubaInnerParams.channelFrom,0,"/");_ubaInnerParams.cf=_ubaInnerParams.channelFrom}}function hasSameTopLevelDomain(){var referrer=getTopLevelDomain(document.referrer);var href=getTopLevelDomain(window.location.href);try{if(referrer.indexOf(":")>-1){referrer=referrer.split(":")[0]}if(href.indexOf(":")>-1){href=href.split(":")[0]}}catch(err){}return referrer==href?true:false}function getTopLevelDomain(url){var domains=getFullDomainName(url).split(".");var toplevelDomains=["com","net","org","gov","edu","mil","biz","name","info","mobi","pro","travel","museum","int","areo","post","rec"];var i=0;while(i<toplevelDomains.length&&toplevelDomains[i]!=domains[domains.length-1]){i++}if(i<toplevelDomains.length){return domains[domains.length-2]+"."+domains[domains.length-1]}else{i=0;while(i<toplevelDomains.length&&toplevelDomains[i]!=domains[domains.length-2]){i++}if(i==toplevelDomains.length)return domains[domains.length-2]+"."+domains[domains.length-1];else return domains[domains.length-3]+"."+domains[domains.length-2]+"."+domains[domains.length-1]}}function getFullDomainName(fromPageName){var startIdx=fromPageName.indexOf("//");var endIdx=fromPageName.indexOf("/",startIdx+2);if(endIdx===-1&&fromPageName){endIdx=fromPageName.length}return fromPageName.substring(startIdx+2,endIdx)}function isSameDay(accessTime){_ubaInnerParams.lastAccessTime=getCookieValue("LAT");if(!_ubaInnerParams.lastAccessTime){return true}return _ubaInnerParams.lastAccessTime.substring(0,8)==accessTime.substring(0,8)?true:false}function clearStorage(){var tempExtend;for(var i=0;i<_ubaParams.bi_C1_20.length;i++){tempExtend=getLocalStorage(_ubaParams.bi_C1_20[i]);if(tempExtend){removeLocalStorage(_ubaParams.bi_C1_20[i]);continue}}for(var i=0;i<_ubaParams.bi_D1_20.length;i++){tempExtend=getLocalStorage(_ubaParams.bi_D1_20[i]);if(tempExtend){removeLocalStorage(_ubaParams.bi_D1_20[i]);continue}}removeLocalStorage("ak");removeLocalStorage("sbp")}function setParams(jsonParams){for(var key in jsonParams){if(key=="subPage"){setLocalStorage("sbp",jsonParams["subPage"]);continue}if(_ubaParams.bi_C1_20.indexOf(key)>=0){setLocalStorage(key,jsonParams[key]);continue}if(_ubaParams.bi_D1_20.indexOf(key)>=0){setLocalStorage(key,jsonParams[key]);continue}}}function setExtendOptionsByStorage_str(jsonParam){for(var i=0;i<_ubaParams.bi_C1_20.length;i++){var tempC=getLocalStorage(_ubaParams.bi_C1_20[i]);if(tempC){jsonParam[_ubaParams.bi_C1_20[i]]=tempC}}for(var i=0;i<_ubaParams.bi_D1_20.length;i++){var tempD=getLocalStorage(_ubaParams.bi_D1_20[i]);if(tempD){jsonParam[_ubaParams.bi_D1_20[i]]=tempD}}return jsonParam}function addCookie(name,value,days,path){var name=encodeURI(name);var value=encodeURI(value);var expires=new Date;try{if(days==0){document.cookie=name+"="+value+";domain="+document.domain.split(".").slice(-2).join(".")+";path=/";return}expires.setTime(expires.getTime()+days*36e5*24);path=";path=/";var _expires=typeof days=="string"?"":";expires="+expires.toGMTString();cookies=name+"="+value+_expires+path+";domain="+document.domain.split(".").slice(-2).join(".");document.cookie=cookies}catch(e){}}function getCookieValue(name){var name=encodeURI(name);try{var allcookies=document.cookie;name+="=";var pos=allcookies.indexOf(name);if(pos!=-1){var start=pos+name.length;var end=allcookies.indexOf(";",start);if(end==-1)end=allcookies.length;var value=allcookies.substring(start,end);return decodeURI(value)}else{return""}}catch(e){return""}}function deleteCookie(name,path){try{var name=escape(name);var expires=new Date(0);if(path){path=";path="+path}else{path=""}document.cookie=name+"="+";expires="+expires.toGMTString()+path+";domain="+document.domain.split(".").slice(-2).join(".")}catch(e){}}function setLocalStorage(a,b){try{if(window.localStorage){if(b!=null&&b!=""){localStorage.setItem(a,b);_ubaInnerParams.stgForDeliver[a]=b;if(getNameFlag()){window.name=JSON.stringify(_ubaInnerParams.stgForDeliver)}}else{localStorage.removeItem(a)}}else{addCookie(a,b,1/48,"/")}}catch(e){addCookie(a,b,1/48,"/")}}function getLocalStorage(a){try{if(window.localStorage){return localStorage.getItem(a)}else{return getCookieValue(a)}}catch(e){return getCookieValue(a)}}function removeLocalStorage(a){try{if(window.localStorage){_ubaInnerParams.stgForDeliver[a]=undefined;localStorage.removeItem(a)}else{deleteCookie(a,"/")}}catch(e){deleteCookie(a,"/")}}function getLocalTimeZone(){var tzo=(new Date).getTimezoneOffset()/60*-1;if(tzo<10){tzo="+0"+tzo}else{tzo="+"+tzo}return tzo+"00"}function getNowFormatDate(date){var seperator1="";var seperator2="";var month=date.getUTCMonth()+1;var strDate=date.getUTCDate();var hours=date.getUTCHours();var minutes=date.getUTCMinutes();var seconds=date.getUTCSeconds();month=addZero(month);strDate=addZero(strDate);hours=addZero(hours);minutes=addZero(minutes);seconds=addZero(seconds);var currentdate=date.getUTCFullYear()+seperator1+month+seperator1+strDate+""+hours+seperator2+minutes+seperator2+seconds;return currentdate}function addZero(timeUnit){if(timeUnit>=1&&timeUnit<=9){timeUnit="0"+timeUnit}return timeUnit}function getUrlAttr(attrName){var url=window.location.href;attrName=attrName+"=";var attrStartIdx=url.indexOf(attrName);if(attrStartIdx>=0){var valStartIdx=attrStartIdx+attrName.length;var valEndIdx1=url.indexOf("&",valStartIdx);var valEndIdx2=url.indexOf("#",valStartIdx);if(valEndIdx1<0){valEndIdx1=url.length}if(valEndIdx2<0){valEndIdx2=url.length}var valEndIdx=Math.min(valEndIdx1,valEndIdx2);return url.slice(valStartIdx,valEndIdx)}return null}if("onhashchange"in window){window.addEventListener("hashchange",function(e){_ubaHashChange=true;if(e&&e.timeStamp&&e.timeStamp!=_ubaHashTimeStamp){_ubaHashTimeStamp=e.timeStamp;_reportcurrent()}},false)}function stateChanged(){if(document.hidden||document.webkitHidden||document.msHidden||document.mozHidden){if(_ubaInnerParams.pageHide==false){_ubaInnerParams.pageHide=true;_reportcurrent()}}}function domHasAlready(){attachEventListener(document,"visibilitychange",stateChanged);attachEventListener(document,"webkitvisibilitychange",stateChanged);attachEventListener(document,"msvisibilitychange",stateChanged);attachEventListener(document,"ovisibilitychange",stateChanged);attachEventListener(document,"mozvisibilitychange",stateChanged)}function attachEventListener(obj,e,fun){obj.attachEvent?obj.attachEvent("on"+e,fun):obj.addEventListener(e,fun,false)}window.addEventListener("unload",function(event){if(_ubaInnerParams.pageHide==true){_ubaInnerParams.unloadActive=true}if(_ubaInnerParams.unloadActive==false){_ubaInnerParams.unloadActive=true;_reportcurrent()}});window.addEventListener("beforeunload",function(event){if(_ubaParams.biReqQueue&&_ubaParams.biReqQueue.length>0||_ubaParams.gaReqQueue&&_ubaParams.gaReqQueue.lenghth>0){_ubaParams.ReqQueueSend(_ubaParams.biReqQueue);_ubaParams.ReqQueueSend(_ubaParams.gaReqQueue)}if(!supporteBeacon){beforeUnloadHandler()}});function urlArgs(){var args={};try{var query=location.search.substring(1);var pairs=query.split("&");for(var i=0;i<pairs.length;i++){var pos=pairs[i].indexOf("=");if(pos==-1)continue;var name=pairs[i].substring(0,pos);var value=pairs[i].substring(pos+1);value=decodeURIComponent(value);args[name]=value}}catch(e){}return args}function getDeviceInfo(){var pageWidth,pageHeight;var deviceInfo={};try{if(window.screen){deviceInfo.screenResolution=window.screen.width*window.devicePixelRatio+"x"+window.screen.height*window.devicePixelRatio;deviceInfo.screenColors=window.screen.colorDepth+"-bit"}pageWidth=window.innerWidth;pageHeight=window.innerHeight;if(typeof pageWidth!="number"){if(document.compatMode=="CSS1Compat"){pageWidth=document.documentElement.clientWidth;pageHeight=document.documentElement.clientHeight}else{pageWidth=document.body.clientWidth;pageHeight=document.body.clientHeight}}if(window.location.host.indexOf("account")>-1||window.location.host.indexOf("account-intl")>-1||window.location.host.indexOf("console")>-1||window.location.host.indexOf("console-intl")>-1){var args=urlArgs();if(args.locale){deviceInfo.siteLang=args.locale}else{deviceInfo.siteLang=getCookieValue("locale")}}deviceInfo.browserSize=pageWidth+"x"+pageHeight;deviceInfo.browserLang=(window.navigator&&(window.navigator.language||window.navigator.browserLanguage)||"").toLowerCase()}catch(e){}return deviceInfo}}