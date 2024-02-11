import './CurrentDayWeatherForecast.css';
                                  
function CurrentDayWeatherForecast(props) {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    let day = weekday[d.getDay()];

    return (
        <div className='current-day-weather-forecast'>
            {
                props.weatherData.map(data => {
                    return (
                        <div className='weather-forecast'>
                                        <img className='weather-image-icon' alt='' src={props.iconUrl}/>

                            <div className='weather-temp'>{data.main.temp}°C</div>
                            <p>{data.weather[0].description}</p>
                            <p>{new Date().toDateString()}</p>
                            <span>{day}, <span>{new Date().toLocaleTimeString()}</span></span>
                            <p>Day</p>
                            <p className='weather-location'>{data.name}, {data.sys.country}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CurrentDayWeatherForecast;







