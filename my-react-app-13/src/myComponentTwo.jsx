import { useEffect, useState } from "react";


function MyComponentTwo(){

const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);




useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("Event Listener Added")

    return ()=>{
        window.removeEventListener("resize", handleResize)
        console.log("Event Listener removed")
    }

}, []); // Empty array ensures effect only runs once on mount

useEffect(()=>{
    document.title = `Sixe : ${width} x ${height}`
}, [width,height])

function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
};



    return(
        <>
        <p> Window Width : {width}px</p>
        <p> Window height : {height}px</p>
        </>
    );
};
export default MyComponentTwo;