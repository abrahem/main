(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"534b":function(e,t,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var r=n("c47a"),o=n.n(r),c=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(e){this.$store.commit("setLeftDrawerOpen",e)}}},Object(c["c"])(["toolbar","editor"])),methods:s({},Object(c["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},"7c73":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("editor-menu-bubble",{attrs:{editor:e.myeditor},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.commands,r=e.isActive,o=e.menu;return n("div",{staticClass:"menububble",class:{"is-active":o.isActive},style:"left: "+o.left+"px; bottom: "+o.bottom+"px;"},[n("button",{staticClass:"menububble__button",class:{"is-active":r.bold()},on:{click:t.bold}},[n("svgicon",{attrs:{name:"bold"}})],1),n("button",{staticClass:"menububble__button",class:{"is-active":r.italic()},on:{click:t.italic}},[n("svgicon",{attrs:{name:"italic"}})],1),n("button",{staticClass:"menububble__button",class:{"is-active":r.code()},on:{click:t.code}},[n("svgicon",{attrs:{name:"code"}})],1)])}}])}),n("editor-content",{staticClass:"editor__content",attrs:{editor:e.myeditor}})],1)},o=[],c=n("534b"),i=n("c6e7"),s=n("cd42"),a=n("f23d"),l={mixins:[c["a"],i["a"]],components:{EditorContent:s["b"],EditorMenuBubble:s["e"]},data:function(){return{myeditor:new s["a"]({extensions:[new a["a"],new a["c"],new a["e"],new a["g"],new a["h"]({levels:[1,2,3]}),new a["m"],new a["o"],new a["v"],new a["w"],new a["b"],new a["d"],new a["k"],new a["l"],new a["q"],new a["x"],new a["i"]],content:"\n          <h2>\n            Menu Bubble\n          </h2>\n          <p>\n            Hey, try to select some text here. There will popup a menu for selecting some inline styles. <em>Remember:</em> you have full control about content and styling of this menu.\n          </p>\n        "})}},beforeDestroy:function(){this.myeditor.destroy()}},b=l,u=n("2877"),f=Object(u["a"])(b,r,o,!1,null,null,null);t["default"]=f.exports},c6e7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-toolbar",{staticStyle:{"text-align":"center"}},[n("q-toolbar-title",[e._v("\n        المشاهدة\n      ")]),n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},o=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(c),s=n("534b"),a=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"DefaultToolbar",mixins:[s["a"]],props:[],methods:b({},Object(a["b"])(["toggleLeftDrawer"]))},f=u,p=n("2877"),d=Object(p["a"])(f,r,o,!1,null,null,null),m=d.exports;t["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(e,t,n){this.onSwitch(),n()},methods:{onSwitch:function(){this.setToolbar(m)}}}}}]);