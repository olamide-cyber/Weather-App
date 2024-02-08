import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';
import { useEffect, useState } from 'react';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        function getLatLong(pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            const apiKey = '8d0201ebbedd4fd5914e078e76bb9512'
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => setWeatherData([data]))
        }

        navigator.geolocation.getCurrentPosition(getLatLong)
    }, [])

    return (
    <div className='weather-app'>
        <LeftSideWeatherApp weatherData={weatherData} />
        <RightSideWeatherApp weatherData={weatherData}/>
    </div>
    );
}

export default WeatherApp;
