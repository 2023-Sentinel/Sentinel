import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import ScnMakePage from "@/components/ScnMakePage.vue";
import ScnSelectPage from "@/components/ScnSelectPage.vue";
import DashboardPage from "@/components/Dashboard.vue";
import ErrorPage from "@/pages/ErrorPage.vue"
import BoardPage from "@/components/BoardPage.vue";

import {createRouter, createWebHashHistory} from "vue-router";
import BoardMakePage from "@/components/BoardMakePage.vue";

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
      path : "/Dashboard/:id",
        name : "Dashboard",
        component : DashboardPage
    },
    {
        path : "/:pathMatch(.*)",
        name : "not-found",
        component : ErrorPage
    },
    {
        path : "/Board",
        name : "Board",
        component: BoardPage
    },
    {
        path : "/BoardMake",
        name : "BoardMake",
        component: BoardMakePage
    }



]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;