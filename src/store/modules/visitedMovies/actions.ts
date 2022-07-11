import { visitedMoviesMutationEnum } from './enum'
import { Content , IRootState} from '../../../models/store.model';
import { visitedMoviesActionEnum } from './enum';
import { ActionTree } from 'vuex';

const visitedMoviesActions: ActionTree<Content[] , IRootState> = {
    [visitedMoviesActionEnum.INIT_VISITEDMOVIES_FROM_LOCALSTORAGE]({commit}) {
        const visitedMoviesStorage = localStorage.getItem("VisitedMovies")
        if(visitedMoviesStorage){
            try { /* To handle JSON.parse errors  */
                commit(visitedMoviesMutationEnum.UPDATE_DATA , JSON.parse(visitedMoviesStorage));
            } catch (error) {
              return;  
            }
        }
    },
    [visitedMoviesActionEnum.ADD_MOVIE]({commit , state} , payload:Content) {
         /* considering Movie Title it's his primary key , 
            the following condition avoids adding duplicate movies  */
        if(!state.some(el=>el.title==payload.title)){ 
            commit(visitedMoviesMutationEnum.UPDATE_DATA , [payload]);
        }
    },
    [visitedMoviesActionEnum.CLEAR_ALL_MOVIES]({commit }) {
            commit(visitedMoviesMutationEnum.CLEAR_DATA);
    }
};


export default visitedMoviesActions;
