<template>
    <div class="d-flex input-container">
      <input type="text"
             autocomplete="off"
             autocorrect="off"
             spellcheck="false"
             :value="value" 
             @change="onChange"
             v-debounce="500"
             ref="searchInput"
             placeholder="I want to watch...">
      <button v-if="value" class="btn clear-icon" @click="onClearText">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" color="">
          <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
        </svg>
      </button>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VdebounceDirective from '../directives/debounce.directive'

export default defineComponent({
    name: 'SearchInput',
    props:{value:String},
    directives:{
      VdebounceDirective
    },
    methods:{
      onClearText(){
        (this.$refs["searchInput"] as HTMLInputElement).focus()
        this.$emit("input" ,"") 
      },
      onChange(event:Event){
       const InputValue = (<HTMLInputElement>event.target).value;
       /*to avoid emitting the same value twice when the input loses focus 
         due to the on change event*/
       if(InputValue != this.value){
          this.$emit("input" ,InputValue)
       }
      },
    }
})
</script>

 
<style scoped>
  input{
    width:100%;
    height: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--secondary-color-light);
    color: var(--secondary-color);
    background-color: transparent;
  }
  .input-container{
    position: relative;
    width:100%;
    margin-bottom: 20px;
  }
  .clear-icon{
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 2;
  }
  .clear-icon svg{
    fill: var(--secondary-color-light);
  }
</style>
