import React from "react";
import { useState, useEffect } from "react";
import ForecastMain from "./components/ForecastMain";

import "./App.css";

function App() {
  const [forecast, setForecast] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getForecast = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=32.77&lon=-96.79&exclude=minutely,hourly,alerts&units=imperial&appid=${API_KEY}`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataFromServer = await getForecast();
      setForecast(dataFromServer);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(forecast)} */}
      <ForecastMain forecast={forecast} />
    </div>
  );
}

export default App;
