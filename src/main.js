import Vue from 'vue'
import App from './App'
import store from './store'
import {VueRouter} from 'vue-router'
// import Routes from './routes'
import testComp from './components/testComp.vue';

Vue.use(VueRouter);

const Routes=[
  {path:'/test', component:testComp}
]

const router=new VueRouter({
  routes:Routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router:router
})
