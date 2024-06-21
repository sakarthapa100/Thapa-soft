import { useState, useEffect } from "react";
import { useAuth } from "../store/auth"; // Ensure this path is correct
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
          <div className="container grid grid-two-cols">
            <div className="contact-img">
              <img src="images/support.png" alt="picture of the contact" width="400" height="400" />
            </div>
            <section className="section-form">
              <div className="header">
                <h1>Contact Us</h1>
              </div>
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
