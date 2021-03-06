const path = require("path");

module.exports = {

    // bundling mode
    mode: "production",

    // entry files
    entry: [
        __dirname + "/src/app.ts",
        __dirname + "/scss/app.scss"
    ],

    // output bundles (location)
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.min.js",
    },

    // file resolutions
    resolve: {
        extensions: [ ".ts", ".js" ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        options: { outputPath: "/", name: "[name].min.css" }
                    },
                    "sass-loader"
                ]
            }
        ],
    },
};
