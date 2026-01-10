
const API_KEY_UNSPLASH = 'ultUyUIgKl_K25Y6i3Kjd7q39AloyhYVATc_0ReMf_8'; 
const API_KEY_OPENWEATHER = '65e6f8a25588f270af49a494b6d45181'; 

function getWeather(city) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPENWEATHER}&units=metric`;

  
  fetch(weatherUrl)
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
      displayWeather(data); 
      getImages(data.weather[0].description); 
    })
    .catch(error => {
      console.error('Error fetching weather data:', error); 
    });
}
function displayWeather(data) {
  const conditionsElement = document.getElementById('conditions');
  conditionsElement.textContent = `${data.weather[0].description} - ${data.main.temp}°C`;
}
function getImages(description) {
  const imagesUrl = `https://api.unsplash.com/search/photos?query=${description}&client_id=${API_KEY_UNSPLASH}`;

  fetch(imagesUrl)
    .then(response => response.json()) 
    .then(data => {
      console.log(data);
      displayImages(data.results); 
    })
    .catch(error => {
      console.error('Error fetching images:', error); 
    });
}