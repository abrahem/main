import Framework7 from 'framework7/framework7.esm.bundle.js';
import $$ from 'dom7';
import Template7 from 'template7';
import Utils from 'util'
// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

window.Template7 = Template7;
window.$$ = $$;
window.Framework7 = Framework7;

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';
var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  material: true,
  name: 'SAnime', // App name
  theme: 'md', // Automatic theme detection
  statusbar: {
    iosOverlaysWebView: true,
    enabled: true,
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    parseData: function (datas) {
      var data = JSON.parse(datas);
      var string = "";
      for (let index = 0; index < data.length; index++) {
          string = string + data[index]
      }
      var done = JSON.parse(window.atob(string))
      var dones = done.slice().reverse()
      var string2 = "";
      for (let index = 0; index < dones.length; index++) {
             string2 = string2 + dones[index]
      }
      var respons = JSON.parse(atob(string2))
      return respons;
    },
    goPage: function (datas) {
      app.views.main.router.back();
      app.preloader.show();
      setTimeout(function() {
        app.preloader.hide();
        app.views.main.router.navigate(datas, { transition: 'f7-dive'})
      },700);
    },
    goAnime: function (id) {
      app.views.main.router.back();
      app.preloader.show();
      setTimeout(function() {
        app.preloader.hide();
        app.views.main.router.navigate('/showinfo/'+id+'/',{ transition: 'f7-dive'});
      },700);
    },
    onPlayerError: function (epsd,ephd,players) {
      var playerhtml = '<video id="my-video" class="video-js" controls preload="auto" style="width: 100%; height: 100%;" data-setup="{}"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that<a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>'
      var player = videojs("my-video");
      player.dispose();
      var playerlst = document.getElementById("playerlist");
      playerlst.innerHTML = playerhtml;
      setTimeout(function() {
        var videos = videojs("my-video");
        videos.src([
          {
            src: ephd,
            type: 'video/mp4',
            label: '720P',
          },
          {
            src: epsd,
            type: 'video/mp4',
            label: '360P',
            selected: true,
          },
        ]);
        videojs("my-video").on('error', function() {
          console.log("error player");
          app.methods.onPlayerError(epsd,ephd,videojs("my-video"));
          });
        videojs("my-video").controlBar.addChild('QualitySelector');
        videos.play();
      },1000);
    },
    goNews: function (id) {
      var res = id.replace("https://snoanime.com/data/user/newslink.php?url=", "");
      document.getElementById("newsframe").src = "https://animeify.net/animeify/files/news/content_dark/"+res+".html";
      app.popup.open('#newsplayer',true);
    },
    onBackKeyDown: function() {
      var leftp = app.panel.left && app.panel.left.opened;
      var rightp = app.panel.right && app.panel.right.opened;
      if ( leftp || rightp ) {
          app.panel.close();
          return false;
      }else if ($$('.modal-in').length > 0) {
          app.dialog.close();
          app.popup.close();
          return false;
      } else if (app.views.main.router.url == '/') {
          window.close();
      } else {
          app.views.main.router.back();
      }
    },
    downloadAnime: function(sd,hd) {
      app.dialog.create({
        title: '',
        text: 'قم بأختيار الدقة',
        buttons: [
          {
            text: '<span onclick="app.methods.downloadA(false);">الدقة الضعيفة</span>',
          },
          {
            text: '<span onclick="app.methods.downloadA(true);">الدقة العالية</span>',
          },
        ],
        verticalButtons: false,
      }).open();
    },
    downloadA: function(ishd) {
      if (ishd) {
        window.open(document.getElementById("animehd").innerText);
      } else {
        window.open(document.getElementById("animesd").innerText);
      }
    }
  },

  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});
