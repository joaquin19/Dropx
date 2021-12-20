import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const DropContext = React.createContext();

function DropProvider(props) {
      const {
        item: drops,
        saveItem: saveDrops, 
        loading,
        error
      } = useLocalStorage('DROPS_V1', []);
      const [searchvalue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState('false');
  
      let searchAll = [];
    
      if (!searchvalue.length >= 1) {
        searchAll = drops;
      } else {
        searchAll = drops.filter(drop => {
          const dropsText = drop.id.toLowerCase();
          const searchText = searchvalue.toLowerCase();
          return dropsText.includes(searchText);
        });
      }
    
      const deleteDrop = (text) => {
        const dropIndex = drops.findIndex(drop => drop.id === text);
        const newDrops = [...drops];
    
        newDrops.splice(dropIndex, 1);
        saveDrops(newDrops);
      }

      const addDrop = (zipForm, zipTo, parcels) => {
        const newDrops = [...drops];
        newDrops.push({
          address_from: {
            province: "Ciudad de México", 
            city: "Azcapotzalco", 
            name: "Jose Fernando", 
            zip: "02900", 
            country: "MX", 
            address1: "Av. Principal #234", 
            company: "skydropx", 
            address2: "Centro", 
            phone: "5555555555", 
            email: "skydropx@email.com"
          }, parcels: [{ 
            weight: 3, 
            distance_unit: "CM", 
            mass_unit: "KG", 
            height: 10, 
            width: 10, 
            length: 10 }], 
            address_to: { 
              province: "Jalisco", 
              city: "Guadalajara", 
              name: "Jorge Fernández", 
              zip: "44100", 
              country: "MX",  
              address1: " Av. Lázaro Cárdenas #234", 
              company: "-", 
              address2: "Americana", 
              phone: "5555555555", 
              email: "ejemplo@skydropx.com", 
              reference: "Frente a tienda de abarro", 
              contents: "" 
            }, 
            consigment_note_class_code: "105555"
        }) = true;
    
        saveDrops(newDrops);
      }

    return(
    <DropContext.Provider value={{
        loading,
        error,
        addDrop,
        searchvalue,
        setSearchValue,
        searchAll,
        deleteDrop,
        openModal,
        setOpenModal
    }}>
        {props.children}
    </DropContext.Provider>
    );
}

export {DropContext, DropProvider};
