"use strict";

module.exports = {
	"extends": ["stylelint-config-standard"],
	"ignoreFiles": [
	  "dist/**/*.css"
	],
	"rules": {
		"selector-pseudo-class-no-unknown": [
			true,
			{
			  "ignorePseudoClasses": [
				"global",
				"local"
			  ]
			}
		]
	}
};
