import { visitedMoviesMutationEnum } from './enum';
import { Content } from '@/models/store.model';
import { MutationTree } from 'vuex';

const rootMutations: MutationTree<Content[]> = {
    [visitedMoviesMutationEnum.UPDATE_DATA](state :Content[], payload: Content[]) {
        state.concat(payload);
    }
};


export default rootMutations;
