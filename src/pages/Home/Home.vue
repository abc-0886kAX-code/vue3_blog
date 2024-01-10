<!--
 * @FilePath: \vue3_blog\src\pages\Home\Home.vue
 * @Author: zhangxin
 * @Date: 2024-01-09 15:31:50
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-01-10 13:39:35
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
            <div class="home-background-mask">
                <h2 class="home-background-mask-label">吴艳祖のBlog</h2>
                <hr class="home-background-mask-divider" />
                <div class="home-background-mask-profile">
                    <p class="home-background-mask-profile-body">The way was long, and wrapped in gloom did seem,As I urged
                        on to
                        seek my vanished dream.</p>
                </div>
            </div>
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

        &-mask {
            width: 100%;
            height: 100%;
            background: rgba(17, 24, 39, 0.5);
            color: #fff;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;

            &-label {
                width: 100%;
                font-size: 32px;
                // font-weight: 700;
                font-family: monospace;
            }

            &-divider {
                width: 4rem;
                border-color: orange;
            }

            &-profile {
                width: 100%;
                display: flex;
                justify-content: center;

                &-body {
                    width: 88ch;
                    animation: typing 2s steps(88), blink .5s step-end infinite alternate;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 3px solid;
                    font-family: monospace;
                    font-size: 1.5em;
                }
            }
        }
    }

    &-body {
        width: 100%;
        height: 600px;
        background: pink;
    }
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes blink {
    50% {
        border-color: transparent
    }
}
</style>
