import { ActionContext , ActionTree } from 'vuex';
import { IRootState } from '@/store';
import { Search , Data } from '@/models/store.model';
import { actionsEnum, mutationsEnum } from './module.enum';
import { apolloClient } from '@/appoloClient'
import { MapDataToContent } from '@/helpers';
import searchQuery from '@/appoloClient/queries/search.query';

type Context = ActionContext<Search, IRootState>;

const textActions: ActionTree<Search, IRootState> = {
   
    async [actionsEnum.ADD_TEXT](Context :Context ,  payload: string) {
        try {
            Context.commit(mutationsEnum.Load_Movies);
            Context.commit(mutationsEnum.Mutate_TEXT, payload);
            const {data} = await apolloClient.query<Data>({
                query:searchQuery,
                variables:{
                  country: "US",
                  filter: {searchQuery: payload},
                  first: 4,
                  language: "en"
                }
            })
            if(Context.state.text == payload){ /* */
              Context.commit(mutationsEnum.Loaded_Movies, MapDataToContent(data));
            }
        } catch (error) {
          if(Context.state.text == payload){ /* */
            Context.commit(mutationsEnum.Error_Movies);
          }
        }
    },
};

export default textActions;


