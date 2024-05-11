(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aySensors"] = factory();
	else
		root["aySensors"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aySensors: () => (/* binding */ aySensors),
  "default": () => (/* binding */ index)
});

// NAMESPACE OBJECT: ../ay-sensors-share/event/events.ts
var events_namespaceObject = {};
__webpack_require__.r(events_namespaceObject);
__webpack_require__.d(events_namespaceObject, {
  backFlowEvent: () => (backFlowEvent),
  buildUpConnectionEvent: () => (buildUpConnectionEvent),
  buttonClickEvent: () => (buttonClickEvent),
  contentClickEvent: () => (contentClickEvent),
  endOfVideoPlayEvent: () => (endOfVideoPlayEvent),
  ftAdButtonClickEvent: () => (ftAdButtonClickEvent),
  ftAdPageviewEvent: () => (ftAdPageviewEvent),
  homeButtonClickEvent: () => (homeButtonClickEvent),
  homePageviewEvent: () => (homePageviewEvent),
  navigationBarButtonClickEvent: () => (navigationBarButtonClickEvent),
  noticeButtonClickEvent: () => (noticeButtonClickEvent),
  noticePageviewEvent: () => (noticePageviewEvent),
  pageviewEvent: () => (pageviewEvent),
  searchEvent: () => (searchEvent),
  searchPageviewEvent: () => (searchPageviewEvent),
  searchResultClickEvent: () => (searchResultClickEvent),
  splitScreenExposeEvent: () => (splitScreenExposeEvent),
  sqPageViewEvent: () => (sqPageViewEvent),
  statisticsEvent: () => (statisticsEvent),
  taskProcessingResultsEvent: () => (taskProcessingResultsEvent),
  toastPageviewEvent: () => (toastPageviewEvent),
  userLabelEvent: () => (userLabelEvent),
  videoPlayEvent: () => (videoPlayEvent),
  vipFlagTerminateEvent: () => (vipFlagTerminateEvent),
  vipFlagTerminateNowEvent: () => (vipFlagTerminateNowEvent),
  yyAdPageviewEvent: () => (yyAdPageviewEvent)
});

// NAMESPACE OBJECT: ./sensors/profile.ts
var profile_namespaceObject = {};
__webpack_require__.r(profile_namespaceObject);
__webpack_require__.d(profile_namespaceObject, {
  appendProfile: () => (appendProfile),
  deleteProfile: () => (deleteProfile),
  incrementProfile: () => (incrementProfile),
  setOnceProfile: () => (setOnceProfile),
  setProfile: () => (setProfile),
  unsetProfile: () => (unsetProfile)
});

// NAMESPACE OBJECT: ./sensors/publicProperty.ts
var publicProperty_namespaceObject = {};
__webpack_require__.r(publicProperty_namespaceObject);
__webpack_require__.d(publicProperty_namespaceObject, {
  registerPage: () => (registerPage)
});

// NAMESPACE OBJECT: ./sensors/track.ts
var sensors_track_namespaceObject = {};
__webpack_require__.r(sensors_track_namespaceObject);
__webpack_require__.d(sensors_track_namespaceObject, {
  track: () => (track_track)
});

// NAMESPACE OBJECT: ./sensors/login.ts
var login_namespaceObject = {};
__webpack_require__.r(login_namespaceObject);
__webpack_require__.d(login_namespaceObject, {
  login: () => (login)
});

// NAMESPACE OBJECT: ./sensors/seo.ts
var seo_namespaceObject = {};
__webpack_require__.r(seo_namespaceObject);
__webpack_require__.d(seo_namespaceObject, {
  trackSeoOnce: () => (trackSeoOnce)
});

;// CONCATENATED MODULE: ./types/index.ts
var SensorsEventType;
(function (SensorsEventType) {
    SensorsEventType["track_signup"] = "track_signup";
    SensorsEventType["track"] = "track";
    SensorsEventType["profile_set"] = "profile_set";
    SensorsEventType["profile_set_once"] = "profile_set_once";
    SensorsEventType["profile_increment"] = "profile_increment";
    SensorsEventType["profile_delete"] = "profile_delete";
    SensorsEventType["profile_append"] = "profile_append";
    SensorsEventType["profile_unset"] = "profile_unset";
})(SensorsEventType || (SensorsEventType = {}));
/** 埋点发送方式类型 */
var SendType;
(function (SendType) {
    SendType["beacon"] = "beacon";
    SendType["ajax"] = "ajax";
})(SendType || (SendType = {}));

;// CONCATENATED MODULE: ../ay-sensors-share/types/base.ts
/**
 * 应用平台
 */
var Platform;
(function (Platform) {
    Platform["PC"] = "PC";
    Platform["MB"] = "MB";
})(Platform || (Platform = {}));

;// CONCATENATED MODULE: ../ay-sensors-share/types/index.ts






;// CONCATENATED MODULE: ../ay-sensors-share/utils/generateSensorsAnonymityUniqueId.js
/* eslint-disable */
/*
从 神策 SDK 中复制除了的 随机 ID 算法
 */

