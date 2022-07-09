import { visitedMoviesMutationEnum } from './enum'
import { Content } from '../../../models/store.model';
import { visitedMoviesActionEnum } from './enum';
import { IRootState } from '@/store';
import { ActionTree } from 'vuex';

const visitedMoviesActions: ActionTree<Content[] , IRootState> = {
    [visitedMoviesActionEnum.INIT_DATA]({commit}) {
        if(localStorage.getItem("VisitedMovies")){
            try {
                const VisitedMovies = JSON.parse(localStorage.getItem("VisitedMovies"));
                commit(visitedMoviesMutationEnum.UPDATE_DATA , VisitedMovies);
            } catch (error) {
              return;  
            }
        }
    }
};


export default visitedMoviesActions;
