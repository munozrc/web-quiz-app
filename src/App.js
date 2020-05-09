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
import MenuQuestions from './Components/MenuQuestions/MenuQuestions'
import Quiz from './Components/Quiz/Quiz'
import { REDES, SEMIPROG, HOME } from './Components/variables'

// Import Files
import question_p13_redes_01 from './questions/carlos/redes-p13.json'
import question_p14_redes_01 from './questions/carlos/redes-p14.json'

import question_p13_redes_02 from './questions/david/redes-p13.json'
import question_p14_redes_02 from './questions/david/redes-p13.json'

import question_p13_semiprog_01 from './questions/carlos/semiprog-p13.json'
import question_p14_semiprog_01 from './questions/carlos/semiprog-p14.json'

import question_p13_semiprog_02 from './questions/david/semiprog-p13.json'
import question_p14_semiprog_02 from './questions/david/semiprog-p13.json'

function App() {

  const [ location, setLocation ] = useState( HOME )
  const [ questions, setQuestions ] = useState([])
  const [ quiz, setQuiz ] = useState(false)
  let list_questions = []

  const authors = [
    {
      id: 0,
      name: 'Carlos Muñoz',
      subject: {
        redes: [
          {
            id: 0,
            text: 'Preguntas #13',
            file: question_p13_redes_01
          },
          {
            id: 1,
            text: 'Preguntas #14',
            file: question_p14_redes_01
          }
        ],
        semiprog: [
          {
            id: 0,
            text: 'Preguntas #13',
            file: question_p13_semiprog_01
          },
          {
            id: 1,
            text: 'Preguntas #14',
            file: question_p14_semiprog_01
          }
        ]
      }
    },
    {
      id: 1,
      name: 'David Chicunque',
      subject: {
        redes: [
          {
            id: 0,
            text: 'Preguntas #13',
            file: question_p13_redes_02
          },
          {
            id: 1,
            text: 'Preguntas #14',
            file: question_p14_redes_02
          }
        ],
        semiprog: [
          {
            id: 0,
            text: 'Preguntas #13',
            file: question_p13_semiprog_02
          },
          {
            id: 1,
            text: 'Preguntas #14',
            file: question_p14_semiprog_02
          }
        ]
      }
    }
  ]

  const HandleSubject = ( newLocation ) => {
    setLocation(newLocation)
  }

  const HandleInitQuiz = ( value ) => {
    setQuiz(value)
  }

  const addQuestions = ( question, author ) => {

    let origin_questions = authors.filter(element => element.name === author)

    if ( location === REDES ) {
      list_questions = list_questions.concat(origin_questions[0].subject.redes[question])
    } else if ( location === SEMIPROG ) {
      list_questions = list_questions.concat(origin_questions[0].subject.semiprog[question])
    }

    setQuestions(list_questions)
  }

  return (
    <main className="wrapper">
        <Header location={ location }/>
        {
          location === HOME &&
          <React.Fragment>
            <Subject handleChangeSubject={ HandleSubject }/>
          </React.Fragment>
        }

        {
          !quiz && 
          <React.Fragment>
            {
              ( location === REDES || location === SEMIPROG ) &&
              <React.Fragment>
                <MenuQuestions 
                  authors={ authors }
                  location={ location }
                  addQuestions={ addQuestions }
                  initQuiz = { HandleInitQuiz }
                />
              </React.Fragment>
            }
          </React.Fragment>
        }

        {
          quiz && <Quiz />
        }
    </main>
  );
}

export default App;
