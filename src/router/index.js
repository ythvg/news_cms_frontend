import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/views/NewsList'
import NewsAdd from '@/views/NewsAdd'
import NewsEdit from '@/views/NewsEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/add',
      name: 'NewsAdd',
      component: NewsAdd
    },
    {
      path: '/edit/:id',
      name: 'NewsEdit',
      component: NewsEdit
    }
  ]
})
