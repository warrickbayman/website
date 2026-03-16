<script setup lang="ts">

import ProgressBar from "@/components/ProgressBar.vue";
</script>

<template>
    <div class="p-4">
        <div class="typography">
            <strong>WHAT'S NEXT?</strong>
            <p>
                There's plenty of things I want to learn. Sometimes I get a bit stuck with what to do next, and finding
                time to fit this all into my life can be hard, but I'm always excited about learning new tech.
            </p>

            <div class="grid gap-5">
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>React</strong>
                    </div>
                    <div class="text-neutral-500">
                        I love working with Vue. I feel like it could be a superior choice to React. However I realize
                        that React could be a good tool for the collection.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[50, 60]" />
                    </div>
                </div>
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>Golang</strong>
                    </div>
                    <div class="text-neutral-500">
                        I've started learning Go, but it can be quite different from what I'm used to. I'm very keen to
                        learn more, though. I don't know enough yet to use it in production ready software and I'd like
                        to find the time to push my skills here and eventually include it in my toolbox. I like the idea
                        of what Go could bring to the table for me.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[70, 80]" />
                    </div>
                </div>
                <div class="border rounded border-neutral-500 p-3">
                    <div>
                        <strong>Swift</strong>
                    </div>
                    <div class="text-neutral-500">
                        As an avid MacOS user, Swift been on my mind for a while. I did some introduction work with
                        Swift, but never found the time to continue. I think swift opens some more doors for me that
                        were not there before and provides a whole new set of skills. However, it's not at the top of
                        my list.
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
                        I am admittedly a little sceptical of AI in general. I currently use Anthropic's Claude Code
                        a fair amount, but I'm definitely not a "Vibe Coder". I am aware of a marked increase in my
                        productivity as AI has become a tool I reach for more often, but I think I still have a lot to
                        learn in this space.
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <span>Potential</span>
                        <ProgressBar class="flex-1" :progress="[85, 95]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
