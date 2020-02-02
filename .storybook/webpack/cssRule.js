const cssRule = {
    test: /\.s[ac]ss$/i,
    use: [
        "style-loader",
        {
            loader: "css-loader",
            options: {
                modules: {
                    localIdentName: "[name]___[local]___[hash:base64:5]"
                },
                importLoaders: 1,
                localsConvention: "camelCase",
                url: true,
                import: true
            }
        },
        {
            loader: "sass-loader"
        }
    ]
};

module.exports = cssRule;
