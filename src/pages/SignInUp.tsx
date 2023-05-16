import { useRef } from "react";
import { Button, Flex, Box, Input, Space } from "@mantine/core";
import "./SignInUp.css";

export default function SignInUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = () => {
    console.log("signIn");
  };

  const signUp = () => {
    console.log("signUp");
  };

  return (
    <div className="signInUp">
      <Box className="signInUpInputs">
        <Flex direction="column">
          <Input.Wrapper label="Email">
            <Input ref={emailRef} type="email" placeholder="email" />
          </Input.Wrapper>
          <Input.Wrapper label="Password">
            <Input ref={passwordRef} type="password" placeholder="password" />
          </Input.Wrapper>
        </Flex>
        <Space h="md" />
        <Flex gap="md" justify="center">
          <Button className="signInUpButton" onClick={signIn}>
            Sign In
          </Button>
          <Button className="signInUpButton" onClick={signUp} variant="outline">
            Sign Up
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
