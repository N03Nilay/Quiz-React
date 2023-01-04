import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuesAns from './QuesAns';

const Startpage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="start-head">
            <h1>Welcome to Daily Quiz</h1>
        </div>
        <div className="rules">
            <div className="rule-head">
                <h2>Rules</h2>
            </div>
            <div className="rules-num">
                <ul>
                    <li> &#187; This quiz consists of <b>{QuesAns.length-1}</b> MCQ questions .</li>
                    <li> &#187; Each questions carries <b>2</b> marks</li>
                    <li> &#187; For every wrong or unattempted questions <b>0.5</b> marks will be deducted.</li>
                    <li> &#187; You will be given <b>10 seconds</b> to answer each question</li>
                    <li> &#187; To go for the next question click on the <b>Next Question</b> button</li>
                    <li> &#187; The candidate must not surf the answers on internet</li>
                </ul>
            </div>
        </div>
        <button className='start-btn' onClick={() => {
          navigate("/quiz")
        }}>START</button> 
        </div>
  )
}
export default Startpage