window.app = app;
var ANIMESD = "";
var ANIMEJD = "";
window.ANIMESD = ANIMESD;
window.ANIMEJD = ANIMEJD;
//setTimeout(function() {
  //var links = document.createElement("link");
  //links.setAttribute("href","https://vjs.zencdn.net/7.8.4/video-js.css");
  //links.setAttribute("rel","stylesheet");
  //document.getElementsByTagName("html").item(0).children[0].appendChild(links);
  //var scrs = document.createElement("script");
  //scrs.setAttribute("src","https://vjs.zencdn.net/7.8.4/video.js");
  //document.getElementsByTagName("html").item(0).children[1].appendChild(scrs);
   //    setTimeout(function() {
       //   var linkss = document.createElement("link");
     //     linkss.setAttribute("href","https://cdn.jsdelivr.net/npm/silvermine-videojs-quality-selector@1.1.2/dist/css/quality-selector.css");
     //        linkss.setAttribute("rel","stylesheet");
    //        document.getElementsByTagName("html").item(0).children[0].appendChild(linkss);
    //       var scrss = document.createElement("script");
    //         scrss.setAttribute("src","https://cdn.jsdelivr.net/npm/silvermine-videojs-quality-selector@1.1.2/dist/js/silvermine-videojs-quality-selector.min.js");
    //        document.getElementsByTagName("html").item(0).children[1].appendChild(scrss);
     //       setTimeout(function() {
     //         videojs("my-video").controlBar.addChild('QualitySelector');
     //       },5000);
     //},1000);
 // }//,1000);
