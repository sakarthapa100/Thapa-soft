import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "./pages/Home";
import { Contact} from './pages/Contact'
import { About} from './pages/About'
import { Login} from './pages/Login'
import { Logout } from "./pages/Logout";
import { Register} from './pages/Register'
import { Service } from "./pages/Service";
import Navbar from "./components/Navbar";
import AdminLayout from "./components/layouts/AdminLayout";
import { AdminUsers } from "./pages/admins/AdminUsers";
import { AdminContacts } from "./pages/admins/AdminContacts";
import { AdminUpdate } from "./pages/admins/AdminUpdate";
import 'bootstrap/dist/css/bootstrap.min.css';





const App = ()=>{
  return <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
       
        <Route path="/admin" element={<AdminLayout />}>
      
<Route path="users" element={<AdminUsers />}/>
<Route path="contacts" element={<AdminContacts />}/>
<Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
  </Routes>
  
  </BrowserRouter>

  
  </>
}

export default App