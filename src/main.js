import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router'
import testComp from './components/testComp.vue';
import addTodoPage from './components/addTodoPage.vue';
import homePage from './components/homePage.vue';

Vue.use(VueRouter);

const Routes=[
  {path:'/test', component:testComp},
  {path:'/', component:homePage},
  {path:'/addTodo', component:addTodoPage}

]

const router=new VueRouter({
  routes:Routes,
  mode: 'history'
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router:router
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.reuse === false)) {
    app.key = to.path
  } else {
    app.key = null
  }
  next()
})