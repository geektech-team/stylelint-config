"use strict";

module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    // 未知伪类
    "selector-pseudo-class-no-unknown": [
      true,
      {
        // 全局忽略未知伪类
        ignorePseudoClasses: ["global"],
      },
    ],
    // 忽略未用通用字体（针对iconfont字体）
    "font-family-no-missing-generic-family-keyword": null,
  },
};
