import {
    BackFlowEventProperties,
    BuildUpConnectionEventProperties,
    ButtonClickEventProperties,
    ContentClickEventProperties,
    EndOfVideoPlayEventProperties,
    FT_AdButtonClickEventProperties,
    FT_AdPageviewEventProperties,
    HomeButtonClickEventProperties,
    HomePageviewEventProperties,
    NavigationBarButtonClickEventProperties,
    NoticeButtonClickEventProperties,
    NoticePageviewEventProperties,
    PageviewEventProperties,
    SearchEventProperties,
    SearchPageviewEventProperties,
    SearchResultClickEventProperties,
    SplitScreenExposeEventProperties,
    SQ_PageViewEventProperties,
    StatisticsEventProperties,
    TaskProcessingResultsEventProperties,
    ToastPageviewEventProperties,
    UserLabelEventProperties,
    VideoPlayEventProperties,
    VipFlagTerminateEventProperties,
    VipFlagTerminateNowEventProperties,
    YY_AdPageviewEventProperties,
} from '../types';
import { track } from './track';

/**
 * 首页浏览事件
 */
export function homePageviewEvent (property: HomePageviewEventProperties) {
    track('HomePageview', property);
}

/**
 * 首页点击事件
 */
export function homeButtonClickEvent (property: HomeButtonClickEventProperties) {
    track('HomeButtonClick', property);
}

/**
 * 分屏曝光
 */
export function splitScreenExposeEvent (property: SplitScreenExposeEventProperties) {
    track('SplitScreenExpose', property);
}

/**
 * 导航栏点击事件
 */
export function navigationBarButtonClickEvent (property: NavigationBarButtonClickEventProperties) {
    track('NavigationBarButtonClick', property);
}

/**
 * 公告浏览事件
 * @param property{NoticePageviewEventProperties}
 */
export function noticePageviewEvent (property: NoticePageviewEventProperties) {
    track('NoticePageview', property);
}

/**
 * 公告点击事件
 */
export function noticeButtonClickEvent (property: NoticeButtonClickEventProperties) {
    track('NoticeButtonClick', property);
}

/**
 * 页面浏览
 */
export function pageviewEvent (property: PageviewEventProperties) {
    track('Pageview', property);
}

/**
 * 按钮点击
 */
export function buttonClickEvent (property: ButtonClickEventProperties) {
    track('ButtonClick', property);
}

/**
 * toast浏览
 */
export function toastPageviewEvent (property: ToastPageviewEventProperties) {
    track('ToastPageview', property);
}

/**
 * 搜索事件
 */
export function searchEvent (property: SearchEventProperties) {
    track('Search', property);
}

/**
 * 搜索结果浏览
 */
export function searchPageviewEvent (property: SearchPageviewEventProperties) {
    track('SearchPageview', property);
}

/**
 * 搜索结果点击
 */
export function searchResultClickEvent (property: SearchResultClickEventProperties) {
    track('SearchResultClick', property);
}

/**
 * 内容点击事件
 */
export function contentClickEvent (property: ContentClickEventProperties) {
    track('ContentClick', property);
}

/**
 * 开始播放事件
 */
export function videoPlayEvent (property: VideoPlayEventProperties) {
    track('VideoPlay', property);
}

/**
 * 结束播放事件
 */
export function endOfVideoPlayEvent (property: EndOfVideoPlayEventProperties) {
    track('EndOfVideoPlay', property);
}

/**
 * 任务事件
 */
export function taskProcessingResultsEvent (property: TaskProcessingResultsEventProperties) {
    track('TaskProcessingResults', property);
}

/**
 * 统计事件
 */
export function statisticsEvent (property: StatisticsEventProperties) {
    track('Statistics', property);
}

/**
 * 回流事件
 */
export function backFlowEvent (property: BackFlowEventProperties) {
    track('BackFlow', property);
}

/**
 * 运营_广告页面浏览
 */
export function yyAdPageviewEvent (property: YY_AdPageviewEventProperties) {
    track('YY_AdPageview', property);
}

/**
 * 广告引导_广告页面浏览
 */
export function ftAdPageviewEvent (property: FT_AdPageviewEventProperties) {
    track('FT_AdPageview', property);
}

/**
 * 广告引导_广告点击
 */
export function ftAdButtonClickEvent (property: FT_AdButtonClickEventProperties) {
    track('FT_AdButtonClick', property);
}

/**
 * 用户标签事件
 */
export function userLabelEvent (property: UserLabelEventProperties) {
    track('UserLabel', property);
}

/**
 * 联系商家事件
 */
export function buildUpConnectionEvent (property: BuildUpConnectionEventProperties) {
    track('BuildUpConnection', property);
}

/**
 * 授权页面浏览
 */
export function sqPageViewEvent (property: SQ_PageViewEventProperties) {
    track('SQ_PageView', property);
}

/**
 * 到期事件_续费_实时
 */
export function vipFlagTerminateNowEvent (property: VipFlagTerminateNowEventProperties) {
    track('VipFlagTerminateNow', property);
}

/**
 * 到期事件_续费
 */
export function vipFlagTerminateEvent (property: VipFlagTerminateEventProperties) {
    track('VipFlagTerminate', property);
}
