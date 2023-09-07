export function html(url, id) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById(id).innerHTML = xhr.responseText;
    }
  };
  xhr.send()
}

document.addEventListener("DOMContentLoaded", function () {
  // All pages
  html("../html/menu", "header");
  html("../html/footer", "footer");
  html("../html/wh", "wh");
  // index.html
  html("../html/home/head", "head");
  html("../html/home/section1", "section1");
  html("../html/home/section2", "section2");
  html("../html/home/section3", "section3");
  html("../html/home/section4", "section4");
  html("../html/home/section5", "section5");
  html("../html/home/section6", "section6");
})