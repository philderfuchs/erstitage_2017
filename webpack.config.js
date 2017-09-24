const webpack = require("webpack");

const commonConfig = {
    entry: __dirname + "/js/app.js",
    output: {
        path: __dirname + "/build/js",
        publicPath: '/build/js/',
        filename: "app.bundle.js"
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    stats: {
        colors: true
    }
};

module.exports = function (env) {

    if(env === "dev") {
        console.log(">>> DEVELOPMENT ENVIRONMENT");
        commonConfig.devtool = 'source-map';
        commonConfig.devServer = {
            port: 8080
        }
    } else if (env === "prod") {
        console.log(">>> PRODUCTION ENVIRONMENT");
    }

    return commonConfig;
};