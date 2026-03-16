<script setup lang="ts">
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import {onKeyStroke} from "@vueuse/core";
import {computed, ref} from "vue";
import MarkdownRender from "@/components/MarkdownRender.vue";

interface Block {
    name: string;
    version?: string;
    description: string;
    url: string;
}

type Stack = {title: string, items: Block[]};

const env: Block[] = [
    {
        name: 'MacOS',
        version: '26 (Tahoe)',
        description: 'I run an Apple Studio M1 Max which I\'ve had since 2021. I still love working on this, despite Apples weird UI choices lately',
        url: 'https://apple.com/',
    },{
        name: 'Ubuntu Linux',
        version: '24.04',
        description: 'My choice for Linux servers is generally Ubuntu Server. I find it to be the most comfortable to work in and when it comes to hosting, the stability is a welcome peace-of-mind.',
        url: 'https://ubuntu.com/',
    },{
        name: 'RouterOS',
        version: '7.6',
        description: 'I run a Mikrotik hEX router which I love to mess around with. There\'s a TP-Link Mesh that provides Wi-Fi.',
        url: 'https://mikrotik.com/',
    },{
        name: 'Raspberry Pi OS',
        version: 'various',
        description: 'I run a few Pis in my homer network. One runs a firewall and another is a connection speed tracker using Grafana to graph years or speed test data.',
        url: 'https://raspberrypi.com/',
    }
]

const browsers: Block[] = [
    {
        name: 'Dia',
        version: '1.136.0',
        description: 'I loved what The Browser Company did with Arc. Dia isn\'t quite there yet, but it\'s getting closer. The AI integration isn\'t all that bad, and the UI is also far better than anything else out there.',
        url: 'https://diabrowser.com/',
    },{
        name: 'Zen',
        version: '1.18.10b',
        description: 'I\'ve been testing out Zen as a replacement for Arc for a little while now. It\'s better in some ways, and not good in other ways. In time, I think it could be a worthwhile replacement.',
        url: 'https://zen-browser.app/',
    }, {
        name: 'Google Chrome',
        version: '145.0',
        description: 'I use Chrome purely as a development environment. I don\'t like to mix my personal browser with my development one.',
        url: 'https://www.google.com/chrome/',
    }
];

const tools: Block[] = [
    {
        name: 'Jetbrains PHPStorm',
        version: '2025.3.3',
        description: 'PHPStorm is my main IDE. I spend most of my time working here. I\'ve been a PHPStorm user for well over 10 years. Nothing else comes close.',
        url: 'https://www.jetbrains.com/phpstorm/',
    },{
        name: 'Microsoft Visual Studio Code',
        version: '1.109',
        description: 'I\'m not a huge VSCode fan, but it is handy to have around for simpler tasks',
        url: 'https://code.visualstudio.com/',
    },{
        name: 'Warp',
        version: 'v0.2026.*',
        description: 'Warp is my terminal emulator of choice. I like the AI integration and the "IDE-like" approach.',
        url: 'https://www.warp.dev/'
    },{

        name: 'Tinkerwell',
        version: '5.11',
        description: 'I honestly believe Tinkerwell is a must-have for any Laravel developer. It has saved my bacon on a number of occasions',
        url: 'https://tinkerwell.app/',
    },{
        name: 'Ray',
        version: '3.1',
        description: 'Ray makes debugging really simple. In fact, it has quickly replaced my need for XDebug.',
        url: 'https://myray.app/',
    },{
        name: 'TablePlus',
        version: '6.8.1',
        description: 'TablePlus is my go-to database UI.',
        url: 'https://tableplus.com/'
    },{
        name: 'Trello',
        version: '2.15',
        description: 'Trello has been my project management tool of choice for years. Although there are now signs that it may be time to look for something else.',
        url: 'https://trello.com/',
    }
]

const documenting: Block[] = [
    {
        name: 'APIDog',
        version: '2.8',
        description: 'APIDog is my go-to API documentation tool. I don\'t use all its features, but the documentation tools are super.',
        url: 'https://apidog.com/',
    },{
        name: 'Craft',
        version: '3.3',
        description: 'Craft is a documentation tool that tries to be a simpler version of Notion.',
        url: 'https://www.craft.do/',
    }
]

