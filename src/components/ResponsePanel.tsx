import { useState, useEffect } from "react";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { regularQuery } from "../api/rickAndMorty";
import { addResponse } from "../store/responseSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ResponsePanel() {
  const query = useSelector((state: RootState) => state.finalQuery.value);
  const variables = useSelector(
    (state: RootState) => state.finalVariables.value
  );
  const response = useSelector((state: RootState) => state.response.value);

  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim()) {
      regularQuery(" " + query, JSON.parse(variables))
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          dispatch(addResponse(JSON.stringify(data)));
        });
    } else {
      setData(undefined);
    }
  }, [query, variables, response, dispatch]);

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
