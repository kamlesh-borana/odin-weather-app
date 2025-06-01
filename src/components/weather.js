import locationSVG from "../assets/svg/location.svg";
import temperatureSVG from "../assets/svg/temperature.svg";
import tempFeelsLikeSVG from "../assets/svg/temperature-feels-like.svg";
import humiditySVG from "../assets/svg/humidity.svg";
import dewSVG from "../assets/svg/dew.svg";
import windSpeedSVG from "../assets/svg/wind-speed.svg";
import precipitationProbabilitySVG from "../assets/svg/precipitation.svg";
import { getGiphySearchUrl } from "../utils/constants";

function createLocationInfoUI(locationData) {
  const locationInfoDiv = document.createElement("div");
  locationInfoDiv.classList.add("location-info");

  const locationImage = document.createElement("img");
  locationImage.classList.add("svg");
  locationImage.src = locationSVG;

  const locationSpan = document.createElement("span");
  locationSpan.textContent = locationData;

  locationInfoDiv.append(locationImage, locationSpan);

  return locationInfoDiv;
}

function createGeneralWeatherDescriptionUI(descriptionData) {
  const generalWeatherDescriptionDiv = document.createElement("div");
  generalWeatherDescriptionDiv.classList.add("general-weather-desc-container");

  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = descriptionData;

  generalWeatherDescriptionDiv.append(descriptionPara);

  return generalWeatherDescriptionDiv;
}

async function createCurrentConditionsUI(currentConditionsData) {
  const currentConditionsDiv = document.createElement("div");
  currentConditionsDiv.classList.add("current-conditions-container");

  const currentConditionsImage = document.createElement("img");
  currentConditionsImage.classList.add("svg");
  const svgWeatherIconsModule = await import(
    `../assets/svg/weather-icons/${currentConditionsData.icon}.svg`
  );
  currentConditionsImage.src = svgWeatherIconsModule.default;

  const currentConditionsPara = document.createElement("p");
  currentConditionsPara.textContent = currentConditionsData.conditions;

  currentConditionsDiv.append(currentConditionsImage, currentConditionsPara);

  return currentConditionsDiv;
}

