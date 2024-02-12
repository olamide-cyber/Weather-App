import './CurrentDayWeatherForecast.css';

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                  
function CurrentDayWeatherForecast(props) {
    const currentDate = new Date();
    let day = weekday[currentDate.getDay()];

    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;

    return (
        <div className='current-day-weather-forecast'>
            {
                props.weatherData.map(data => {
                    return (
                        <div className='weather-forecast' key={data.id}>
                            <img className='weather-image-icon' alt='' src={props.iconUrl}/>
                            <div className='weather-temp'>{data.main.temp}<span className='deg'>°C</span></div>
                            <p>{data.weather[0].description}</p>
                            <p>{new Date().toDateString()}</p>
                            <span>{day}, <span>{new Date().toLocaleTimeString()}</span></span>
                            {isDayTime ? <p>Day</p> : <p>Night</p>}
                            <p className='weather-location'>{data.name}, {data.sys.country}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CurrentDayWeatherForecast;







