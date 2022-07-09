<template>
    <h3 class="not-found-text">No recent searches</h3>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
export default defineComponent({
    name: 'SearchIdle',
    computed:{
        ...mapState(["visitedMovies"])  
    }
},

)
</script>

 
<style scoped>
    .not-found-text{
        display: flex;
        justify-content: flex-start;
        color: var(--secondary-color);
        font-weight: normal;
    }
</style>
