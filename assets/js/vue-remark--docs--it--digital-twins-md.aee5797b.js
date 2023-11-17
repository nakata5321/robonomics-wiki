(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--it--digital-twins-md"],{

/***/ "B3Ix":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"524ceff2-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/digital-twins.md?vue&type=template&id=37306193 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('br'), _c('strong', [_vm._v(\"Immagina di avere un dispositivo o un sistema complicato che ha diversi moduli da mantenere e richiede alcuni account per essere utilizzato. Per tenerli tutti in un unico posto o per codificare alcune funzionalità con account separati o, ad esempio, per impostare diverse origini di dati per diversi flussi di informazioni, viene utilizzato il modulo Gemello digitale.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Dev Node\"\n    }\n  }, [_c('p', [_vm._v(\"  Si prega di prestare attenzione al fatto che questi tutorial vengono dimostrati su un'istanza locale di Robonomics Node. Configura la tua con \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/run-dev-node\"\n    }\n  }, [_vm._v(\"queste istruzioni\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"panoramica-della-teoria\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#panoramica-della-teoria\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Panoramica della teoria\")]), _c('p', [_vm._v(\"Qualsiasi account può creare e gestire un Gemello digitale. Il Gemello può essere immaginato come una sorta di tabella con i seguenti contenuti:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"DT id\")]), _c('th', [_vm._v(\"Topic Name\")]), _c('th', [_vm._v(\"Source\")])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"0\")]), _c('td', [_vm._v(\"0x00...000\")]), _c('td', [_vm._v(\"4Gz...hQJ\")])]), _c('tr', [_c('td', [_vm._v(\"1\")]), _c('td', [_vm._v(\"0x00...001\")]), _c('td', [_vm._v(\"4GVi...Bn\")])]), _c('tr', [_c('td'), _c('td', [_vm._v(\"0x00...002\")]), _c('td', [_vm._v(\"4Hm...vLS\")])]), _c('tr', [_c('td'), _c('td', [_vm._v(\"0x00......\")]), _c('td', [_vm._v(\"4HQ...RQY\")])]), _c('tr', [_c('td', [_vm._v(\"n\")]), _c('td', [_vm._v(\"0xFF...FFF\")]), _c('td', [_vm._v(\"4Hw...CyK\")])])])]), _c('p', [_vm._v(\"Dove:\")]), _c('ul', [_c('li', [_c('strong', [_vm._v(\"DT id\")]), _vm._v(\" è un indice di Gemello digitale univoco non firmato.\")]), _c('li', [_c('strong', [_vm._v(\"Topic name\")]), _vm._v(\" è un dato esadecimale \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\" o ASCII di lunghezza 32 byte, come \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/launch\"\n    }\n  }, [_c('code', {\n    pre: true\n  }, [_vm._v(\"Lancio\")])]), _vm._v(\" parametro estrinseco. \\nAd esempio: \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0x1234....FF\")]), _vm._v(\" o \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"hello.parachain.robonomics.world\")]), _vm._v(\".\")]), _c('li', [_c('strong', [_vm._v(\"Source\")]), _vm._v(\" - è un indirizzo di Account.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Topics\"\n    }\n  }, [_c('p', [_vm._v(\"  Come discusso in precedenza nella panoramica dell'estrinseco di lancio, l'\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\" può essere rappresentato come un CID IPFS codificato (vedi\\n  \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_qm_hash_to_32_bytes\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"strumento Python\")]), _vm._v(\" per questo).\\n  Pertanto, i topic possono essere utilizzati anche come archivio dati, ad esempio, una descrizione del modulo di un Gemello.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"crea-gemello-digitale\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#crea-gemello-digitale\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Crea Gemello digitale\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-vai-a-developer---extrinsics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-vai-a-developer---extrinsics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Vai a Developer -> Extrinsics\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/extrinsics.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-scegli-digitaltwin---create-dal-menu-a-discesa-degli-estrinseci-possibili\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-scegli-digitaltwin---create-dal-menu-a-discesa-degli-estrinseci-possibili\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. Scegli digitalTwin -> create dal menu a discesa degli estrinseci possibili\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/twin-create.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Invia la transazione. Qui non sono necessari parametri per creare un Gemello. Sarà assegnato un indice e solo il proprietario del Gemello digitale sarà in grado di aggiungere/modificare i topic del Gemello da questo momento in poi.\")]), _c('p', [_vm._v(\"L'ID del Gemello può essere trovato nella pagina di panoramica dell'Esploratore.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/create-log.jpg\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"aggiungi-topic\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#aggiungi-topic\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Aggiungi Topic\")]), _c('h3', {\n    attrs: {\n      \"id\": \"scegli-digitaltwin---setsource-dal-menu-a-discesa-degli-estrinseci-possibili\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#scegli-digitaltwin---setsource-dal-menu-a-discesa-degli-estrinseci-possibili\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Scegli digitalTwin -> setSource dal menu a discesa degli estrinseci possibili\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/set-topic.jpg\"\n    }\n  }), _c('ul', [_c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"id\")]), _vm._v(\" - Digital Twin ID, che è stato ottenuto sulla pagina Esplorar.\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"topic\")]), _vm._v(\" - nome del topic \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"H256\")]), _vm._v(\" precedentemente discusso. In questa immagine è una stringa di 32 simboli.\")]), _c('li', [_c('code', {\n    pre: true\n  }, [_vm._v(\"source\")]), _vm._v(\" - indirizzo dell'account da associare al topic.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Overwrite\"\n    }\n  }, [_c('p', [_vm._v(\"  Fai attenzione che il topic può essere sovrascritto con un altro indirizzo di origine se necessario.\")])]), _c('p', [_vm._v(\"Firma e invia l'estrinseco.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"explore\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#explore\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Explore\")]), _c('p', [_vm._v(\"Puoi trovare tutte le informazioni sui Gemelli digitali esistenti nel modulo di archiviazione \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"digitalTwin\")]), _vm._v(\" dello stato della catena in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"eveloper -> Chain state\")]), _vm._v(\".\")]), _c('ul', [_c('li', [_vm._v(\"Numero totale di Gemelli - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"total()\")]), _vm._v(\";\")]), _c('li', [_vm._v(\"Proprietario del Gemello digitale - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"owner(u32)\")]), _vm._v(\";\")]), _c('li', [_vm._v(\"Informazioni sui topic di un Gemello digitale - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"digitalTwin(u32)\")]), _vm._v(\".\")])]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"digital-twin/chain-state.jpg\"\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22524ceff2-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "HkiA":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "IgZk":
/*!**************************************************************************************!*\
  !*** ./docs/it/digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"HkiA\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?");

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

/***/ "Uzwe":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/it/digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Gemelli digitali\",\n  \"contributors\": [\"nakata5321\", \"PaTara43\"],\n  \"tools\": [\"Robonomics 2.3.0 https://github.com/airalab/robonomics\", \"robonomics_interface 1.3.6 https://github.com/Multi-Agent-io/robonomics-interface\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "hMRp":
/*!**********************************!*\
  !*** ./docs/it/digital-twins.md ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-twins.md?vue&type=template&id=37306193 */ \"qz3p\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digital-twins.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"IgZk\");\n/* harmony import */ var _digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"xtBd\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_digital_twins_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?");

/***/ }),

/***/ "qz3p":
/*!****************************************************************!*\
  !*** ./docs/it/digital-twins.md?vue&type=template&id=37306193 ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"524ceff2-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=template&id=37306193 */ \"B3Ix\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_524ceff2_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_template_id_37306193__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?");

/***/ }),

/***/ "xtBd":
/*!*******************************************************************************************!*\
  !*** ./docs/it/digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./digital-twins.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Uzwe\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_digital_twins_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/it/digital-twins.md?");

/***/ })

}]);