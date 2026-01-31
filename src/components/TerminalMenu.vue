<script setup lang="ts">
import MainMenuItem from "@/components/MainMenuItem.vue";
import { onKeyStroke } from "@vueuse/core";
import {type MenuType, useTerminalStore} from "@/stores/terminal.ts";

const props = defineProps<{
    menu: MenuType,
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

</script>

<template>
    <div>
        <table>
            <tr>
                <td colspan="7">
                    total 4996
                </td>
            </tr>
            <template v-for="(item, index) in terminal.menuItems" :key="index">
                <MainMenuItem :item="item" />
            </template>
        </table>
    </div>
</template>

<style scoped>
</style>
