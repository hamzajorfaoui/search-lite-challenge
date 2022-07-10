import { visitedMoviesMutationEnum } from './enum';
import { Content } from '@/models/store.model';
import { MutationTree } from 'vuex';

const rootMutations: MutationTree<Content[]> = {
    [visitedMoviesMutationEnum.UPDATE_DATA](state :Content[], payload: Content[]) {
        state.unshift(...payload)
    },
    [visitedMoviesMutationEnum.CLEAR_DATA](state :Content[]) {
        state.splice(0 , state.length)
    }
};


export default rootMutations;
