import { useState,useRef,useEffect } from 'react'
import Navbar from "./common/navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [c,setc]=useState(false)
  const btnref=useRef()
  const btn1ref=useRef()
  useEffect(()=>{
      c
        ? (btnref.current.style.backgroundColor = "red")
        : (btnref.current.style.backgroundColor = "white");
      if (count===5){
        btn1ref.current.style.display="none"
        setc(true)
    }
  },[count,c]);
  return (
    <>
      <Navbar title="first"/>
        <button
          ref={btnref}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          ref={btn1ref}
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
    </>
  );
}

export default App;
