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
  .then((data) => {
    const name = data.name,
      currentWeather = data.weather[0].main,
      weatherDescription = data.weather[0].description;

    cardTitle.innerText = data.name;
    weatherType.innerText = "Weather: " + currentWeather;
    weatherDesc.innerText = "Description: " + weatherDescription;
  })
  .catch((error) => {
    console.log("error is", error);
  });
