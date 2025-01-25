import { useEffect, useState } from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    


    useEffect( ()=> {
        document.title = `count ${count} ${color}`;

        return ()=>{
                //some cleanup code
        };

    }, [count, color]);



    function addCount(){
        setCount( c=> c + 1);
    }

    function subtractCount(){
        setCount(c=> c - 1);
    }

    function changeColor(){
        setColor(c=> c === "green" ? "red" : "green"); 
    }
    return(
        <>
            <div>
                <h2 style={{}}>UseEffect</h2>
                <p className="count" style={{color: color}}>{count}</p>
                <button onClick={addCount}> Add </button>
                <button onClick={subtractCount}> Subtract  </button>
                <button onClick={changeColor}>change color</button>
            </div>
        </>
    );
}


export default MyComponent;