function toDisplayClickHandler(i) {
  console.log(allToDisplayElements[i]);
  allToDisplayElements[i].classList.toggle("hide");
}
// get all buttons in an array
const allDisplayButtonElements = document.querySelectorAll(
  ".about-article h2 button"
);
// get all blocks to display in an array
const allToDisplayElements = document.querySelectorAll(
  ".about-article .to-display"
);

allDisplayButtonElements.forEach((button, i) => {
  button.addEventListener("click", () => toDisplayClickHandler(i));
});

const map = L.map("map").setView([-37.857611, 175.680167], 14);
var marker = L.marker([-37.859625, 175.681403]).addTo(map);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
