import { TrackInterface } from '../types';
import * as events from './events';
import { setTrack } from './track';
import { createCallOnceFunction } from '../utils/functions';
import yyOrderNowEvent from './yyOrderNowEvent';

/** 创建一堆自定义事件的套壳函数,自定义事件套壳函数内部会调用 track  */
export const createEvents = createCallOnceFunction((track: TrackInterface) => {
    setTrack(track);
    // 显示声明类型。不然 在调用 ts 在生成 d.ts 文件是，events 的 参数类型会丢失。
    const result: typeof events & {yyOrderNowEvent: typeof yyOrderNowEvent } = {
        ...events,
        yyOrderNowEvent,
    };
    return result;
});
