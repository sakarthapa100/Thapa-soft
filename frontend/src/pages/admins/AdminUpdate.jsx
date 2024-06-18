import React, { useEffect, useState } from 'react';
import './AdminUpdate.css';  // Create this CSS file and link it here
import { useParams } from 'react-router-dom';
import { useAuth } from '../../store/auth';

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const params = useParams();
  console.log("Params single users",params);
  const { authorizationToken } = useAuth() // Call useAuth inside the component

  const getSingleUserData =async(id) => {
    try {
         const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken ,
      }
    })
    const data = await response.json()
    console.log(`users sigle data :${data}`)
      setData(data)
    // getAllUsersData()
    } catch (error) {
      console.log(error)
    }
 
  }



useEffect(()=>{
  getSingleUserData()
}, [])

  return (
    <section>
      <main>
        <div className="section-data">
          <div className="data-content container">
            <h1 className="main-heading">Update User Data</h1>
          </div>
          <div className="container grid grid-two-cols">
            <section>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={data.username}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={data.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={data.phone}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};
