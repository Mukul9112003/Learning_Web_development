import './App.css'
import PatientCard from './components/PatientCard'
import Card from "./components/Card"
function App() {
  const Patient = {
    id: 1,
    name: "Mukul",
    age: 23,
    city: "Delhi",
  };
  function handleDelete(){
    console.log("Patient deleted");
  }
  return(
    <>
    <PatientCard patient={Patient} onDelete={handleDelete}/>
    <Card title="Patient Details">
      <p>Name: Mukul</p>
      <p>Age: 23</p>
    </Card>
</>
  )
}

export default App
