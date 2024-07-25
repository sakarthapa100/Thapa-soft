import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiUserShared2Fill, RiContactsBook2Fill } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const AdminLayout = () => {
  return (
    <>
      <header className="bg-gray-800 text-white py-4 mt-16 ">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/admin/users" className="flex items-center space-x-2 hover:text-gray-400">
                  <RiUserShared2Fill />
                  <span>Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="flex items-center space-x-2 hover:text-gray-400">
                  <RiContactsBook2Fill />
                  <span>Contacts</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services" className="flex items-center space-x-2 hover:text-gray-400">
                  <FaRegListAlt />
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/home" className="flex items-center space-x-2 hover:text-gray-400">
                  <IoHomeSharp />
                  <span>Home</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
