import './WeatherForecastList.css';

function WeatherForecastList(props) {
    return (
        <div>
             {
                props.weatherData.map(data => {
                    return (  
                        <div className="grid-container" >
                            <div className="grid-item">
                                <h4>Wind</h4>
                                <p>{data.wind.deg}°C</p>
                                <p>{data.wind.speed}km/h</p>
                            </div>
                            <div className="grid-item">
                                <h4>Humidity</h4>
                                <p>{data.main.humidity}%</p>
                            </div>
                            <div className="grid-item">
                                <h4>Real feel</h4>
                                <p>{data.main.temp}°C</p>
                            </div>  
                            <div className="grid-item">
                                <h4>Visibility</h4>
                                <p>{data.visibility}</p>
                            </div>
                            <div className="grid-item">
                                <h4>Pressure</h4>
                                <p>{data.main.pressure} mb</p>
                            </div>
                            <div className="grid-item">
                                <h4>Timezone</h4>
                                <p>{data.timezone}</p>
                            </div>  
                            <div className="grid-item">
                                <h4>Temperature History</h4>
                                <p>{data.main.temp}°C</p>
                            </div>
                            <div className="grid-item">
                                <h4>Feels Like</h4>
                                <p>{data.main.feels_like}°C</p>
                            </div>
                            <div className="grid-item">
                                <h4>Clouds</h4>
                                <p>{data.clouds.all}</p>
                            </div>  
                        </div>
                    )
                })
             }
        </div>
    );
}
    


export default WeatherForecastList;