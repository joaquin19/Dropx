import React from 'react';
import { DropContext } from '../../context';
import './search.style.css';

function SearchComponent() {
    const {searchvalue, setSearchValue} = React.useContext(DropContext);

    const onSearch = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className='raw'>
            <input className="SearchComponent fab fa-searchengin" 
                   placeholder="Find in SkyDropx"
                   searchvalue={searchvalue}
                   onChange={onSearch} />
        </div>
    );
}

export {SearchComponent};