<script setup lang="ts">
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import MarkdownRender from "@/components/MarkdownRender.vue";
import {getClient} from "@/composables/clients.ts";

const props = defineProps<{
    name: string;
}>();

const client = getClient(props.name);

</script>

<template>
    <ReaderLayout v-if="client" :title="client.title" @close="router.push('/clients')">
        <div class="border border-neutral-500 rounded p-4">
            <img :src="client.logo" :alt="client.title" class="w-50 mb-5" />
            <div>
                <div class="detail">
                    <div class="label">URL:</div>
                    <div>
                        <a :href="client.url" target="_blank" class="underline text-blue-400">{{ client.url }}</a>
                    </div>
                </div>
                <div class="detail">
                    <div class="label">Based:</div>
                    <div>
                        {{ client.location }}
                    </div>
                </div>
                <div class="detail">
                    <div class="label">Roles:</div>
                    <div>
                        {{ client.roles }}
                    </div>
                </div>
                <div class="detail">
                    <div class="label">References:</div>
                    <div>
                        On Request
                    </div>
                </div>
            </div>
        </div>
        <MarkdownRender :file="`clients/${name}`" />
    </ReaderLayout>
</template>

<style scoped>
@reference "../../main.css";

.detail {
    @apply flex flex-col lg:flex-row;
    .label {
        @apply font-bold pr-4 text-neutral-500 w-36 mt-1 lg:mt-0;
    }
}
</style>
