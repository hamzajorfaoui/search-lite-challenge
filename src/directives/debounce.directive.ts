import { debounce } from "@/utils";
import Vue from "vue"

/* Debounce directive for input elements that fire 
   the change event after the user has stopped typing for a giving time */
const VdebounceDirective = Vue.directive("debounce" , function(element , binding) {
    if(binding.value !== binding.oldValue){
        (element as HTMLInputElement).oninput = debounce(function(){
            element.dispatchEvent(new Event("change"))
        }, parseInt(binding.value))
    }
})
export default VdebounceDirective;