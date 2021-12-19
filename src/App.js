import React from 'react';
import { AppUI } from './AppUI';
import './App.css';

// const defaultDrops = [
//   {text: 'h1', completed: true},
//   {text: 'h2', completed: false},
//   {text: 'h3', completed: true}
// ];

function useLocalStorage(itemName) {
  
  const localStoreItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStoreItem ) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStoreItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    const strItme = JSON.stringify(newItem);
    localStorage.setItem(itemName, strItme);
    setItem(newItem);
  };
  
  return [
    item,
    saveItem
  ];
}

function App() {

  const [drops, saveDrops] = useLocalStorage('DROPS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  let searchAll = [];

  if (!searchValue.length >= 1) {
    searchAll = drops;
  } else {
    searchAll = drops.filter(drop => {
      const dropsText = drop.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return dropsText.includes(searchText);
    });
  }

  const deleteDrop = (text) => {
    const dropIndex = drops.findIndex(drop => drop.text === text);
    const newDrops = [...drops];

    newDrops.splice(dropIndex, 1);
    saveDrops(newDrops);
  }

  return (
    <AppUI
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchAll={searchAll}
      deleteDrop={deleteDrop}
    />
  );
}

export default App;
