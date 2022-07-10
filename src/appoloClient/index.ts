import AppConfig from '@/config';
import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: AppConfig.apiUrl
})