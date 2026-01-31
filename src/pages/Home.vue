<script setup lang="ts">

import Banner from "@/components/Banner.vue";
import TerminalLayout from "@/layouts/TerminalLayout.vue";
import TerminalMenu from "@/components/TerminalMenu.vue";
import {useTerminalStore} from "@/stores/terminal.ts";

const terminal = useTerminalStore();
terminal.setMenu('main');

</script>

<template>
    <TerminalLayout>
        <template #intro>
            <p>
                Hi.<br />
                My name is <strong>WARRICK BAYMAN</strong>.<br />
                I'm a full-stack web developer specializing in Laravel
                and Vue.
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
        <TerminalMenu menu="main" />
    </TerminalLayout>
</template>

<style scoped>

</style>
