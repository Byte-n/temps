/*
发送端使用 JSON 作为数据传输格式，本系统以 JSON 数据类型为基础再加以额外限制，定义了若干种数据类型，但 不与 JSON 类型完全等价，详见后文属性类型说明。
(table_name, property_name) 二元组唯一确定一个属性，table_name 为数据表的表名，如 users、events，可在自定义 SQL 查询中看到。这意味着同表同名属性类型必须相同，而不同表的同名属性类型可以不同。消息类型与所写入的数据表的关系如下表：
消息类型	目标数据表
track	events
profile_*	users
track_signup	事件信息被写入 events 表，users 表中会记录 first_id 和 second_id
 */
import {
    BaseAYSensorsGlobalConfig,
    BaseInitAySensorsParams,
    Platform, SensorsProfileProperties, SensorsPublicProperties, SensorsTrackProperties, Timestamp,
} from 'ay-sensors-share';

export enum SensorsEventType {
    track_signup = 'track_signup',
    track = 'track',
    profile_set = 'profile_set',
    profile_set_once = 'profile_set_once',
    profile_increment = 'profile_increment',
    profile_delete = 'profile_delete',
    profile_append = 'profile_append',
    profile_unset = 'profile_unset',
}

export interface SensorsJSONData {
    /** 用户关联ID方案集 */
    identities: {
        // cookie
        // "$identity_cookie_id": "1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e",
        /** 用户标识 */
        $identity_login_id: string;
    };
    /** 当前用户标识 */
    distinct_id: string;
    /** 事件属性 | 用户属性。type为 track时为事件属性，为 profile_xx 时为用户属性 */
    properties: Partial<SensorsTrackProperties> | Partial<SensorsProfileProperties>;
    /** 用户标识 */
    login_id?: string;
    // cookie
    // "anonymous_id": "1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e";
    /** 匿名 ID，用于将 login 之后的用户 和 login 之前的用户所触发的事件关联为同一人 */
    original_id?: string;
    /** 匿名 ID，type为track系列才有 */
    anonymous_id?: string;
    /** 事件类型 */
    type: SensorsEventType;
    /** 事件名称, 例如："type": "profile_set" 时没有 */
    event?: string;
    /** 事件触发时间 */
    time: Timestamp;
    /** 会修复事件触发的时间时使用 */
    _flush_time?: Timestamp;
}

export type AYSensorsGlobalConfig = InitAySensorParams & BaseAYSensorsGlobalConfig & {
    /** 当前公共属性 */
    currentPublicProperties: Partial<SensorsPublicProperties>;
    /** login 函数手动指定的用户唯一标识 */
    distinctId: null | string;
    /** 匿名ID */
    anonymityId: string;
}

/** 埋点发送方式类型 */
export enum SendType {
    beacon = 'beacon',
    ajax = 'ajax'
}

/**
 * 初始化 aySensors 的参数
 */
export type InitAySensorParams = BaseInitAySensorsParams & {
    /** sendType 为 beacon，使用img降级发送埋点时，是否指定 img 的 crossOrigin = "anonymous" */
    imgUseCrossOrigin: boolean;
    /** 指定使用那种默认的发送行为，指定 requestInterface 之后，此项无效， */
    sendType: SendType;
    /** 神策接口URL地址 */
    serverURL: string | { name: string, url: string }[];
    /** 自定义网络请求接口，data为要发送的数据 */
    requestInterface: null | (RequestInterface);
}

/** 埋点发送请求接口 */
export type RequestInterface = (params: {
    /** 原始数据 */
    data: SensorsJSONData;
    /** 发送完成、失败后调用此回调 */
    callback?: RequestInterfaceCallback;
    /** 编码后的字符串数据 */
    body: string;
    /** 神策服务地址 */
    serverURL: string,
}) => void

/** 埋点发送请求接口回调参数 */
export type RequestInterfaceCallback = (result: boolean) => void

export interface SensorsUtmParams {
    /** 首次广告系列来源 */
    $utm_source?: string | null;
    /** 首次广告系列媒介 */
    $utm_medium?: string | null;
    /** 首次广告系列字词 */
    $utm_term?: string | null;
    /** 首次广告系列内容 */
    $utm_content?: string | null;
    /** 首次广告系列名称 */
    $utm_campaign?: string | null;
    /** 搜索关键字 | 搜索关键字的id */
    keyword?: string | null;
}

/** 神策 首次 渠道来源 用户属性，仅设置一次，使用 profile_set_once */
export type SensorsFirstChannelSourceUserProfile = {
    /** 首次前向地址 */
    $first_referrer?: string | null;
    /** 首次前向地址域名 */
    $first_referrer_host?: string | null;
    /** 首次流量来源类型 */
    $first_traffic_source_type?: string | null;
    /** 首次搜索引擎关键词 */
    $first_search_keyword?: string | null;
} & Exclude<SensorsUtmParams, 'keyword'>
