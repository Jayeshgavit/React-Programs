function List() {
//   const fruits = ["Apple", "Orange", "Banana", "Coconuts", "pineapple"];

//   const listitems = fruits.map((fruit, index) => {
//     <li key={index}>{fruit}</li>;
//   });

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconuts", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
];



// const listitems = fruits.map(fruit => {
//     <li key={fruit.name}>{fruit.name}</li>
//         });

//         return <ol className="ml-5 list-decimal">{listitems}</ol>; 

// fruits.sort((a,b)=>a.name.localeCompare(b.name)); // sort by name ascending
// fruits.sort((a,b)=>b.name.localeCompare(a.name)); // sort by name Descending
// fruits.sort((a,b)=> a.calories - b.calories); // sort by ace
    fruits.sort((a,b)=> b.calories - a.calories); 

       

        const listitems = fruits.map(fruit => (
            <li key={fruit.id}>{fruit.name} : &nbsp; {fruit.calories}</li> // Return each <li> element
        ));
    
        return <ol className="ml-5 list-decimal">{listitems}</ol>; 
}

export default List;
