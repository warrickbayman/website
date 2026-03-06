<script setup lang="ts">

import TerminalInput from "@/components/TerminalInput.vue";
import { ref} from "vue";
import {onKeyStroke} from "@vueuse/core";
import router from "@/router";

const props = defineProps<{
    path?: string;
    return?: string;
}>();

const terminalRef = ref<HTMLElement>();

onKeyStroke(() => {
    editing()
})

onKeyStroke(e => e.key === 'ArrowUp' && e.metaKey, e => {
    e.preventDefault();
    terminalRef.value?.scrollBy({left: 0, top: -20, behavior: 'smooth'});
});

onKeyStroke(e => e.key === 'ArrowDown' && e.metaKey, e => {
    e.preventDefault();
    terminalRef.value?.scrollBy({left: 0, top: 20, behavior: 'smooth'});
});

onKeyStroke('Escape', (e) => {
    if (props.return) {
        e.preventDefault();
        router.push(props.return);
    }
})

const editing = () => {
    terminalRef.value?.scrollTo({left: 0, top: terminalRef.value.scrollHeight, behavior: 'smooth'})
}

</script>

<template>
    <div class="flex flex-col-reverse h-full overflow-auto" ref="terminalRef">
        <div class="hidden md:flex z-10 items-center gap-2 sticky bottom-0 px-7 py-3 border-t border-neutral-700 bg-neutral-800">
            <div>
                $
            </div>
            <TerminalInput
                placeholder="Use arrow keys to navigate, or type the name of the file or directory. Press F1 for help!"
            />
        </div>
        <div
            class="leading-normal max-w-3xl px-7 pt-7 pb-3"
        >
            <div v-if="$slots.intro" class="mb-7">
                <slot name="intro" />
            </div>
            <div class="text-directory text-sm mb-2">
                ubuntu@portfolio <span class="text-cyan-600">/home/warrickbayman{{ path }}</span>
            </div>

            <slot />
        </div>
    </div>
</template>

<style scoped>

</style>
