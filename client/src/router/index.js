import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Content from '@/components/Content'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'Login'
    }, {
      path: '/',
      component: Title,
      children: [{
        path: ':_id',
        name: 'content',
        component: Content,
        props: true
      }]
    }
  ]
})
