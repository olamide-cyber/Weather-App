import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';
import { useState } from 'react';

function WeatherApp() {
    const [currentWeatherData, setCurrentWeatherData] = useState();

    return (
    <div className='weather-app'>
        <LeftSideWeatherApp onLoadWeatherData={weatherData => setCurrentWeatherData(weatherData)} />
        <RightSideWeatherApp weatherData={currentWeatherData}/>
    </div>
    );
}

export default WeatherApp;
