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
import SearchInput from "@/components/SearchInput.vue"
import SearchIdle from "@/components/SearchIdle.vue"
import { mapActions, mapGetters, mapMutations } from "vuex"
import {actionsEnum , gettersEnum, mutationsEnum} from "@/store/modules/search/enum"

  export default defineComponent({
    name: 'SearchLite',
    components:{
      SearchInput,
      SearchIdle,
      SearchList:() => import("@/components/SearchList.vue"),
      NotFound:() => import("@/components/NotFound.vue"),
      SearchLoading:() => import("@/components/SearchLoading.vue")

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
        set: function(text:string) {
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
