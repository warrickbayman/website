<script setup lang="ts">
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import {computed} from "vue";

const props = defineProps<{
    client: string;
}>();

const title = computed(() => {
    switch (props.client) {
        case 'hotpress': return 'hotpress_media.md';
        case 'mycalture': return 'mycalture_marketing.md';
        case 'trc': return 'the_raw_connect.md';
        case 'whodunnit': return 'whodunnit.md';
    }
});

</script>

<template>
    <ReaderLayout :title="title" @close="router.push('/clients')">
        Show Client {{ client }}
    </ReaderLayout>
</template>

<style scoped>

</style>
