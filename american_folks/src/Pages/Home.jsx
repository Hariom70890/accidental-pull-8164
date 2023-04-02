import React from "react";
import {
   Tabs,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
   Flex,
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
import { Link } from "react-router-dom";
const Home = () => {
   return (
      <div>
         <div
            style={{ height: "30px", backgroundColor: "rgba(191,218,211,1)" }}
         ></div>
         <Tabs variant="enclosed">
            <TabList>
               <Tab>
                  <Link to="/american_folks">
                     <b> AMERICAN FOLKS </b>
                  </Link>
               </Tab>
               <Tab>
                  <Link to="/vista">
                     <i>VISTA</i>
                  </Link>
               </Tab>

               <Flex
                  gap="40px"
                  textAlign="left"
                  style={{ padding: " 20px 0px 0px 60%" }}
               >
                  <button type="submit">
                     <FaSearch />
                  </button>
                  <Link to="/login">
                  
                     <FaSignInAlt />
                  </Link>
                  <FaHeart />
                  <Link to="/cartitem">

                  <FaCartArrowDown
                    
                  />
                  </Link>
               </Flex>
            </TabList>
            <TabPanels>
               <TabPanel>
                  {/* <Home1 /> */}
               </TabPanel>
               <TabPanel>
                  {/* <Home2 /> */}
               </TabPanel>
            </TabPanels>
         </Tabs>
      </div>
   );
};

export default Home;
