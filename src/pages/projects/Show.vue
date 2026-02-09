<script setup lang="ts">
import router from "@/router";
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import {computed} from "vue";

const project = computed(() => {
    return {};
});

</script>

<template>
    <ReaderLayout :title="project.title" @close="router.push('/projects')">
    </ReaderLayout>
</template>

<style scoped>

</style>
