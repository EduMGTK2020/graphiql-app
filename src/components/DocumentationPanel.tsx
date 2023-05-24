import { useState, useEffect } from "react";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { notifications } from "@mantine/notifications";
import { currentTime } from "../utils";

import { useTranslation } from "react-i18next";
import { e } from "../auth/firebaseErrorTrans";

import { introspectionQuery } from "../api/rickAndMorty";

export default function DocumentationPanel() {
  const { t } = useTranslation();
  const [data, setData] = useState();

  useEffect(() => {
    introspectionQuery()
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        notifications.show({
          title: t("errorFetch"),
          message: currentTime() + " - " + e(err.message),
          autoClose: 20000,
          color: "red",
        });
      });
  }, [t]);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="docs_container">
        <div className="docs_item">
          <JsonView
            src={data}
            enableClipboard={false}
            collapseObjectsAfterLength={1}
          />
        </div>
      </div>
    </>
  );
}
