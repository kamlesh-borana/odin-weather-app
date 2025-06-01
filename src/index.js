import "./styles/main.css";
import {
  CONTENT_CONTAINER_CLASS_NAME,
  getWeatherInfoUrl,
} from "./utils/constants";
import { transformWeatherData } from "./utils/helpers";
import { renderWeatherUI } from "./components/weather";
import { renderLoader } from "./components/loader";
// import weatherInfo from "./utils/weatherData.json";

async function getWeatherInfo(location) {
  const response = await fetch(getWeatherInfoUrl(location));
  const weatherInfo = await response.json();
  console.log(weatherInfo);

  return weatherInfo;
}

// Using then to get the result data
// getWeatherInfo("mumbai").then((weatherInfo) => {
//   console.log(transformWeatherData(weatherInfo));
// });

// Using top level await to get result from a promise
// const weatherInfo = await getWeatherInfo("mumbai");
// console.log(transformWeatherData(weatherInfo));

const weatherForm = document.querySelector("#weatherForm");
const locationInput = document.querySelector("#locationInput");
const contentContainer = document.querySelector(
  `.${CONTENT_CONTAINER_CLASS_NAME}`
);

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  contentContainer.innerHTML = "";
  document.body.style.background = "none";

  renderLoader(contentContainer);

  const weatherInfo = await getWeatherInfo(locationInput.value);
  const transformedWeatherData = transformWeatherData(weatherInfo);
  console.log(transformedWeatherData);

  renderWeatherUI(transformedWeatherData, contentContainer);
});
