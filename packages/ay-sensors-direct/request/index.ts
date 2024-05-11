import { RequestInterface, RequestInterfaceCallback, SendType, SensorsJSONData } from '../types';
import globalConfig from '../globalConfig';
import { logger } from 'ay-sensors-share';

/** 埋点，请求 */
export default async function request (data: SensorsJSONData, callback?: RequestInterfaceCallback, waitInitFinished = true) {
    const {
        waitSensorsInitFinished,
        initFinished,
        sendType,
        serverURL,
    } = globalConfig;
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
    } else {
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
const encodeData = (data: SensorsJSONData) => {
    const dStr = base64(JSON.stringify(data));
    return `data=${encodeURIComponent(dStr)}&ext=${encodeURIComponent(`crc=${hash(dStr)}`)}`;
};
/** ajax 形式的请求 */
const ajaxFetchRequest: RequestInterface = ({
    body,
    callback,
    serverURL,
}) => {
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
const beaconRequest: RequestInterface = ({
    data,
    body,
    callback,
    serverURL,
}) => {
    if (typeof navigator?.sendBeacon === 'function') {
        navigator.sendBeacon(serverURL, body);
    } else {
        // 降级为 img
        beaconImageRequest({ data, body, callback, serverURL });
    }
};
/** beacon 降级为图片 */
const beaconImageRequest: RequestInterface = ({
    body,
    callback,
    serverURL,
}) => {
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
    const close = (result: boolean) => {
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
    } else {
        img.src = `${serverURL}&${body}`;
    }
};

/** 参考神策jsSDK里面的操作 */
function base64 (str: string) {
    let result: string;
    try {
        result = btoa(encodeURIComponent(str)
            .replace(
                /%([0-9A-F]{2})/g,
                (_e, str) => {
                    return String.fromCharCode(Number(`0x${str}`));
                },
            ));
    } catch (_err) {
        result = str;
    }
    return result;
}

/** 参考神策jsSDK里面的操作 */
function hash (str: string) {
    // 首先判断输入是否为字符串类型，如果不是则返回 0
    if (typeof str !== 'string') return 0;

    // 初始化哈希值 total 和字符编码 charCode
    let total = 0;
    let charCode = null;

    // 如果输入字符串长度为 0，则直接返回哈希值 total
    if (str.length === 0) return total;

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
