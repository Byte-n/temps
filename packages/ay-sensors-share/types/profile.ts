import { AllShop, PlatformId, ShopNum, VipFlag } from './base';

/**
 * 神策用户属性， 包括基础的，和 代发开关系列
 * 基础的里面，也有一些可选的（代发的）
 */
export type SensorsProfileProperties =
    SensorsProfileBaseProperties
    & Partial<SensorsProfileDistributeSwitchProperties>
    & Record<string, any>;

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
}>
