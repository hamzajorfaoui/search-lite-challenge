<template>
    <header class="d-flex flex-row" :class="{'animate':created}">
            <div class="Title Title1"><span>JustWatch</span></div>
            <div class="Title Title2"><span>Search-lite</span></div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

  export default defineComponent({
    name: 'NavBar',
    data () {
      return{
        created:false
      }
    },
    mounted(){
        setTimeout(()=>{this.created = true})
    }
  })
</script>

<style scoped>
    header{
        justify-content: center;
        padding:80px 0;
        font-size: 40px;
    }
    .animate .Title{
        opacity: 1;
    }
    .Title{
        transition: opacity 1s ease-in-out;
        opacity: 0;
    }
    .Title1{
        color: var(--yellow-color);
        margin-right: 5px;
    }
    .Title2{
        color: var(--secondary-color);
    }
</style>