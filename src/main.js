import Vue from 'vue'
import App from './App.vue'
import '../src/assets/statics/site/css/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from './components/index.vue'
import cart from './components/cart.vue'
Vue.config.productionTip = false
//配置提示
let routes= [
  {
    path:"/",
    component: index
  },
  {
  path:"/index",
  component: index
},
{
  path:"/cart",
  component:cart
}
]
let router = new VueRouter({
    routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
