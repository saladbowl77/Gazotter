var d = document;
let text_input = d.getElementById("text_input");
let test_wrap = d.getElementById("test_wrap");
let text_show = d.getElementById("text_show");
const mk_image = d.getElementById("bg_image");
const output = d.getElementById("canvas_image");
const capture = d.getElementById("capture");
const sukasi_txt = d.getElementById("sukasi_txt");
const canvas_draw = d.getElementById("canvas_draw");
const setting_menu_button = d.getElementById("settings_button");
const setting_menu_close_button = d.getElementById("setting_menu_close_button");
const setting_menu_bg_close_button = d.getElementById("bg_close");
var setting_wrap = d.getElementById("setting_wrap");

window.onload = panel_settings();
function panel_settings() {
  window.scrollTo(0,0);
  const bg_1 = d.getElementById("bg_color_1").value;
  const bg_2 = d.getElementById("bg_color_2").value;
  const font = d.getElementById("font_color").value;
  const fontType = d.getElementById('font_type').value;
  const fontsize = d.getElementById("fontSize").value;
  let text = text_input.value.replace(/\n/g, "</span><span>");
  text = `<span>${text}</span>`
  text_show.innerHTML = text;
  capture.style.backgroundColor = bg_1;
  test_wrap.style.backgroundColor = bg_2;
  text_show.style.color = font;
  text_show.style.fontFamily = `${fontType}`;
  text_show.style.fontSize = fontsize + "pt";
  const xlines = d.getElementById( "XlineS" );
  const xlineValue = xlines.xline.value;
  const ylines = d.getElementById( "YlineS" );
  const ylineValue = ylines.yline.value;
  text_show.className = "";
  text_show.classList.add(xlineValue);
  text_show.classList.add(ylineValue);
  html2canvas(capture).then(canvas => {
    var imageData = canvas.toDataURL();
    output.setAttribute("src",canvas.toDataURL());
  });
}

setting_menu_button.addEventListener('click', function(){
  setting_wrap.classList.toggle("hidden");
}, false);
setting_menu_close_button.addEventListener('click', function(){
  setting_wrap.classList.toggle("hidden");
}, false);
setting_menu_bg_close_button.addEventListener('click', function(){
  setting_wrap.classList.toggle("hidden");
}, false);