export default function ShowPatient({children}){
    return(
        <>
        <div className="container">
        <h1>This is patient details</h1>
        {children}
        </div>
        </>
    )
}