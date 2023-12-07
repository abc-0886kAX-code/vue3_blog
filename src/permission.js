/*
 * @FilePath: \vue3_blog\src\permission.js
 * @Author: zhangxin
 * @Date: 2022-11-11 12:26:15
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-12-07 15:18:44
 * @Description:
 */
import { useRouter } from "@/router/useRouter";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { useUserStore } from "@/store/useUser";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const noNeedToken = ["/debug", "/404"]; // 不需要校验token的路由

const router = useRouter();

router.beforeEach(async (to, from, next) => {
    const user = useUserStore();
    // start progress bar
    NProgress.start();

    // set page title
    document.title = to.meta.title ?? "vue3_blog";

    if (
        noNeedToken.findIndex((item) => {
            return to.path.indexOf(item) !== -1;
        }) !== -1
    ) {
        // in the free login whitelist, go directly
        next();
        NProgress.done();
    } else {
        // determine whether the user has logged in
        if (user.tokenUsable) {
            next();
            NProgress.done();
        } else {
            next("/404");
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});
