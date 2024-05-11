import sensors from './sensors';
import { init } from './init';
import { updates } from './update';
import { events } from './event';
import { versionLoggerInfo } from 'ay-sensors-share';

export const aySensors = { ...sensors, ...updates, ...events, init };
// @ts-ignore
versionLoggerInfo(__PROJECT_NAME__, __PROJECT_VERSION__);
export default aySensors;
