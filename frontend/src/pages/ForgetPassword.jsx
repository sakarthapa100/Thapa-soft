import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css'

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/auth/forgetPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset email sent. Please check your inbox.");
        navigate("/login");
      } else {
        toast.error(data.message || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Forget password error", error);
      toast.error("An error occurred. Please try again.");
    }
  }

  return (
    <section className='mt-[3rem] bg-gray-800'>
      <main>
        <div className="section-registration bg-gray-800">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img bg-gray-800">
              <img
                src="/images/forgot-password.png"
                alt="Forgot password illustration"
                width="400"
                height="500"
              />
            </div>
            <div className="registration-form bg-gray-800">
              <h1 className="main-heading mb-3 text-blue-500">Forgot Password</h1>
       
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className='p-2 w-full bg-gray-700 text-white rounded'
                    onChange={handleInput}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn-submit bg-blue-500 hover:bg-blue-600 transition duration-300">
                  Send Reset Link
                </button>
              </form>
              <div className="mt-4">
                <a href="/login" className="text-blue-400 hover:underline">Back to Login</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ForgetPassword;