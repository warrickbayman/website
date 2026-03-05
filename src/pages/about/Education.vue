<script setup lang="ts">

interface ExperienceItem {
    label: string;
    years: string;
    description: string;
}

const experience: ExperienceItem[] = [
    {
        label: 'BA Hon. Degree in Graphic Design',
        years: '2013-2014',
        description: 'I complete a research honours in graphic design, and received a "best on show" award. I\'m very proud of that achievement. Even though it came at a high cost.',
    },
    {
        label: 'Post Graduate Cert. 3D Animation and Visual Effects',
        years: '2012-2013',
        description: 'I completed a certification in 3D animation. Mainly because it was something I was fascinated in. I like the technical side of visual effects.',
    },
    {
        label: 'BA Degree in Multimedia Design.',
        years: '2004-2006',
        description: 'I pivoted to Multimedia design after my graphic design attempt didn\'t end so well. I felt more at home here.',
    },
    {
        label: 'BA Degree in Graphic Design.',
        years: '2002-2004',
        description: 'I never completed my first degree attempt. I enjoyed being a student, but there were lots of issues in my life and they became distractions.',
    },
    {
        label: 'High School',
        years: '1995-1999',
        description: 'I attended Florida Park High School in Johannesburg where I had the privilege of taking a Computer Science class. One of the first schools to offer such a class in the country.',
    },
];
</script>

<template>
    <div class="p-4">
        <div class="typography">
            <strong>WHAT THEY TAUGHT ME</strong>
            <p>
                I have a bit of checkered educational past, but I still managed to earn some things I am proud of.
                I didn't follow the traditional "computer science" path, but I believe now that I have an edge because
                of the path followed.
            </p>
            <p>
                I went the graphic design route. Probably because of some peer pressure at the time. I had a good friend
                who is an immensely talented designer, and I wanted to follow in his footsteps.
            </p>
            <p>
                But I wasn't as good as him. And computers were a big distraction for me when I was younger.
            </p>
        </div>
        <template v-for="(item, index) in experience" :key="index">
            <div class="flex">
                <div class="w-12 mt-[0.2rem] flex flex-col items-center">
                    <div
                        class="rounded-full border-2 size-4 flex-none"
                        :class="{
                            'border-green-500': index === 0,
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
                    </div>
                    <div class="flex">
                        <strong class="w-24 text-neutral-500">Years:</strong>
                        <span>{{ item.years }}</span>
                    </div>
                    <div class="mt-3 text-neutral-400">
                        {{ item.description}}
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>
