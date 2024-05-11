/* eslint-disable no-console  */
const chalk = require('chalk');

module.exports = function createLogger  (name) {
    const logger = {
        /** log */
        log (...messages) {
            console.log('[log]：', name, '：', new Date().toLocaleString(), '：', ...messages);
        },
        /** warn */
        warn (...messages) {
            console.log(`${chalk.hex('#ffb70a')('[war]')}：`, name, '：', new Date().toLocaleString(), '：', ...messages);
        },
        /** success */
        success (...messages) {
            console.log(`${chalk.hex('#4CAF50')('[war]')}：`, name, '：', new Date().toLocaleString(), '：', ...messages);
        },
        /** error */
        error (...messages) {
            console.log(`${chalk.hex('#F44336')('[war]')}：`, name, '：', new Date().toLocaleString(), '：', ...messages);
        },
    };
    logger.log(`-------------------------${name}-------------------------`);
    return logger;
};
