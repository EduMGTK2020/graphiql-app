import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { addFinalQuery } from "../store/finalQuerySlise";
import "./Response.css";
import { addFinalVariables } from "../store/finalVariablesSlise";

export default function Query() {
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
        Run
      </Button>
    </>
  );
}
