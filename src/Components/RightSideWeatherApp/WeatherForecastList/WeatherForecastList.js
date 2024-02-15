import './WeatherForecastList.css';

function WeatherForecastList(props) {
    const weatherData = props.weatherData

    return (
        <>
            {
                weatherData && (
                    <div className="grid-container">
                        <div className="grid-item">
                            <h4>Wind</h4>
                            <p>{weatherData.wind?.deg}°C</p>
                            <p>{weatherData.wind?.speed}km/h</p>
                        </div>
                        <div className="grid-item">
                            <h4>Humidity</h4>
                            <p>{weatherData.main?.humidity}%</p>
                        </div>
                        <div className="grid-item">
                            <h4>Real feel</h4>
                            <p>{weatherData.main?.temp}°C</p>
                        </div>  
                        <div className="grid-item">
                            <h4>Visibility</h4>
                            <p>{weatherData?.visibility}</p>
                        </div>
                        <div className="grid-item">
                            <h4>Pressure</h4>
                            <p>{weatherData.main?.pressure} mb</p>
                        </div>
                        <div className="grid-item">
                            <h4>Timezone</h4>
                            <p>{weatherData?.timezone}</p>
                        </div>  
                        <div className="grid-item">
                            <h4>Temperature History</h4>
                            <p>{weatherData.main?.temp}°C</p>
                        </div>
                        <div className="grid-item">
                            <h4>Feels Like</h4>
                            <p>{weatherData.main?.feels_like}°C</p>
                        </div>
                        <div className="grid-item">
                            <h4>Clouds</h4>
                            <p>{weatherData.clouds?.all}</p>
                        </div>  
                    </div>
                )
            }
        </>
    );
}
    


export default WeatherForecastList;