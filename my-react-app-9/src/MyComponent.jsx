import React,  {useState} from "react";



function MyComponent(){

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployment] = useState(false);

    const updateName = () => {
        setName("Jayesh");
        console.log(`Name is ${name}`);
    }

    const incrementAge = () => {
        setAge(age + 1);
        console.log(`Age is ${age}`);
    }

    const ToggleEmpStatus = () => {
        setEmployment(!isEmployed);
        console.log(`Employment status is ${isEmployed}`);
    }
    return(

        <div>
            <p>Name : {name} </p>
            <button onClick={updateName}> Set Name</button>

            <p>Age : {age} </p>
            <button onClick={incrementAge}> Increament Age </button>

            <p>Is Employed : {isEmployed ? "Yes" : "No"} </p>
            <button onClick={ToggleEmpStatus}> Toggle Status </button>
        </div>
    );

}


export default MyComponent;