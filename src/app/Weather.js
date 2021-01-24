import React, { useState, useEffect } from "react";
import moment from "moment";

function Weather(props) {
  const [weather, setWeather] = useState({
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    moonImage: undefined,
  });
  const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  const getWeather = async (lat, lon) => {
    const api_call = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      `https://ClockBackend.ahmedkamran.repl.co/${lat}/${lon}`
    );
    const data = await api_call.json();
    try {
      setWeather({
        lat: lat,
        lon: lon,
        city: data.name,
        temperatureC: Math.round(data.main.temp),
        temperatureF: Math.round(data.main.temp * 1.8 + 32),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
        sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
        country: data.sys.country,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      getPosition()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          setWeather({ errorMessage: err.message });
        });
    } else {
      alert("Geolocation not available");
    }

    const interval = setInterval(() => {
      getWeather(weather.lat, weather.lon);
    }, 600000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (weather.city) {
    return (
      <div className="row" id="weather">
        <div className="d-flex justify-content-center weather-text">
          <h1>
            [{weather.city}, {weather.country}] {weather.temperatureF}{" "}
            {"\u00B0F"} / {weather.temperatureC}
            {"\u00B0C"}
          </h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Weather;
