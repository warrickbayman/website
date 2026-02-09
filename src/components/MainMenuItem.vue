<script setup lang="ts">
import type {MenuItem} from "@/types";
import {RouterLink} from "vue-router";
import {computed} from "vue";
import { useTerminalStore } from "@/stores/terminal.ts";

const terminalStore = useTerminalStore();

const props = defineProps<{
    item: MenuItem;
}>();

const itemType = computed(() => props.item.link ? RouterLink : 'div')
</script>

<template>
    <tr>
        <td class="text-neutral-400">{{ item.directory ? 'd' : '-' }}{{ item.permissions ?? 'rwxr-xr-x'}}</td>
        <td class="text-neutral-400 hidden">{{ item.owner ?? 'warrick' }}</td>
        <td class="text-neutral-400 hidden">{{ item.group ?? 'warrick' }}</td>
        <td class="text-neutral-400 text-right hidden">{{ item.size ?? '4096' }}</td>
        <td class="text-neutral-400 hidden">{{ item.month ?? 'Jan' }}</td>
        <td class="text-neutral-400 text-right">{{ item.time ?? '2026' }}</td>
        <td>
            <component :to="item.link" :is="itemType" class="rounded inline-block -ml-2 px-2" :class="{
                'text-white': !item.directory && !item.executable,
                'text-blue-400': item.directory,
                'text-green-400': item.executable,
                'bg-neutral-700': terminalStore.selectedItem?.name === item.name,
                'hover:bg-neutral-700': !!item.link,
            }">
                <div class="flex" v-if="terminalStore.inputValue && terminalStore.potentials.includes(item.name)">
                    <span class="bg-cyan-500 text-cyan-100 rounded">{{ terminalStore.inputValue }}</span>
                    <span>{{ item.name.substring(terminalStore.inputValue.length) }}</span>
                </div>
                <template v-else>
                    {{ item.name }}
                </template>
            </component>
        </td>
    </tr>

</template>

<style scoped>
@reference "../main.css";

tr {
    td {
        @apply pb-1
    }
    td:not(:first-child) {
        @apply px-2;
    }
    td:first-child {
        @apply pr-2;
    }
}
</style>
