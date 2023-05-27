import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../components/Loader";

const DocumentationPanel = lazy(() => import("./DocumentationPanel"));

import "./Documentation.css";

export default function Documentation() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<Loader>Docs loading...</Loader>}>
          <DocumentationPanel />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

