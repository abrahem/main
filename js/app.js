// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.snoanimex.iq', // App bundle ID
  name: 'SnoAnimeX', // App name
  theme: 'auto',
  lazy: {
    threshold: 50,
    sequential: false,
  },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});
// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

app.sheet.create({
  el: '.my-sheet-swipe-to-close',
  swipeToClose: true,
  backdrop: true,
});

var maxItems = "";
var animedata = "";
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

app.preloader.show();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {      
    if (localStorage.getItem("SaveLogin")) {
	   toastBottom.open();
	   document.getElementById("btns").innerText = "تسجيل خروج";
    } else {

    }
      var obj = JSON.parse(xhttp.responseText);
      for (i = 0; i < obj.length; i++) {
        var n = navigator.userAgent.includes("99990000");
        if (n == true) {
         var oimg = obj[i].image;
        } else {
          var oimg = obj[i].image;
        }
        var id = 'https://snoanime.com/api/new/info.php/?url='+obj[i].id;
        createitem(oimg,obj[i].name,obj[i].epName,id,obj[i].status,obj[i].year);
      }
      app.preloader.hide();
    }
  };
  xhttp.open("GET", "https://snoanime.com/api/new/", true);
  xhttp.send();