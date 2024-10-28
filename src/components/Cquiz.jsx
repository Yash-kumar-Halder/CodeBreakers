import { h2, option } from 'framer-motion/client'
import React, { useRef, useState } from 'react'
import { Cdata } from '../assets/Cdata.js';

function Cquiz() {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Cdata[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_arr = [Option1, Option2, Option3, Option4]



  const checkAns = (e, answ) => {
    if (lock === false) {
      if (question.ans === answ) {
        e.target.classList.add("currect");
        setScore(prev => prev + 1)
      } else {
        e.target.classList.add("incurrect");
        option_arr[question.ans - 1].current.classList.add("currect");
      }
      setLock(true);
    }
  }

  const next = () => {
    if (index === Cdata.length - 1) {
      setResult(true);
      return 0;
    }
    if (lock === true) {
      setIndex(++index);
      setQuestion(Cdata[index]);
      setLock(false);
      option_arr.map((option) => {
        option.current.classList.remove("incurrect");
        option.current.classList.remove("currect");
        return null;
      })
    }
  }

  const quizRestart = () => {
    setIndex(0);
    setQuestion(Cdata[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

  return (
    <div className="quizContainer">
      <div className="quisCart">
        <h1>Quiz App</h1>
        <hr />
        {result ? <><h3 className='quizScore'>You Score {score} out of {Cdata.length}</h3><button onClick={quizRestart} className='quizRestart cursor'>Restart</button></> : <><h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }} className='options'>{question.option1}</li>
            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }} className='options'>{question.option2}</li>
            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }} className='options'>{question.option3}</li>
            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }} className='options'>{question.option4}</li>
          </ul>
          <div className="quizNextBtnCont">
            <button onClick={next} className='quizNextBtn'>Next</button>
          </div>
          <div className="questionIndex">{index + 1} out of {Cdata.length} questions</div></>}

      </div>
    </div>
  )
}

export default Cquiz