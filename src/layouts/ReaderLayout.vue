<script setup lang="ts">
import { XIcon } from "lucide-vue-next";
import { onKeyStroke } from "@vueuse/core";
import { ref } from "vue";
import { FileIcon } from "lucide-vue-next";

defineProps<{
    title?: string;
}>();

const emit = defineEmits<{
    (event: 'close'): void,
}>();

onKeyStroke(e => (e.ctrlKey && e.key === 'c') || e.key === 'Escape', () => {
    emit('close');
})

const contentRef = ref<HTMLElement>();

onKeyStroke(e => e.ctrlKey && e.key === 'a', () => contentRef.value?.scrollTo({left: 0, top: 0, behavior: 'smooth'}))
onKeyStroke(e => e.ctrlKey && e.key === 'e', () => contentRef.value?.scrollTo({left: 0, top: contentRef.value?.scrollHeight, behavior: 'smooth'}))
onKeyStroke('ArrowDown', () => contentRef.value?.scrollBy({left: 0, top: 20, behavior: 'smooth'}))
onKeyStroke('ArrowUp', () => contentRef.value?.scrollBy({left: 0, top: -20, behavior: 'smooth'}))

</script>

<template>
    <div class="h-full p-7">
        <div class="border border-neutral-200 h-full rounded flex flex-col">
            <div class="border-b border-neutral-200 p-3 flex items-center gap-3">
                <div class="font-bold flex items-center gap-3">
                    <FileIcon class="size-5" />
                    {{ title }}
                </div>
                <div class="text-neutral-600 ml-auto flex items-center gap-3 text-sm">
                    <div>
                        <strong class="text-neutral-400">Ctrl-A</strong>
                        Top
                    </div>
                    <div class="h-5 border-r border-neutral-400"></div>
                    <div>
                        <strong class="text-neutral-400">Ctrl-E</strong>
                        Bottom
                    </div>
                    <div class="h-5 border-r border-neutral-400"></div>
                    <div>
                        <strong class="text-neutral-400">Ctrl-C</strong> to close
                    </div>
                </div>
                <button @click.prevent="emit('close')" class="p-1 rounded hover:bg-neutral-700">
                    <XIcon class="size-4" />
                </button>
            </div>
            <div class="p-3 typography flex-1 overflow-auto" ref="contentRef">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
