import { useState } from "react";
import "react18-json-view/src/style.css";
import { v4 as uuid } from "uuid";

import { fetchDataSuspense } from "../api/rickAndMorty";

import { buildClientSchema } from "graphql";
import {
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql/type";
import Query from "./QueryField";

interface Field {
  name: string;
  description: string;
  type: string;
}

interface Arg {
  name: string;
  description: string;
  type: GraphQLScalarType;
}

interface Query {
  name: string;
  description: string;
  args: Arg[];
  type: GraphQLObjectType;
}

interface Type {
  name: string;
  description: string;
  _fields?: Arg[];
}

interface TypeView {
  name: string;
  description: string;
  fields: Field[];
}

const response = fetchDataSuspense();

const getViewData = (schema: GraphQLSchema) => {
  const queryTypes = schema.getQueryType()?.["_fields"];
  Object.values(queryTypes).forEach((q) => {
    const query = q as Query;
    queries.push({
      name: query["name"],
      description: query["description"],
      args: query["args"] as Arg[],
      type: query["type"],
    });
  });
  const varTypes = schema.getTypeMap();
  Object.values(varTypes).forEach((t) => {
    const type = t as Type;
    const _fields = type["_fields"] as Arg[];
    const fields: Field[] = [];
    if (_fields) {
      Object.values(_fields).map((f) => {
        fields.push({
          name: f["name"],
          description: f["description"],
          type: f.type.toString(),
        });
      });
    }
    types.set(type["name"], {
      name: type["name"],
      description: type["description"],
      fields: fields,
    });
  });
};

const getViewType = (val: string) => {
  return val
    .replace("!", "")
    .replace("[", "")
    .replace("]", "")
    .replace("!", "");
};

const getViewStack = (stack: string) => {
  const items = stack.split(";");
  if (items.length > 1) {
    return [items[items.length - 2], items[items.length - 1]];
  }
  return ["", ""];
};

const queries: Query[] = [];
const types: Map<string, TypeView> = new Map<string, TypeView>();

export default function DocumentationPanel() {
  const [typeStack, setTypeStack] = useState(
    localStorage.getItem("typeStack") || "Query"
  );

  const data = response.read();
  const schema = buildClientSchema(data["data"]);
  getViewData(schema);

  const [backTo, current] = getViewStack(typeStack);
  const type = types.get(current);

  const onClickType = (type: string) => {
    const newItems = typeStack + ";" + getViewType(type);
    setTypeStack(newItems);
    localStorage.setItem("typeStack", newItems);
  };

  const onClickBack = () => {
    const items = typeStack.split(";");
    if (items.length > 1) {
      items.splice(-1);
      const newItems = items.join(";");
      setTypeStack(newItems);
      localStorage.setItem("typeStack", newItems);
    }
  };

  return (
    <>
      <div className="docs_container">
        <div className="docs_item">
          {backTo && (
            <div className="viewType">
              <div className="linkBack" onClick={onClickBack}>
                <span className="backArrow">&larr;</span>Back to {backTo}
              </div>
              <div className="typeName">{type?.name}</div>
              <div className="typeDescription">{type?.description}</div>
              {type?.fields.map((f) => (
                <div key={uuid()}>
                  <span className="fieldName">{f.name}</span>:
                  <span
                    className="linkType"
                    onClick={() => onClickType(f.type)}
                  >
                    {f.type}
                  </span>
                  <div className="paramDescription">{f.description}</div>
                </div>
              ))}
            </div>
          )}

          {!backTo && (
            <>
              <h3>Query</h3>
              {queries.map((val) => (
                <div className="queryBox" key={uuid()}>
                  <div className="queryDescription">{val.description}</div>

                  <div>
                    <span className="queryName">{val.name}</span> (
                  </div>
                  {val.args.map((arg) => (
                    <div key={uuid()}>
                      <span className="argName">{arg.name}</span>:
                      <span
                        className="linkType"
                        onClick={() => onClickType(arg.type.toString())}
                      >
                        {" "}
                        {arg.type.toString()}{" "}
                      </span>
                    </div>
                  ))}
                  <div>
                    ):{" "}
                    <span
                      className="linkType"
                      onClick={() => onClickType(val.type.toString())}
                    >
                      {val.type.toString()}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
