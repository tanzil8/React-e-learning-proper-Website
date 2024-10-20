import React, { useContext, useState } from 'react'
import imag1 from './image/Rectangle 77.png'
import { auth, db } from '../../utils/utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { DashboardContext } from '../../context/Dashboard'




const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [loading, setLoadding] = useState(false)
  const navigate = useNavigate()



  console.log(email);



  async function hendlingSignin() {

    setLoadding(true)
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);

     
      
      


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        setLoadding(false)


        // ..

        navigate('/')

      });
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,

        role: 'user'
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setLoadding(false)

  }

  return (
    <>
      <>

     
        {/* component */}
        <div className="bg-gray-100 flex justify-center items-center h-screen">
          {/* Left: Image */}
          <div className="w-1/2 h-screen hidden lg:block mt-28">
            <div className='flex justify-center items-center'>
              <img
                style={{ width: 550 }}
                src={imag1}
                alt="Placeholder Image"
                className=""
              />
            </div>
          </div>
          {/* Right: Login Form */}
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-3xl text-center font-bold mb-4">Signup</h1>

            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 font-semibold ml-2">
                User Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='User Email'
                type="email"
                id="username"
                name="username"
                className="w-full border border-[#49BBBD] rounded-3xl py-2 px-3 focus:outline-none focus:border-[#49BBBD]"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 font-semibold ml-2">
                User Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}

                placeholder='User Name'
                type="text"
                id="username"
                name="username"
                className="w-full border border-[#49BBBD] rounded-3xl py-2 px-3 focus:outline-none focus:border-[#49BBBD]"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 font-semibold ml-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Pasword'
                type="text"
                id="username"
                name="username"
                className="w-full border border-[#49BBBD] rounded-3xl py-2 px-3 focus:outline-none focus:border-[#49BBBD]"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* Forgot Password Link */}

            {/* Login Button */}
            <button

              onClick={hendlingSignin}
              type="submit"
              className="bg-[#49BBBD] hover:bg-[#52d2d4] text-white font-semibold rounded-3xl py-2 px-4 w-full"
            >
              {loading ? <div className="flex space-x-2 justify-center items-center bg-[#49BBBD] hover:bg-[#52d2d4]  dark:invert p-1">

                <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="h-4 w-4 bg-white rounded-full animate-bounce" />
              </div> : 'Sign up'}

            </button>

            {/* Sign up  Link */}
            <Link to={'/signin'}>  <div className="mt-6 text-blue-500 text-center">
              <a href="#" className="hover:underline">

                Login
              </a>
            </div></Link>
          </div>
        </div>
      </>

    </>
  )
}

export default Signup