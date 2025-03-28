import { useContext, useState } from "react";
import "./back.css";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.init";  // Ensure this is correctly imported
import { AuthContext } from "./AuthProvider";  // Ensure this is properly set up

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);  // Get setUser from context

  const auth = getAuth(app);  // Get auth instance

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log("Login successful");
        setUser(loggedInUser);  // Save user in context
        navigate("/");  // Redirect after login (change if needed)
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200 bg-custom p-4">
      <NavLink to={'/'} className="absolute top-8 left-16 btn">Back to Home</NavLink>
      <div className="w-96 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Login Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
          <div className="flex justify-between items-center text-white mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-pink-100 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 rounded-full hover:bg-opacity-80 transition-all">
            Log In
          </button>
          <p className="text-white text-center mt-4">
            Don't have an account? <NavLink to={"/register"} className="text-pink-100 hover:underline">Register</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
