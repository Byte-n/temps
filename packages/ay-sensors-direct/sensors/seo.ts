import { RequestInterfaceCallback, SensorsFirstChannelSourceUserProfile, SensorsUtmParams } from '../types';
import { setOnceProfile } from './profile';
import { logger } from 'ay-sensors-share';

/** 获取  首次 渠道来源 用户属性，并使用 setOnceProfile 设置 */
export function trackSeoOnce (callback?: RequestInterfaceCallback): void {
    const profile = getFirstChannelSourceUserProfile();
    setOnceProfile(profile, callback);
}

/** 匹配 host 的正则 */
const hostRegexp = /:\/\/([^/]+)/;

/** 获取 神策 首次 渠道来源 用户属性 */
function getFirstChannelSourceUserProfile (): SensorsFirstChannelSourceUserProfile {
    const { referrer } = document;
    const host = referrer.match(hostRegexp)?.[1];
    logger.info('channel source host', host);
    if (!host) {
        return {
            $first_referrer: referrer,
            $first_referrer_host: host,
            $first_traffic_source_type: parseTrafficSourceType(host),
        };
    }
    let utm: SensorsUtmParams = {};
    // 前一个界面是百度，则获取当前界面的baiduSeo参数
    if (host === 'www.baidu.com') {
        utm = getBaiduSeoUtm();
    }
    const { $utm_source, $utm_medium, $utm_term, $utm_content, $utm_campaign } = utm;

    return {
        $first_referrer: referrer,
        $first_referrer_host: host,
        $first_traffic_source_type:
            ($utm_source || $utm_medium || $utm_term || $utm_content || $utm_campaign) ? '付费广告流量'
                : parseTrafficSourceType(host),
        $first_search_keyword: utm.keyword,
        $utm_source,
        $utm_medium,
        $utm_term,
        $utm_content,
        $utm_campaign,
    };
}

/**
 * 获取百度SEO参数
 * 例如：
 * {
 *     "utm_source": "baidusem",
 *     "utm_medium": "产品服务-代发助手王",
 *     "utm_campaign": "代发助手王-核心",
 *     "utm_term": "dfzsw",
 *     "e_keywordid": "711180993648",
 *     "e_keywordid2": "711180993648",
 *     "bd_vid": "11329022610626832844"
 * }
 */
function getBaiduSeoUtm (search = location.search): SensorsUtmParams {
    const params = new URLSearchParams(search);
    const keys = [];
    for (const key of params.keys()) {
        if ('e_keywordid' === key || key.startsWith('e_keywordid')) {
            keys.push(params.get(key));
        }
    }
    return {
        $utm_content: params.get('utm_content'),
        $utm_source: params.get('utm_source'),
        $utm_medium: params.get('utm_medium'),
        $utm_campaign: params.get('utm_campaign'),
        $utm_term: params.get('utm_term'),
        keyword: keys.length ? keys.join(',') : undefined,
    };
}

/**
 * 按神策的规则解析
 * 神策文档链接：https://manual.sensorsdata.cn/sa/latest/zh_cn/web-87163247.html#id-%E6%B8%A0%E9%81%93%E8%BF%BD%E8%B8%AA%E4%B8%8E%E5%B9%BF%E5%91%8A%EF%BC%88Web%EF%BC%89-%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%85%B3%E9%94%AE%E8%AF%8Dsearch_keyword
 * 自然搜索流量	落地页地址无 utm_xxx 参数且前向地址中包含search 中的参数： 神策已有参数：['www.baidu.','m.baidu.','m.sm.cn','so.com','sogou.com','youdao.com','google.','yahoo.com/','bing.com/','ask.com/'];
 * 社交网站流量	落地页地址无 utm_xxx 参数且前向地址中包含 social 中的参数: 神策已有参数：['weibo.com','kaixin001.com','douban.com','qzone.qq.com','zhihu.com','tieba.baidu.com','weixin.qq.com'];
 * 直接流量	如果前向地址为空：直接复制网址或者点击书签打开页面。
 * 引荐流量	如果以上情况都不是，比如前向地址为某个私人网站。
 */
function parseTrafficSourceType (host?: string) {
    if (!host) {
        return '直接流量';
    }
    if (['www.baidu.', 'm.baidu.', 'm.sm.cn', 'so.com', 'sogou.com', 'youdao.com', 'google.', 'yahoo.com', 'bing.com', 'ask.com'].includes(host)) {
        return '自然搜索流量';
    }
    if (['weibo.com', 'kaixin001.com', 'douban.com', 'qzone.qq.com', 'zhihu.com', 'tieba.baidu.com', 'weixin.qq.com'].includes(host)) {
        return '社交网站流量';
    }
    return '引荐流量';
}

