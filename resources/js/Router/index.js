import { createWebHistory, createRouter } from "vue-router";
// import page
import store from "../Pages/store.vue";
import pos from "../Pages/pos.vue";
import transaction from "../Pages/Transaction.vue";
import report from "../Pages/report.vue";
import notfound404 from "../Pages/notfound404.vue";

import { useStore } from "../Store/auth";

export const routes = [
    {
    name: "store",
    path: "/store",
    component: store,
    meta:{
        requiresAuth : true
    }
    },

    {
    name: "pos",
    path: "/pos",
    component: pos,
    meta:{
        requiresAuth : true
    }
    },

    {
    name: "transaction",
    path: "/transaction",
    component: transaction,
    meta:{
        requiresAuth : true
    }
    },

    {
    name: "report",
    path: "/report",
    component: report,
    meta:{
        requiresAuth : true
    }
    },

    {
    name: "notfound404",
    path: "/:pathmatch(.*)*",
    component: notfound404,
    meta:{
        requiresAuth : true
    }
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
        scrollBehavior () {
        window.scrollTo(0,0)
    }
});


router.beforeEach((to,from,next)=>{

    const token = localStorage.getItem('web_token');
    const user = localStorage.getItem('web_user');
    const store = useStore();

    // ກວດວ່າມີ token ຫຼືບໍ່
    if(token){
        store.set_token(token);
        store.set_user(JSON.parse(user));

        if(to.path == '/login' || to.path == '/register'){
            return next({
                path:'/',
                replace: true
            })
        }

    } else {
        store.remove_token()
        store.remove_user()
    }

    if(to.meta.requiresAuth){
        if(!token){
            return next({
                path:'/login',
                replace: true
            })
        }
    }
    next()
})


export default router;