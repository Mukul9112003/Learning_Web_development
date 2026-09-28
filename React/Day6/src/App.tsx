import './App.css'
import PatientList from "./components/Patientlist"
function App() {
  const patients = [
    {
      id: 1,
      name: "Mukul",
      age: 23,
      city: "Delhi",
    },
    {
      id: 2,
      name: "Rahul",
      age: 25,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Amit",
      age: 28,
      city: "Pune",
    },
  ];
  function handleDelete(PatientId){
    console.log("Delete: ", PatientId)
  }
  function handleView(name){
    console.log("View patient",name)
  }
  return (
    <>
    <PatientList patients={patients} onDelete={handleDelete} onView={handleView}/>
    </>
  )
}

export default App
