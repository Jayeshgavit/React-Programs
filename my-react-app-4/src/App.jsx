import Student  from "./student.jsx";

function App() {
  

  return (
    <>
      <Student name="bob" age={30} isStudent={false}/>
      <Student name="dev" age={19} isStudent={true}/>
      <Student name="sandy" age={23} isStudent={true}/>
      <Student name="jay" age={"30"} isStudent={true}/>
      <Student name="jay"/>
    </>
  )
}

export default App
