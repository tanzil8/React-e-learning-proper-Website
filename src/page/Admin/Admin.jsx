import React, { useContext, useState } from 'react'
import { DashboardContext } from '../../context/Dashboard';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/utils';
import { UserContext } from '../../context/UserInfo';
import { ProductContext } from '../../context/ProductContext';
import Navbar from '../../componenet/Navbar3/Navbar3';

const Admin = () => {

    const [imgUrl , setImgrl] = useState()

    const [Namee , setName] = useState()

    const [Description , setDescription] = useState()

    const [price , setPrice] = useState()

    const [loading, setLoading] = useState(false)

    console.log(imgUrl);
    console.log(Namee);
    console.log(Description);
    console.log(price);
    

          
  const { dash } = useContext(DashboardContext); // Consume the context
  console.log(dash.length);

  const {UserInfo} = useContext(UserContext)
  console.log('UserInfo',UserInfo);
  
  const { product} = useContext(ProductContext);
  console.log('product',product);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


 async function HendlingSubmit() {
    
setLoading(true)

    try {
        const docRef = await addDoc(collection(db, "Product"), {
         ProductURL : imgUrl,
         ProductName : Namee,
         ProdductDetail : Description,
         Product : price
        });
        console.log("Document written with ID: ", docRef.id);
        alert('Upload product')
        setImgrl('')
        setName('')
        setDescription('')
        setPrice('')

      } catch (e) {
        console.error("Error adding document: ", e);
        setLoading(false)
      }

      setLoading(false)
      
    }
  
  return (

<>
<Navbar/>

<div className="bg-gray-100">
      <div className="flex overflow-hidden">
        {/* Sidebar */}
        <div
          className={`absolute bg-gray-800 text-white sm:w-96 w-52 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          id="sidebar"
        >
          {/* Sidebar Content */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Upload Product</h1>
            {/* Form */}
            <div className="min-h-screen p-6 bg-gray-800 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="img_url">Img URL</label>
                      <input
value={imgUrl}
onChange={(e)=>setImgrl(e.target.value)}
                        type="text"
                        name="img_url"
                        id="img_url"
                        placeholder="Img URL"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="product_name">Product Name</label>
                      <input
                      value={Namee}
                      onChange={(e)=>setName(e.target.value)}
                        type="text"
                        name="product_name"
                        id="product_name"
                        placeholder="Product Name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="message" className="block text-sm font-medium text-white">
                     Product Description
                      </label>
                      <textarea
                      value={Description}
                      onChange={(e)=>setDescription(e.target.value)}
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Product Description"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="price">Price</label>
                      <input
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                        type="text"
                        name="price"
                        id="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-gray-800"
                        placeholder="Price"
                      />
                    </div>

                    <div className="mt-7">
                      <button onClick={HendlingSubmit} className="bg-[#C] hover:bg-[#62fbfd] bg-[#56ddd0] text-white font-bold py-2 px-4 rounded">
                        {loading ? <div className="flex space-x-2 justify-center items-center bg-[#56ddd0] hover:bg-[#62fbfd]  dark:invert p-1">

<div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
<div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
<div className="h-2 w-2 bg-white rounded-full animate-bounce" />
</div> : 'Submit'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        
      </div>
    </div>



        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-white shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
              <Link to={'/'}> <h1 className="text-xl font-semibold">Home</h1></Link> 
                <button
                  className="text-gray-500 hover:text-black"
                  id="open-sidebar"
                  onClick={toggleSidebar} // Add this
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Content Body */}
        </div>
     
















    <div>
    {/* Top */}
    <div className="top mb-5 px-5 mt-5">
        <div className=" bg-gray-100 py-5 border border-gray-200 rounded-lg">
            <h1 className=" text-center text-2xl font-bold  text-[#2F327D]">Admin <span className='text-[#00CBB8]'> Dashboard </span></h1>
        </div>
    </div>

    <div className="px-5">
        {/* Mid  */}
        <div className="mid mb-5">
            {/* main  */}
            <div className=" bg-gray-100 py-5 rounded-xl border border-gray-200">
                {/* image  */}
                <div className="flex justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                </div>
                {/* text  */}
                   <div className="">
                    {/* Name  */}
                    <h1 className=" text-center text-lg">
                        <span className=" font-bold">Name : </span>
                   Tanzil
                    </h1>

                    {/* Email  */}
                    <h1 className=" text-center text-lg">
                        <span className=" font-bold">Email : </span>
                     admin@gmail.com
                    </h1>

                    {/* Date  */}
                    <h1 className=" text-center text-lg">
                        <span className=" font-bold">Date : </span>
                     { new Date().toLocaleDateString()}
                    </h1>

                    {/* Role  */}
                    <h1 className=" text-center text-lg">
                        <span className=" font-bold">Role : </span>
                      admin
                    </h1>
                </div>
            </div>
        </div>

        {/* Bottom */}
        <div className="">
          
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {/* Total Products */}
                    <Link className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer" to={'/TotalProduct'}>
                    <div >
                        <div className=" border bg-gray-100 hover:bg-gray-200 border-gray-200 px-4 py-3 rounded-xl" >
                            <div className=" text-[#2F327D] w-12 h-12 mb-3 inline-block" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={50}
                                    height={50}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shopping-basket"
                                >
                                    <path d="m5 11 4-7" />
                                    <path d="m19 11-4-7" />
                                    <path d="M2 11h20" />
                                    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                                    <path d="m9 11 1 9" />
                                    <path d="M4.5 15.5h15" />
                                    <path d="m15 11-1 9" />
                                </svg>

                            </div>
                            <h2 className="title-font font-medium text-3xl text-[#2F327D] fonts1" >{product.length}</h2>
                            <p className=" text-[#00CBB8]  font-bold" >Total Products</p>
                        </div>
                    </div>
                    </Link>

                    {/* Total Order  */}
                    <Link  className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer" to={'/TotalOrderUser'}>
                    <div >
                        <div className=" border bg-gray-100 hover:bg-gray-200 border-gray-200 px-4 py-3 rounded-xl" >
                            <div className=" text-[#2F327D] w-12 h-12 mb-3 inline-block" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={50}
                                    height={50}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-list-ordered"
                                >
                                    <line x1={10} x2={21} y1={6} y2={6} />
                                    <line x1={10} x2={21} y1={12} y2={12} />
                                    <line x1={10} x2={21} y1={18} y2={18} />
                                    <path d="M4 6h1v4" />
                                    <path d="M4 10h2" />
                                    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                                </svg>
                            </div>
                            <h2 className="title-font font-medium text-3xl text-[#2F327D] fonts1" >{UserInfo.length}</h2>
                            <p className=" text-[#00CBB8]  font-bold" >Total Order</p>
                        </div>
                    </div>
                    </Link>
                    {/* Total User  */}
                    <Link className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer" to={'/UserLoginInfo'}>
                    <div>
                        <div className=" border bg-gray-100 hover:bg-gray-200 border-gray-200 px-4 py-3 rounded-xl" >
                            <div className=" text-[#2F327D] w-12 h-12 mb-3 inline-block" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={50}
                                    height={50}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-users"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>

                            </div>
                            <h2 className="title-font font-medium text-3xl text-[#2F327D] fonts1" >{dash.length}</h2>
                            <p className=" text-[#00CBB8]  font-bold" >Total User</p>
                        </div>
                    </div>
                    </Link>
              
              </div>
        </div>
    </div>
</div>
</>
  )
}

export default Admin 