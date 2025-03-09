import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GetLocalSessionSource } from "@auth/data/sources/session/local/get-local-session.source";

import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
const httpLink = createUploadLink({
  uri: `${import.meta.env.VITE_GRAPHQL_URI}/graphql`,
});

const getSession = () => {
  try {
    const service = new GetLocalSessionSource();
    const session = service.getAuthFromCookie();
    return session;
  } catch (error) {
    return null;
  }
};

const authLink = setContext((_, { headers }) => {
  const session = getSession();
  return {
    headers: {
      ...headers,
      authorization: session ? `Bearer ${session.access_token}` : "",
      "x-refresh-token": session ? `${session.refresh_token}` : "",
    },
  };
});

const additiveLink = from([authLink, httpLink]);

export const apolloClient = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
});
