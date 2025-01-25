import { useState } from "react";


function MyComponent() {

    const [count, setCount] = useState(0);
        
    
    function increament(){
        setCount( c =>  c + 1);
        //update
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decreament(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset(){
        setCount(0);
    }
        return(

            <div >
                <p > Count : {count}</p>
                <button onClick={increament}>increament</button>
                <button onClick={reset}>reset</button>
                <button onClick={decreament}>Decreament</button>
            </div>
        );
}


export default MyComponent;