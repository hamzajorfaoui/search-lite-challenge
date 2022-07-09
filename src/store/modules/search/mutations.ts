import { initState } from './state';
import { Content, Search } from '@/models/store.model';
import { MutationTree } from 'vuex';
import {mutationsEnum} from './module.enum';
import { mapMovies } from '@/helpers';

const textMutations: MutationTree<Search> = {
    [mutationsEnum.Mutate_TEXT](state :Search, text: string) {
        Object.assign(state, {text});
    },
    [mutationsEnum.CLEAR_TEXT](state :Search) {
        Object.assign(state, {...initState});
    },
    [mutationsEnum.Load_Movies](state:Search) {
        Object.assign(state , {loadingState:"loading"})
    },
    [mutationsEnum.Loaded_Movies](state, Movies:Content[]) {
        Object.assign(state , {loadingState:"loaded" , movies: mapMovies(Movies) })
    },
    [mutationsEnum.Error_Movies](state) {
        Object.assign(state , {loadingState:"error"})
    },
};


export default textMutations;
