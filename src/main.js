import Vue from 'vue'
import App from './App.vue'
import '../src/assets/statics/site/css/style.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://111.230.232.110:8899";
import moment from 'moment';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.filter('globalFormatTime', function(v,template){
  if(template){
    return moment(v).format(template);
  }else{
    return moment(v).format('YYYY-MM-DD');
  }
})
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
},
{
  path:"/detail/:id",
  component:detail
},
]
let router = new VueRouter({
    routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
