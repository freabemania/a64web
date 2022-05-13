import {createRouter,createWebHistory } from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import MainPage from '@/views/MainPage'

const routes = [
    { path: '/', component: HelloWorld},
    { path: '/sune', component: MainPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
