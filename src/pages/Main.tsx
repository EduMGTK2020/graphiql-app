import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";

import { Button } from "@mantine/core";
import Accordion from "../components/EditorAccordion";

import Loader from "../components/Loader";
import "../pages/Main.css";

import { useState } from "react";
import FetchFunction from "../components/FetchComponent";
import { startValue } from "../GraphQL/util";
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Main() {
  const variables = useSelector((state: RootState) => state.variables.value);

  const [responseData, setResponseData] = useState(Object);
  const [queryValue, setQueryValue] = useState(startValue);

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

  const fetchData = async () => {
    try {
      const res = await FetchFunction(queryValue, JSON.parse(variables));

      if (res.data) {
        setResponseData(res.data);
      } else if (res.error) {
        console.error(res.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("is not valid JSON")) {
          /* TODO */
          console.log("Please enter correct field variebles");
        }
      }
    }
  };

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
              <Button className="run-button" onClick={fetchData}>
                Run
              </Button>
            </div>
          </div>
          <textarea
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
          ></textarea>
          <Accordion />
        </div>
        <div className="main_response">
          <div className="main_header">
            <div className="main_title">Response</div>
          </div>
          <div className="main_response-field">
            <ReactJson
              src={responseData}
              theme="summerfruit:inverted"
              displayDataTypes={false}
              displayObjectSize={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

