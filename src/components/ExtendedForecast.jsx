import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiShowers, WiDayThunderstorm, WiSnowflakeCold, WiDayFog } from "react-icons/wi";

const ExtendedForecast = ({ daysWeather, index }) => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const d = new Date();
  let forecastDay = new Date(d);
  forecastDay.setDate(forecastDay.getDate() + (1 + index))
  forecastDay = weekdays[forecastDay.getDay()]

  const iconCode = daysWeather.weather[0].icon.substring(0,2)
  return (
    <div>
      <p>{forecastDay}</p>
      <p>{Math.round(daysWeather.temp.day)}&#176;</p>
      {iconCode === "01" && <WiDaySunny />}
      {iconCode === "02" && <WiDayCloudy />}
      {iconCode === "03" && <WiCloud />}
      {iconCode === "04" && <WiCloudy />}
      {iconCode === "09" && <WiShowers />}
      {iconCode === "10" && <WiShowers />}
      {iconCode === "11" && <WiDayThunderstorm />}
      {iconCode === "13" && <WiSnowflakeCold />}
      {iconCode === "50" && <WiDayFog />}
    </div>
  );
};

export default ExtendedForecast;
