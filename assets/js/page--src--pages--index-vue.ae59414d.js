(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--pages--index-vue"],{

/***/ "6LUY":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=41db32a0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('Layout', [_c('div', {\n    staticClass: \"intro\"\n  }, [_c('h1', [_vm._v(_vm._s(_vm.$st('Enter title', _vm.$store.state.locale)))]), _c('div', {\n    staticClass: \"intro-description\"\n  }, [_vm._v(_vm._s(_vm.$st('Site Description', _vm.$store.state.locale)))])]), _c('div', {\n    staticClass: \"intro-main-link\"\n  }, [_c('Button', {\n    attrs: {\n      \"label\": _vm.smartHome.name,\n      \"link\": _vm.smartHome.to,\n      \"size\": \"large\"\n    }\n  })], 1), _c('GridLinks', {\n    attrs: {\n      \"links\": _vm.navLinks\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./src/pages/Index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "8Kqe":
/*!******************************************************!*\
  !*** ./src/pages/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ \"IYbh\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/Index.vue?");

/***/ }),

/***/ "IYbh":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Button: () => Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ~/components/Button.vue */ \"Kn2e\")),\n    GridLinks: () => Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ~/components/GridLinks.vue */ \"kcSo\"))\n  },\n  data() {\n    return {\n      navLinks: [\n      // {\n      //   to: '/summary/meet-robonomics/',\n      //   name: 'Enter Nav 1'\n      // },\n      // {\n      //   to: '/summary/basics/',\n      //   name: 'Enter Nav 7'\n      // },\n      // {\n      //   to: '/summary/playground/',\n      //   name: 'Enter Nav 2'\n      // },\n      {\n        to: '/docs/',\n        name: 'Enter Nav 5'\n      }, {\n        to: '/docs/sensors-network-introduction',\n        name: 'Enter Nav 4'\n      }, {\n        to: '/docs/how-to-build-collator-node//',\n        name: 'Enter Nav 3'\n      }\n      // {\n      //   to: '/summary/learn/',\n      //   name: 'Enter Nav 5'\n      // },\n      // {\n      //   to: '/docs/contributing/',\n      //   name: 'Enter Nav 6'\n      // },\n      ],\n\n      smartHome: {\n        to: '/docs/home-assistant-begin/',\n        name: 'Start Smart home'\n      }\n    };\n  },\n  metaInfo() {\n    return {\n      title: this.$st('Enter title', this.$store.state.locale),\n      meta: [{\n        name: \"description\",\n        content: this.$st('Site Description', this.$store.state.locale)\n      }, {\n        property: \"og:url\",\n        content: 'https://wiki.robonomics.network/'\n      }, {\n        property: \"og:title\",\n        content: this.$st('Enter title', this.$store.state.locale)\n      }, {\n        property: \"og:description\",\n        content: this.$st('Site Description', this.$store.state.locale)\n      }, {\n        property: \"og:image\",\n        content: `https://wiki.robonomics.network${__webpack_require__(/*! @images/wiki-og-image-index.png */ \"ppsK\")}`\n      }, {\n        property: \"og:image:width\",\n        content: 1280\n      }, {\n        property: \"og:image:height\",\n        content: 765\n      }, {\n        property: \"og:url\",\n        content: \"https://wiki.robonomics.network\"\n      }, {\n        property: \"og:site_name\",\n        content: \"WIKI ROBONOMICS\"\n      }, {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, {\n        name: \"twitter:title\",\n        content: this.$st('Enter title', this.$store.state.locale)\n      }, {\n        name: \"twitter:description\",\n        content: this.$st('Site Description', this.$store.state.locale)\n      }, {\n        name: \"twitter:image\",\n        content: `https://wiki.robonomics.network${__webpack_require__(/*! @images/wiki-og-image-index.png */ \"ppsK\")}`\n      }, {\n        name: \"twitter:site\",\n        content: \"@AIRA_Robonomics\"\n      }, {\n        name: 'twitter:creator',\n        content: \"@AIRA_Robonomics\"\n      }]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/Index.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "T4H9":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=style&index=0&id=41db32a0&prod&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/Index.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "TON+":
/*!************************************************************************!*\
  !*** ./src/pages/Index.vue?vue&type=template&id=41db32a0&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=41db32a0&scoped=true& */ \"6LUY\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/Index.vue?");

/***/ }),

/***/ "W/Rb":
/*!*******************************************************************************************!*\
  !*** ./src/pages/Index.vue?vue&type=style&index=0&id=41db32a0&prod&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=41db32a0&prod&scoped=true&lang=css& */ \"T4H9\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/pages/Index.vue?");

/***/ }),

/***/ "iyQ6":
/*!*****************************!*\
  !*** ./src/pages/Index.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=41db32a0&scoped=true& */ \"TON+\");\n/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ \"8Kqe\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_41db32a0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=41db32a0&prod&scoped=true&lang=css& */ \"W/Rb\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Index_vue_vue_type_template_id_41db32a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"41db32a0\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/Index.vue?");

/***/ }),

/***/ "ppsK":
/*!***************************************************!*\
  !*** ./src/assets/images/wiki-og-image-index.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/wiki-og-image-index.838895f1.png\";\n\n//# sourceURL=webpack:///./src/assets/images/wiki-og-image-index.png?");

/***/ })

}]);