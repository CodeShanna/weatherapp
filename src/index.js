function updateTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#cityName");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  //Moved this from the updateCity function so that the city spelling and format would be the result of the API call.
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%,`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}'
}

function searchCity(city) {
  let apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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

//Details for the humidity