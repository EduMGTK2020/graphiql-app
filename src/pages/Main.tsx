import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";

import Loader from "../components/Loader";
import "../pages/Main.css";

export default function Main() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/auth", { replace: true });
    }
  });

  if (loading) {
    return (
      <>
        <div className="loader">
          <Loader />
          <h4>{t('checkAuth')}</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="main">
        <h1>{t('mainTitle')}</h1>
        <p>
          {t('mainInfo')}
          div
        </p>
      </div>
    </>
  );
}
