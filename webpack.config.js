const path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: '../src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '../src',
                    to: '.',
                    globOptions: {
                        ignore: ['**/node_modules/**'], // Игнорировать все файлы и папки node_modules
                    },
                },
            ],
        }),
    ],
};
