<script setup lang="ts">
import {getOss} from "@/composables/oss.ts";
import ProjectLayout from "@/layouts/ProjectLayout.vue";

const props = defineProps<{
    name: string
}>();

const project = getOss(props.name);

</script>

<template>
    <ProjectLayout :project="project" :return-path="'/oss'">
        <component :is="project?.component" />
    </ProjectLayout>
</template>

<style scoped>

</style>
