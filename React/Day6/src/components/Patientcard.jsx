import Card from "./card"
export default function PatientCard({patient,onView,onDelete}){
    return(<>
        
    {<Card key={patient.id}>
            <h1>{patient.name}</h1>
            <h2>Id:{patient.id}</h2>
            <h3>Age:{patient.age}</h3>
            <h4>City:{patient.city}</h4>
            <button onClick={()=>onView(patient.name)}>View</button>
            <button onClick={()=>onDelete(patient.id)}>Delete</button>
        </Card>
    }
        </>)
}
