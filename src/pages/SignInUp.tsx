import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { currentTime } from "../utils";
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
import { useTranslation } from "react-i18next";
import { e } from "../auth/firebaseErrorTrans";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignInUp() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const onSignIn = async () => {
    if (isFormValid()) {
      signInWithEmailAndPassword(auth, form.values.email, form.values.password)
        .then((userCredential) => {
          notifications.show({
            title: t("userLogin"),
            message: currentTime() + " - " + userCredential.user.email,
            autoClose: true,
            color: "green",
          });
        })
        .catch((error) => {
          notifications.show({
            title: t("errorFirebaseAuth"),
            message: currentTime() + " - " + e(error.code),
            autoClose: 20000,
            color: "red",
          });
        });
    }
  };

  const isFormValid = () => {
    return Object.keys(form.errors).length === 0;
  };

  const onSignUp = () => {
    notifications.clean();
    if (isFormValid()) {
      createUserWithEmailAndPassword(
        auth,
        form.values.email,
        form.values.password
      )
        .then((userCredential) => {
          notifications.show({
            title: t("userCreate"),
            message: currentTime() + " - " + userCredential.user.email,
            autoClose: true,
            color: "green",
          });
        })
        .catch((error) => {
          notifications.show({
            title: t("errorFirebaseAuth"),
            message:  currentTime() + " - " + e(error.code),
            autoClose: 20000,
            color: "red",
          });
        });
    }
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
          : t("errorInvalidPassword"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("errorInvalidEmail"),
    },
  });

  if (user && loading) {
    return (
      <Loader>{t("checkAuth")}</Loader>
    );
  }

  return (
    <div className="sign_in_up">
      <Box className="sign_in_up_inputs">
        <form onSubmit={form.onSubmit(() => undefined)}>
          <Flex direction="column">
            <TextInput
              label={t("labelEmail")}
              placeholder={''+t("labelEmail")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label={t("labelPassword")}
              placeholder={''+t("labelPassword")}
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
              {t("labelSignIn")}
            </Button>
            <Button
              className="sign_in_up_button"
              type="submit"
              onClick={onSignUp}
              variant="outline"
            >
              {t("labelSignUp")}
            </Button>
          </Flex>
        </form>
      </Box>
    </div>
  );
}
