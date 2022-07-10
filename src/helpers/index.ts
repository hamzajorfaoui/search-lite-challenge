import AppConfig from "@/config";
import { Content, Data } from "@/models/store.model";

export function debounce(callBack:() => void , waitTime:number) {
    let TimeOut :NodeJS.Timeout | null= null;
    return function () {
        if(TimeOut) clearTimeout(TimeOut);
        TimeOut =  setTimeout(()=>{callBack()} , waitTime)
    }
}

export function setFullImgUrl(postUrl:string) :string{
    const correctUrl = postUrl.replace("{profile}" , "s166").replace("{format}" , "webp")
    return AppConfig.imagesUrl+correctUrl
}

export function mapMovies(movies:Content[]){
    return movies.map(el=>({...el , fullPath:AppConfig.baseUrl+el.fullPath , posterUrl:setFullImgUrl(el.posterUrl)}))
}


export function MapDataToContent(data:Data):Content[]{
    try {
        return data.popularTitles.edges.map(el=>el.node.content).flat()
    } catch (er) {
        return []
    }
}