import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useMenu } from "@/composables/menu.ts";

export type MenuType = 'main' | 'clients';

export const useTerminalStore = defineStore('terminal', () => {

    const menuKey = ref<MenuType>('main');

    const inputValue = ref('');
    const potentials = ref<string[]>([]);
    const selected = ref<number|null>(null)

    const setMenu = (key: MenuType) => {
        menuKey.value = key;
        clearSelected();
    }

    const menuItems = computed(() => {
        return useMenu().items[menuKey.value];
    });

    const linkableMenuIndex = computed(() => {
        return menuItems.value
            .map((item, index) => !!item.link ? index : null)
            .filter(item => item !== null) as number[];
    });

    const firstIndex = computed(() => linkableMenuIndex.value[0]);
    const lastIndex = computed(() => linkableMenuIndex.value[linkableMenuIndex.value.length - 1]);

    const selectedItem = computed(() => {
        return selected.value ? menuItems.value[selected.value] : null;
    });

    const clearSelected = () => {
        selected.value = null;
        inputValue.value = '';
    }

    const selectNext = () => {

        if (selected.value && lastIndex.value && selected.value < lastIndex.value) {
            selected.value = linkableMenuIndex.value[linkableMenuIndex.value.indexOf(selected.value) + 1]!;
        }

        if (! selected.value) {
            selected.value = linkableMenuIndex.value[0]!;
        }

        inputValue.value = selectedItem.value?.name ?? '';
    }

    const selectPrevious = () => {
        if (selected.value && firstIndex.value && selected.value > firstIndex.value) {

            selected.value = linkableMenuIndex.value[linkableMenuIndex.value.indexOf(selected.value) - 1]!;
        }

        if (! selected.value) {
            selected.value = linkableMenuIndex.value[linkableMenuIndex.value.length - 1]!;
        }

        inputValue.value = selectedItem.value?.name ?? '';
    }

    const autocomplete = () => {
        if (potentials.value.length === 1) {
            selected.value = menuItems.value.findIndex(item => item.name.startsWith(potentials.value[0]!));
            inputValue.value = selectedItem.value?.name ?? '';
            return;
        }
    }

    watch(inputValue, (value: string) => {
        potentials.value = menuItems.value.filter(item => item.name.startsWith(value)).map(item => item.name);

        if (potentials.value.length === 1 && potentials.value[0] === value) {
            selected.value = menuItems.value.findIndex(item => item.name === value);
        }
    });

    return {
        inputValue,
        potentials,
        selected,
        selectedItem,
        setMenu,
        menuItems,
        selectNext,
        selectPrevious,
        clearSelected,
        autocomplete
    }

});
