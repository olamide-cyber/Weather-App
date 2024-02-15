import './LeftSideWeatherApp.css';
import SearchBar from './SearchBar /SearchBar';
import CurrentDayWeatherForecast from './CurrentDayWeatherForecast/CurrentDayWeatherForecast';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function LeftSideWeatherApp(props) {
    const [weatherData, setWeatherData] = useState();

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
            const responseWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoCodingData[0].lat}&lon=${geoCodingData[0].lon}&appid=${API_KEY}&units=metric`)
                .then(newResponse => newResponse.json())
            
            setWeatherData(responseWeatherData)
            props.onLoadWeatherData(responseWeatherData)
        }  
        catch(error) {
            alert('Invalid location! Please search for a valid location');
            console.error('Fetch error:', error.message);
        }
    };

    useEffect(() => {
        async function getLatLong(pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            const responseWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
                .then(response => response.json());
            setWeatherData(responseWeatherData)
            props.onLoadWeatherData(responseWeatherData)
        }
         
        navigator.geolocation.getCurrentPosition(getLatLong)
    }, [])

    return (
        <div className='left-side-container'>
            <SearchBar handleSearch={handleSearch} />
            <CurrentDayWeatherForecast weatherData={weatherData} />
        </div>
    );
}

export default LeftSideWeatherApp;