/*
使用方法：如果 'ay-sensors' 无法匹配，则将 declare module 'ay-sensors' 中的模块路径，改为项目中 ay-sensors 的导入路径 即可。
或者如下自定义声明（distribute-dy-mobile项目）：
declare module '@/common/ay-sensors' {
    ...
*/
// Dependencies for this module:
//   ../ay-sensors-share

declare module 'ay-sensors' {
    import { init } from 'ay-sensors/ay-sensors-direct/init';
    export const aySensors: {
        init: typeof init;
        homePageviewEvent(property: import("ay-sensors-share").HomePageviewEventProperties): void;
        homeButtonClickEvent(property: import("ay-sensors-share").HomeButtonClickEventProperties): void;
        splitScreenExposeEvent(property: import("ay-sensors-share").SplitScreenExposeEventProperties): void;
        navigationBarButtonClickEvent(property: import("ay-sensors-share").NavigationBarButtonClickEventProperties): void;
        noticePageviewEvent(property: import("ay-sensors-share").NoticePageviewEventProperties): void;
        noticeButtonClickEvent(property: import("ay-sensors-share").NoticeButtonClickEventProperties): void;
        pageviewEvent(property: import("ay-sensors-share").PageviewEventProperties): void;
        buttonClickEvent(property: import("ay-sensors-share").ButtonClickEventProperties): void;
        toastPageviewEvent(property: import("ay-sensors-share").ToastPageviewEventProperties): void;
        searchEvent(property: import("ay-sensors-share").SearchEventProperties): void;
        searchPageviewEvent(property: import("ay-sensors-share").SearchPageviewEventProperties): void;
        searchResultClickEvent(property: import("ay-sensors-share").SearchResultClickEventProperties): void;
        contentClickEvent(property: import("ay-sensors-share").ContentClickEventProperties): void;
        videoPlayEvent(property: import("ay-sensors-share").VideoPlayEventProperties): void;
        endOfVideoPlayEvent(property: import("ay-sensors-share").EndOfVideoPlayEventProperties): void;
        taskProcessingResultsEvent(property: import("ay-sensors-share").TaskProcessingResultsEventProperties): void;
        statisticsEvent(property: import("ay-sensors-share").StatisticsEventProperties): void;
        backFlowEvent(property: import("ay-sensors-share").BackFlowEventProperties): void;
        yyAdPageviewEvent(property: import("ay-sensors-share").YY_AdPageviewEventProperties): void;
        ftAdPageviewEvent(property: import("ay-sensors-share").FT_AdPageviewEventProperties): void;
        ftAdButtonClickEvent(property: import("ay-sensors-share").FT_AdButtonClickEventProperties): void;
        userLabelEvent(property: import("ay-sensors-share").UserLabelEventProperties): void;
        buildUpConnectionEvent(property: import("ay-sensors-share").BuildUpConnectionEventProperties): void;
        sqPageViewEvent(property: import("ay-sensors-share").SQ_PageViewEventProperties): void;
        vipFlagTerminateNowEvent(property: import("ay-sensors-share").VipFlagTerminateNowEventProperties): void;
        vipFlagTerminateEvent(property: import("ay-sensors-share").VipFlagTerminateEventProperties): void;
        yyOrderNowEvent: typeof import("ay-sensors-share/event/yyOrderNowEvent").default;
        updateSensorsProfileProperties: (property?: Partial<import("ay-sensors-share").SensorsProfileProperties> | undefined, config?: import("ay-sensors-share").UpdateSensorPropertiesParams | undefined) => void;
        updateSensorsPublicProperties: (property?: Partial<import("ay-sensors-share").SensorsPublicProperties> | undefined, config?: import("ay-sensors-share").UpdateSensorPropertiesParams | undefined) => void;
        updateSensorsProfilePropertiesOnlyUserInfo: (property?: Partial<import("ay-sensors-share").SensorsProfileProperties> | undefined) => void;
        updateSensorsPublicPropertiesOnlyUserInfo: (property?: Partial<import("ay-sensors-share").SensorsPublicProperties> | undefined) => void;
        trackSeoOnce(callback?: import("./types").RequestInterfaceCallback | undefined): void;
        login(id: string, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        track(event: string, property: Record<string, any>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        registerPage(value: Partial<import("ay-sensors-share").SensorsPublicProperties>): void;
        setProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        setOnceProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        appendProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        incrementProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        deleteProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
        unsetProfile(value: Partial<import("ay-sensors-share").SensorsProfileProperties>, callback?: import("./types").RequestInterfaceCallback | undefined): void;
    };
    export default aySensors;
}

declare module 'ay-sensors/ay-sensors-direct/init' {
    import { InitAySensorParams } from 'ay-sensors/ay-sensors-direct/types';
    /** 初始化 */
    export function init(config: InitAySensorParams): Promise<boolean> | Promise<void>;
    /** 初始化神策（也许这里并没有神策SDK，只是和ay-sensors-wrapper保持一致） */
    export function initSensors(): Promise<boolean>;
}

declare module 'ay-sensors/ay-sensors-direct/types' {
    import { BaseAYSensorsGlobalConfig, BaseInitAySensorsParams, SensorsProfileProperties, SensorsPublicProperties, SensorsTrackProperties, Timestamp } from 'ay-sensors-share';
    export enum SensorsEventType {
            track_signup = "track_signup",
            track = "track",
            profile_set = "profile_set",
            profile_set_once = "profile_set_once",
            profile_increment = "profile_increment",
            profile_delete = "profile_delete",
            profile_append = "profile_append",
            profile_unset = "profile_unset"
    }
    export interface SensorsJSONData {
            /** 用户关联ID方案集 */
            identities: {
                    /** 用户标识 */
                    $identity_login_id: string;
            };
            /** 当前用户标识 */
            distinct_id: string;
            /** 事件属性 | 用户属性。type为 track时为事件属性，为 profile_xx 时为用户属性 */
            properties: Partial<SensorsTrackProperties> | Partial<SensorsProfileProperties>;
            /** 用户标识 */
            login_id?: string;
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
    };
    /** 埋点发送方式类型 */
    export enum SendType {
            beacon = "beacon",
            ajax = "ajax"
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
            serverURL: string | {
                    name: string;
                    url: string;
            }[];
            /** 自定义网络请求接口，data为要发送的数据 */
            requestInterface: null | (RequestInterface);
    };
    /** 埋点发送请求接口 */
    export type RequestInterface = (params: {
            /** 原始数据 */
            data: SensorsJSONData;
            /** 发送完成、失败后调用此回调 */
            callback?: RequestInterfaceCallback;
            /** 编码后的字符串数据 */
            body: string;
            /** 神策服务地址 */
            serverURL: string;
    }) => void;
    /** 埋点发送请求接口回调参数 */
    export type RequestInterfaceCallback = (result: boolean) => void;
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
    } & Exclude<SensorsUtmParams, 'keyword'>;
}

// Generated by dts-bundle v0.7.3

declare module 'ay-sensors-share' {
    export * from 'ay-sensors-share/types';
    export * from 'ay-sensors-share/utils';
    export * from 'ay-sensors-share/event';
    export * from 'ay-sensors-share/error';
    export * from 'ay-sensors-share/update';
    export * from 'ay-sensors-share/logger';
}

declare module 'ay-sensors-share/types' {
    import { SensorsPublicProperties, SensorsTrackProperties } from 'ay-sensors-share/types/property';
    import { NotArgsVoidFunction } from 'ay-sensors-share/types/base';
    import { SensorsProfileProperties } from 'ay-sensors-share/types/profile';
    export * from 'ay-sensors-share/types/base';
    export * from 'ay-sensors-share/types/event';
    export * from 'ay-sensors-share/types/profile';
    export * from 'ay-sensors-share/types/property';
    export * from 'ay-sensors-share/types/ay';
    export type UpdateSensorPropertiesParams = {
        /** 此次 属性 更新，仅从用户属性中获取，其他（快递..开关等属性）则不获取 */
        onlyUserInfo?: boolean;
        /** 是否是初始化（登录|重新授权） */
        init?: boolean;
    } & Record<string, any>;
    export type TrackInterface = (eventName: string, property: SensorsTrackProperties, callback?: NotArgsVoidFunction) => void;
    export type GetSensorsPublicPropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsPublicProperties>;
    export type GetSensorsProfilePropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsProfileProperties>;
}

declare module 'ay-sensors-share/utils' {
    import { Defer, SensorsProfileProperties } from 'ay-sensors-share/types';
    export const generateSensorsAnonymityUniqueId: () => string;
    /** 判断是否为null 后 undefined */
    export const isNullOrUndefined: (obj: any) => boolean;
    /** 空函数 */
    export const NOOPFunction: () => void;
    /** Defer */
    export function getDeferPromise<T>(): Defer<T>;
    /** 过来空值，null 和 undefined */
    export function filterObjectEmptyValue<T extends Record<string, any>>(obj: T): Partial<T>;
    /** 判断用户属性是否需要更新 */
    export function isNeedUpdateProfile(currentProfile: Partial<SensorsProfileProperties>, newProfile: Partial<SensorsProfileProperties>): Partial<SensorsProfileProperties> | null;
}

declare module 'ay-sensors-share/event' {
    import { TrackInterface } from 'ay-sensors-share/types';
    import * as events from 'ay-sensors-share/event/events';
    import yyOrderNowEvent from 'ay-sensors-share/event/yyOrderNowEvent';
    /** 创建一堆自定义事件的套壳函数,自定义事件套壳函数内部会调用 track  */
    export const createEvents: (track: TrackInterface) => typeof events & {
        yyOrderNowEvent: typeof yyOrderNowEvent;
    };
}

declare module 'ay-sensors-share/error' {
    export class AySensorsError extends Error {
        constructor(message: string);
    }
    /** 函数未初始化错误 */
    export class FunctionNotInitError extends AySensorsError {
        constructor(name: string);
    }
    export class NotImplementedError extends AySensorsError {
        constructor(name: string);
    }
}

declare module 'ay-sensors-share/update' {
    import { GetSensorsProfilePropertiesInterface, GetSensorsPublicPropertiesInterface, SensorsProfileProperties, SensorsPublicProperties, UpdateSensorPropertiesParams } from 'ay-sensors-share/types';
    const current: {
            getSensorsProfileProperties: GetSensorsProfilePropertiesInterface;
            getSensorsPublicProperties: GetSensorsPublicPropertiesInterface;
            setProfile: (value: Partial<SensorsProfileProperties>) => void;
            registerPage: (value: Partial<SensorsPublicProperties>) => void;
    };
    /**
        * 更新神策中的用户属性
        * @param [config]
        * @param [property] 自定义字段，如果指定，则不再从 getSensorsProfileProperties 中获取(getSensorsProfileProperties，会忽略空值)
        *  */
    function updateSensorsProfileProperties(property?: Partial<SensorsProfileProperties>, config?: UpdateSensorPropertiesParams): void;
    /**
        * 更新神策中的公共属性,
        * @param [config] 更新设置
        * @param [property] 自定义字段，如果指定，则不再从 getSensorsPublicProperties 中获取(从getSensorsPublicProperties中获取，会忽略空值)
        */
    function updateSensorsPublicProperties(property?: Partial<SensorsPublicProperties>, config?: UpdateSensorPropertiesParams): void;
    /** 更新用户属性 */
    function updateSensorsProfilePropertiesOnlyUserInfo(property?: Partial<SensorsProfileProperties>): void;
    /** 更新公共属性 */
    function updateSensorsPublicPropertiesOnlyUserInfo(property?: Partial<SensorsPublicProperties>): void;
    export const createUpdates: (value: typeof current) => {
            updateSensorsProfileProperties: typeof updateSensorsProfileProperties;
            updateSensorsPublicProperties: typeof updateSensorsPublicProperties;
            updateSensorsProfilePropertiesOnlyUserInfo: typeof updateSensorsProfilePropertiesOnlyUserInfo;
            updateSensorsPublicPropertiesOnlyUserInfo: typeof updateSensorsPublicPropertiesOnlyUserInfo;
    };
    export {};
}

declare module 'ay-sensors-share/logger' {
    import { Logger } from 'ay-sensors-share/types';
    /** 版本日志 */
    export const versionLoggerInfo: (name: string, version: string) => void;
    export const logger: Logger;
}

declare module 'ay-sensors-share/types/property' {
    import { AllShop, AppName, PlatformId, ShopNum, UseEnd, VipFlag } from 'ay-sensors-share/types/base';
    /**
        * 神策公共属性
        *  非可选属性，就是必须有的，填什么值，根据类型提示 和 属性 注解 确定
        *  可选属性：代表，某些属性，只有某些平台才有，所以埋完 非可选属性后，要过目一遍所有的非可选属性。
        */
    export type SensorsPublicProperties = {
            /** 入口来源 未说(先空着) */
            entrance_source?: string;
            /** 商家主账号 非代发采集 采集商家的sellernick */
            sellernick?: string;
            /** 新商家主账号 代发采集 采集商家在1688的账号即 */
            sellernicknew?: string;
            /** 平台ID 都采集 采集（TAO/PDD/1688/DOU/KUAI/WX/XHS） */
            platform_id: PlatformId;
            /** APP名称 都采集  */
            app_name: AppName;
            /**
                * 会员版本 都采集 中文版本名称
                *  */
            vipflag: VipFlag;
            /** 使用端 都采集 （WW指旺旺端）   */
            use_end: UseEnd;
            /** 应用版本 都采集 我们应用的版本号？ */
            app_version: string;
            /** 平台版本 都采集 我们应用运行在那个平台，就是那个平台的版本号 */
            platform_version: string;
            /** 付费次数 都采集 用户付费总次数 */
            payment_frequency: number;
            /** 会员到期时间 都采集 最后版本的到期时间 */
            member_expiration_time: string;
            /** 付费会员到期时间 都采集 最后版本的到期时间(vipFlag非0，才有) */
            pay_member_expiration_time?: string;
            /** 渠道来源 未说 具体取值见给到的表格(先空着) */
            utm_source_from_trade?: string;
            /** 发货地址 临时需要时采集 */
            shipping_address?: Array<string>;
            /** 是否开启自动上下架 商品采集 用户当下的状态是否开启了自动上下架 */
            automatic_loading_and_unloading?: boolean;
            /** 出售宝贝数量 商品采集 仅采集出售中的宝贝数量 */
            commodity_amount?: number;
            /** 仓库宝贝数量 商品采集 仅采集仓库中的宝贝数量 */
            commodity_in_storehouse?: number;
            /** 所有店铺 代发采集 具体采集内容，看类型注解 */
            all_shop?: AllShop;
            /** 店铺数量 代发采集 具体采集内容，看类型注解 */
            shop_num?: ShopNum;
            /** 店铺名称 所有代发下游平台都采集 采集用户对应的店铺名称，比如铺货到抖音，抖音的店铺叫“大风吹”，那这里采集的就是“大风吹”。 */
            shop_name?: string;
            /** 店铺ID 所有代发下游平台都采集 采集用户对应的店铺id */
            shop_id?: string;
    };
    /** 神策预置属性  */
    export type SensorsBaseProperties = Partial<{
            $ip: string;
            $manufacturer: string;
            $model: string;
            $os: string;
            $os_version: string;
            $browser: string;
            $browser_version: string;
            $track_signup_original_id: string;
            $is_login_id: boolean;
            $city: string;
            $province: string;
            $country: string;
    }>;
    /** track 函数的 Properties  */
    export type SensorsTrackProperties = SensorsBaseProperties & Partial<SensorsPublicProperties> & Record<string, any>;
}

declare module 'ay-sensors-share/types/base' {
    export type Defer<D> = Promise<D | undefined> & {
            resolve: (data: D) => void;
            reject: (error: Error) => void;
    };
    /**
        * 淘宝/拼多多/快手/抖音/微店/小商店/旺铺：下游平台对应的1688绑定了几个店铺，
        * 相当于是继承了1688代发助手王的店铺类型，这个后期就算比如看某个爱用代发店铺，
        * 也能知道它还是否有其他店铺，或者还开了什么平台的店铺，进行交叉营销或引流
        * 就是往数组里面赛这几个值
        */
    export type AllShop = Array<'淘宝' | '拼多多' | '快手' | '抖音' | '微店' | '小商店' | '旺铺'>;
    /**
        * 淘宝/拼多多/快手/抖音/微店/小商店/旺铺：下游平台对应的1688绑定了几个店铺，
        * 相当于是继承了1688代发助手王的店铺类型，这个后期就算比如看某个爱用代发店铺，
        * 也能知道它还是否有其他店铺，或者还开了什么平台的店铺，进行交叉营销或引流
        */
    export type ShopNum = number;
    /**
        * 最新会员版本 都采集 中文版本名称 登录时设置
        * 爱用商品：初级版、高级版
        * 代发助手王（1688）：免费版/高级版/企业版
        * 爱用代发（Pdd）：基础版/专业版/豪华版
        * 爱用铺货(抖音)：免费版/基础版
        * 爱用铺货(小红书)：免费版「小红书只有免费版，可以先写死免费版」
        * 代发助手(小商店)：免费版/基础版
        * 代发助手快手：免费版/基础版
        * 代发小助手：免费版/高级版/企业版
        * 爱用铺货：免费版/高级版/企业版（取代发助手王的版本）
        * */
    export type VipFlag = string;
    /**
        * 应用平台
        */
    export enum Platform {
            PC = "PC",
            MB = "MB"
    }
    /** 时间戳 */
    export type Timestamp = number;
    export type Logger = {
            debug: LoggerFunction;
            log: LoggerFunction;
            info: LoggerFunction;
            warn: LoggerFunction;
            error: LoggerFunction;
    };
    export type LoggerFunction = (...args: any[]) => void;
    export type NotRequired<T> = undefined | T;
    export type NotArgsVoidFunction = () => void;
    export type PlatformId = 'TAO' | 'PDD' | '1688' | 'DOU' | 'KUAI' | 'WX' | 'XHS';
    export type UseEnd = 'MB' | 'PC' | 'WW';
    export type AppName = '代发助手王' | '爱用代发' | '爱用供销' | '爱用铺货' | '代发助手' | '代发小助手' | '爱用管店';
}

declare module 'ay-sensors-share/types/profile' {
    import { AllShop, PlatformId, ShopNum, VipFlag } from 'ay-sensors-share/types/base';
    /**
        * 神策用户属性， 包括基础的，和 代发开关系列
        * 基础的里面，也有一些可选的（代发的）
        */
    export type SensorsProfileProperties = SensorsProfileBaseProperties & Partial<SensorsProfileDistributeSwitchProperties> & Record<string, any>;
    /**
        * 神策用户基本属性
        * 没有标明：登录时设置或其它设置时机，皆需在用户属性发生更新时，同步到神策用户属性中
        */
    export interface SensorsProfileBaseProperties {
            /**
                * 账号ID user_id 登录时设置
                *  */
            account_id: string;
            /** 商家主账号 登录时设置 */
            sellernick: string;
            /**
                * 新商家主账号 登录时设置
                * 代发：代发因为需要一个标识来判断各端店铺是否为同一个商家，这里统一采集的是商家在1688的账号即
                *  */
            sellernicknew: string;
            /**
                * 商家昵称 登录时设置, 仅淘宝采集
                * 淘宝               拼多多  抖音  微信小商店    快手
                * sellernick:xxx    无     无    无           无
                *  */
            loginnick?: string;
            /** 是否是主账号 登录时设置 */
            is_main: boolean;
            /**
                * 最新会员版本 中文版本名称 更新时设置
                *  */
            newest_vipflag: VipFlag;
            /** 最新店铺等级 **心/**钻石 非代发采集 */
            newest_member_level?: number;
            /** 会员类别 商品需要 */
            member_category?: '天猫商家' | '淘宝商家';
            /** 最新tag 用户标签 没有，则不采集  */
            newest_tag?: Array<string>;
            /** 会员到期时间 最后版本的到期时间 */
            member_expiration_time: string;
            /** 平台ID  */
            platform_id: PlatformId;
            /** 所有店铺 代发采集 具体采集内容，看类型注解 */
            all_shop?: AllShop;
            /** 店铺数量 代发采集 具体采集内容，看类型注解 */
            shop_num?: ShopNum;
            /** 注册时间  */
            date_register: string;
            /** 付费次数 用户付费总次数 */
            payment_frequency: number;
            /** 付费会员到期时间 最后版本的到期时间 */
            pay_member_expiration_time: string;
            /** 渠道来源 暂空  */
            utm_source_from_trade?: string;
            /** 发货地址 临时需要采集  */
            shipping_address: Array<string>;
            /** 是否开启自动上下架 有则采集 用户当下的状态是否开启了自动上下架 */
            automatic_loading_and_unloading?: boolean;
            /** 发货地址带手机号 临时采集 例如：['上海上海市，手机号：16611118888'] */
            shipping_address_mob: Array<string>;
            /** 商品主营类目_一级
                * 比如分析的规则是，用户登录商品时，判断一下用户当前是否有主营类目属性，
                * 如果没有，则取用户的前40件商品，取其中归属一级类目最多的视为 主营一级类目
                * 分析规则： 按销量排序，取用户销量最高的商品作为主营类目 如全店没有有销量商品，则取前200件商品中，重复最多的cid作为主营类目
                * 主营类目分析触发条件（暂定）：用户登录服务时（PC/MB/WW)，判断其是否存在主营类目信息
                * 如无则触发主营类目分析 主营类目更新周期（暂定）：每15天更新一次
                *  */
            class_a_commodity_category: string;
            /** 商品主营类目_二级 文档里面和一级写的描述一致  */
            class_b_commodity_category: string;
    }
    /**
        * 神策用户属性，所有代发平台 开关 相关属性，有则采集
        * 没有标明：登录时设置或其它设置时机，皆需在用户属性发生更新时，同步到神策用户属性中
        */
    export type SensorsProfileDistributeSwitchProperties = Partial<{
            /** 库存同步 采集开启店铺数量，如都没有开启，则采集0 */
            inventory_sync_open_num: number;
            /** 免密支付  */
            is_payment_protocol_open: boolean;
            /** 白底图 采集开启店铺数量，如都没有开启，则采集0 */
            white_background_open_num: number;
            /** 标题过滤  */
            is_title_filter_open: boolean;
            /** 库存预警_代销货品库存预警 采集开启店铺数量，如都没有开启，则采集0 */
            inventory_warning_open_num: number;
            /** 库存预警_自动处理库存为0的商品 设置的选项名称，如没开启，则采集未开启 */
            is_auto_deal_no_inventory_open: string;
            /** 自动备注_商家备注自动同步 采集开启店铺数量，如都没有开启，则采集0 */
            auto_note_seller_open_num: number;
            /** 自动备注_买家备注自动同步 采集开启店铺数量，如都没有开启，则采集0 */
            auto_note_buyers_open_num: number;
            /** 自动备注_以下软件备注自动同步 采集开启店铺数量，如都没有开启，则采集0 */
            auto_note_remark_text_open_num: number;
            /** 自动备注_1688单号自动备注到店铺 采集开启店铺数量，如都没有开启，则采集0 */
            auto_note_order_number_open_num: number;
            /** 自动采购_有备注不自动确认采购单 采集开启店铺数量，如都没有开启，则采集0 */
            auto_submit_remark_open_num: number;
            /** 自动采购_选中旗帜不自动确认采购单 采集开启店铺数量，如都没有开启，则采集0 */
            auto_submit_flag_open_num: number;
            /** 自动采购_自动确认采购单 采集开启店铺数量，如都没有开启，则采集0 */
            auto_submit_all_open_num: number;
            /** 状态同步 采集开启店铺数量，如都没有开启，则采集0 */
            status_sync_open_num: number;
            /** 自动售后_退款中_未付款  */
            is_auto_refunding_cancel_open: boolean;
            /** 自动售后_退款中_未发货  */
            is_auto_refunding_reimburse_open: boolean;
            /** 自动售后_退款完成_未付款  */
            is_auto_refunded_cancel_open: boolean;
            /** 自动售后_退款完成_未发货  */
            is_auto_refunded_reimburse_open: boolean;
            /**
                * 发货设置
                * 因为存在一个商家多个店铺，每个店铺设置的选项不一样的情况，采集平台和发货选项，比如：
                * 淘宝：自动发货
                * 抖音：揽收时发货
                * 抖音：不自动发货
                * 拼多多：揽收时发货
                * 例如采集值：['淘宝：自动发货', '抖音：揽收时发货']
                *  */
            null_key: Array<string>;
            /**
                * 库存同步的选项列表
                * 下面的 status_sync_option_Array，auto_submit_all_option_Array 同此一样
                * 店铺类型：选项
                * 例如：['淘宝：xxxxx']
                *  */
            inventory_sync_option_Array: Array<string>;
            /**
                * 状态同步的选项列表
                *  */
            status_sync_option_Array: Array<string>;
            /**
                * 自动采购_自动确认采购单的选项列表
                *  */
            auto_submit_all_option_Array: Array<string>;
    }>;
}

declare module 'ay-sensors-share/types/event' {
    import { AllShop, VipFlag } from 'ay-sensors-share/types/base';
    /**
        * 注册事件
        */
    export type StartRegisterEventProperties = Record<string, any> & {
            /**  开始日期 指会员开始日期  */
            date_start: string;
            /**  订购周期 0个月/1个月/3个月/6个月/12个月等……  */
            order_cycle: string;
    };
    /**
        * 登录事件
        */
    export type LoginResultEventProperties = Record<string, any> & {
            /**  登录id 针对web端  */
            login_id: string;
            /**  是否成功  */
            is_success: boolean;
            /**  失败原因 账号已存在/网络原因(采集实际失败的原因）  */
            fail_reason?: string;
    };
    /** 首页浏览事件  */
    export type HomePageviewEventProperties = Record<string, any> & Partial<{
            /**  AB测试版本  */
            replace_version: string;
            /**  所在页面 首页/添加店铺首页/添加店铺页/功能页  */
            page_title: string;
            /**  弹窗名称  */
            pop_up_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
    }>;
    /** 首页点击事件  */
    export type HomeButtonClickEventProperties = Record<string, any> & Partial<{
            /**  所在页面 首页/添加店铺首页/添加店铺页/功能页（代发无店铺时的首页跟有店铺时的首页不一样，无店铺，则首页为引导添加店铺，否则为功能展示） */
            page_title: string;
            /**  AB测试版本  */
            replace_version: string;
            /**  一级模块名称  */
            first_module_name: string;
            /**  二级模块名称  */
            second_module_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  按钮名称  */
            button_name: string;
            /**  关键词  */
            key_word: Array<string>;
    }>;
    /** 分屏曝光  */
    export type SplitScreenExposeEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  位置 指分屏位置：第二屏，第三屏等 */
            position: string;
    }>;
    /** 导航栏点击事件  */
    export type NavigationBarButtonClickEventProperties = Record<string, any> & Partial<{
            /**  AB测试版本  */
            replace_version: string;
            /**  位置 比如商品PC端的导航栏，区分是顶部/全部功能（顶部导航栏和顶部全部功能里的当行按钮存在重复的按钮） */
            position: string;
            /**  按钮名称  */
            button_name: string;
    }>;
    /** 公告浏览事件  */
    export type NoticePageviewEventProperties = Record<string, any> & Partial<{
            /**  公告名称  */
            notice_name: string;
    }>;
    /** 公告点击事件  */
    export type NoticeButtonClickEventProperties = Record<string, any> & Partial<{
            /**  公告名称  */
            notice_name: string;
            /**  按钮名称 如查看详情/确定等 */
            button_name: string;
    }>;
    /** 页面浏览  */
    export type PageviewEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  页面入口来源 如同一页面，有多个触发页面展现的入口，则采集页面展现前一步的点击按钮的名称 */
            page_entrance_source: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  二级tab名称  */
            second_tab_name: string;
            /**  三级tab名称  */
            third_tab_name: string;
            /**  弹窗名称  */
            pop_up_name: string;
            /**  弹窗tab名称 弹窗上的tab名称 */
            pop_up_tab_name: string;
            /**  二级弹窗tab名称  */
            second_pop_up_tab_name: string;
            /**  AB测试版本  */
            replace_version: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  个数 如代发助手，店铺中已关联货品的商品显示规格未匹配的数量/商品里面的tab名称后面括号里显示的数量 */
            label_num: number;
    }>;
    /** 按钮点击  */
    export type ButtonClickEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  弹窗名称  */
            pop_up_name: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  二级tab名称  */
            second_tab_name: string;
            /**  三级tab名称  */
            third_tab_name: string;
            /**  一级模块名称  */
            first_module_name: string;
            /**  二级模块名称  */
            second_module_name: string;
            /**  弹窗tab名称 弹窗上的tab名称 */
            pop_up_tab_name: string;
            /**  二级弹窗tab名称  */
            second_pop_up_tab_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  AB测试版本  */
            replace_version: string;
            /**  按钮名称  */
            button_name: string;
            /**  关键词  */
            key_word: Array<string>;
    }>;
    /** toast浏览  */
    export type ToastPageviewEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  商品id 爱用商品需要收集出现报错的商品ID和cid */
            commodity_id: string;
            /**  商品cid 爱用商品需要收集出现报错的商品ID和cid */
            commodity_cid: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  弹窗名称  */
            pop_up_name: string;
            /**  弹窗tab名称 弹窗上的tab名称 */
            pop_up_tab_name: string;
            /**  一级模块名称  */
            first_module_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  按钮名称  */
            button_name: string;
            /**  关键词  */
            key_word: Array<string>;
            /**  AB测试版本  */
            replace_version: string;
            /**  是否成功 TRUE/FALSE */
            is_success: boolean;
            /**  失败原因  */
            fail_reason: string;
    }>;
    /** 搜索事件  */
    export type SearchEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  页面入口来源 如同一页面，有多个触发页面展现的入口，则采集页面展现前一步的点击按钮的名称 */
            page_entrance_source: string;
            /**  AB测试版本  */
            replace_version: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  按钮名称  */
            button_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  上架开始时间 11-02-21 */
            date_start_loading: string;
            /**  上架结束时间 11-02-21 */
            date_end_loading: string;
            /**  下架开始时间 11-02-21 */
            date_start_unloading: string;
            /**  下架结束时间 11-02-21 */
            date_end_unloading: string;
            /**  创建开始时间 11-02-21 */
            date_start_creat: string;
            /**  创建结束时间 11-02-21 */
            date_end_creat: string;
            /**
                * 关键词 key和value一
                * 一对应的格式，比如：
                *     状态：全部状态
                *     来源：全部来源
                * */
            key_word: Array<string>;
    }>;
    /** 搜索结果浏览  */
    export type SearchPageviewEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  是否有数据 是/否 */
            is_data: boolean;
    }>;
    /** 搜索结果点击  */
    export type SearchResultClickEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  一级模块名称  */
            first_module_name: string;
            /**
                * 键词 key和value
                * 一对应的格式，比如：
                *     状态：全部状态
                *     来源：全部来源
                *  */
            key_word: Array<string>;
            /**  按钮名称  */
            button_name: string;
    }>;
    /** 内容点击事件  */
    export type ContentClickEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  二级tab名称  */
            second_tab_name: string;
            /**  三级tab名称 节日水印下的双十一/双十二/99划算节等 */
            third_tab_name: string;
            /**  一级模块名称  */
            first_module_name: string;
            /**  内容类型 促销活动模板/关联销售模板 */
            content_type: string;
            /**  内容ID 代发助手采集商品所在位置序号，从左往右，从上往下。 */
            content_id: string;
            /**  内容名称  */
            content_name: string;
            /**  商品主营类目_一级 比如分析的规则是，用户登录商品时，判断一下用户当前是否有主营类目属性，如果没有，则取用户的前40件商品，取其中归属一级类目最多的视为 主营一级类目， */
            class_a_commodity_category: string;
            /**  商品主营类目_二级 比如分析的规则是，用户登录商品时，判断一下用户当前是否有主营类目属性，如果没有，则取用户的前40件商品，取其中归属一级类目最多的视为 主营一级类目 */
            class_b_commodity_category: string;
            /**  商品价格 代发助手点击商品使用 */
            commodity_price: number;
            /**  商品销量 代发助手点击商品使用 */
            commodity_sales_volume: number;
            /**  按钮名称 如立即使用/下一步 */
            button_name: string;
            /**  铺货内容名称 属性继承，继承的是上次铺货的商品对应的属性。 */
            distribution_content_name: string;
            /**  铺货商品主营类目_一级  */
            distribution_class_a_commodity_category: string;
            /**  铺货商品主营类目_二级  */
            distribution_class_b_commodity_category: string;
            /**  铺货商品价格  */
            distribution_commodity_price: number;
            /**  铺货商品销量  */
            distribution_commodity_sales_volume: number;
            /**
                * 关键词 key和value
                * 一对应的格式，比如：
                *     状态：全部状态
                *     来源：全部来源
                *一 */
            key_word: Array<string>;
    }>;
    /** 开始播放事件  */
    export type VideoPlayEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  内容类型 促销活动模板/关联销售模板/课程 */
            content_type: string;
            /**  内容ID  */
            content_id: number;
            /**  内容名称  */
            content_name: string;
            /**  按钮名称  */
            button_name: string;
    }>;
    /** 结束播放事件  */
    export type EndOfVideoPlayEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  所在页面  */
            page_title: string;
            /**  一级tab名称  */
            first_tab_name: string;
            /**  内容类型 促销活动模板/关联销售模板/课程 */
            content_type: string;
            /**  内容ID  */
            content_id: number;
            /**  内容名称  */
            content_name: string;
            /**  是否播放完 是/否 */
            is_finish_broadcasting: boolean;
            /**  时长 暂停不算结束，单位是秒。进入播放，到离开播放的时长。（是否能采集到关闭播放，待老江确认） */
            duration: number;
            /**  按钮名称  */
            button_name: string;
    }>;
    /** 任务事件  */
    export type TaskProcessingResultsEventProperties = Record<string, any> & Partial<{
            /**  任务名称 铺货/采购/向供应商付款/确认采购单/待采购订单 */
            task_name: string;
            /**  订单号 商家下游平台的实际订单号 */
            shop_order_id: string;
            /**  采购订单号 商家的采购订单号 */
            purchases_order_id: string;
            /**  货源类型 1688/淘特 */
            class_type: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺/视频号/有赞（目前仅代发需要）这里指的是，比如铺货到抖音，铺向的是抖音店铺，这里采集的就是抖音 */
            shop_type: string;
            /**  店铺名称 采集用户对应的店铺名称，比如铺货到抖音，抖音的店铺叫“大风吹”，那这里采集的就是“大风吹”。 */
            shop_name: string;
            /**  店铺ID 采集用户对应的店铺id */
            shop_id: string;
            /**  时长 铺货时长，秒为单位，从开始铺货到铺货结束的时长，仅成功的时候是有时长的 */
            duration: number;
            /**  货源一级类目 代发专用类目，对应每次任务。比如铺货的货源是什么类目，采购的货源是什么类目 */
            class_a_commodity: string;
            /**  货源二级类目 代发专用类目，对应每次任务。比如铺货的货源是什么类目，采购的货源是什么类目。传2级时，则一级必传 */
            class_b_commodity: string;
            /**  执行方式 代发铺货、采购有批量、单个等 */
            operation_type: string;
            /**  铺货方式 精选货源/淘特货源/链接上货/1688详情/我的供应商/以图搜款 */
            distribution_type: string;
            /**  货源商品Id 采集标记商品的唯一id */
            commodity_id: string;
            /**  商品金额 元为单位 */
            commodity_amount: number;
            /**  是否成功 TRUE/FALSE */
            is_success: boolean;
            /**  失败原因 采集实际的采购/铺货失败原因 */
            fail_reason: string;
            /**  供应商名称 采集供应商实际名称 */
            supplier: string;
            /**  发货时效 24小时/48小时/72小时等 */
            delivery_period: string;
            /**  是否包邮 TRUE/FALSE */
            is_to_package: boolean;
            /**  是否关联货源 TRUE/FALSE */
            is_associated_of_goods: boolean;
    }>;
    /** 统计事件  */
    export type StatisticsEventProperties = Record<string, any> & Partial<{
            /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
            module_name: string;
            /**  统计维度 付款/铺货商品/订单/在售商品/ */
            statistical_dimension: string;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺（目前仅代发需要） */
            shop_type: string;
            /**  数量 如1000等 */
            statistical_num: number;
    }>;
    /** 回流事件  */
    export type BackFlowEventProperties = Record<string, any> & Partial<{
            /**  结束日期 2021/12/4，该处采集用户最后一次登录日期 */
            date_end: string;
            /**  最后一次登陆版本 初级版/高级版/专业版 */
            last_item_name: VipFlag;
            /**  店铺类型 淘宝/拼多多/快手/抖音/微店/小商店/旺铺 */
            shop_type: AllShop;
            /**  回流后首次登陆版本 初级版/高级版/专业版 */
            newest_item_name: VipFlag;
    }>;
    /** 运营_广告页面浏览  */
    export type YY_AdPageviewEventProperties = Record<string, any> & Partial<{
            /**  一级分类 短信，功能广告，营销广告 */
            primary_class: string;
            /**  是否首次触发 TRUE/FALSE */
            is_first_time_triggered: boolean;
            /**  二级分类  */
            secondary_class: string;
            /**  cid  */
            cid: number;
            /**  pid  */
            pid: number;
            /**  来源位置ID  */
            from_pid: number;
            /**  广告创意名称  */
            cname: string;
            /**  来源位置名称  */
            from_pname: string;
            /**  广告位置  */
            pname: string;
    }>;
    /** 运营_立即订购  */
    export type YY_OrderNowEventProperties = Record<string, any> & Partial<{
            /**  一级分类  */
            primary_class: string;
            /**  是否首次触发 TRUE/FALSE */
            is_first_time_triggered: boolean;
            /**  二级分类  */
            secondary_class: string;
            /**  cid  */
            cid: number;
            /**  pid  */
            pid: number;
            /**  来源位置ID  */
            from_pid: number;
            /**  广告创意名称  */
            cname: string;
            /**  广告位置  */
            pname: string;
            /**  来源位置名称  */
            from_pname: string;
            /**  订购周期 0个月/1个月/3个月/6个月/12个月等……  */
            order_cycle: string;
            /**  应付金额  */
            amount_payable: number;
    }>;
    /** 广告引导_广告页面浏览  */
    export type FT_AdPageviewEventProperties = Record<string, any> & Partial<{
            /**  所在页面 目前是新代发需要用 */
            page_title: string;
            /**  一级分类 短信，功能广告，营销广告，官方涨粉 */
            primary_class: string;
            /**  是否首次触发 TRUE/FALSE */
            is_first_time_triggered: boolean;
            /**  二级分类  */
            secondary_class: string;
            /**  cid  */
            cid: number;
            /**  pid  */
            pid: number;
            /**  来源位置ID  */
            from_pid: number;
            /**  广告创意名称  */
            cname: string;
            /**  来源位置名称  */
            from_pname: string;
            /**  广告位置 短信类/官方涨粉，放入口 */
            pname: string;
    }>;
    /** 广告引导_广告点击  */
    export type FT_AdButtonClickEventProperties = Record<string, any> & Partial<{
            /**  所在页面 目前是新代发需要用 */
            page_title: string;
            /**  按钮名称 目前是新代发需要用 */
            button_name: string;
            /**  一级分类  */
            primary_class: string;
            /**  是否首次触发 TRUE/FALSE */
            is_first_time_triggered: boolean;
            /**  二级分类  */
            secondary_class: string;
            /**  cid  */
            cid: number;
            /**  pid  */
            pid: number;
            /**  来源位置ID  */
            from_pid: number;
            /**  广告创意名称 短信类，放短信条数 */
            cname: string;
            /**  广告位置 短信类，放入口 */
            pname: string;
            /**  来源位置名称  */
            from_pname: string;
    }>;
    /** 用户标签事件  */
    export type UserLabelEventProperties = Record<string, any> & Partial<{
            /**  二级分类 S/A/B/C */
            secondary_class: string;
            /**  支付次数 S/A/B/C */
            payment_num: string;
            /**  订购周期 S/A/B/C */
            order_cycle: string;
            /**  到期前15天活跃天数 S/A/B/C */
            activity_days_15: string;
            /**  强提示广告浏览天数 S/A/B/C */
            strong_point_out: string;
            /**  是否有子账号 S/A/B/C */
            is_sub_nick: string;
            /**  是否旺旺端活跃 S/A/B/C */
            is_activity_ww: string;
            /**  是否使用功能_修改标题 S/A/B/C */
            is_use_change_title: string;
            /**  是否使用功能_标题优化 S/A/B/C */
            is_use_titile_optimize: string;
            /**  是否使用功能_生成手机详情 S/A/B/C */
            is_use_generate_phone_detail: string;
            /**  是否使用功能_修改销售属性 S/A/B/C */
            is_use_change_seller_properties: string;
            /**  是否使用功能_店铺体验 S/A/B/C */
            is_use_shop_examine: string;
            /**  是否使用功能_自动上下架 S/A/B/C */
            is_use_auto_just_upload: string;
            /**  是否使用功能_库存预警 S/A/B/C */
            is_use_inventory_warning: string;
            /**  是否使用功能_促销水印 S/A/B/C */
            is_use_promotion_watermark: string;
            /**  是否使用功能_编辑图片 S/A/B/C */
            is_use_edit_image: string;
            /**  是否使用功能_满减优惠 S/A/B/C */
            is_use_full_reduction: string;
            /**  是否使用功能_促销打折 S/A/B/C */
            is_use_promotional: string;
            /**  是否使用功能_复制宝贝 S/A/B/C */
            is_use_copy_baby: string;
            /**  是否使用功能_违规词检测 S/A/B/C */
            is_use_illegal_word: string;
            /**  是否使用功能_查看宝贝 S/A/B/C */
            is_use_watch_baby: string;
            /**  是否使用功能_主图视频 S/A/B/C */
            is_use_main_image_video: string;
            /**  是否使用功能_复制链接 S/A/B/C */
            is_use_copy_link: string;
            /**  是否使用功能_批量修改 S/A/B/C */
            is_use_batch_change: string;
            /**  是否开启上下架 S/A/B/C */
            is_open_auto_just_upload: string;
    }>;
    /** 联系商家事件  */
    export type BuildUpConnectionEventProperties = Record<string, any> & Partial<{
            /**  建联结果 成功建联/判未建联/未建联 */
            build_up_result: string;
            /**  接待类型 客服/销售/。。。。 */
            reception_type: string;
            /**  爱用联系人姓名 销售/客服的名字 */
            customer_service_name: string;
    }>;
    /** 授权页面浏览  */
    export type SQ_PageViewEventProperties = Record<string, any> & Partial<{
            /**  所在页面  */
            page_title: string;
            /**  弹窗名称  */
            pop_up_name: string;
    }>;
    /** 到期事件_续费_实时  */
    export type VipFlagTerminateNowEventProperties = Record<string, any> & Partial<{
            /**  到期会员实付金额  */
            vipterminate_paid_amount: number;
            /**  到期会员周期 3个月/6个月/12个月 */
            vipterminate_cycle: string;
            /**  是否续费 TRUE/FALSE */
            is_renew: boolean;
            /**  续费日期  */
            renew_order_day: string;
            /**  续费周期 3个月/6个月/12个月 */
            renew_order_cycle: string;
            /**  续费实付金额  */
            renew_paid_amount: number;
    }>;
    /** 到期事件_续费  */
    export type VipFlagTerminateEventProperties = Record<string, any> & Partial<{
            /**  到期会员实付金额  */
            vipterminate_paid_amount: number;
            /**  到期会员周期 3个月/6个月/12个月 */
            vipterminate_cycle: string;
            /**  是否续费 TRUE/FALSE */
            is_renew: boolean;
            /**  续费日期  */
            renew_order_day: string;
            /**  续费周期 3个月/6个月/12个月 */
            renew_order_cycle: string;
            /**  续费实付金额  */
            renew_paid_amount: number;
    }>;
}

