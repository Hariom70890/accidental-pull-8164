import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { FaCentercode } from "react-icons/fa";
import { DeleteIcon } from "@chakra-ui/icons";

const ProductSummary = () => {
   const [products, setProducts] = useState([]);
   const navigate = useNavigate();
   const totalPrice = products.reduce(
      (acc, product) => acc + product.data.price,
      0
   );

   const Cardf = () => {
      axios
         .get(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cartData`
         )
         .then((res) => {
            console.log(res.data);
            setProducts(res.data);
         });
   };
   useEffect(() => {
      Cardf();
   }, []);

   return (
      <Box>
         <Heading as="h2" size="lg" mb={6}>
            Cart Items
         </Heading>
         <Grid templateColumns="repeat(2, 80% 20%)">
            <Grid templateColumns="repeat(3, 1fr)">
               {products.map((product) => (
                  <Box key={product.data.id}>
                     <Card
                        imageUrl={product.data.imageAddress}
                        name={product.data.name}
                        price={product.data.price}
                     />
                     <DeleteIcon />
                     <Button
                        onClick={() => {
                           axios
                              .delete(
                                 `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cartData/${product.data.id}`
                              )
                              .then((res) => {
                                 setProducts(res.data);
                                 alert("Item deleted from cart.");
                              })
                              .catch((err) => {
                                 console.error(err);
                                 alert("Error deleting item from cart.");
                              });

                           // alert("product delete soon")
                        }}
                     >
                        Delete
                     </Button>
                  </Box>
               ))}
            </Grid>
            <Box box-shadow=" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
               <Text fontWeight="bold">Total Number of Items to buy</Text>

               <Text>{products.length}</Text>

               <Text fontWeight="bold">Total Price</Text>
               <Text>${totalPrice}</Text>
               <br />
               <Button
                  backgroundColor={"green"}
                  color={"whatsapp.100"}
                  onClick={() => {
                     navigate("/paymentPage");
                  }}
               >
                  Process to Payment
               </Button>
            </Box>
         </Grid>
      </Box>
   );
};
export default ProductSummary;
