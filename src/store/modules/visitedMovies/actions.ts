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
    },
    [visitedMoviesActionEnum.ADD_MOVIE]({commit , state} , payload:Content) {
        if(!state.some(el=>el.title==payload.title)){
            localStorage.setItem("VisitedMovies" , JSON.stringify([...state , payload]))
            commit(visitedMoviesMutationEnum.UPDATE_DATA , [payload]);
        }
    },
    [visitedMoviesActionEnum.CLEAR_ALL_MOVIES]({commit }) {
            localStorage.setItem("VisitedMovies" , JSON.stringify([]))
            commit(visitedMoviesMutationEnum.CLEAR_DATA);
    }
};


export default visitedMoviesActions;
