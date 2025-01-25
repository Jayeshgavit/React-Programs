import  {useState} from "react"


function Counter(){

    const [count, setCount] =  useState(0);

    const Increament = ()=>{
        setCount(count + 1);
    };

    const Decrement = ()=>{
        setCount(count - 1);
    };

    const reset = ()=>{
        setCount(0);
    };

    return(

        <div className="counter-container">
            <h3 className="counter"> {count}</h3><br />
            <button onClick={Increament}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}; export default Counter