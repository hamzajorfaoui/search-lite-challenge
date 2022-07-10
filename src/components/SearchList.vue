<template>
    <div class="list-container">
        <div class="list-title">
            <h5>Search Result :</h5>
        </div>
        <a v-for="(item , index) in data" 
           :key="index" 
           :href="item.fullPath" 
           target="_blank" 
           class="list-item"
           @click="addMovie(item)">
            <div class="list-row">
                <div class="list-img">
                    <img :src="item.posterUrl" 
                         height="80"
                         width="60">
                </div>
                <div class="list-content">
                    <span class="subTitle"> {{item.__typename | getMovieType}} </span>
                    <strong class="Title"> {{item.title}} </strong>
                    <span class="subTitle">{{item.originalReleaseYear}}</span>
                </div>
                <div class="list-next-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path d="m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z" />
                    </svg>
                </div> 
            </div>

        </a>
    </div>
</template>

<script lang="ts">
import { Content } from '@/models/store.model'
import { visitedMoviesActionEnum } from '@/store/modules/visitedMovies/enum'
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
export default defineComponent({
    name: 'SearchList',
    props:{
        data:Array<Content>,
        searchText:String
    },
    filters:{
        getMovieType:function (val:string) :string{
            return val == "MovieContent" ? "MOVIE" : "TV SHOW"
        }
    },
    methods:{
        ...mapActions("visitedMovies" , {addMovie:visitedMoviesActionEnum.ADD_MOVIE})
    }
})
</script>

 
<style scoped>
    .list-container{
        margin: 10px 0;
        width: 100%;
    }
    .list-title{
        color: var(--secondary-color);
    }
    .list-row{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
    }
    .list-content{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 80px;
    }
    .list-img{
        width: 60px;
        margin-right: 20px;
    }
    .list-item{
        display: flex;
        margin: 5px 0;
        padding: 5px;
        height: 80px;
        text-decoration: none;
        color: #FFFFFF66;
        transition: background-color .3s ease-in-out;
        border-radius: 5px;
    }
    .list-item:hover{
        background-color: var(--primary-color-light);
    }
    .list-item:hover .list-next-icon{
        opacity: 1;
        transform: translateX(0px);
    }
    .list-next-icon{
        opacity: 0;
        transform: translateX(20px);
        transition: opacity .3s ease-in-out , transform .4s ease-in-out;
    }
    .list-next-icon svg{
        fill: var(--secondary-color-light);
    }
    .Title{
        color: var(--secondary-color);
    }
</style>


