import List from "./List.jsx";

function App() {
  // const fruits = [];

 const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconuts", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];


  const vegetable = [
    { id: 1, name: "Potato", calories: 95 },
    { id: 2, name: "celery", calories: 45 },
    { id: 3, name: "Carot", calories: 105 },
    { id: 4, name: "corn", calories: 159 },
    { id: 5, name: "brocoly", calories: 37 },
  ];

  return (
    <>
      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits"></List>
      ) : null}

      {vegetable.length > 0 ? (
        <List items={vegetable} category="vegetable"></List>
      ) : null}
    </>
  );
}

export default App;
