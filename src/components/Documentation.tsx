import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { notifyError } from "../utils";
import Loader from "../components/Loader";

const DocumentationPanel = lazy(() => import("./DocumentationPanel"));

import "./Documentation.css";
import { t } from "i18next";

export default function Documentation() {
  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Suspense fallback={<Loader>{t("docsLoading")}</Loader>}>
          <DocumentationPanel />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

function fallbackRender(props: { error: Error}) {
  notifyError('errorFetch', props.error.message);
  return (
    <></>
  );
}
