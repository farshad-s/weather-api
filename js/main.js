let endpoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={API_KEY}";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {})
  .catch((error) => {
    console.log("error is", error);
  });
