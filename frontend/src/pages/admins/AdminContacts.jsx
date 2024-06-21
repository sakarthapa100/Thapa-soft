import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'


export const AdminContacts = () => {
const [ contactData , setContactData] = useState([])
  const { authorizationToken} = useAuth()
const getContactsData = async() => {
  try {
    
const response = await fetch(`http://localhost:3000/api/admin/contacts`, {
  method:"GET",
  headers:{
  
    Authorization: authorizationToken ,
  }
})
const data =  await response.json()
console.log("contact data ", data)
if(response.ok){
  setContactData(data)
}

  } catch (error) {
    console.log(error)
  }
}

const deleteContactById = async(id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`, {
      method:'DELETE',
      headers:{
        Authorization: authorizationToken,
      }
    })
    if(response.ok){
      getContactsData()
      alert("Deleted succesfully")
    }else{
      alert("Not deleted ")
    }

  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getContactsData()
},[])


  return (
    <>  

<section className='admin-contacts-section'>
<h1>Admin Contact Data</h1>

<div className="container admin-user">
  {contactData.map((currContactData, index)=> {
const { username, email , message , _id} = currContactData

      return (
      <div key={index}>
         <p >{username}</p>
         <p >{email}</p>
         <p >{message}</p>
         <button className='delete-btn' onClick={()=> deleteContactById(_id)}>delete</button>
         </div>
      
      )
    })}
</div>

</section>

     
    
      </>
   
  )
}
