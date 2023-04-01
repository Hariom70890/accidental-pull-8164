import { useState } from "react";
import {
   Box,
   Button,
   FormControl,
   FormLabel,
   Input,
   Stack,
   Text,
   useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isback, setIsback] = useState(false);
   const toast = useToast();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Here, you would normally make a request to a server to authenticate the user with the submitted credentials.
      // For the sake of simplicity, we'll just display a toast message indicating that the login was successful.
      try {
         await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
         toast({
            title: "Login successful",
            status: "success",
            duration: 5000,
            isClosable: true,
         });
      } catch (error) {
         toast({
            title: "Login failed",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
         });
      } finally {
         setIsSubmitting(false);
         setIsback(true);
      }
   };

   return (
      <Box
         maxW={400}
         mx="auto"
         mt={10}
         p={6}
         bg="rgba(191,218,211,1)"
         shadow="lg"
         rounded="lg"
      >
         {isback ? (
            <Button onClick={() => navigate("/")}>Continue Shopping</Button>
         ) : (
            ""
         )}

         <Text fontSize="3xl" fontWeight="bold" mb={6}>
            Log in
         </Text>
         <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
               <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </FormControl>
               <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </FormControl>
               <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
               >
                  Log in
               </Button>
               <Button
                  colorScheme="green"
                  size="lg"
                  onClick={() => navigate("/signin")}
               >
                  Create an account
               </Button>
            </Stack>
         </form>
      </Box>
   );
};
export default LoginPage;
