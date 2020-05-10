const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, `src`, `app`), //it will automatically look for index.js file
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'] //list of extensions that you want webpack to process
    },
    devServer: {
        historyApiFallback: true // required for react-router to work
    },
    module: {  //describes how we want our app to compile
        rules: [{
            test: /\.jsx?$/, //determines which files should be compiled (any file with .js or .jsx extension here)
            loader: 'babel-loader'
        }]
    }
}