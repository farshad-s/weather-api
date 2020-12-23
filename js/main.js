let endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={API_KEY}";

let dropdown = document.getElementById("dropdown");
let dropdownBox = document.getElementById("dropdown-box");

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
