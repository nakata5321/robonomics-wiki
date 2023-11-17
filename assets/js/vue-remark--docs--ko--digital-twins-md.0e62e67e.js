(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--digital-twins-md"],{

/***/ "7TbE":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"디지털 트윈\",\n  \"contributors\": [\"nakata5321\", \"PaTara43\"],\n  \"tools\": [\"Robonomics 2.3.0 https://github.com/airalab/robonomics\", \"robonomics_interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "AiH+":
/*!*******************************************************************************************!*\
  !*** ./docs/ko/digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"7TbE\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?");

/***/ }),

/***/ "H9Cl":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/digital-twins.md?vue&type=template&id=4b5093ae ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('br'), _c('strong', [_vm._v(\"여러 모듈을 유지 관리하고 몇 가지 계정 사용해야 하는 복잡한 장치나 시스템을 상상해보세요. 이 모든 것을 한 곳에 유지하거나 별도의 계정으로 일부 기능을 인코딩하거나 예를 들어 다른 정보 흐름에 대해 다른 데이터로그 소스를 설정하려면 디지털 트윈 모듈을 사용해야 합니다.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Dev Node\"\n    }\n  }, [_c('p', [_vm._v(\"  이 튜토리얼 및 다음 튜토리얼은 Robonomics 노드의 로컬 인스턴스에서 보여줍니다. \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/run-dev-node\"\n    }\n  }, [_vm._v(\"이 지침\")]), _vm._v(\"을 사용하여 자신의 인스턴스를 설정하세요.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"이론-개요\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%9D%B4%EB%A1%A0-%EA%B0%9C%EC%9A%94\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"이론 개요\")]), _c('p', [_vm._v(\"어떤 계정이든 디지털 트윈을 생성하고 관리할 수 있습니다. 트윈은 다음 내용을 포함하는 테이블로 상상할 수 있습니다:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"DT id\")]), _c('th', [_vm._v(\"Topic Name\")]), _c('th', [_vm._v(\"Source\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"0\")]), _c('td', [_vm._v(\"0x00...000\")]), _c('td', [_vm._v(\"4Gz...hQJ\")])]), _c('tr', [_c('td', [_vm._v(\"1\")]), _c('td', [_vm._v(\"0x00...001\")]), _c('td', [_vm._v(\"4GVi...Bn\")])]), _c('tr', [_c('td'), _c('td', [_vm._v(\"0x00...002\")]), _c('td', [_vm._v(\"4Hm...vLS\")])]), _c('tr', [_c('td'), _c('td', [_vm._v(\"0x00......\")]), _c('td', [_vm._v(\"4HQ...RQY\")])]), _c('tr', [_c('td', [_vm._v(\"n\")]), _c('td', [_vm._v(\"0xFF...FFF\")]), _c('td', [_vm._v(\"4Hw...CyK\")])])])]), _c('p', [_vm._v(\"여기서:\")]), _c('ul', [_c('li', [_c('strong', [_vm._v(\"DT id\")]), _vm._v(\"는 부호 없는 정수로 고유한 디지털 트윈 인덱스입니다.\")]), _c('li', [_c('strong', [_vm._v(\"Topic name\")]), _vm._v(\" is a hex \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\" or ASCII data of 32 bytes length, same as \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/launch\"\n    }\n  }, [_c('code', {\n    pre: true\n  }, [_vm._v(\"실행\")])]), _vm._v(\" extrinsic parameter. \\n예를 들어: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0x1234....FF\")]), _vm._v(\" 또는 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"hello.parachain.robonomics.world\")]), _vm._v(\"입니다.\")]), _c('li', [_c('strong', [_vm._v(\"Source\")]), _vm._v(\" - 는 어떤 계정 주소입니다.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Topics\"\n    }\n  }, [_c('p', [_vm._v(\"  이전에 외부 개요 실행에서 논의한 대로 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\"은 인코딩된 IPFS CID로 표시될 수 있습니다(\"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_qm_hash_to_32_bytes\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python 도구\")]), _vm._v(\"). 따라서 주제는 Twin의 모듈 설명과 같은 일부 데이터 저장소로도 사용될 수 있습니다.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"디지털-트윈-생성하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EB%94%94%EC%A7%80%ED%84%B8-%ED%8A%B8%EC%9C%88-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"디지털 트윈 생성하기\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-개발자---extrinsics로-이동하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-%EA%B0%9C%EB%B0%9C%EC%9E%90---extrinsics%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. 개발자 -> Extrinsics로 이동하기\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/extrinsics.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-드롭다운-목록에서-digitaltwin---create를-선택하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-%EB%AA%A9%EB%A1%9D%EC%97%90%EC%84%9C-digitaltwin---create%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. 드롭다운 목록에서 digitalTwin -> create를 선택하기\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/twin-create.jpg\"\n    }\n  }), _c('p', [_vm._v(\"트랜잭션 제출하기. 여기서는 트윈을 생성하기 위해 매개변수가 필요하지 않습니다. 트윈은 인덱스가 부여되며 이후로는 디지털 트윈 소유자만 트윈의 주제를 추가/수정할 수 있습니다.\")]), _c('p', [_vm._v(\"트윈 ID는 탐색기 개요 페이지에서 찾을 수 있습니다.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/create-log.jpg\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"주제-추가하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%A3%BC%EC%A0%9C-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"주제 추가하기\")]), _c('h3', {\n    attrs: {\n      \"id\": \"드롭다운-목록에서-digitaltwin---setsource를-선택하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-%EB%AA%A9%EB%A1%9D%EC%97%90%EC%84%9C-digitaltwin---setsource%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"드롭다운 목록에서 digitalTwin -> setSource를 선택하기\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/set-topic.jpg\"\n    }\n  }), _c('ul', [_c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"id\")]), _vm._v(\" - 탐색기 페이지에서 얻은 디지털 트윈 ID.\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"topic\")]), _vm._v(\" - 이전에 논의한 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\" 주제 이름입니다. 이 그림에서는 32자리 문자열입니다.\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"source\")]), _vm._v(\" - 주제와 연결할 계정 주소입니다.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Overwrite\"\n    }\n  }, [_c('p', [_vm._v(\"  주제가 필요한 경우 다른 소스 주소로 덮어쓸 수 있습니다.\")])]), _c('p', [_vm._v(\"extrinsic에 서명하고 제출하세요.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"탐색하기\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%ED%83%90%EC%83%89%ED%95%98%EA%B8%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"탐색하기\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"Developer -> Chain state\")]), _vm._v(\" 스토리지 모듈 \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"digitalTwin\")]), _vm._v(\"에서 기존 디지털 트윈에 대한 모든 정보를 찾을 수 있습니다.\")]), _c('ul', [_c('li', [_vm._v(\"총 트윈 수 - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"total()\")]), _vm._v(\";\")]), _c('li', [_vm._v(\"디지털 트윈 소유자 - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"owner(u32)\")]), _vm._v(\";\")]), _c('li', [_vm._v(\"디지털 트윈의 주제에 대한 정보 - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"digitalTwin(u32)\")]), _vm._v(\".\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/chain-state.jpg\"\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "IYdt":
/*!****************************************************************!*\
  !*** ./docs/ko/digital-twins.md?vue&type=template&id=4b5093ae ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=template&id=4b5093ae */ \"H9Cl\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?");

/***/ }),

/***/ "MhsV":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "WmRv":
/*!**********************************!*\
  !*** ./docs/ko/digital-twins.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-twins.md?vue&type=template&id=4b5093ae */ \"IYdt\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"o3nw\");\n/* harmony import */ var _digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"AiH+\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _digital_twins_md_vue_type_template_id_4b5093ae__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?");

/***/ }),

/***/ "o3nw":
/*!**************************************************************************************!*\
  !*** ./docs/ko/digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"MhsV\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/digital-twins.md?");

/***/ })

}]);