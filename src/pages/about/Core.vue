<script setup lang="ts">
import ProgressBar from "@/components/ProgressBar.vue";

const skills = [
    {
        label: 'PHP',
        proficiency: [80, 90],
        description: 'I have an exceptional grasp of the PHP language and its associated tools.',
    },{
        label: 'HTML',
        proficiency: [80, 90],
        description: 'HTML forms the backbone of everything I create. Even if I don\'t write pure HTML anymore.',
    },{
        label: 'CSS',
        proficiency: [80, 85],
        description: 'I don\'t write must CSS directly anymore and use TailwindCSS almost exclusively.',
    },{
        label: 'JavaScript',
        proficiency: [65, 75],
        description: 'I\'ve been using TypeScript for a while now, but without JavaScript, TypeScript is nothing.',
    },{
        label: 'OS',
        proficiency: [80, 90],
        description: 'I\'m confident with most operating systems, but I favour MacOS and Linux.',
    },{
        label: 'Networking',
        proficiency: [60, 80],
        description: 'I have a good grasp of computer networking and communication and run a small home-lab.',
    },{
        label: 'Browser',
        proficiency: [80, 90],
        description: 'The browser is my space, And I work in this environment a lot. I have a good understand of what\'s possible.',
    }
];
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4">
        <div class="border border-neutral-500 rounded p-3 min-h-28" v-for="skill in skills">
            <strong>{{ skill.label }}</strong>
            <hr class="my-3" />
            <ProgressBar :progress="skill.proficiency" />
            <div class="text-sm mt-3">
                {{ skill.description }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
