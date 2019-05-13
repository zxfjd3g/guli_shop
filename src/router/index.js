import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)



let router= new VueRouter({
  mode:"history",
  routes
})

router.beforeEach((to,from,next)=>{
  if((to.fullPath.includes('personal')||to.fullPath.includes('buy'))&&!store.state.userToken){
    next('login');
  }else{
    next()
  }
})

export default router;
