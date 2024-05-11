const logger = require('./logger')('DTS');
/*
    命令：node index.js 子包名称
 */
const path = require('path');

const projectDir = path.resolve(__dirname, '../');

const dts = require('dts-bundle');
const fs = require('fs');
let mainName = process.argv[2];
if (process.argv[2] === 'index.js') {
    mainName = process.argv[3];
}
if (!mainName) {
    logger.error('process.argv:', process.argv);
    throw Error('参数错误');
}
const baseDir = path.resolve(projectDir, './packages', mainName, './dist-dts/');
const entryFilePath = path.resolve(baseDir, mainName, 'index.d.ts');
const outFilePath = path.resolve(projectDir, './packages', mainName, './dist/index.d.ts');

// 配置要打包的模块和输出文件的路径
const modules = getModule();
modules.forEach(value => {
    logger.log('打包依赖项：', value.name);
    dts.bundle({
        name: value.name, // 设置生成的声明文件中的顶层命名空间名称
        main: path.resolve(baseDir, value.name, 'index.d.ts'), // 设置输出的声明文件路径
        baseDir: path.resolve(baseDir, value.name),
        externals: false,
        referenceExternals: false,
        out: path.resolve(path.parse(outFilePath).dir, value.name + '.d.ts'),
        // removeSource: true, // 打包后是否删除原始的声明文件
        emitOnIncludedFileNotFound: true,
        // verbose: true,
    });
    logger.success('打包依赖项：', value.name, ', 完成');
});

logger.log('打包入口文件: ', mainName);
// 执行打包操作
dts.bundle({
    name: 'ay-sensors', // 设置生成的声明文件中的顶层命名空间名称
    main: entryFilePath, // 设置输出的声明文件路径
    baseDir,
    externals: false,
    referenceExternals: false,
    out: outFilePath,
    // removeSource: true, // 打包后是否删除原始的声明文件
    emitOnIncludedFileNotFound: true,
    // verbose: true,
    headerText: `
使用方法：如果 'ay-sensors' 无法匹配，则将 declare module 'ay-sensors' 中的模块路径，改为项目中 ay-sensors 的导入路径 即可。
或者如下自定义声明（distribute-dy-mobile项目）：
declare module '@/common/ay-sensors' {
    ...
`,
});
logger.success(`打包 ${mainName} 完成！`);

appendTypingsToIndex(path.parse(outFilePath).dir);

deleteFolderRecursive(baseDir);

/** 获取子级文件夹名称 */
function getSubdirectoriesNames (directoryPath) {
    return fs.readdirSync(directoryPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}
/** 获取依赖得模块详细 */
function getModule () {
    return getSubdirectoriesNames(baseDir)
        .map(name => {
            if (name === mainName) {
                return undefined;
            }
            return {
                name,
                entry: path.resolve(baseDir, name, './index.d.ts'),
            };
        })
        .filter(Boolean);
}
/** 将 d.ts 合并到 index.d.ts 中 */
function appendTypingsToIndex (directoryPath) {
    const indexPath = path.join(directoryPath, 'index.d.ts');
    logger.log('appendTypingsToIndex', directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            logger.error('Error reading directory:', err);
            return;
        }

        logger.log('files', files);
        const typingsFiles = files.filter(file => endsWith(file, '.d.ts') && file !== 'index.d.ts');
        logger.log('files', typingsFiles);

        // 追加文件内容到 index.d.ts
        typingsFiles.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            fs.appendFileSync(indexPath, content);
            fs.unlinkSync(filePath);
            logger.log(file, '追加到 index 中');
        });
    });
}
/** 是否以 suffix 结尾 */
function endsWith (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

/** 删除文件夹全部内容 */
function deleteFolderRecursive (folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // 递归删除子文件夹
                deleteFolderRecursive(curPath);
            } else {
                // 删除子文件
                fs.unlinkSync(curPath);
            }
        });
        // 删除空文件夹
        fs.rmdirSync(folderPath);
    }
}
