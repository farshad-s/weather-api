let endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={API_KEY}";

let dropdown = document.getElementById("dropdown");
let dropdownBox = document.getElementById("dropdown-box");

let cardTitle = document.getElementById("card-title");
let weatherType = document.getElementById("card-text-type");
let weatherDesc = document.getElementById("card-text-temp");

let cardRoot = document.getElementById("card-root");

dropdown.addEventListener("click", function () {
  dropdownBox.style.display !== "none"
    ? (dropdownBox.style.display = "none")
    : (dropdownBox.style.display = "block");
});

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    const name = data.name,
      currentWeather = data.weather[0].main,
      weatherDescription = data.weather[0].description;

    cardRoot.innerHTML = `<div class="card-image">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Unusually_well_defined_warm_front.jpg/200px-Unusually_well_defined_warm_front.jpg"
      />
      <span class="card-title" id="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p id="card-text-type"></p>
      <p id="card-text-temp"></p>
    </div>`;
    console.log(cardRoot);
  })
  .catch((error) => {
    console.log("error is", error);
  });
