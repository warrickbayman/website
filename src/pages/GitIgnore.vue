<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title=".gitignore" @close="router.push('/')">
        logs<br />
        *.log<br />
        npm-debug.log*<br />
        <br/>
        node_modules<br />
        .DS_Store<br />
        dist<br />
        dist-ssr<br />
        coverage<br />
        *.local<br />
        <br />
        .vscode/*<br />
        .idea<br />
    </ReaderLayout>
</template>

<style scoped>

</style>
