<!--
 * @FilePath: \vue3_blog\src\layout\Layout.vue
 * @Author: zhangxin
 * @Date: 2023-04-12 13:14:28
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-02-05 09:49:08
 * @Description:
-->
<script setup>
import Scrollbar from "@/biz/Scrollbar/view/Scrollbar.vue";
import { useMenu } from "@/hooks/useMenu.js";
import { transArray } from "~/shared/trans";
const { proxy } = getCurrentInstance();
const defaultActive = computed(() => {
    return proxy.$route.name;
});
const menulist = computed(() => {
    return transArray(proxy.$router.getRoutes().filter((item) => item.name === 'layout')[0]?.children, []);
});
const menu = useMenu();
function setActive(name) {
    return eq(unref(defaultActive), name) ? '•' : '';
}

const headerClassName = ref('');

const menuColor = computed(() => {
    return unref(headerClassName) ? { color: '#000' } : { color: '#fff' };
})

function handleScrollEvent({ scrollTop }) {
    if (scrollTop > 80) {
        headerClassName.value = 'fixed-header';
        return;
    }
    headerClassName.value = '';
}

function openGithub() {
    window.open('https://github.com/abc-0886kAX-code')
}

</script>

<template>
    <div class="layout">
        <Scrollbar class="layout-scrollbar" @scroll="handleScrollEvent">
            <transition name="el-fade-in-linear">
                <div class="layout-scrollbar-header" :class="headerClassName">
                    <div class="layout-scrollbar-header-menu" :style="menuColor">
                        <template v-for="item in menulist" :key="item.name">
                            <div class="layout-scrollbar-header-menu-item">
                                {{ menu.getTitle(item) + setActive(item.name) }}

                            </div>
                        </template>
                    </div>
                    <div class="layout-scrollbar-header-console" :style="menuColor">
                        <IconGrommetIconsSun class="layout-scrollbar-header-console-item" />
                        <IconGrommetIconsGithub @click="openGithub" class="layout-scrollbar-header-console-item" />
                    </div>
                </div>
            </transition>
            <div class="layout-scrollbar-body">
                <RouterView v-slot="{ Component }">
                    <transition name="el-fade-in-linear">
                        <component :is="Component" />
                    </transition>
                </RouterView>
            </div>
        </Scrollbar>
    </div>
</template>

<style scoped lang="scss">
.layout {
    background-color: transparent;
    width: 100%;
    height: 100%;

    &-scrollbar {
        width: 100%;
        height: 100%;

        &-header {
            position: absolute;
            top: 0;
            height: 56px;
            width: 100%;
            background-color: transparent;
            margin: 0 auto;
            padding: 0 11%;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            z-index: 99;

            &-menu {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &-item {
                    margin-right: 20px;
                    font-size: 15px;
                    letter-spacing: 2px;
                    cursor: pointer;
                }
            }

            &-console {
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                &-item {
                    cursor: pointer;
                    width: 24px;
                    height: 24px;
                    margin-right: 15px;
                }
            }
        }

        &-body {
            width: 100%;
            height: 100%;
            overflow-y: auto;
        }
    }


}

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    background-color: #fff;
}

@-webkit-keyframes fade {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: 0;
        top: -80px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
}


:deep(.el-scrollbar__bar.is-horizontal) {
    display: none;
}
</style>
