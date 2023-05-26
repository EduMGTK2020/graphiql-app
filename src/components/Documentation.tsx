import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import Loader from "../components/Loader";
import DocumentationPanel from "../components/DocumentationPanel";

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

