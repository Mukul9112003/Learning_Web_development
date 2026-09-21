import { useCallback } from "react"

export default function PatientCard({patient,onDelete}){
    return (
    <>
      <h1>Patient Information</h1>
      <p>Id: {patient.id}</p>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>City: {patient.city}</p>
      <button onClick={onDelete}>Delete</button>
    </>
    )
}
