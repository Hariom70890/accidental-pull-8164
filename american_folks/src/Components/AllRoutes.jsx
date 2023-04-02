import React from "react";
import { FaSign } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import { Cart, CartItem } from "../Pages/Cart";
import Home from "../Pages/Home";
import Home1 from "../Pages/Home1";
import Home2 from "../Pages/Home2";
import LoginPage from "../Pages/LoginPage";
import SignIn from "../Pages/SignIn";
import Women from "../Pages/Women";
import Payment from "../Pages/Payment";

const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home1 />}></Route>
            <Route path="/american_folks" element={<Home1 />}></Route>
            <Route path="/vista" element={<Home2 />}></Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/paymentPage" element={<Payment/>}/>
            <Route path="/cartitem" element={<CartItem />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/women" element={<Women />} />
            <Route path="*" element={<h1> Page Not Found</h1>}></Route>
         </Routes>
      </div>
   );
};

export default AllRoutes;
