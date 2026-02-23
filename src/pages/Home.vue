<script setup lang="ts">

import Banner from "@/components/Banner.vue";
import TerminalLayout from "@/layouts/TerminalLayout.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";
import { useTerminalStore } from "@/stores/terminal.ts";
import {onMounted } from "vue";
import {useRoute} from "vue-router";

const terminal = useTerminalStore();
terminal.setMenu('main');

const route = useRoute();

onMounted(() => {
    console.log(route.meta);
})

const firstVisit = sessionStorage.getItem('firstVisit') !== 'no';

onMounted(() => {
    setTimeout(() => {
        sessionStorage.setItem('firstVisit', 'no');
    }, 200)
})

</script>

<template>
    <TerminalLayout>
        <template #intro>
            <p ref="buildTarget">
                Hi.<br />
                <span class="itsme">
                    My name is <strong>WARRICK BAYMAN</strong>.<br />
                    I'm a full-stack web developer specializing in Laravel
                    and Vue.
                </span>
            </p>
            <div class="leading-normal">&nbsp;</div>
            <Banner />
            <div class="leading-normal">&nbsp;</div>
            <div class="text-muted-foreground">
                <p>
                    I've been building small- to medium-sized applications for more than 10 years using Laravel almost
                    exclusively.
                </p>
            </div>
        </template>
        <TerminalMenu menu="main" :delay="firstVisit ? 1200 : 0" />
    </TerminalLayout>
</template>

<style scoped>

</style>
