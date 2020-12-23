let endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={API_KEY}";

let dropdown = document.getElementById("dropdown");
let dropdownBox = document.getElementById("dropdown-box");

let cardTitle = document.getElementById("card-title");
let weatherType = document.getElementById("card-text-type");
let weatherDesc = document.getElementById("card-text-temp");

dropdown.addEventListener("click", function () {
  dropdownBox.style.display !== "none"
    ? (dropdownBox.style.display = "none")
    : (dropdownBox.style.display = "block");
});

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {})
  .catch((error) => {
    console.log("error is", error);
  });
