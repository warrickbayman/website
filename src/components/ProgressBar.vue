<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps<{
    progress?: number;
    delay?: number;
}>();

const barWidth = ref(0);
onMounted(() => {
    setTimeout(() => {
        barWidth.value = props.progress ?? 0;
    }, props.delay ?? 100);
})

</script>

<template>
    <div class="flex gap-5 items-center">
        <div class="p-1 border h-7 rounded flex-1 flex">
            <div
                class="bg-white transition-all duration-300"
                :style="{
                width: `${barWidth}%`
            }"
            />
        </div>
        <div class="w-12">
            {{ barWidth }}%
        </div>
    </div>
</template>

<style scoped>

</style>
