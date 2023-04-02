import React from 'react'
import {
    Button,
    Heading,
    Grid,
    GridItem,
    Box,
    FormControl,
    FormLabel,
    Input,
    
 } from "@chakra-ui/react";
const Adress = ({handleSubmit,error}) => {
  return (
    <div>
    <form onSubmit={(e)=>{
    e.preventDefault();
     handleSubmit();
    }
    }>
{error && (
   <div className="alert alert-danger" role="alert">
      {error}
   </div>
)}
<Box border="1px solid gray" p={4} bgColor="rgba(191,218,211,1)" w="80%" m="auto">
   <Heading size="md" mb={4}>
      ADD YOUR ADDRESS
   </Heading>
   <Button bgColor="green.100">
      Use my current location
   </Button>
   <FormControl id="name" isRequired mb={4}>
      <FormLabel>Name </FormLabel>
      <Input placeholder="Enter your full name" type="text" />
   </FormControl>
   <FormControl id="Number" isRequired mb={4}>
      <FormLabel>Card Number</FormLabel>
      <Input type="Number" placeholder="10-digits number" />
   </FormControl>
   <FormControl id="pincode" isRequired mb={4}>
      <FormLabel>Pincode</FormLabel>
      <Input type="Number" placeholder="Pincode" />
   </FormControl>
   <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={4}>
         <FormControl id="locality" isRequired mb={4}>
            <FormLabel>Locality</FormLabel>
            <Input type="text" placeholder="Locality" />
         </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
         <FormControl id="Address" isRequired mb={4}>
            <FormLabel>Address(Area and Street)</FormLabel>
            <Input type="text" placeholder="Address" />
         </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
         <FormControl id="city" isRequired mb={4}>
            <FormLabel>City / District / Town</FormLabel>
            <Input type="text" placeholder="City" />
         </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
         <FormControl id="state" isRequired mb={4}>
            <FormLabel>State</FormLabel>
            <Input type="text" placeholder="State Name" />
         </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
         <FormControl id="type" isRequired mb={4}>
            <FormLabel>Address Type</FormLabel>
            <Input type="text" />
         </FormControl>
      </GridItem>
   </Grid>
   <Button type="submit" colorScheme="red" mt={4}>
      SAVE AND DELIVER HERE
   </Button>
</Box>
</form>
    </div>
  )
}

export default Adress