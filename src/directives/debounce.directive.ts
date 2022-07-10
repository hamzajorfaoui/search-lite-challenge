import { debounce } from "@/helpers";
import Vue from "vue"

const VdebounceDirective = Vue.directive("debounce" , function(element , binding) {
    if(binding.value !== binding.oldValue){
        (element as HTMLInputElement).oninput = debounce(function(){
            element.dispatchEvent(new Event("change"))
        }, parseInt(binding.value))
    }
})
export default VdebounceDirective;