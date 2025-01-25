import { useEffect } from "react";
import { useState, useRef} from "react";

function MyComponent() {
//   let [number, setNumber] = useState(0);

//   const inputRef = useRef(0);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

    useEffect(()=> {
        console.log("Renderd");
        console.log(inputRef);
    });

//   function handleClick() {
//     setNumber((n) => n + 1); // Increment the number
//   }


  function handleClick() {
    // ref.current = ref.current + 1;

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
   
  }
  function handleClick1() {
    // ref.current = ref.current + 1;

    inputRef1.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
   
  }
  function handleClick2() {
    // ref.current = ref.current + 1;

    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "red";
    inputRef3.current.style.backgroundColor = "";
   
  }
  function handleClick3() {
    // ref.current = ref.current + 1;

    inputRef3.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "red";
   
  }

  return (
    <div>
        
      <button onClick={handleClick}>Click me</button> 
      <input type="text" ref={inputRef}/><br /><br />

      <button onClick={handleClick1}>Click me1</button> 
      <input type="text" ref={inputRef1}/><br /><br />

      <button onClick={handleClick2}>Click me2</button> 
      <input type="text" ref={inputRef2}/><br /><br />

      <button onClick={handleClick3}>Click me3</button> 
      <input type="text" ref={inputRef3}/><br /><br />


    </div>
  );
}

export default MyComponent;
