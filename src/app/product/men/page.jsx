async function getData(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    return data;
}

const Page = async() => {
    const data = await getData();

    return (
        <div>
            <h1> Men Product Page </h1>
            <h1 className='text-2xl'>{JSON.stringify(data)}</h1>
           
        </div>
    );
};

export default Page;