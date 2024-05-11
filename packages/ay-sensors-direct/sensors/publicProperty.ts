import globalConfig from '../globalConfig';
import { SensorsPublicProperties } from 'ay-sensors-share';

/** 注册公共属性 */
export function registerPage (value: Partial<SensorsPublicProperties>) {
    const { currentPublicProperties } = globalConfig;
    Object.assign(currentPublicProperties, value);
}
