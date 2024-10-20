import React, { useContext, useState } from 'react';
import Navbar from '../../componenet/navbar2/Navbar2';
import { CardContext } from '../../context/AddToCart';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/utils';

const UserDetail = () => {

  const { user1 } = useContext(CardContext);

  const [Namee,  setNamee] = useState()
  const [PhoneNum,  setPhoneNum] = useState()
  const [Building,  setBuilding] = useState()
  const [Colony,  setColony] = useState()
  const [City,  setCity] = useState()
  const [Area,  setArea] = useState()
  const [Address,  setAddress] = useState()
  const [Loading, setLoading] = useState(false)

    // Total amount calculation (assuming Product is a price)
    const Total = user1.reduce((a, c) => {
      return a + (c.quantity * c.Product); // Correctly multiplying quantity with the product price
    }, 0);
    
    // Total quantity calculation
    const TotalQuantity = user1.reduce((a, c) => {
      return a + c.quantity; // Returning updated accumulator value
    }, 0);


   async function hendlingBuyNow() {
      

      try {
        const docRef = await addDoc(collection(db, "buyNowInfo"), {
          Namee: Namee,
          PhoneNum: PhoneNum,
          Building: Building,
          Colony: Colony,
          City: City,
          Area: Area,
          Address: Address


        });
        console.log("Document written with ID: ", docRef.id);
        alert('Order plase')
        setNamee('')
        setAddress('')
        setArea('')
        setColony('')
        setCity('')
        setBuilding('')
        setPhoneNum('')

      } catch (e) {
        console.error("Error adding document: ", e);
      }
      


    }
    
    console.log('TotalQuantity', TotalQuantity);
    console.log('Total Amount', Total); // Optional: log the total amount
       




  return (
    <>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center mt-32 gap-10 sm:gap-5 p-4">
        <div className="w-full md:w-auto flex flex-wrap justify-center gap-10">
          <div className="relative z-0 w-full md:w-96 mb-5 group">
            <input
            value={Namee}
            onChange={(e)=> setNamee(e.target.value)}
              type='text'
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full md:w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Full Name
            </label>
          </div>
          <div className="relative z-0 w-full md:w-96 mb-5 group">
            <input
                 value={PhoneNum}
                 onChange={(e)=> setPhoneNum(e.target.value)}
              type="number"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full md:w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            Phone number
            </label>
          </div>
          <div className="relative z-0 w-full md:w-96 mb-5 group">
            <input
                 value={Building}
                 onChange={(e)=> setBuilding(e.target.value)}
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full md:w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
         Building / House No           
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
            <div className="relative z-0 w-full md:w-44 mb-5 group">
              <input
                   value={Colony}
                   onChange={(e)=> setColony(e.target.value)}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full md:w-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
           Colony 
              </label>
            </div>
            <div className="relative z-0 w-full md:w-44 mb-5 group">
              <input
                   value={City}
                   onChange={(e)=> setCity(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full md:w-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               City
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
            <div className="relative z-0 w-full md:w-44 mb-5 group">
              <input
                   value={Area}
                   onChange={(e)=> setArea(e.target.value)}
                type="text"
               
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full md:w-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Area
              </label>
            </div>
            <div className="relative z-0 w-full md:w-44 mb-5 group">
              <input
                   value={Address}
                   onChange={(e)=> setAddress(e.target.value)}
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full md:w-44 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
               Address
              </label>
            </div>
          </div>
     


          <div className="w-full md:w-auto">
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Order summary
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Total Price
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">{Total}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Total Quantity
                  </dt>
                  <dd className="text-base font-medium text-green-600">{TotalQuantity}</dd>
                </dl>
              </div>
            </div>
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Proceed to Checkout
            </a>
            <div className="flex items-center justify-center gap-2">
              <button
              onClick={hendlingBuyNow}
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 underline hover:no-underline dark:text-primary-500 bg-[#6bdbdd] p-3 rounded-3xl text-white"
              >
               {Loading?  <div className="flex space-x-2 justify-center items-center bg-[#49BBBD] hover:bg-[#52d2d4]  dark:invert p-1">

<div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
<div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
<div className="h-2 w-2 bg-white rounded-full animate-bounce" />
</div>: 'Buy Now'}
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>



        </div>

      
      </div>
    </>
  );
};

export default UserDetail;
