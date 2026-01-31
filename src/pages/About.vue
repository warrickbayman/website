<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title="about_me.md" @close="router.push('/')">
        <h1>ABOUT</h1>
    </ReaderLayout>
</template>

<style scoped>

</style>
