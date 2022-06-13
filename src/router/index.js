import {createRouter,createWebHistory } from 'vue-router'
import HelloWorld from "@/views/HelloWorld";
import LandingPage from "@/views/LandingPage"
import MainPage from '@/views/SearchPage'
import ContentItemPage from '@/views/ContentItemPage'

const routes = [
    { path: '/landingpage', component: LandingPage},
    { path: '/',
      component: HelloWorld,
    },
    { path: '/contentItem/:category/:id',
        component: ContentItemPage,
        props: route => ({
            category: parseInt(route.params.category),
            id : route.params.id
        })
    },
    { path: '/search', component: MainPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
