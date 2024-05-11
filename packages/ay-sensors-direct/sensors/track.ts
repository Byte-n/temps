import { RequestInterfaceCallback, SensorsEventType, SensorsJSONData } from '../types';
import globalConfig, { getDistinctId } from '../globalConfig';
import request from '../request';
import { SensorsPublicProperties } from 'ay-sensors-share';

/** 自定义事件埋点 */
export function track (event: string, property: Record<string, any>, callback?: RequestInterfaceCallback) {
    trackRequest(event, property, callback);
}

/** track request */
function trackRequest (event: string, value: Record<string, any>, callback?: RequestInterfaceCallback) {
    const { currentPublicProperties } = globalConfig;
    const distinct_id = getDistinctId();
    const properties: Partial<SensorsPublicProperties> = {
        ...value,
        ...currentPublicProperties,
    };
    // 组装数据
    const data: SensorsJSONData = {
        distinct_id,
        identities: { $identity_login_id: distinct_id },
        properties,
        time: Date.now(),
        type: SensorsEventType.track,
        event,
    };
    // 发送给神策
    request(data, callback);
}
