<script setup lang="ts">
import MainMenuItem from "@/components/MainMenuItem.vue";
import { onKeyStroke } from "@vueuse/core";
import {type MenuType, useTerminalStore} from "@/stores/terminal.ts";
import {onMounted, ref} from "vue";
import type {MenuItem} from "@/types";

const props = defineProps<{
    menu: MenuType;
    delay?: number;
}>();

const terminal = useTerminalStore();

terminal.setMenu(props.menu);

onKeyStroke(e => e.key === 'ArrowUp' && !e.metaKey, (e) => {
    e.preventDefault();
    terminal.selectPrevious();
})

onKeyStroke(e => e.key === 'ArrowDown' && !e.metaKey, (e) => {
    e.preventDefault();
    terminal.selectNext();
})

onKeyStroke('Enter', () => {
    if (! terminal.selected) return;
});

const menuContent = ref<HTMLElement>();

const menuItems = ref<MenuItem[]>([])

onMounted(async () => {

    await new Promise(resolve => setTimeout(resolve, props.delay));

    let row = 0;
    let interval = setInterval(() => {
        menuItems.value.push(terminal.menuItems[row]!);
        row++;

        if (row > terminal.menuItems.length - 1) {
            clearInterval(interval);
        }
    }, 33);
})

</script>

<template>
    <div ref="menuContent" class="overflow-hidden relative">
        <table>
            <tbody>
            <tr v-if="menuItems.length > 0">
                <td colspan="7">
                    total {{ terminal.menuItems.length }}
                </td>
            </tr>
            <template v-for="(item, index) in menuItems" :key="index">
                <MainMenuItem :item="item" />
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>
