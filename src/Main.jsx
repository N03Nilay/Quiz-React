
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import QuesAns from './QuesAns'


const Main = () => {
    const [count,setcount] = useState(0);
    const [ans, setAns] = useState("");
    const [score,setScore] = useState(0);
    const [wrong,setWrong] = useState(0);
    const [un,setUn] = useState(0);
    const[isSelected,setisSelected] = useState(false)
    const [timer,setTimer] = useState(10)
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
          setTimer(timer-1)
        }, 1000);
      
        return () => clearInterval(interval);
      });

      useEffect(() => {
        if(count === (QuesAns.length -1)){
            Submit();
        }
    })

    const next = () => { 
            if(isSelected === true)
            {
                (QuesAns[count].ans === ans) ? (setScore(score + 1)) : (setWrong(wrong + 1))
                setcount(count + 1);
            setTimer(10);
            setAns("");
            deseletAll();
            }
            else{
                setUn(un+1);
                setcount(count + 1);
            setTimer(10);
            setAns("");
            deseletAll();

            }
            setcount(count + 1);
            setTimer(10);
            setAns("");
            deseletAll();

        
    }
    
    const answers = document.querySelectorAll(".answer");
    const deseletAll = () => {
            answers.forEach((currAnselem) => currAnselem.checked = false)
        }
        const Submit = () => {
                navigate("/assessment" , {state : {correct: (score)}}) 
                
            console.log(score)
            // console.log(wrong)
            console.log(un);
        }
  return (
    <div className='main'>
        
        <div className="main-left">
            <div className="main-left-up">
        <div className='ques-count'><b>#</b>Question {(QuesAns[count].id)} of {(QuesAns.length-1)}</div>
        <div className="time">
                {(timer >= 0) ? ((timer<10) ? (((timer<4) ? (<h3 style={{background:"rgb(243, 16, 16)"}}>0{timer}</h3>) : (<h3>0{timer}</h3>))) : (<h3>{timer}</h3>)) : (next())}
                
            </div>
            <div className="right-block">
                <button className='btn-quit' onClick={() => {
                    Submit()
                }}>QUIT</button>
            </div>
            </div>
        <div className="left-block">
        <p className='ques-font'>{(QuesAns[count].ques)}</p>
        <div className="options">
                    <div className="option-up">
                    <div className='option-font'>
                        <input type="radio" name="check" id="ans1" className="answer" onClick={() => {setAns("a");setisSelected(true)}}/>
                        <label for="ans1" id="option1">{QuesAns[count].a}</label>
                    </div>
                    <hr />
                    <div className='option-font'><input type="radio" name="check" id="ans2" className="answer" onClick={() => {setAns("b");setisSelected(true)}}/>
                        <label for="ans2" id="option2">{QuesAns[count].b}</label>
                    </div></div>
                    <div className="option-down">
                    <div className='option-font'><input type="radio" name="check" id="ans3" className="answer" onClick={() => {setAns("c");setisSelected(true)}}/>
                        <label for="ans3" id="option3">{QuesAns[count].c}</label>
                    </div>
                    <hr />
                    <div className='option-font'><input type="radio" name="check" id="ans4" className="answer" onClick={() => {setAns("d");setisSelected(true)}} />
                        <label for="ans4" id="option4">{QuesAns[count].d}</label>
                    </div>
                    </div>
                    </div>
                    <div className="button-wrap">
        <button onClick={next} className="btn-save" id="next">
          Next Question
        </button>
    </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Main