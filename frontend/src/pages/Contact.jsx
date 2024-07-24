import { useState, useEffect } from "react";
import { useAuth } from "../store/auth"; // Ensure this path is correct

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
    <section className="flex justify-center items-center min-h-screen bg-gray-800 py-16 mt-[53rem] ">
      <main className="container mx-auto">
        <div className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center items-center">
              <img src="images/support.png" alt="Contact us" className="max-w-full h-auto rounded-lg" />
            </div>
            <section className="flex flex-col justify-center">
              <div className="mb-8 text-center">
                <h1 className="text-white text-4xl font-bold">Contact Us</h1>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="username" className="block mb-2 text-white capitalize">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                    required
                    className="p-2 bg-gray-800 border border-gray-600 rounded text-white w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-white capitalize">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInput}
                    required
                    className="p-2 bg-gray-800 border border-gray-600 rounded text-white w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-white capitalize">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    required
                    cols="30"
                    rows="6"
                    className="p-2 bg-gray-800 border border-gray-600 rounded text-white w-full resize-vertical"
                  />
                </div>
                <div>
                  <button type="submit" className="p-4 bg-blue-500 rounded text-white w-full hover:bg-blue-600 transition-colors duration-300">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
};
