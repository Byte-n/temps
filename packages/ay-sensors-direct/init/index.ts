import { InitAySensorParams, SendType } from '../types';
import globalConfig from '../globalConfig';
import sensors from '../sensors';
import { AySensorsError, logger } from 'ay-sensors-share';

/** 初始化 */
export function init (config: InitAySensorParams) {
    const _config = { ...config };
    const {
        sendType, imgUseCrossOrigin,
        serverURL, app, platform,
        getSensorsProfileProperties, getSensorsPublicProperties, getLoginId,
        awaiter, requestInterface,
    } = _config;
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
        const find = serverURL.findIndex((item) => typeof item?.name !== 'string' || typeof item?.url !== 'string');
        if (find !== -1) {
            throw new AySensorsError('serverURL 数组中的每一项必须是一个对象，且包含 name 和 url');
        }
    } else if (typeof serverURL !== 'string') {
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
    } else {
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
export async function initSensors () {
    const {
        waitSensorsInitFinished,
        awaiter,
        getLoginId,
        getSensorsPublicProperties,
        getSensorsProfileProperties,
    } = globalConfig;
    // 等待
    await awaiter;
    const distinctId = getLoginId();
    const currentPublicProperties = getSensorsPublicProperties({ init: true });
    const currentProfile = getSensorsProfileProperties({ init: true });
    logger.info('init:', distinctId, currentProfile, currentPublicProperties);
    // 公共属性并不会触发埋点，只是内存中存一下
    sensors.registerPage(currentPublicProperties);

    if (!(distinctId === undefined  || distinctId === null)) {
        sensors.login(distinctId);
    }
    // 有效的对象，才触发 用户属性 事件
    if (typeof currentProfile === 'object' && Object.keys(currentProfile).length > 0) {
        sensors.setProfile(currentProfile);
    }
    waitSensorsInitFinished.resolve(null);
    globalConfig.initFinished = true;
    return true;
}
