import { SensorsPublicProperties, SensorsTrackProperties } from './property';
import { NotArgsVoidFunction } from './base';
import { SensorsProfileProperties } from './profile';

export * from './base';
export * from './event';
export * from './profile';
export * from './property';
export * from './ay';

export type UpdateSensorPropertiesParams = {
    /** 此次 属性 更新，仅从用户属性中获取，其他（快递..开关等属性）则不获取 */
    onlyUserInfo?: boolean;
    /** 是否是初始化（登录|重新授权） */
    init?: boolean;
} & Record<string, any>;

export type TrackInterface = (eventName: string, property: SensorsTrackProperties, callback?: NotArgsVoidFunction) => void;
export type GetSensorsPublicPropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsPublicProperties>;
export type GetSensorsProfilePropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsProfileProperties>;
