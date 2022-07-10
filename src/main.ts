import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import "./assets/style/globalStyle.css"
import { apolloClient } from './appoloClient'
import store from "./store";

Vue.config.productionTip = false
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  apolloProvider,
  store
}).$mount('#app')

