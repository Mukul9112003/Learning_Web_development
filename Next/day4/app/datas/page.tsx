export default async function DataList(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("Data not fetch")
        }
        const data=await response.json()
    
    return(
        <div>
        {data.map((user:any)=>(<div key={user.id}
            >
                <h1>User Id {user.userId}</h1>
                <p>{user.title}</p>
                <p>{user.body}</p>
                </div>
        ))}
        </div>
    )
    }catch(error)
        {console.error(error);}
}