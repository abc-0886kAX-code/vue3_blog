/*
 * @FilePath: \vue3_blog\src\store\useUser.js
 * @Author: zhangxin
 * @Date: 2023-02-07 15:09:09
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-12-07 15:29:28
 * @Description:
 */
import { defineStore } from "pinia";
import { isEmptyString } from "~/shared/is";
import { uuid } from "@/shared/uuid.js";


const paths = ["token"];
export const Namespace = "useUser";

export const useUser = defineStore(Namespace, {
    state: () => ({
        token: uuid(),
    }),

    getters: {
        tokenUnusable() {
            return isEmptyString(this.token);
        },
        tokenUsable() {
            return !this.tokenUnusable;
        },
    },

    actions: {
        setupToken(token) {
            this.token = token;
        },
        emptyUserInfo() {
            this.token = "";
        },
    },

    // 没有权限相关控制，不需要持久化存储
    // persist: {
    //     key: Namespace,
    //     paths,
    // },
});

export function useUserStore() {
    return useUser();
}

export default {
    namespace: Namespace,
    store: useUser,
};
