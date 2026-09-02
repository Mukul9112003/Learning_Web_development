import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count,setcount]=useState(0)
  function handle_click(e){
    setcount(count+1)
  }
  return(
    <div>
      <Navbar count={count}/>
      <button onClick={handle_click}>Click</button>
    </div>
  )
}

export default App
