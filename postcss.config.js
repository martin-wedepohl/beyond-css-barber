const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 2,
            features: {
                "logical-properties-and-values": false,
            }
        }),
    ],
};