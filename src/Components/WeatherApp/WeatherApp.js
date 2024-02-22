import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';
import { useState } from 'react';

function WeatherApp() {
    const [currentWeatherData, setCurrentWeatherData] = useState();

    return (
        <div>
            <h1 className='weather-app-header'>My Cool Weather App</h1>
            <div className='weather-app'>
                <LeftSideWeatherApp onLoadWeatherData={weatherData => setCurrentWeatherData(weatherData)} />
                <RightSideWeatherApp weatherData={currentWeatherData}/>
            </div>
        </div>
    );
}

export default WeatherApp;
