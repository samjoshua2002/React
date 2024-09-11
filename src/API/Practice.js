import React, { useEffect, useState } from 'react';

function Practice() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then(data => {
        console.log(data, 'API Response');
        setState(data);
      })
      .catch(error => {
        console.log(error, 'Error');
      });
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <h1 className="text-2xl font-bold text-center mb-4">Posts Table</h1>
      <div className="overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300 ">
          
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-2 text-left">User ID</th>
              <th className="py-3 px-2 text-left">Post ID</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Body</th>
            </tr>
          
          <tbody className="text-gray-600 text-sm font-light">
            {state.map(post => (
              <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-2 text-left">{post.userId}</td>
                <td className="py-3 px-2 text-left">{post.id}</td>
                <td className="py-3 px-6 text-left">{post.title}</td>
                <td className="py-3 px-6 text-left">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Practice;
