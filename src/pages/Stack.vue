<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title="stack.md" @close="router.push('/')">
        <p>
            My current stack
        </p>
    </ReaderLayout>
</template>

<style scoped>

</style>
