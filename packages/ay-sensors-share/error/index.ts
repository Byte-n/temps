export class AySensorsError extends Error {
    constructor (message: string) {
        super(message);
    }
}

/** 函数未初始化错误 */
export class FunctionNotInitError extends AySensorsError {
    constructor (name: string) {
        super(`ay sensors: 函数${name} 未初始化！`);
    }
}

export class NotImplementedError extends AySensorsError {
    constructor (name: string) {
        super(`ay sensors: ${name} 还未实现！`);
    }
}

