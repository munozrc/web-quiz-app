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
import MenuQuestions from './Components/MenuQuestions/MenuQuestions'

function App() {

  const [ location, setLocation ] = useState('Home')

  const HandleSubject = ( newLocation ) => {
    setLocation(newLocation)
  }

  const HandleClickButton = e => {
    console.log(e.target)
  }

  return (
    <main className="wrapper">
        <Header location={location}/>
        {
          location === 'Home' &&
          <React.Fragment>
            <Subject handleChangeSubject={HandleSubject}/>
            <ButtonPrimary 
              name='back'
              value='Regresar'
              onClick={HandleClickButton}
            />
          </React.Fragment>
        }

        {
          location === 'Redes de Computadores II' &&
          <React.Fragment>
            <MenuQuestions />
          </React.Fragment>
        }
    </main>
  );
}

export default App;
