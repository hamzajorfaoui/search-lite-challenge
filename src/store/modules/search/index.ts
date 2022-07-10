import  textMutations  from './mutations';
import  textActions  from './actions';
import  textGetters  from './getters';
import { textState } from './state';
import { Search , IRootState} from '@/models/store.model';
import { Module } from "vuex";

const search :Module<Search , IRootState> = {
    namespaced: true,
    state: textState,
    getters: textGetters,
    mutations: textMutations,
    actions: textActions,
}

export default search;