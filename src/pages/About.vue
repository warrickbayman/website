<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { onKeyStroke } from "@vueuse/core";
import router from "@/router";
import { useRoute } from "vue-router";
import { XIcon } from "lucide-vue-next";

const rates = ref<{t: number, b: number}[]>([])

const addRate = () => {
    if (rates.value.length === 0) {
        rates.value.push({
            t: Math.floor(Math.random() * 100),
            b: Math.floor(Math.random() * 100),
        });
        return;
    }

    const lastRate = rates.value[rates.value.length - 1]!;

    rates.value.push({
        t: Math.min(100, Math.max(0, lastRate.t + Math.floor(Math.random() * 50) - 25)),
        b: Math.min(100, Math.max(0, lastRate.b + Math.floor(Math.random() * 50) - 25)),
    });

    if (rates.value.length > 50) {
        rates.value.shift();
    }
}

for (let i = 0; i < 50; i++) {
    addRate();
}

const rateInterval = setInterval(() => {
    addRate();
}, 500);

onUnmounted(() => {
    clearInterval(rateInterval);
})

interface MenuItem {
    label: string;
    shortLabel: string;
    progress: string;
    class: string;
    link: string;
}

const menuItems: MenuItem[] = [
    {
        label: 'Me',
        shortLabel: 'Me',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about',
    },{
        label: 'Core Skills',
        shortLabel: 'Cor',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about/core'
    }, {
        label: 'Current Job',
        shortLabel: 'Cur',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about/current'
    }, {
        label: 'Experience',
        shortLabel: 'Exp',
        progress: 'PROG',
        class: 'text-orange-400',
        link: '/about/experience'
    }, {
        label: 'Education',
        shortLabel: 'Edu',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about/education',
    }, {
        label: 'Future Thinking',
        shortLabel: 'Fut',
        progress: 'PEND',
        class: 'text-red-400',
        link: '/about/future'
    }
]

const route = useRoute();

const current = ref<number|null>(null);

switch (route.name) {
    case 'me': current.value = 0; break;
    case 'core': current.value = 1; break;
    case 'current': current.value = 2; break;
    case 'experience': current.value = 3; break;
    case 'education': current.value = 3; break
    case 'future': current.value = 4; break;
}

const mainRef = ref<HTMLElement>();

const navigateDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (mainActive.value) {
        mainRef.value!.scrollBy({left: 0, top: 20, behavior: 'smooth'});
        return;
    }

    if (current.value === null) {
        current.value = 0;
        return;
    }

    if (current.value < menuItems.length - 1) {
        current.value++;
    }
}

const navigateUp = (e: KeyboardEvent) => {
    e.preventDefault();

    if (mainActive.value) {
        mainRef.value!.scrollBy({left: 0, top: -20, behavior: 'smooth'});
        return;
    }

    if (current.value === null) {
        current.value = menuItems.length - 1;
        return;
    }

    if (current.value > 0) {
        current.value--;
    }
}

onKeyStroke('ArrowDown', (e) => navigateDown(e));
onKeyStroke('ArrowUp', (e) => navigateUp(e));
onKeyStroke(e => e.ctrlKey && e.key === 'a', () => mainRef.value?.scrollTo({left: 0, top: 0, behavior: 'smooth'}))
onKeyStroke(e => e.ctrlKey && e.key === 'e', () => mainRef.value?.scrollTo({left: 0, top: mainRef.value?.scrollHeight, behavior: 'smooth'}))


onKeyStroke('Enter', () => {
    if (current.value === null) return;

    router.push(menuItems[current.value]!.link);
})

onKeyStroke('Escape', () => {
    router.push('/');
});

const mainActive = ref(false);

onKeyStroke('Tab', (e) => {
    e.preventDefault();
    mainActive.value = !mainActive.value;
})

</script>

