import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import BatteryTable from '../components/BatteryTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/battery-dashboard',
      name: 'battery-dashboard',
      component: BatteryTable
    },
    // ... other routes
  ]
})

export default router
