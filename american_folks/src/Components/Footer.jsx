import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Box, Flex,IconButton, Heading, Link, Stack, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.100" py="6">
      <Flex direction={{ base: "column", lg: "row"}}>
        <Stack
          mr={{ lg: "8" }}
          mb={{ base: "6", lg: "0" }}
          spacing={{ base: "3", lg: "6" }}
        >
          <Heading as="h3" size="sm" mb="3" fontWeight="semibold">
            Shop
          </Heading>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            New Arrivals
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Brands We Love
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Online Exclusives
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Clearance
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Tailgate
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            NFL Fan Shop
          </Link>
        </Stack>
        <Stack
          mr={{ lg: "8" }}
          mb={{ base: "6", lg: "0" }}
          spacing={{ base: "3", lg: "6" }}
        >
          <Heading as="h3" size="sm" mb="3" fontWeight="semibold">
            Vista
          </Heading>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            New Arrivals
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Bras
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Undies
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Swim
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Vista Real
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Vista Bras & Bralettes
          </Link>
        </Stack>
        <Stack
          mr={{ lg: "8" }}
          mb={{ base: "6", lg: "0" }}
          spacing={{ base: "3", lg: "6" }}
        >
          <Heading as="h3" size="sm" mb="3" fontWeight="semibold">
            AF
          </Heading>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Jeans
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Tops
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Bottoms
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Accessories
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Joggers
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
            Graphic Te </Link>
            </Stack>
          <Stack spacing={{ base: "3", lg: "6" }} mb={{ base: "6", lg: "0" }}>
            <Heading as="h3" size="sm" mb="3" fontWeight="semibold">
              Customer Service
            </Heading>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              Help
            </Link>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              My Account
            </Link>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              Order Status
            </Link>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              Returns & Exchanges
            </Link>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              Shipping & Handling
            </Link>
            <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
              Contact Us
            </Link>
    <Box mt="8">
  
      <Box textAlign="center" mt={{ base: "8", lg: "0" }}>
        <IconButton
          as="a"
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Facebook"
          variant="ghost"
          icon={<FaFacebook />}
          size="lg"
          mr="4"
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram"
          variant="ghost"
          icon={<FaInstagram />}
          size="lg"
          mr="4"
        />
        <IconButton
          as="a"
          href="https://www.twitter.com/"
          target="_blank"
          aria-label="Twitter"
          variant="ghost"
          icon={<FaTwitter />}
          size="lg"
        />
      </Box>
    </Box>
          </Stack>
        </Flex>
        <Box borderTop="1px solid" borderColor="gray.200" mt="6" pt="6">
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "center", lg: "unset" }}
          >
            <Text fontSize="sm" mr={{ lg: "8" }}>
              © 2023 AE Retail, Inc. All Rights Reserved
            </Text>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align={{ base: "center", lg: "unset" }}
            >
              <Link href="#" fontSize="sm" mr="4" _hover={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm" mr="4" _hover={{ textDecoration: "none" }}>
                Terms of Use
              </Link>
              <Link href="#" fontSize="sm" _hover={{ textDecoration: "none" }}>
                CA Privacy Notice
              </Link>
            </Flex>
          </Flex>



        </Box>
      </Box>
  );
}




export default Footer;