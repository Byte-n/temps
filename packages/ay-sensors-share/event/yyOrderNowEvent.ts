import { track } from './track';

/**
 * 广告点击立即订购神策埋点
 * @param modalData 神策埋点属性
 * @param _btnText   点击的按钮
 * @param _pid       pid
 * @param [_otherData] 其他神策埋点属性
 * @private
 */
export default function yyOrderNowEvent (modalData: any, _btnText: string, _pid: number, _otherData?: Record<string, any>) {
    // 后续将 modalData: any, btnText: string, pid: number, otherData?: Record<string, any>
    // 改为： data: any.
    // 也就是 移除 btnText 和 pid 参数, data替代 modalData, otherData
    const data = [modalData, _btnText, _pid, _otherData]
        .filter(val => typeof val === 'object' && val)
        // 合并
        .reduce((res, val) => ({ ...res, ...val }), {});

    // 兼容一下部分旧数据的转换 creative_id creative_name pid_name packageName amountPayable 不是神策字段
    data.cid = data.cid || data.creative_id;
    delete data.creative_id;

    data.cname = data.cname || data.creative_name;
    delete data.creative_name;

    data.pname = data.pname || data.pid_name;
    delete data.pid_name;

    data.package_name = data.package_name || data.packageName;
    delete data.packageName;

    data.amount_payable = data.amount_payable || data.amountPayable;
    delete data.amountPayable;

    // pid 和 pname 都是神策字段，form_pid 默认和 pid 一样，from_pname 默认和 pname 一样
    data.from_pid = data.from_pid || data.pid;
    data.from_pname = data.from_pname || data.pname;
    track('YY_OrderNow', data);
}
