import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { Button } from "@mantine/core";
import "./Welcome.css";

export default function Welcome() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const goToMainPage = () => {
    navigate("/main");
  };

  return (
    <>
      <section className="welcome">
        <h1>{t('welcomeTitle')}</h1>
        <p>{t('welcomeInfo')}</p>
        {user && !loading && (
          <Button onClick={goToMainPage}>{t('goMain')}</Button>
        )}
      </section>
    </>
  );
}
