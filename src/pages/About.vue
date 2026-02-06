<script setup lang="ts">
import {onUnmounted, ref} from "vue";
import {onKeyStroke} from "@vueuse/core";
import router from "@/router";

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
    progress: string;
    class: string;
    link: string;
}

const menuItems: MenuItem[] = [
    {
        label: 'Me',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about',
    },{
        label: 'Core Skills',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about/core'
    }, {
        label: 'Current Job',
        progress: 'DONE',
        class: 'text-green-400',
        link: '/about/current'
    }, {
        label: 'Experience',
        progress: 'PROG',
        class: 'text-orange-400',
        link: '/about/experience'
    }, {
        label: 'Future Thinking',
        progress: 'PEND',
        class: 'text-red-400',
        link: '/about/future'
    }
]

const current = ref<number|null>(null);

onKeyStroke('ArrowDown', () => {
    if (current.value === null) {
        current.value = 0;
        return;
    }

    if (current.value < menuItems.length - 1) {
        current.value++;
    }
});

onKeyStroke('ArrowUp', () => {
    if (current.value === null) {
        current.value = menuItems.length - 1;
        return;
    }

    if (current.value > 0) {
        current.value--;
    }
});

onKeyStroke('Enter', () => {
    if (current.value === null) return;

    router.push(menuItems[current.value]!.link);
})

</script>

<template>
    <div class="p-10 flex flex-col gap-5 max-h-full h-full">
        <div class="border border-neutral-500 p-4 rounded flex-none">
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
                <div class="flex flex-col justify-end text-lime-300">
                    instance > current
                </div>
            </div>
            <hr class="border-neutral-500 my-3" />
            <div class="flex gap-4">
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
            <div class="flex gap-4">
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
        <div class="flex gap-5 flex-1 overflow-hidden">
            <div class="w-2/3 flex gap-5 h-full">
                <div class="flex flex-col gap-2 border border-neutral-500 rounded p-4">
                    <RouterLink
                        :to="item.link"
                        class="flex gap-2 px-1 rounded" v-for="(item, index) in menuItems"
                        :class="{
                            'bg-neutral-700': current === index,
                        }"
                    >
                        <span :class="item.class">{{ item.progress }}</span>
                        <span>{{ item.label }}</span>
                    </RouterLink>
                </div>
                <div class="border border-neutral-500 rounded p-4 flex-1">
                    <div class="h-full overflow-auto">
                        <RouterView />
                    </div>
                </div>
            </div>
            <div class="bg-neutral-700/20 rounded h-40 w-1/3 overflow-hidden">
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
    </div>
</template>

<style scoped>

</style>
