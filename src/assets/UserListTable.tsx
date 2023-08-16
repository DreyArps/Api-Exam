import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';
import { getUsers } from './ApiConnection';


const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userData = await getUsers();
      setUsers(userData);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
