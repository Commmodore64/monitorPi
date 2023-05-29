import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [temperature, setTemperature] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Chihuahua&appid=f33a484cf794d08d0148764789aaba32'
        );
        const { main, weather } = response.data;
        const celsiusTemperature = main.temp - 273.15; // Convert Kelvin to Celsius
        setTemperature(celsiusTemperature);
        setWeatherIcon(weather[0].icon);
        console.log(response);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Temperature: {isNaN(temperature.toFixed(0)) ? '' : temperature.toFixed(0)}°C</h2>
      {weatherIcon && <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather Icon" />}
    </div>
  );
}

export default Weather;
