(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--wschool-2021-robonomics-parachain-in-practice-md"],{

/***/ "D+wv":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=63e0a4e1& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"Robonomics parachainは、Polkadotエコシステム上の汎用parachainではありません。Robonomicsの目的は、機械の経済を構築することであり、その目的をスコープとしたRobonomics parachainは、PolkadotエコシステムをIoT、スマートシティ、インダストリー4.0のコンセプトと統合するのに役立ちます。\")]), _c('h2', {\n    attrs: {\n      \"id\": \"requirements\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#requirements\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Requirements\")]), _c('ul', [_c('li', [_vm._v(\"Dockerは\"), _c('a', {\n    attrs: {\n      \"href\": \"https://docs.docker.com/engine/install/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちらでインストール\")]), _vm._v(\"してください。\")]), _c('li', [_vm._v(\"Polkadot-launchは\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/paritytech/polkadot-launch#install\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"こちらでインストール\")]), _vm._v(\"してください。\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"relay-chainの起動\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#relay-chain%E3%81%AE%E8%B5%B7%E5%8B%95\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Relay chainの起動\")]), _c('p', [_vm._v(\"Relay chainはPolkadotの核となるもので、すべての子parachainに \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.polkadot.network/docs/en/learn-security\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"共有のセキュリティ\")]), _vm._v(\"を提供し、メッセージパッシングの仕組みを実装しています。\\nここでは、Rococo (polkadot testnet) リレーチェーンのローカルインスタンスを、2つのロボノミクスベースのパラチェーンを子として起動してみましょう。用意された \"), _c('a', {\n    attrs: {\n      \"href\": \"https://hub.docker.com/layers/robonomics/robonomics/winter-school-2/images/sha256-92f4795262f3ded3e6a153999d2777c4009106a7d37fd29969ebf1c3a262dc85?context=explore\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Docker image tag: \\\"winter-school-2\\\"\")]), _vm._v(\" を使いますが、例題のソースコードはすべて\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/tree/master/scripts/polkadot-launch\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"RobonomicsのGitHub\")]), _vm._v(\"にあります。\")]), _c('Asciinema', {\n    attrs: {\n      \"vid\": \"419Jrg22ziFfMFPZlh2WtiLvg\"\n    }\n  }), _c('p', [_vm._v(\"時間がかかるかもしれませんが、我慢してください。結果として、ポートに3つのチェーンインスタンスができるはずです。\")]), _c('ul', [_c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9944\")]), _vm._v(\" - local rococo relay chain.\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9988\")]), _vm._v(\" - robonomics parachain with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"id=100\")])]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"9989\")]), _vm._v(\" - robonomics parachain with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"id=200\")])])]), _c('p', [_vm._v(\"リモートサーバを使用する場合は、ローカルマシンでいくつかの ssh トンネルを作成する必要があります。\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"ssh -f -N -L 9944:127.0.0.1:9944 root@REMOTE_SERVER_IP\\nssh -f -N -L 9988:127.0.0.1:9988 root@REMOTE_SERVER_IP\\nssh -f -N -L 9989:127.0.0.1:9989 root@REMOTE_SERVER_IP\\n\")])]), _c('p', [_vm._v(\"その後、あなたは、 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://parachain.robonomics.network/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://parachain.robonomics.network/\")]), _vm._v(\" で \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ws://127.0.0.1:9944\")]), _vm._v(\"と \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ws://127.0.0.1:9988\")]), _vm._v(\"と \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ws://127.0.0.1:9989\")]), _vm._v(\" を使うことができます。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=relay!../images/ws_lesson4/upcoming.jpg */ \"u1xM\"),\n      \"alt\": \"relay\"\n    }\n  })], 1), _c('p', [_vm._v(\"少し前のparachainは登録しておくべきです。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=relay2!../images/ws_lesson4/parachains.jpg */ \"J1WT\"),\n      \"alt\": \"relay2\"\n    }\n  })], 1), _c('p', [_vm._v(\"そして、ブロックの生産を開始する。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=relay3!../images/ws_lesson4/parachains2.jpg */ \"903m\"),\n      \"alt\": \"relay3\"\n    }\n  })], 1), _c('p', [_vm._v(\"次のステップとして、parachain間でメッセージをやり取りするためのHRMPチャネルを作成しましょう。relaychainのページにある\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sudo\")]), _vm._v(\"モジュールコールを使ってみます。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=hrmp!../images/ws_lesson4/hrmp.jpg */ \"F2Da\"),\n      \"alt\": \"hrmp\"\n    }\n  })], 1), _c('p', [_vm._v(\"チャネルができると、XCMコールが使えるようになります。\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalogXcm\")]), _vm._v(\"パレット（\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\"パレットのXCM版）を使ってみましょう。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=datalogXcmSend!../images/ws_lesson4/datalogXcmSend.jpg */ \"UbU3\"),\n      \"alt\": \"datalogXcmSend\"\n    }\n  })], 1), _c('p', [_vm._v(\"第2パラダイムのメッセージの結果として、\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\" パレットが呼び出され、データがチェーンに書き込まれます。\")]), _c('p', [_c('g-image', {\n    attrs: {\n      \"src\": __webpack_require__(/*! !assets-loader?alt=datalogXcmRecv!../images/ws_lesson4/datalogXcmRecv.jpg */ \"RcY6\"),\n      \"alt\": \"datalogXcmRecv\"\n    }\n  })], 1), _c('p', [_vm._v(\"結果として、この例は、XCMが標準的なRobonomicsパレットのクロスチェーン使用に対して、どのように使用できるかを示しています。\")])], 1);\n};\n\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "NFY0":
/*!*********************************************************************************************************************!*\
  !*** ./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"f+LG\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "dcFk":
/*!*****************************************************************!*\
  !*** ./docs/ja/wschool2021-robonomics-parachain-in-practice.md ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=63e0a4e1& */ \"qC1y\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"NFY0\");\n/* harmony import */ var _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"qoQ3\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "efeB":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 4, 実践でのRobonomics parachain\",\n  \"contributors\": [\"KiichiSugihara\"],\n  \"translated\": true\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "f+LG":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Asciinema_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/Asciinema.vue */ \"+Gqu\");\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  Asciinema: _components_Asciinema_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "qC1y":
/*!************************************************************************************************!*\
  !*** ./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=63e0a4e1& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=template&id=63e0a4e1& */ \"D+wv\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_template_id_63e0a4e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?");

/***/ }),

/***/ "qoQ3":
/*!**************************************************************************************************************************!*\
  !*** ./docs/ja/wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./wschool2021-robonomics-parachain-in-practice.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"efeB\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_wschool2021_robonomics_parachain_in_practice_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/wschool2021-robonomics-parachain-in-practice.md?");

/***/ })

}]);