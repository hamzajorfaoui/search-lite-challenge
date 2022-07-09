import { Search } from "@/models/store.model";


export const initState :Search = {
    text:"",
    movies:[],
    loadingState:"idle"
}
export const textState: () => Search = () => ({...initState});