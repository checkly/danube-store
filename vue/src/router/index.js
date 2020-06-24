import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import Shop from '@/components/Shop'
import Detail from '@/components/Detail'
import vueResource from 'vue-resource';

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
    }
  ],
  mode: 'history'
})
