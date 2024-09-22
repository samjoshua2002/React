import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Own() {
    const [data, setdata] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=5;
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
    const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
            
            {currentItems.map(res=>(
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
        <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight />} // Use icons for pagination controls
        previousLabel={<FaChevronLeft />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        containerClassName="flex justify-center items-center space-x-3 mt-4" // Flexbox for center alignment
        pageClassName="border rounded-lg px-3 py-1 hover:bg-gray-200" // Styling for individual page numbers
        activeClassName="bg-blue-500 text-white"
        breakClassName="px-3 py-1"
        previousClassName="px-3 py-1 hover:bg-gray-200" // Previous button styling
        nextClassName="px-3 py-1 hover:bg-gray-200" // Next button styling
        disabledClassName="opacity-50 cursor-not-allowed" // Disable button styles
        pageLinkClassName="text-gray-700"
      />
    </div>

  )
}

export default Own