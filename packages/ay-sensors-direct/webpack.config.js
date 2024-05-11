// 官方文档 ： https://webpack.docschina.org/guides/
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');

const distDir = path.resolve(__dirname, './dist/');
const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './package.json'), 'utf-8'));

const config = {
    mode: process.env.NODE_ENV,
    devtool: false,
    entry: path.resolve(__dirname, './index.ts'),
    module: {
        rules: [
            {
                test: /.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __PROJECT_VERSION__: JSON.stringify(packageJSON.version),
            __PROJECT_NAME__: JSON.stringify(packageJSON.name).replace('ay-sensors-', ''),
        }),
    ],
    optimization: {
        minimize: false,
        minimizer: [
            // 压缩 JS
            new TerserPlugin({
                // 是否生成*.js.LICENSE.txt文件
                extractComments: false,
                // 禁用混淆
                terserOptions: { compress: false },
            }),
        ],
    },
    resolve: { extensions: ['.ts', '.js'] },
};


module.exports = [
    merge(config, {
        output: {
            path: distDir,
            filename: 'index.borrow.js',
            library: {
                name: 'aySensors',
                export: 'default',
                type: 'window',
            },
        },
        optimization: { minimize: true },
    }),
    merge(config, {
        output: {
            path: distDir,
            filename: 'index.umd.js',
            library: {
                name: 'aySensors',
                type: 'umd',
            },
        },
    }),
    merge(config, {
        output: {
            path: distDir,
            filename: 'index.module.js',
            library: {  type: 'module'  },
        },
        experiments: { outputModule: true },
    }),
];
