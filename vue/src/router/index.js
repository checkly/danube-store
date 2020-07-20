import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import Shop from '@/components/Shop'
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Recap from '@/components/Recap'
import Account from '@/components/Account'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {
      path: '/',
      components: { componentSidebar: Sidebar, componentShop: Shop }
    },
    {
      path: '/books/:id', 
      components: { componentSidebar: Sidebar, componentDetail: Detail }
    },
    {
      path: '/cart',
      components: { componentCart: Cart }
    },
    {
      path: '/checkout',
      components: { componentCheckout: Checkout }
    },
    {
      path: '/recap',
      components: { componentRecap: Recap }
    },
    {
      path: '/search',
      components: { componentSidebar: Sidebar, componentShop: Shop }
    },
    {
      path: '/category',
      components: { componentSidebar: Sidebar, componentShop: Shop }
    },
    {
      path: '/account',
      components: { componentAccount: Account }
    }
  ],
  mode: 'history'
})
