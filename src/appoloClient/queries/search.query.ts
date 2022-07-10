import { gql } from "apollo-boost";

const searchQuery = gql`query GetSuggestedTitles( $country: Country!
    $language: Language!
    $first: Int!
    $filter: TitleFilter
  ) {
    popularTitles(country: $country, first: $first, filter: $filter) {
      edges {
        node {
          content(country: $country, language: $language) {
            fullPath
            title
            originalReleaseYear
            posterUrl
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

export default searchQuery;