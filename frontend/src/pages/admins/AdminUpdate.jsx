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

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value


    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
const handleSubmit = async(e) => {
  e.preventDefault()
  try {
    
    const response = await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationToken ,
      },
      body:JSON.stringify(data)
    }

  ) 
  if(response.ok){
      alert("Updatted succesfully")
  }else{
    alert("Not updatee sucessfull")
  }
 
  } catch (error) {
    console.log(error)
  }
} 


  return (
    <section>
      <main>
        <div className="sectionupdate-data">
          <div className="data-content ">
            <h1 className="main-titleheading">Update User Data</h1>
          </div>
          <div className=" grid grid-two-cols">
            <section>
              <form onSubmit={handleSubmit }>
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