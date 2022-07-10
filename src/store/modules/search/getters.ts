import { Search , Content, loadType , IRootState} from '@/models/store.model';
import { GetterTree } from 'vuex';
import {gettersEnum} from './module.enum';

const textGetters: GetterTree<Search, IRootState> = {

    [gettersEnum.GET_TEXT](state): string {
        return state.text;
    },
    [gettersEnum.GET_Movies](state): Content[] {
        return state.movies;
    },
    [gettersEnum.GET_LoadingState](state): loadType {
        return state.loadingState;
    },
};

export default textGetters;