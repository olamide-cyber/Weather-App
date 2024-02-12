import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_BART_API_KEY;

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    const [iconUrl, setIconUrl] = useState('');

    async function handleSearch(location) {
        try {
            const geoCodingData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            })
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoCodingData[0].lat}&lon=${geoCodingData[0].lon}&appid=${API_KEY}&units=metric`)
                .then(newResponse => newResponse.json())
            
            setWeatherData([weatherData])
            const weatherIcon = weatherData.weather[0].icon
            
            await fetch(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
                .then(icon => setIconUrl(icon.url))
        }  
        catch(error) {
            alert('Invalid location! Please search for a valid location');
            console.error('Fetch error:', error.message);
        }
    }

    useEffect(() => {
        async function getLatLong(pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
                .then(response => response.json())

            setWeatherData([weatherData])
            const iconName = weatherData.weather[0].icon

            fetch(`https://openweathermap.org/img/wn/${iconName}@2x.png`)
                .then(icon => setIconUrl(icon.url))
        }

        navigator.geolocation.getCurrentPosition(getLatLong)
    }, [])

    return (
    <div className='weather-app'>
        <LeftSideWeatherApp 
            weatherData={weatherData}
            iconUrl={iconUrl}
            handleSearch={handleSearch}
        />
        <RightSideWeatherApp weatherData={weatherData}/>
    </div>
    );
}

export default WeatherApp;
