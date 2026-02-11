<script setup lang="ts">

import Help from "@/components/Help.vue";
import {Button} from "@/components/ui/button";
import {ref} from "vue";

const isMobile = () => {
    if (localStorage.getItem('mobileWarned') === '1') {
        return false;
    }

    if (navigator.userAgentData) {
        return !!navigator.userAgentData.mobile;
    }

    return window.matchMedia('(pointer: coarse)').matches || (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
}

const showMobileWarning = ref(isMobile());

const confirmMobile = () => {
    localStorage.setItem('mobileWarned', '1');
    showMobileWarning.value = false;
}

</script>

<template>
    <main class="h-screen max-h-screen flex flex-col bg-gray-500 p-2 overflow-hidden">
        <div class=" h-full bg-linear-to-br from-term-from to-term-to rounded-2xl overflow-hidden shadow-xl text-foreground flex flex-col">
            <div class="h-full w-full overflow-hidden relative">
                <RouterView />

                <Help />
            </div>
        </div>
        <div v-if="showMobileWarning" class="fixed backdrop-blur z-30 left-0 top-0 w-full h-full flex items-center justify-center">
            <div class="max-w-xl w-full bg-term-to rounded-lg p-4 shadow-xl text-white">
                <div class="typography">
                    <strong>BETTER WITH A KEYBOARD.</strong>
                    <div class="text-neutral-400">
                        <p>
                            This website is better with a hardware keyboard. Although it still works fine on a touch
                            screen device, the website emulates a Linux style terminal environment which is a
                            keyboard-centric environment, and you'll get a better experience using an actual computer.
                        </p>
                    </div>
                    <Button variant="outline" @click="confirmMobile">Okay, cool.</Button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
</style>