declare module 'ay-sensors-share/types/ay' {
    import { Defer, Platform } from 'ay-sensors-share/types/base';
    import { GetSensorsProfilePropertiesInterface, GetSensorsPublicPropertiesInterface, SensorsProfileProperties } from 'ay-sensors-share/types/index';
    export interface BaseInitAySensorsParams {
        /** 当前是那个app */
        app: string;
        platform: Platform;
        /** 等待，等待 resolve 后再初始化神策 */
        awaiter?: Promise<any>;
        /** 用于获取用户的唯一标识，用于神策的用户关联 */
        getLoginId: () => string;
        /** 获取用户属性，初始化和更新时调用 [data]: 自定义数据  */
        getSensorsProfileProperties: GetSensorsProfilePropertiesInterface;
        /** 获取公共属性，初始化和更新时调用 */
        getSensorsPublicProperties: GetSensorsPublicPropertiesInterface;
        /** aySensors.init后立即初始化神策，awaiter 依旧有效 */
        beginInitSensor?: boolean;
    }
    export interface BaseAYSensorsGlobalConfig {
        initFinished: boolean;
        waitSensorsInitFinished: Defer<any>;
        /** 当前用户属性 */
        currentProfile: Partial<SensorsProfileProperties>;
    }
}

declare module 'ay-sensors-share/event/events' {
    import { BackFlowEventProperties, BuildUpConnectionEventProperties, ButtonClickEventProperties, ContentClickEventProperties, EndOfVideoPlayEventProperties, FT_AdButtonClickEventProperties, FT_AdPageviewEventProperties, HomeButtonClickEventProperties, HomePageviewEventProperties, NavigationBarButtonClickEventProperties, NoticeButtonClickEventProperties, NoticePageviewEventProperties, PageviewEventProperties, SearchEventProperties, SearchPageviewEventProperties, SearchResultClickEventProperties, SplitScreenExposeEventProperties, SQ_PageViewEventProperties, StatisticsEventProperties, TaskProcessingResultsEventProperties, ToastPageviewEventProperties, UserLabelEventProperties, VideoPlayEventProperties, VipFlagTerminateEventProperties, VipFlagTerminateNowEventProperties, YY_AdPageviewEventProperties } from 'ay-sensors-share/types';
    /**
        * 首页浏览事件
        */
    export function homePageviewEvent(property: HomePageviewEventProperties): void;
    /**
        * 首页点击事件
        */
    export function homeButtonClickEvent(property: HomeButtonClickEventProperties): void;
    /**
        * 分屏曝光
        */
    export function splitScreenExposeEvent(property: SplitScreenExposeEventProperties): void;
    /**
        * 导航栏点击事件
        */
    export function navigationBarButtonClickEvent(property: NavigationBarButtonClickEventProperties): void;
    /**
        * 公告浏览事件
        * @param property{NoticePageviewEventProperties}
        */
    export function noticePageviewEvent(property: NoticePageviewEventProperties): void;
    /**
        * 公告点击事件
        */
    export function noticeButtonClickEvent(property: NoticeButtonClickEventProperties): void;
    /**
        * 页面浏览
        */
    export function pageviewEvent(property: PageviewEventProperties): void;
    /**
        * 按钮点击
        */
    export function buttonClickEvent(property: ButtonClickEventProperties): void;
    /**
        * toast浏览
        */
    export function toastPageviewEvent(property: ToastPageviewEventProperties): void;
    /**
        * 搜索事件
        */
    export function searchEvent(property: SearchEventProperties): void;
    /**
        * 搜索结果浏览
        */
    export function searchPageviewEvent(property: SearchPageviewEventProperties): void;
    /**
        * 搜索结果点击
        */
    export function searchResultClickEvent(property: SearchResultClickEventProperties): void;
    /**
        * 内容点击事件
        */
    export function contentClickEvent(property: ContentClickEventProperties): void;
    /**
        * 开始播放事件
        */
    export function videoPlayEvent(property: VideoPlayEventProperties): void;
    /**
        * 结束播放事件
        */
    export function endOfVideoPlayEvent(property: EndOfVideoPlayEventProperties): void;
    /**
        * 任务事件
        */
    export function taskProcessingResultsEvent(property: TaskProcessingResultsEventProperties): void;
    /**
        * 统计事件
        */
    export function statisticsEvent(property: StatisticsEventProperties): void;
    /**
        * 回流事件
        */
    export function backFlowEvent(property: BackFlowEventProperties): void;
    /**
        * 运营_广告页面浏览
        */
    export function yyAdPageviewEvent(property: YY_AdPageviewEventProperties): void;
    /**
        * 广告引导_广告页面浏览
        */
    export function ftAdPageviewEvent(property: FT_AdPageviewEventProperties): void;
    /**
        * 广告引导_广告点击
        */
    export function ftAdButtonClickEvent(property: FT_AdButtonClickEventProperties): void;
    /**
        * 用户标签事件
        */
    export function userLabelEvent(property: UserLabelEventProperties): void;
    /**
        * 联系商家事件
        */
    export function buildUpConnectionEvent(property: BuildUpConnectionEventProperties): void;
    /**
        * 授权页面浏览
        */
    export function sqPageViewEvent(property: SQ_PageViewEventProperties): void;
    /**
        * 到期事件_续费_实时
        */
    export function vipFlagTerminateNowEvent(property: VipFlagTerminateNowEventProperties): void;
    /**
        * 到期事件_续费
        */
    export function vipFlagTerminateEvent(property: VipFlagTerminateEventProperties): void;
}

