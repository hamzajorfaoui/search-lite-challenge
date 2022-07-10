import { Content, Data } from "@/models/store.model";
import {gql} from 'graphql-tag'

export function debounce(callBack:() => void , waitTime:number) {
    let TimeOut :NodeJS.Timeout | null= null;
    return function () {
        if(TimeOut) clearTimeout(TimeOut);
        TimeOut =  setTimeout(()=>{callBack()} , waitTime)
    }
}

export function setFullImgUrl(postUrl:string) :string{
    const correctUrl = postUrl.replace("{profile}" , "s166").replace("{format}" , "webp")
    return "https://images.justwatch.com"+correctUrl
}

export function mapMovies(movies:Content[]){
    return movies.map(el=>({...el , fullPath:"https://www.justwatch.com"+el.fullPath , posterUrl:setFullImgUrl(el.posterUrl)}))
}

export function search(searchText:string) {
    return {
        operationName: "GetSuggestedTitles",
          query:gql`query GetSuggestedTitles( $country: Country!
                                              $language: Language!
                                              $first: Int!
                                              $filter: TitleFilter
                                            ) {
                                              popularTitles(country: $country, first: $first, filter: $filter) {
                                                edges {
                                                  node {
                                                    ...SuggestedTitle
                                                    __typename
                                                  }
                                                  __typename
                                                }
                                                __typename
                                              }
                                            }

                                            fragment SuggestedTitle on MovieOrShow {
                                              content(country: $country, language: $language) {
                                                fullPath
                                                title
                                                originalReleaseYear
                                                posterUrl
                                                __typename
                                              }
                                              __typename
                                            }
                                 `,
          variables:{
            country: "US",
            filter: {searchQuery: searchText},
            first: 4,
            language: "en"
          }
      }
}

export function MapDataToContent(data:Data):Content[]{
    try {
        return data.popularTitles.edges.map(el=>el.node.content).flat()
    } catch (er) {
        return []
    }
}