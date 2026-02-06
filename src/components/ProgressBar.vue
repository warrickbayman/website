<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

const props = defineProps<{
    progress?: number|number[];
    delay?: number;
}>();

const bar1Width = ref(0);
const bar2Width = ref(0);

const value = computed(() => {
    if (props.progress instanceof Array) {
        return props.progress[0] + '% - ' + props.progress[1] + '%';
    }

    return props.progress + '%';
})

onMounted(() => {
    setTimeout(() => {
        if (props.progress instanceof Array) {
            bar1Width.value = props.progress[0] ?? 0;
            bar2Width.value = props.progress[1] ?? 0;
        } else {
            bar1Width.value = props.progress ?? 0;
        }
    }, props.delay ?? 100);
})

</script>

<template>
    <div>
        <div class="flex">
            <div class="p-1 border h-7 rounded-l flex-1 relative">
                <div
                    class="absolute top-1 bottom-1 bg-cyan-400 transition-all duration-500 z-20"
                    :style="{
                    width: `${bar1Width}%`
                }"
                />
                <div
                    class="absolute top-1 bottom-1 bg-neutral-700 transition-all duration-300 z-10"
                    :style="{
                    width: `${bar2Width}%`
                }"
                />
            </div>
            <div class="w-32 justify-center flex bg-neutral-700 rounded-r border-r border-y items-center px-2">
                {{ value }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
