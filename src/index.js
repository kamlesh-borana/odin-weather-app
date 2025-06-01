import "./styles/main.css";
import {
  CONTENT_CONTAINER_CLASS_NAME,
  getWeatherInfoUrl,
} from "./utils/constants";
import { transformWeatherData } from "./utils/helpers";
import { renderWeatherUI } from "./components/weather";
import { renderLoader } from "./components/loader";
// import weatherInfo from "./utils/weatherData.json";

async function getWeatherInfo(location, unitGroup) {
  const response = await fetch(getWeatherInfoUrl(location, unitGroup));
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
const unitGroupSelection = document.querySelector(
  ".measurement-unit-container select"
);
const contentContainer = document.querySelector(
  `.${CONTENT_CONTAINER_CLASS_NAME}`
);

async function handleWeatherUI() {
  contentContainer.innerHTML = "";
  document.body.style.background = "none";

  renderLoader(contentContainer);

  const weatherInfo = await getWeatherInfo(
    locationInput.value,
    unitGroupSelection.value
  );
  const transformedWeatherData = transformWeatherData(weatherInfo);
  console.log(transformedWeatherData);

  renderWeatherUI(transformedWeatherData, contentContainer);
}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  handleWeatherUI();
});

unitGroupSelection.addEventListener("change", (event) => {
  if (!locationInput.value) {
    return;
  }

  handleWeatherUI();
});
