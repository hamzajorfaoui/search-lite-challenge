<template>
    <h3 class="not-found-text" v-if="!visitedMovies.length">No recent searches</h3>
    <div  v-else>
        <div class="d-flex flex-row header">
            <h3 class="not-found-text">Recently Searched</h3>
            <button @click="clearAll" class="btn">
                Clear all
            </button>
        </div>
        <div class="container">
            <a   v-for="(item , index) in visitedMovies"
                :key="index"
                :href="item.fullPath"
                target="_blank">
                    <img  :src="item.posterUrl" width="80">
                    <span :title="item.title" class="Title">{{item.title}}</span>
            </a>
        </div>

    </div>
</template>

<script lang="ts">
import { visitedMoviesActionEnum} from '@/store/modules/visitedMovies/enum'
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
export default defineComponent({
    name: 'SearchIdle',
    computed:{
        ...mapState(["visitedMovies"])  
    },
    methods:{
        ...mapActions("visitedMovies",{clearAll:visitedMoviesActionEnum.CLEAR_ALL_MOVIES})  
    },

},

)
</script>

 
<style scoped>
    .not-found-text{
        color: var(--secondary-color);
        margin: 0;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(80px,1fr));
        grid-gap: 10px;
        text-decoration: none;
    }
    .Title{
        color: var(--secondary-color-light);
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden; 
        width: 80px; 
        white-space: nowrap;
    }
    .header{
        justify-content: space-between;
        margin-bottom: var(--search-text-margin);
    }
</style>
