export type Defer<D> = Promise<D | undefined> & { resolve: (data: D) => void, reject: (error: Error) => void }

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
    PC = 'PC',
    MB = 'MB',
}

/** 时间戳 */
export type Timestamp = number;

export type Logger = {
    debug: LoggerFunction;
    log: LoggerFunction;
    info: LoggerFunction;
    warn: LoggerFunction;
    error: LoggerFunction;
}
export type LoggerFunction = (...args: any[]) => void;

export type NotRequired<T> = undefined | T;
export type NotArgsVoidFunction = () => void;
export type PlatformId = 'TAO' | 'PDD' | '1688' | 'DOU' | 'KUAI' | 'WX' | 'XHS';
export type UseEnd = 'MB' | 'PC' | 'WW';
export type AppName = '代发助手王' | '爱用代发' | '爱用供销' | '爱用铺货' | '代发助手' | '代发小助手' | '爱用管店';

