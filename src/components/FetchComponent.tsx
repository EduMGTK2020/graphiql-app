export default async function FetchFunction(
  query: string,
  variables?: string
) {
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `${query}`,
      variables: `${variables}`,
    }),
    
  });

  const data = await response.json();
  return data;
}
