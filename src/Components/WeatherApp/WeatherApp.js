import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';
import { useEffect, useState } from 'react';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    const [iconUrl, setIconUrl] = useState('');

    const [location, setLocation] = useState('');

    const API_KEY = '8d0201ebbedd4fd5914e078e76bb9512'

    function handleChange(e) {
        setLocation(e.target.value)
    }

    function handleSearch(event) {
        event.preventDefault()
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}&units=metric`)
            .then(newResponse => newResponse.json())
            .then(newData => {
                setWeatherData([newData])
                const newIcon = newData.weather[0].icon
                fetch(`https://openweathermap.org/img/wn/${newIcon}@2x.png`)
                .then(icon => setIconUrl(icon.url))
            })
        })
    }

    useEffect(() => {
        function getLatLong(pos) {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherData([data])
                const iconName = data.weather[0].icon
                fetch(`https://openweathermap.org/img/wn/${iconName}@2x.png`)
                .then(icon => setIconUrl(icon.url))
            })
        }

        navigator.geolocation.getCurrentPosition(getLatLong)
    }, [])

    return (
    <div className='weather-app'>
        <LeftSideWeatherApp 
            weatherData={weatherData}
            iconUrl={iconUrl}
            handleChange={handleChange}
            inputValue={location}
            handleSearch={handleSearch}
        />
        <RightSideWeatherApp weatherData={weatherData}/>
    </div>
    );
}

export default WeatherApp;
