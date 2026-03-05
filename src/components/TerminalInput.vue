<script setup lang="ts">

import { onKeyStroke } from "@vueuse/core";
import { useTerminalStore } from "@/stores/terminal.ts";
import type {MenuItem} from "@/types";
import router from "@/router";

defineProps<{
    placeholder?: string;
}>();

const emit = defineEmits<{
    (e: 'editing'): void
    (e: 'execute', value: MenuItem): void
    (e: 'autocomplete', value: string): void
}>();

const terminal = useTerminalStore();

onKeyStroke(e => canHandleKeyStroke(e), (e: KeyboardEvent) => handleKeyStroke(e));

const canHandleKeyStroke = (e: KeyboardEvent) => {
    if (e.key === 'Backspace' || e.key === 'Tab' || e.key === 'Escape' || e.key === 'Enter') return true;

    const regex = /[a-zA-Z0-9.\/\-_]/;
    return regex.test(e.key) && e.key.length === 1;
}

const handleKeyStroke = (e: KeyboardEvent) => {

    emit('editing');

    if (e.key === 'Escape') {
        terminal.clearSelected();
        return;
    }

    if (e.key === 'Tab') {
        e.preventDefault();

        terminal.autocomplete();

        return;
    }

    if (e.key === 'Backspace') {
        terminal.inputValue = terminal.inputValue.slice(0, -1);
        if (!terminal.potentials.includes(terminal.inputValue)) {
            terminal.selected = null;
        }

        return;
    }

    if (e.key === 'Enter' && terminal.selectedItem) {

        if (! terminal.selectedItem.link) {
            return;
        }

        router.push(terminal.selectedItem.link);
        return;
    }

    if (e.key === 'Enter' || e.key === 'Shift') return;

    terminal.inputValue += e.key;

    if (!terminal.potentials.includes(terminal.inputValue)) {
        terminal.selected = null;
    }
}

</script>

<template>
    <div class="flex items-center whitespace-nowrap">
        <div v-html="terminal.inputValue" />
        <div class="inline-block h-5 w-1 rounded bg-white/50 animate-caret-blink"></div>
        <div v-if="!!placeholder && !terminal.inputValue" class="text-sm text-neutral-500">{{ placeholder }}</div>
    </div>
</template>

<style scoped>

</style>
