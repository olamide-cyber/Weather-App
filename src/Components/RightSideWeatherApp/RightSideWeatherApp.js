import './RightSideWeatherApp.css';
import WeatherForecastList from './WeatherForecastList/WeatherForecastList';

function RightSideWeatherApp(props) {
    return (
        <div className='right-app-side-container'>
            <h1 className='today-forecast-header'>Today Weather Forecast</h1>
            <WeatherForecastList weatherData={props.weatherData} />
        </div>
    );
}

export default RightSideWeatherApp;