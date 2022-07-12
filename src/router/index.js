import {createRouter,createWebHistory } from 'vue-router'
import HelloWorld from "@/views/HelloWorld";
import LandingPage from '@/views/LandingPage'
import SidifyMain from '@/views/SidifyMain'
import MainPage from '@/views/SearchPage'
import ContentItemPage from '@/views/ContentItemPage'
import SidifyPlaylist from '@/views/SidifyPlaylist'

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
    { path: '/search', component: MainPage},
    { path: '/sidify', component: SidifyMain},
    { path: '/sidify/playlist/:id',
        component: SidifyPlaylist,
        props: route => ({
            id : route.params.id
        })
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
