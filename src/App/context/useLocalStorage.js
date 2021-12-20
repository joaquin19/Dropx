import React from 'react';

const dropsVal = [
  {
    id: 773773,
    type: 'parcels',
    attributes: {
      length: 10.0,
      height: 10.0,
      width: 10.0,
      weight: 3.0,
      mass_unit: 'KG',
      distance_unit: 'CM'
    }
  },
  {
    id: 7146458,
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.418-06:00',
      updated_at: '2018-12-18T15:00:22.418-06:00',
      amount_local: 119.0,
      currency_local: 'MXN',
      provider: 'CARSSA',
      service_level_name: 'Nacional',
      service_level_code: 'NACIONAL',
      service_level_terms: null,
      days: 5,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: false,
      out_of_area_pricing: 0.0,
      total_pricing: 119.0,
      is_occure: true
    }
  },
  {
    id: 7146457,
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.389-06:00',
      updated_at: '2018-12-18T15:00:22.389-06:00',
      amount_local: 204.0,
      currency_local: 'MXN',
      provider: 'DHL',
      service_level_name: 'DHL Express',
      service_level_code: 'EXPRESS',
      service_level_terms: null,
      days: 2,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: true,
      out_of_area_pricing: 145.00,
      total_pricing: 349.0,
      is_occure: true
    }
  },
  {
    id: 7146456,
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.380-06:00',
      updated_at: '2018-12-18T15:00:22.380-06:00',
      amount_local: 180.0,
      currency_local: 'MXN',
      provider: 'DHL',
      service_level_name: 'DHL Terrestre',
      service_level_code: 'STANDARD',
      service_level_terms: null,
      days: 5,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: true,
      out_of_area_pricing: 145.00,
      total_pricing: 325.0,
      is_occure: true
    }
  },
  {
    id: 7146455,
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.150-06:00',
      updated_at: '2018-12-18T15:00:22.150-06:00',
      amount_local: 205.0,
      currency_local: 'MXN',
      provider: 'FEDEX',
      service_level_name: 'Standard Overnight',
      service_level_code: 'STANDARD_OVERNIGHT',
      service_level_terms: null,
      days: 2,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: true,
      out_of_area_pricing: 145.00,
      total_pricing: 350.0,
      is_occure: true
    }
  },
  {
    id: 7146454,
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.141-06:00',
      updated_at: '2018-12-18T15:00:22.141-06:00',
      amount_local: 149.0,
      currency_local: 'MXN',
      provider: 'FEDEX',
      service_level_name: 'Fedex Express Saver',
      service_level_code: 'FEDEX_EXPRESS_SAVER',
      service_level_terms: null,
      days: 5,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: true,
      out_of_area_pricing: 145.00,
      total_pricing: 294.0,
      is_occure: true
    }
  },
  {
    id: 2901622,
    type: 'addresses',
    attributes: {
      name: 'Jorge Fernández',
      company: '-',
      address1: 'Av. Lázaro Cárdenas #234',
      address2: 'Americana',
      city: 'Guadalajara',
      province: 'Jalisco',
      zip: 23312,
      country: 'MX',
      phone: 5555555555,
      email: 'ejemplo@skydropx.com',
      created_at: '2018-12-18T15:00:21.887-06:00',
      updated_at: '2018-12-18T15:00:21.887-06:00'
    }
  }
];

function useLocalStorage(itemName, initValue) {
  itemName = dropsVal;
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStoreItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStoreItem ) {
            localStorage.setItem(itemName, JSON.stringify(initValue));
            parsedItem = initValue;
          } else {
            parsedItem = JSON.parse(localStoreItem);
          } 
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      try {
        const strItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, strItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
    
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage};