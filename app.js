//! Elements
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".fa-magnifying-glass");
let temperature = document.querySelector(".temperature");
let wind = document.querySelector(".speed");
let humidity = document.querySelector(".humidity");
let cityName = document.querySelector(".city-name");
const container = document.querySelector(".container");
let imageWeather = document.querySelector(".weather-cond");
let imagePng = document.querySelector(".image-weather");
let discription = document.querySelector(".discription");
let notFound = document.querySelector(".not-found");
let found = document.querySelector(".found");

function fetchData() {
  container.style.height = "550px";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=e75ba0e40406c5218414e63f26729b53`;
  async function searchData() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      cityName.innerHTML = searchInput.value;
      wind.innerHTML = `${data.wind.speed}km/h`;
      temperature.innerHTML = `${parseInt(data.main.temp)}°C`;
      humidity.innerHTML = `${data.main.humidity}%`;
      imagePng.classList.add("visible");
      discription.innerHTML = `${data.weather[0].description}`;
      // if(data.cod = "404"){
      //   console.log('wooooow');
      // }
      switch (data.weather[0].main) {
        case "Clear":
          imageWeather.src = "../images/weather state/sun.png";
          // document.body.style.backgroundImage = 'url("./images/weather state/sun.png")';
          break;
        case "Clouds":
          imageWeather.src = "../images/weather state/clouds.png";
          // document.body.style.backgroundImage = 'url("./images/weather state/clouds.png)';
          break;
        case "Rain":
          imageWeather.src = "../images/weather state/heavy-rain.png";
          // document.body.style.backgroundImage = 'url("./images/weather state/heavy-rain.png")';
          break;
        case "Snow":
          imageWeather.src = "../images/weather state/snowflake.png";
          // document.body.style.backgroundImage = 'url("./images/snow.jpg")';
          break;
        default:
          imageWeather.src = "../images/rain.jpg";
      }
      
      
    } catch {
      notFound.style.display = 'block';
      found.style.display= 'none'
    }
  }
  searchData();
}
searchButton.addEventListener("click", fetchData);
searchInput.addEventListener("keypress", (event) => {
  console.log(event.key);
  if (event.key === "Enter") {
    fetchData();
  }
});
