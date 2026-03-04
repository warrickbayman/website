<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import MarkdownRender from "@/components/MarkdownRender.vue";
</script>

<template>
    <ReaderLayout title="README.md" @close="router.push('/')">
        <MarkdownRender file="README.md" />
    </ReaderLayout>
</template>

<style scoped>
</style>
