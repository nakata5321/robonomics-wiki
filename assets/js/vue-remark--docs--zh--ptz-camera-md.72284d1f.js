(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--zh--ptz-camera-md"],{

/***/ "423n":
/*!*******************************!*\
  !*** ./docs/zh/ptz-camera.md ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=template&id=196c0094 */ \"U4Kp\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"BRPy\");\n/* harmony import */ var _ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"e0vg\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?");

/***/ }),

/***/ "8bE6":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/zh/ptz-camera.md?vue&type=template&id=196c0094 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"本文介绍了在Home Assistant中设置PTZ摄像头的过程。\\n将使用ONVIF协议。这需要一个本地摄像机账户。\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\"\n    }\n  }, [_vm._v(\"\\n本文不涵盖设置本地摄像机账户的过程。\\n\")]), _c('p', [_vm._v(\"要求:\")]), _c('ul', [_c('li', [_vm._v(\"PTZ camera\")]), _c('li', [_vm._v(\"本地摄像机账户\")]), _c('li', [_vm._v(\"摄像机IP地址\")]), _c('li', [_vm._v(\"配置的Home Assistant\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"onvif集成\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#onvif%E9%9B%86%E6%88%90\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"ONVIF集成\")]), _c('p', [_vm._v(\"让我们从\"), _c('strong', [_vm._v(\"ONVIF集成\")]), _vm._v(\"的安装开始。\")]), _c('p', [_vm._v(\"转到\\\"设置\\\"Settings\\\"\\\"Devices & Services\\\"，然后点击\\\"ADD INTEGRATION\\\"按钮。\\n输入\\\"ONVIF\\\"并选择集成。您将看到下一个窗口。\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/onvifsetup.jpg\"\n    }\n  }), _c('p', [_vm._v(\"点击\\\"Submit\\\"按钮。它将尝试自动搜索您的摄像机。如果成功， \\n从列表中选择您的摄像机并填写空白字段。 \\n否则，您必须手动填写所有字段。您将看到以下窗口。\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/onvifconfig.jpg\"\n    }\n  }), _c('p', [_vm._v(\"填写空白处:\")]), _c('ul', [_c('li', [_vm._v(\"Name - 为您的摄像机命名\")]), _c('li', [_vm._v(\"Host - 提供您的摄像机IP地址\")]), _c('li', [_vm._v(\"Port - 通常是2020年最常见的，但您的摄像机供应商可能会更改它\")]), _c('li', [_vm._v(\"Username - 为您的摄像机本地账户编写用户名\"), _c('ul', [_c('li', [_vm._v(\"Password - 为您的摄像机本地账户编写密码\")])])])]), _c('p', [_vm._v(\"然后点击\\\"Submit\\\"。为您的摄像机选择一个区域，然后点击\\\"Finish\\\"。\")]), _c('h2', {\n    attrs: {\n      \"id\": \"将摄像机控制添加到仪表板\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%B0%86%E6%91%84%E5%83%8F%E6%9C%BA%E6%8E%A7%E5%88%B6%E6%B7%BB%E5%8A%A0%E5%88%B0%E4%BB%AA%E8%A1%A8%E6%9D%BF\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"将摄像机控制添加到仪表板\")]), _c('p', [_vm._v(\"现在您已经完全设置好摄像机，可以将其流和控制按钮添加到仪表板。\")]), _c('p', [_vm._v(\"转到仪表板并开始创建一个新卡片。选择\\\"Picture Glance\\\"。\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/glance.jpg\"\n    }\n  }), _c('p', [_vm._v(\"填写数据:\")]), _c('ul', [_c('li', [_vm._v(\"Title - 选择摄像机图像标题\")]), _c('li', [_vm._v(\"Camera Entity - 从下拉列表中选择一个摄像机实体\")]), _c('li', [_vm._v(\"Camera View - 选择\\\"live\\\"以减少延迟\")])]), _c('p', [_vm._v(\"接下来，通过按下左下角的按钮切换到\\\"Code Editor\\\"模式。您将看到以下代码:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-shell\"\n    }\n  }, [_vm._v(\"camera_view: live\\ntype: picture-glance\\ntitle: Kitchen\\nimage: https://demo.home-assistant.io/stub_config/kitchen.png\\nentities: []\\ncamera_image: camera.tapo_mainstream\")])]), _c('p', [_vm._v(\"根据下面的示例替换\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"entities: []\")]), _vm._v(\"的内容（\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"<YOUR_CAMERA_ENTITY>\")]), _vm._v(\"与\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"camera_image\")]), _vm._v(\"参数相同）:\")]), _c('code-helper', {\n    attrs: {\n      \"copy\": \"\"\n    }\n  }, [_c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"entities:\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        pan: LEFT\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Pan Left\\n    show_state: false\\n    icon: 'mdi:arrow-left'\\n    show_icon: true\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        tilt: UP\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Tilt Up\\n    icon: 'mdi:arrow-up'\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        tilt: DOWN\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Tilt Down\\n    icon: 'mdi:arrow-down'\\n  - entity: <YOUR_CAMERA_ENTITY>\\n    tap_action:\\n      action: call-service\\n      service: onvif.ptz\\n      service_data:\\n        entity_id: <YOUR_CAMERA_ENTITY>\\n        pan: RIGHT\\n        speed: 1\\n        distance: 0.3\\n        move_mode: ContinuousMove\\n    name: Pan Right\\n    icon: 'mdi:arrow-right'\\n    show_icon: true\\n\")])])]), _c('p', [_vm._v(\"就这样。现在您应该在仪表板上看到PTZ摄机卡片以及控制按钮.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"故障排除\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"故障排除\")]), _c('p', [_vm._v(\"如果您正在使用Home Assistant Core，但是您没有看到来自摄像头的流，请安装\\\"stream\\\"和\\\"FFMPEG\\\"集成。 \\n要做到这一点，您应该在configuration.yaml的末尾添加\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"stream:\")]), _vm._v(\"和\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ffmpeg:\")]), _vm._v(\"字符串。\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "BRPy":
/*!***********************************************************************************!*\
  !*** ./docs/zh/ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"nGL8\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?");

/***/ }),

/***/ "U4Kp":
/*!*************************************************************!*\
  !*** ./docs/zh/ptz-camera.md?vue&type=template&id=196c0094 ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=template&id=196c0094 */ \"8bE6\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_template_id_196c0094__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?");

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

/***/ "azge":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/zh/ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"在Home Assistant中进行PTZ摄像机控制\",\n  \"contributors\": [\"nakata5321\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "e0vg":
/*!****************************************************************************************!*\
  !*** ./docs/zh/ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./ptz-camera.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"azge\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_ptz_camera_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?");

/***/ }),

/***/ "nGL8":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/zh/ptz-camera.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/zh/ptz-camera.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);