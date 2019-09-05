// select dom(docuement object model) items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of the menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBranding.classList.add("show");
    menu.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    menuNav.classList.add("show");

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    menu.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    //set menu state
    showMenu = false;
  }
}

var iframe = document.getElementsByTagName("iframe")[0];
var url = iframe.src;
var getData = function(data) {
  if (
    data &&
    data.query &&
    data.query.results &&
    data.query.results.resources &&
    data.query.results.resources.content &&
    data.query.results.resources.status == 200
  )
    loadHTML(data.query.results.resources.content);
  else if (data && data.error && data.error.description)
    loadHTML(data.error.description);
  else loadHTML("Error: Cannot load " + url);
};
var loadURL = function(src) {
  url = src;
  var script = document.createElement("script");
  script.src =
    "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22" +
    encodeURIComponent(url) +
    "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=getData";
  document.body.appendChild(script);
};
var loadHTML = function(html) {
  iframe.src = "about:blank";
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(
    html.replace(
      /<head>/i,
      '<head><base href="' +
        url +
        '"><scr' +
        'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' +
        "ipt>"
    )
  );
  iframe.contentWindow.document.close();
};
loadURL(iframe.src);
