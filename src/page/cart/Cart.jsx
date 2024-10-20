import React, { useContext } from 'react'

import Navbar from '../../componenet/navbar2/Navbar2'
import { CardContext } from '../../context/AddToCart';
import Footer from '../../componenet/Footer/Footer';
import { DashboardContext } from '../../context/Dashboard';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { user1, removeItemToCart, addItemToCart,MinusItemToCart } = useContext(CardContext);

    const { user } = useContext(AuthContext); // Consume the context
    console.log('user', user.isLogin);

    // Total amount calculation (assuming Product is a price)
    const Total = user1.reduce((a, c) => {
      return a + (c.quantity * c.Product); // Correctly multiplying quantity with the product price
    }, 0);
    
    // Total quantity calculation
    const TotalQuantity = user1.reduce((a, c) => {
      return a + c.quantity; // Returning updated accumulator value
    }, 0);
    
    console.log('TotalQuantity', TotalQuantity);
    console.log('Total Amount', Total); // Optional: log the total amount
       
function heandlingSignin() {
alert('plzz Signup')
}


  return (
   <>
   <Navbar/>
   <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
      Shopping Cart
    </h2>
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
           
          </div>
          
          {user1.map((data, index) => {

        console.log('data',data.quantity);
        
        return(
         
          <div   key={index}  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" className="w-20 shrink-0 md:order-1">
                <img
                  className="h-20 w-20 dark:hidden"
                  src={data.ProductURL}
                  alt="imac image"
                />
                <img
                  className="hidden h-20 w-20 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                  alt="imac image"
                />       
              </a>
              <label htmlFor="counter-input" className="sr-only">
               {data.ProdductDetail}
              </label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button
                  disabled={data.quantity == 1}
               onClick={()=>MinusItemToCart(data.id)}
                    type="button"
                    id="decrement-button-5"
                    data-input-counter-decrement="counter-input-5"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
<h1    className= "w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{data.quantity}</h1>
                  <button
                     onClick={()=>addItemToCart(data)}
                    type="button"
                    id="increment-button-5"
                    data-input-counter-increment="counter-input-5"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {data.Product}
                  </p>
                </div>
              </div>
              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  APPLE iPhone 15 5G phone, 256GB, Gold
                </a>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to Favorites
                  </button>
                  <button 
                  onClick={()=> removeItemToCart(data.id       )}
                    type="button"
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    <svg
                      className="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
            })}
        </div>
       
      </div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
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
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {Total}
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Total Quantity
                </dt>
                <dd className="text-base font-medium text-green-600">
                {TotalQuantity}
                </dd>
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

            {user.isLogin? <Link to={'/UserDetail'}> <a
              href="#"
              title=""
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 underline hover:no-underline dark:text-primary-500 bg-[#6bdbdd] p-3 rounded-3xl text-white"
            >
              Buy Now
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
            </a> </Link> : <a
            onClick={heandlingSignin}
              href="#"
              title=""
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 underline hover:no-underline dark:text-primary-500 bg-[#6bdbdd] p-3 rounded-3xl text-white"
            >
              Buy Now
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
            </a>   }
           
           
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
<Footer/>
   </>
  )
}

export default Cart