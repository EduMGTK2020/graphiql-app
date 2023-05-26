import { useState, useEffect } from "react";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { regularQuery } from "../api/rickAndMorty";
import { addResponse } from "../store/responseSlice";
import { useDispatch } from "react-redux";

export default function ResponsePanel(props: {
  query: string;
  variables: string;
}) {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.query) {
      regularQuery(" " + props.query, props.variables)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          dispatch(addResponse(JSON.stringify(data)));
        });
    }
  }, [props.query, props.variables, dispatch]);

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

