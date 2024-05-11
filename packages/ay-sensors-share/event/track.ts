import { NotArgsVoidFunction, SensorsTrackProperties, TrackInterface } from '../types';

const current: { track: TrackInterface } = {
    track: () => void 0,
};
/** 埋点 */
export const track: TrackInterface = (eventName: string, property: SensorsTrackProperties, callback?: NotArgsVoidFunction) => {
    current.track(eventName, property, callback);
};
/** 设置当前埋点方法 */
export const setTrack = (value: TrackInterface) => {
    current.track = value;
};
