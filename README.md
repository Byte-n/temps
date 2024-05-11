# ay-sensors 爱用神策 JS-SDK
## [ay-sensors-direct](packages%2Fay-sensors-direct)
一个简单的神策Javascript-SDK，支持
* setProfile
* registerPage
* track
* login
* 提供爱用相关的自定义事件埋点函数，提供提示。
详见：[ay-sensors-direct-README.md](packages%2Fay-sensors-direct%2FREADME.md)

## [ay-sensors-share](packages%2Fay-sensors-share)
共用的工具函数，ts类型等。

# 使用
* 初始化：
* aySensors.init 并指定参数 beginInitSensor: true，（不然你需要另外调用 initSensors）
> ay-sensors-wrapper 会调用 sensors.init, sensors.registerPage, sensors.login, sensors.setProfile。
> ay-sensors-direct 则少了 sensors.init。因为里面没有神策的SDK。
> 都会等待 参数awaiter, resolve后才初始化。

* 发送埋点
aySensors.事件名称  
例如：
YY_AdPageview -> aySensors.yyAdPageview...
ButtonClickE -> aySensors.buttonClickE...
> 当然你也可以 aySensors.track(事件名, 事件属性); 与神策中的使用是一致的。

找不到的事件，上 ay-sensors-share/event/events.js 中搜搜。
没有的话，就新增一个，按 格式 命名 补充 相关代码！！！

# 神策相关文档
## web-sdk
* [Web JS SDK 预置事件和预置属性](https://manual.sensorsdata.cn/sa/latest/web-js-sdk-100106527.html)
* [Web JS SDK 基础API介绍](https://manual.sensorsdata.cn/sa/latest/api-web-7538088.html)
