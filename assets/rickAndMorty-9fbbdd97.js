const a="https://rickandmortyapi.com/graphql",p=`query IntrospectionQuery {
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
  `;async function t(e,n){return fetch(a,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({query:e,variables:n})})}async function r(){return t(p,"")}function o(e,n){return t(e,n)}export{r as i,o as r};
