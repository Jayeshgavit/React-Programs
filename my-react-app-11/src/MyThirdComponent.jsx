import { useState } from "react";

function MyThirdComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value="";

    setFoods(f => ([...f, newFood]));
    

}

  function handleRemoveFood(index){
    setFoods(foods.filter((_, i) => i!= index))
  }

  return (
    <div>
      <h2>List of Food Items</h2>
      <ul>
        {
        foods.map((food, index) => 

            <li key={index} onClick={()=> handleRemoveFood(index)}> {food} 
        
        </li>)
        }

      </ul>

      <label htmlFor="Enter Food Name : "> 
      <input type="text" id="foodinput" placeholder="name of food"/>
      <button className="btn" onClick={handleAddFood} >Add Food </button>
      </label>
     
    </div>
  );
}

export default MyThirdComponent;
