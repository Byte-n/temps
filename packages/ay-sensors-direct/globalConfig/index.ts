import { AYSensorsGlobalConfig, SendType } from '../types';
import storage, { STORAGE_EXPIRATION_ANONYMITY_ID, STORAGE_KEY_ANONYMITY_ID } from '../storage';
import {
    FunctionNotInitError,
    generateSensorsAnonymityUniqueId,
    getDeferPromise, Platform,
    SensorsProfileProperties,
    SensorsPublicProperties,
} from 'ay-sensors-share';

/** 全局配置对象 */
const config: AYSensorsGlobalConfig = {
    imgUseCrossOrigin: false,
    sendType: SendType.beacon,
    serverURL: '',
    app: '',
    awaiter: Promise.resolve(null),
    /** 用户关联ID */
    getLoginId (): string {
        throw new FunctionNotInitError('getLoginId');
    },
    /** 公共属性 */
    getSensorsPublicProperties (): Partial<SensorsPublicProperties> {
        throw new FunctionNotInitError('getSensorsPublicProperties');
    },
    /** 用户属性 */
    getSensorsProfileProperties (): Partial<SensorsProfileProperties> {
        throw new FunctionNotInitError('getSensorsProfileProperties');
    },
    initFinished: false,
    waitSensorsInitFinished: getDeferPromise<null>(),
    platform: Platform.MB,
    requestInterface: null,
    currentProfile: {},
    currentPublicProperties: {},
    distinctId: null,
    anonymityId: initAnonymityId(),
};
export default config;

/** 获取 distinctId */
export const getDistinctId = () => {
    const { distinctId, anonymityId } = config;
    return distinctId || anonymityId;
};

/** 获取随机的匿名key */
function initAnonymityId () {
    const value = storage.getStorage<string>(STORAGE_KEY_ANONYMITY_ID);
    if (value !== null && value !== undefined && value.trim().length > 0) {
        return value;
    }
    const id = generateSensorsAnonymityUniqueId();
    storage.setStorage(STORAGE_KEY_ANONYMITY_ID, id, STORAGE_EXPIRATION_ANONYMITY_ID);
    return id;
}

