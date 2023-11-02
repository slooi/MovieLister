import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [counter,setCounter] = useState(1)

  useEffect(()=>{
    // setCounter(prevVal=>prevVal-1)
    console.log("wahh!")
  },[counter])


  return (
    <div>
      {counter}
      <button onClick={()=>{setCounter((prevVal=>prevVal-1))}}>-</button>
      <button>+</button>
    </div>
  );
}

// const Person = (props) => {
//   const name = "Bob"
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h1>Age: {props.age}</h1>
//     </div>
//   )
// }
// function App() {
//   const name = "pie"
//   const isLoggedIn = true


//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//         <Person name="John" age="cena" />
//         <Person name="Bob" age="smith" />
//         </>
//       ) : "Please Log In"}
//     </div>
//   );
// }

export default App;
