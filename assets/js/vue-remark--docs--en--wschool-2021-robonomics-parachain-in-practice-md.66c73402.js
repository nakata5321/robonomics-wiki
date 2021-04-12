(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"+Gqu":function(e,t,o){"use strict";var a={props:{vid:{type:String},autoplay:{type:Boolean,default:!0}}},r=o("KHd+"),n=Object(r.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("script",{attrs:{type:"application/javascript",src:"https://asciinema.org/a/"+this.vid+".js",id:"asciicast-"+this.vid,async:"","data-autoplay":this.autoplay}})}),[],!1,null,null,null);t.a=n.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},VDrC:function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),r=o("+Gqu"),n=o("UQSp"),s=o("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var c={Asciinema:r.a,VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===i(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:o[e]=function(){return c[e]}}))},p=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:null,title:"Lesson 4, Robonomics parachain in practice",contributors:["akru"],translated:!0};var d=function(e){e.options[u]&&(e.options[u]=h),s.a.util.defineReactive(e.options,u,h),e.options.computed=p.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("Robonomics parachain is not a general purpose parachain on Polkadot ecosystem. The target of Robonomics\nis building economy of machines, the parachain in this scope of aims helps to integrate Polkadot ecosystem\nwith IoT, Smart Cities and Industry 4.0 concepts.")]),o("h2",{attrs:{id:"requirements"}},[o("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),o("ul",[o("li",[e._v("Docker, please "),o("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("install it")]),e._v(".")]),o("li",[e._v("Polkadot-launch, please "),o("a",{attrs:{href:"https://github.com/paritytech/polkadot-launch#install",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("install it")]),e._v(".")])]),o("h2",{attrs:{id:"launch-the-relay"}},[o("a",{attrs:{href:"#launch-the-relay","aria-hidden":"true"}},[e._v("#")]),e._v("Launch the relay")]),o("p",[e._v("The relay chain is a core of Polkadot, it provides "),o("a",{attrs:{href:"https://wiki.polkadot.network/docs/en/learn-security",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("shared security")]),e._v("\nfor all child parachains and implements message passing mechanics for them. Let's launch local instance of Rococo (polkadot testnet)\nrelay chain with two robonomics-based parachains as a childs. I'll use prepared "),o("a",{attrs:{href:"https://hub.docker.com/layers/robonomics/robonomics/winter-school-2/images/sha256-92f4795262f3ded3e6a153999d2777c4009106a7d37fd29969ebf1c3a262dc85?context=explore",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v('Docker image tag: "winter-school-2"')]),e._v(" but all source code of examples\navailable in "),o("a",{attrs:{href:"https://github.com/airalab/robonomics/tree/master/scripts/polkadot-launch",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics GitHub")]),e._v(".")]),o("Asciinema",{attrs:{vid:"419Jrg22ziFfMFPZlh2WtiLvg"}}),o("p",[e._v("It could take a time, but be partient. As result you should have three chain instances at ports:")]),o("ul",[o("li",[o("code",{pre:!0},[e._v("9944")]),e._v(" - local rococo relay chain.")]),o("li",[o("code",{pre:!0},[e._v("9988")]),e._v(" - robonomics parachain with "),o("code",{pre:!0},[e._v("id=100")])]),o("li",[o("code",{pre:!0},[e._v("9989")]),e._v(" - robonomics parachain with "),o("code",{pre:!0},[e._v("id=200")])])]),o("p",[e._v("If you use remote server, you need to create some ssh tunnels on local machine:")]),o("pre",[o("code",{pre:!0},[e._v("ssh -f -N -L 9944:127.0.0.1:9944 root@REMOTE_SERVER_IP\nssh -f -N -L 9988:127.0.0.1:9988 root@REMOTE_SERVER_IP\nssh -f -N -L 9989:127.0.0.1:9989 root@REMOTE_SERVER_IP\n")])]),o("p",[e._v("After that, you can use "),o("code",{pre:!0},[e._v("ws://127.0.0.1:9944")]),e._v(", "),o("code",{pre:!0},[e._v("ws://127.0.0.1:9988")]),e._v("and "),o("code",{pre:!0},[e._v("ws://127.0.0.1:9989")]),e._v(" in "),o("a",{attrs:{href:"https://parachain.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/")])]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/upcoming.png",alt:"relay"}})]),o("p",[e._v("Some time ago parachains should be registered.")]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/parachains.png",alt:"relay2"}})]),o("p",[e._v("And start to produce blocks.")]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/parachains2.png",alt:"relay3"}})]),o("p",[e._v("As next step let's create HRMP channel to pass messages between parachains. I'll use "),o("code",{pre:!0},[e._v("sudo")]),e._v(" module call on relay chain page.")]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/hrmp.png",alt:"hrmp"}})]),o("p",[e._v("When channel created, the XCM calls is available. Let's use "),o("code",{pre:!0},[e._v("datalogXcm")]),e._v(" pallet - a XCM version of "),o("code",{pre:!0},[e._v("datalog")]),e._v(" pallet.")]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/datalogXcmSend.png",alt:"datalogXcmSend"}})]),o("p",[e._v("As result message on second parachain will call "),o("code",{pre:!0},[e._v("datalog")]),e._v(" pallet and write data on chain.")]),o("p",[o("img",{attrs:{src:"https://ipfs.io/ipfs/QmR9Tj86yPkrXQsSwereJwqDxsZgkAdySB16G4SMHrhpBu/datalogXcmRecv.png",alt:"datalogXcmRecv"}})]),o("p",[e._v("As result, this example demonstrate how XCM could be used for cross chain usage of standard robonomics pallets.")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);t.default=f.exports}}]);