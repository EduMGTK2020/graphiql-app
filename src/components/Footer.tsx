import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer_app">
        <h2>{t("footerTitle")}</h2>
        <p>{t("footerInfo")}</p>
      </footer>
    </>
  );
}
