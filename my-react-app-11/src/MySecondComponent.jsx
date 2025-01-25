import { useState } from "react";


function MySecondComponent(){


    const [car, setCar] = useState({year: 2022, make: "Ford", model: "Mustang"}) 

    
        function handleYearChange(event){
            setCar(c=> ({...c, yaer:event.target.value }))
        }
        function handleMakeChange(event){
            setCar(c => ({...c, make: event.target.value}))
        }
        function handleModelChange(event){
            setCar(c => ({...c, model: event.target.value}))
        }
        
       
    
        return(
        <div>
            <p>Your Favorite car is : {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}


export default MySecondComponent;