<script setup lang="ts">

import {onKeyStroke} from "@vueuse/core";
import router from "@/router";
import {ref} from "vue";
import {XIcon} from "lucide-vue-next";

const links = [
    {
        label: 'GitHub',
        url: 'https://github.com/warrickbayman',
    },{
        label: 'Gitlab',
        url: 'https://gitlab.com/warrickbayman',
    },{
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/warrickbayman',
    },{
        label: 'THEPUBLICGOOD',
        url: 'https://thepublicgood.dev',
    }
];

const currentLink = ref<number|null>(null);

onKeyStroke('ArrowDown', () => {
    if (currentLink.value === null) {
        currentLink.value = 0;
        return;
    }

    if (currentLink.value < links.length - 1) {
        currentLink.value++;
    }
})

onKeyStroke('ArrowUp', () => {
    if (currentLink.value === null) {
        currentLink.value = links.length - 1;
        return;
    }

    if (currentLink.value > 0) {
        currentLink.value--;
    }
})

onKeyStroke('Enter', () => {
    const url = currentLink.value !== null ? links[currentLink.value!]!.url : null;

    if (! url) {
        return;
    }

    window.open(url, '_blank');
})

onKeyStroke('Escape', () => {
    router.push('/');
})


</script>

<template>
    <div id="contact" class="p-5 lg:p-7 flex flex-col gap-5 max-h-full h-full overflow-auto">
        <div
            class="border p-4 rounded flex-none border-neutral-500"
        >
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="flex gap-2">
                        <div class="text-neutral-400">Full name:</div>
                        <div class="font-bold">WARRICK BAYMAN</div>
                    </div>
                    <div class="flex gap-2">
                        <div class="text-neutral-400">Region:</div>
                        <div class="font-bold">gq, EC, ZA</div>
                    </div>
                </div>
                <div class="justify-end block lg:hidden">
                    <RouterLink to="/" class="ml-auto">
                        <XIcon />
                    </RouterLink>
                </div>
                <div class="flex-col justify-end text-lime-300 hidden lg:flex">
                    instance > contact
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1">
            <div class="typography">
                <h1>Getting Hold of Me</h1>
                <p>
                    I'm currently in the market for something new. I've been working for myself for a few years now, but
                    am now ready to close up shop and relocate if the right offer comes along.
                </p>
                <h2>Why hire me?</h2>
                <p>
                    I've always felt that I'm a good employee. I'm focused, eager to learn new things, fascinated by
                    technologies and the new challenges they bring. I enjoy working with people, can contribute a lot
                    to a team without being overbearing and I'm able to adapt to new situations.
                </p>
                <p>
                    I love what I do and I'm excited to join a team that shares my passion for technology and innovation.
                </p>
            </div>
            <div class="space-y-5">
                <div class="border border-neutral-500 rounded p-5">
                    <div class="flex gap-5">
                        <figure class="w-52 hidden lg:block">
                            <img src="/images/photo.jpg" alt="Photo" class="rounded-lg" />
                        </figure>

                        <div class="space-y-2 flex-1">
                            <div class="flex gap-5">
                                <div class="text-neutral-400 w-1/3">
                                    Email
                                </div>
                                <div class="font-bold">
                                    me<span class="text-neutral-500">[AT]</span>warrickbayman.com
                                </div>
                            </div>

                            <div class="flex gap-5">
                                <div class="text-neutral-400 w-1/3">
                                    Contact<span class="hidden lg:inline">Number</span>
                                </div>
                                <div class="font-bold">
                                    <span class="text-neutral-500">+27</span> 82 7352002
                                </div>
                            </div>

                            <div class="flex gap-5">
                                <div class="text-neutral-400 w-1/3">
                                    <span class="hidden lg:inline">Current</span> Location
                                </div>
                                <div class="font-bold">
                                    Port Elizabeth (Gqeberha)<span class="text-neutral-500"><br />South Africa</span>
                                </div>
                            </div>
                            <div class="flex gap-5">
                                <div class="text-neutral-400 w-1/3">
                                    Married
                                </div>
                                <div class="font-bold">
                                    Happy, with kid
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-neutral-500 rounded p-5 space-y-4">
                    <div class="flex flex-col lg:flex-row" v-for="(link, index) in links" :key="index">
                        <div class="text-neutral-400 w-1/3">
                            {{ link.label }}
                        </div>
                        <div class="font-bold">
                            <a
                                :href="link.url"
                                target="_blank"
                                class="p-1 rounded -ml-1 text-sm lg:text-base"
                                :class="{
                                    'bg-cyan-500': currentLink === index,
                                }"
                            >
                                {{ link.url }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border border-neutral-500 rounded p-4 text-sm gap-3 hidden lg:flex">
            <RouterLink to="/" class="flex gap-2">
                <strong>Esc</strong>
                <div class="text-neutral-500">Close</div>
            </RouterLink>
            <div class="h-5 border-r border-neutral-400"></div>
            <div class="flex gap-2">
                <strong>↑↓</strong>
                <div class="text-neutral-500">Navigate Up/Down</div>
            </div>
            <div class="h-5 border-r border-neutral-400"></div>
            <div class="flex gap-2">
                <strong>Enter</strong>
                <div class="text-neutral-500">Open Link</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
