/* eslint-disable */
/*
从 神策 SDK 中复制除了的 随机 ID 算法
 */

// 检查一个值是否为对象
function isObject(value) {
    return null != value && '[object Object]' == Object.prototype.toString.call(value);
}

// 生成伪随机数
var generatePseudoRandomNumber = function () {
    var timestamp = new Date().getTime();
    var randomNumber = timestamp;
    return function (range) {
        randomNumber = (9301 * randomNumber + 49297) % 233280;
        return Math.ceil(randomNumber / 233280 * range);
    };
}();

// 生成伪随机浮点数
function generatePseudoRandomFloat() {
    if (typeof Uint32Array === 'function') {
        var cryptoObject = '';
        if (typeof crypto !== 'undefined') {
            cryptoObject = crypto;
        } else if (typeof msCrypto !== 'undefined') {
            cryptoObject = msCrypto;
        }
        if (isObject(cryptoObject) && cryptoObject.getRandomValues) {
            var randomArray = new Uint32Array(1);
            var randomValue = cryptoObject.getRandomValues(randomArray)[0];
            var powerOfTwo = Math.pow(2, 32);
            return randomValue / powerOfTwo;
        }
    }
    return generatePseudoRandomNumber(1e19) / 1e19;
}

/** 从神策SDK里面提出的匿名ID算法，由ChatGPT完成反编译 */
var generateSensorsAnonymityUniqueId = function () {
    var generateTimestamp = function () {
        for (var timestamp = 1 * new Date(), increment = 0; timestamp == 1 * new Date();) {
            increment++;
        }
        return timestamp.toString(16) + increment.toString(16);
    };
    var generateRandomFloat = function () {
        return generatePseudoRandomFloat().toString(16).replace('.', '');
    };
    var generateUserAgentHash = function () {
        function combineHashes(hash, array) {
            var result = 0;
            for (var index = 0; index < array.length; index++) {
                result |= array[index] << 8 * index;
            }
            return hash ^ result;
        }

        var userAgent = navigator.userAgent;
        var byteValueArray = [];
        var hash = 0;
        for (var i = 0; i < userAgent.length; i++) {
            var byteValue = userAgent.charCodeAt(i);
            byteValueArray.unshift(255 & byteValue);
            if (byteValueArray.length >= 4) {
                hash = combineHashes(hash, byteValueArray);
                byteValueArray = [];
            }
        }
        if (byteValueArray.length > 0) {
            hash = combineHashes(hash, byteValueArray);
        }
        return hash.toString(16);
    };
    return function () {
        var screenSize = String(screen.height * screen.width);
        screenSize = screenSize && /\d{5,}/.test(screenSize) ? screenSize.toString(16) : String(31242 * generatePseudoRandomFloat()).replace('.', '').slice(0, 8);
        var uniqueId = generateTimestamp() + '-' + generateRandomFloat() + '-' + generateUserAgentHash() + '-' + screenSize + '-' + generateTimestamp();
        return uniqueId ? uniqueId : (String(generatePseudoRandomFloat()) + String(generatePseudoRandomFloat()) + String(generatePseudoRandomFloat())).slice(2, 15);
    };
}();
export default generateSensorsAnonymityUniqueId;
