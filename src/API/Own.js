import React,{useState,useEffect} from 'react'


function Own() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("https://fake-json-api.mock.beeceptor.com/users/%7Buser_id%7D")
        .then(response=>{
            if (!response.ok) {
                throw new Error("request failed");
                
                
            }
            return response.json();
        })
        .then(response=>{
            console.log("data fetched");
            setdata(response)
        })
        .catch(error => {
            console.log(error, 'error');
        });
        
        
    }, []);
  return (
    <div className='mx-auto container justify-center my-3 '>
        <div className='text-2xl font-bold text-center mb-3'>Employee details</div>
        <table className='min-w-full bg-gray-200 text-gray-500  '>
            <tr className='uppercase'>
                <th className='py-3 text-sm text-center border '>ID</th>
                <th className='py-3 text-sm text-center border '>NAME</th>
                <th className='py-3 text-sm text-center border '>company</th>
                <th className='py-3 text-sm text-center border '>username</th>
                <th className='py-3 text-sm text-center border '>email</th>
                <th className='py-3 text-sm text-center border '>address</th>
                <th className='py-3 text-sm text-center border '>zip</th>
                <th className='py-3 text-sm text-center border '>state</th>
                <th className='py-3 text-sm text-center border '>phone</th>
                
            </tr>
            
            {data.map(res=>(
                <tr key={res.id}>
                    <td className='py-3 px-3 text-sm'>{res.id}</td>
                    <td className='py-3 text-sm'>{res.name}</td>
                    <td className='py-3 text-sm'>{res.company}</td>
                    <td className='py-3 text-sm'>{res.username}</td>
                    <td className='py-3 text-sm '>{res.email}</td>
                    <td className='py-3 text-sm'>{res.address}.</td>
                    <td className='py-3 text-sm'>{res.state}.</td>
                    <td className='py-3 text-sm'>{res.country}</td>
                    <td className='py-3 text-sm'>{res.phone}</td>
                    

                </tr>
            ))}

        </table>

    </div>
  )
}

export default Own