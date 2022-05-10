import { WiCloud } from "react-icons/wi";

const ForecastMain = ({ forecast }) => {
  return (
    <div>
      <div className="current-forecast-info">
        <div className="current-forecast-info--left">
          <p>{Math.round(forecast.current.temp)}&#176;</p>
          < WiCloud />
          <div className="current-weather-description">
            <p>{Math.round(forecast.current.wind_speed)} mph</p>
            <p>{forecast.current.weather[0].description}</p>
          </div>
        </div>
        <div className="current-forecast-info--right"></div>
      </div>
    </div>
  );
};

export default ForecastMain;
