function updateCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#searchInput");
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = citySearch.value;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", updateCity);
