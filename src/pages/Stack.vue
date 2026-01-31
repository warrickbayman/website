<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title="stack.md" @close="router.push('/')">
        <h1>Tech Stack</h1>
        <p>
            I've used plenty of web technologies over the years. I don't use all it these days, but I've worked my way
            through lots of stuff and I'm not really happy with the tech I work with. However, I'm always looking for
            ways to create new things with new things.
        </p>
        <p>
            I love learning about new tech. Especially if it falls within my interests or is at least skill-set
            adjacent.
        </p>
        <p>
            I have a set of base skills that I believe are essential for what I do. This includes the basics like HTML,
            CSS, PHP and JavaScript. Everything else I know and all the tools I use are generally based on top of this
            core set of skills. Over the years I have also taught myself a lot about how to run web servers and services
            myself. I like to include my Linux administration skills as part of these core skills. I strongly believe
            that a good developer should have a strong grasp of the environment in which their software runs. As a
            web developer, for me that means knowing how to run a Linux web server and all the bits that come with that.
        </p>
        <h2>Platforms</h2>
        <p>
            I've been an Apple user for many years. I'm okay on a Windows machine, but I'm definitely more at home
            on Linux or MacOS desktop. I currently run an aging <strong>Apple Mac Studio M1 Max</strong>. It's a beast
            and I love working on this thing, but I also have a few Linux machines around (mostly Ubuntu Server) that
            form part of a basic homelab.
        </p>
    </ReaderLayout>
</template>

<style scoped>

</style>
