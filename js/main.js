let dropdown = document.getElementById("dropdown");
let dropdownBox = document.getElementById("dropdown-box");
let dropdownRoot = document.getElementById("dropdown-root");
let searchbar = document.getElementById("city-search");
let searchButton = document.getElementById("city-search-button");
let cityName = "";

let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f24bd35c80ae8608ad0888673b2b7239`;

searchButton.addEventListener("click", function () {
  dropdownBox.style.display !== "block"
    ? (dropdownBox.style.display = "block")
    : (dropdownBox.style.display = "block");
  cityName = searchbar.value;
  endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f24bd35c80ae8608ad0888673b2b7239`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name,
        currentWeather = data.weather[0].main,
        weatherDescription = data.weather[0].description,
        minTemp = data.main.temp_min,
        maxTemp = data.main.temp_max;

      dropdownRoot.innerHTML = `<ul>
    <li class="dropdown-header">
      Location <span class="dropdown-info">${name}</span>
    </li>
    <li class="dropdown-header">
      Weather <span class="dropdown-info">${currentWeather}</span>
    </li>
    <li class="dropdown-header">
      Description <span class="dropdown-info">${weatherDescription}</span>
    </li>
    <li class="dropdown-header">
      Minimum Temperature
      <span class="dropdown-info">${(minTemp - 273.15).toFixed(1)}&#8451</span>
    </li>
    <li class="dropdown-header">
      Maximum Temperature
      <span class="dropdown-info">${(maxTemp - 273.15).toFixed(1)}&#8451</span>
    </li>
  </ul>`;
    })
    .catch((error) => {
      console.log("error is", error);
    });
});

dropdown.addEventListener("click", function () {
  dropdownBox.style.display !== "block"
    ? (dropdownBox.style.display = "block")
    : (dropdownBox.style.display = "none");
});
