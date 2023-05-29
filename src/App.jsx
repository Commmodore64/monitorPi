import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import expand from './img/expand.svg';
import Weather from './components/Weather';
import lines from './img/lines.png'
import hud from './img/hud1.gif'
import hudLines from './img/lines.gif'

function App() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const options2 = { month: 'long' };
  const monthName = currentDate.toLocaleDateString('es-ES', options2);
  const day = currentDate.getDate();
  const options = { weekday: 'long' };
  const dayOfWeek = currentDate.toLocaleDateString('es-ES', options);
  const capitalizedDay = capitalizeFirstLetter(dayOfWeek);

  function getFormattedTime() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return new Date().toLocaleTimeString('es-ES', options);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute bottom-[-5px] right-0 mr-3">
        <Weather/>
      </div>
      <ReactSVG src={expand} className="absolute top-0 left-0 m-2" />
      <div className="flex justify-center items-center h-full">
        <h1>{currentTime}</h1>
        <h2 className="absolute bottom-7 left-0 m-2">{capitalizedDay}</h2>
        <h2 className="absolute bottom-1 left-0 m-2">{monthName} {day}, {year}</h2>
      </div>
      <p className=" absolute text-xs rotate-90 top-12 right-0">サイバーパンク</p>
      <img
        className="absolute bottom-1 right-0 m-4"
        src={lines}
        alt="lines"
        style={{ width: '70px', height: 'auto' }}
      />
      <img
        className="absolute top-[-20px] left-7"
        src={hud}
        alt="hud"
        style={{ width: '160px', height: 'auto' }}
      />
      <img
        className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2"
        src={hudLines}
        alt="hudLines"
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
  );
}

export default App;
