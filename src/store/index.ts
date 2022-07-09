import { Content, Search } from './../models/store.model';
import Vue from 'vue';
import Vuex from 'vuex';
import { StoreOptions } from 'vuex';
import searchModule from "./modules/search"
import VisitedMoviesModule from './modules/visitedMovies';
export interface IRootState{
    visitedMovies:Content[],
    search:Search
}
const config: StoreOptions<IRootState> = {
    modules:{search:searchModule , visitedMovies:VisitedMoviesModule}
};

Vue.use(Vuex);

const store = new Vuex.Store<IRootState>(config);

export default store;