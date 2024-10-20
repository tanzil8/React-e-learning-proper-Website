import React from 'react'
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './page/Home/Home';
import Signup from './page/signup/signup';
import Signin from './page/signin/signin';
import Admin from './page/Admin/Admin';
import Navbar from './componenet/navbar/Navbar';
import Product from './page/projuct/projuct';
import NotFound from './page/notFound/NotFound';
import Cart from './page/cart/Cart';
import UserDetail from './page/UserDetail/UserDetail';
import TotalProduct from './page/Total product/TotalProduct';

import TotalOrderUser from './page/totalOrder/TotalOrderUser';
import UserLoginInfo from './page/UserLodingInfo/UserLoginInfo';
import Footer from './componenet/Footer/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/UserDetail' element={<UserDetail/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/TotalProduct' element={<TotalProduct/>}/>
        <Route path='/TotalOrderUser' element={<TotalOrderUser/>}/>
        <Route path='/UserLoginInfo' element={<UserLoginInfo/>}/>
   

        


    </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App