
import React, {useState, useEffect, useRef} from "react";


function Stopwatch(){

    const [isrunning, setIsRunning] = useState(false);

    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);

    const startTimeRef  = useRef(0);

    useEffect(()=> {


        if(isrunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }
            
            return ()=>{
                clearInterval(intervalIdRef.current);
            }
    }, [isrunning])


    function start(){
    console.log("isworking btn1")   
    
        setIsRunning(true);
        startTimeRef.current = Date.now(); - elapsedTime;
    }
    function stop(){
        console.log("isworking btn2")
        setIsRunning(false);
    }
    function reset(){
        console.log("isworking btn2")
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 10)
        let seconds = Math.floor(elapsedTime / (1000 ) % 60)
        let miliseconds = Math.floor((elapsedTime % 1000 ) / 10);
        
        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(2, "0")

        return(`${minutes}:${seconds}:${miliseconds}`)


    
    }

    return(
        <div className="stowatch">
            <div className="display">
                {formatTime()}
            </div>

            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );


};
export default Stopwatch;