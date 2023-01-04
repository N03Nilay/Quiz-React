import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuesAns from './QuesAns'

const Assessment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tot = QuesAns.length -1
  const corr = location.state.correct
  const wro = tot - corr
  const finalScore = (2*corr) - (0.5*(wro))
  const accu = ((corr/tot)*100).toFixed(1);
  return (
    <div>
      <h1 className='assessment-heading'>Overall Performance Summary</h1>
        <div className="score-up">
          <div className="score-up-left">
            <img src="tropy-img-removebg-preview.png" alt="" width="225rem" height = "195rem"/>
          </div>
          <div className="score-up-right">
          <div className="score-fig"><h2 style={{color:"white"}}>{finalScore}</h2></div>
          <div className="score-head"><p style={{color:"white"}}>Score</p></div>
          </div>
        </div>
        <div className="score-down">
          <div className="attempted">
            <p>Attempted / correct</p>
            <h3>{corr} / {tot}</h3>
          </div>
          <div className="accuracy">
          <p>Accuracy</p>
          <h3>{accu} %</h3>
          </div>
          <div className="unattempted">
          <p>Unattempted / Wrong</p>
          <h3>{wro} / {tot}</h3>
          </div>
        </div>
        <button className='reattempt' onClick={() => {
          navigate("/")
        }}>Reattempt</button> 
    </div>
  )
}

export default Assessment
