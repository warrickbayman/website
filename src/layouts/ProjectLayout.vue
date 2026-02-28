<script setup lang="ts">
import {onKeyStroke} from "@vueuse/core";
import {XIcon} from "lucide-vue-next";
import router from "@/router";
import type {Project} from "@/types";

const props = defineProps<{
    project: Project|null,
    returnPath: string,
}>();

onKeyStroke((e) => e.ctrlKey && e.key === 'o', () => props.project && props.project.url ? window.open(props.project.url, '_blank') : null);
onKeyStroke('Escape', () => router.push(props.returnPath));
</script>

<template>
    <div class="p-5 lg:p-7 flex flex-col gap-5 max-h-full h-full overflow-hidden" v-if="project">
        <div
            class="border p-4 rounded flex-none border-neutral-500"
        >
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="flex justify-between">
                        <div class="flex gap-2">
                            <div class="text-neutral-400">Project name:</div>
                            <div class="font-bold">{{ project.name }}</div>
                        </div>
                        <RouterLink :to="returnPath" class="flex gap-2 items-center">
                            <XIcon />
                            <span class="text-neutral-500">Close</span>
                            (Esc)
                        </RouterLink>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex gap-2">
                            <div class="text-neutral-400">Client:</div>
                            <div class="font-bold">{{ project.client }}</div>
                        </div>
                        <div class="border-r border-neutral-400" />
                        <div class="flex gap-2">
                            <template v-if="project.url">
                                <div class="text-neutral-400">URL (Ctrl-O to open):</div>
                                <div class="font-bold text-green-400">{{ project.url }}</div>
                            </template>
                            <template v-else>
                                <div class="text-neutral-400">URL:</div>
                                <div class="font-bold text-orange-400">Not publicly accessible</div>
                            </template>
                        </div>
                        <div class="border-r border-neutral-400" />
                        <div class="flex gap-2">
                            <div class="text-neutral-400">Target:</div>
                            <div class="font-bold">{{ project.target }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-2 text-neutral-500" />
            <div class="flex justify-between" v-if="project.stack">
                <div class="flex-1">
                    <div class="flex gap-2">
                        <div class="text-neutral-400">Stack:</div>
                        <div class="font-bold">
                            {{ project.stack.join(', ') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-auto border rounded border-neutral-500">
            <div class="flex gap-5">
                <div class="w-3/5">
                    <slot />
                </div>
                <div
                    class="p-4 w-2/5 grid gap-3"
                    :class="{
                        'grid-cols-1': project.imageColumns === 1,
                        'grid-cols-2': project.imageColumns === 2,
                    }"
                >
                    <figure v-for="image in project.images" class="rounded overflow-hidden border p-4">
                        <img class="rounded" :src="image.path" :alt="image.caption" :title="image.caption" />
                        <p class="text-xs text-right mt-2 mr-2 text-neutral-500">{{ image.caption }}</p>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="h-full flex items-center justify-center flex-col">
        <h1 class="font-bold text-3xl">404</h1>
        <p class="text-neutral-400">No such project found.</p>
        <hr class="my-3 w-full border-neutral-500" />
        <RouterLink :to="returnPath" class="bg-neutral-700 py-1 px-1">Go back to all projects (ESC)</RouterLink>
    </div>
</template>

<style scoped>

</style>
