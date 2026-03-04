<script setup lang="ts">
import {ref} from "vue";
import markdownit from "markdown-it";

const props = defineProps<{
    file: string
}>();

const html = ref('');

const loadMarkdown = async () => {
    const response = await fetch(`/md/${props.file}`);

    if (! response.ok) {
        return;
    }

    const data = await response.text();

    const md = markdownit({html: true})

    html.value = md.render(data);
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
