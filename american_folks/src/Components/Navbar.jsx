import React from "react";
import {
   Tabs,
   Center,
   TabList,
   TabPanels,
   Tab,
   TabPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Women from "../Pages/Women";

const Navbar = () => {
   return (
      <div>
         <div>
            <Center padding={4}>
               <b style={{ letterSpacing: "3px", fontSize: "2rem" }}>
                  <i> AMERICAN FOLKS </i>{" "}
               </b>
            </Center>
            <Tabs>
               <TabList
                  style={{
                     textAlign: "center",
                     justifyItems: "center",
                     padding: "0px 0px 0px 25%",
                  }}
               >
                  <Tab></Tab>
                  <Tab > <Link to="/women" >Women</Link></Tab>
                  <Tab>Man</Tab>
                  <Tab>Jeans</Tab>
                  <Tab>Shoes & Accessories</Tab>
                  <Tab>Swimsuits</Tab>
                  <Tab>Vista</Tab>
                  <Tab>Clearance</Tab>
               </TabList>

               <TabPanels>
                  <TabPanel></TabPanel>
                  <TabPanel>
                    {/* <Link to={"women"} >{<Women/>}</Link> */}
                  </TabPanel>
                  <TabPanel>
                     <p>Man!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>Jeans!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>Shoes & Accessories!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>Swimsuits!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>Vista!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>Clearance!</p>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </div>
      </div>
   );
};

export default Navbar;
