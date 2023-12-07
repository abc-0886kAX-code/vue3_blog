<!--
 * @FilePath: \vue3_blog\src\layout\Home.vue
 * @Author: zhangxin
 * @Date: 2023-04-12 13:14:28
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-12-07 16:09:09
 * @Description:
-->
<script setup>
const headerClassName = ref('')
function handleScrollEvent({ scrollTop }) {
    if (scrollTop > 80) {
        headerClassName.value = 'fixed-header';
        return;
    }
    headerClassName.value = '';
}
</script>

<template>
    <div class="home">
        <el-scrollbar @scroll="handleScrollEvent">
            <transition name="el-fade-in-linear">
                <div class="home-header" :class="headerClassName"></div>
            </transition>
            <div class="home-body"></div>
        </el-scrollbar>
        <!-- <RouterView v-slot="{ Component }">
            <transition name="el-fade-in-linear">
                <component :is="Component" />
            </transition>
        </RouterView> -->
    </div>
</template>

<style scoped lang="scss">
.home {
    background-color: transparent;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    &-header {
        height: 80px;
        width: 100%;
        background-color: pink;
        border: 1px solid #ccc;
    }

    &-body {
        width: 100%;
        height: 3000px;
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
