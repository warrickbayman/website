<script setup lang="ts">
import TerminalMenuItem from "@/components/TerminalMenuItem.vue";
import { onKeyStroke } from "@vueuse/core";
import {type MenuType, useTerminalStore} from "@/stores/terminal.ts";
import {onMounted, ref} from "vue";
import type {MenuItem} from "@/types";

const props = defineProps<{
    menu: MenuType;
    delay?: number;
    esc?: boolean;
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
    <div ref="menuContent" class="overflow-hidden relative text-sm md:text-base">
        <table>
            <tbody>
            <tr v-if="menuItems.length > 0">
                <td colspan="7">
                    <div class="flex gap-5">
                        <div>
                            total {{ terminal.menuItems.length }}
                        </div>
                        <div class="text-neutral-600" v-if="esc">
                            (ESC to go back)
                        </div>
                    </div>
                </td>
            </tr>
            <template v-for="(item, index) in menuItems" :key="index">
                <TerminalMenuItem :item="item" />
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>
