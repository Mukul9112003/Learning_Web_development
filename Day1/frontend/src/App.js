import logo from './logo.svg';
import {React,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/common/Navbar.jsx"
import './App.css';
import Forms from "./components/pages/form.jsx"
function App() {
const [DarkMode,setDarkMode]=useState(false)
const handleDark=()=>{
setDarkMode(!DarkMode);
}
const styles={
  color:"black",
  background:(DarkMode)?"white":"gray"
}
const dark=(DarkMode)?"white":"gray"
  return (
    <div className="container">
      <Navbar title="My website" text={dark} handleDark={handleDark}/>
      <Forms style={styles}/>
    </div>
  );
}

export default App;
