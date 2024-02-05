<!--
 * @FilePath: \vue3_blog\src\biz\Scrollbar\view\Scrollbar.vue
 * @Author: zhangxin
 * @Date: 2024-02-05 09:46:17
 * @LastEditors: zhangxin
 * @LastEditTime: 2024-02-05 09:48:25
 * @Description:
-->
<script setup>
import { useScrollbarSetup } from "../usecase/useScrollbarSetup.js"
const emits = defineEmits(['scroll']);
const { ScrollbarRefs, setScrollbarTopValue } = useScrollbarSetup();

function handleScrollEvent(target) {
    const { scrollTop } = target;
    setScrollbarTopValue(scrollTop);
    emits('scroll', target);
}
</script>

<template>
    <el-scrollbar ref="ScrollbarRefs" class="scrollbar" @scroll="handleScrollEvent">
        <slot></slot>
    </el-scrollbar>
</template>

<style scoped lang='scss'>
.scrollbar {
    width: 100%;
    height: 100%;
}
</style>
