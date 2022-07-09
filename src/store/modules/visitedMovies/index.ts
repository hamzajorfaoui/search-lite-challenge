import { Content } from '@/models/store.model';
import { IRootState } from '@/store';
import  vistedMoviesMutations  from './mutations';
import  vistedMoviesActions  from './actions';
import { VisitedMoviesState } from './state';
import { Module } from "vuex";

const VisitedMoviesModule :Module<Content[] , IRootState> = {
    namespaced: true,
    state: VisitedMoviesState,
    mutations: vistedMoviesMutations,
    actions: vistedMoviesActions
}

export default VisitedMoviesModule;