// 检查一个值是否为对象
function isObject(value) {
    return null != value && '[object Object]' == Object.prototype.toString.call(value);
}

// 生成伪随机数
var generatePseudoRandomNumber = function () {
    var timestamp = new Date().getTime();
    var randomNumber = timestamp;
    return function (range) {
        randomNumber = (9301 * randomNumber + 49297) % 233280;
        return Math.ceil(randomNumber / 233280 * range);
    };
}();

// 生成伪随机浮点数
function generatePseudoRandomFloat() {
    if (typeof Uint32Array === 'function') {
        var cryptoObject = '';
        if (typeof crypto !== 'undefined') {
            cryptoObject = crypto;
        } else if (typeof msCrypto !== 'undefined') {
            cryptoObject = msCrypto;
        }
        if (isObject(cryptoObject) && cryptoObject.getRandomValues) {
            var randomArray = new Uint32Array(1);
            var randomValue = cryptoObject.getRandomValues(randomArray)[0];
            var powerOfTwo = Math.pow(2, 32);
            return randomValue / powerOfTwo;
        }
    }
    return generatePseudoRandomNumber(1e19) / 1e19;
}

/** 从神策SDK里面提出的匿名ID算法，由ChatGPT完成反编译 */
var generateSensorsAnonymityUniqueId = function () {
    var generateTimestamp = function () {
        for (var timestamp = 1 * new Date(), increment = 0; timestamp == 1 * new Date();) {
            increment++;
        }
        return timestamp.toString(16) + increment.toString(16);
    };
    var generateRandomFloat = function () {
        return generatePseudoRandomFloat().toString(16).replace('.', '');
    };
    var generateUserAgentHash = function () {
        function combineHashes(hash, array) {
            var result = 0;
            for (var index = 0; index < array.length; index++) {
                result |= array[index] << 8 * index;
            }
            return hash ^ result;
        }

        var userAgent = navigator.userAgent;
        var byteValueArray = [];
        var hash = 0;
        for (var i = 0; i < userAgent.length; i++) {
            var byteValue = userAgent.charCodeAt(i);
            byteValueArray.unshift(255 & byteValue);
            if (byteValueArray.length >= 4) {
                hash = combineHashes(hash, byteValueArray);
                byteValueArray = [];
            }
        }
        if (byteValueArray.length > 0) {
            hash = combineHashes(hash, byteValueArray);
        }
        return hash.toString(16);
    };
    return function () {
        var screenSize = String(screen.height * screen.width);
        screenSize = screenSize && /\d{5,}/.test(screenSize) ? screenSize.toString(16) : String(31242 * generatePseudoRandomFloat()).replace('.', '').slice(0, 8);
        var uniqueId = generateTimestamp() + '-' + generateRandomFloat() + '-' + generateUserAgentHash() + '-' + screenSize + '-' + generateTimestamp();
        return uniqueId ? uniqueId : (String(generatePseudoRandomFloat()) + String(generatePseudoRandomFloat()) + String(generatePseudoRandomFloat())).slice(2, 15);
    };
}();
/* harmony default export */ const utils_generateSensorsAnonymityUniqueId = (generateSensorsAnonymityUniqueId);

;// CONCATENATED MODULE: ../ay-sensors-share/utils/index.ts

const ay_sensors_share_utils_generateSensorsAnonymityUniqueId = utils_generateSensorsAnonymityUniqueId;
/** 判断是否为null 后 undefined */
const isNullOrUndefined = (obj) => obj === null || obj === undefined;
/** 空函数 */
const NOOPFunction = () => {
};
/** Defer */
function getDeferPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
}
/** 过来空值，null 和 undefined */
function filterObjectEmptyValue(obj) {
    return Object.keys(obj).reduce((res, key) => {
        if (obj[key] !== undefined && obj[key] !== null) {
            res[key] = obj[key];
        }
        return res;
    }, {});
}
/** 判断用户属性是否需要更新 */
function isNeedUpdateProfile(currentProfile, newProfile) {
    if (typeof newProfile !== 'object' || newProfile === null) {
        return null;
    }
    let keys = Object.keys(newProfile);
    keys = keys.filter(key => {
        const cur = currentProfile[key];
        const value = newProfile[key];
        if (value === undefined || value === null) {
            return false;
        }
        // 到这里，value 肯定有值
        if (cur === undefined || cur === null) {
            // cur 没有，则是从 无 到有
            return true;
        }
        // 直接比较 字符。 这里可能是 number, string, boolean, array<number | string | boolean>
        return cur.toString() !== value.toString();
    });
    // 返回差异
    return keys.length === 0 ? null : keys.reduce((res, key) => {
        res[key] = newProfile[key];
        return res;
    }, {});
}

;// CONCATENATED MODULE: ../ay-sensors-share/event/track.ts
const current = {
    track: () => void 0,
};
/** 埋点 */
const track = (eventName, property, callback) => {
    current.track(eventName, property, callback);
};
/** 设置当前埋点方法 */
const setTrack = (value) => {
    current.track = value;
};

;// CONCATENATED MODULE: ../ay-sensors-share/event/events.ts

