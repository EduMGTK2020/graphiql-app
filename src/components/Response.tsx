import React, { Suspense } from "react";
import Loader from "../components/Loader";
import "./Response.css";

const ResponsePanel = React.lazy(() => import("./ResponsePanel"));

export default function Response(props:{query:string}) {
  return (
    <>
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <ResponsePanel query={props.query}/>
      </Suspense>
    </>
  );
}