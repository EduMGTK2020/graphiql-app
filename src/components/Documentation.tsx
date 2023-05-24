import React, { Suspense } from "react";
import Loader from "../components/Loader";

import "./Documentation.css";

const DocumentationPanel = React.lazy(() => import("./DocumentationPanel"));

export default function Documentation() {

  return (
    <>
      <Suspense fallback={<Loader>Docs loading...</Loader>}>
        <DocumentationPanel />
      </Suspense>
    </>
  );
}
