import './CurrentDayWeatherForecast.css';
                                  
function CurrentDayWeatherForecast(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    return (
        <div className='current-day-weather-forecast'>
            <img className='weather-image-icon' src={props.iconUrl} alt="weather-icon"/>
            {
                props.weatherData.map(data => {
                    return (
                        <div className='weather-forecast'>
                            <p>Tenmperature: {data.main.temp}</p>
                            <p>{data.weather[0].description}</p>
                            <p>{new Date().toDateString()}</p>
                            <span>{day}, <span>{new Date().toLocaleTimeString()}</span></span>
                            <p>Day</p>
                            <p>{data.name}, {data.sys.country}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CurrentDayWeatherForecast;







