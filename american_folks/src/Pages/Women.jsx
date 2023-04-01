import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import ImageCircular from "../Components/ImageCircular";
import Navbar from "../Components/Navbar";

const images = [
   {
      url: "https://images.pexels.com/photos/14250012/pexels-photo-14250012.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "New Arrival",
   },
   {
      url: "https://images.pexels.com/photos/14250226/pexels-photo-14250226.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tops",
   },
   {
      url: "https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bottom",
   },
   {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE094pL7DPgibx8ZA3q1thRKFr-fs8b8VARNbMXLiVMQ&s",
      title: "Jeans",
   },
   {
      url: "https://images.pexels.com/photos/7841968/pexels-photo-7841968.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Shoes",
   },
   {
      url: "https://images.pexels.com/photos/8485730/pexels-photo-8485730.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cleance",
   },
];

const Women = () => {
    const [data, setData] = useState([]);
    function addtocard (){
        return(
            alert("He")
        )
    // console.log("He")
    }
   useEffect(() => {
      fetch("http://localhost:8080/data")
         .then((res) => res.json())
         .then((res) => setData(res));
   }, []);
   return (
      <div>
         <Navbar />
         <div>
            <img
               src="https://s7d2.scene7.com/is/image/aeo/20230323-whp-hero-lg?scl=1&qlt=60&fmt=webp"
               alt=""
            />
         </div>
         <Flex>
            {images.map((e) => {
               return (
                  <Box>
                     <ImageCircular image={e.url} />
                     <h1>
                        <Center>{e.title}</Center>
                     </h1>
                  </Box>
               );
            })}
         </Flex>
         <br />
         <br />
         <br />
         <Box
            style={{
               background: "rgba(191,218,211,1)",
               color: "white",
               fontSize: "2rem",
               textAlign: "center",
               padding: "20px",
               width: "90%",
               margin: " 0px 5%",
            }}
         >
            <h1>All Jeans, Cargos & Shorts on Sale</h1>
            <p>Up to 30% Off</p>
            <Link to="#">Shop Jeans</Link>
            <Link to="#">Shop Chargos</Link>
            <Link to="#">Shop Shorts</Link>
         </Box>

               <Grid templateColumns='repeat(2, 1fr)' gap={6}>
         {data.map((e) => {
            return (
                  <Card
                     imageUrl={e.imageAddress}
                     name={e.name}
                     price={e.price}
                     det={e.description}
                     handleClick={()=>
                     axios.post(`http://localhost:8080/cartData`,{
                        data:e
                     })
                    .then((res)=>console.log(res.data))
                     }
                  />
            );
         })}
               </Grid>
         <h1>Women</h1>
      </div>
   );
};

export default Women;
