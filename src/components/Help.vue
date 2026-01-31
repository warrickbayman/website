<script setup lang="ts">
import {onKeyStroke} from "@vueuse/core";
import {ref} from "vue";

const showHelp = ref(localStorage.getItem('help') === 'yes');

const saveHelpStatus = () => {
    if (showHelp.value) {
        localStorage.setItem('help', 'yes');
        return;
    }

    localStorage.removeItem('help');
}

onKeyStroke('F1', () => {
    showHelp.value = !showHelp.value;
    saveHelpStatus();
});

const keys: {key: string, description: string}[] = [
    {
        key: 'F1',
        description: 'Show this help',
    },{
        key: '↑',
        description: 'Navigate up',
    },{
        key: '↓',
        description: 'Navigate down',
    },{
        key: 'Cmd-↑',
        description: 'Scroll up',
    },{
        key: 'Cmd-↓',
        description: 'Scroll down',
    },{
        key: 'Tab',
        description: 'Auto complete',
    },{
        key: 'Esc',
        description: 'Clear selection',
    }
]
</script>

<template>
    <Transition name="help">
        <div class="absolute right-0 top-5 text-neutral-500 px-5 space-y-2" v-if="showHelp">
            <div class="flex items-center gap-3" v-for="(key, index) in keys" :key="index">
                <div class="font-bold w-15 text-center">
                    <div class="rounded border border-neutral-700 bg-neutral-800 text-neutral-400 text-sm py-1">
                        {{ key.key }}
                    </div>
                </div>
                <div>{{ key.description }}</div>
            </div>
            <div class="text-sm mt-2 text-neutral-600 max-w-60">
                Type out the item you want and hit ENTER to execute.
            </div>
        </div>
    </Transition>

</template>

<style scoped>
@reference "../main.css";

.help-enter-active, .help-leave-active {
    @apply transition-all duration-300 ease-in-out;
}
.help-enter-from, .help-leave-to {
    @apply translate-x-full;
}
.help-enter-to, .help-leave-from {
    @apply translate-x-0;
}
</style>
