import React, { useState } from 'react';

function Home() {
  const [home, setHome] = useState('Welcome to my home!');

  function handleClick() {
    setHome('This is my new home!');
  }

  return (
    <div>
      <h1>{home}</h1>
      <h2>Home Component</h2>
      <button onClick={handleClick}>Change Home</button>
    </div>
  );
}

export default Home;
