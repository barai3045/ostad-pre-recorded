async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        //method:'GET',
        //headers: {'Content-Type':'application/json'},
        //cache:'no-cache',
        //cache:'force-cache',
        next: { revalidate:300 }
    });
    const data = await res.json();
    return data;
}


const Page = async () => {

    const data = await getData();

    return (
        <div>
            <h1 className="text-2xl text-blue-400">Profile Page</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;