/**
 * 首页浏览事件
 */
function homePageviewEvent(property) {
    track('HomePageview', property);
}
/**
 * 首页点击事件
 */
function homeButtonClickEvent(property) {
    track('HomeButtonClick', property);
}
/**
 * 分屏曝光
 */
function splitScreenExposeEvent(property) {
    track('SplitScreenExpose', property);
}
/**
 * 导航栏点击事件
 */
function navigationBarButtonClickEvent(property) {
    track('NavigationBarButtonClick', property);
}
/**
 * 公告浏览事件
 * @param property{NoticePageviewEventProperties}
 */
function noticePageviewEvent(property) {
    track('NoticePageview', property);
}
/**
 * 公告点击事件
 */
function noticeButtonClickEvent(property) {
    track('NoticeButtonClick', property);
}
/**
 * 页面浏览
 */
function pageviewEvent(property) {
    track('Pageview', property);
}
/**
 * 按钮点击
 */
function buttonClickEvent(property) {
    track('ButtonClick', property);
}
/**
 * toast浏览
 */
function toastPageviewEvent(property) {
    track('ToastPageview', property);
}
/**
 * 搜索事件
 */
function searchEvent(property) {
    track('Search', property);
}
/**
 * 搜索结果浏览
 */
function searchPageviewEvent(property) {
    track('SearchPageview', property);
}
/**
 * 搜索结果点击
 */
function searchResultClickEvent(property) {
    track('SearchResultClick', property);
}
/**
 * 内容点击事件
 */
function contentClickEvent(property) {
    track('ContentClick', property);
}
/**
 * 开始播放事件
 */
function videoPlayEvent(property) {
    track('VideoPlay', property);
}
/**
 * 结束播放事件
 */
function endOfVideoPlayEvent(property) {
    track('EndOfVideoPlay', property);
}
/**
 * 任务事件
 */
function taskProcessingResultsEvent(property) {
    track('TaskProcessingResults', property);
}
/**
 * 统计事件
 */
function statisticsEvent(property) {
    track('Statistics', property);
}
/**
 * 回流事件
 */
function backFlowEvent(property) {
    track('BackFlow', property);
}
/**
 * 运营_广告页面浏览
 */
function yyAdPageviewEvent(property) {
    track('YY_AdPageview', property);
}
/**
 * 广告引导_广告页面浏览
 */
function ftAdPageviewEvent(property) {
    track('FT_AdPageview', property);
}
/**
 * 广告引导_广告点击
 */
function ftAdButtonClickEvent(property) {
    track('FT_AdButtonClick', property);
}
/**
 * 用户标签事件
 */
function userLabelEvent(property) {
    track('UserLabel', property);
}
/**
 * 联系商家事件
 */
function buildUpConnectionEvent(property) {
    track('BuildUpConnection', property);
}
/**
 * 授权页面浏览
 */
function sqPageViewEvent(property) {
    track('SQ_PageView', property);
}
/**
 * 到期事件_续费_实时
 */
function vipFlagTerminateNowEvent(property) {
    track('VipFlagTerminateNow', property);
}
/**
 * 到期事件_续费
 */
function vipFlagTerminateEvent(property) {
    track('VipFlagTerminate', property);
}

;// CONCATENATED MODULE: ../ay-sensors-share/error/index.ts
class AySensorsError extends Error {
    constructor(message) {
        super(message);
    }
}
/** 函数未初始化错误 */
class FunctionNotInitError extends AySensorsError {
    constructor(name) {
        super(`ay sensors: 函数${name} 未初始化！`);
    }
}
class NotImplementedError extends AySensorsError {
    constructor(name) {
        super(`ay sensors: ${name} 还未实现！`);
    }
}

;// CONCATENATED MODULE: ../ay-sensors-share/utils/functions.ts

/** 创建一个只能调用一次的函数 */
function createCallOnceFunction(fn) {
    let hasBeenCalled = false;
    let result;
    return function (...args) {
        if (hasBeenCalled) {
            throw new AySensorsError('This function can only be called once.');
        }
        hasBeenCalled = true;
        result = fn(...args);
        return result;
    };
}

;// CONCATENATED MODULE: ../ay-sensors-share/event/yyOrderNowEvent.ts

/**
 * 广告点击立即订购神策埋点
 * @param modalData 神策埋点属性
 * @param _btnText   点击的按钮
 * @param _pid       pid
 * @param [_otherData] 其他神策埋点属性
 * @private
 */
function yyOrderNowEvent(modalData, _btnText, _pid, _otherData) {
    // 后续将 modalData: any, btnText: string, pid: number, otherData?: Record<string, any>
    // 改为： data: any.
    // 也就是 移除 btnText 和 pid 参数, data替代 modalData, otherData
    const data = [modalData, _btnText, _pid, _otherData]
        .filter(val => typeof val === 'object' && val)
        // 合并
        .reduce((res, val) => (Object.assign(Object.assign({}, res), val)), {});
    // 兼容一下部分旧数据的转换 creative_id creative_name pid_name packageName amountPayable 不是神策字段
    data.cid = data.cid || data.creative_id;
    delete data.creative_id;
    data.cname = data.cname || data.creative_name;
    delete data.creative_name;
    data.pname = data.pname || data.pid_name;
    delete data.pid_name;
    data.package_name = data.package_name || data.packageName;
    delete data.packageName;
    data.amount_payable = data.amount_payable || data.amountPayable;
    delete data.amountPayable;
    // pid 和 pname 都是神策字段，form_pid 默认和 pid 一样，from_pname 默认和 pname 一样
    data.from_pid = data.from_pid || data.pid;
    data.from_pname = data.from_pname || data.pname;
    track('YY_OrderNow', data);
}

