import React, { useContext, useState } from 'react';
import imag1 from './image/Group 231.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../utils/utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DashboardContext } from '../../context/Dashboard';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dash } = useContext(DashboardContext); // Consume the context
  console.log(dash.length);
  

  const handleSignin = async () => {
    setLoading(true); // Set loading to true when sign-in starts

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // After sign-in, check the role of the user in the 'dash' context
      const matchedUser = dash.find((u) => u.email === user.email); // Assuming you store user data by email in dash

      if (matchedUser && matchedUser.role === 'admin') {
        navigate('/Admin')
      } else if (matchedUser && matchedUser.role === 'user') {
        navigate('/'); // Redirect if user is not an admin
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign-in failed. Please check your credentials.');
    } finally {
      setLoading(false); // Set loading to false once the process completes
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block mt-28">
          <div className="flex justify-center items-center">
            <img style={{ width: 550 }} src={imag1} alt="Placeholder Image" />
          </div>
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-3xl text-center font-bold mb-4">Login</h1>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold ml-2">
              User Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="User Email"
              type="email"
              id="email"
              name="email"
              className="w-full border border-[#49BBBD] rounded-3xl py-2 px-3 focus:outline-none focus:border-[#49BBBD]"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold ml-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="w-full border border-[#49BBBD] rounded-3xl py-2 px-3 focus:outline-none focus:border-[#49BBBD]"
              autoComplete="off"
            />
          </div>

          <button
            onClick={handleSignin}
            type="submit"
            className="bg-[#49BBBD] hover:bg-[#52d2d4] text-white font-semibold rounded-3xl py-2 px-4 w-full"
          >
            {loading ? (
              <div className="flex space-x-2 justify-center items-center">
                <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-4 w-4 bg-white rounded-full animate-bounce" />
              </div>
            ) : (
              'Sign in'
            )}
          </button>

          <Link to="/signup">
            <div className="mt-6 text-blue-500 text-center">
              <span className="hover:underline">SignUp</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signin;
