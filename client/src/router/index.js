import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