;// CONCATENATED MODULE: ../ay-sensors-share/event/index.ts




/** 创建一堆自定义事件的套壳函数,自定义事件套壳函数内部会调用 track  */
const createEvents = createCallOnceFunction((track) => {
    setTrack(track);
    // 显示声明类型。不然 在调用 ts 在生成 d.ts 文件是，events 的 参数类型会丢失。
    const result = Object.assign(Object.assign({}, events_namespaceObject), { yyOrderNowEvent: yyOrderNowEvent });
    return result;
});

;// CONCATENATED MODULE: ../ay-sensors-share/update/index.ts



const update_current = {
    getSensorsProfileProperties: () => {
        throw new FunctionNotInitError('getSensorsProfileProperties');
    },
    getSensorsPublicProperties: () => {
        throw new FunctionNotInitError('getSensorsPublicProperties');
    },
    setProfile: () => {
        throw new FunctionNotInitError('setProfile');
    },
    registerPage: () => {
        throw new FunctionNotInitError('registerPage');
    },
};
/**
 * 更新神策中的用户属性
 * @param [config]
 * @param [property] 自定义字段，如果指定，则不再从 getSensorsProfileProperties 中获取(getSensorsProfileProperties，会忽略空值)
 *  */
function updateSensorsProfileProperties(property, config) {
    const obj = typeof property === 'object' ? property
        : filterObjectEmptyValue(update_current.getSensorsProfileProperties(config || {}));
    if (!(obj && Object.keys(obj).length > 0)) {
        return;
    }
    update_current.setProfile(obj);
}
/**
 * 更新神策中的公共属性,
 * @param [config] 更新设置
 * @param [property] 自定义字段，如果指定，则不再从 getSensorsPublicProperties 中获取(从getSensorsPublicProperties中获取，会忽略空值)
 */
function updateSensorsPublicProperties(property, config) {
    const obj = typeof property === 'object' ? property
        : filterObjectEmptyValue(update_current.getSensorsPublicProperties(config || {}));
    if (!(obj && Object.keys(obj).length > 0)) {
        return;
    }
    update_current.registerPage(obj);
}
/** 更新用户属性 */
function updateSensorsProfilePropertiesOnlyUserInfo(property) {
    updateSensorsProfileProperties(property, { onlyUserInfo: true });
}
/** 更新公共属性 */
function updateSensorsPublicPropertiesOnlyUserInfo(property) {
    updateSensorsPublicProperties(property, { onlyUserInfo: true });
}
const createUpdates = createCallOnceFunction((value) => {
    Object.assign(update_current, value);
    return {
        updateSensorsProfileProperties,
        updateSensorsPublicProperties,
        updateSensorsProfilePropertiesOnlyUserInfo,
        updateSensorsPublicPropertiesOnlyUserInfo,
    };
});

;// CONCATENATED MODULE: ../ay-sensors-share/logger/index.ts
/** 版本日志 */
const versionLoggerInfo = (name, version) => {
    console.info(`%c AySensors %c ${name} ${version} %c`, 'background:#4CAF50 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#7158e2 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent');
};
const loggerInfoLabel = 'AySensors';
const logger = {
    debug: console.debug.bind(null, loggerInfoLabel),
    log: console.log.bind(null, loggerInfoLabel),
    info: console.info.bind(null, loggerInfoLabel),
    warn: console.warn.bind(null, loggerInfoLabel),
    error: console.error.bind(null, loggerInfoLabel),
};

;// CONCATENATED MODULE: ../ay-sensors-share/index.ts







;// CONCATENATED MODULE: ./storage/index.ts

