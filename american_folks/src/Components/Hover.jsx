// import React, { useState } from 'react';
// import { Box, Flex, Text } from '@chakra-ui/react';

// const DropdownMenu = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <Flex
//       as="nav"
//       align="center"
//       justify="space-between"
//       wrap="wrap"
//       padding="1rem"
//       bg="white"
//       color="gray.700"
//       fontWeight="semibold"
//       letterSpacing="wide"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Text fontSize="xl" letterSpacing="wide">
//         Shop
//       </Text>
//       <Box display={isHovering ? 'block' : 'none'} position="absolute" top="100%" bg="white" shadow="xl" borderRadius="md">
//         <Flex direction="column">
//           <Box p="0.5rem">
//             <Text fontWeight="medium" fontSize="sm">
//               Men
//             </Text>
//             <Flex direction="column" mt="0.5rem">
//               <Box>
//                 <Text fontSize="xs">New Arrivals</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Tops</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Bottoms</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Outerwear</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Accessories</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Clearance</Text>
//               </Box>
//             </Flex>
//           </Box>
//           <Box p="0.5rem">
//             <Text fontWeight="medium" fontSize="sm">
//               Women
//             </Text>
//             <Flex direction="column" mt="0.5rem">
//               <Box>
//                 <Text fontSize="xs">New Arrivals</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Tops</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Bottoms</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Dresses</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Intimates</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Accessories</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Clearance</Text>
//               </Box>
//             </Flex>
//           </Box>
//           <Box p="0.5rem">
//             <Text fontWeight="medium" fontSize="sm">
//               Jeans
//             </Text>
//             <Flex direction="column" mt="0.5rem">
//               <Box>
//                 <Text fontSize="xs">All Men's Jeans</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">All Women's Jeans</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Jeggings</Text>
//               </Box>
//               <Box>
//                 <Text fontSize="xs">Skinny Jeans</Text>
//               </Box>
//               <Box>
//             <Text fontSize="xs">Slim Jeans</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Straight Jeans</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Bootcut Jeans</Text>
//           </Box>
//         </Flex>
//       </Box>
//       <Box p="0.5rem">
//         <Text fontWeight="medium" fontSize="sm">
//           Accessories
//         </Text>
//         <Flex direction="column" mt="0.5rem">
//           <Box>
//             <Text fontSize="xs">Bags & Backpacks</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Belts</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Hats & Beanies</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Sunglasses</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Watches</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Socks</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Shoes & Sneakers</Text>
//           </Box>
//           <Box>
//             <Text fontSize="xs">Clearance</Text>
//           </Box>
//         </Flex>
//       </Box>
//       <Box p="0.5rem">
//         <Text fontWeight="medium" fontSize="sm">
//           Sale
//         </Text>
//       </Box>
//     </Flex>
//   </Box>
// </Flex>
// )
// }


// export default DropdownMenu;


import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";


const Hover = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);

  return (
    <>

<Tabs>
  <TabList>
    <Tab onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      Hover Me
      {isHovered && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Modal content goes here.
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={handleClose}>Close</Button>
              <Button colorScheme="blue">Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Button onClick={handleOpen}>Open Modal</Button>
    </TabPanel>
  </TabPanels>
</Tabs>

{isHovered && (
  <Modal isOpen={isOpen} onClose={handleClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Modal content goes here.
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={handleClose}>Close</Button>
        <Button colorScheme="blue">Save</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)}

    </>
  )
}

export default Hover