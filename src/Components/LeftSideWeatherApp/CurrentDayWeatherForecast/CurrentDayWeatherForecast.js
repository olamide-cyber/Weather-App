import './CurrentDayWeatherForecast.css';
import { useState, useEffect } from 'react';

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                  
function CurrentDayWeatherForecast(props) {
    const [iconUrl, setIconUrl] = useState('');

    const weatherData = props.weatherData

    const currentDate = new Date();
    let day = weekday[currentDate.getDay()];

    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;

    useEffect(() => {
        const iconName = weatherData?.weather[0].icon;
        if(iconName) {
            fetch(`https://openweathermap.org/img/wn/${iconName}@2x.png`)
            .then(icon => setIconUrl(icon.url))
        }
    }, [weatherData])

    return (
        <div className='current-day-weather-forecast'> 
            {
                weatherData &&
                    (
                        <div className='weather-forecast'>
                            <img className='weather-image-icon' src={iconUrl} alt=''/>
                            <div className='weather-temp'>{weatherData.main.temp}<span className='deg'>°C</span></div>
                            {weatherData.weather && <p>{weatherData.weather[0].description}</p>}
                            <p>{new Date().toDateString()}</p>
                            <span>{day}, <span>{new Date().toLocaleTimeString()}</span></span>
                            {isDayTime ? <p>Day</p> : <p>Night</p>}
                            <p className='weather-location'>{weatherData.name}, {weatherData.sys.country}</p>
                        </div> 
                    )
            }
        </div>
    );
}

export default CurrentDayWeatherForecast;