import { API_KEY } from "./config.js";
import { COUNTRY_API_URL } from "./config.js";

export const weather = {};

async function getJSON(url) {
  try {
    const response = fetch(url);
    const data = await response;
    const res = await data.json();
    return res;
  } catch (err) {
    throw err;
  }
}

export async function setWeather(country) {
  try {
    const res = await getJSON(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`
    );
    if (res.cod !== 200) throw new Error(`Invalid country/city!`);

    await setState(res);
  } catch (err) {
    console.log(err.message);
  }
}

function getTime(timezone) {
  const now = new Date();
  const localTime = new Date(now.getTime() + timezone * 1000);
  const hours = localTime.getUTCHours();
  return hours < 6 || hours >= 18;
}

async function setState(data) {
  console.log(data);
  weather.temp = data.main.temp;
  weather.tempMax = data.main.temp_max;
  weather.tempMin = data.main.temp_min;
  weather.name = data.name;
  weather.main = data.weather[0].main;
  weather.description = data.weather[0].description;
  weather.time = getTime(data.timezone);
  console.log(weather.time);
}
