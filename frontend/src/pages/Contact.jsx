// import { useState } from "react";
// import { useAuth } from "../store/auth";

// // Remove this line:
// // import { AuthProvider } from "/src/store/auth.jsx";

// const defaultContactFormData = {
//   username: "",
//   email: "",
//   message: "",
// };

// // type UserAuth = boolean;
// export const Contact = () => {
//   const [contact, setContact] = useState(defaultContactFormData);
// const [userData, setUserData] = useState(true)
//   const { user } = useAuth();
// if(userData && user){
//   setContact({
//     username:user.username,
//     email:user.email,
//     message:"",
//   })
//   setUserData(false)
// }

//   const handleInput = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/api/form/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(contact),
//       });

//       console.log("response: ", response);
//       // alert(response);

//       if (response.ok) {
//         setContact(defaultContactFormData);
//         const responseData = await response.json();
//         alert(responseData);
//         console.log(responseData);
//       } else {
//         // Handle API error here
//         console.error("API Error:", response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return <>
//   <section>
//     <main>
//       < div className="section-contact">
//        <div className=" contact-content container ">
//         <h1 className="main-heading">Contact us</h1>
//         </div>
//         {/* image  */}
//         <div className="container grid grid-two-cols">
//         <div className="contact-img">
//           <img src="images/support.png" alt="picture of the contact"  width="400" height="400"/>
       
// </div>
// {/* contact form */}
// <section>
//   <form onSubmit={handleSubmit}>
// <div>
// <label htmlFor="username">username</label>
// <input type="text" name='username' id='username' autoComplete="off"value={contact.username} onChange={handleInput} required  />

// </div>
// <div>
// <label htmlFor="email">email</label>
// <input type="email" name='email' id='email' autoComplete="off"value={contact.email} onChange={handleInput} required  />

// </div>
// <div>
// <label htmlFor="message">message</label>
// <textarea type="text" name='message' id='message' autoComplete="off" value={contact.message} onChange={handleInput} required   cols='30' rows='6' />

// </div>

// <div>
//   <button type="submit"> submit </button>
// </div>

//   </form>
// </section>

        

//          </div>
//       </div>
//     </main>
//   </section>
  
//    </>
// }

import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import './Contact.css'
const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
  
      const responseData = await response.json();
      if (response.ok) {
        setContact(defaultContactFormData);
        alert(responseData.message || "Form submitted successfully!");
      } else {
        console.error("API Error:", response.status, response.statusText, responseData);
        alert(responseData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("A network error occurred. Please check your connection and try again.");
    }
  };

  return (
    <section>
      <main>
        <div className="section-contact">
          <div className="contact-content container">
            <h1 className="main-heading">Contact us</h1>
          </div>
          <div className="container grid grid-two-cols">
            <div className="contact-img">
              <img src="images/support.png" alt="picture of the contact" width="400" height="400" />
            </div>
            <section>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                    cols="30"
                    rows="6"
                  />
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};
