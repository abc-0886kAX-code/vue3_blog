/*
 * @FilePath: \vue3_blog\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-12-07 15:03:20
 * @Description:
 */
import { defineRouter } from "./defineRouter";
import { defineMeta } from "@/router/meta";
export const routes = [
    {
        name: "debug",
        path: "/debug",
        meta: defineMeta(),
        component: () => import("@/pages/Debug/debug.vue"),
    },
    {
        name: "layout",
        path: "/",
        redirect: "",
        meta: defineMeta({ level: 0 }),
        component: () => import("@/layout/Home.vue"),
        children: []
    },
    {
        name: "404",
        path: "/404",
        meta: defineMeta({ title: "404" }),
        component: () => import("@/pages/NotPage/not-page.vue"),
    },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
];
const router = defineRouter(routes);

export function useRouter() {
    return router.core;
}

export function useRoute() {
    return router.core.currentRoute;
}

export const resetRoute = router.reset;

export default router;
