import { useTranslation } from "react-i18next";

import "./Welcome.css";

export default function Welcome() {
  const { t } = useTranslation();

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
      </section>
    </>
  );
}
