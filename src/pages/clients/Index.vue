<script setup lang="ts">
import TerminalLayout from "@/layouts/TerminalLayout.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";
</script>

<template>
    <TerminalLayout path="/clients" return="/">
        <TerminalMenu menu="clients" :esc="true" />
    </TerminalLayout>
</template>

<style scoped>

</style>