const agents: Block[] = [
    {
        name: 'Anthropic Claude',
        version: '-',
        description: 'Claude is a relatively new tool in the toolbox, but It has already proved itself a worthy addition.',
        url: 'https://claude.com/product/claude-code',
    },{
        name: 'Jetbrains Junie',
        version: '-',
        description: 'I\'ve been using Junie since it was launched back in 2025, but recently switched to Claude',
        url: 'https://www.jetbrains.com/junie/',
    }
];

const stacks: Stack[] = [
    {
        title: 'Environment',
        items: env,
    },{
        title: 'Browsers',
        items: browsers,
    },{
        title: 'Tools',
        items: tools,
    },{
        title: 'Documenting',
        items: documenting,
    },{
        title: 'Agents',
        items: agents,
    }
]

const blocks = computed(() => {
    return stacks.flatMap(stack => stack.items);
})

const currentIndex = ref<number|null>(null);

const currentBlock = computed(() => {
    if (currentIndex.value === null) {
        return null;
    }

    return blocks.value[currentIndex.value!];
})

const selectNext = () => {
    if (currentIndex.value === null) {
        currentIndex.value = 0;
        scrollToSelected();
        return;
    }

    if (currentIndex.value < blocks.value.length - 1) {
        scrollToSelected();
        currentIndex.value++;
    }
}

const selectPrevious = () => {
    if (currentIndex.value === null) {
        currentIndex.value = blocks.value.length - 1;
        scrollToSelected();
        return;
    }

    if (currentIndex.value > 0) {
        currentIndex.value--;
        scrollToSelected();
    }
}

const stackRef = ref<HTMLElement>();

const scrollToSelected = () => {

    const url = currentBlock.value?.url;
    if (! url) {
        return;
    }

    const urlEl = document.querySelector(`a[href="${url}"]`);
    const el = urlEl?.parentElement?.parentElement;

    el?.scrollIntoView({
        behavior: 'smooth',
    })
}

onKeyStroke((e) => e.key === 'Tab' && !e.shiftKey, (e) => {
    e.preventDefault();
    selectNext();
})
onKeyStroke((e) => e.key === 'Tab' && e.shiftKey, (e) => {
    e.preventDefault();
    selectPrevious();
})

onKeyStroke('Enter', (e) => {
    e.preventDefault();
    if (! currentBlock.value?.url) {
        return;
    }

    window.open(currentBlock.value.url, '_blank');
})

const keyboard = {
    'Tab': 'Select Next',
    'Shift-Tab': 'Select Previous',
    'Enter': 'Open URL',
};

</script>

<template>
    <ReaderLayout title="stack.md" @close="router.push('/')" :keyboard="keyboard">
        <div class="flex flex-col lg:flex-row gap-5">
            <div class="w-full lg:w-1/2">
                <MarkdownRender file="stack.md" />
            </div>
            <div class="w-full lg:w-1/2 mb-5">
                <img src="/images/desktop.jpg" alt="Desktop" class="rounded block w-full" />
            </div>
        </div>
        <div ref="stackRef">
            <section v-for="(stack, stackIndex) in stacks" :key="stackIndex">
                <header>
                    <h1>{{ stack.title }}</h1>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <article
                        class="flex flex-col border rounded"
                        v-for="(item, itemIndex) in stack.items"
                        :key="itemIndex"
                        :class="{
                        'border-neutral-500': currentBlock?.url !== item.url,
                        'border-cyan-500': currentBlock?.url === item.url,
                    }"
                    >
                        <header class="flex gap-3 border-b p-3">
                            <div class="font-bold">{{ item.name }}</div>
                            <div class="border-r border-neutral-500" />
                            <div class="text-neutral-500">version <span class="text-cyan-400">{{ item.version }}</span></div>
                        </header>
                        <div class="p-3 flex-1">{{ item.description }}</div>
                        <a :href="item.url" class="block border-t p-3 text-neutral-500 text-xs">
                            {{ item.url }}
                        </a>
                    </article>
                </div>
            </section>
        </div>
    </ReaderLayout>
</template>

<style scoped>

</style>
