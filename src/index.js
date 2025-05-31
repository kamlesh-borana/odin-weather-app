import "./styles/main.css";
import { getWeatherInfoUrl } from "./utils/constants";
import { transformWeatherData } from "./utils/helpers";
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
const weatherInfo = await getWeatherInfo("mumbai");
console.log(transformWeatherData(weatherInfo));

