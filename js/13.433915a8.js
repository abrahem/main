(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"534b":function(e,t,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var r=n("c47a"),i=n.n(r),o=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]={computed:c({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(e){this.$store.commit("setLeftDrawerOpen",e)}}},Object(o["c"])(["toolbar","editor"])),methods:c({},Object(o["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},"7ef3":function(e,t,n){},c6e7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-toolbar",{staticStyle:{"text-align":"center"}},[n("q-toolbar-title",{staticStyle:{"margin-left":"35px"}},[e._v("\n        المشاهدة\n      ")]),n("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},i=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),s=n.n(o),c=n("534b"),l=n("2f62");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={name:"DefaultToolbar",mixins:[c["a"]],props:[],methods:u({},Object(l["b"])(["toggleLeftDrawer"]))},f=b,p=n("2877"),d=Object(p["a"])(f,r,i,!1,null,null,null),w=d.exports;t["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(e,t,n){this.onSwitch(),n()},methods:{onSwitch:function(){this.setToolbar(w)}}}},d00c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"editor",attrs:{padding:""}},[n("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:e.myeditor},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.commands,i=t.isActive,o=t.getMarkAttrs,s=t.menu;return n("div",{staticClass:"menububble",class:{"is-active":s.isActive},style:"left: "+s.left+"px; bottom: "+s.bottom+"px;"},[e.linkMenuIsActive?n("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),e.setLinkUrl(r.link,e.linkUrl)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:e.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.hideLinkMenu(t)},input:function(t){t.target.composing||(e.linkUrl=t.target.value)}}}),n("button",{staticClass:"menububble__button",attrs:{type:"button"},on:{click:function(t){return e.setLinkUrl(r.link,null)}}},[n("svgicon",{attrs:{name:"remove"}})],1)]):[n("button",{staticClass:"menububble__button",class:{"is-active":i.link()},on:{click:function(t){e.showLinkMenu(o("link"))}}},[n("span",[e._v("Add Link")]),n("svgicon",{attrs:{name:"link"}})],1)]],2)}}])}),n("editor-content",{staticClass:"editor__content",attrs:{editor:e.myeditor}})],1)},i=[],o=n("534b"),s=n("c6e7"),c=n("cd42"),l=n("f23d"),a={mixins:[o["a"],s["a"]],components:{EditorContent:c["b"],EditorMenuBubble:c["e"]},data:function(){return{myeditor:new c["a"]({extensions:[new l["a"],new l["c"],new l["e"],new l["g"],new l["h"]({levels:[1,2,3]}),new l["m"],new l["o"],new l["v"],new l["w"],new l["b"],new l["d"],new l["k"],new l["l"],new l["i"]],content:'\n          <h2>\n            Links\n          </h2>\n          <p>\n            Try to add some links to the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. By default every link will get a <code>rel="noopener noreferrer nofollow"</code> attribute.\n          </p>\n        '}),linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(e){var t=this;this.linkUrl=e.href,this.linkMenuIsActive=!0,this.$nextTick((function(){t.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(e,t){e({href:t}),this.hideLinkMenu(),this.myeditor.focus()}}},u=a,b=(n("da8a"),n("2877")),f=Object(b["a"])(u,r,i,!1,null,null,null);t["default"]=f.exports},da8a:function(e,t,n){"use strict";var r=n("7ef3"),i=n.n(r);i.a}}]);