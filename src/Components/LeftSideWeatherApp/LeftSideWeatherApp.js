import './LeftSideWeatherApp.css';
import SearchBar from './SearchBar /SearchBar';
import CurrentDayWeatherForecast from './CurrentDayWeatherForecast/CurrentDayWeatherForecast';

function LeftSideWeatherApp(props) {
  return (
    <div className='left-side-container'>
      <SearchBar 
          handleChange={props.handleChange}
          inputValue={props.inputValue}
          handleSearch={props.handleSearch}
      />
      <CurrentDayWeatherForecast 
          weatherData={props.weatherData}
          iconUrl={props.iconUrl}
      />
    </div>
  );
}

export default LeftSideWeatherApp;