import { useEffect, useState } from "react";
import "./Weather.css";

// Images
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear_sun.jpeg";
import cloudyIcon from "./assets/suncloud.jpeg";
import rainIcon from "./assets/cloud_rain_cloud.png";
import snowIcon from "./assets/snow.jpeg";
import thunderIcon from "./assets/thunder.png";
import humidityIcon from "./assets/humidity.png";
import winterIcon from "./assets/winter.jpeg";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Weather Icon" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude: </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude: </span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="Humidity" className="icon" />
          <div className="humidity-percent">{humidity}%</div>
          <div className="text">Humidity</div>
        </div>
        <div className="element">
          <img src={winterIcon} alt="Wind" className="icon" />
          <div className="wind-percent">{wind} km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </>
  );
};

function App() {
  const api_key = "04142de654061fdd68e7a77a878467d8";
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(clearIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudyIcon,
    "02n": cloudyIcon,
    "03d": cloudyIcon,
    "03n": cloudyIcon,
    "04d": cloudyIcon,
    "04n": cloudyIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": thunderIcon,
    "11n": thunderIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      
      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      
      const weatherCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherCode] || clearIcon);
      
      setCityNotFound(false);
    } catch (error) {
      console.log("An error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          className="cityinput"
          placeholder="Search city"
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon" onClick={search}>
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
      <WeatherDetails
        icon={icon}
        temp={temp}
        city={city}
        country={country}
        lat={lat}
        log={log}
        humidity={humidity}
        wind={wind}
      />
    </div>
  );
}

export default App;
