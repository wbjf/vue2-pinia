module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/scss/variables.scss";`,
            },
        }
    },
    configureWebpack: { //这个是配置
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                }
            ]
        }
    }
}
