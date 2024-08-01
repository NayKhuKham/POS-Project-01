import { createWebHistory, createRouter } from "vue-router";
// import page
import store from "../Pages/store.vue";
import pos from "../Pages/pos.vue";
import transaction from "../Pages/Transaction.vue";
import report from "../Pages/report.vue";
import notfound404 from "../Pages/notfound404.vue";

export const routes = [
    {
    name: "store",
    path: "/store",
    component: store
    },
    {
    name: "pos",
    path: "/pos",
    component: pos
    },
    {
    name: "transaction",
    path: "/transaction",
    component: transaction
    },
    {
    name: "report",
    path: "/report",
    component: report
    },
    {
    name: "notfound404",
    path: "/:pathmatch(.*)*",
    component: notfound404
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
        scrollBehavior () {
        window.scrollTo(0,0)
    }
});
export default router;