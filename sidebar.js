var xhrh = new XMLHttpRequest(),
  method = "GET",
  url = "/common.html";
var header = document.getElementsByTagName("header")[0];
xhrh.responseType="document";
xhrh.open(method, url, true);
xhrh.onreadystatechange = function () {
  if(xhrh.readyState === 4 && xhrh.status === 200) {
    var restxt=xhrh.responseXML;
    var int = restxt.getElementById("header_wrap");
    header.innerHTML=int.outerHTML;
    const open = document.getElementById("open_bt");
    const link = document.getElementById("link");
    const s_bg = document.getElementById("s_bg");
    open.onclick = function (){
      link.classList.remove("dp-none");
      s_bg.classList.remove("dp-none");
      link.classList.remove("d-none");
      s_bg.classList.remove("d-b-none");
      link.classList.add("d-show");
      s_bg.classList.add("d-b-show");
    }
    s_bg.onclick = function () {
      link.classList.remove("d-show");
      s_bg.classList.remove("d-b-show");
      link.classList.add("d-none");
      s_bg.classList.add("d-b-none");
      setTimeout(displaySet, 500)
    }
    function movepanel() {
      link.classList.remove("d-show");
      s_bg.classList.remove("d-b-show");
      link.classList.add("d-none");
      s_bg.classList.add("d-b-none");
      setTimeout(displaySet, 500)
    }
    function displaySet() {
      link.classList.add("dp-none");
      s_bg.classList.add("dp-none");
    }

    var rgb_color = 0;
    function setSwipe() {
      var t = document.getElementById("swipe");
      var s_X;
      var e_X;
      var dist = 30;
      t.addEventListener('touchstart', function(e) {
        e.preventDefault();
        s_X = e.touches[0].pageX;
      });
      t.addEventListener('touchmove', function(e) {
        e.preventDefault();
        e_X = e.changedTouches[0].pageX;
      });
      t.addEventListener('touchend', function(e) {
        if (s_X > e_X + dist) {
          movepanel();
        }
      });
    }
    setSwipe();
  }
};
xhrh.send();