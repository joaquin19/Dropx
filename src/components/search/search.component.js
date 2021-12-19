import React from 'react';
import './search.style.css';

function SearchComponent({searchValue, setSearchValue}) {

    const onSearch = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className='raw'>
            <input className="SearchComponent fab fa-searchengin" 
                   placeholder="Find in SkyDropx"
                   searchValue={searchValue}
                   onChange={onSearch} />
        </div>
    );
}

export default SearchComponent;