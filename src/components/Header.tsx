import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { Button, Avatar } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { currentTime } from "../utils";
import LocaleSwitcher from "../components/LocaleSwitcher";

import ProjectSVG from "../assets/logo.svg";
import "./Header.css";
import { useEffect, useState } from "react";

export default function HeaderApp() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const onClickSignInUp = () => {
    navigate("/auth");
  };

  const onClickSignOut = () => {
    const logoutUser = user?.email;
    auth.signOut().then(() => {
      notifications.show({
        title: t("userLogout"),
        message: currentTime() + " - " + logoutUser,
        autoClose: true,
        color: "green",
      });
      navigate("/auth");
    });
  };

  const onClickGoWelcome = () => {
    navigate("/");
  };

  const noAuthUser = !user && !loading;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsSticky(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? "header_app is-sticky" : "header_app"}>
        <h2>
          <img className="header_logo" src={ProjectSVG} alt="Project logo" />
          GraphiQL - {t("team")} #6
        </h2>
        <div className="header_buttons">
          <LocaleSwitcher />

          {noAuthUser && location.pathname != "/auth" && (
            <Button onClick={onClickSignInUp} className="header_sign_button">
              {t("labelSignIn")} / {t("labelSignUp")}
            </Button>
          )}

          {noAuthUser && location.pathname == "/auth" && (
            <Button onClick={onClickGoWelcome} className="header_sign_button">
              {t("goWelcome")}
            </Button>
          )}

          {user && !loading && (
            <>
              <div className="header_user">
                <Avatar radius="xl" />
                <div>{user.email}</div>
              </div>
              <Button onClick={onClickSignOut} className="header_sign_button">
                {t("labelSignOut")}
              </Button>
            </>
          )}
        </div>
      </header>
    </>
  );
}

