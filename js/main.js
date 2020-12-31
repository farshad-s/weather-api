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

const instructionsToUse = () => {
  let instructions = document.getElementById("instructions");
  if (
    endpoint ==
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID={API_KEY}`
  ) {
    dropdownBox.style.display = "block";
    dropdownRoot.innerHTML = `
  <div class="instructions center-align" id="instructions">
  <h1>Instructions:</h1>
  <ol>
    <li>Go to: https://openweathermap.org/price</li>
    <li>Click on Get API Key under the heading Free</li>
    <li>Sign up - you should receieve an Email within 15 minutes</li>
    <li>Go to: https://github.com/farshad-s/weather-api</li>
    <li>Click on Code</li>
    <li>Download/Clone the repository</li>
    <li>Go into js folder, main.js file</li>
    <li>Replace {API_KEY} with your API Key</li>
    <li>Run the website (e.g. with live server)</li>
    <li>Get live weather updates!</li>
  </ol>
  </div>`;
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
};

dropdown.addEventListener("click", function () {
  dropdownBox.style.display !== "block"
    ? (dropdownBox.style.display = "block")
    : (dropdownBox.style.display = "none");
});

instructionsToUse();
