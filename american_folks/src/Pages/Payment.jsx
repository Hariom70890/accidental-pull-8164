import React, { useState, useEffect } from "react";
import {
   Button,
   Heading,
   Grid,
   GridItem,
   List,
   Box,
   ListItem,
   FormControl,
   FormLabel,
   Input,
   VStack,
   Image,
   Text,
   Link,
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
   Modal,
   Flex,
   Center,
} from "@chakra-ui/react";
import { ChevronUpIcon, StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import Adress from "../Components/Adress";

const Payment = () => {
   const [error, setError] = useState("");
   const [showAlert, setShowAlert] = useState(false);
   const [payAlert, setPayAlert] = useState(false);
   const [name, setName] = useState("");
   const [cardNumber, setCardNumber] = useState("");
   const [expiry, setExpiry] = useState("");
   const [cvv, setCvv] = useState("");
   const [cardPay, setcardPay] = useState(false);
   const [addr, setAddr] = useState(false);

   const [cartData, setCartData] = useState([]);
   const totalPrice = cartData.reduce(
      (acc, product) => acc + product.data.price,
      0
   );

   const Card = () => {
      axios
         .get(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cartData`
         )
         .then((res) => {
            console.log(res.data);
            setCartData(res.data);
         });
   };
   useEffect(() => {
      Card();
   }, []);

   const paydone = (event) => {
      event.preventDefault();

      setPayAlert(true);
      console.log(1234);
      setCardNumber("");
      setName("");
      setCvv("");
      setExpiry("");

      setTimeout(() => {
         setPayAlert(false);
      }, 10000);
   };
   const handleSubmit = () => {
    //   setShowAlert(true);
   
      setTimeout(() => {
        setcardPay(true)
      }, 2000);
    alert("adrres")
    
   };
   console.log(cartData);

   return (
      <>
         <Box border="1px solid gray" p="10%" bgColor="rgba(191,258,211,5)" width="100%">
            <Heading size="lg" mb={4}>
               Order Summary
            </Heading>
            <List spacing={3}>
               <ListItem gridColumn={4}>
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                     {cartData?.map((e) => {
                        return (
                           <Box>
                              <Image src={e.data.imageAddress} />
                              <Heading>{e.data.name}</Heading>
                              <Text>Price : $ {e.data.price}</Text>
                              <Text>
                                 Ratings: {e.data.rating} <StarIcon />
                              </Text>
                              <Text>Reviews : {e.data.price * 700}</Text>
                              <Text>{e.data.description}</Text>
                           </Box>
                        );
                     })}
                  </Grid>
                  <Box>
                     <Text>{cartData.length}</Text>

                     <Text fontWeight="bold">Total Price</Text>
                     <Text>${totalPrice}</Text>
                  </Box>
               </ListItem>
            </List>
            <Center>
                <Button bgColor="red.200" color={"blue"}  onClick={()=>setAddr(true)} >Buy the Items </Button>
            </Center>
         </Box>
         {
            addr ?
         <Adress handleSubmit={handleSubmit} error={error} /> :
         ""
         }
      
         <GridItem colStart={4} colEnd={10}>
            {payAlert && (
               <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
               >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                     Thank You <smile />
                  </AlertTitle>
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                     Payment is done
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                     Incase of return product your 90 % of payment will be
                     refuned
                  </AlertDescription>
                  <AlertDescription maxWidth="sm">
                     Thank you for Shoping
                  </AlertDescription>
               </Alert>
            )}
            <form onSubmit={paydone}>
               {error && (
                  <div className="alert alert-danger" role="alert">
                     {error}
                  </div>
               )}
               {
                cardPay ? 
               

               <Box border="1px solid gray" p={4} bgColor="rgba(191,218,211,1)" mt={"50px"} pt={"20px"} margin={"auto"} boxSize={500}>
                  <Heading size="md" mb={4}>
                     Payment Details
                  </Heading>
                  <FormControl id="name" isRequired mb={4}>
                     <FormLabel>Name on Card</FormLabel>
                     <Input type="text" />
                  </FormControl>
                  <FormControl id="cardNumber" isRequired mb={4}>
                     <FormLabel>Card Number</FormLabel>
                     <Input type="Number" />
                  </FormControl>
                  <Grid templateColumns="repeat(12, 1fr)" gap={4}>
                     <GridItem colSpan={4}>
                        <FormControl id="expiry" isRequired mb={4}>
                           <FormLabel isRequired>Expiry</FormLabel>
                           <Input type="text" />
                        </FormControl>
                     </GridItem>
                     <GridItem colSpan={4}>
                        <FormControl id="cvc" isRequired mb={4}>
                           <FormLabel>CVC</FormLabel>
                           <Input type="text" />
                        </FormControl>
                     </GridItem>
                  </Grid>
                  <Box bgSize="200">
                     <Text>{cartData.length}</Text>

                     <Text fontWeight="bold">Total Price</Text>
                     <Text>${totalPrice}</Text>
                     <Button type="submit" colorScheme="blue" mt={4}>
                        Submit Payment
                     </Button>
                  </Box>

                 
               </Box>
               

                : <Box>
                    <Heading textAlign={"center"}>Please Fill the Address</Heading>
                </Box>}
            </form>
         </GridItem>
      </>
   );
};

export default Payment;
