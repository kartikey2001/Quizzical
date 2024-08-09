import { useState , useEffect } from 'react'
import Questions from './component/Questions'
import './App.css'

function App() {
  const[qPage,setQPage]= useState(false)

 

  const[allQuestion , setAllQuestion] = useState([])

  useEffect(() => {
    async function getQuestion() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      setAllQuestion(data.results)
    }
    getQuestion()
  },[])
  // useEffect(() => {
  //   async function fetchQuestions() {
  //     try {
  //       const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
  //       // if (!res.ok) {
  //       //   throw new Error('Failed to fetch questions');
  //       // }
  //       const data = await res.json();
  //       setAllQuestion(data.results);
  //     } catch (error) {
  //       console.error('Error fetching questions:', error);
  //     }
  //   }
  //   fetchQuestions();
  // }, []);
  
   console.log(allQuestion)

  function toggle(){
    setQPage(per => !per)
  }

  return (
    <div className='home-page'>
      {
        qPage?
        <div>
          <Questions ques={allQuestion} />
        </div>
        :
        <div>
          <h1>Quizzical</h1>
          <p>discription</p>
          <button className='start-btn' onClick={toggle}>Start Game</button>
        </div>
      }
    </div>
  )
}

export default App