/** 将对象存储到sessionStorage中 */
function setStorage(key, value, expiration) {
    const data = { data: value };
    if (expiration) {
        data.expiration = calculateExpiration(expiration);
    }
    localStorage.setItem(key, JSON.stringify(data));
}
/** 从sessionStorage中获取对象 */
function getStorage(key) {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        const data = JSON.parse(storedData);
        if (isExpired(data)) {
            localStorage.removeItem(key);
            return null;
        }
        return data.data;
    }
    return null;
}
/** 计算过期时间 */
function calculateExpiration(expiration) {
    const currentTime = new Date().getTime();
    if (expiration.unit === "days" /* StoredDataExpirationUnit.days */) {
        return currentTime + (expiration.value * 24 * 60 * 60 * 1000);
    }
    else if (expiration.unit === "hours" /* StoredDataExpirationUnit.hours */) {
        return currentTime + (expiration.value * 60 * 60 * 1000);
    }
    else if (expiration.unit === "minutes" /* StoredDataExpirationUnit.minutes */) {
        return currentTime + (expiration.value * 60 * 1000);
    }
    throw new AySensorsError('Invalid expiration unit');
}
/** 检查对象是否已过期 */
function isExpired(data) {
    const currentTime = new Date().getTime();
    return !!(data.expiration && data.expiration <= currentTime);
}
const storage = { setStorage, getStorage };
/* harmony default export */ const storage_0 = (storage);
/** anonymity_id的key */
const STORAGE_KEY_ANONYMITY_ID = 'storage_key_anonymity_id';
/** STORAGE_KEY_ANONYMITY_ID 的过期时间 */
const STORAGE_EXPIRATION_ANONYMITY_ID = {
    unit: "days" /* StoredDataExpirationUnit.days */,
    // 一百年过期。永不过期
    value: 365 * 100
};

;// CONCATENATED MODULE: ./globalConfig/index.ts



/** 全局配置对象 */
const config = {
    imgUseCrossOrigin: false,
    sendType: SendType.beacon,
    serverURL: '',
    app: '',
    awaiter: Promise.resolve(null),
    /** 用户关联ID */
    getLoginId() {
        throw new FunctionNotInitError('getLoginId');
    },
    /** 公共属性 */
    getSensorsPublicProperties() {
        throw new FunctionNotInitError('getSensorsPublicProperties');
    },
    /** 用户属性 */
    getSensorsProfileProperties() {
        throw new FunctionNotInitError('getSensorsProfileProperties');
    },
    initFinished: false,
    waitSensorsInitFinished: getDeferPromise(),
    platform: Platform.MB,
    requestInterface: null,
    currentProfile: {},
    currentPublicProperties: {},
    distinctId: null,
    anonymityId: initAnonymityId(),
};
/* harmony default export */ const globalConfig = (config);
/** 获取 distinctId */
const getDistinctId = () => {
    const { distinctId, anonymityId } = config;
    return distinctId || anonymityId;
};
/** 获取随机的匿名key */
function initAnonymityId() {
    const value = storage_0.getStorage(STORAGE_KEY_ANONYMITY_ID);
    if (value !== null && value !== undefined && value.trim().length > 0) {
        return value;
    }
    const id = ay_sensors_share_utils_generateSensorsAnonymityUniqueId();
    storage_0.setStorage(STORAGE_KEY_ANONYMITY_ID, id, STORAGE_EXPIRATION_ANONYMITY_ID);
    return id;
}

;// CONCATENATED MODULE: ./request/index.ts



/** 埋点，请求 */
async function request(data, callback, waitInitFinished = true) {
    const { waitSensorsInitFinished, initFinished, sendType, serverURL, } = globalConfig;
    // 需要等待，且 初始化未完成。
    if (waitInitFinished && !initFinished) {
        // 等待初始化完成。
        await waitSensorsInitFinished;
    }
    const body = encodeData(data);
    // JSON.parse(JSON.stringify 弄一下，使其打印的数据和发出去的一致。
    logger.log(`send -> [${data.type}] : [${data.event}] :`, JSON.parse(JSON.stringify(data)));
    const { requestInterface } = globalConfig;
    let list;
    if (typeof serverURL === 'string') {
        list = [{ name: null, url: serverURL }];
    }
    else {
        list = serverURL;
    }
    for (const obj of list) {
        obj.name && logger.log('send to:', obj.name);
        if (typeof requestInterface === 'function') {
            requestInterface({ data, callback, body, serverURL: obj.url });
            break;
        }
        switch (sendType) {
            case SendType.beacon:
                beaconRequest({ data, callback, body, serverURL: obj.url });
                break;
            case SendType.ajax:
                ajaxFetchRequest({ data, callback, body, serverURL: obj.url });
                break;
            default:
                ajaxFetchRequest({ data, callback, body, serverURL: obj.url });
                break;
        }
    }
}
/** 编码生成请求体 */
const encodeData = (data) => {
    const dStr = base64(JSON.stringify(data));
    return `data=${encodeURIComponent(dStr)}&ext=${encodeURIComponent(`crc=${hash(dStr)}`)}`;
};
/** ajax 形式的请求 */
const ajaxFetchRequest = ({ body, callback, serverURL, }) => {
    // 发起 POST 请求
    return fetch(serverURL, {
        method: 'POST',
        body,
    })
        .then((res) => {
        typeof callback === 'function' && callback(true);
        // 继续返回结果。
        return res;
    })
        .catch((err) => {
        typeof callback === 'function' && callback(false);
        // 继续返回错误
        return Promise.reject(err);
    });
};
/** beacon 形式的请求 */
const beaconRequest = ({ data, body, callback, serverURL, }) => {
    if (typeof (navigator === null || navigator === void 0 ? void 0 : navigator.sendBeacon) === 'function') {
        navigator.sendBeacon(serverURL, body);
    }
    else {
        // 降级为 img
        beaconImageRequest({ data, body, callback, serverURL });
    }
};
/** beacon 降级为图片 */
const beaconImageRequest = ({ body, callback, serverURL, }) => {
    const { imgUseCrossOrigin } = globalConfig;
    // 创建 img
    const img = document.createElement('img');
    img.width = 1;
    img.height = 1;
    // 跨域设置
    if (imgUseCrossOrigin) {
        img.crossOrigin = 'anonymous';
    }
    /** 清理 */
    const close = (result) => {
        img.onload = null;
        img.onerror = null;
        img.onabort = null;
        if (callback) {
            typeof callback === 'function' && callback(result);
        }
        setTimeout(() => {
            // ie 中应该设置为 about:blank，ie 这种情况可以忽略
            img.src = '';
            /*
                神策里面会计算一个时间 pa.datasend_timeout - pa.callback_timeout .
                datasend_timeout 默认 3s, callback_timeout 为 200ms 的样子
                原因不清楚
             */
        }, 2800);
    };
    // 善后
    img.onload = close.bind(null, true);
    img.onabort = close.bind(null, false);
    // @ts-ignore
    img.onerror = img.onabort;
    // go!
    if (serverURL.indexOf('?') === -1) {
        img.src = `${serverURL}?${body}`;
    }
    else {
        img.src = `${serverURL}&${body}`;
    }
};
/** 参考神策jsSDK里面的操作 */
function base64(str) {
    let result;
    try {
        result = btoa(encodeURIComponent(str)
            .replace(/%([0-9A-F]{2})/g, (_e, str) => {
            return String.fromCharCode(Number(`0x${str}`));
        }));
    }
    catch (_err) {
        result = str;
    }
    return result;
}
/** 参考神策jsSDK里面的操作 */
function hash(str) {
    // 首先判断输入是否为字符串类型，如果不是则返回 0
    if (typeof str !== 'string')
        return 0;
    // 初始化哈希值 total 和字符编码 charCode
    let total = 0;
    let charCode = null;
    // 如果输入字符串长度为 0，则直接返回哈希值 total
    if (str.length === 0)
        return total;
    // 遍历字符串中的每个字符
    for (let index = 0; index < str.length; index++) {
        // 获取当前字符的字符编码
        charCode = str.charCodeAt(index);
        // 根据哈希算法更新哈希值 total
        total = (total << 5) - total + charCode;
        total &= total;
    }
    // 返回最终的哈希值 total
    return total;
}

