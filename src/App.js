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

// CARLOS
import question_p12_redes_01 from './questions/carlos/redes-p12.json'         // REDES
import question_p13_redes_01 from './questions/carlos/redes-p13.json'
import question_p14_redes_01 from './questions/carlos/redes-p14.json'
import question_p15_redes_01 from './questions/carlos/redes-p15.json'
import question_p16_redes_01 from './questions/carlos/redes-p16.json'

import question_p12_semiprog_01 from './questions/carlos/semiprog-p12.json'    // SEMIPROG
import question_p13_semiprog_01 from './questions/carlos/semiprog-p13.json'
import question_p14_semiprog_01 from './questions/carlos/semiprog-p14.json'
import question_p15_semiprog_01 from './questions/carlos/semiprog-p15.json'
import question_p16_semiprog_01 from './questions/carlos/semiprog-p16.json'

// YINER
import question_p12_redes_02 from './questions/david/redes-p12.json'           // REDES
import question_p13_redes_02 from './questions/david/redes-p13.json'
import question_p14_redes_02 from './questions/david/redes-p14.json'
import question_p15_redes_02 from './questions/david/redes-p15.json'
import question_p16_redes_02 from './questions/david/redes-p16.json'

import question_p12_semiprog_02 from './questions/david/semiprog-p12.json'     // SEMIPROG
import question_p13_semiprog_02 from './questions/david/semiprog-p13.json'
import question_p14_semiprog_02 from './questions/david/semiprog-p14.json'
import question_p15_semiprog_02 from './questions/david/semiprog-p15.json'
import question_p16_semiprog_02 from './questions/david/semiprog-p16.json'

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
            text: 'Preguntas #12',
            file: question_p12_redes_01
          },
          {
            id: 1,
            text: 'Preguntas #13',
            file: question_p13_redes_01
          },
          {
            id: 2,
            text: 'Preguntas #14',
            file: question_p14_redes_01
          },
          {
            id: 3,
            text: 'Preguntas #15 (quiz on Tuesday)',
            file: question_p15_redes_01
          },
          {
            id: 4,
            text: 'Preguntas #16 (quiz on Tuesday)',
            file: question_p16_redes_01
          }
        ],
        semiprog: [
          {
            id: 0,
            text: 'Preguntas #12',
            file: question_p12_semiprog_01
          },
          {
            id: 1,
            text: 'Preguntas #13',
            file: question_p13_semiprog_01
          },
          {
            id: 2,
            text: 'Preguntas #14',
            file: question_p14_semiprog_01
          },
          {
            id: 3,
            text: 'Preguntas #15 (quiz on Tuesday)',
            file: question_p15_semiprog_01
          },
          {
            id: 4,
            text: 'Preguntas #16 (quiz on Tuesday)',
            file: question_p16_semiprog_01
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
            text: 'Preguntas #12',
            file: question_p12_redes_02
          },
          {
            id: 1,
            text: 'Preguntas #13',
            file: question_p13_redes_02
          },
          {
            id: 2,
            text: 'Preguntas #14',
            file: question_p14_redes_02
          },
          {
            id: 3,
            text: 'Preguntas #15 (quiz on Tuesday)',
            file: question_p15_redes_02
          },
          {
            id: 4,
            text: 'Preguntas #16 (quiz on Tuesday)',
            file: question_p16_redes_02
          }
        ],
        semiprog: [
          {
            id: 0,
            text: 'Preguntas #12',
            file: question_p12_semiprog_02
          },
          {
            id: 1,
            text: 'Preguntas #13',
            file: question_p13_semiprog_02
          },
          {
            id: 2,
            text: 'Preguntas #14',
            file: question_p14_semiprog_02
          },
          {
            id: 3,
            text: 'Preguntas #15 (quiz on Tuesday)',
            file: question_p15_semiprog_02
          },
          {
            id: 4,
            text: 'Preguntas #16 (quiz on Tuesday)',
            file: question_p16_semiprog_02
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
      list_questions = list_questions.concat(origin_questions[0].subject.redes[question].file)
    } else if ( location === SEMIPROG ) {
      list_questions = list_questions.concat(origin_questions[0].subject.semiprog[question].file)
    }

    // AÑADIR AL ARRAY FINAL
    setQuestions(list_questions.sort(() => { return Math.random() - 0.5 }))
  }

  const HandleBackHome = () => {
    setLocation(HOME)
    setQuestions([])
    setQuiz(false)
    list_questions = []
    HandleInitQuiz(false)
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
          quiz && <Quiz questions = { questions } backHome = { HandleBackHome } />
        }
    </main>
  );
}

export default App;
