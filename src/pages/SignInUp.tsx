import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import Loader from "../components/Loader";

import {
  Button,
  Flex,
  Box,
  TextInput,
  PasswordInput,
  Space,
} from "@mantine/core";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import "./SignInUp.css";

import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignInUp() {
  const navigate = useNavigate();

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const onSignIn = async () => {
    console.log("signIn", form.values);
    if (isValidForm()) {
      signInWithEmailAndPassword(auth, form.values.email, form.values.password)
        .then((userCredential) => {
          // state.user = userCredential.user.email!;
          // state.isAuth = true;
          notifications.show({
            title: "User login",
            message: userCredential.user.email,
            autoClose: 20000,
            color: "gree",
          });
        })
        .catch((error) => {
          notifications.show({
            title: error.code,
            message: error.message,
            autoClose: 20000,
            color: "red",
          });
        });
    }
    // signInWithEmailAndPassword(
    //   auth,
    //   emailRef.current!.value,
    //   passwordRef.current!.value
    // )
    //   .then((userCredential) => {
    //     state.user = userCredential.user.email!;
    //     state.isAuth = true;
    //   })
    //   .catch((error) => {
    //     // const state = useContext(AppContext);
    //     state.error = error;
    //     // console.log(error);
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     // console.log(errorCode, errorMessage);
    //     // setErrorAuth({ code: error.code, message: error.message });
    //   });
  };

  const isValidForm = () => {
    return Object.keys(form.errors).length === 0;
  };

  const onSignUp = () => {
    notifications.clean();
    if (isValidForm()) {
      createUserWithEmailAndPassword(
        auth,
        form.values.email,
        form.values.password
      )
        .then((userCredential) => {
          console.log("create user");
          // state.isAuth = true;
          // state.user = userCredential.user.email!;
        })
        .catch((error) => {
          notifications.show({
            title: error.code,
            message: error.message,
            autoClose: 20000,
            color: "red",
          });
        });
    }
    // signUp(emailRef.current!.value, passwordRef.current!.value);
  };

  useEffect(() => {
    if (user && !loading) {
      navigate("/main", { replace: true });
    }
  });

  const form = useForm({
    validateInputOnChange: true,
    initialValues: { email: "", password: "" },
    validate: {
      password: (value) =>
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/.test(
          value
        )
          ? null
          : "Invalid password - 8-20 symbols, at least one letter, one digit, one special character",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  if (user && loading) {
    return (
      <>
        <div className="loader">
          <Loader /> <h4>Check auth...</h4>
        </div>
      </>
    );
  }
  return (
    <div className="sign_in_up">
      {/* {loading} - {state.isAuth} - {state.user} - {user?.email} */}
      <Box className="sign_in_up_inputs">
        <form onSubmit={form.onSubmit(() => undefined)}>
          <Flex direction="column">
            <TextInput
              label="Email"
              placeholder="email"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="password"
              {...form.getInputProps("password")}
            />
          </Flex>
          <Space h="md" />
          <Flex gap="md" justify="center">
            <Button
              className="sign_in_up_button"
              type="submit"
              onClick={onSignIn}
            >
              Sign In
            </Button>
            <Button
              className="sign_in_up_button"
              type="submit"
              onClick={onSignUp}
              variant="outline"
            >
              Sign Up
            </Button>
          </Flex>
        </form>
      </Box>
    </div>
  );
}
