(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"11e6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"editor",attrs:{padding:""}},[n("q-checkbox",{attrs:{id:"editable","left-label":"",label:"editable"},model:{value:t.editable,callback:function(e){t.editable=e},expression:"editable"}}),n("editor-content",{staticClass:"editor__content",attrs:{editor:t.myeditor}})],1)},o=[],c=n("1b62"),i=n("cd42"),a=n("f23d"),s={mixins:[c["c"],c["b"]],components:{EditorContent:i["b"]},data:function(){return{myeditor:new i["a"]({editable:!1,extensions:[new a["g"],new a["h"]({levels:[1,2,3]}),new a["b"],new a["d"],new a["k"],new a["l"]],content:'\n          <h2>\n            Read-Only\n          </h2>\n          <p>\n            This text is <strong>read-only</strong>. You are not able to edit something. <a href="https://scrumpy.io/">Links to fancy websites</a> are still working.\n          </p>\n        '}),editable:!1}},watch:{editable:function(){this.myeditor.setOptions({editable:this.editable})}},beforeDestroy:function(){this.editor.destroy()}},l=s,b=(n("43cd"),n("2877")),u=Object(b["a"])(l,r,o,!1,null,null,null);e["default"]=u.exports},"1b62":function(t,e,n){"use strict";var r=n("534b");n.d(e,"c",(function(){return r["a"]}));var o=n("c6e7");n.d(e,"b",(function(){return o["a"]}));var c=n("1f8c"),i=n.n(c);n.d(e,"a",(function(){return i.a}))},"1f8c":function(t,e){},"43cd":function(t,e,n){"use strict";var r=n("a4d0"),o=n.n(r);o.a},"534b":function(t,e,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var r=n("c47a"),o=n.n(r),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={computed:a({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(c["c"])(["toolbar","editor"])),methods:a({},Object(c["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},a4d0:function(t,e,n){},c6e7:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toolbar",{staticStyle:{"text-align":"center"}},[n("q-toolbar-title",[t._v("\n        المشاهدة\n      ")]),n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},o=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(c),a=n("534b"),s=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"DefaultToolbar",mixins:[a["a"]],props:[],methods:b({},Object(s["b"])(["toggleLeftDrawer"]))},f=u,d=n("2877"),p=Object(d["a"])(f,r,o,!1,null,null,null),O=p.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,n){this.onSwitch(),n()},methods:{onSwitch:function(){this.setToolbar(O)}}}}}]);