import { useState, useEffect } from "react";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { notifySuccess, notifyError } from "../utils";

import { regularQuery } from "../api/rickAndMorty";
import { addResponse } from "../store/responseSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function ResponsePanel() {
  const { t } = useTranslation();

  const query = useSelector((state: RootState) => state.finalQuery.value);
  const variables = useSelector(
    (state: RootState) => state.finalVariables.value
  );
  const response = useSelector((state: RootState) => state.response.value);

  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim()) {
      regularQuery(query, JSON.parse(variables))
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          dispatch(addResponse(JSON.stringify(data)));

          if (data?.["errors"]) {
            notifyError("errorQuery", "errorsToResponse");
          } else {
            notifySuccess("successQuery", "successToResponse");
          }
        })
        .catch((err) => {
          notifyError("errorFetch", err.message);
        });
    } else {
      setData(undefined);
    }
  }, [query, variables, dispatch]);

  useEffect(() => {
    if (response == "{}") {
      setData(undefined);
    }
  }, [response]);

  if (response == "{}" && query.trim()) {
    return (
      <>
        <Loader>{t('waitingForQueryResult')}</Loader>
      </>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="res_container">
        <div className="res_item">
          <JsonView src={data} enableClipboard={false} />
        </div>
      </div>
    </>
  );
}
