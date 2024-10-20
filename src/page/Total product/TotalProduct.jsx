import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import Navbar from '../../componenet/Navbar3/Navbar3';


const TotalProduct = () => {

    const { product} = useContext(ProductContext);
    console.log('product',product);
  return (
   <>
   <Navbar/>
   <div className='p-4'>
    {product.map((data)=>{
        return(
            <>
            <div className="max-w-2xl mx-auto mt-24 ">
  <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
    <div className="relative w-32 h-32 flex-shrink-0">
      <img
        className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
        loading="lazy"
        src={data.ProductURL}
      />
    </div>
    <div className="flex flex-col gap-2 py-2">
      <p className="text-xl font-bold">{data.ProductName}</p>
      <p className="text-gray-500">
       {data.ProdductDetail}
      </p>
      
    </div>
  </div>
</div>
            </>
        )
    })}





</div>

   </>
  )
}

export default TotalProduct