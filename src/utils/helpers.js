import { WEATHER_DATA_POINTS_LIST } from "./constants";

export function transformWeatherData(weatherData) {
  const transformedWeatherData = {};

  WEATHER_DATA_POINTS_LIST.forEach((dataPoint) => {
    const weatherDataPointValue = weatherData?.[dataPoint.dataPointName];

    if (weatherDataPointValue !== null && weatherDataPointValue !== undefined) {
      if (dataPoint.transformData) {
        if (Array.isArray(weatherDataPointValue)) {
          transformedWeatherData[dataPoint.resolvedDataPointName] =
            weatherDataPointValue.map((wData) => transformWeatherData(wData));
        } else {
          transformedWeatherData[dataPoint.resolvedDataPointName] =
            transformWeatherData(weatherDataPointValue);
        }
      } else {
        transformedWeatherData[dataPoint.resolvedDataPointName] =
          weatherDataPointValue;
      }
    }
  });

  return transformedWeatherData;
}
