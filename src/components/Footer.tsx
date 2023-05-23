// import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  // const { t } = useTranslation();

  return (
    <>
      <footer className="footer_app">
        <div className="footer_githubs">
          <img src="/github.svg" />{" "}
          <a href="https://github.com/edumgtk2020">edumgtk2020</a> |{" "}
          <a href="https://github.com/Clukva">Clukva</a> |{" "}
          <a href="https://github.com/fkodirov">fkodirov</a>
        </div>
        <p className="footer_year">2023</p>
        <a href="https://rs.school/react/" className="footer_logo">
          <img src="/rs-school.svg" alt="RS School" height={28} />
        </a>
      </footer>
    </>
  );
}
