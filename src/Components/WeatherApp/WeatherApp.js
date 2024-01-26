import './WeatherApp.css';
import LeftSideWeatherApp from '../LeftSideWeatherApp/LeftSideWeatherApp';
import RightSideWeatherApp from '../RightSideWeatherApp/RightSideWeatherApp';

const WEATHER_DATA = [{
    "coord": {
        "lon": 3.3456,
        "lat": 6.5569
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 33.03,
        "feels_like": 40.03,
        "temp_min": 33.03,
        "temp_max": 33.03,
        "pressure": 1011,
        "humidity": 62
    },
    "visibility": 6000,
    "wind": {
        "speed": 3.6,
        "deg": 210
    },
    "clouds": {
        "all": 20
    },
    "dt": 1705853910,
    "sys": {
        "type": 1,
        "id": 1185,
        "country": "NG",
        "sunrise": 1705817015,
        "sunset": 1705859490
    },
    "timezone": 3600,
    "id": 2566677,
    "name": "Shogunle",
    "cod": 200
}]


function WeatherApp() {
  return (
    <div className='weather-app'>
      <LeftSideWeatherApp weatherData={WEATHER_DATA} />
      <RightSideWeatherApp weatherData={WEATHER_DATA}/>
    </div>
  );
}

export default WeatherApp;
