import * as VueRouter from 'vue-router';

import Page1 from "../components/Page1.vue";
import Page2 from "../components/Page2.vue";

let routes = [
    {
        path: '/page1',
        component: Page1
    },
    {
        path: '/page2',
        component: Page2
    }
];

let router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

export default router;
