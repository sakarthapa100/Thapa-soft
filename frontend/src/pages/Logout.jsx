import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Logout = () => {
  const { logoutUser } = useAuth(); // Ensure you use the correct function name

  useEffect(() => {
    logoutUser(); // Call the logout function
  }, [logoutUser]); // Make sure to include logoutUser in the dependency array

  return    <Navigate to="/Login" />;

};
