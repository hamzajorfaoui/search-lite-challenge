import { ActionContext , ActionTree } from 'vuex';
import { Search , Data , IRootState} from '@/models/store.model';
import { actionsEnum, mutationsEnum } from './enum';
import { apolloClient } from '@/appoloClient'
import { MapDataToContent } from '@/utils';
import searchQuery from '@/appoloClient/queries/search.query';

type Context = ActionContext<Search, IRootState>;

const textActions: ActionTree<Search, IRootState> = {
   
    async [actionsEnum.ADD_TEXT](Context :Context ,  payload: string) {
        try {
            Context.commit(mutationsEnum.Load_Movies , payload);
            const {data} = await apolloClient.query<Data>({
                query:searchQuery,
                variables:{
                  country: "US",
                  filter: {searchQuery: payload},
                  first: 4,
                  language: "en"
                }
            })
            if(Context.state.text == payload){ /* to avoid committing the wrong data */
              Context.commit(mutationsEnum.Loaded_Movies, MapDataToContent(data));
            }
        } catch (error) {
          if(Context.state.text == payload){ /* to avoid committing the wrong data */
            Context.commit(mutationsEnum.Error_Movies);
          }
        }
    },
};

export default textActions;


