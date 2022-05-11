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
  const fiveDay = forecast.daily.slice(1, 6);
  const iconCode = forecast.current.weather[0].icon.slice(0, 2);

  return (
    <div>
      <div className="current-forecast-info">
        <div className="current-forecast-info--left">
          <p>{Math.round(forecast.current.temp)}&#176;</p>
          {iconCode === "01" && <WiDaySunny />}
          {iconCode === "02" && <WiDayCloudy />}
          {iconCode === "03" && <WiCloud />}
          {iconCode === "04" && <WiCloudy />}
          {iconCode === "09" && <WiShowers />}
          {iconCode === "10" && <WiShowers />}
          {iconCode === "11" && <WiDayThunderstorm />}
          {iconCode === "13" && <WiSnowflakeCold />}
          {iconCode === "50" && <WiDayFog />}
          <div className="current-weather-description">
            <p>{Math.round(forecast.current.wind_speed)} mph</p>
            <p>{forecast.current.weather[0].description}</p>
          </div>
        </div>
        <div className="current-forecast-info--right"></div>
      </div>
      {fiveDay.map((day) => (
        <ExtendedForecast daysWeather={day} />
      ))}
    </div>
  );
};

export default ForecastMain;
