(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--pt--liability-md"],{

/***/ "9qOW":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Liability\",\n  \"contributors\": [\"PaTara43\"],\n  \"translated\": false,\n  \"tools\": [\"Robonomics 2.3.0 https://github.com/airalab/robonomics\", \"robonomics_interface 1.3.5 https://github.com/Multi-Agent-io/robonomics-interface\"]\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/pt/liability.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "G7xU":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/liability.md?vue&type=template&id=5b2ea418& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"To turn robots into economic agents one needs a contract tool for this. Meet Liability - Robonomics pallet implementing\\ncontracts between parachain accounts!\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Dev Node\"\n    }\n  }, [_c('p', [_vm._v(\"  Please pay attention that this tutorial is demonstrated on a local instance of Robonomics Node. Set up yours with \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/run-dev-node\"\n    }\n  }, [_vm._v(\"these instructions\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"theory-overview\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#theory-overview\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Theory Overview\")]), _c('p', [_vm._v(\"Back on the Ethereum there was quite a complicated structure of liability interaction. You can get acquainted with it \\n\"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/robonomics-how-it-works\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". Nowadays things are a bit easier with Kusama!\")]), _c('h3', {\n    attrs: {\n      \"id\": \"negotiations\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#negotiations\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Negotiations\")]), _c('p', [_vm._v(\"To sign a contract the two sides need to negotiate first. This may be done several ways, including \\n\"), _c('a', {\n    attrs: {\n      \"href\": \"https://blog.ipfs.tech/25-pubsub/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"IPFS PubSub \")]), _vm._v(\" or Robonomics PubSub. A sample of Python code using Robonomics PubSub is \\npresented \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/usage.html#pubsub\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". \")]), _c('p', [_vm._v(\"Offer and demand are messages containing two main characteristics of a contract: \"), _c('strong', [_vm._v(\"job description\")]), _vm._v(\" and \"), _c('strong', [_vm._v(\"price\")]), _vm._v(\". Message\\nformat is to be designed by user for each specific application. It is not that important in the negotiations process to follow\\na strict format rule. The possible flow is presented in the picture below.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/negotiations.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"PubSub\"\n    }\n  }, [_c('p', [_vm._v(\"  Note that PubSub is an open protocol, so no sensible data should be transferred. For this you should use other protocols.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"signatures\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#signatures\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Signatures\")]), _c('p', [_vm._v(\"When negotiations are successfully over, each side needs to sign its so-called agreement named a signature. This is a \\nmessage containing job description and price \"), _c('strong', [_vm._v(\"in a specific format\")]), _vm._v(\" signed with a private key of the account. There is a \\n\"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.Liability.sign_liability\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python tool\")]), _vm._v(\" for that as well.\")]), _c('ul', [_c('li', [_vm._v(\"Job description is called \"), _c('strong', [_vm._v(\"technics\")]), _vm._v(\". This is a launch-like 32 bytes long string which may be an encoded IPFS CID.\")]), _c('li', [_vm._v(\"Price is called \"), _c('strong', [_vm._v(\"economics\")]), _vm._v(\". This is an XRT decimal - Weiner. 1 Weiner = 10**-9 XRT.\")])]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"32 bytes\"\n    }\n  }, [_c('p', [_vm._v(\"  One may obtain an \"), _c('a', {\n    attrs: {\n      \"href\": \"https://ipfs.tech/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"IPFS\")]), _vm._v(\" CID formatted in a proper way with the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_qm_hash_to_32_bytes\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python library\")]), _vm._v(\".\\n  When using the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sign_liability\")]), _vm._v(\" function, no need to transform the hash, it will be done automatically.\")])]), _c('p', [_vm._v(\"Following the coffee example:\")]), _c('ol', [_c('li', [_vm._v(\"The task is a JSON\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-json\"\n    }\n  }, [_vm._v(\"{\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"task\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"make_espresso\\\"\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"description\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Make one cup of espresso\\\"\")]), _vm._v(\"}\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Its IPFS CID is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"QmP17mWKtQtq2Gq6qZAggPRrho3sVjQGBpXZ8KZiQ57FDi\")])]), _c('li', [_vm._v(\"So the \"), _c('strong', [_vm._v(\"technics\")]), _vm._v(\" (transformed CID) is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0x09daaa8055722a6894951b1273e807f8a46628efeec46805f0228ace230bd5a9\")])]), _c('li', [_c('strong', [_vm._v(\"Economics\")]), _vm._v(\" is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1.5 XRT\")]), _vm._v(\".\")])]), _c('p', [_vm._v(\"When signed, it's time to create a liability! This may be done by one of the sides (either promisee or promisor) or by a \\n3rd-party account of a so-called provider.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"create-liability\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#create-liability\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Create Liability\")]), _c('h3', {\n    attrs: {\n      \"id\": \"preparations\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#preparations\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Preparations\")]), _c('p', [_vm._v(\"As have been mentioned earlier, at least two sides are involved in the process. For this example, let's use three and make\\na separated provider for this. Assume that the negotiations took place somehow already.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-create-three-accounts-and-add-funds-to-them\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-create-three-accounts-and-add-funds-to-them\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Create three accounts and add funds to them\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/balances.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Here we have supplied the provider with 100 XRT to sign liability extrinsics, promisee was given 2 XRT to pay for the work.\\nPromisor wasn't granted any funds (except for an existential deposit of at least 1 mXRT).\")]), _c('h3', {\n    attrs: {\n      \"id\": \"1-navigate-to-developer---extrinsics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-navigate-to-developer---extrinsics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Navigate to Developer -> Extrinsics\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/extrinsics.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-choose-liability---create-from-the-dropdown-list-of-possible-extrinsics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-choose-liability---create-from-the-dropdown-list-of-possible-extrinsics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. Choose liability -> create from the dropdown list of possible extrinsics\")]), _c('p', [_vm._v(\"Also choose an account you want to submit the extrinsic with. Fill in all the parameters.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/create.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Signatures\"\n    }\n  }, [_c('p', [_vm._v(\"  Since provider is used here, no need to know seeds of the participants. Only their signatures needed.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"3-submit-transaction\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#3-submit-transaction\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"3. Submit transaction\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/submit.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"4-review-your-liability-in-the-events\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#4-review-your-liability-in-the-events\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"4. Review your liability in the events\")]), _c('p', [_vm._v(\"For this, navigate to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Network -> Explorer\")]), _vm._v(\" and find a list of events on the right. Click a triangle icon to expand.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/new-liability.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Hash\"\n    }\n  }, [_c('p', [_vm._v(\"  The hash may be transformed to an IPFS CID with the same \\n  \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.utils.ipfs_32_bytes_to_qm_hash\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python tool\")]), _vm._v(\".\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"5-storage-exploring\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#5-storage-exploring\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"5. Storage exploring\")]), _c('p', [_vm._v(\"You may also explore some characteristics of the liabilities in storage module \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"liability\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/storage-liability.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Next Index\"\n    }\n  }, [_c('p', [_vm._v(\"  The \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Next Index\")]), _vm._v(\" storage function shows the latest liability index +1, so even though it's \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1\")]), _vm._v(\", liability \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0\")]), _vm._v(\" is explored.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"reports\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#reports\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Reports\")]), _c('p', [_vm._v(\"Image that a coffee has been made and now the coffee machine needs to report it somehow. That's where liability reports\\ncome into scene. As a proof of labour the account adds another IPFS CID as a report content when finalizing the existing\\nliability. This again requires a signature of the promisor.\")]), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Report signature\"\n    }\n  }, [_c('p', [_vm._v(\"  Message signed contains of the existing liability index and the report IPFS CID encoded in 32 bytes representation. Once again,\\n  the \"), _c('a', {\n    attrs: {\n      \"href\": \"https://multi-agent-io.github.io/robonomics-interface/modules.html#robonomicsinterface.Liability.sign_report\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Python tool\")]), _vm._v(\" can help to sign the report.\")])]), _c('p', [_vm._v(\"Keeping with the coffee machine example:\")]), _c('ol', [_c('li', [_vm._v(\"Report is a JSON\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-json\"\n    }\n  }, [_vm._v(\"{\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"report\\\"\")]), _vm._v(\": \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Coffee made! Time to execute - 80 seconds.\\\"\")]), _vm._v(\"}\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Its IPFS CID is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"QmeXCrBuv6cw825JJfSWqNVv28AyjJZW9KReN9wcLQjfCm\")])]), _c('li', [_vm._v(\"So the \"), _c('strong', [_vm._v(\"payload\")]), _vm._v(\" (transformed CID) is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0xf06f2394f55537a5f37d63fd72bfbef50e9f60ea9e0e34224e455afae27a97a2\")])]), _c('li', [_c('strong', [_vm._v(\"Index\")]), _vm._v(\" is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0\")]), _vm._v(\" it's the existing liability index.\")])]), _c('h3', {\n    attrs: {\n      \"id\": \"1-navigate-to-extrinsics-liability---finalizereport\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#1-navigate-to-extrinsics-liability---finalizereport\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"1. Navigate to extrinsics, liability -> finalize(report)\")]), _c('p', [_vm._v(\"Fill in the parameters and submit extrinsic. Again, this may be done by a 3rd-party account. \")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/report.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"Existential deposit\"\n    }\n  }, [_c('p', [_vm._v(\"  Pay attention that the promisor account should not be \\\"dead\\\" - it should have the existential deposit of at least 1 mXRT.\")])]), _c('p', [_vm._v(\"Sign and submit the report. When done, you can explore it in the events.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/new-report.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"2-explore-reports\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#2-explore-reports\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"2. Explore reports\")]), _c('p', [_vm._v(\"You can also observe the report in the storage. Go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Developer -> Storage\")]), _vm._v(\" and choose \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"liability\")]), _vm._v(\" from the dropdown list.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/storage-report.jpg\"\n    }\n  }), _c('h3', {\n    attrs: {\n      \"id\": \"3-check-balances\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#3-check-balances\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"3. Check balances\")]), _c('p', [_vm._v(\"On the picture it's shown that now the promisor has got the \\\"salary\\\". Economical relationship happened!\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"liability/balances-2.jpg\"\n    }\n  }), _c('robo-wiki-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Verifying\"\n    }\n  }, [_c('p', [_vm._v(\"  As for now there is no way to verify the job is done, so as soon as the promisor reports, the tokens are transferred to its account.\\n  The verify feature is to be added in the future.\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/pt/liability.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "GjR5":
/*!**********************************************************************************!*\
  !*** ./docs/pt/liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"reuM\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/liability.md?");

/***/ }),

/***/ "L8d8":
/*!******************************!*\
  !*** ./docs/pt/liability.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liability.md?vue&type=template&id=5b2ea418& */ \"OPGT\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liability.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"GjR5\");\n/* harmony import */ var _liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"SEXX\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_liability_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/pt/liability.md?");

/***/ }),

/***/ "OPGT":
/*!*************************************************************!*\
  !*** ./docs/pt/liability.md?vue&type=template&id=5b2ea418& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=template&id=5b2ea418& */ \"G7xU\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_template_id_5b2ea418___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/pt/liability.md?");

/***/ }),

/***/ "SEXX":
/*!***************************************************************************************!*\
  !*** ./docs/pt/liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./liability.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"9qOW\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_liability_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/liability.md?");

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

/***/ "reuM":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/liability.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/pt/liability.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);