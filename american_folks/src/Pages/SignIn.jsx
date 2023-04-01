import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isback,setIsback] = useState(false)
  const toast = useToast();
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here, you would normally make a request to a server to create a new user account with the submitted data.
    // For the sake of simplicity, we'll just display a toast message indicating that the sign-in was successful.
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
      toast({
        title: "Sign-in successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        
    });
} catch (error) {
    toast({
        title: "Sign-in failed",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true
    });
} finally {
    setIsSubmitting(false);
    setIsback(true)
    }
  };

  return (
    <Box maxW={400} mx="auto" mt={10} p={6} bg="rgba(191,218,211,1)" shadow="lg" rounded="lg">
          {isback ? <Button onClick={()=>navigate("/login")} >Go to Login</Button> : <Text fontSize="2xl" fontWeight="bold" mb={6} color="#448AFF">Welcome to Sign-up Page</Text>}
      <Text fontSize="3xl" fontWeight="bold" mb={6}>Sign in</Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl> 
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </FormControl>
          <FormControl id="mobile" isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <FormHelperText>We'll never share your mobile number.</FormHelperText>
          </FormControl>
          <Button type="submit" colorScheme="green" isLoading={isSubmitting}>Sign in</Button>
        </Stack>
      </form>
    </Box>
  );
};
export default SignIn;