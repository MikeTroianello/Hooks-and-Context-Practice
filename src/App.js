import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AllLifecycles from './components/AllLifecycles';
import { Provider } from './Context';

function App() {
  const [info, updateInfo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => updateInfo(json));
  }, []);

  return (
    <Provider value={{ info, updateInfo }}>
      <AllLifecycles />
    </Provider>
  );
}

export default App;
