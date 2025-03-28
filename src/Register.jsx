import { useContext, useState } from "react";
import './back.css'
import { useNavigate, NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.init";
import { AuthContext } from "./AuthProvider";
const RegisterForm = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const {createNewUser, user, setUser} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("You must accept the terms and conditions to register.");
      return;
    }

  createNewUser(email, password)
  .then(
    (result) => {
        const user = result.user;
        console.log(user);
        navigate('/category/0');
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200 bg-custom p-4">
      <NavLink to={'/'} className="absolute top-8 left-16 btn">Back to Home</NavLink>
      <div className="w-96 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your name"
            />
          </div>
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative border-b-2 border-white mb-6">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white p-2 placeholder-white"
              placeholder="Enter your password"
            />
      
          </div>
          <div className="flex items-center text-white mb-6">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="mr-2"
            />
            <label>I accept the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-full hover:bg-opacity-80 transition-all">
            Register
          </button>
          <p className="text-white text-center mt-4">
            Already have an account? <NavLink to={"/login"} className="text-pink-100 hover:underline">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
