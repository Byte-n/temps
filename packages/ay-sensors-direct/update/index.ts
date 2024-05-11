import globalConfig from '../globalConfig';
import {
    createUpdates,
    UpdateSensorPropertiesParams,
} from 'ay-sensors-share';
import { setProfile } from '../sensors/profile';
import { registerPage } from '../sensors/publicProperty';

/** 更新操作 */
export const updates = createUpdates({
    /** 获取用户属性 */
    getSensorsProfileProperties (config: UpdateSensorPropertiesParams) {
        return globalConfig.getSensorsProfileProperties(config);
    },
    /** 获取公共属性 */
    getSensorsPublicProperties (config: UpdateSensorPropertiesParams) {
        return globalConfig.getSensorsPublicProperties(config);
    },
    setProfile,
    registerPage,
});
