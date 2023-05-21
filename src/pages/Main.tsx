import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";

import { Button } from "@mantine/core";
import Accordion from "../components/EditorAccordion";

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
          <h4>{t("checkAuth")}</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="main">
        <div className="main_docs">
          <div className="main_header">
            <div className="main_title">Documentation</div>
          </div>
        </div>
        <div className="main_request">
          <div className="main_query">
            <div className="main_header">
              <div className="main_title">Query</div>
              <Button>Run</Button>
            </div>
          </div>
          <textarea></textarea>
          <Accordion />
        </div>
        <div className="main_response">
          <div className="main_header">
            <div className="main_title">Response</div>
          </div>
        </div>
      </div>
    </>
  );
}

