import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayThunderstorm,
  WiSnowflakeCold,
  WiDayFog,
} from "react-icons/wi";

import ExtendedForecast from "./ExtendedForecast";

const ForecastMain = ({ forecast }) => {
  const fiveDay = forecast?.daily.slice(1, 6);
  const iconCode = forecast.current.weather[0].icon.slice(0, 2);
  const d = new Date();
  const today = d.getDate();

  return (
    <div className="forecast-main">
      <div className="current-forecast-info primary-blue">
        <div className="current-forecast-info--left">
          <p id="todays-temperature">
            {Math.round(forecast.current.temp)}&#176;
          </p>
          <div className="">
            {iconCode === "01" && <WiDaySunny className="weather-icon" />}
            {iconCode === "02" && <WiDayCloudy className="weather-icon" />}
            {iconCode === "03" && <WiCloud className="weather-icon" />}
            {iconCode === "04" && <WiCloudy className="weather-icon" />}
            {iconCode === "09" && <WiShowers className="weather-icon" />}
            {iconCode === "10" && <WiShowers className="weather-icon" />}
            {iconCode === "11" && <WiDayThunderstorm className="weather-icon" />}
            {iconCode === "13" && <WiSnowflakeCold className="weather-icon" />}
            {iconCode === "50" && <WiDayFog className="weather-icon" />}
          </div>
          <div className="current-weather-description">
            <p>{forecast.current.weather[0].description}</p>
            <p>{Math.round(forecast.current.wind_speed)} mph</p>
          </div>
        </div>
        <div className="current-forecast-info--right"></div>
      </div>
      {fiveDay.map((day, i) => (
        <ExtendedForecast daysWeather={day} index={i} />
      ))}
    </div>
  );
};

export default ForecastMain;
