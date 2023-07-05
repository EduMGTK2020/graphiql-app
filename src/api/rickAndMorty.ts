import wrapPromise from "../api/wrapPromise";
import { getIntrospectionQuery } from "graphql";

const url = "https://rickandmortyapi.com/graphql";

async function runQuery(query: string, variables: string) {
  

  const body = {
    query: query,
    variables: variables,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  });
}

export function regularQuery(query: string, variables: string) {
  return runQuery(query.trim(), variables);
}

export function fetchDataSuspense() {
  const introspectionQueryText = getIntrospectionQuery();
  const promise = runQuery(introspectionQueryText, "").then((res) =>
    res.json()
  );
  return wrapPromise(promise);
}
