import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/auth';
import { Link } from 'react-router-dom';

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken 
        }
      });
      const data = await response.json();
      console.log('Users data:', data);
      setUsers(data);
    } catch (error) {
      console.log('Error fetching users data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        }
      });
      const data = await response.json();
      console.log('Users after delete:', data);
      getAllUsersData();
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section className='py-5 px-4  bg-gray-600 '>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-500 ">Admin Users Data</h1>
        <div className='overflow-x-auto shadow-md rounded-lg'>
          <table className="w-full text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Update</th>
                <th className="px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index} className="border-b bg-white hover:bg-gray-50">
                  <td className="px-6 py-4">{curUser.username}</td>
                  <td className="px-6 py-4">{curUser.email}</td>
                  <td className="px-6 py-4">{curUser.phone}</td>
                  <td className="px-6 py-4">
                    <Link to={`/admin/users/${curUser._id}/edit`} className="text-blue-600 hover:underline">Edit</Link>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => deleteUser(curUser._id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
