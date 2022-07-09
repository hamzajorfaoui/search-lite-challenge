import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: 'https://apis.justwatch.com/graphql'
})