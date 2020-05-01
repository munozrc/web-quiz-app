/*
    This component is in charge
    of containing all the components
    on screen.
*/
import React, { useState } from 'react';
import './App.css'
// Import Components
import Header from './Components/Header/Header'

function App() {

  const [ location, setLocation ] = useState('Home')

  return (
    <main className="wrapper">
        <Header location={location}/>
    </main>
  );
}

export default App;