function createCurrentConditionsInfoUI(currentConditionsData) {
  const currentConditionsInfoDiv = document.createElement("div");
  currentConditionsInfoDiv.classList.add("current-conditions-info-container");

  const currentConditionsTempInfoDiv = document.createElement("div");
  currentConditionsTempInfoDiv.classList.add("temp-info");
  const temperaturePara = document.createElement("p");
  temperaturePara.textContent = "Temperature";
  const temperatureImage = document.createElement("img");
  temperatureImage.classList.add("svg");
  temperatureImage.src = temperatureSVG;
  const temperatureSpan = document.createElement("span");
  temperatureSpan.textContent = currentConditionsData.temperature;
  currentConditionsTempInfoDiv.append(
    temperaturePara,
    temperatureImage,
    temperatureSpan
  );

  const currentConditionsTempFeelsLikeInfoDiv = document.createElement("div");
  currentConditionsTempFeelsLikeInfoDiv.classList.add("feels-like-info");
  const tempFeelsLikePara = document.createElement("p");
  tempFeelsLikePara.textContent = "Feels Like";
  const tempFeelsLikeImg = document.createElement("img");
  tempFeelsLikeImg.classList.add("svg");
  tempFeelsLikeImg.src = tempFeelsLikeSVG;
  const tempFeelsLikeSpan = document.createElement("span");
  tempFeelsLikeSpan.textContent = currentConditionsData.feelsLike;
  currentConditionsTempFeelsLikeInfoDiv.append(
    tempFeelsLikePara,
    tempFeelsLikeImg,
    tempFeelsLikeSpan
  );

  const currentConditionsHumidityInfoDiv = document.createElement("div");
  currentConditionsHumidityInfoDiv.classList.add("humidity-info");
  const humidityPara = document.createElement("p");
  humidityPara.textContent = "Humidity";
  const humidityImage = document.createElement("img");
  humidityImage.classList.add("svg");
  humidityImage.src = humiditySVG;
  const humiditySpan = document.createElement("span");
  humiditySpan.textContent = currentConditionsData.humidity;
  currentConditionsHumidityInfoDiv.append(
    humidityPara,
    humidityImage,
    humiditySpan
  );

  const currentConditionsDewInfoDiv = document.createElement("div");
  currentConditionsDewInfoDiv.classList.add("dew-info");
  const dewPara = document.createElement("p");
  dewPara.textContent = "Dew";
  const dewImage = document.createElement("img");
  dewImage.classList.add("svg");
  dewImage.src = dewSVG;
  const dewSpan = document.createElement("span");
  dewSpan.textContent = currentConditionsData.dew;
  currentConditionsDewInfoDiv.append(dewPara, dewImage, dewSpan);

  const currentConditionsWindSpeedInfoDiv = document.createElement("div");
  currentConditionsWindSpeedInfoDiv.classList.add("wind-speed-info");
  const windSpeedPara = document.createElement("p");
  windSpeedPara.textContent = "Wind Speed";
  const windSpeedImage = document.createElement("img");
  windSpeedImage.classList.add("svg");
  windSpeedImage.src = windSpeedSVG;
  const windSpeedSpan = document.createElement("span");
  windSpeedSpan.textContent = currentConditionsData.windSpeed;
  currentConditionsWindSpeedInfoDiv.append(
    windSpeedPara,
    windSpeedImage,
    windSpeedSpan
  );

  const currentConditionsPrecipitationProbabilityInfoDiv =
    document.createElement("div");
  currentConditionsPrecipitationProbabilityInfoDiv.classList.add(
    "precipitation-probability-info"
  );
  const precipitationProbabilityPara = document.createElement("p");
  precipitationProbabilityPara.textContent = "Precipitation Probability";
  const precipitationProbabilityImage = document.createElement("img");
  precipitationProbabilityImage.classList.add("svg");
  precipitationProbabilityImage.src = precipitationProbabilitySVG;
  const precipitationProbabilitySpan = document.createElement("span");
  precipitationProbabilitySpan.textContent =
    currentConditionsData.precipitationProbability;
  currentConditionsPrecipitationProbabilityInfoDiv.append(
    precipitationProbabilityPara,
    precipitationProbabilityImage,
    precipitationProbabilitySpan
  );

  currentConditionsInfoDiv.append(
    currentConditionsTempInfoDiv,
    currentConditionsTempFeelsLikeInfoDiv,
    currentConditionsHumidityInfoDiv,
    currentConditionsDewInfoDiv,
    currentConditionsWindSpeedInfoDiv,
    currentConditionsPrecipitationProbabilityInfoDiv
  );

  return currentConditionsInfoDiv;
}

async function createCurrentConditionsGIF(currentConditionsData) {
  const response = await fetch(
    getGiphySearchUrl(`weather ${currentConditionsData.icon}`)
  );
  const res = await response.json();

  //   const gifImage = document.createElement("img");
  //   gifImage.classList.add("gif");
  //   gifImage.src = res.data.images.original.url;

  document.body.style.backgroundImage = `url(${res.data.images.original.url})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

  //   return gifImage;
}

export async function renderWeatherUI(weatherData) {
  const weatherContentContainer = document.createElement("div");
  weatherContentContainer.classList.add("content-container");

  const locationInfoDiv = createLocationInfoUI(weatherData.address);
  const generalWeatherDescriptionDiv = createGeneralWeatherDescriptionUI(
    weatherData.description
  );
  const currentConditionsDiv = await createCurrentConditionsUI(
    weatherData.currentConditions
  );
  const currentConditionsInfoDiv = createCurrentConditionsInfoUI(
    weatherData.currentConditions
  );

  //   const currentConditionGIF = await createCurrentConditionsGIF(
  //     weatherData.currentConditions
  //   );
  await createCurrentConditionsGIF(weatherData.currentConditions);

  weatherContentContainer.append(
    locationInfoDiv,
    generalWeatherDescriptionDiv,
    currentConditionsDiv,
    currentConditionsInfoDiv
    // currentConditionGIF
  );

  document.body.append(weatherContentContainer);
}
