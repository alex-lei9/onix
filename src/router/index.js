import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorSignUp from '../views/DoctorSignUp.vue'
import PatientSignUp from '../views/PatientSignUp.vue'
import LoginPage from '../views/LoginPage.vue'
import RolePage from '../views/RolePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView

    },
    {
      path: '/DoctorSignUp',
      name: 'DoctorSignUp',
      component: DoctorSignUp
    },
    {
      path: '/PatientSignUp',
      name: 'PatientSignUp',
      component: PatientSignUp
    },
    {
      path: '/LoginPage',
      name: 'Login',
      component:LoginPage
    },
    {
      path: '/RolePage',
      name: 'Role',
      component:RolePage
    }




  ]
})

export default router