$$(document).on('page:init', '.page[data-name="animeinfo"]', function (e) {

})
$$(document).on('page:init', '.page[data-name="animelist"]', function (e) {
  function decode() {
    app.request.promise.get('https://snoanime.com/data/animels.php')
  .then(function (res) {
    var datas = JSON.parse(res.data);
    var allowInfinite = true;
    var lastItemIndex = $$('#animelist').children(0).length;
    var maxItems = datas.length - 1;
    var itemsPerLoad = 30;
    
    var htmls = '';
    for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
      var name = datas[i].name;
      if (name.length  > 30) {
        name = name.substring(0,29);
      } else {
        name = name;
      }
      var htm = '<div class="col-50 contanime"><div style="box-shadow:0px 0px 12px 1px #100e0e5e; background-color: #262e39 !important;" class="card demo-card-header-pic"><div style="border-radius: 4px; background: transparent !important; height: 100%; position: absolute; width: 100%;" class="actions-button"></div><div style="height: 250px;"><img style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;" src="'+datas[i].image+'"></div><div class="card-footer" style="border-top-style: outset; border-top-color: #0091ea; border-top-width: 2px;"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+name+'</div></div><div class="item-subtitle">'+datas[i].epName+'</div></div></div></div></div>'
      htmls +=  createItem(datas[i].id,name,datas[i].epName,datas[i].image,"");
    }
    $$('#animelist').append(htmls);
    var lastItemIndex = $$('#animelist').children(0).length;
    $$('.infinite-scroll-content').on('infinite', function () {
      if (!allowInfinite) return;
        allowInfinite = false;
        allowInfinite = true;
        if (lastItemIndex >= maxItems) {
          app.infiniteScroll.destroy('.infinite-scroll-content');
          $$('.infinite-scroll-preloader').remove();
          return;
        }
        var html = '';
        for (var i = lastItemIndex + 1; i <= lastItemIndex + itemsPerLoad; i++) {
          var name = datas[i].name;
          if (name.length  > 30) {
            name = name.substring(0,29);
          } else {
            name = name;
          }
          var htm = '<div class="col-50 contanime"><div style="box-shadow:0px 0px 12px 1px #100e0e5e; background-color: #262e39 !important;" class="card demo-card-header-pic"><div style="border-radius: 4px; background: transparent !important; height: 100%; position: absolute; width: 100%;" class="actions-button"></div><div style="height: 250px;"><img style="height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;" src="'+datas[i].image+'"></div><div class="card-footer" style="border-top-style: outset; border-top-color: #0091ea; border-top-width: 2px;"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+name+'</div></div><div class="item-subtitle">'+datas[i].epName+'</div></div></div></div></div>'
          html +=  createItem(datas[i].id,name,datas[i].epName,datas[i].image,"");
        }
        $$('#animelist').append(html);
        lastItemIndex = $$('#animelist').children(0).length
    });
  })
  .catch(function (err) {
    app.preloader.hide();
    console.log(err.xhr)
    console.log(err.status)
    console.log(err.message)
  })
  }
  setTimeout(function(){ 
    decode();
   }, 500);
  function createItem(id,title,ep,img,element) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("img");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var div9 = document.createElement("div");
    var div10 = document.createElement("div");
    div10.setAttribute("onclick","app.methods.goAnime("+id+")");
    div10.setAttribute("style","border-radius: 4px; background: transparent !important; height: 100%; position: absolute; width: 100%;");
    div10.setAttribute("class","actions-button");
    if (!navigator.userAgent.includes("SevenZero")) {
      if (navigator.userAgent.includes("TV")) {
        div1.setAttribute("class","col-25 contanime");
      } else {
        if (Framework7.device.ipad) {
        div1.setAttribute("class","col-25 contanime");
      } else {
          if (Framework7.device.android) {
            div1.setAttribute("class","col-50 contanime");
          } else {
            if (Framework7.device.desktop) {
              if (Framework7.device.macos) {
                div1.setAttribute("class","col-25 contanime");
              } else {
                div1.setAttribute("class","col-15 contanime");
              }
            } else {
              if (Framework7.device.macos) {
              div1.setAttribute("class","col-25 contanime");
              } else {
                if (Framework7.device.iphone || Framework7.device.ipod) {
                  div1.setAttribute("class","col-50 contanime");
                } else {
                  div1.setAttribute("class","col-15 contanime");
                }
              }
            }
          }
      }
      }
    } else {
      if (document.documentElement.clientWidth > 720) {
        div1.setAttribute("class","col-25 contanime");
      } else {
        div1.setAttribute("class","col-50 contanime");
      }
    }
      div2.setAttribute("style","box-shadow:0px 0px 12px 1px #100e0e5e; background-color: #262e39 !important;");
      div2.setAttribute("class","card demo-card-header-pic");
  
      if (!navigator.userAgent.includes("SevenZero")) {
      if (navigator.userAgent.includes("TV")) {
                  div3.setAttribute("style","height: 280px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                  div3.src = img;
                  div9.setAttribute("style","height: 280px;");
      } else {
        if (Framework7.device.ipad) {
        div3.setAttribute("style","height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
        div3.src = img;
        div9.setAttribute("style","height: 250px;");
      } else {
          if (Framework7.device.android) {
            div3.setAttribute("style","height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
            div3.src = img;
            div9.setAttribute("style","height: 250px;");
          } else {
            if (Framework7.device.desktop) {
              div3.setAttribute("style","height: 280px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
              div3.src = img;
              div9.setAttribute("style","height: 280px;");
            } else {
              if (Framework7.device.macos) {
                div3.setAttribute("style","height: 280px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                div3.src = img;
                div9.setAttribute("style","height: 280px;");
              } else {
                if (Framework7.device.iphone || Framework7.device.ipod) {
                  div3.setAttribute("style","height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                  div3.src = img;
                  div9.setAttribute("style","height: 250px;");
                } else {
                  div3.setAttribute("style","height: 280px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                  div3.src = img;
                  div9.setAttribute("style","height: 280px;");
                }
              }
            }
          }
      }
      }
      } else {
        if (document.documentElement.clientWidth > 720) {
                  div3.setAttribute("style","height: 280px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                  div3.src = img;
                  div9.setAttribute("style","height: 280px;");
        } else {
                  div3.setAttribute("style","height: 250px; width: 100%; object-fit: cover; border-top-left-radius: 4px; border-top-right-radius: 4px;");
                  div3.src = img;
                  div9.setAttribute("style","height: 250px;");
        }
      }

    div9.appendChild(div3);
    div4.setAttribute("class","card-footer");
    div4.setAttribute("style","border-top-style: outset; border-top-color: #0091ea; border-top-width: 2px;");
    div5.setAttribute("class","item-inner");
    div6.setAttribute("class","item-title-row");
    div7.setAttribute("class","item-title");
    div7.innerText = title;
    div8.setAttribute("class","item-subtitle");
    div8.innerText = ep;
    div6.appendChild(div7);
    div5.appendChild(div6);
    div5.appendChild(div8);
    div4.appendChild(div5);
    div2.appendChild(div10);
    div2.appendChild(div9);
    div2.appendChild(div4);
    div1.appendChild(div2);
    return div1.outerHTML;
  }
})
