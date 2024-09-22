import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';

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
      <TableContainer component={Paper} className="h-[540px]">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Post ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map(post => (
              <TableRow key={post.id} hover>
                <TableCell>{post.userId}</TableCell>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Practice;
