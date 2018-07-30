import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import View from '@/components/View'
import Store from '@/pages/Store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // redirect: '/todo'
    }, {
      path: '/store',
      name: 'Store',
      component: Store
    }, {
      path: '/todo',
      name: 'Todo',
      components: {
        default: Todo,
        a: Foo,
        b: Bar
      }
    }, {
      path: '/foo/:username',
      name: 'Foo',
      component: Foo,
      children: [
        {
          path: '',
          component: Foo
        }
      ]
    }, {
      path: '/bar/:username',
      name: 'Bar',
      component: Bar
    }, {
      path: '/view',
      name: 'View',
      components: {
        default: View,
        a: Foo,
        b: Bar
      }
    }]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log('beforeEach', to, from, next)
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // console.log('beforeEach', to, from)
})

export default router
