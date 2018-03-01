import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/index.vue'], resolve);

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

export default router