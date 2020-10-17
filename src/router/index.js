import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Sponsors from '../views/Sponsors.vue'
import Course from '../views/Course.vue'
import Partners from '../views/Partners.vue'
import Team from '../views/Team.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/projects',
  name: 'Projects',
  component: Projects
  },
  {
  path: '/blog',
  name: 'Blog',
  component: Blog
  },
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
  path: '/sponsors',
  name: 'Sponsors',
  component: Sponsors
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
      },
  {
  path: '/course/:name',
  name: 'Course',
  props: true,
  component: Course
  }
]

const router = new VueRouter({

  routes
})
//  mode: "history",
export default router
