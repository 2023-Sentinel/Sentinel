import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import ScnMakePage from "@/components/ScnMakePage.vue";
import ScnSelectPage from "@/components/ScnSelectPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue"

import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {
        path: "/ScnMake",
        name : "ScnMake",
        component : ScnMakePage
    },
    {
        path : "/ScnSelect",
        name : "ScnSel",
        component : ScnSelectPage
    },
    {
        path : "/:pathMatch(.*)",
        name : "not-found",
        component : ErrorPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;