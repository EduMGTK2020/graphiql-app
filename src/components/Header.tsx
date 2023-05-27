import { useEffect } from "react";
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

  const goToMainPage = () => {
    navigate("/main");
  };

  const noAuthUser = !user && !loading;

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header_app");
    const scrollTop = window.scrollY;
    scrollTop > 15
      ? header?.classList.add("is-sticky")
      : header?.classList.remove("is-sticky");
  };

  return (
    <>
      <header className="header_app">
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
            </>
          )}
          <div className="header_group">
            {user && !loading && (
              <>
                <Button onClick={onClickSignOut} className="header_sign_button">
                  {t("labelSignOut")}
                </Button>
              </>
            )}

            {!noAuthUser && location.pathname == "/" && (
              <Button onClick={goToMainPage} className="header_button">
                {t("goMain")}
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