<template>
    <div id="about_me" class="p-5 lg:p-7 flex flex-col gap-5 max-h-full h-full overflow-hidden">
        <div
            class="border p-4 rounded flex-none border-neutral-500"
        >
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="flex gap-2">
                        <div class="text-neutral-400">Profile name:</div>
                        <div class="font-bold">WARRICK BAYMAN</div>
                    </div>
                    <div class="flex gap-2">
                        <div class="text-neutral-400">Region:</div>
                        <div class="font-bold">gq, EC, ZA</div>
                    </div>
                </div>
                <div class="flex-col justify-end text-lime-300 hidden lg:flex">
                    instance > {{ route.name }}
                </div>
            </div>
            <hr class="border-neutral-500 my-3 hidden lg:block" />
            <div class="gap-4 hidden lg:flex">
                <div class="flex gap-2">
                    <div class="text-neutral-400">Core:</div>
                    <div class="font-bold">php + laravel, typescript, vue</div>
                </div>
                <div class="border-r border-neutral-400" />
                <div class="flex gap-2">
                    <div class="text-neutral-400">Ops:</div>
                    <div class="font-bold">ubuntu, nginx, php-fpm, franken_php, redis, mysql, mssql, sqlite3</div>
                </div>
                <div class="border-r border-neutral-400" />
                <div class="flex gap-2">
                    <div class="text-neutral-400">Term:</div>
                    <div class="font-bold">apple_macos, fedora, ubuntu</div>
                </div>
            </div>
            <hr class="border-neutral-400 my-2 hidden lg:block" />
            <div class="gap-4 hidden lg:flex">
                <div class="flex gap-2">
                    <div class="text-neutral-400">Host:</div>
                    <div class="font-bold">digitalocean, google_cloud, private_vps</div>
                </div>
                <div class="border-r border-neutral-400" />
                <div class="flex gap-2">
                    <div class="text-neutral-400">Status:</div>
                    <div class="font-bold text-green-400">running</div>
                </div>
                <div class="border-r border-neutral-400" />
                <div class="flex gap-2">
                    <div class="text-neutral-400">Launched:</div>
                    <div class="font-bold">22-04-1981</div>
                </div>
            </div>
        </div>
        <div class="flex lg:hidden gap-3 mobile-menu">
            <RouterLink
                :to="item.link"
                exact-active-class="active-link"
                class="flex gap-2 px-1 rounded" v-for="(item, index) in menuItems"
                :class="{
                    'highlighted bg-neutral-700': current === index,
                }"
            >
                <span class="link-label">{{ item.shortLabel }}</span>
            </RouterLink>

            <RouterLink to="/" class="ml-auto">
                <XIcon />
            </RouterLink>
        </div>
        <div class="flex gap-5 flex-1 overflow-hidden desktop-menu">
            <div class="flex-1 flex gap-5 h-full overflow-hidden">
                <div
                    class="flex-col gap-2 border hidden lg:flex border-neutral-500 rounded p-4"
                    :class="{
                        'border-neutral-500': mainActive,
                        'border-white': !mainActive,
                    }"
                >
                    <RouterLink
                        :to="item.link"
                        exact-active-class="active-link"
                        class="flex gap-2 px-1 rounded" v-for="(item, index) in menuItems"
                        :class="{
                            'highlighted bg-neutral-700': current === index,
                        }"
                    >
                        <span :class="item.class" class="hidden lg:inline">{{ item.progress }}</span>
                        <span class="link-label">{{ item.label }}</span>
                    </RouterLink>
                </div>
                <div
                    class="border rounded flex-1 workspace"
                    :class="{
                        'border-neutral-500': !mainActive,
                        'border-white': mainActive,
                    }"
                >
                    <div class="h-full overflow-auto" ref="mainRef">
                        <RouterView />
                    </div>
                </div>
            </div>
            <div class="bg-neutral-700/20 rounded h-40 w-1/3 overflow-hidden hidden xl:block">
                <div class="border-b h-1/2 grid grid-cols-50 gap-0.5 px-0.5 pt-1 overflow-hidden">
                    <div v-for="rate in rates" class="flex flex-col justify-end">
                        <div
                            class="w-0.5 lg:w-1 2xl:w-1.5 bg-green-200 rounded-t-sm"
                            :style="{
                            height: `${rate.t}%`,
                            opacity: `${rate.t / 100}`
                        }"
                        >

                        </div>
                    </div>
                </div>
                <div class="h-1/2 grid grid-cols-50 gap-0.5 px-0.5 pb-1 overflow-hidden">
                    <div v-for="rate in rates" class="flex flex-col justify-start">
                        <div
                            class="w-0.5 lg:w-1 2xl:w-1.5 bg-blue-300 rounded-b-sm"
                            :style="{
                            height: `${rate.b}%`,
                            opacity: `${rate.b / 100}`
                        }"
                        />
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
                <strong>Tab</strong>
                <div class="text-neutral-500">Switch Pane</div>
            </div>
            <div class="h-5 border-r border-neutral-400"></div>
            <div class="flex gap-2">
                <strong>Ctrl-A</strong>
                <div class="text-neutral-500">Top</div>
            </div>
            <div class="h-5 border-r border-neutral-400"></div>
            <div class="flex gap-2">
                <strong>Ctrl-E</strong>
                <div class="text-neutral-500">Bottom</div>
            </div>
            <div class="h-5 border-r border-neutral-400"></div>
            <div class="flex gap-2">
                <strong>Enter</strong>
                <div class="text-neutral-500">Select</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "../main.css";

.active-link {
    @apply bg-cyan-600;
}
</style>
