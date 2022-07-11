import { initState } from './state';
import { Content, Search } from '@/models/store.model';
import { MutationTree } from 'vuex';
import {mutationsEnum} from './enum';
import { mapMovies } from '@/utils';

const textMutations: MutationTree<Search> = {
    [mutationsEnum.CLEAR_TEXT](state :Search) {
        Object.assign(state, {...initState});
    },
    [mutationsEnum.Load_Movies](state:Search, text: string) {
        Object.assign(state , {loadingState:"loading" , text})
    },
    [mutationsEnum.Loaded_Movies](state, Movies:Content[]) {
        Object.assign(state , {loadingState:"loaded" , movies: mapMovies(Movies) })
    },
    [mutationsEnum.Error_Movies](state) {
        Object.assign(state , {loadingState:"error"})
    },
};


export default textMutations;
