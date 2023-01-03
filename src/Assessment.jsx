import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Assessment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tot = location.state.correct + location.state.wrong
  const corr = location.state.correct
  const wro = location.state.wrong
  const finalScore = location.state.finalScore
  const accu = ((corr/tot)*100).toFixed(1);
  return (
    <div>
      <h1 className='assessment-heading'>Overall Performance Summary</h1>
        <div className="score-up">
          <div className="score-up-left">
            <img src="tropy-img-removebg-preview.png" alt="" width="35%" height = "85%"/>
          </div>
          <div className="score-up-right">
          <div className="score-fig"><h2 style={{color:"white"}}>{finalScore}</h2></div>
          <div className="score-head"><p style={{color:"white"}}>Score</p></div>
          </div>
        </div>
        <div className="score-down">
          <div className="attempted">
            <h3>{corr} / {tot}</h3>
            <p>Attempted / correct</p>
          </div>
          <div className="accuracy">
          <h3>{accu} %</h3>
          <p>Accuracy</p>
          </div>
          <div className="unattempted">
          <h3>{wro} / {tot}</h3>
          <p>Unattempted / Wrong</p>
          </div>
        </div>
        <button className='reattempt' onClick={() => {
          navigate("/")
        }}>Reattempt</button> 
    </div>
  )
}

export default Assessment
