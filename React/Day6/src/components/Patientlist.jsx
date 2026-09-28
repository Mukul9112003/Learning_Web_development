import PatientCard from "./Patientcard"
export default function PatientList({patients,onDelete,onView}){
    return (
    <>
    <h1>Patient Dashboard</h1>
    <h1>Patients</h1>
    {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} onDelete={onDelete} onView={onView}/>
    ))
}
</>
    )
}