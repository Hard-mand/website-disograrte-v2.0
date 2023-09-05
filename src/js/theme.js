const dark = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  document.querySelector("#body").setAttribute("class", "container-md bg-black");
  document.querySelector("h1").setAttribute("class", "text-white fw-bold m-5 m-md-0 mb-3 mb-md-4");
  document.querySelector("h2").setAttribute("class", "text-white fw-bold m-5 m-md-0 mb-3 mb-md-4");
  document.querySelector("#p-header").setAttribute("class", "text-body fs-5 mx-5 mx-md-0");
  document.querySelector("#header").setAttribute("class", "bg-black sticky-top");
  

  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.setAttribute("class", "card mb-3 bg-secondary-subtle");
  });

  setCookie("theme", "dark");
  document.body.style.visibility = "visible"; // Mostrar el cuerpo
};

const light = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("#body").setAttribute("class", "container-md bg-light");
  document.querySelector("h1").setAttribute("class", "text-black fw-bold m-5 m-md-0 mb-3 mb-md-4");
  document.querySelector("h2").setAttribute("class", "text-black fw-bold m-5 m-md-0 mb-3 mb-md-4");
  document.querySelector("#p-header").setAttribute("class", "text-body fs-5 mx-5 mx-md-0");
  document.querySelector("#header").setAttribute("class", "bg-light sticky-top")

  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.setAttribute("class", "card mb-3 bg-light");
  });

  setCookie("theme", "light");
  document.body.style.visibility = "visible"; // Mostrar el cuerpo
};

const theme = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "dark" ?
    light() : dark();
};

window.addEventListener('load', checkThemePreference);

function setCookie(name, value) {
  const expires = "expires=Thu, 01 Jan 2099 00:00:00 UTC";
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkThemePreference() {
  const theme = getCookie("theme");
  if (theme === "light") {
    light();
  } else {
    dark();
  }
}