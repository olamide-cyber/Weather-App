import './CurrentDayWeatherForecast.css';
                                  
function CurrentDayWeatherForecast(props) {
    console.log('this is me>>', props.weatherData)

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];

    return (
        <div className='current-day-weather-forecast'>
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







