import { useEffect, useState } from "react";
import {
   Box,
   Button,
   Flex,
   IconButton,
   Image,
   Input,
   InputGroup,
   InputRightElement,
   Stack,
   Text,
   useToast,
} from "@chakra-ui/react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import ProductSummary from "../Components/ProductSummary";
import Payment from "./Payment";


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
