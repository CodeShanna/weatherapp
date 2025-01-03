function updateTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#cityName");

  cityElement.innerHTML = response.data.city;
  //Moved this from the updateCity function so that the city spelling and format would be the result of the API call.
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateTemperature);
}

function updateCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#searchInput");
  searchCity(citySearch.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", updateCity);

searchCity("Tübingen");
