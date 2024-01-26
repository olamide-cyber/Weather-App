import './WeatherForecastList.css';

function WeatherForecastList(props) {
    return (
        <div>
             {
                props.weatherData.map(data => {
                    return (  
                        <div className="grid-container" >
                            <div className="grid-item">
                                <p>Wind</p>
                                <p>{data.wind.speed}</p>
                            </div>
                            <div className="grid-item">
                                <p>Humidity</p>
                                <p>{data.main.humidity}%</p>
                            </div>
                            <div className="grid-item">
                                <p>Real feel</p>
                                <p>{data.main.temp}.c</p>
                            </div>  
                            <div className="grid-item">
                                <p>Visibility</p>
                                <p>{data.visibility}</p>
                            </div>
                            <div className="grid-item">
                                <p>Pressure</p>
                                <p>{data.main.pressure} mb</p>
                            </div>
                            <div className="grid-item">
                                <p>Timezone</p>
                                <p>{data.timezone}</p>
                            </div>  
                            <div className="grid-item">
                                <p>Temperature History</p>
                                <p>{data.main.temp}.c</p>
                            </div>
                            <div className="grid-item">
                                <p>Sun</p>
                                <p>Rise   <span>5:17am</span></p>
                                <p>Set    <span>5:17am</span></p>
                            </div>
                            <div className="grid-item">
                                <p>Moon</p>
                                <p>Rise   <span>5:17am</span></p>
                                <p>Set    <span>5:17am</span></p>
                            </div>  
                        </div>
                    )
                })
             }
        </div>
    );
}
    


export default WeatherForecastList;