(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"086c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"editor",attrs:{padding:""}},[a("editor-content",{staticClass:"editor__content",attrs:{editor:t.myeditor}})],1)},n=[],r=a("1b62"),o=a("cd42"),s=a("f23d"),c={mixins:[r["c"],r["b"]],components:{EditorContent:o["b"]},data:function(){return{myeditor:new o["a"]({extensions:[new s["c"],new s["m"],new s["o"]({emptyClass:"is-empty",emptyNodeText:"Write something …",showOnlyWhenEditable:!0})]})}},beforeDestroy:function(){this.editor.destroy()}},l=c,d=(a("94b5"),a("2877")),p=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=p.exports},"1a2e":function(t,e,a){},"1b62":function(t,e,a){"use strict";var i=a("534b");a.d(e,"c",(function(){return i["a"]}));var n=a("c6e7");a.d(e,"b",(function(){return n["a"]}));var r=a("1f8c"),o=a.n(r);a.d(e,"a",(function(){return o.a}))},"1f8c":function(t,e){},"534b":function(t,e,a){"use strict";a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d");var i=a("c47a"),n=a.n(i),r=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(r["c"])(["toolbar","editor"])),methods:s({},Object(r["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},"94b5":function(t,e,a){"use strict";var i=a("1a2e"),n=a.n(i);n.a},c6e7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",{staticStyle:{"text-align":"center"}},[a("q-toolbar-title",{staticStyle:{"margin-left":"35px"}},[t._v("\n          المشاهدة\n        ")]),a("q-btn",{ref:"myId",attrs:{id:"myId",dense:"",flat:"",round:"",icon:"search"},on:{click:function(e){return t.myFunctionClick()}}}),a("q-dialog",{attrs:{persistent:"",maximized:!0},model:{value:t.searchs,callback:function(e){t.searchs=e},expression:"searchs"}},[a("div",{staticStyle:{"background-color":"#222222",width:"100%"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[a("div",{staticClass:"row",staticStyle:{background:"transparent",width:"100%",padding:"10px"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",round:"","aria-label":"خروج"},on:{click:function(e){t.searchs=!1}}},[a("q-icon",{attrs:{name:"keyboard_arrow_down"}})],1)],1)]),a("div",{staticStyle:{padding:"0px","padding-top":"50px"}},[a("q-list",{staticStyle:{width:"100%"},attrs:{dark:""}},[t._l(t.whenopendata,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{width:"100%","border-radius":"8px"},attrs:{clickable:""},on:{click:function(a){return t.loadinfo(e.id)}}},[a("q-item-section",{attrs:{avatar:""}},[a("img",{staticStyle:{"border-radius":"4px"},attrs:{width:"100px",height:"140px",src:e.image}})]),a("q-item-section",{staticStyle:{width:"100%","border-bottom":"outset","border-bottom-color":"#ffffff11"}},[a("span",[t._v(" "+t._s(e.name)+" ")]),a("span"),a("span",[t._v(" "+t._s(e.status)+" ")])])],1)}))],2)],1)],1)]),a("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("div",{staticStyle:{"background-color":"#ffffff"}},[a("q-scroll-area",{staticStyle:{height:"100%",width:"100%","background-color":"#222222 !important"},attrs:{vertical:""}},[a("q-layout",{staticStyle:{background:"#222222"},attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[a("q-toolbar",[a("q-img",{staticStyle:{height:"300px",position:"static"},attrs:{src:t.itemsinfo.cover}},[a("div",{staticStyle:{color:"white",height:"100%",width:"100%",background:"transparent"}},[a("div",{staticStyle:{height:"100%","text-align":"center"}},[a("div",{staticClass:"row",staticStyle:{background:"transparent",width:"100%",padding:"10px"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",round:"","aria-label":"خروج"},on:{click:function(e){return t.closes()}}},[a("q-icon",{attrs:{name:"keyboard_arrow_down"}})],1),a("q-toolbar-title"),a("q-btn",{staticStyle:{color:"ghostwhite"},attrs:{dense:"",flat:"",round:"",icon:"favorite_border"}})],1),a("img",{staticStyle:{width:"110px","margin-top":"10px"},attrs:{src:t.itemsinfo.cover}}),a("h2",{staticStyle:{"font-size":"15px","font-weight":"450"}},[t._v(t._s(t.itemsinfo.name))])])])])],1),a("q-tabs",{staticClass:"bg-grey-3 text-grey-7",staticStyle:{margin:"5px",color:"white !important","background-color":"#222222 !important","box-shadow":"0px 0px 16px 20px rgb(34, 34, 34)"},attrs:{"narrow-indicator":"",dense:"","active-color":"#ffffff","indicator-color":"#ffffff",align:"justify"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("q-tab",{attrs:{name:"info",label:"معلومات الانمي"}}),a("q-tab",{attrs:{name:"ep",label:"الحلقات"}}),a("q-tab",{attrs:{name:"commant",label:"تعليقات الاعضاء"}})],1)],1),a("q-page-container",[a("q-tab-panels",{staticClass:"text-black",staticStyle:{background:"#222222"},attrs:{animated:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("q-tab-panel",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"info"}},[a("div",{staticClass:"row no-wrap",staticStyle:{"place-content":"center"}},t._l(t.itemsinfo.genres,(function(e){return a("q-chip",{key:e.name,attrs:{color:"white","text-color":"black"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1),a("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[a("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التصنيف : "+t._s(t.itemsinfo.age))]),a("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"calendar_today"}}),a("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التاريخ : "+t._s(t.itemsinfo.realease))]),a("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"event_available"}})],1),a("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[a("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التقيم : "+t._s(t.itemsinfo.rank))]),a("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"person"}}),a("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("الحالية : "+t._s(t.itemsinfo.status))]),a("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"poll"}})],1),a("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[a("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-right":"10px"}}),a("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("القصة")]),a("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-left":"10px"}})]),a("div",{staticStyle:{"text-align":"center",width:"100%",color:"white"},domProps:{innerHTML:t._s(t.itemsinfo.story)}},[t._v("\n"+t._s(t.itemsinfo.story)+"\n")]),a("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[a("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("انميات اخرى")])]),a("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[a("div",{staticStyle:{height:"1px",width:"80%","background-color":"#fffffff0","align-self":"center"}})]),a("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[a("div",[a("div",{staticClass:"row no-wrap"},t._l(t.others,(function(e){return a("div",{key:e.id,staticStyle:{},on:{click:function(a){return t.loadinfo(e.id)}}},[a("q-card",{staticClass:"my-cardt"},[a("img",{staticStyle:{height:"150px","object-fit":"cover","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},attrs:{src:e.image}}),a("div",{staticClass:"absolute-bottom text-subtitle2 text-center",staticStyle:{color:"#fff","font-size":"small","background-color":"#00000087","margin-bottom":"-1px"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1)})),0)])])],1),a("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"ep"}},[a("q-virtual-scroll",{staticStyle:{"max-height":"300px"},attrs:{items:t.ep,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,n=e.index;return[a("q-item",{key:n,attrs:{dense:""}},[a("q-btn",{staticStyle:{width:"100%",padding:"2px",margin:"4px"},attrs:{color:"white",clickable:""},on:{click:function(e){return t.openEps(i.id)}}},[a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"text-center",staticStyle:{color:"black"}},[t._v("\n          "+t._s(i.name)+"\n        ")])])])],1)]}}])})],1),a("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"commant"}},[a("q-card",{staticClass:"my-card text-white",staticStyle:{"background-color":"#673ab7","margin-bottom":"7px"}})],1)],1)],1)],1)],1)],1)])],1)},n=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("6762"),a("2fdb"),a("c47a")),o=a.n(r),s=a("534b"),c=a("2f62");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"DefaultToolbar",components:{},data:function(){return{searchs:!1,whenopendata:[],titlepage:"",slide:1,page2:!1,slide2:1,autoplay:!1,count:0,string:"",string2:"",sd:"",hd:"",epid:"",others:[],dialog:!1,maximizedToggle:!0,dialogplayer:!1,dialogmenu:!1,tab:"main",tabs:"info",linklatest:"",linkall:"",itemsinfo:{},ep:[]}},mixins:[s["a"]],props:[],methods:d({},Object(c["b"])(["toggleLeftDrawer"]),{myFunctionClick:function(){var t=this;this.$q.dialog({dark:!0,title:"البحث",ok:"بحث",cancel:"الغاء",prompt:{model:"",type:"text"},persistent:!0}).onOk((function(e){t.getSearch(e)})).onCancel((function(){})).onDismiss((function(){}))},openEps:function(t){var e=navigator.userAgent.includes("SevenZero");!0===e&&(window.location.href="https://snoanime.com/ios.php/?id="+t+"&epid="+t+"&api=https://snoanime.com/api/new/server.php")},getSearch:function(t){var e=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/search.php/?name="+t).then((function(t){var a=t.data;e.searchs=!0,e.whenopendata=a,e.$q.loading.hide()})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))},loadinfo:function(t){var e=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/info.php/?id="+t).then((function(t){e.done="",e.dones="",e.string="",e.string2="",e.itemsinfo="",e.others="",e.ep="";for(var a=0;a<t.data.length;a++)e.string=e.string+t.data[a];for(var i=JSON.parse(atob(e.string)),n=i.slice().reverse(),r=0;r<n.length;r++)e.string2=e.string2+n[r];var o=JSON.parse(atob(e.string2)),s=e;s.dialog=!0,s.itemsinfo=o.main,s.others=o.other,s.ep=o.ep,e.$q.loading.hide(),e.string="",e.string2=""})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))}})},f=p,h=a("2877"),g=Object(h["a"])(f,i,n,!1,null,"7940a2d9",null),u=g.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,a){this.onSwitch(),a()},methods:{onSwitch:function(){this.setToolbar(u)}}}}}]);