import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import LessonsView from '../views/LessonsView.vue'
import SHEroView from '../views/SHEroView.vue'
import PageNotFound from '../views/404NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: LessonsView
    },
    {
      path: '/shero',
      name: 'shero',
      component: SHEroView
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound }
  ]
})

export default router
