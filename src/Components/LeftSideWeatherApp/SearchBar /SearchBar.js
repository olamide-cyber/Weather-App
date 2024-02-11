import './SearchBar.css';

function SearchBar(props) {
    return (
        <div>
            <form className='search-container' onSubmit={props.handleSearch}>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Enter location'
                    onChange={props.handleChange}
                    value={props.inputValue}
                />
                <div class='search-icon'>&#128269;</div>
            </form>
        </div>
    );
}

export default SearchBar;