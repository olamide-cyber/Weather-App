import './SearchBar.css';
import { useState} from 'react';

function SearchBar(props) {
    const [location, setLocation] = useState('');

    function handleChange(e) {
        setLocation(e.target.value)
    }

    function handleSearch(event) {
        event.preventDefault()
        props.handleSearch(location)
    }

    return (
        <form className='search-container' onSubmit={handleSearch}>
            <input
                className='search-input'
                type='text'
                placeholder='Enter location'
                onChange={handleChange}
                value={location}
            />
            <div className='search-icon'>&#128269;</div>
        </form>
    );
}

export default SearchBar;