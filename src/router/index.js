import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import page404 from '../views/page404.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard/:somePage',
    name: 'dashBoard',
    component: DashBoard
  },


  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add/payment/:category',
    name: 'AddPaymentForm',
    component: AddPaymentForm

  },

  {

    path: '*',
    name: "page404",
    component: page404,
  },
  // {
  //   path: '*',
  //   redirect: { name: 'NotFound' }
  // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const userAuthExists = true // зададим текущее состояние, для примера
router.beforeEach((to, from, next) => {
  if (to.name !== 'page404' && !userAuthExists) {
    next({
      name: 'page404'
    })
  } else {
    next()
  }
})

const getTitleByRouteName = routeName => {
  return {
    'dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
  } [routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})

export default router