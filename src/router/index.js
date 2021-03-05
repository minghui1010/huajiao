import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const Footer = () => import('../components/Footer.vue')
const Index = () => import('../components/Index.vue')
const Anl = () => import('../components/Anl.vue')
Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  // mode:history,
  routes: [
    {
      path: '/',
      redirect: '/Home', //重定向
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },

    {
      path: '/Index',
      name: 'index',
      component: Index
    },
    {
      path: '/Anl',
      name: 'anl',
      component: Anl
    },
    {
      path: '/Footer',
      name: 'footer',
      component: Footer,
    },
  ]
})
