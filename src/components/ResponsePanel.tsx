import { useState, useEffect } from "react";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { regularQuery } from "../api/rickAndMorty";

export default function ResponsePanel(props: { query: string }) {
  const [data, setData] = useState();

  useEffect(() => {
    if(props.query) {
    regularQuery(' '+props.query, "")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    }  
  }, [props.query]);

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