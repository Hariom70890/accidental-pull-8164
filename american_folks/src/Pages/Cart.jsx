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
  useToast
} from "@chakra-ui/react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

// const item = {
//     "id": 1,
//     "name": "Sleeveless Midi Dress",
//     "price":  59.99,
//     "description": "A stylish and comfortable midi dress perfect for any occasion.",
//     "imageAddress": "https://images.pexels.com/photos/14240604/pexels-photo-14240604.jpeg?auto=compress&cs=tinysrgb&w=200",
//     "rating": 4.5,
//     "category": "Dresses",
//     "quantity":1,
//     "size": [
//       "XS",
//       "S",
//       "M",
//       "L",
//       "XL"
//     ],
// }
const CartItem = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/cartData`)
       .then((res)=>setData(res.data))
    },[])
    console.log(data)
//  return(

     {
         data.map((e)=>{
             return(
                 
                 <Flex py={2}>
      <Box>
        <Image src={e.data.imageAddress} alt={e.data.name} h={20} w={20} objectFit="contain" />
      </Box>
      <Box flex="1" ml={4}>
        <Text fontWeight="bold" fontSize="md">{e.data.name}</Text>
        <Text fontSize="sm" color="gray.500">{e.data.description}</Text>
        <Flex mt={2} align="center">
          <IconButton icon={<FaMinus />} size="sm"  />
          <Box mx={2} fontWeight="bold">{e.data.quantity}</Box>
          <IconButton icon={<FaPlus />} size="sm"  />
          <Button variant="ghost" ml="auto" ><FaTrash /></Button>
        </Flex>
      </Box>
      <Box fontWeight="bold" fontSize="lg" ml={4}>
        ${+e.data.price * e.data.quantity}
      </Box>
    </Flex>
)
})
}
// )
};


export {CartItem} 
