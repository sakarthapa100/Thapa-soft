import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import Service from "./pages/Service";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import AdminLayout from "./components/layouts/AdminLayout";
import { AdminUsers } from "./pages/admins/AdminUsers";
import { AdminContacts } from "./pages/admins/AdminContacts";
import { AdminUpdate } from "./pages/admins/AdminUpdate";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
