(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{1092:function(t,e,i){"use strict";var a=i("bc21"),n=i.n(a);n.a},"1b62":function(t,e,i){"use strict";var a=i("534b");i.d(e,"c",(function(){return a["a"]}));var n=i("c6e7");i.d(e,"b",(function(){return n["a"]}));var o=i("1f8c"),r=i.n(o);i.d(e,"a",(function(){return r.a}))},"1f8c":function(t,e){},"534b":function(t,e,i){"use strict";i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d");var a=i("c47a"),n=i.n(a),o=i("2f62");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]={computed:s({leftDrawerOpen:{get:function(){return this.$store.getters.leftDrawerOpen},set:function(t){this.$store.commit("setLeftDrawerOpen",t)}}},Object(o["c"])(["toolbar","editor"])),methods:s({},Object(o["b"])(["setLeftDrawerOpen","setToolbar","setEditor"]))}},bc21:function(t,e,i){},c6e7:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-toolbar",{staticStyle:{"text-align":"center"}},[i("q-toolbar-title",{staticStyle:{"margin-left":"35px"}},[t._v("\n        المشاهدة\n      ")]),i("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)},n=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),r=i.n(o),s=i("534b"),c=i("2f62");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"DefaultToolbar",mixins:[s["a"]],props:[],methods:d({},Object(c["b"])(["toggleLeftDrawer"]))},p=f,g=i("2877"),h=Object(g["a"])(p,a,n,!1,null,null,null),u=h.exports;e["a"]={mounted:function(){this.onSwitch()},beforeRouteUpdate:function(t,e,i){this.onSwitch(),i()},methods:{onSwitch:function(){this.setToolbar(u)}}}},d6d0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticStyle:{"background-color":"#222222","margin-bottom":"55px"}},[i("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("q-tab-panel",{attrs:{name:"community"}},[i("div",{staticClass:"text-h6"},[t._v("            يتم العمل عليها\n")])]),i("q-tab-panel",{attrs:{name:"news"}},[i("div",{staticClass:"text-h6"},[t._v("            يتم العمل عليها\n")])]),i("q-tab-panel",{staticStyle:{"background-color":"#222222"},attrs:{name:"main"}},[i("div",{staticClass:"row"},[i("h5",{staticStyle:{"font-size":"15px",color:"#ffffffad","text-align":"start","font-family":"inherit"}},[t._v("عرض الكل")]),i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"right",width:"-webkit-fill-available",position:"absolute","margin-right":"33px"}},[t._v("أخر المضاف")])]),i("q-card",[i("q-carousel",{ref:"carousel",staticStyle:{height:"180px"},attrs:{swipeable:"",animated:"",autoplay:t.autoplay,infinite:""},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.newan,(function(e){return i("q-carousel-slide",{key:e.id,staticStyle:{padding:"0px","box-shadow":"inset 0px -60px 10px -10px #00000048"},attrs:{name:e.ids,id:e.id,"img-src":e.image},on:{click:function(i){return t.loadinfo(e.id)}}},[i("div",{staticClass:"your-div",staticStyle:{weight:"100%"}},[i("span",{staticClass:"your-div-span"},[t._v(t._s(e.epName))])])])})),1)],1),i("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-right":"10px"}}),i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("التصنيفات")]),i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-left":"10px"}})]),i("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[i("div",[i("div",{staticClass:"row no-wrap"},t._l(t.genere,(function(e){return i("q-chip",{key:e.name,attrs:{clickable:"",color:"white","text-color":"black"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)])]),i("div",{staticStyle:{"margin-top":"3px"}},[i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"right"}},[t._v("مختارة لكم")])]),i("q-card",[i("q-carousel",{ref:"carousel",staticStyle:{height:"180px"},attrs:{swipeable:"",animated:"",autoplay:t.autoplay,infinite:""},model:{value:t.slide2,callback:function(e){t.slide2=e},expression:"slide2"}},t._l(t.foryou,(function(e){return i("q-carousel-slide",{key:e.id,staticStyle:{padding:"0px","box-shadow":"inset 0px -60px 10px -10px #00000048"},attrs:{name:e.ids,"img-src":e.image},on:{click:function(i){return t.loadinfo(e.id)}}},[i("div",{staticClass:"your-div",staticStyle:{weight:"100%"}},[i("span",{staticClass:"your-div-span"},[t._v(t._s(e.name))])])])})),1)],1),i("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-right":"10px"}}),i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("المواسم")]),i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-left":"10px"}}),i("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[i("div",[i("div",{staticClass:"row no-wrap"},t._l(t.season,(function(e){return i("q-chip",{key:e.name,attrs:{clickable:"",color:"white","text-color":"black"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)])])],1),i("div",{staticClass:"row"},[i("h5",{staticStyle:{"font-size":"15px",color:"#ffffffad","text-align":"start","font-family":"inherit"}},[t._v("عرض الكل")]),i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"right",width:"-webkit-fill-available",position:"absolute","margin-right":"33px"}},[t._v("قائمة ألانمي")])]),i("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[i("div",[i("div",{staticClass:"row no-wrap"},t._l(t.animelist,(function(e){return i("div",{key:e.id,staticStyle:{},on:{click:function(i){return t.loadinfo(e.id)}}},[i("q-card",{staticClass:"my-cardt"},[i("img",{staticStyle:{height:"150px","object-fit":"cover","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},attrs:{src:e.image}}),i("div",{staticClass:"absolute-bottom text-subtitle2 text-center",staticStyle:{color:"#fff","font-size":"small","background-color":"#00000087","margin-bottom":"-1px"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1)})),0)])]),i("div",{staticStyle:{weight:"100%"}},[i("h5",{staticStyle:{"font-size":"19px",color:"white","font-weight":"bold","text-align":"right",width:"-webkit-fill-available"}},[t._v("شوهد مؤخرا")])]),i("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[i("div",[i("div",{staticClass:"row no-wrap"},t._l(t.watching,(function(e){return i("div",{key:e.id,staticStyle:{},on:{click:function(i){return t.loadinfo(e.id)}}},[i("q-card",{staticClass:"my-cardt"},[i("img",{staticStyle:{height:"150px","object-fit":"cover","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},attrs:{src:e.image}}),i("div",{staticClass:"absolute-bottom text-subtitle2 text-center",staticStyle:{color:"#fff","font-size":"small","background-color":"#00000087","margin-bottom":"-1px"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1)})),0)])])],1),i("q-tab-panel",{attrs:{name:"myanime"}},[i("div",{staticClass:"text-h6"},[t._v("            يتم العمل عليها")])]),i("q-tab-panel",{attrs:{name:"settings"}},[i("div",{staticClass:"text-h6"},[t._v("            يتم العمل عليها")])])],1),i("q-separator"),i("q-tabs",{staticClass:"fixed-bottom",staticStyle:{"background-color":"#222222 !important",color:"white"},attrs:{dense:"",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("q-tab",{attrs:{name:"community",icon:"forum",label:"المجتمع"}}),i("q-tab",{attrs:{name:"news",icon:"list_alt",label:"الاخبار"}}),i("q-tab",{attrs:{name:"main",icon:"live_tv",label:"المشاهدة"}}),i("q-tab",{attrs:{name:"myanime",icon:"favorite_border",label:"أنمياتي"}}),i("q-tab",{attrs:{name:"settings",icon:"account_circle",label:"الاعدادات"}})],1),i("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("div",{staticStyle:{"background-color":"#ffffff"}},[i("q-scroll-area",{staticStyle:{height:"100%",width:"100%","background-color":"#222222 !important"},attrs:{vertical:""}},[i("q-layout",{staticStyle:{background:"#222222"},attrs:{view:"hHh lpR fFf"}},[i("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[i("div",{staticClass:"row",staticStyle:{background:"transparent",width:"100%",padding:"10px"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",dense:"",round:"","aria-label":"خروج"},on:{click:function(e){return t.closes()}}},[i("q-icon",{attrs:{name:"keyboard_arrow_down"}})],1),i("q-toolbar-title"),i("q-btn",{staticStyle:{color:"ghostwhite"},attrs:{dense:"",flat:"",round:"",icon:"favorite_border"}})],1),i("q-toolbar",[i("q-img",{staticStyle:{height:"270px",position:"static"},attrs:{src:t.itemsinfo.cover}},[i("div",{staticStyle:{color:"white",height:"100%",width:"100%",background:"transparent"}},[i("div",{staticStyle:{height:"100%","text-align":"center"}},[i("img",{staticStyle:{width:"110px","margin-top":"40px"},attrs:{src:t.itemsinfo.cover}}),i("h2",{staticStyle:{"font-size":"15px","font-weight":"450"}},[t._v(t._s(t.itemsinfo.name))])])])])],1),i("q-tabs",{staticClass:"bg-grey-3 text-grey-7",staticStyle:{margin:"5px",color:"white !important","background-color":"#222222 !important","box-shadow":"0px 0px 16px 20px rgb(34, 34, 34)"},attrs:{"narrow-indicator":"",dense:"","active-color":"#ffffff","indicator-color":"#ffffff",align:"justify"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("q-tab",{attrs:{name:"info",label:"معلومات الانمي"}}),i("q-tab",{attrs:{name:"ep",label:"الحلقات"}}),i("q-tab",{attrs:{name:"commant",label:"تعليقات الاعضاء"}})],1)],1),i("q-page-container",[i("q-tab-panels",{staticClass:"text-black",staticStyle:{background:"#222222"},attrs:{animated:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("q-tab-panel",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"info"}},[i("div",{staticClass:"row no-wrap",staticStyle:{"place-content":"center"}},t._l(t.itemsinfo.genres,(function(e){return i("q-chip",{key:e.name,attrs:{color:"white","text-color":"black"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1),i("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[i("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التصنيف : "+t._s(t.itemsinfo.age))]),i("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"calendar_today"}}),i("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التاريخ : "+t._s(t.itemsinfo.realease))]),i("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"event_available"}})],1),i("div",{staticClass:"row",staticStyle:{"align-items":"center","place-content":"center",color:"white","font-size":"larger"}},[i("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("التقيم : "+t._s(t.itemsinfo.rank))]),i("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"person"}}),i("q-chip",{staticStyle:{padding:"unset","margin-right":"2px"},attrs:{color:"transparent","text-color":"white"}},[t._v("الحالية : "+t._s(t.itemsinfo.status))]),i("q-chip",{staticStyle:{padding:"unset"},attrs:{color:"transparent","text-color":"white",icon:"poll"}})],1),i("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-right":"10px"}}),i("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("القصة")]),i("div",{staticStyle:{height:"1px",width:"25%","background-color":"#fffffff0","align-self":"center","margin-left":"10px"}})]),i("div",{staticStyle:{"text-align":"center",width:"100%",color:"white"},domProps:{innerHTML:t._s(t.itemsinfo.story)}},[t._v("\n"+t._s(t.itemsinfo.story)+"\n")]),i("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[i("h5",{staticStyle:{"font-size":"17px",color:"white","font-weight":"bold","text-align":"center"}},[t._v("انميات اخرى")])]),i("div",{staticClass:"row",staticStyle:{"place-content":"center"}},[i("div",{staticStyle:{height:"1px",width:"80%","background-color":"#fffffff0","align-self":"center"}})]),i("q-scroll-area",{staticClass:"rounded-borders",staticStyle:{"background-color":"#00000000 height: 210px",width:"100%"},attrs:{horizontal:""}},[i("div",[i("div",{staticClass:"row no-wrap"},t._l(t.others,(function(e){return i("div",{key:e.id,staticStyle:{},on:{click:function(i){return t.loadinfo(e.id)}}},[i("q-card",{staticClass:"my-cardt"},[i("img",{staticStyle:{height:"150px","object-fit":"cover","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},attrs:{src:e.image}}),i("div",{staticClass:"absolute-bottom text-subtitle2 text-center",staticStyle:{color:"#fff","font-size":"small","background-color":"#00000087","margin-bottom":"-1px"}},[t._v("\n          "+t._s(e.title)+"\n        ")])])],1)})),0)])])],1),i("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"ep"}},t._l(t.ep,(function(e){return i("q-btn",{key:e.id,staticStyle:{width:"100%",padding:"2px",margin:"4px"},attrs:{color:"white",clickable:""},on:{click:function(i){return t.openEps(e.id)}}},[i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"text-center",staticStyle:{color:"black"}},[t._v("\n          "+t._s(e.name)+"\n        ")])])])})),1),i("q-tab-panel",{staticStyle:{padding:"11px !important"},attrs:{name:"commant"}},[i("q-card",{staticClass:"my-card text-white",staticStyle:{"background-color":"#673ab7","margin-bottom":"7px"}})],1)],1)],1)],1)],1)],1)]),i("q-dialog",{attrs:{persistent:"",maximized:!1},model:{value:t.dialogmenu,callback:function(e){t.dialogmenu=e},expression:"dialogmenu"}},[i("div",{staticStyle:{"background-color":"#222222",width:"100%"}},[i("div",{staticStyle:{"text-align":"center","background-color":"rgb(23, 22, 22)",height:"40px",width:"100%"}},[i("h6",{staticStyle:{height:"100%",width:"100%",color:"white","font-size":"large"}},[t._v("الخيارات")])]),i("div",{staticClass:"row",staticStyle:{padding:"3px","justify-content":"center"}},[i("q-btn",{staticStyle:{margin:"3px","background-color":"#ffffff"},attrs:{onclick:t.getEp},on:{click:function(e){t.dialogmenu=!1}}},[t._v("تشغيل")]),i("q-btn",{staticStyle:{margin:"3px","background-color":"#ffffff"},on:{click:function(e){t.dialogmenu=!1}}},[t._v("الغاء")])],1)])])],1)},n=[],o=(i("6762"),i("2fdb"),i("1b62")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){return[i("q-toolbar",{staticClass:"menubar"},[i("q-toolbar-title",{staticStyle:{"margin-left":"35px","text-align":"center"}},[t._v("\n      المشاهدة\n    ")]),i("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"search"}})],1)]}}])})},s=[],c=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),l=i.n(c),d=i("534b"),f=i("cd42"),p=i("2f62");function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){l()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={name:"BasicToolbar",mixins:[d["a"]],props:[],components:{EditorMenuBar:f["d"]},methods:h({},Object(p["b"])(["toggleLeftDrawer"]))},b=u,m=i("2877"),y=Object(m["a"])(b,r,s,!1,null,null,null),v=y.exports,w={mixins:[o["c"],o["b"]],components:{},data:function(){return{slide:1,slide2:1,autoplay:!1,count:0,string:"",string2:"",sd:"",hd:"",epid:"",others:[],newan:[],foryou:[],animelist:[],watching:[],genere:[],season:[],dialog:!1,maximizedToggle:!0,dialogplayer:!1,dialogmenu:!1,tab:"main",tabs:"info",itemsinfo:{},ep:[]}},beforeDestroy:function(){},methods:{getPic:function(t){return this.items[t].image},openEps:function(t){var e=navigator.userAgent.includes("SevenZero");!0===e&&(window.location.href="https://snoanime.com/ios.php/?id="+t+"&epid="+t+"&api=https://snoanime.com/api/new/server.php")},loadData:function(){var t=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/newindex.php/").then((function(e){t.done="",t.dones="";for(var i=0;i<e.data.length;i++)t.string=t.string+e.data[i];for(var a=JSON.parse(atob(t.string)),n=a.slice().reverse(),o=0;o<n.length;o++)t.string2=t.string2+n[o];var r=JSON.parse(atob(t.string2));t.newan=r.latest,t.foryou=r.foryou,t.genere=r.genere,t.season=r.season,t.watching=r.top,t.animelist=r.lists,t.slide2=r.foryou[0].ids,t.slide=r.latest[0].ids,t.$q.loading.hide(),t.string="",t.string2=""})).catch((function(){t.$q.loading.hide(),t.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))},closes:function(){this.tabs="info",this.dialog=!1},loadinfo:function(t){var e=this;this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/info.php/?id="+t).then((function(t){e.done="",e.dones="",e.string="",e.string2="",e.itemsinfo="",e.others="",e.ep="";for(var i=0;i<t.data.length;i++)e.string=e.string+t.data[i];for(var a=JSON.parse(atob(e.string)),n=a.slice().reverse(),o=0;o<n.length;o++)e.string2=e.string2+n[o];var r=JSON.parse(atob(e.string2)),s=e;s.dialog=!0,s.itemsinfo=r.main,s.others=r.other,s.ep=r.ep,e.$q.loading.hide(),e.string="",e.string2=""})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))},clearEP:function(){this.sd="",this.hd="",this.epid=""},clearINFO:function(){var t=this;t.dialog=!1,t.itemsinfo="",t.others="",t.ep=""},loadplayer:function(t){var e=this;this.sd="",this.hd="",this.$q.loading.show({message:"<span>يرجى الأنتظار</span>"}),this.$axios.get("https://snoanime.com/data/open.php/?id=678ee8163").then((function(t){e.done="",e.dones="",e.sd="",e.hd="",e.epid="",e.string="",e.string2="";for(var i=0;i<t.data.length;i++)e.string=e.string+t.data[i];for(var a=JSON.parse(atob(e.string)),n=a.slice().reverse(),o=0;o<n.length;o++)e.string2=e.string2+n[o];var r=JSON.parse(atob(e.string2));e.sd=r.sd,e.hd=r.hd,e.epid=r.id,e.dialogmenu=!0,e.$q.loading.hide()})).catch((function(){e.$q.loading.hide(),e.$q.notify({color:"negative",position:"top",message:"توجد مشكلة في الشبكة حاول أعادة الفتح",icon:"report_problem"})}))}},computed:{getEp:function(){return this.clearEP(),"showDialog('"+this.epid+"')"}},created:function(){this.setToolbar(v),this.loadData()}},x=w,S=(i("1092"),Object(m["a"])(x,a,n,!1,null,"0a289b47",null));e["default"]=S.exports}}]);