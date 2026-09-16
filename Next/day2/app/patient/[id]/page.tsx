type Props={
    params:Promise<{id:string}>;
}
export default async function PatientDetails({params}:Props){
    const {id}=await params;
    return <h1>Patient Id: {id}</h1>
}