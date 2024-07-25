import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

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
     <section className='bg-gray-800 mt-[4rem] '>
      <main className='bg-gray-800' >
<div className="section-registration bg-gray-800 ">
<div className="container grid grid-two-cols bg-gray-800 ">

  {/* //left side image  */}
<div className="registration-image bg-gray-800">

  <img src="/images/register.png" alt="Trying to fill registration" width="500" height="500" />
</div>

{/* //right side registration from  */}
<div className="registration-form bg-gray-800 ">
  <h1 className='text-blue-400 text-4xl font-bold mb-3'> Registration form</h1>
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
      className='p-2  '
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
      className='p-2'
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
      className='p-2'
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
      className='p-2'
      />
  </div>
<br />
<button type='submit' className='bg-blue-500 p-[0.7rem] rounded-lg '>Register Now</button>

</form>


</div>


</div>

</div>

      </main>
     </section>
      
    </>
  );
};


