(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},"g31/":function(e,o,t){"use strict";t.r(o);var r=t("KHd+"),n=t("UQSp"),i=t("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},p=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?o[e]=s[e]:t[e]=function(){return s[e]}}))},l=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",f={excerpt:null,title:"IoT Firmware Upload",translated:!1};var u=function(e){e.options[c]&&(e.options[c]=f),i.a.util.defineReactive(e.options,c,f),e.options.computed=l.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},d=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("p",[e._v("There are few firmwares for ESP like boards:")]),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/tree/master/boards/esp/ping",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Ping")])]),t("li",[t("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/tree/master/boards/esp/tcp",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("TCP")])]),t("li",[t("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/tree/master/boards/esp/mobile_gps",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Mobile GPS")])])]),t("p",[e._v("There is a script to upload a firmware for each one, called "),t("code",{pre:!0},[e._v("flash_firmware.py")]),e._v(". It's located in the root of the repository")]),t("blockquote",[t("p",[t("strong",[e._v("Requirements")]),e._v("\nIn order to install all dependencies run in the root of the repository folder:")]),t("pre",[t("code",{pre:!0},[e._v("pip install -r requirements.txt\n")])]),t("p",[e._v("Python3 is required!")])]),t("p",[e._v("Usually in order to upload a firmware to your board follow these steps:")]),t("ol",[t("li",[e._v("Assemble the board and connect it to PC")]),t("li",[e._v("Edit a "),t("code",{pre:!0},[e._v("config.yaml")]),e._v(" in a corresponding folder (e.g. "),t("code",{pre:!0},[e._v("boards/esp/tcp/config.yaml")]),e._v(")")]),t("li",[e._v("Run "),t("code",{pre:!0},[e._v("python flash_firmware.py -s PATH_TO_FOLDER -c PATH_TO_CONFIG")]),e._v(" where "),t("code",{pre:!0},[e._v("PATH_TO_FOLDER")]),e._v(" is a path to the desired firmware (e.g. "),t("code",{pre:!0},[e._v("boards/esp/ping")]),e._v(") and "),t("code",{pre:!0},[e._v("PATH_TO_CONFIG")]),e._v(" is a path to the configuration file (e.g. "),t("code",{pre:!0},[e._v("boards/esp/ping/config.yaml")]),e._v(")")])])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof u&&u(d);o.default=d.exports}}]);