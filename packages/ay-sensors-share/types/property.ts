import {
    AllShop, AppName, PlatformId, ShopNum, UseEnd, VipFlag,
} from './base';

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
}

/** 神策预置属性  */
export type SensorsBaseProperties =
// 以下是神策根据请求IP、UserAgent自动推断的。可以手动指定覆盖掉。
    Partial<{
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
    }>

/** track 函数的 Properties  */
export type SensorsTrackProperties = SensorsBaseProperties & Partial<SensorsPublicProperties> & Record<string, any>;
