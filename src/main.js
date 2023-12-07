/*
 * @FilePath: \vue3_blog\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-12-07 15:15:38
 * @Description:
 */
import { createApp } from 'vue'
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import "./permission";
import App from "@/layout/App.vue";
import "normalize.css";
import "@/assets/style/index.scss";

createApp(App).use(extendRouter).use(extendPinia).mount("#app");
