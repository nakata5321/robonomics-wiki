(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--robonomics-liability-md"],{

/***/ "1soy":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"ae3711d8-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/robonomics-liability.md?vue&type=template&id=bc2b620a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"The package is responsible for receiving \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"New Liability\")]), _vm._v(\" events (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"listener\")]), _vm._v(\" node) and playing topics from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"objective\")]), _vm._v(\" field (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"executor\")]), _vm._v(\" node).\\nThe launch file also include \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ipfs_channel\")]), _vm._v(\" node and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"signer\")]), _vm._v(\" node.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"ros-parameters\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ros-parameters\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"ROS Parameters\")]), _c('h3', {\n    attrs: {\n      \"id\": \"web3_http_provider\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#web3_http_provider\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~web3_http_provider\")]), _c('p', [_vm._v(\"Web3 HTTP provider address. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"http://127.0.0.1:8545\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"web3_ws_provider\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#web3_ws_provider\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~web3_ws_provider\")]), _c('p', [_vm._v(\"Web3 WebSocket provider address. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ws://127.0.0.1:8546\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"ipfs_http_provider\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ipfs_http_provider\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~ipfs_http_provider\")]), _c('p', [_vm._v(\"IPFS HTTP provider address. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"http://127.0.0.1:5001\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"ipfs_swarm_connect_addresses\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ipfs_swarm_connect_addresses\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~ipfs_swarm_connect_addresses\")]), _c('p', [_vm._v(\"IPFS nodes to connect to. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"ipfs_public_providers\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ipfs_public_providers\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~ipfs_public_providers\")]), _c('p', [_vm._v(\"A public IPFS node to pin result files. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"factory_contract\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#factory_contract\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~factory_contract\")]), _c('p', [_vm._v(\"The name of the liability factory. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"factory.5.robonomics.eth\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"lighthouse_contract\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#lighthouse_contract\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~lighthouse_contract\")]), _c('p', [_vm._v(\"The name of a lighthouse you are working on. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"airalab.lighthouse.5.robonomics.eth\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"enable_executor\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#enable_executor\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~enable_executor\")]), _c('p', [_vm._v(\"Enable or disable executor node. If it's \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"false\")]), _vm._v(\", no topics from objective would be published. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"boolean\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"true\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"master_check_interval\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#master_check_interval\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~master_check_interval\")]), _c('p', [_vm._v(\"Period (in seconds) to check master for new topic publications. It's necessary for the Recorder, which records all the topics a CPS publishes. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"double\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0.1\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"recording_topics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#recording_topics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~recording_topics\")]), _c('p', [_vm._v(\"List of topics name separated by comma. It allows you to specify which topics would be recorded. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"ens_contract\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ens_contract\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~ens_contract\")]), _c('p', [_vm._v(\"The checksumed address of ENS registry. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"keyfile\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#keyfile\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~keyfile\")]), _c('p', [_vm._v(\"Path to keyfile. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")]), _vm._v(\". \"), _c('strong', [_vm._v(\"Required parameter\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"keyfile_password_file\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#keyfile_password_file\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"~keyfile_password_file\")]), _c('p', [_vm._v(\"Path to a file with password for the keyfile. The type is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"string\")]), _vm._v(\", defaults to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"\\\"\\\"\")]), _vm._v(\". \"), _c('strong', [_vm._v(\"Required parameter\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"subscribed-topics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#subscribed-topics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Subscribed topics\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanethsigningdemand-robonomics_msgsdemand\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanethsigningdemand-robonomics_msgsdemand\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/eth/signing/demand (robonomics_msgs/Demand)\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#demand\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Demand\")]), _vm._v(\" message to sign and send further to IPFS channel\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanethsigningoffer-robonomics_msgsoffer\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanethsigningoffer-robonomics_msgsoffer\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/eth/signing/offer (robonomics_msgs/Offer)\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#offer\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Offer\")]), _vm._v(\" message to sign and send further to IPFS channel\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanethsigningresult-robonomics_msgsresult\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanethsigningresult-robonomics_msgsresult\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/eth/signing/result (robonomics_msgs/Result)\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#result\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Result\")]), _vm._v(\" message to sign and send further to IPFS channel\")]), _c('h2', {\n    attrs: {\n      \"id\": \"published-topics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#published-topics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Published topics\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanincomingdemand-robonomics_msgsdemand\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanincomingdemand-robonomics_msgsdemand\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/incoming/demand (robonomics_msgs/Demand)\")]), _c('p', [_vm._v(\"Contains a \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#demand\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Demand\")]), _vm._v(\" message which was read from IPFS channel\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanincomingoffer-robonomics_msgsoffer\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanincomingoffer-robonomics_msgsoffer\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/incoming/offer (robonomics_msgs/Offer)\")]), _c('p', [_vm._v(\"Contains a \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#offer\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Offer\")]), _vm._v(\" message which was read from IPFS channel\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityinfochanincomingresult-robonomics_msgsresult\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityinfochanincomingresult-robonomics_msgsresult\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/infochan/incoming/result (robonomics_msgs/Result)\")]), _c('p', [_vm._v(\"Contains a \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/market-messages#result\"\n    }\n  }, [_vm._v(\"robonomics_msgs/Result\")]), _vm._v(\" message which was read from IPFS channel\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityincoming-robonomics_liabilityliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityincoming-robonomics_liabilityliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/incoming (robonomics_liability/Liability)\")]), _c('p', [_vm._v(\"Contains all the information about the last created \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg\"\n    }\n  }, [_vm._v(\"robonomics_liability/Liability\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityready-robonomics_liabilityliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityready-robonomics_liabilityliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/ready (robonomics_liability/Liability)\")]), _c('p', [_vm._v(\"Signals when a \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg\"\n    }\n  }, [_vm._v(\"robonomics_liability/Liability\")]), _vm._v(\"is ready for execution\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilitycomplete-robonomics_liabilityliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilitycomplete-robonomics_liabilityliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/complete (robonomics_liability/Liability)\")]), _c('p', [_vm._v(\"Signals when a \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilityliabilitymsg\"\n    }\n  }, [_vm._v(\"robonomics_liability/Liability\")]), _vm._v(\" has done its job\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityfinalized-std_msgsstring\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityfinalized-std_msgsstring\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/finalized (std_msgs/String)\")]), _c('p', [_vm._v(\"Signals when a liability has been finalized\")]), _c('h2', {\n    attrs: {\n      \"id\": \"services\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#services\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Services\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilitystart-robonomics_liabilitystartliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilitystart-robonomics_liabilitystartliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/start (robonomics_liability/StartLiability)\")]), _c('p', [_vm._v(\"The service tells executor to play topics from the objective. It's required to pass a liability address (\"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv\"\n    }\n  }, [_vm._v(\"robonomics_liability/StartLiability\")]), _vm._v(\"), which you can get from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/liability/ready\")]), _vm._v(\" topic\")]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityfinish-robonomics_liabilityfinishliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityfinish-robonomics_liabilityfinishliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/finish (robonomics_liability/FinishLiability)\")]), _c('p', [_vm._v(\"CPS should call the service after performing the task. The input is \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilityfinishiabilitysrv\"\n    }\n  }, [_vm._v(\"robonomics_liability/FinishLiability\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityrestart-robonomics_liabilitystartliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityrestart-robonomics_liabilitystartliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/restart (robonomics_liability/StartLiability)\")]), _c('p', [_vm._v(\"The service allows to restart a liability after the system shutdown. The input is \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv\"\n    }\n  }, [_vm._v(\"robonomics_liability/StartLiability\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityresume-robonomics_liabilitystartliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityresume-robonomics_liabilitystartliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/resume (robonomics_liability/StartLiability)\")]), _c('p', [_vm._v(\"The service allows to resume a liability from the last timestamp available in the persistence store. The input is \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilitystartliabilitysrv\"\n    }\n  }, [_vm._v(\"robonomics_liability/StartLiability\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"liabilityread-robonomics_liabilityreadliability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#liabilityread-robonomics_liabilityreadliability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"/liability/read (robonomics_liability/ReadLiability)\")]), _c('p', [_vm._v(\"The service returns all the data about a liability by its address. The input is \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-liability-messages#robonomics_liabilityreadliabilitysrv\"\n    }\n  }, [_vm._v(\"robonomics_liability/ReadLiability\")])])]);\n};\n\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22ae3711d8-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "GDOW":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/robonomics-liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "MPYj":
/*!************************************************************************!*\
  !*** ./docs/ko/robonomics-liability.md?vue&type=template&id=bc2b620a& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"ae3711d8-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-liability.md?vue&type=template&id=bc2b620a& */ \"1soy\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_ae3711d8_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?");

/***/ }),

/***/ "N32l":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/robonomics-liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics Liability\",\n  \"contributors\": [\"ensrationis\", \"akru\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "h3Qv":
/*!*****************************************!*\
  !*** ./docs/ko/robonomics-liability.md ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robonomics-liability.md?vue&type=template&id=bc2b620a& */ \"MPYj\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _robonomics_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robonomics-liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"iNdB\");\n/* harmony import */ var _robonomics_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./robonomics-liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"xYPN\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _robonomics_liability_md_vue_type_template_id_bc2b620a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _robonomics_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_robonomics_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _robonomics_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_robonomics_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?");

/***/ }),

/***/ "iNdB":
/*!*********************************************************************************************!*\
  !*** ./docs/ko/robonomics-liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"GDOW\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?");

/***/ }),

/***/ "xYPN":
/*!**************************************************************************************************!*\
  !*** ./docs/ko/robonomics-liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"N32l\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/robonomics-liability.md?");

/***/ })

}]);