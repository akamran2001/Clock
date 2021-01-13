import React from "react";
import moment from "moment";

class Weather extends React.Component {
  state = {
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
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          this.setState({ errorMessage: err.message });
        });
    } else {
      alert("Geolocation not available");
    }

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=97c97188af1db9cf2c65fd1c7773673c&units=metric`
    );
    const data = await api_call.json();
    this.setState({
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
  };

  render() {
    if (this.state.city) {
      return (
        <div className="row" id="weather">
          <div className="d-flex justify-content-center weather-text">
            <h1>
              [{this.state.city}, {this.state.country}]{" "}
              {this.state.temperatureF} {"\u00B0F"} / {this.state.temperatureC}
              {"\u00B0C"}
            </h1>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Weather;
