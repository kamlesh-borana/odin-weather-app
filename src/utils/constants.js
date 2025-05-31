// export const GIPHY_API_Key = "RdJHwNW1Gzn5ILbwwCN7zQbCxU1krEDT";

// export const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/translate";

// export const getGiphySearchUrl = (query) => {
//   return `${GIPHY_SEARCH_URL}?api_key=${GIPHY_API_Key}&s=${query}`;
// };

export const WEATHER_API_KEY = "ZYEDFW4V9MSFSMQ6QAGETX9NQ";

export const WEATHER_INFO_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const getWeatherInfoUrl = (location) => {
  return `${WEATHER_INFO_URL}${location}?key=${WEATHER_API_KEY}`;
};

export const WEATHER_DATA_POINTS_LIST = [
  { dataPointName: "conditions", resolvedDataPointName: "conditions" },
  { dataPointName: "datetime", resolvedDataPointName: "dateTime" },
  { dataPointName: "description", resolvedDataPointName: "description" },
  { dataPointName: "dew", resolvedDataPointName: "dew" },
  { dataPointName: "feelslike", resolvedDataPointName: "feelsLike" },
  { dataPointName: "feelslikemax", resolvedDataPointName: "feelsLikeMax" },
  { dataPointName: "feelslikemin", resolvedDataPointName: "feelsLikeMin" },
  { dataPointName: "humidity", resolvedDataPointName: "humidity" },
  { dataPointName: "icon", resolvedDataPointName: "icon" },
  {
    dataPointName: "precipprob",
    resolvedDataPointName: "precipitationProbability",
  },
  {
    dataPointName: "preciptype",
    resolvedDataPointName: "precipitationType",
  },
  { dataPointName: "temp", resolvedDataPointName: "temperature" },
  { dataPointName: "tempmax", resolvedDataPointName: "temperatureMax" },
  { dataPointName: "tempmin", resolvedDataPointName: "temperatureMin" },
  { dataPointName: "windspeed", resolvedDataPointName: "windSpeed" },

  { dataPointName: "address", resolvedDataPointName: "locationQuery" },
  { dataPointName: "resolvedAddress", resolvedDataPointName: "address" },
  { dataPointName: "timezone", resolvedDataPointName: "timezone" },
  { dataPointName: "tzoffset", resolvedDataPointName: "timezoneOffset" },
  {
    dataPointName: "currentConditions",
    resolvedDataPointName: "currentConditions",
    transformData: true,
  },
  {
    dataPointName: "days",
    resolvedDataPointName: "dailyWeatherForecast",
    transformData: true,
  },
  {
    dataPointName: "hours",
    resolvedDataPointName: "hourlyWeatherForecast",
    transformData: true,
  },
];
