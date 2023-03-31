import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data,setData] = useState([])

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    setData([...data,{Email:email,Pass:password}])
  };
console.log(data)
  return (
    <Stack direction="column" spacing="4" mt="8" mx="auto" maxW="sm" align="center" bg="gray.100" w="80%" p="20px">
      <Heading as="h1" size="lg" textAlign="center">
        Log in to your account
      </Heading>
      <form onSubmit={handleLoginSubmit}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" mt="4" w="100%">
          Log in
        </Button>
      </form>
      <Button colorScheme="green" size="lg" mt="4" w="90%" >
        Create an account
      </Button>
    </Stack>
  );
}

export default LoginPage;
