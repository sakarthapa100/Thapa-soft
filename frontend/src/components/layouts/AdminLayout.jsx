import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { RiUserShared2Fill } from "react-icons/ri";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import './AdminLayout.css'



const AdminLayout = () => {
  return <>
  
  <header>
    <div className="container">
      <nav className='nav'>
        <ul>
          <li> <NavLink to="/admin/users"> <RiUserShared2Fill />

          users </NavLink> </li>
          <li> <NavLink to="/admin/contacts"> <RiContactsBook2Fill />
          contacts </NavLink> </li> 
          <li> <NavLink to="/admin/services"> <FaRegListAlt />
          services </NavLink>  </li>
          <li> <NavLink to="/admin/home"> <IoHomeSharp />
          home  </NavLink> </li>
        </ul>
      </nav>
    </div>
  </header>
  <Outlet />
  </>
}

export default AdminLayout