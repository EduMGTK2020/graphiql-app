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
        <h1>{t("welcomeTitle")}</h1>
        <h2>{t("welcomeTeam")}</h2>
        <div className="welcome_devs">
          <div className="dev">
            <img src="./dev2.png" alt="developer" height={100} />
            <p>{t("welcomeDevs").split(",")[0]}</p>
          </div>
          <div className="dev">
            <img src="./dev2.png" alt="developer" height={100} />
            <p>{t("welcomeDevs").split(",")[1]}</p>
          </div>
          <div className="dev">
            <img src="./dev2.png" alt="developer" height={100} />
            <p>{t("welcomeDevs").split(",")[2]}</p>
          </div>
        </div>
        {user && !loading && (
          <Button onClick={goToMainPage}>{t("goMain")}</Button>
        )}
      </section>
    </>
  );
}
