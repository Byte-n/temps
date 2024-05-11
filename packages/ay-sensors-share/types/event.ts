import { AllShop, VipFlag } from './base';

/**
 * 注册事件
 */
export type StartRegisterEventProperties = Record<string, any> & {
    /**  开始日期 指会员开始日期  */
    date_start: string;
    /**  订购周期 0个月/1个月/3个月/6个月/12个月等……  */
    order_cycle: string;
}
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
}

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
}>

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
}>
/** 分屏曝光  */
export type SplitScreenExposeEventProperties = Record<string, any> & Partial<{
    /**  功能模块 功能大类的名称，如爱用商品里的：宝贝列表/发布宝贝/关联销售等；又如代发里的：批量铺货/关联商品/自动发货等 */
    module_name: string;
    /**  所在页面  */
    page_title: string;
    /**  位置 指分屏位置：第二屏，第三屏等 */
    position: string;
}>
/** 导航栏点击事件  */
export type NavigationBarButtonClickEventProperties = Record<string, any> & Partial<{
    /**  AB测试版本  */
    replace_version: string;
    /**  位置 比如商品PC端的导航栏，区分是顶部/全部功能（顶部导航栏和顶部全部功能里的当行按钮存在重复的按钮） */
    position: string;
    /**  按钮名称  */
    button_name: string;
}>
/** 公告浏览事件  */
export type NoticePageviewEventProperties = Record<string, any> & Partial<{
    /**  公告名称  */
    notice_name: string;
}>
/** 公告点击事件  */
export type NoticeButtonClickEventProperties = Record<string, any> & Partial<{
    /**  公告名称  */
    notice_name: string;
    /**  按钮名称 如查看详情/确定等 */
    button_name: string;
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
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
}>
/** 联系商家事件  */
export type BuildUpConnectionEventProperties = Record<string, any> & Partial<{
    /**  建联结果 成功建联/判未建联/未建联 */
    build_up_result: string;
    /**  接待类型 客服/销售/。。。。 */
    reception_type: string;
    /**  爱用联系人姓名 销售/客服的名字 */
    customer_service_name: string;
}>
/** 授权页面浏览  */
export type SQ_PageViewEventProperties = Record<string, any> & Partial<{
    /**  所在页面  */
    page_title: string;
    /**  弹窗名称  */
    pop_up_name: string;
}>
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
}>
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
}>
