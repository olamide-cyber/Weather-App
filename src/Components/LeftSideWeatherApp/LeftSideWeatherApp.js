import './LeftSideWeatherApp.css';
import SearchBar from './SearchBar /SearchBar';
import CurrentDayWeatherForecast from './CurrentDayWeatherForecast/CurrentDayWeatherForecast';

function LeftSideWeatherApp(props) {
    // console.log(props.weatherData)
  return (
    <div className='left-side-container'>
      <SearchBar />
      <CurrentDayWeatherForecast weatherData={props.weatherData} />
    </div>
  );
}

export default LeftSideWeatherApp;