import ComponentC  from "./ComponentC"
import { useState, createContext } from "react";


export const GenderContext = createContext();

function ComponentB(){

    const [gender, setgender] = useState("male");
    return(
        <div className="box">
            <h2> Component B</h2>

            <GenderContext.Provider value={gender}>

            <ComponentC/>
            </GenderContext.Provider>
        </div>
    )

}


export default ComponentB;