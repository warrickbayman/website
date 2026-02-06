<script setup lang="ts">
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps<{
    client: string;
}>();

const route = useRoute();

const title = computed(() => {
    switch (route.name) {
        case 'clients.hotpress': return 'hotpress_media.md';
        case 'clients.mycalture': return 'mycalture_marketing.md';
        case 'clients.trc': return 'the_raw_connect.md';
        case 'clients.whodunnit': return 'whodunnit.md';
    }
});

</script>

<template>
    <ReaderLayout :title="title" @close="router.push('/clients')">
        <RouterView />
    </ReaderLayout>
</template>

<style scoped>

</style>
