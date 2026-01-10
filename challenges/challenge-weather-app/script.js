const WEATHER_API_KEY = CONFIG.WEATHER_API_KEY;
const UNSPLASH_ACCESS_KEY = CONFIG.UNSPLASH_ACCESS_KEY;

function getWeather(city) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeather(data);
      getImages(data.weather[0].description);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  const conditionsElement = document.getElementById("conditions");
  conditionsElement.textContent = `${data.weather[0].description} - ${data.main.temp}°C`;
}

function getImages(description) {
  const imagesUrl = `https://api.unsplash.com/search/photos?query=${description}&client_id=${UNSPLASH_ACCESS_KEY}`;

  fetch(imagesUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayImages(data.results);
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}

function displayImages(images) {
  const thumbsElement = document.getElementById("thumbs");
  thumbsElement.innerHTML = "";

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.classList.add("thumb");
    imgElement.src = image.urls.small;
    imgElement.alt = image.alt_description;

    imgElement.addEventListener("click", () => {
      displayMainImage(image.urls.full);
    });

    thumbsElement.appendChild(imgElement);
  });
}

function displayMainImage(url) {
  const photoElement = document.getElementById("photo");
  photoElement.innerHTML = `<img src="${url}" alt="Main weather image">`;
}

const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityInput = document.getElementById("search-tf");
  const city = cityInput.value.trim();

  if (city) {
    getWeather(city);
  }
});

getWeather("London");
