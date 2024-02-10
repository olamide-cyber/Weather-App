import './SearchBar.css';

function SearchBar(props) {
    return (
        <div>
            <form onSubmit={props.handleSearch}>
                <input
                    type='text'
                    placeholder='Enter location'
                    onChange={props.handleChange}
                    value={props.inputValue}
                />
            </form>
        </div>
    );
}

export default SearchBar;