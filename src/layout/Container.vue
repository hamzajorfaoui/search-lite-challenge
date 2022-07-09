<template>
    
</template>

<script lang="ts">
import NavBar from "./Header.Vue"
  export default {
    name: 'app-container',
    components:[
        NavBar
    ]
  }
</script>

<style>
    header{
        display: flex;
        background-color: var(--primary-color);
    }
    .logo{
        padding:10px;
        
    }
    .logo img{
        width: 120px;
    }
</style>