<script setup lang="ts">

import Help from "@/components/Help.vue";
</script>

<template>
    <main class="h-screen max-h-screen flex flex-col bg-gray-500 p-2 overflow-hidden">
        <div class=" h-full bg-linear-to-br from-term-from to-term-to rounded-2xl overflow-hidden shadow-xl text-foreground flex flex-col">
            <div class="h-full w-full overflow-hidden relative">
                <RouterView />

                <Help />
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>
