(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2dac":function(t,e,n){},"534b":function(t,e,n){"use strict";n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var i=n("c47a"),a=n.n(i),r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(r["c"])(["toolbar","editor"])),methods:s({},Object(r["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},"54c0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"editor",attrs:{padding:""}},[n("editor-content",{staticClass:"editor__content",attrs:{editor:t.myeditor}})],1)},a=[],r=n("534b"),o=n("c6e7"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:t.toggleLeftDrawer}},[n("q-icon",{attrs:{name:"menu"}})],1),n("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.commands,a=e.isActive,r=e.focused;return n("div",{staticClass:"menubar is-hidden",class:{"is-focused":r}},[n("q-btn",{class:{"is-active":a.bold()},on:{click:i.bold}},[n("svgicon",{attrs:{name:"bold"}})],1),n("q-btn",{class:{"is-active":a.italic()},on:{click:i.italic}},[n("svgicon",{attrs:{name:"italic"}})],1),n("q-btn",{class:{"is-active":a.strike()},on:{click:i.strike}},[n("svgicon",{attrs:{name:"strike"}})],1),n("q-btn",{class:{"is-active":a.underline()},on:{click:i.underline}},[n("svgicon",{attrs:{name:"underline"}})],1),n("q-btn",{class:{"is-active":a.code()},on:{click:i.code}},[n("svgicon",{attrs:{name:"code"}})],1),n("q-btn",{class:{"is-active":a.paragraph()},on:{click:i.paragraph}},[n("svgicon",{attrs:{name:"paragraph"}})],1),n("q-btn",{class:{"is-active":a.heading({level:1})},on:{click:function(t){return i.heading({level:1})}}},[t._v("\n        H1\n      ")]),n("q-btn",{class:{"is-active":a.heading({level:2})},on:{click:function(t){return i.heading({level:2})}}},[t._v("\n        H2\n      ")]),n("q-btn",{class:{"is-active":a.heading({level:3})},on:{click:function(t){return i.heading({level:3})}}},[t._v("\n        H3\n      ")]),n("q-btn",{class:{"is-active":a.bullet_list()},on:{click:i.bullet_list}},[n("svgicon",{attrs:{name:"ul"}})],1),n("q-btn",{class:{"is-active":a.ordered_list()},on:{click:i.ordered_list}},[n("svgicon",{attrs:{name:"ol"}})],1),n("q-btn",{class:{"is-active":a.blockquote()},on:{click:i.blockquote}},[n("svgicon",{attrs:{name:"quote"}})],1),n("q-btn",{class:{"is-active":a.code_block()},on:{click:i.code_block}},[n("svgicon",{attrs:{name:"code"}})],1)],1)}}])})],1)},c=[],l=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),d=n.n(l),p=n("cd42"),f=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={name:"ImagesToolbar",mixins:[r["a"]],props:[],components:{EditorMenuBar:p["d"]},methods:g({},Object(f["b"])(["toggleLeftDrawer"]),{showImagePrompt:function(t){var e=prompt("Enter the url of your image here");null!==e&&t({src:e})}})},b=h,m=n("2877"),v=Object(m["a"])(b,s,c,!1,null,null,null),w=v.exports,y=n("f23d"),x={mixins:[r["a"],o["a"]],components:{EditorContent:p["b"]},data:function(){return{myeditor:new p["a"]({extensions:[new y["a"],new y["c"],new y["e"],new y["g"],new y["h"]({levels:[1,2,3]}),new y["m"],new y["n"],new y["u"],new y["v"],new y["b"],new y["d"],new y["k"],new y["l"],new y["p"],new y["w"],new y["i"]],content:"\n          <h2>\n            Hiding Menu Bar\n          </h2>\n          <p>\n            Click into this text to see the menu. Click outside and the menu will disappear. It's like magic.\n          </p>\n        "})}},beforeDestroy:function(){this.myeditor.destroy()},methods:{onSwitch:function(){this.setEditor(this.myeditor),this.setToolbar(w)}}},k=x,q=(n("db92"),Object(m["a"])(k,i,a,!1,null,null,null));e["default"]=q.exports},c6e7:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-toolbar",{staticStyle:{"text-align":"center"}},[n("q-toolbar-title",{staticStyle:{"margin-left":"35px"}},[t._v("\n          المشاهدة\n        ")]),n("q-btn",{ref:"myId",attrs:{id:"myId",dense:"",flat:"",round:"",icon:"search"},on:{click:function(e){return t.myFunctionClick()}}}),n("q-dialog",{attrs:{persistent:"",maximized:!0},model:{value:t.searchs,callback:function(e){t.searchs=e},expression:"searchs"}},[n("div",{staticStyle:{"background-color":"#222222",width:"100%"}},[n("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[n("div",{staticClass:"row",staticStyle:{background:"transparent",width:"100%",padding:"10px"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",round:"","aria-label":"خروج"},on:{click:function(e){t.searchs=!1}}},[n("q-icon",{attrs:{name:"keyboard_arrow_down"}})],1)],1)]),n("div",{staticStyle:{padding:"0px","padding-top":"50px"}},[n("q-list",{staticStyle:{width:"100%"},attrs:{dark:""}},[t._l(t.whenopendata,(function(e){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{width:"100%","border-radius":"8px"},attrs:{clickable:""},on:{click:function(n){return t.loadinfo(e.id)}}},[n("q-item-section",{attrs:{avatar:""}},[n("img",{staticStyle:{"border-radius":"4px"},attrs:{width:"100px",height:"140px",src:e.image}})]),n("q-item-section",{staticStyle:{width:"100%","border-bottom":"outset","border-bottom-color":"#ffffff11"}},[n("span",[t._v(" "+t._s(e.name)+" ")]),n("span"),n("span",[t._v(" "+t._s(e.status)+" ")])])],1)}))],2)],1)],1)]),n("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{staticStyle:{"background-color":"#ffffff"}},[n("q-scroll-area",{staticStyle:{height:"100%",width:"100%","background-color":"#222222 !important"},attrs:{vertical:""}},[n("q-layout",{staticStyle:{background:"#222222"},attrs:{view:"hHh lpR fFf"}},[n("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[n("q-toolbar",[n("q-img",{staticStyle:{height:"300px",position:"static"},attrs:{src:t.itemsinfo.cover}},[n("div",{staticStyle:{color:"white",height:"100%",width:"100%",background:"transparent"}},[n("div",{staticStyle:{height:"100%","text-align":"center"}},[n("div",{staticClass:"row",staticStyle:{background:"transparent",width:"100%",padding:"10px"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",round:"","aria-label":"خروج"},on:{click:function(e){return t.closes()}}},[n("q-icon",{attrs:{name:"keyboard_arrow_down"}})],1),n("q-toolbar-title"),n("q-btn",{staticStyle:{color:"ghostwhite"},attrs:{dense:"",flat:"",round:"",icon:"favorite_border"}})],1),n("img",{staticStyle:{width:"110px","margin-top":"10px"},attrs:{src:t.itemsinfo.cover}}),n("h2",{staticStyle:{"font-size":"15px","font-weight":"450"}},[t._v(t._s(t.itemsinfo.name))])])])])],1),n("q-tabs",{staticClass:"bg-grey-3 text-grey-7",staticStyle:{margin:"5px",color:"white !important","background-color":"#222222 !important","box-shadow":"0px 0px 16px 20px rgb(34, 34, 34)"},attrs:{"narrow-indicator":"",dense:"","active-color":"#ffffff","indicator-color":"#ffffff",align:"justify"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("q-tab",{attrs:{name:"info",label:"معلومات الانمي"}}),n("q-tab",{attrs:{name:"ep",label:"الحلقات"}}),n("q-tab",{attrs:{name:"commant",label:"تعليقات الاعضاء"}})],1)],1),n("q-page-container",[n("q-tab-panels",{staticClass:"text-black",staticStyle:{background:"#222222"},attrs:{animated:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("q-tab-panel",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"info"}},[n("div",{staticClass:"row no-wrap",staticStyle:{"place-content":"center"}},t._l(t.itemsinfo.genres,(function(e){return n("q-chip",{key:e.name,attrs:{color:"white","text-color":"black"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1),n("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[n("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التصنيف : "+t._s(t.itemsinfo.age))]),n("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"calendar_today"}}),n("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التاريخ : "+t._s(t.itemsinfo.realease))]),n("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"event_available"}})],1),n("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[n("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التقيم : "+t._s(t.itemsinfo.rank))]),n("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"person"}}),n("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("الحالية : "+t._s(t.itemsinfo.status))]),n("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"poll"}})],1),n("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[n("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-right":"10px"}}),n("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("القصة")]),n("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-left":"10px"}})]),n("div",{staticStyle:{"text-align":"center",width:"100%",color:"white"},domProps:{innerHTML:t._s(t.itemsinfo.story)}},[t._v("\n"+t._s(t.itemsinfo.story)+"\n")]),n("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[n("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("انميات اخرى")])]),n("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[n("div",{staticStyle:{height:"1px",width:"80%","background-color":"#fffffff0","align-self":"center"}})]),n("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[n("div",[n("div",{staticClass:"row no-wrap"},t._l(t.others,(function(e){return n("div",{key:e.id,staticStyle:{},on:{click:function(n){return t.loadinfo(e.id)}}},[n("q-card",{staticClass:"my-cardt"},[n("img",{staticStyle:{height:"150px","object-fit":"cover","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},attrs:{src:e.image}}),n("div",{staticClass:"absolute-bottom text-subtitle2 text-center",staticStyle:{color:"#fff","font-size":"small","background-color":"#00000087","margin-bottom":"-1px"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1)})),0)])])],1),n("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"ep"}},[n("q-virtual-scroll",{staticStyle:{"max-height":"300px"},attrs:{items:t.ep,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,a=e.index;return[n("q-item",{key:a,attrs:{dense:""}},[n("q-btn",{staticStyle:{width:"100%",padding:"2px",margin:"4px"},attrs:{color:"white",clickable:""},on:{click:function(e){return t.openEps(i.id)}}},[n("div",{staticClass:"row items-center no-wrap"},[n("div",{staticClass:"text-center",staticStyle:{color:"black"}},[t._v("\n          "+t._s(i.name)+"\n        ")])])])],1)]}}])})],1),n("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"commant"}},[n("q-card",{staticClass:"my-card text-white",staticStyle:{"background-color":"#673ab7","margin-bottom":"7px"}})],1)],1)],1)],1)],1)],1)])],1)},a=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("6762"),n("2fdb"),n("c47a")),o=n.n(r),s=n("534b"),c=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"DefaultToolbar",components:{},data:function(){return{searchs:!1,whenopendata:[],titlepage:"",slide:1,page2:!1,slide2:1,autoplay:!1,count:0,string:"",string2:"",sd:"",hd:"",epid:"",others:[],dialog:!1,maximizedToggle:!0,dialogplayer:!1,dialogmenu:!1,tab:"main",tabs:"info",linklatest:"",linkall:"",itemsinfo:{},ep:[]}},mixins:[s["a"]],props:[],methods:d({},Object(c["b"])(["toggleLeftDrawer"]),{myFunctionClick:function(){var t=this;this.$q.dialog({dark:!0,title:"البحث",ok:"بحث",cancel:"الغاء",prompt:{model:"",type:"text"},persistent:!0}).onOk((function(e){t.getSearch(e)})).onCancel((function(){})).onDismiss((function(){}))},openEps:function(t){var e=navigator.userAgent.includes("SevenZero");!0===e&&(window.location.href="https://snoanime.com/ios.php/?id="+t+"&epid="+t+"&api=https://snoanime.com/api/new/server.php")},getSearch:function(t){var e=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/search.php/?name="+t).then((function(t){var n=t.data;e.searchs=!0,e.whenopendata=n,e.$q.loading.hide()})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))},loadinfo:function(t){var e=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/info.php/?id="+t).then((function(t){e.done="",e.dones="",e.string="",e.string2="",e.itemsinfo="",e.others="",e.ep="";for(var n=0;n<t.data.length;n++)e.string=e.string+t.data[n];for(var i=JSON.parse(atob(e.string)),a=i.slice().reverse(),r=0;r<a.length;r++)e.string2=e.string2+a[r];var o=JSON.parse(atob(e.string2)),s=e;s.dialog=!0,s.itemsinfo=o.main,s.others=o.other,s.ep=o.ep,e.$q.loading.hide(),e.string="",e.string2=""})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))}})},f=p,u=n("2877"),g=Object(u["a"])(f,i,a,!1,null,"7940a2d9",null),h=g.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,n){this.onSwitch(),n()},methods:{onSwitch:function(){this.setToolbar(h)}}}},db92:function(t,e,n){"use strict";var i=n("2dac"),a=n.n(i);a.a}}]);