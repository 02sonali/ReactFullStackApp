const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, `src`, `app`), //it will automatically look for index.js file
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "index.html", // to import index.html file inside index.js
        }),
      ],
    resolve: {
        extensions: ['.js', '.jsx'] //list of extensions that you want webpack to process
    },
    devServer: {
        historyApiFallback: true, // required for react-router to work
        port: 3030, // you can change the port
    },
    module: {  //describes how we want our app to compile
        rules: [{
            test: /\.jsx?$/, //determines which files should be compiled (any file with .js or .jsx extension here)
            exclude: /node_modules/, // excluding the node_modules folder
            use: {
            loader: "babel-loader",
            }
        }]
    }
}