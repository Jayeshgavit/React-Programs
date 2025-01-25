import { useState } from "react";


function MyFourthComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    function handleAddCar(){
        const newCar = {year: carYear, Make: carMake, Model: carModel };

        setCars(c=>([...c,newCar]))
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c=>(c.filter((_, i) => i !== index)))

    }

    function handleYearChnage(event){
        setCarYear(event.target.value);
    }
    function handleMakeChnage(event){
        setCarMake(event.target.value);
        
    }
    function handleModelChnage(event){
        setCarModel(event.target.value);
        
    }


    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul >

                {cars.map((car,index) => 
                <li key={index} onClick={()=> handleRemoveCar(index)}>
                     {car.year} {car.Make} {car.Model}
                     
                     </li> )}

            </ul>
            <input type="number" id="yearInput" value={carYear} onChange={handleYearChnage} /><br />
            <input type="text" id="makeInput" value={carMake} onChange={handleMakeChnage} placeholder="enter Car Make"/><br />
            <input type="text" id="modelInput" value={carModel} onChange={handleModelChnage} placeholder="enter Car Model"/><br />


            <button onClick={handleAddCar}>Add Car</button>
            
        </div>
    );
}

export default MyFourthComponent;