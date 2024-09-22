import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { TbPlayerTrackNextFilled } from "react-icons/tb";

function FetchControl() {
    const [data, setData] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=10;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Request was unsuccessful...');
                }
                return response.json();
            })
            .then(data => {
                console.log(data, 'todos');
                setData(data);
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
        <div className=" container mx-auto mt-20 ">
    <h1 className="text-6xl font-bold text-center mb-4">Todo List</h1>
    
    <div className="min-w-full bg-white rounded-lg shadow-lg h-[310px] overflow-y-scroll ">
        <table className="min-w-full bg-white border border-gray-300">
            {/* Table Head */}
            <thead className='bg-gray-200 text-gray-600 sticky top-0'>
                <tr>
                    <th className="py-3 px-6 text-center">ID</th>
                    <th className="py-3 px-6 text-center">TITLE</th>
                    <th className="py-3 px-6 text-center">COMPLETED</th>
                </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {currentItems.map((tab, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6">{tab.id}</td>
                        <td className="py-3 px-6 text-center">{tab.title}</td>
                        <td className="py-3 px-6 text-center">
                            <span
                                className={`${
                                    tab.completed
                                        ? 'bg-green-200 text-green-800'
                                        : 'bg-red-200 text-red-800'
                                } py-1 px-3 rounded-full text-xs`}
                            >
                                {tab.completed ? 'Yes' : 'No'}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <ReactPaginate className='mt-16 flex justify-center items-center' 
        breakLabel="..."
        nextLabel={<TbPlayerTrackNextFilled  className=' text-black h-5 w-5' />}
        previousLabel={ <TbPlayerTrackNextFilled className='rotate-180 text-black h-5 w-5'/> }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        containerClassName="flex justify-center items-center space-x-3 mt-4" // Flexbox for center alignment
        pageClassName="border rounded-lg px-3 py-1 hover:bg-gray-200" // Styling for individual page numbers
        activeClassName="bg-black text-white"
        breakClassName="px-3 py-1"
        previousClassName="px-3 py-1 hover:bg-gray-200" // Previous button styling
        nextClassName="px-3 py-1 hover:bg-gray-200" // Next button styling
        disabledClassName="opacity-50 cursor-not-allowed" // Disable button styles
        pageLinkClassName="text-gray-300 font-bold"
        
      />
</div>

    );
}

export default FetchControl;