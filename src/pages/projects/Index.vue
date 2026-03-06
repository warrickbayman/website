<script setup lang="ts">

import TerminalLayout from "@/layouts/TerminalLayout.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";
</script>

<template>
    <TerminalLayout path="/projects" return="/">
        <TerminalMenu menu="projects" />
    </TerminalLayout>
</template>

<style scoped>

</style>