declare module 'ay-sensors-share/event/yyOrderNowEvent' {
    /**
      * 广告点击立即订购神策埋点
      * @param modalData 神策埋点属性
      * @param _btnText   点击的按钮
      * @param _pid       pid
      * @param [_otherData] 其他神策埋点属性
      * @private
      */
    export default function yyOrderNowEvent(modalData: any, _btnText: string, _pid: number, _otherData?: Record<string, any>): void;
}

declare module 'ay-sensors-share/types/index' {
    import { SensorsPublicProperties, SensorsTrackProperties } from 'ay-sensors-share/types/property';
    import { NotArgsVoidFunction } from 'ay-sensors-share/types/base';
    import { SensorsProfileProperties } from 'ay-sensors-share/types/profile';
    export * from 'ay-sensors-share/types/base';
    export * from 'ay-sensors-share/types/event';
    export * from 'ay-sensors-share/types/profile';
    export * from 'ay-sensors-share/types/property';
    export * from 'ay-sensors-share/types/ay';
    export type UpdateSensorPropertiesParams = {
        /** 此次 属性 更新，仅从用户属性中获取，其他（快递..开关等属性）则不获取 */
        onlyUserInfo?: boolean;
        /** 是否是初始化（登录|重新授权） */
        init?: boolean;
    } & Record<string, any>;
    export type TrackInterface = (eventName: string, property: SensorsTrackProperties, callback?: NotArgsVoidFunction) => void;
    export type GetSensorsPublicPropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsPublicProperties>;
    export type GetSensorsProfilePropertiesInterface = (config: UpdateSensorPropertiesParams) => Partial<SensorsProfileProperties>;
}

