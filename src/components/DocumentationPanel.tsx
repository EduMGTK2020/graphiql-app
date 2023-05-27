import { useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { v4 as uuid } from "uuid";

import { fetchDataSuspense } from "../api/rickAndMorty";

import { buildClientSchema } from "graphql";
import {
  GraphQLScalarType,
  GraphQLObjectType,
  __Field,
  GraphQLSchema,
} from "graphql/type";
import Query from "./QueryField";

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
  _fields?: Arg[] ;
  // type: GraphQLObjectType;
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
  console.log(varTypes);
  Object.values(varTypes).forEach((t) => {
    const type = t as Type ;

    types.set(type["name"], {
      name: type["name"],
      description: type["description"],
      _fields: type["_fields"] as Arg[],
    });
  });

  console.log(types);
};

const queries: Query[] = [];
const types: Map<string, Type> = new Map<string, Type>();

export default function DocumentationPanel() {
  const [type, setType] = useState<Type>();

  const data = response.read();

  const schema = buildClientSchema(data["data"]);

  getViewData(schema);

  const onClickType = (e: string) => {
    console.log("onClickQueryName", e.replace(/[!\[\]]/g, ""));
    const eType = types.get(e.replace(/[!\[\]]/g, ""));
    // if(!eType?._fields) eType?._fields = []; 
    setType(eType);
  };

  return (
    <>
      <div className="docs_container">
        <div className="docs_item">
          {/* ------ */}
          <div className="viewType">
            <div className="className">{type?.name}</div>
            <div className="className">{type?.description}</div>

            {/* {(() => {
              if (type?._fields) {
                var t = type?._fields as Arg[];
                console.log(
                  "dfgsdgfd",
                  Object.values(t).map((f) => f.name )
                );
              }
            })()} */}

            {/* {type?._fields && type?._fields!.map((arg) => (
              <div key={uuid()}>
                <span className="argName">{arg.name}</span>:
                <span
                  className="argType"
                  onClick={() => onClickType(arg.type.toString())}
                >
                  {" "}
                  {arg.type.toString()}{" "}
                </span>
              </div>
            ))} */}
          </div>
          {/* ------ */}

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
                    className="argType"
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
                  className="returnType"
                  onClick={() => onClickType(val.type.toString())}
                >
                  {val.type.toString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
