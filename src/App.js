/*
    This component is in charge
    of containing all the components
    on screen.
*/
import React, { useState } from 'react';
import './App.css'
// Import Components
import Header from './Components/Header/Header'
import Subject from './Components/Subject/Subject'
import ButtonPrimary from './Components/ButtonPrimary/ButtonPrimary'

function App() {

  const [ location, setLocation ] = useState('Home')

  const HandleSubject = ( newLocation ) => {
    setLocation(newLocation)
  }

  const HandleClick = e => {
    console.log(e.target)
  }

  return (
    <main className="wrapper">
        <Header location={location}/>
        <Subject handleChangeSubject={HandleSubject}/>
        <ButtonPrimary 
          name='back'
          value='Regresar'
          onClick={HandleClick}
        />
    </main>
  );
}

export default App;
