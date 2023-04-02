import { useEffect, useState } from "react";

import axios from "axios";
import ProductSummary from "../Components/ProductSummary";


const CartItem = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(
           `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cartData`
         )
         .then((res) => setData(res.data));
   }, []);
   console.log(data);
   return(

     <>
      <ProductSummary/>
      {/* <Payment/> */}

      </>
     )
  
};

export { CartItem };
