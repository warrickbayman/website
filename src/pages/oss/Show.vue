<script setup lang="ts">
import {getOss} from "@/composables/oss.ts";
import ProjectLayout from "@/layouts/ProjectLayout.vue";
import MarkdownRender from "@/components/MarkdownRender.vue";

const props = defineProps<{
    name: string
}>();

const project = getOss(props.name);

</script>

<template>
    <ProjectLayout :project="project" :return-path="'/oss'">
        <div class="p-4">
            <MarkdownRender :file="`oss/${name}`" />
        </div>
    </ProjectLayout>
</template>

<style scoped>

</style>
