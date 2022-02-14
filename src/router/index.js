import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import( /* webpackChunkName: "about" */ '../views/DashBoard.vue')
  },

  {
    path: '/dashboard/:page',
    name: 'DashBoardPage',
    component: () => import( /* webpackChunkName: "about" */ '../views/DashBoard.vue')
  },
  
  


  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add/payment/:category',
    name: 'AddPaymentForm',
    component: () => import( /* webpackChunkName: "about" */ '../components/AddPaymentForm.vue')

  },

  {

    path: '*',
    name: "page404",
    component: () => import( /* webpackChunkName: "about" */ '../views/page404.vue')
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
    'DashBoard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
  } [routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})

export default router