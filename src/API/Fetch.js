import React, { useEffect, useState } from 'react'

function FetchControl() {
    const [data, setData] = useState([]);

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

    return (
        <div className=" container mx-auto mt-3 ">
    <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
    
    <div className="min-w-full bg-white rounded-lg shadow-lg h-[620px] overflow-y-scroll">
        <table className="min-w-full bg-white border border-gray-300">
            {/* Table Head */}
            <thead className='bg-gray-200 text-gray-600'>
                <tr>
                    <th className="py-3 px-6 text-center">ID</th>
                    <th className="py-3 px-6 text-center">TITLE</th>
                    <th className="py-3 px-6 text-center">COMPLETED</th>
                </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {data.map((tab, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6">{tab.id}</td>
                        <td className="py-3 px-6">{tab.title}</td>
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
</div>

    );
}

export default FetchControl;