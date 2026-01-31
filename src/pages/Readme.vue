<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title="README.md" @close="router.push('/')">
        <h1># README</h1>
        <p>
            warrickbayman.com is the official portfolio of Warrick Bayman. The website is built as an SPA using
            Various technologies, but there's no fancy backend or anything. It all happens in your browser.
        </p>
        <div class="flex gap-10 items-center my-5">
            <img src="/svg/vue.svg" class="w-8" alt="Vue" />
            <img src="/svg/vueuse.svg" class="w-8" alt="VueUse" />
            <img src="/svg/pinia.svg" class="w-7 -mt-2" alt="Pinia" />
        </div>
        <h2>Contributing</h2>
        <p>
            Contributions are not currently open to the public. Sorry.
        </p>
        <h2>Privacy Policy</h2>
        <p>
            If you happen to use this website to insert any personal data, I promise, cross-my-heat, and all that, to
            look after it. I won't share your data with anyone. Not even if they ask nicely.
        </p>
        <p>
            The website doesn't use any cookies, so you're good there.
        </p>
        <h2>License</h2>
        <p>
            My website is licensed under the MIT license. You can find it on GitHub at
            https://github.com/warrickbayman/warrickbayman.com.
        </p>
        <h2>Copyright</h2>
        <p>
            All content on this website is protected by Copyright.
        </p>
        <p>
            Copyright {{ new Date().getFullYear() }} <strong>WARRICK BAYMAN</strong>. All rights reserved.
        </p>
    </ReaderLayout>
</template>

<style scoped>
</style>
