import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/todo'
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
