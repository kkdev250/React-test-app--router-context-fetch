import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error("somethingWentWrong, response status: " + response.status);
        }
        const data = await response.json();
        const randomStart = Math.floor(Math.random() * data.length);
        const randomEnd = Math.floor(Math.random() * (data.length - randomStart)) + randomStart + 1;
        const slicedData = data.slice(randomStart, randomEnd);
        setUsers(slicedData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (refresh) {
      setRefresh(false);
      fetchData();
    }
  }, [refresh]);

  return (
    <div className="container">
      <div className="header">
        <h1>Users</h1>
        <button onClick={() => setRefresh(true)}>Refresh</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;