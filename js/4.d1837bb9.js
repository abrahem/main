(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1b62":function(t,e,r){"use strict";var n=r("534b");r.d(e,"c",(function(){return n["a"]}));var o=r("c6e7");r.d(e,"b",(function(){return o["a"]}));var c=r("1f8c"),i=r.n(c);r.d(e,"a",(function(){return i.a}))},"1f8c":function(t,e){},"3a58":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"editor",attrs:{padding:""}},[r("editor-content",{staticClass:"editor__content",attrs:{editor:t.myeditor}})],1)},o=[],c=r("1b62"),i=r("cd42"),s=r("f23d"),a=(r("6b54"),r("06db"),r("2397"),r("fc74")),u=r.n(a),f=r("59a1"),l=r.n(f),p=r("37d9"),b=r.n(p),d=r("6430"),m=r.n(d),O=r("ffe3"),h=r.n(O);function w(t){return function(){var e,r=h()(t);if(y()){var n=h()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return m()(this,e)}}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){b()(r,t);var e=w(r);function r(){return u()(this,r),e.apply(this,arguments)}return l()(r,[{key:"name",get:function(){return"iframe"}},{key:"schema",get:function(){return{attrs:{src:{default:null}},group:"block",selectable:!1,parseDOM:[{tag:"iframe",getAttrs:function(t){return{src:t.getAttribute("src")}}}],toDOM:function(t){return["iframe",{src:t.attrs.src,frameborder:0,allowfullscreen:"true"}]}}}},{key:"view",get:function(){return{props:["node","updateAttrs","editable"],computed:{src:{get:function(){return this.node.attrs.src},set:function(t){this.updateAttrs({src:t})}}},template:'\n        <div class="iframe">\n          <iframe class="iframe__embed" :src="src"></iframe>\n          <input class="iframe__input" @paste.stop type="text" v-model="src" v-if="editable" />\n        </div>\n      '}}}]),r}(i["h"]),v={mixins:[c["c"],c["b"]],components:{EditorContent:i["b"]},data:function(){return{myeditor:new i["a"]({extensions:[new s["g"],new s["h"]({levels:[1,2,3]}),new s["b"],new s["k"],new s["i"],new g],content:'\n          <h2>\n            Embeds\n          </h2>\n          <p>\n            This is an example of a custom iframe node. This iframe is rendered as a <strong>vue component</strong>. This makes it possible to render the input below to change its source.\n          </p>\n          <iframe src="https://www.youtube.com/embed/XIMLoLxmTDw" frameborder="0" allowfullscreen></iframe>\n        '})}},beforeDestroy:function(){this.editor.destroy()}},j=v,D=(r("ddd1"),r("2877")),P=Object(D["a"])(j,n,o,!1,null,null,null);e["default"]=P.exports},"534b":function(t,e,r){"use strict";r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d");var n=r("c47a"),o=r.n(n),c=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(c["c"])(["toolbar","editor"])),methods:s({},Object(c["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},c6e7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-toolbar",{staticStyle:{"text-align":"center"}},[r("q-toolbar-title",[t._v("\n        المشاهدة\n      ")]),r("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},o=[],c=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),i=r.n(c),s=r("534b"),a=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"DefaultToolbar",mixins:[s["a"]],props:[],methods:f({},Object(a["b"])(["toggleLeftDrawer"]))},p=l,b=r("2877"),d=Object(b["a"])(p,n,o,!1,null,null,null),m=d.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,r){this.onSwitch(),r()},methods:{onSwitch:function(){this.setToolbar(m)}}}},ddd1:function(t,e,r){"use strict";var n=r("df10"),o=r.n(n);o.a},df10:function(t,e,r){}}]);