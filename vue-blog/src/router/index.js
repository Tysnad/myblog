import Vue from 'vue'
import Router from 'vue-router'
import archive from '../components/archive'
import tags from '../components/tags'
import category from '../components/category'
import specificartical from '../components/specificartical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'archive',
      component: archive
    }, {
      path: '/tags',
      name: 'tags',
      component: tags
    }, {
      path: '/category',
      name: 'category',
      component: category
    }, {
      path: '/specificartical/:id',
      name: 'specificartical',
      component: specificartical
    }
  ]
})
