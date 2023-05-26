import { Button } from "@mantine/core";

import { notifications } from "@mantine/notifications";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { addFinalQuery } from "../store/finalQuerySlise";
import { addResponse } from "../store/responseSlice";
import "./Response.css";
import { addFinalVariables } from "../store/finalVariablesSlise";
import { currentTime } from "../utils";

export default function Query() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query.value);
  const variables = useSelector((state: RootState) => state.variables.value);

  function isValidJSON(str: string) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  function buttonClick() {
    dispatch(addResponse("{}"));

    if (!query.trim()) {
      dispatch(addFinalQuery(""));
      notifications.show({
        title: t("errorQuery"),
        message: currentTime() + " - " + t("errorEmptyQuery"),
        autoClose: 5000,
        color: "red",
      });
      return;
    }

    dispatch(addFinalQuery(query));

    if (isValidJSON(variables)) {
      dispatch(addFinalVariables(variables));
    } else {
      dispatch(addFinalVariables("{}"));
    }
  }

  return (
    <>
      <Button className="run-button" onClick={buttonClick}>
        {t("runButton")}
      </Button>
    </>
  );
}
