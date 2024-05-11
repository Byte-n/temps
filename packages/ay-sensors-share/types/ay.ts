import { Defer, Platform } from './base';
import {
    GetSensorsProfilePropertiesInterface, GetSensorsPublicPropertiesInterface, SensorsProfileProperties,
} from './index';

export interface BaseInitAySensorsParams {
    /** 当前是那个app */
    app: string;
    platform: Platform;
    /** 等待，等待 resolve 后再初始化神策 */
    awaiter?: Promise<any>;
    /** 用于获取用户的唯一标识，用于神策的用户关联 */
    getLoginId: () => string;
    /** 获取用户属性，初始化和更新时调用 [data]: 自定义数据  */
    getSensorsProfileProperties: GetSensorsProfilePropertiesInterface;
    /** 获取公共属性，初始化和更新时调用 */
    getSensorsPublicProperties: GetSensorsPublicPropertiesInterface;
    /** aySensors.init后立即初始化神策，awaiter 依旧有效 */
    beginInitSensor?: boolean;
}

export interface BaseAYSensorsGlobalConfig {
    // 初始化是否完成
    initFinished: boolean;
    waitSensorsInitFinished: Defer<any>;
    /** 当前用户属性 */
    currentProfile: Partial<SensorsProfileProperties>;
}
