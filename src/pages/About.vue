<script setup lang="ts">

import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
</script>

<template>
    <ReaderLayout title="about_me.md" @close="router.push('/')">
        <h1>About Me</h1>
        <p>
            I'm a self-taught PHP programmer with a passion for all things software development. I love working on the
            web and have created plenty of things over the years with various technologies. I learnt to write code
            before the age of AI, so I found other devs who worked on things I liked and learnt from them.
        </p>
        <p>
            After high-school, I worked for a bit while I decided what I wanted to do. I completed a N+ network
            administration course, but I wasn't sure that's what I wanted to do. Still, I learnt a lot about how
            computers communicated. I had already been experimenting with JavaScript back then, but it was still such
            a young language and I wasn't sure what do with my new found knowledge.
        </p>
        <p>
            Eventually I signed up to study Graphic Design through the Wits Technikon in Johannesburg, South Africa.
            I loved that. But I think I loved being in college more than I loved graphic design. Still... I learnt a
            bit.
        </p>
    </ReaderLayout>
</template>

<style scoped>

</style>
