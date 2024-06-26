import React, { useEffect,useState } from 'react'
import { useAuth } from '../../store/auth'
import { Link } from 'react-router-dom'
import './AdminUsers.css'

 export const AdminUsers = () => {
  const [ users, setUsers ] = useState([])
  const { authorizationToken } = useAuth() // Call useAuth inside the component

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken 
        }
      })
      const data = await response.json() 
      console.log(`users ${data}`) 
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteUser =async(id) => {
    try {
         const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationToken ,
      }
    })
    const data = await response.json()
    console.log(`users after delete :${data}`)
      
    getAllUsersData()
    } catch (error) {
      console.log(error)
    }
 
  }

  useEffect(() => {
    getAllUsersData()
  }, [])

  return <>
  <section className='admin-users-section'>
<div className="containers">
  <h1>Admin Users Data</h1>
</div>
<div className=' admin-users'>

  <table>
    <thead>
         <tr>
      <td>Name</td>
      <td>Email</td>
      <td>Phone</td>
      <td>Update</td>
      <td>Delete</td>
    </tr>
    </thead>
 
<tbody>
{users.map((curUser, index)=>{
    return <tr key={index}>
      <td>{curUser.username} </td>
      <td>{curUser.email} </td>
      <td>{curUser.phone} </td>
      <td>  <Link to={`/admin/users/${curUser._id}/edit`}> Edit  </Link> </td>
      <td>  <button onClick={() => deleteUser(curUser._id)}>  Delete </button> </td>
    
    </tr>
  })}
</tbody>
  </table>

  </div>
  </section>
  </>
  
}
