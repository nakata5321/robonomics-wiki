(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{UQSp:function(t,s,e){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},tHRt:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),n=e("UQSp"),r=e("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(t){var s=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?s[t]=i[t]:e[t]=function(){return i[t]}}))},p=r.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",v={excerpt:null,title:"Sensors Connectivity",contributors:["Vourhey"],translated:!1};var _=function(t){t.options[c]&&(t.options[c]=v),r.a.util.defineReactive(t.options,c,v),t.options.computed=p.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},h=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VueRemarkRoot",[e("p",[t._v("This Aira package allows you to read data from a SDS011 sensor and publish to different output channels. That said Aira is able to form a json formatted message with measurements and publish to a few channels. Also it includes Datalog feature which is still experimental. It could be used to publish data to Substrate based blockchain by Robonomics.")]),e("p",[t._v("The last release is "),e("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/releases/tag/v0.2",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Sensors Connectivity v0.2")])]),e("h2",{attrs:{id:"sensor-connectivity-protocol--v1"}},[e("a",{attrs:{href:"#sensor-connectivity-protocol--v1","aria-hidden":"true"}},[t._v("#")]),t._v("Sensor Connectivity Protocol :: v1")]),e("h3",{attrs:{id:"sensor-to-station"}},[e("a",{attrs:{href:"#sensor-to-station","aria-hidden":"true"}},[t._v("#")]),t._v("Sensor to Station")]),e("p",[e("strong",[t._v("TCP Session diagram")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("HEADER")]),e("th",[t._v("DATA1")]),e("th",[t._v("DATA2")]),e("th",[t._v("DATA3")]),e("th",[t._v("...")]),e("th",[t._v("DATAN")])])]),e("tbody")]),e("p",[t._v("where "),e("code",{pre:!0},[t._v("HEADER")]),t._v(" is 34 bytes")]),e("table",[e("thead",[e("tr",[e("th"),e("th",[t._v("Name")])])]),e("tbody",[e("tr",[e("td",[t._v("0x00")]),e("td",[t._v("public_id")])]),e("tr",[e("td",[t._v("0x20")]),e("td",[t._v("codec_id")])])])]),e("ul",[e("li",[e("code",{pre:!0},[t._v("public_id")]),t._v(" - Public identifier, generated on sensor setup.")]),e("li",[e("code",{pre:!0},[t._v("codec_id")]),t._v(" - Type of used data codec.")])]),e("p",[e("strong",[t._v("Data frame")])]),e("table",[e("thead",[e("tr",[e("th"),e("th",[t._v("Name")])])]),e("tbody",[e("tr",[e("td",[t._v("0x22")]),e("td",[t._v("payload")])]),e("tr",[e("td",[t._v("0xNN")]),e("td",[t._v("signature")])])])]),e("ul",[e("li",[e("code",{pre:!0},[t._v("payload")]),t._v(" - Sensor measurements.")]),e("li",[e("code",{pre:!0},[t._v("signature")]),t._v(" - Measurement Ed25519 signature, 64 bytes long. ("),e("a",{attrs:{href:"https://github.com/pyca/pynacl",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("pynacl")]),t._v(")")])]),e("p",[t._v("For SDS011 sensor "),e("code",{pre:!0},[t._v("payload")]),t._v(" consists of 4 float numbers: PM2.5, PM10, GEO_LAT, GEO_LON")]),e("h3",{attrs:{id:"station-to-robonomics"}},[e("a",{attrs:{href:"#station-to-robonomics","aria-hidden":"true"}},[t._v("#")]),t._v("Station to Robonomics")]),e("p",[t._v("The default output channel is Robonomics protocol over IPFS pubsub. For every measurement connectivity produces the following json formatted string:")]),e("pre",[e("code",{pre:!0},[t._v('{public_id: {"model": codec_id,"timestamp": unix_timestamp, "measurement": {"pm25": PM2.5, "pm10": PM10, "geo": "GEO_LAT,GEO_LON"}}}\n')])]),e("h2",{attrs:{id:"stations-and-feeders"}},[e("a",{attrs:{href:"#stations-and-feeders","aria-hidden":"true"}},[t._v("#")]),t._v("Stations and Feeders")]),e("p",[t._v("In Sensors Connectivity there are two entities: station and feeder.")]),e("h3",{attrs:{id:"station"}},[e("a",{attrs:{href:"#station","aria-hidden":"true"}},[t._v("#")]),t._v("Station")]),e("p",[t._v("Station represents a source of data. The package can handle many inputs simultaneously:")]),e("pre",[e("code",{pre:!0},[t._v("station1 \\                        / output1\nstation2 -  sensors-connectivity  - output2\nstation3 /                        \\ output3\n")])]),e("p",[t._v("There are COM Station and TCP Station implemented. The first one reads data from a sensor that is connected to a serial port. TCP Station starts a tcp server and listens to incoming connections. ")]),e("p",[t._v("TCP Station can accept data from every sensor or you can specify an access control list (ACL) for known sensors only.")]),e("h3",{attrs:{id:"feeder"}},[e("a",{attrs:{href:"#feeder","aria-hidden":"true"}},[t._v("#")]),t._v("Feeder")]),e("p",[t._v("Feeder is an output in terms of sensors connectivity:")]),e("pre",[e("code",{pre:!0},[t._v("input1 \\                        / feeder1\ninput2 -  sensors-connectivity  - feeder2\ninput3 /                        \\ feeder3\n")])]),e("p",[t._v("At current implementation the package can publish data to "),e("a",{attrs:{href:"https://meine.luftdaten.info/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Luftdaten")]),t._v(", Robonomics or Robonomics on Substrate (using Datalog feature).")]),e("h2",{attrs:{id:"connectivity-configuration"}},[e("a",{attrs:{href:"#connectivity-configuration","aria-hidden":"true"}},[t._v("#")]),t._v("Connectivity Configuration")]),e("p",[t._v("The package is highly configurable. The default configuration file looks like:")]),e("pre",[e("code",{pre:!0,attrs:{class:"hljs language-yaml"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Please DO NOT edit this file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Make a copy instead, make changes and pass the absolute path to the copy in arguments")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("general:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("publish_interval:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# time between two published messages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("comstation:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("port:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"/dev/ttyUSB0"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# COM port of the device")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("work_period:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("300")]),t._v("      "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# time between two measurements in seconds")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geo:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("               "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# Geo coordinates as latitude,longitude")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("public_key:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("        "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# If not provided, COMStation creates itself")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tcpstation:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("address:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("           "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# IP and PORT to listen to, for example 0.0.0.0:31313")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("acl:")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# list of known addresses. If not specified accepts from everyone")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# -")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# -")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("luftdaten:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("enable:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("          "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# whether or not publish to https://luftdaten.info/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("robonomics:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("enable:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("          "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# enable use of Robonomics Network")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ipfs_provider:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("     "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# ipfs endpoint")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ipfs_topic:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"airalab.lighthouse.5.robonomics.eth"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("datalog:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("enable:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("         "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# enable use of Datalog Robonomics subcommand")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("path:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("              "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# path to Robonomics execution file")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("suri:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')]),t._v("              "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# private key of publisher account")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("remote:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"wss://substrate.ipci.io"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("dump_interval:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3600")]),t._v("   "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# time between two transactions in seconds")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("temporal_username:")]),t._v("    "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("# set to pin files in Temporal.Cloud")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("temporal_password:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("dev:")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("sentry:")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('""')])])]),e("p",[t._v("To get familiar with all the options and launch scenarios check the "),e("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/tree/v0.2",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("README.md")]),t._v(" out.")])])}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof _&&_(h);s.default=h.exports}}]);