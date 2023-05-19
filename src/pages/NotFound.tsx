import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@mantine/core";
import "../pages/NotFound.css";

export default function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
 
  const goToWelcomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="not_found">
        <h1>{t('pageNotFound')}</h1>
        <Button onClick={goToWelcomePage}>{t('goWelcome')}</Button>
      </div>
    </>
  );
}
