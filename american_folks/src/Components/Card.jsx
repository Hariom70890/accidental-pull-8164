// import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
import Buttonc from "./Button";




function Card({ imageUrl, name, price,det,handleClick }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center"  > 
      <Image src={imageUrl} alt={name} m=" 20px 40%"/>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="xl" fontWeight="semibold" mr="2">
            {name}
          </Text>
          <Text fontSize="lg" color="gray.600">
           $ {price}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {det}
          </Text>
          <br />
          <Buttonc bgcolr=" rgba(191,218,211,1)" text={"ShopNow"} handleClick={()=>handleClick()} />
        </Box>
      </Box>
    </Box>
  );
}

export default Card