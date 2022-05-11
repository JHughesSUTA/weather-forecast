import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiShowers, WiDayThunderstorm, WiSnowflakeCold, WiDayFog } from "react-icons/wi";

const ExtendedForecast = ({ daysWeather }) => {
  const iconCode = daysWeather.weather[0].icon.substring(0,2)
  return (
    <div>
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
