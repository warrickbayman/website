<script setup lang="ts">
import ProgressBar from "@/components/ProgressBar.vue";

const skills = [
    {
        label: 'PHP',
        proficiency: [80, 90],
        description: 'I have an exceptional grasp of the PHP language and its associated tools.',
    }, {
        label: 'Laravel',
        proficiency: [70, 80],
        description: 'I don\'t really use anything else and Laravel is my almost 100% my go-to choice.',
    }, {
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
        description: 'I\'ve been using TypeScript for a while now, and can sometimes find it hard to go back to JavaScript',
    }, {
        label: 'Vue',
        proficiency: [65, 70],
        description: 'I love Vue. It works the way I think, and has become the main choice for many Laravel developers including me.'
    }, {
        label: 'OS',
        proficiency: [80, 90],
        description: 'I\'m confident with most operating systems, and can figure out most things, but I strongly favour MacOS and Linux.',
    },{
        label: 'Networking',
        proficiency: [60, 80],
        description: 'I have a good grasp of computer networking and communication and run a small home-lab to test my skills on.',
    },{
        label: 'Browser',
        proficiency: [80, 90],
        description: 'The browser is my space, And I work in this environment a lot. I have a good understand of what\'s possible and how the WWW works.',
    },{
        label: 'Go',
        proficiency: [10, 25],
        description: 'I recently started working with Go. Purely as a personal project and have found the language to be really interesting. Still a lot to learn.'
    }
];
</script>

<template>
    <div>
        <div class="typography p-4">
            <strong class="text-white">
                CORE SKILLS
            </strong>
            <p>
                These are the skills that allow me to do what I do. I do believe that there is always more than one
                way to do something, and that there is generally more than one right answer when it comes to building
                software, but these are the choices I made and have spent many hours focused on them.
            </p>
        </div>
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
    </div>
</template>

<style scoped>

</style>
