import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  console.log("Params single users", params);
  const { authorizationToken } = useAuth(); // Call useAuth inside the component

  const getSingleUserData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        }
      });
      const data = await response.json();
      console.log(`users single data: ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Updated successfully");
      } else {
        alert("Update not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex justify-center items-center min-h-screen bg-gray-700'>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-500  ">Update User Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring 
              bg-transparent
              focus:border-blue-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              required
              className="w-full px-3 py-2 border rounded-lg bg-transparent   focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
              required
              className="w-full px-3 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};
