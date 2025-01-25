import  {useContext} from "react";

import { UserContext } from "./ComponentA";
import { GenderContext } from "./ComponentB";


import ComponentD  from "./ComponentD"


function ComponentC(){
    const gender = useContext(GenderContext)
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h2> Component C</h2>
            <h3>{`hello ${user} Gender :  ${gender}`}</h3>
            <ComponentD />
        </div>
    )

}


export default ComponentC;