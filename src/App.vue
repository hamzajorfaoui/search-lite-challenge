<template>
  
  <div id="app">
    <NavBar></NavBar>
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './layout/Header.vue'
import { visitedMoviesActionEnum } from './store/modules/visitedMovies/enum';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NavBar
  },
  methods:{
    ...mapActions("visitedMovies" , {initVisitedMovies:visitedMoviesActionEnum.INIT_DATA}),
  },
  created(){
    this.initVisitedMovies();
  }
})
</script>

<style>
  #app {
    position: relative;
  }
</style>
