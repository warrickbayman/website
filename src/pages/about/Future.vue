<script setup lang="ts">

import ProgressBar from "@/components/ProgressBar.vue";
</script>

<template>
    <div>
        <div class="typography">
            <strong>WHAT'S NEXT?</strong>
            <p>
                There's plenty of things I want to learn. Finding time to fit this all into my life can be heard, but
                I'm always excited about new tech.
            </p>

            <div class="grid gap-5">
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>React</strong>
                    </div>
                    <div class="text-neutral-500">
                        I love working with Vue. It works the way I think. But I realize React would be a good tool for the
                        collection.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[65, 70]" />
                    </div>
                </div>
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>Golang</strong>
                    </div>
                    <div class="text-neutral-500">
                        I've used Go for a few small personal projects, but I don't know enough to use it in production
                        ready software. I'd like to push my skills here and eventually include it in my toolbox.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[40, 50]" />
                    </div>
                </div>
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>Rust</strong>
                    </div>
                    <div class="text-neutral-500">
                        I am intrigued by the notion of Rust. I've done some very basic intro work with Rust and I'm
                        fascinated with the different path it takes from as apposed to more traditional languages.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[30, 40]" />
                    </div>
                </div>
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>AI</strong>
                    </div>
                    <div class="text-neutral-500">
                        I am admittedly a little sceptical of AI tooling in software development. However, the tools
                        I use have proven to be fairly decent. I'm a little old-school in the fact that I don't think
                        that vibe coding is the way forward. It's not why I started programming. But AI has definitely
                        made me more efficient. There are new AI tools every day and I'd like to explore some of these
                        a little more.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[65, 75]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
