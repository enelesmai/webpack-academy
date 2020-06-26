const ExamplePlugin = require("./ExamplePlugin.js");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jpe?g$/,
            use: ["file-loader"]
        }]
    },
    plugins: [
        new ExamplePlugin(),
        new webpack.ContextReplacementPlugin()
    ]
};