;// CONCATENATED MODULE: ./sensors/profile.ts




/** profile 系列的请求 */
function profileRequest(value, type, callback) {
    const { anonymityId } = globalConfig;
    const distinct_id = getDistinctId();
    // 组装数据
    const data = {
        distinct_id,
        identities: { $identity_login_id: distinct_id },
        login_id: distinct_id,
        anonymous_id: anonymityId,
        properties: value,
        time: Date.now(),
        type,
    };
    // 发送给神策
    request(data, callback);
}
/** 设置用户属性 */
function setProfile(value, callback) {
    const result = isNeedUpdateProfile(globalConfig.currentProfile, value);
    if (!result) {
        logger.info('setProfile: no need to update');
        return;
    }
    // 更新 变动的部分
    profileRequest(result, SensorsEventType.profile_set, callback);
    // 合并
    const { currentProfile } = globalConfig;
    Object.assign(currentProfile, result);
}
/** once profile */
function setOnceProfile(value, callback) {
    const result = isNeedUpdateProfile(globalConfig.currentProfile, value);
    if (!result) {
        logger.info('setOnceProfile: no need to update');
        return;
    }
    // 更新 变动的部分
    profileRequest(result, SensorsEventType.profile_set_once, callback);
    // 合并
    const { currentProfile } = globalConfig;
    Object.assign(currentProfile, result);
}
/** append profile */
function appendProfile(value, callback) {
    throw new NotImplementedError('appendProfile');
}
/** increment profile */
function incrementProfile(value, callback) {
    throw new NotImplementedError('incrementProfile');
}
/** delete profile */
function deleteProfile(value, callback) {
    throw new NotImplementedError('deleteProfile');
}
/** unset profile */
function unsetProfile(value, callback) {
    throw new NotImplementedError('unsetProfile');
}

;// CONCATENATED MODULE: ./sensors/publicProperty.ts

/** 注册公共属性 */
function registerPage(value) {
    const { currentPublicProperties } = globalConfig;
    Object.assign(currentPublicProperties, value);
}

;// CONCATENATED MODULE: ./sensors/track.ts



/** 自定义事件埋点 */
function track_track(event, property, callback) {
    trackRequest(event, property, callback);
}
/** track request */
function trackRequest(event, value, callback) {
    const { currentPublicProperties } = globalConfig;
    const distinct_id = getDistinctId();
    const properties = Object.assign(Object.assign({}, value), currentPublicProperties);
    // 组装数据
    const data = {
        distinct_id,
        identities: { $identity_login_id: distinct_id },
        properties,
        time: Date.now(),
        type: SensorsEventType.track,
        event,
    };
    // 发送给神策
    request(data, callback);
}

;// CONCATENATED MODULE: ./sensors/login.ts



