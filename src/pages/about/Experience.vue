<script setup lang="ts">

interface ExperienceItem {
    label: string;
    role: string;
    tasks: string;
    duration: string;
    current?: boolean;
    link?: string;
    reason?: string;
}

const experience: ExperienceItem[] = [
    {
        label: 'THEPUBLICGOOD (Pty) Ltd.',
        role: 'Owner',
        tasks: 'Owner, developer, designer, devops, all-round geek.',
        duration: '2021 - Present',
        current: true,
        link: 'https://thepublicgood.dev/',
    },{
        label: 'Mycalture Marketing cc.',
        role: 'Lead Developer',
        tasks: 'Full-stack web developer, devops, team leader.',
        duration: '2018 - 2020',
        link: 'https://mycalture.com/',
        reason: 'Started my own business',
    },{
        label: 'Whodunnit cc.',
        role: 'Web developer && designer',
        tasks: 'Full-stack web developer, web designer, graphic designer.',
        duration: '2014 - 2017',
        link: 'https://whodunnit.co.za/',
        reason: 'Got a better job',
    },{
        label: 'Midrand Graduate Institute (Pearson Institute)',
        role: 'Web & Multimedia lecturer',
        tasks: 'Course developer and lecturer in the Graphic Design department.',
        duration: '2004 - 2013',
        link: 'https://www.pearson.imgraham.co.za/',
        reason: 'Got a better job',
    },{
        label: 'Halogen Graphics',
        role: 'Co-Owner',
        tasks: 'Web designer',
        duration: '2003 - 2004',
        reason: 'Not good enough to run a business'
    }
]
</script>

<template>
    <div class="p-4">
        <div class="typography">
            <strong>WORK EXPERIENCE</strong>
            <p>
                I've been fairly lucky with jobs. I've never really had to go look for work. I've always been found by
                others and offered jobs even when I wasn't looking.
            </p>
            <p>
                This work experience has given me the opportunity to build the skills I'm not proud of.
            </p>
        </div>
        <template v-for="(item, index) in experience" :key="index">
            <div class="flex">
                <div class="w-12 mt-[0.2rem] flex flex-col items-center">
                    <div
                        class="rounded-full border-2 size-4 flex-none"
                        :class="{
                           'border-green-300': item.current,
                           'border-neutral-500': !item.current,
                        }"
                    />
                    <div
                        class="border-l-2 h-full w-0.5 border-neutral-700"
                        :class="{
                            'border-dashed': index >= experience.length - 1
                        }"
                    />
                </div>
                <div class="flex-1 pb-4">
                    <div class="flex flex-col mb-2">
                        <strong>{{ item.label }}</strong>
                        <a v-if="item.link" :href="item.link" target="_blank" class="underline text-blue-400">
                            {{ item.link }}
                        </a>
                    </div>
                    <div class="flex">
                        <strong class="w-24 text-neutral-500">Role:</strong>
                        <span>{{ item.role }}</span>
                    </div>
                    <div class="flex">
                        <strong class="w-24 text-neutral-500">Tasks:</strong>
                        <span>{{ item.tasks }}</span>
                    </div>
                    <div class="flex">
                        <strong class="w-24 text-neutral-500">Duration:</strong>
                        <span>{{ item.duration }}</span>
                    </div>
                    <div class="flex">
                        <strong class="w-24 text-neutral-500">Reason:</strong>
                        <span>{{ item.reason }}</span>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>
