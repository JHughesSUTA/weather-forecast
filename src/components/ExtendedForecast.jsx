import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiShowers, WiDayThunderstorm, WiSnowflakeCold, WiDayFog } from "react-icons/wi";

const ExtendedForecast = ({ daysWeather, index }) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const d = new Date();
  let forecastDay = new Date(d);
  forecastDay.setDate(forecastDay.getDate() + (1 + index))
  forecastDay = weekdays[forecastDay.getDay()]

  const iconCode = daysWeather.weather[0].icon.substring(0,2)
  return (
    <div className="extended-forecast">
      <p className="extended-forecast--day">{forecastDay}</p>
      <div className="extended-forecast--icon primary-blue weather-icon">
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
      <p className="extended-forecast--temp">
        {Math.round(daysWeather.temp.day)}&#176;
      </p>
    </div>
  );
};

export default ExtendedForecast;