/** 用户关联，登录 */
function login(id, callback) {
    loginRequest(id, callback);
}
/** 登录埋点请求 */
function loginRequest(distinct_id, callback) {
    const { anonymityId, currentPublicProperties } = globalConfig;
    globalConfig.distinctId = distinct_id;
    // 组装数据
    const data = {
        distinct_id,
        identities: { $identity_login_id: distinct_id },
        login_id: distinct_id,
        anonymous_id: anonymityId,
        original_id: anonymityId,
        properties: Object.assign({}, currentPublicProperties),
        time: Date.now(),
        type: SensorsEventType.track_signup,
        event: '$SignUp',
    };
    // 发送给神策。 登录就不需要等待初始化完成。设置公共属性，登录，才完成初始化
    request(data, callback, false);
}

;// CONCATENATED MODULE: ./sensors/seo.ts


/** 获取  首次 渠道来源 用户属性，并使用 setOnceProfile 设置 */
function trackSeoOnce(callback) {
    const profile = getFirstChannelSourceUserProfile();
    setOnceProfile(profile, callback);
}
/** 匹配 host 的正则 */
const hostRegexp = /:\/\/([^/]+)/;
/** 获取 神策 首次 渠道来源 用户属性 */
function getFirstChannelSourceUserProfile() {
    var _a;
    const { referrer } = document;
    const host = (_a = referrer.match(hostRegexp)) === null || _a === void 0 ? void 0 : _a[1];
    logger.info('channel source host', host);
    if (!host) {
        return {
            $first_referrer: referrer,
            $first_referrer_host: host,
            $first_traffic_source_type: parseTrafficSourceType(host),
        };
    }
    let utm = {};
    // 前一个界面是百度，则获取当前界面的baiduSeo参数
    if (host === 'www.baidu.com') {
        utm = getBaiduSeoUtm();
    }
    const { $utm_source, $utm_medium, $utm_term, $utm_content, $utm_campaign } = utm;
    return {
        $first_referrer: referrer,
        $first_referrer_host: host,
        $first_traffic_source_type: ($utm_source || $utm_medium || $utm_term || $utm_content || $utm_campaign) ? '付费广告流量'
            : parseTrafficSourceType(host),
        $first_search_keyword: utm.keyword,
        $utm_source,
        $utm_medium,
        $utm_term,
        $utm_content,
        $utm_campaign,
    };
}
/**
 * 获取百度SEO参数
 * 例如：
 * {
 *     "utm_source": "baidusem",
 *     "utm_medium": "产品服务-代发助手王",
 *     "utm_campaign": "代发助手王-核心",
 *     "utm_term": "dfzsw",
 *     "e_keywordid": "711180993648",
 *     "e_keywordid2": "711180993648",
 *     "bd_vid": "11329022610626832844"
 * }
 */
function getBaiduSeoUtm(search = location.search) {
    const params = new URLSearchParams(search);
    const keys = [];
    for (const key of params.keys()) {
        if ('e_keywordid' === key || key.startsWith('e_keywordid')) {
            keys.push(params.get(key));
        }
    }
    return {
        $utm_content: params.get('utm_content'),
        $utm_source: params.get('utm_source'),
        $utm_medium: params.get('utm_medium'),
        $utm_campaign: params.get('utm_campaign'),
        $utm_term: params.get('utm_term'),
        keyword: keys.length ? keys.join(',') : undefined,
    };
}
/**
 * 按神策的规则解析
 * 神策文档链接：https://manual.sensorsdata.cn/sa/latest/zh_cn/web-87163247.html#id-%E6%B8%A0%E9%81%93%E8%BF%BD%E8%B8%AA%E4%B8%8E%E5%B9%BF%E5%91%8A%EF%BC%88Web%EF%BC%89-%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%85%B3%E9%94%AE%E8%AF%8Dsearch_keyword
 * 自然搜索流量	落地页地址无 utm_xxx 参数且前向地址中包含search 中的参数： 神策已有参数：['www.baidu.','m.baidu.','m.sm.cn','so.com','sogou.com','youdao.com','google.','yahoo.com/','bing.com/','ask.com/'];
 * 社交网站流量	落地页地址无 utm_xxx 参数且前向地址中包含 social 中的参数: 神策已有参数：['weibo.com','kaixin001.com','douban.com','qzone.qq.com','zhihu.com','tieba.baidu.com','weixin.qq.com'];
 * 直接流量	如果前向地址为空：直接复制网址或者点击书签打开页面。
 * 引荐流量	如果以上情况都不是，比如前向地址为某个私人网站。
 */
function parseTrafficSourceType(host) {
    if (!host) {
        return '直接流量';
    }
    if (['www.baidu.', 'm.baidu.', 'm.sm.cn', 'so.com', 'sogou.com', 'youdao.com', 'google.', 'yahoo.com', 'bing.com', 'ask.com'].includes(host)) {
        return '自然搜索流量';
    }
    if (['weibo.com', 'kaixin001.com', 'douban.com', 'qzone.qq.com', 'zhihu.com', 'tieba.baidu.com', 'weixin.qq.com'].includes(host)) {
        return '社交网站流量';
    }
    return '引荐流量';
}

