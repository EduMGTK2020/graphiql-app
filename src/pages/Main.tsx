import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";

import Accordion from "../components/EditorAccordion";
import Query from "../components/QueryField";

import Loader from "../components/Loader";
import Documentation from "../components/Documentation";
import Response from "../components/Response";

import "../pages/Main.css";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Main() {
  const query = useSelector((state: RootState) => state.finalQuery.value);

  const { t } = useTranslation();

  const navigate = useNavigate();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/", { replace: true });
    }
  });

  if (loading) {
    return <Loader>{t("checkAuth")}</Loader>;
  }

  return (
    <>
      <div className="main">
        <div className="main_docs">
          <div className="main_header">
            <div className="main_title">{t("titleDoc")}</div>
          </div>
          <Documentation />
        </div>
        <div className="main_request">
          <div className="main_query">
            <div className="main_header">
              <div className="main_title">{t("titleQuery")}</div>
              <Query />
            </div>
          </div>
          <Accordion />
        </div>
        <div className="main_response">
          <div className="main_header">
            <div className="main_title">{t("titleResponse")}</div>
          </div>
          <Response query={query} />
        </div>
      </div>
    </>
  );
}

