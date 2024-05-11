import { Defer, SensorsProfileProperties } from '../types';
import _generateSensorsAnonymityUniqueId from './generateSensorsAnonymityUniqueId';

export const generateSensorsAnonymityUniqueId = _generateSensorsAnonymityUniqueId;
/** 判断是否为null 后 undefined */
export const isNullOrUndefined = (obj: any) => obj === null || obj === undefined;
/** 空函数 */
export const NOOPFunction = () => {
};
/** Defer */
export function getDeferPromise<T> () {
    let resolve;
    let reject;
    const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
    }) as Defer<T>;
    promise.resolve = resolve as unknown as (value: T) => void;
    promise.reject = reject as unknown as (error: Error) => void;
    return promise;
}
/** 过来空值，null 和 undefined */
export function filterObjectEmptyValue<T extends Record<string, any>> (obj: T): Partial<T> {
    return Object.keys(obj).reduce((res: Partial<T>, key) => {
        if (obj[key] !== undefined && obj[key] !== null) {
            res[key as keyof T] = obj[key];
        }
        return res;
    }, {} as Partial<T>);
}


/** 判断用户属性是否需要更新 */
export function isNeedUpdateProfile (currentProfile: Partial<SensorsProfileProperties>, newProfile: Partial<SensorsProfileProperties>) {
    if (typeof newProfile !== 'object' || newProfile === null) {
        return null;
    }
    let keys = Object.keys(newProfile) as Array<keyof SensorsProfileProperties>;
    keys = keys.filter(key => {
        const cur = currentProfile[key];
        const value = newProfile[key];
        if (value === undefined || value === null) {
            return false;
        }
        // 到这里，value 肯定有值
        if (cur === undefined || cur === null) {
            // cur 没有，则是从 无 到有
            return true;
        }
        // 直接比较 字符。 这里可能是 number, string, boolean, array<number | string | boolean>
        return cur.toString() !== value.toString();
    });
    // 返回差异
    return keys.length === 0 ? null : keys.reduce((res: Partial<SensorsProfileProperties>, key) => {
        res[key] = newProfile[key];
        return res;
    }, {});
}
