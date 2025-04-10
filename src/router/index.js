import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RolePage from '../views/RolePage.vue'
import SignUp from '../views/SignUp.vue'
import LocationsPage from '../views/LocationsPage.vue'
import AboutUs from '../views/AboutUs.vue'
import LoginPage from '../views/LoginPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView

    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs

    },
    {
      path: '/LocationsPage',
      name: 'Locations',
      component: LocationsPage

    },
    {
      path: '/LoginPage',
      name: 'Login',
      component: LoginPage

    },
    {
      path: '/RolePage',
      name: 'Role',
      component: RolePage

    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp

    }








  ]
})

export default router
