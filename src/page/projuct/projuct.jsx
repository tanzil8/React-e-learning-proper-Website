import React, { useContext } from 'react';

import img1 from './image/Group 274.png';
import img2 from './image/Group 275.png';
import img3 from './image/Group 276.png';
import Navbar from '../../componenet/navbar2/Navbar2';
import img4 from './image/1.png'
import img5 from './image/2.png'
import img6 from './image/3.png'
import img7 from './image/4.png'
import img8 from './image/5.png'
import img9 from './image/6.png'
import img10 from './image/7.png'
import { ProductContext } from '../../context/ProductContext';
import { CardContext } from '../../context/AddToCart';

const Product = () => {
  const { product} = useContext(ProductContext);
  console.log('product',product);

  const {user1,addItemToCart,ItemAdded } = useContext(CardContext)
                             
console.log('user1', user1);

  return (
    <>
      <Navbar />
      <div className='w-full min-h-96 bg-[#e2eeee] flex items-center flex-col justify-center py-8'>
        <div className='flex flex-col items-center sm:flex-row justify-between w-4/5 mb-4'>
          <div>
            <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left text-[#2F327D]'>
              Welcome back, ready for your next lesson?
            </h1>
          </div>
          <div>
            <p className='text-sm sm:text-base text-[#2b9a9c] cursor-pointer mt-2 sm:mt-0 font-bold text-1xl'>
              View history
            </p>
          </div>
        </div>
        <div className='w-4/5 flex justify-center flex-wrap gap-4'>
          <img src={img1} alt="Lesson 1" className='w-56 sm:w-96'/>
          <img src={img2} alt="Lesson 2" className='w-56 sm:w-96'/>
          <img src={img3} alt="Lesson 3" className='w-56 sm:w-96'/>
        </div>
      </div>

        <h1 className='text-2xl sm:text-3xl font-bold   text-[#2F327D] text-start mt-10 sm:ml-32 ml-8 mr-2  '>Choice favourite course from top category</h1>
      <div className='w-full min-h-96  flex items-center  justify-center  flex-wrap sm:gap-24 gap-9 pl-2 pr-2 py-8'>
        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#49BBBD4D] flex justify-center items-center'>
          <img src={img4} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#49BBBD4D] flex justify-center items-center'>
          <img src={img5} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#5B72EE4D] flex justify-center items-center'>
          <img src={img6} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#9DCCFF4D] flex justify-center items-center'>
          <img src={img10} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#00CBB84D] flex justify-center items-center'>
          <img src={img7} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#F48C064D] flex justify-center items-center'>
          <img src={img8} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#49BBBD4D] flex justify-center items-center'>
          <img src={img9} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>



        <div className='h-64 w-60 bg-white shadow-2xl rounded-2xl p-5 flex flex-col items-center justify-center  gap-4'>
          <div className='w-12 h-12 bg-[#49BBBD4D] flex justify-center items-center'>
          <img src={img10} alt="" className='w-6'/>
          </div>
          <h1 className='text-xl font-bold text-center'>Design</h1>
          <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
        </div>





      </div>



      <div className='w-full min-h-96 bg-[#e2eeee] flex items-center flex-col justify-center py-8'>
        <div className='flex flex-col items-center sm:flex-row justify-between w-4/5 mb-4'>
          <div>
            <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left text-[#2F327D]'>
              Welcome back, ready for your next lesson?
            </h1>
          </div>
          <div>
            <p className='text-sm sm:text-base text-[#2b9a9c] cursor-pointer mt-2 sm:mt-0 font-bold text-1xl'>
              View history
            </p>
          </div>
        </div>
        <div className='w-4/5 flex justify-center flex-wrap gap-4'>
      


        {product.map((data) => (
  <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      className="h-48 w-full object-cover object-center"
      src={data.ProductURL}
      alt="Product Image"
    />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-bold dark:text-white text-gray-900">
        {data.ProductName} {/* Product Name */}
      </h2>
      <p className="mb-2 text-sm dark:text-gray-300 text-gray-700 h-24">
        {data.ProdductDetail} {/* Product Description */}
      </p>
      <div className="flex items-center justify-between">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          ${data.Product} {/* Product Price */}
        </p>
        <button onClick={()=> addItemToCart(data)} className="p-2 pl-3 pr-3 bg-[#57e0e2] text-white hover:bg-[#81e9eb] font-bold rounded-3xl">
         {ItemAdded(data.id) ? `Add To Cart ${ItemAdded(data.id).quantity}` : `Add To Cart` }
        </button>
      </div>
    </div>
  </div>
))}

 

     
  







        </div>
      </div>



    </>
  );
}

export default Product;
