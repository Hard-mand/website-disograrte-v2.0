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
  html("../html/menu.html", "header");
  html("../html/footer.html", "footer");
  html("../html/wh.html", "wh");
  // index.html
  html("../html/home/head.html", "head");
  html("../html/home/section1.html", "section1");
  html("../html/home/section2.html", "section2");
  html("../html/home/section3.html", "section3");
})