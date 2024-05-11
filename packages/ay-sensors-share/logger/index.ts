/* eslint-disable */
import { Logger } from '../types';

/** 版本日志 */
export const versionLoggerInfo = (name: string, version: string) => {
    console.info(
        `%c AySensors %c ${name} ${version} %c`,
        'background:#4CAF50 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#7158e2 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent',
    );
};
const loggerInfoLabel = 'AySensors';
export const logger: Logger = {
    debug: console.debug.bind(null, loggerInfoLabel),
    log: console.log.bind(null, loggerInfoLabel),
    info: console.info.bind(null, loggerInfoLabel),
    warn: console.warn.bind(null, loggerInfoLabel),
    error: console.error.bind(null, loggerInfoLabel),
};
