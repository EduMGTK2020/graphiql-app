import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

import { fetchDataSuspense } from "../api/rickAndMorty";

// import { getIntrospectionQuery, buildClientSchema } from "graphql";
// import {
//   GraphQLNamedType,
//   GraphQLScalarType,
//   GraphQLObjectType,
//   __Field,
// } from "graphql/type";

const response = fetchDataSuspense();

export default function DocumentationPanel() {

  const data = response.read();

  return (
    <>
      <div className="docs_container">
        <div className="docs_item">
          <JsonView
            src={data}
            enableClipboard={false}
            collapseObjectsAfterLength={1}
          />
        </div>
      </div>
    </>
  );
}
