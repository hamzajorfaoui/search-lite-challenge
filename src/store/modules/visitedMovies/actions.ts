import { visitedMoviesMutationEnum } from './enum'
import { Content } from '../../../models/store.model';
import { visitedMoviesActionEnum } from './enum';
import { IRootState } from '@/store';
import { ActionTree } from 'vuex';

const visitedMoviesActions: ActionTree<Content[] , IRootState> = {
    [visitedMoviesActionEnum.INIT_DATA]({commit}) {
        const visitedMoviesStorage = localStorage.getItem("VisitedMovies")
        if(visitedMoviesStorage){
            try {
                commit(visitedMoviesMutationEnum.UPDATE_DATA , JSON.parse(visitedMoviesStorage));
            } catch (error) {
              return;  
            }
        }
    },
    [visitedMoviesActionEnum.ADD_MOVIE]({commit , state} , payload:Content) {
        if(!state.some(el=>el.title==payload.title)){
            commit(visitedMoviesMutationEnum.UPDATE_DATA , [payload]);
        }
    },
    [visitedMoviesActionEnum.CLEAR_ALL_MOVIES]({commit }) {
            commit(visitedMoviesMutationEnum.CLEAR_DATA);
    }
};


export default visitedMoviesActions;
