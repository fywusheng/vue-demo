import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }, {
      path: '/foo',
      name: 'Foo',
      component: Foo
    }, {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }]
})
