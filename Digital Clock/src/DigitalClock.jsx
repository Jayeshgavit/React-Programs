import React, {useState, UseEffect, useEffect} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000);


        return () => {
            clearInterval(intervalId);
        }
    }, [])


    function formatTime(){
        let hour = time.getHours();
        let minitues = time.getMinutes();
        let seconds = time.getSeconds();
        const meridien = hour >= 12 ? "Pm" : "Am"; 

        hour = hour % 12;
        hour = hour % 12 || 12;


        return `${padZero(hour)} : ${padZero(minitues)} : ${padZero(seconds)} ${meridien}`;
    }


    function padZero(number){
        return (number < 10 ?  "0" : "") + number
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;