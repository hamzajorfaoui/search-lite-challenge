<template>
  <div id="app">
    <NavBar></NavBar>
    <SearchLite/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import SearchLite from './views/SearchLite.vue'
import NavBar from './layout/Header.vue'
import { visitedMoviesActionEnum } from './store/modules/visitedMovies/enum';
import { IRootState } from './models/store.model';


export default defineComponent({
  name: 'App',
  components: {
    SearchLite,
    NavBar
  },
  methods:{
    ...mapActions("visitedMovies" , {initVisitedMovies:visitedMoviesActionEnum.INIT_DATA}),
  },
  created(){
    this.initVisitedMovies();
    this.$store.subscribe(({type} , state:IRootState)=>{
      if(type.startsWith("visitedMovies")){
        localStorage.setItem("VisitedMovies" , JSON.stringify(state.visitedMovies))
      }
    })
  }
})
</script>

<style>
  #app {
    position: relative;
  }
</style>
