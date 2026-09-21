import { useEffect, useState } from "react";
import ShowPatient from "./ShowPatient";

export default function PatientPage(){
    const [patient,setPatient]=useState([])
    const [page,setpage]=useState(1)
    const PatientPerPage=5
    const totalPages = Math.ceil(patient.length / PatientPerPage);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>setPatient(data))
    },[])
    const lastindex=page * PatientPerPage
    const firstindex=lastindex-PatientPerPage
    const currentPatient=patient.slice(firstindex,lastindex)
    return (
      <>
        <ShowPatient title="Patient details">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            aliquid officia aspernatur delectus, explicabo aperiam nam placeat
            minima ab quae obcaecati laborum architecto nisi suscipit.
          </p>
        </ShowPatient>
        <div>
          {currentPatient.map((user) => (
            <ShowPatient key={user.id}>
              <h1>{user.id}</h1>
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
              <p>{user.address.street}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>{user.company.name}</p>
            </ShowPatient>
          ))}
        </div>
        <button onClick={() => setpage(page + 1)}disabled={page === totalPages}>Next</button>
        <button onClick={() => setpage(page - 1) }disabled={page==1}>Back</button>
      </>
    );
}