// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/scss/base.scss"`
            },
            scss: {
                prependData: `@import "~@/scss/base.scss";`
            }
        }
    }
};
