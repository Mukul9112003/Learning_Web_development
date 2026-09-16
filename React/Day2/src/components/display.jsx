import { jsx } from "react/jsx-runtime";

export default function Dashboard(){
    const applicationName = "OryxT";
    const patientCount = 150;
    const eventCount = 80;
    const doctorCount = 25;
    return(
        <>
        <h1>OryxT Dashboard</h1>
        <p>Total Patient: {patientCount}</p>
        <p>Total Events: {eventCount}</p>
        <p>Total Doctor: {doctorCount}</p>
        <p>Total Records: {patientCount+eventCount}</p>
        </>
    )
}

