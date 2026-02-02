<script setup lang="ts">
import TerminalLayout from "@/layouts/TerminalLayout.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";

import { useTerminalStore } from "@/stores/terminal.ts";

const terminal = useTerminalStore();
terminal.setMenu('oss');
</script>

<template>
    <TerminalLayout path="/oss">
        <TerminalMenu menu="oss" />
    </TerminalLayout>
</template>

<style scoped>

</style>
