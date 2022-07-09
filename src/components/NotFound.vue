<template>
    <h3 class="not-found-text">Not Found</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'NotFound',
})
</script>

 
<style scoped>
    .not-found-text{
        display: flex;
        justify-content: flex-start;
        color: var(--secondary-color);
        font-weight: normal;
    }
</style>
