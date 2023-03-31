import React from "react";
import {
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   Flex,
   background,
   Link,
} from "@chakra-ui/react";
import {
   FaSearch,
   FaHeart,
   FaCartArrowDown,
   FaSignInAlt,
} from "react-icons/fa";

import Home1 from "./Home1";
import Home2 from "./Home2";
import LoginPage from "./LoginPage";
const Home = () => {
   return (
      <div>
         <div
            style={{ height: "30px", backgroundColor: "rgba(191,218,211,1)" }}
         ></div>
         <Tabs variant="enclosed">
            <TabList>
               <Tab>
                  <b> AMERICAN FOLKS </b>
               </Tab>
               <Tab>
                  <i>VISTA</i>
               </Tab>

               <Flex
                  gap="40px"
                  textAlign="left"
                  style={{ padding: " 20px 0px 0px 60%" }}
               >
                  <button type="submit">
                     <FaSearch />
                  </button>
                  <Link to={<LoginPage/>}>
                     <FaSignInAlt />
                  </Link>
                  <FaHeart />
                  <FaCartArrowDown
                     onClick={() => {
                        alert("Cart");
                     }}
                  />
               </Flex>
            </TabList>
            <TabPanels>
               <TabPanel>
                  <Home1 />
               </TabPanel>
               <TabPanel>
                  <Home2 />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </div>
   );
};

export default Home;
