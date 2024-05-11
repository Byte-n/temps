import { AySensorsError } from 'ay-sensors-share';

interface StoredData<T = any> {
    data: T;
    expiration?: number;
}

interface StoredDataExpiration {
    value: number;
    unit: StoredDataExpirationUnit;
}

const enum StoredDataExpirationUnit {
    days = 'days',
    hours = 'hours',
    minutes = 'minutes',
}

/** 将对象存储到sessionStorage中 */
function setStorage<T> (key: string, value: T, expiration?: StoredDataExpiration): void {
    const data: StoredData<T> = { data: value };
    if (expiration) {
        data.expiration = calculateExpiration(expiration);
    }

    localStorage.setItem(key, JSON.stringify(data));
}

/** 从sessionStorage中获取对象 */
function getStorage<T> (key: string): T | null {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        const data: StoredData<T> = JSON.parse(storedData);
        if (isExpired(data)) {
            localStorage.removeItem(key);
            return null;
        }
        return data.data;
    }
    return null;
}

/** 计算过期时间 */
function calculateExpiration (expiration: StoredDataExpiration): number {
    const currentTime = new Date().getTime();
    if (expiration.unit === StoredDataExpirationUnit.days) {
        return currentTime + (expiration.value * 24 * 60 * 60 * 1000);
    } else if (expiration.unit === StoredDataExpirationUnit.hours) {
        return currentTime + (expiration.value * 60 * 60 * 1000);
    } else if (expiration.unit === StoredDataExpirationUnit.minutes) {
        return currentTime + (expiration.value * 60 * 1000);
    }
    throw new AySensorsError('Invalid expiration unit');
}

/** 检查对象是否已过期 */
function isExpired (data: StoredData): boolean {
    const currentTime = new Date().getTime();
    return !!(data.expiration && data.expiration <= currentTime);
}

const storage = { setStorage, getStorage };
export default storage;

/** anonymity_id的key */
export const STORAGE_KEY_ANONYMITY_ID = 'storage_key_anonymity_id';
/** STORAGE_KEY_ANONYMITY_ID 的过期时间 */
export const STORAGE_EXPIRATION_ANONYMITY_ID: StoredDataExpiration = {
    unit: StoredDataExpirationUnit.days,
    // 一百年过期。永不过期
    value: 365 * 100
};
