<!--
 * @FilePath: \vue3_blog\src\pages\Home\Home.vue
 * @Author: zhangxin
 * @Date: 2024-01-09 15:31:50
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-02-05 10:38:02
 * @Description:
-->
<script setup>
import { useScrollbar } from "@/biz/Scrollbar/usecase/useScrollbarSetup.js";
const { ref: scrollbarRef, top } = useScrollbar();
const windowWidth = ref(1920)
const windowHeight = ref(1080)
function getWindowResize() {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}

const isShowArrow = computed(() => {
    return unref(top) === 0
})

function skipPosition() {
    smoothScrollTo(unref(scrollbarRef).wrapRef, unref(windowHeight), 500);
}

function smoothScrollTo(element, target, duration) {
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();

    function animateScroll(timestamp) {
        const elapsed = timestamp - startTime;
        const fraction = Math.min(elapsed / duration, 1);

        element.scrollTop = start + change * fraction;

        if (fraction < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    requestAnimationFrame(animateScroll);
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
                <IconGrommetIconsDown v-show="isShowArrow" class="home-background-mask-downward" @click="skipPosition" />
            </div>
        </div>
        <div class="home-body" :style="{ height: `${windowHeight}px` }">
            <div class="home-body-content">

            </div>
        </div>
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
                    animation: typing 5s steps(88), blink .5s step-end infinite alternate;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 3px solid;
                    font-family: monospace;
                    font-size: 1.5em;
                }
            }

            &-downward {
                width: 2rem;
                height: 2rem;
                position: absolute;
                left: 48%;
                bottom: 3rem;
                animation: fadeinT 2s infinite linear;
                cursor: pointer;
            }
        }
    }

    &-body {
        width: 100%;
        height: 600px;
        background: #fff;

        &-content {
            width: 60%;
            height: 100%;
            margin: 2rem auto;
            box-sizing: border-box;
        }
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



@keyframes fadeinT {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
