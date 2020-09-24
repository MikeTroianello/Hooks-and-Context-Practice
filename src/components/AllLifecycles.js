import React, { useState, useEffect } from 'react';
import ShowInfo from './ShowInfo';

const AllLifecycles = () => {
  // const [info, updateinfo] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => response.json())
  //     .then((json) => updateinfo(json));
  // }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>CONTEXT</h1>
      <ShowInfo />
    </div>
  );
};

export default AllLifecycles;
