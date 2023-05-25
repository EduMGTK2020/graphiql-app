import { Button } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { addFinalQuery } from "../store/finalQuerySlise";
import "./Response.css";

export default function Query() {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query.value);

  function buttonClick() {
    dispatch(addFinalQuery(query));
  }

  return (
    <>
      <Button className="run-button" onClick={buttonClick}>
        Run
      </Button>
    </>
  );
}
