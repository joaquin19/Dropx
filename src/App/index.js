import React from 'react';
import { AppUI } from './AppUI';
import { DropProvider } from './context';
import axios from 'axios';

const API = 'https://api-demo.skydropx.com/v1/shipments';


function App() {
  const [products, setProducts] = React.useState([]);
  const getToken = () => {
    //return state.auth.token;
    return 'OPLxaE9SBQ0kaVZ7PTaQD9FKIzrV4XmIPIF8QOlnU5It';
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const response = await axios.get(API,{
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
      }
    });
    console.log(response);
    setProducts(response);
  }, []);

  return (
    <DropProvider>
      <AppUI/>
    </DropProvider>
  );
}

export default App;
