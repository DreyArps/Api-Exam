import React, { useState } from 'react';
import { updateUser } from './ApiConnection';

interface UserProps {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

const UserRow: React.FC<UserProps> = ({ user }) => {
  const { id, email, first_name, last_name, avatar } = user;

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleUpdateClick = async () => {
    try {
      await updateUser(id, updatedUser);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const handleDeleteClick = async () => {
   
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        <img src={avatar} alt={`${first_name} ${last_name}`} className="avatar" />
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={updatedUser.first_name}
            onChange={e => setUpdatedUser({ ...updatedUser, first_name: e.target.value })}
          />
        ) : (
          first_name
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={updatedUser.last_name}
            onChange={e => setUpdatedUser({ ...updatedUser, last_name: e.target.value })}
          />
        ) : (
          last_name
        )}
      </td>
      <td>{email}</td>
      <td>
        {editing ? (
          <>
            <button className="btn btn-success btn-sm" onClick={handleUpdateClick}>
              Update
            </button>
            <button className="btn btn-secondary btn-sm ml-3" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-warning btn-sm" onClick={handleEditClick}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm ml-2" onClick={handleDeleteClick}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
