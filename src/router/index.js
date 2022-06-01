import {createRouter,createWebHistory } from 'vue-router'
import HelloWorld from "@/views/HelloWorld";
import LandingPage from "@/views/LandingPage"
import MainPage from '@/views/SearchPage'

const routes = [
    { path: '/landingpage', component: LandingPage},
    { path: '/', component: HelloWorld},
    { path: '/search', component: MainPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
