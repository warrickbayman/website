<script setup lang="ts">
import {getProject} from "@/composables/projects.ts";
import ProjectLayout from "@/layouts/ProjectLayout.vue";
import {onKeyStroke} from "@vueuse/core";
import router from "@/router";
import MarkdownRender from "@/components/MarkdownRender.vue";

const props = defineProps<{
    name: string
}>();

const project = getProject(props.name);

onKeyStroke('Escape', () => router.push('/projects'));

</script>

<template>
    <ProjectLayout :project="project" return-path="/projects">
        <div class="p-4">
            <MarkdownRender :file="`projects/${name}`" />
        </div>
    </ProjectLayout>
</template>

<style scoped>

</style>
