import UserGreeting from "./UserGreeting";

function App() {


  return (
    <>
      <h1 className="text-center font-extrabold text-xl">Conditional rendering</h1>
      <div className="flex flex-col gap-5 items-center  mt-10">
      <UserGreeting isLoggedIn={true} username="Jayesh"/>
      <UserGreeting isLoggedIn={true} username="Dev"/>
      <UserGreeting isLoggedIn={false} username="Aniket"/>
      <UserGreeting  isLoggedIn={true}/>
      </div>
      
    </>
  );
}

export default App
