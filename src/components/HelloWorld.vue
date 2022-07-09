<template>
  <div class="content">
    <SearchInput   v-model="searchText"></SearchInput>
    <SearchLoading v-if="loadingState == 'loading' "></SearchLoading>
    <SearchList    v-else-if="loadingState == 'loaded' && movies.length" :data="movies" :searchText="searchText"></SearchList>
    <SearchIdle    v-else-if="loadingState == 'idle'"></SearchIdle>
    <NotFound      v-else></NotFound>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue"
import SearchInput from "./SearchInput.vue"
import SearchIdle from "./SearchIdle.vue"
import { mapActions, mapGetters, mapMutations } from "vuex"
import {actionsEnum , gettersEnum, mutationsEnum} from "@/store/modules/search/module.enum"

  export default defineComponent({
    name: 'HelloWorld',
    components:{
      SearchInput,
      SearchIdle,
      SearchList:() => import("./SearchList.vue"),
      NotFound:() => import("./NotFound.vue"),
      SearchLoading:() => import("./SearchLoading.vue")

    },
    methods:{
      ...mapActions("search" , {updateText:actionsEnum.ADD_TEXT}),
      ...mapMutations("search" , {clearText:mutationsEnum.CLEAR_TEXT})
    },
    computed: {
      ...mapGetters("search" , {text:gettersEnum.GET_TEXT , movies:gettersEnum.GET_Movies , loadingState:gettersEnum.GET_LoadingState}),
      searchText:{
        get: function() {
          return this.text
        },
        set: function(text) {
          if (!text) {
            this.clearText();
            return;
          }
          this.updateText(text)
        }
      }
    }
  })
</script>

 
<style scoped>
  .content{
    width: 80vw;
    max-width: 700px;
    margin: auto;
  }
</style>
