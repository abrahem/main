(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"1d88":function(t,e,n){},"27ce":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"editor"},[n("editor-floating-menu",{attrs:{editor:t.myeditor},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.commands,r=e.isActive,c=e.menu;return n("div",{staticClass:"editor__floating-menu",class:{"is-active":c.isActive},style:"top: "+c.top+"px"},[n("button",{staticClass:"menufloat__button",class:{"is-active":r.heading({level:1})},on:{click:function(t){return o.heading({level:1})}}},[t._v("\n        H1\n      ")]),n("button",{staticClass:"menufloat__button",class:{"is-active":r.heading({level:2})},on:{click:function(t){return o.heading({level:2})}}},[t._v("\n        H2\n      ")]),n("button",{staticClass:"menufloat__button",class:{"is-active":r.heading({level:3})},on:{click:function(t){return o.heading({level:3})}}},[t._v("\n        H3\n      ")]),n("button",{staticClass:"menufloat__button",class:{"is-active":r.bullet_list()},on:{click:o.bullet_list}},[n("svgicon",{attrs:{name:"ul"}})],1),n("button",{staticClass:"menufloat__button",class:{"is-active":r.ordered_list()},on:{click:o.ordered_list}},[n("svgicon",{attrs:{name:"ol"}})],1),n("button",{staticClass:"menufloat__button",class:{"is-active":r.blockquote()},on:{click:o.blockquote}},[n("svgicon",{attrs:{name:"quote"}})],1),n("button",{staticClass:"menufloat__button",class:{"is-active":r.code_block()},on:{click:o.code_block}},[n("svgicon",{attrs:{name:"code"}})],1)])}}])}),n("editor-content",{staticClass:"editor__content",attrs:{editor:t.myeditor}})],1)])},r=[],c=n("534b"),i=n("c6e7"),s=n("cd42"),a=n("f23d"),l={mixins:[c["a"],i["a"]],components:{EditorContent:s["b"],EditorFloatingMenu:s["c"]},data:function(){return{myeditor:new s["a"]({extensions:[new a["a"],new a["c"],new a["e"],new a["g"],new a["h"]({levels:[1,2,3]}),new a["m"],new a["o"],new a["v"],new a["w"],new a["b"],new a["d"],new a["k"],new a["l"],new a["i"]],content:"\n          <h2>\n            Floating Menu\n          </h2>\n          <p>\n            This is an example of a medium-like editor. Enter a new line and some buttons will appear.\n          </p>\n        "})}}},u=l,b=(n("8f38"),n("2877")),f=Object(b["a"])(u,o,r,!1,null,null,null);e["default"]=f.exports},"534b":function(t,e,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var o=n("c47a"),r=n.n(o),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(c["c"])(["toolbar","editor"])),methods:s({},Object(c["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},"8f38":function(t,e,n){"use strict";var o=n("1d88"),r=n.n(o);r.a},c6e7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toolbar",{staticStyle:{"text-align":"center"}},[n("q-toolbar-title",[t._v("\n        المشاهدة\n      ")]),n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},r=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(c),s=n("534b"),a=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={name:"DefaultToolbar",mixins:[s["a"]],props:[],methods:u({},Object(a["b"])(["toggleLeftDrawer"]))},f=b,d=n("2877"),p=Object(d["a"])(f,o,r,!1,null,null,null),v=p.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,n){this.onSwitch(),n()},methods:{onSwitch:function(){this.setToolbar(v)}}}}}]);