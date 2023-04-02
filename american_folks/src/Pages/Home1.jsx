import {
   Box,
   Button,
   Center,
   Flex,
   Image,
   Text,
   VStack,
} from "@chakra-ui/react";
import React from "react";
import Buttonc from "../Components/Button";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ImageSlider from "../Components/Silder";
import Black from "../images/20230324-aehp-newarrivals-lg.jpg";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
   const navigate = useNavigate()
   return (
      <div>
         <Navbar />
         <Text>
            <Flex>
               <div>
                  <Image src={Black} width="120%" />
               </div>
               <div>
                  <div style={{ padding: "5%" }}>
                     <Text
                        style={{
                           fontSize: 52,
                           color: "rgba(255,153,0,1)",
                           fontFamily: "Avenir Next Bold",
                        }}
                     >
                        25% off On All New Arrivals
                     </Text>
                     <Text>Your fave fits in spring-fresh hues.</Text>
                  </div>
                  <Center>
                     <VStack>
                        <br />

                        <Buttonc
                           text={"Shop Women"}
                           bgcolr={"rgba(191,218,211,1)"}
                           handleClick={()=>navigate("/women")}
                        />
                        <br />

                        <Buttonc
                           text={"Shop Men"}
                           bgcolr={"rgba(191,218,211,1)"}
                           handleClick={()=>navigate("/man")}
                        />
                     </VStack>
                  </Center>
               </div>
            </Flex>
         </Text>
         <div
            style={{
               backgroundColor: "rgba(191,218,211,1)",
               padding: "40px",
               margin: "80px 10px",
            }}
         >
            <Flex gap="60%">
               <div
                  style={{
                     color: "rgba(0,0,0,1)",
                     fontFamily: " Avenir Next Bold",
                  }}
               >
                  <Text>All Jeans & Shorts On Sale</Text>
                  <Text fontSize="40px">Up to 30% Off</Text>
               </div>
               <div>
                  <Buttonc text={`Shop Now + `} />
               </div>
            </Flex>
         </div>
         <Flex gap={100}>
            <div>
               <Card
                  imageUrl="https://s7d2.scene7.com/is/image/aeo/20230323-aehp-croptops-lg?scl=1&qlt=60&fmt=webp"
                  name="It's Crop Top Season"
                  det="Your warm-weather staple in new silhouettes & pretty prints."
               />
            </div>
            <div>
               <Card
                  imageUrl="https://s7d2.scene7.com/is/image/aeo/20230323-aehp-resortshirts-lg?scl=1&qlt=60&fmt=webp"
                  name="Resort Shirts"
                  det="Paradise is only a shirt or two (or three) away..."
               />
            </div>
         </Flex>
         <div>
            <img
               src="https://s7d2.scene7.com/is/image/aeo/20230323-aehp-earthday-lg?scl=1&qlt=60&fmt=webp"
               alt=""
            />
         </div>
         <div style={{ margin: "40px 30%", textAlign: "center" }}>
            <ImageSlider
               images={[
                  "https://s7d2.scene7.com/is/image/aeo/2154_5959_328_ob?$cat-main_large$&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/3171_5714_100_f?$cat-main_large$&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/0181_2800_020_of?$cat-main_large$&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/20230323-jhp-dreamydrape-lg?scl=1&qlt=60&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/1161_2785_615_f?$cat-main_large$&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/0366_5634_823_ob?$cat-main_large$&fmt=webp",
                  "https://s7d2.scene7.com/is/image/aeo/0181_2869_001_f?$cat-main_large$&fmt=webp"
               ]}
            />
            <Text>
               Tag <b> @americaneagle #AEJeans </b>& you could be featured right
               here.
            </Text>
            <Box>
               {/* <Buttonc text={"Add Your Photo"} bgcolr={"white"}  />{"                "}
  <Buttonc text={"View Gallery"}  /> */}
               <Button
                  bg="white"
                  borderRadius="50px"
                  border="2px solid black"
                  margin="5px"
                  padding="20px"
               >
                  Add Your Photo
               </Button>
               <Button
                  bg="white"
                  borderRadius="50px"
                  border="2px solid black"
                  margin="5px"
                  padding="20px"
               >
                  View Gallery
               </Button>
            </Box>
         </div>
         <br />
         <br />
         <br />
         <br />
         <hr />
         <br />

         <div>
            <Flex>
               <Footer />
               <LoginPage />
            </Flex>
         </div>
      </div>
   );
};

export default Home1;
