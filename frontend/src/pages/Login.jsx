
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {  toast } from 'react-toastify';



export const Login = () => {

const [user, setUser] = useState({
  email:"",
  password:""
})

const {storeTokenInLS} = useAuth()
const navigate = useNavigate()
/* //handeling inputs*/

const handleInput=(e) => {
console.log(e)
let name = e.target.name
let value = e.target.value

setUser({
  ...user,
  [name]:value,
})
}
/*//handel  login submit  */


const handleSubmit =async(e) => {
e.preventDefault()
console.log(user)
try {
  const response =await fetch(`http://localhost:3000/api/auth/login`, {
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(user)
})

console.log("login form",   response)

 const res_data = await response.json()
if(response.ok){
  // toast("Login sucessful")
 
  console.log("after login",res_data)
   /* //store the token in localhost*/ 
    
storeTokenInLS(res_data.token)
/*
setUser({
email:"",
    password:"",
})
    */
  toast.success("Login sucessful")
  navigate("/");
}
else{
  toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
  console.log("Invalide credentaials")
}} catch (error) {
  console.log("login error", error)
  alert("Login failed , please try again ")
}


}


return (
  <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            {/* our main registration code  */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
);
};