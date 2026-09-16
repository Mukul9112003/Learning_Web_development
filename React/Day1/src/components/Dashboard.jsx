import EventCard from "./EventCard"
import PatientCard from "./PatientCard"
export default function Dashboard(){
    return(
        <>
        <h1>Dashboard</h1>
        <PatientCard/>
        <EventCard/>
        </>
    )
}