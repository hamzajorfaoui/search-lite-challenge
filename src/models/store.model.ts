
export type loadType = "loading" | "loaded" | "error" | "idle";
export interface Search{
    text:string,
    movies:Content[],
    loadingState:loadType
}

export interface Data {
    popularTitles: PopularTitles;
}

export interface PopularTitles {
    edges:      Edge[];
    __typename: string;
}

export interface Edge {
    node:       Node;
    __typename: string;
}

export interface Node {
    content:    Content;
    __typename: string;
}

export interface Content {
    posterUrl:           string;
    fullPath:            string;
    title:               string;
    originalReleaseYear: number;
    __typename:          string;
}
