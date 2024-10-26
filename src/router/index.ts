import { createRouter, createWebHistory } from 'vue-router'

// Это файл с описанием роутинга, то есть на каждую страничку мы должны описать роут
import AppLayout from '@/layout/AppLayout.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      redirect: '/todos',
      name: 'home',
      children: [
        {
          path: '/todos',
          name: 'todos',
          component: () => import('@/views/todos/TodoView.vue'),
          meta: {
            auth: true,
          },
        },
        {
          path: '/example',
          name: 'example',
          component: () => import('@/views/example/ExampleView.vue'),
          meta: {
            auth: true,
          },
        },
      ]
    }
    ]
})
export default router
