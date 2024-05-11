import { AySensorsError } from '../error';

/** 创建一个只能调用一次的函数 */
export function createCallOnceFunction<T extends (...args: any[]) => any> (fn: T): T {
    let hasBeenCalled = false;
    let result: ReturnType<T>;

    return function (...args: Parameters<T>): ReturnType<T> {
        if (hasBeenCalled) {
            throw new AySensorsError('This function can only be called once.');
        }

        hasBeenCalled = true;
        result = fn(...args);
        return result;
    } as T;
}
