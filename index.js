"use strict";

module.exports = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**/*.css"],
  rules: {
    // 未知伪类
    "selector-pseudo-class-no-unknown": [
      true,
      {
        // 全局忽略未知伪类
        ignorePseudoClasses: ["global"],
      },
    ],
  },
};
