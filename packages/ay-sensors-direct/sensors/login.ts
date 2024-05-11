import { RequestInterfaceCallback, SensorsEventType, SensorsJSONData } from '../types';
import globalConfig from '../globalConfig';
import request from '../request';

/** 用户关联，登录 */
export function login (id: string, callback?: RequestInterfaceCallback) {
    loginRequest(id, callback);
}

/** 登录埋点请求 */
function loginRequest (distinct_id: string, callback?: RequestInterfaceCallback) {
    const { anonymityId, currentPublicProperties } = globalConfig;
    globalConfig.distinctId = distinct_id;
    // 组装数据
    const data: SensorsJSONData = {
        distinct_id,
        identities: { $identity_login_id: distinct_id },
        login_id: distinct_id,
        anonymous_id: anonymityId,
        original_id: anonymityId,
        properties: { ...currentPublicProperties },
        time: Date.now(),
        type: SensorsEventType.track_signup,
        event: '$SignUp',
    };
    // 发送给神策。 登录就不需要等待初始化完成。设置公共属性，登录，才完成初始化
    request(data, callback, false);
}
