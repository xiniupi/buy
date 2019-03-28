import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
import userContainer from './components/userContainer.vue'
import userDetail from './components/userDetail.vue'
import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
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
  {
    path:"/user",
    component:userContainer,
    children:[{
      path:"index",
      component:userIndex
    },
    {
      path:"detail",
      component:userDetail
    },
    {
      path:"order",
      component:userOrder
    },
    {
      path:"",
      component:userIndex
    },
  ]
  },
  ]
  let router = new VueRouter({
      routes
  })
  export default router;
