<!--
 * @FilePath: \vue3_blog\src\pages\Home\Home.vue
 * @Author: zhangxin
 * @Date: 2024-01-09 15:31:50
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-01-09 17:32:23
 * @Description:
-->
<script setup>
const windowWidth = ref(1920)
const windowHeight = ref(1080)
function getWindowResize() {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}
onMounted(() => {
    getWindowResize()
    window.addEventListener('resize', getWindowResize)
})
</script>

<template>
    <div class="home">
        <div class="home-background" :style="{ width: `${windowWidth}px`, height: `${windowHeight}px` }">
            <div class="home-background-mask"></div>
        </div>
        <div class="home-body"></div>
    </div>
</template>

<style scoped lang='scss'>
.home {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    &-background {
        background: url('https://file.mcaoyuan.com/blog/i.jpg') no-repeat center 0px;
        background-position: center 0px;
        background-size: cover;
        text-indent: -999px;

        &-mask {
            width: 100%;
            height: 100%;
            background: rgba(17, 24, 39, 0.5);

        }
    }

    &-body {
        width: 100%;
        height: 600px;
        background: pink;
    }
}
</style>
