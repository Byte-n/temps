import { RequestInterfaceCallback, SensorsEventType, SensorsJSONData } from '../types';
import globalConfig, { getDistinctId } from '../globalConfig';
import request from '../request';
import { SensorsProfileProperties, isNeedUpdateProfile, NotImplementedError, logger } from 'ay-sensors-share';

/** profile 系列的请求 */
function profileRequest (value: Partial<SensorsProfileProperties>, type: SensorsEventType, callback?: RequestInterfaceCallback) {
    const { anonymityId } = globalConfig;
    const distinct_id = getDistinctId();
    // 组装数据
    const data: SensorsJSONData = {
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
export function setProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
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
export function setOnceProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
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
export function appendProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
    throw new NotImplementedError('appendProfile');
}

/** increment profile */
export function incrementProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
    throw new NotImplementedError('incrementProfile');
}

/** delete profile */
export function deleteProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
    throw new NotImplementedError('deleteProfile');
}

/** unset profile */
export function unsetProfile (value: Partial<SensorsProfileProperties>, callback?: RequestInterfaceCallback) {
    throw new NotImplementedError('unsetProfile');
}

