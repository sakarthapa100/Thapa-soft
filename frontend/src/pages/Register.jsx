import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import './Register.css'
export const Register = () => {

  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()


//handeling the input values
const handleInput= (e) => {
  console.log(e)
  let name = e.target.name;
  let value = e.target.value

  setUser({
    ...user,
    [name]:value,
  })
}
//handing the form subbmition
const handleSubmit= async(e) => {
  e.preventDefault()
  console.log(user)
try {
  const response =  await fetch(`http://localhost:3000/api/auth/register`, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(user),
  })
  const res_data = await response.json()
  console.log("this is response from server",res_data)

if(response.ok){


  //store the token in localhost
  storeTokenInLS(res_data.token)


  setUser({username:"",
  email:"",
  phone:"",
  password:""})
  toast.success("Registration sucessful")
  navigate("/login")
}else{
  toast(res_data.extraDetails ? res_data.extraDetails : res_data.message)
}

  console.log(response)
  }catch (error) {
  console.log("register errror", error)
} 

  
}

  return (
    <>
     <section>
      <main>
<div className="section-registration">
<div className="container grid grid-two-cols">

  {/* //left side image  */}
<div className="registration-image">

  <img src="/images/register.png" alt="Trying to fill registration" width="500" height="500" />
</div>

{/* //right side registration from  */}
<div className="registration-form">
  <h1 className='main-heading mb-3'> Registration form</h1>
  <br />
<form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="username">username</label>
    <input type="text " 
    name="username" 
    placeholder='username'
     id="username"
      required 
      autoComplete='off'
      value={user.username}
      onChange={handleInput}
      />
  </div>
  <div>
    <label htmlFor="email">email</label>
    <input type="email" 
    name="email"
    placeholder='email'
     id="email"
      required 
      autoComplete='off' 
      value={user.email}
      onChange={handleInput}
      />
  </div>



  <div>
    <label htmlFor="phone">phone</label>
    <input type="number" 
    name="phone"
    placeholder=' Enter your phone number'
     id="phone"
      required 
      autoComplete='off' 
      value={user.phone}
      onChange={handleInput}
      
      />
  </div>

  <div>
    <label htmlFor="password">password</label>
    <input type="password" 
    name="password"
    placeholder=' Enter your password'
     id="password"
      required 
      autoComplete='off' 
      value={user.password}
      onChange={handleInput}
      />
  </div>
<br />
<button type='submit' className='btn-submit'>Register Now</button>

</form>


</div>


</div>

</div>

      </main>
     </section>
      
    </>
  );
};


