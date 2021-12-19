import React from "react";
import SearchComponent from './components/search/search.component';
import ListComponent from './components/list/list.component';
import './App.css';

function AppUI({
    searchValue,
    setSearchValue,
    searchAll,
    deleteDrop,
}) {
    return(
        <React.Fragment>
            <h1 className='text-center'>Pruebas SkyDropx</h1>
            <SearchComponent 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            {searchAll.map(search => (
              <ListComponent 
                  key={search.text}
                  text={search.text}
                  onDelete={() => deleteDrop(search.text)}
                   />
            ))}
        </React.Fragment>
    );
}

export {AppUI};
