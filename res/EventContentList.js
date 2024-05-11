/* eslint-disable no-unused-vars */
/*
数据格式：https://manual.sensorsdata.cn/sa/latest/%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F-114000153.html
收集的一些 神策 请求 JSON 数据示例
 */
const publicProperty = {};
const eventProperty = {};
// deleteProfile 的时候，会清除 distinct_id 和 first_id
/** 关联事件 */
const $ignUp = {
    identities: {
        // cookie
        $identity_cookie_id: '1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e',
        // 用户标识
        $identity_login_id: '{nickName}',
    },
    // 用户标识
    distinct_id: '{nickName}',
    lib: { $lib: 'js', $lib_method: 'code', $lib_version: '1.24.10' },
    properties: {
        // 内置属性
        $timezone_offset: -480,
        $screen_height: 823,
        $screen_width: 400,
        $viewport_height: 823,
        $viewport_width: 400,
        $lib: 'js',
        $lib_version: '1.24.10',
        $latest_traffic_source_type: '直接流量',
        $latest_search_keyword: '未取到值_直接打开',
        $latest_referrer: '',
        $url: 'http://q.aiyongtech.com/ad/guide-add-desktop/redirect/distribute.html?d-app=TRADE&d-device=IOS&d-to=tradeList&d-un={nickName}&d-qn-ver={qn-ver}&d-t=1029463864&d-_=1691029546472&d-open=app#3',
        $title: '爱用交易',
        ...publicProperty,
        ...eventProperty,
    },
    // 用户标识
    login_id: '{nickName}',
    // cookie
    anonymous_id: '1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e',
    // cookie
    original_id: '1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e',
    // 事件类型
    type: 'track_signup',
    // 事件名称
    event: '$SignUp',
    // 事件触发时间
    time: 1691029546695,
    _track_id: 851856696,
    _flush_time: 1691029546696,
};
/** track 自定义事件 */
const DiyEvent = {
    identities: {
        $identity_cookie_id: '1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e',
        $identity_login_id: '{nickName}',
    },
    distinct_id: '{nickName}',
    lib: {
        $lib: 'js',
        $lib_method: 'code',
        $lib_version: '1.24.10',
    },
    properties: {
        $timezone_offset: -480,
        $screen_height: 823,
        $screen_width: 400,
        $viewport_height: 823,
        $viewport_width: 400,
        $lib: 'js',
        $lib_version: '1.24.10',
        $latest_traffic_source_type: '直接流量',
        $latest_search_keyword: '未取到值_直接打开',
        $latest_referrer: '',
        $is_first_day: false,
        $url: 'http://q.aiyongtech.com/ad/guide-add-desktop/redirect/distribute.html?d-app=TRADE&d-device=IOS&d-to=tradeList&d-un={nickName}&d-qn-ver={qn-ver}&d-t=1029463864&d-_=1691029546472&d-open=app#3',
        $title: '爱用交易',
        sellernick: '{nickName}',
        page_title: '添加到桌面2',
    },
    login_id: '{nickName}',
    anonymous_id: '1864df638f1610-0683440e53dbc28-26031951-2073600-1864df638f2109e',
    type: 'track',
    event: 'DDGL_Pageview',
    time: 1691029546699,
    _track_id: 886766699,
    _flush_time: 1691029546700,
};
/** 用户属性设置 */
const profileSet = {
    identities: {
        $identity_cookie_id: '189b9891f10d54-0ab9227c0825a5-7c546c76-2007040-189b9891f11c4c',
        $identity_login_id: 'nickName',
    },
    distinct_id: 'nickName',
    lib: {
        $lib: 'js',
        $lib_method: 'code',
        $lib_version: '1.24.10',
    },
    properties: { aaaa: 123 },
    login_id: 'nickName',
    anonymous_id: '189b9891f10d54-0ab9227c0825a5-7c546c76-2007040-189b9891f11c4c',
    type: 'profile_set',
    time: 1691034998996,
    _track_id: 197098996,
    _flush_time: 1691034998996,
};
/** 用户属性 once */
const profileSetOnce = {
    identities: {
        $identity_cookie_id: '18e5068a9ab1542-0877bf62ad79db-26001b51-1693734-18e5068a9ac1ddd',
        $identity_login_id: 'nickName',
    },
    distinct_id: 'nickName',
    lib: {
        $lib: 'js',
        $lib_method: 'code',
        $lib_version: '1.26.6',
    },
    properties: { test: 'a' },
    login_id: 'nickName',
    anonymous_id: '18e5068a9ab1542-0877bf62ad79db-26001b51-1693734-18e5068a9ac1ddd',
    type: 'profile_set_once',
    time: 1710746083310,
    _track_id: 888933310,
    _flush_time: 1710746083310,
};
