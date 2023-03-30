import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, background } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon,StarIcon,CartIcon } from '@chakra-ui/icons'

import Home1 from './Home1'
import Home2 from './Home2'
const Home = () => {
  return (
    <div>
    <div style={{height:"30px" ,backgroundColor:"rgba(191,218,211,1)"}}></div>
          <Tabs variant='enclosed'>
  <TabList>
    <Tab>
    {/* <img src="C:\Users\HP\OneDrive\Desktop\accidental-pull-8164\american_folks\src\images\logo.png" alt="logo" /> */}
        {/* <img src="american_folks\src\images\logo.png" alt="logo" /> */}
      <b>  AMERICAN FOLKS </b>
    </Tab>
    <Tab>
        <i>VISTA</i>
    </Tab>
    
<Flex gap="10px" textAlign="left" style={{padding:" 0px 0px 0px 60%"} }>
<IconButton aria-label='Search database' icon={<SearchIcon />} />
<img width="25px" src="https://cdn-icons-png.flaticon.com/128/3917/3917711.png" alt="conatct" />
<IconButton icon={<StarIcon/>}/>
<img src="C:\Users\HP\OneDrive\Desktop\accidental-pull-8164\american_folks\src\images\shopping-bag.png" alt="bag" />
<img src="american_folks\src\images\shopping-bag.png" alt="bha" />

</Flex>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Home1/>
    </TabPanel>
    <TabPanel>
    <Home2/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Home