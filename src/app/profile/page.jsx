async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
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