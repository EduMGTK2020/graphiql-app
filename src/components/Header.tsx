import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { Button, Avatar } from "@mantine/core";
import { notifySuccess } from "../utils";

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
      notifySuccess("userLogout", "" + logoutUser);
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

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isStickyHandler);
    return () => {
      window.removeEventListener("scroll", isStickyHandler);
    };
  });

  const isStickyHandler = () => {
    const scrollTop = window.scrollY;
    scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
  };

  return (
    <>
      <header className={`header_app ${isSticky ? "is-sticky" : ""}`}>
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
