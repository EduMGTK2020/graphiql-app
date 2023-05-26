import wrapPromise from "../api/wrapPromise";

const url = "https://rickandmortyapi.com/graphql";

const introspectionQueryText = `query IntrospectionQuery {
    __schema {
      
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  
  fragment FullType on __Type {
    kind
    name
    description
    
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  
  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
    
    
  }
  
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `;

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

export async function introspectionQuery() {
  return runQuery(introspectionQueryText, "");
}

export function regularQuery(query: string, variables: string) {
  return runQuery(query.trim(), variables);
}

export function fetchDataSuspense() {
  const promise = runQuery(introspectionQueryText, "").then((res) =>
    res.json()
  );
  return wrapPromise(promise);
}