;// CONCATENATED MODULE: ./sensors/index.ts





/** 神策对象 */
const sensors = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, profile_namespaceObject), publicProperty_namespaceObject), sensors_track_namespaceObject), login_namespaceObject), seo_namespaceObject);
/* harmony default export */ const sensors_0 = (sensors);

;// CONCATENATED MODULE: ./init/index.ts




/** 初始化 */
function init(config) {
    const _config = Object.assign({}, config);
    const { sendType, imgUseCrossOrigin, serverURL, app, platform, getSensorsProfileProperties, getSensorsPublicProperties, getLoginId, awaiter, requestInterface, } = _config;
    if (imgUseCrossOrigin !== undefined && typeof imgUseCrossOrigin !== 'boolean') {
        throw new AySensorsError('imgUseCrossOrigin 必须是布尔值');
    }
    const sendTypes = Object.values(SendType);
    if (!sendTypes.includes(sendType)) {
        throw new AySensorsError(`SendType 必须是这其中一个：${sendTypes.toString()}`);
    }
    if (Array.isArray(serverURL)) {
        if (serverURL.length === 0) {
            throw new AySensorsError('serverURL 不能为空数组');
        }
        const find = serverURL.findIndex((item) => typeof (item === null || item === void 0 ? void 0 : item.name) !== 'string' || typeof (item === null || item === void 0 ? void 0 : item.url) !== 'string');
        if (find !== -1) {
            throw new AySensorsError('serverURL 数组中的每一项必须是一个对象，且包含 name 和 url');
        }
    }
    else if (typeof serverURL !== 'string') {
        throw new AySensorsError('serverURL 必须是一个string 或者一个 数组 {name: string, url: string}[]');
    }
    if (typeof app !== 'string') {
        throw new AySensorsError('app 必须是是字符串');
    }
    if (typeof platform !== 'string') {
        throw new AySensorsError('platform 必须是是字符串');
    }
    if (typeof getSensorsProfileProperties !== 'function') {
        throw new AySensorsError('getSensorsProfileProperties 必须是一个函数');
    }
    if (typeof getSensorsPublicProperties !== 'function') {
        throw new AySensorsError('getSensorsPublicProperties 必须是一个函数');
    }
    if (typeof getLoginId !== 'function') {
        throw new AySensorsError('getLoginId 必须是一个函数');
    }
    // @ts-ignore
    if (config.beforeAdOrderNowBeacon) {
        throw new Error('已不再支持beforeAdOrderNowBeacon');
    }
    if (typeof awaiter === 'object') {
        if (!(awaiter instanceof Promise)) {
            throw new AySensorsError('awaiter 必须是一个 Promise');
        }
    }
    else {
        delete _config.awaiter;
    }
    if (requestInterface && typeof requestInterface !== 'function') {
        throw new AySensorsError('requestInterface 必须是一个函数');
    }
    Object.assign(globalConfig, _config);
    if (globalConfig.beginInitSensor) {
        // 初始化
        return initSensors();
    }
    // 都返回 Promise
    return Promise.resolve();
}
/** 初始化神策（也许这里并没有神策SDK，只是和ay-sensors-wrapper保持一致） */
async function initSensors() {
    const { waitSensorsInitFinished, awaiter, getLoginId, getSensorsPublicProperties, getSensorsProfileProperties, } = globalConfig;
    // 等待
    await awaiter;
    const distinctId = getLoginId();
    const currentPublicProperties = getSensorsPublicProperties({ init: true });
    const currentProfile = getSensorsProfileProperties({ init: true });
    logger.info('init:', distinctId, currentProfile, currentPublicProperties);
    // 公共属性并不会触发埋点，只是内存中存一下
    sensors_0.registerPage(currentPublicProperties);
    if (!(distinctId === undefined || distinctId === null)) {
        sensors_0.login(distinctId);
    }
    // 有效的对象，才触发 用户属性 事件
    if (typeof currentProfile === 'object' && Object.keys(currentProfile).length > 0) {
        sensors_0.setProfile(currentProfile);
    }
    waitSensorsInitFinished.resolve(null);
    globalConfig.initFinished = true;
    return true;
}

;// CONCATENATED MODULE: ./update/index.ts




/** 更新操作 */
const updates = createUpdates({
    /** 获取用户属性 */
    getSensorsProfileProperties(config) {
        return globalConfig.getSensorsProfileProperties(config);
    },
    /** 获取公共属性 */
    getSensorsPublicProperties(config) {
        return globalConfig.getSensorsPublicProperties(config);
    },
    setProfile: setProfile,
    registerPage: registerPage,
});

;// CONCATENATED MODULE: ./event/index.ts


const events = createEvents(track_track);

;// CONCATENATED MODULE: ./index.ts





const aySensors = Object.assign(Object.assign(Object.assign(Object.assign({}, sensors_0), updates), events), { init: init });
// @ts-ignore
versionLoggerInfo("direct", "1.0.7");
/* harmony default export */ const index = (aySensors);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
