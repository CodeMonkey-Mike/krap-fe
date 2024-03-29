import { useMemo } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { NextPage } from 'next';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphLink() {
  const { HttpLink } = require('@apollo/client/link/http');
  return new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  });
}

const createApiEndpoint = () => {
  if (
    process.env.NODE_ENV == 'development' &&
    process.env.NEXT_PUBLIC_API_URL?.includes('localhost')
  ) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  return [
    process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_PR,
    '.',
    process.env.NEXT_PUBLIC_API_DOMAIN,
    process.env.NEXT_PUBLIC_API_PATH,
  ].join('');
};

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: createApiEndpoint(),
  cache: new InMemoryCache(),
});

function createApolloClient(initialState = {}) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache().restore(initialState),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

export function withApollo(PageComponent: NextPage & any, {} = {}) {
  const WithApollo = ({
    apolloClient,
    apolloState,
    ...pageProps
  }: {
    apolloClient: ApolloClient<NormalizedCacheObject>;
    apolloState: NormalizedCacheObject;
  }) => {
    const client = apolloClient || initializeApollo(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };
  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }
  return WithApollo;
}
