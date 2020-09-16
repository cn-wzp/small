import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Top from '../views/Top.vue'
import Page from '../views/Page.vue'
import Detali from '../views/Detali.vue'

Vue.use(VueRouter)

const routes=[
    {
        path: '/:id?',
        name: 'List',
        component: List,
        children:[{
            path:'/',
            name:'Top',
            components:{
                default:Top,
                top:Top,
                page:Page,
             }
        }]
    },
    {
        path:"topic/:txt?",
        name:'Detali',
        component:Detali,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
   routes
  })
  
export default router
  