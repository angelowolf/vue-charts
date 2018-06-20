import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import teststacked from '@/components/teststacked'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/teststacked',
      name: 'teststacked',
      component: teststacked
    }
  ]
})
