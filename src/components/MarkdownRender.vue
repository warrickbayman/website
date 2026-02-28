<script setup lang="ts">
import {ref} from "vue";
import markdownit from "markdown-it";

const props = defineProps<{
    file: string
}>();

const html = ref('');

const loadMarkdown = async () => {
    const md = markdownit({html: true})
    const markdown = await import(`../../../md/${props.file}?raw`);
    html.value = md.render(markdown.default);
}

loadMarkdown();

</script>

<template>
    <div class="flex items-center p-5 bg-neutral-600" v-if="!html">
        loading...
    </div>
    <div class="typography" v-else v-html="html" />
</template>

<style scoped>

</style>
