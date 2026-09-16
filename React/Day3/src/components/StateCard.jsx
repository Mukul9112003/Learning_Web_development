export default function StatCard(props){
    return(
        <>
        <h1>{props.title}</h1>
        <p>{props.value}</p>
        <p>{props.description}</p>
        </>
    );
}