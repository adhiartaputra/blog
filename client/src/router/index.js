import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Content from '@/components/Content'
import PostArticle from '@/components/PostArticle'

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
    }, {
      path: '/create',
      component: PostArticle,
      name: 'post_article'
    }
  ]
})
