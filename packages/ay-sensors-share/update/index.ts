import {
    GetSensorsProfilePropertiesInterface, GetSensorsPublicPropertiesInterface,
    SensorsProfileProperties,
    SensorsPublicProperties,
    UpdateSensorPropertiesParams,
} from '../types';
import { filterObjectEmptyValue } from '../utils';
import { FunctionNotInitError } from '../error';
import { createCallOnceFunction } from '../utils/functions';

const current: {
    getSensorsProfileProperties: GetSensorsProfilePropertiesInterface;
    getSensorsPublicProperties: GetSensorsPublicPropertiesInterface;
    setProfile: (value: Partial<SensorsProfileProperties>) => void;
    registerPage: (value: Partial<SensorsPublicProperties>) => void;
} = {
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
function updateSensorsProfileProperties (property?: Partial<SensorsProfileProperties>, config?: UpdateSensorPropertiesParams) {
    const obj = typeof property === 'object' ? property
        : filterObjectEmptyValue(current.getSensorsProfileProperties(config || {}));
    if (!(obj && Object.keys(obj).length > 0)) {
        return;
    }
    current.setProfile(obj);
}

/**
 * 更新神策中的公共属性,
 * @param [config] 更新设置
 * @param [property] 自定义字段，如果指定，则不再从 getSensorsPublicProperties 中获取(从getSensorsPublicProperties中获取，会忽略空值)
 */
function updateSensorsPublicProperties (property?: Partial<SensorsPublicProperties>, config?: UpdateSensorPropertiesParams) {
    const obj = typeof property === 'object' ? property
        : filterObjectEmptyValue(current.getSensorsPublicProperties(config || {}));
    if (!(obj && Object.keys(obj).length > 0)) {
        return;
    }
    current.registerPage(obj);
}

/** 更新用户属性 */
function updateSensorsProfilePropertiesOnlyUserInfo (property?: Partial<SensorsProfileProperties>) {
    updateSensorsProfileProperties(property, { onlyUserInfo: true });
}

/** 更新公共属性 */
function updateSensorsPublicPropertiesOnlyUserInfo (property?: Partial<SensorsPublicProperties>) {
    updateSensorsPublicProperties(property, { onlyUserInfo: true });
}

export const createUpdates = createCallOnceFunction((value: typeof current) => {
    Object.assign(current, value);
    return {
        updateSensorsProfileProperties,
        updateSensorsPublicProperties,
        updateSensorsProfilePropertiesOnlyUserInfo,
        updateSensorsPublicPropertiesOnlyUserInfo,
    };
});
