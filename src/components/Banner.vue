<script setup lang="ts">
const print = () => {}
</script>

<template>
    <div class="scale-50 md:scale-75 lg:scale-100 origin-left -my-12 md:-my-7 lg:my-0">
        <div class="leading-4 flex items-center text-neutral-600">
        <pre>
<span class="row1">██</span>╗    <span class="row1">██</span>╗ <span class="row1">█████</span>╗ <span class="row1">██████</span>╗ <span class="row1">██████</span>╗ <span class="row1">██</span>╗ <span class="row1">██████</span>╗ <span class="row1">██</span>╗  <span class="row1">██</span>╗
<span class="row2">██</span>║    <span class="row2">██</span>║<span class="row2">██</span>╔══<span class="row2">██</span>╗<span class="row2">██</span>╔══<span class="row2">██</span>╗<span class="row2">██</span>╔══<span class="row2">██</span>╗<span class="row2">██</span>║<span class="row2">██</span>╔════╝ <span class="row2">██</span>║ <span class="row2">██</span>╔╝
<span class="row3">██</span>║ <span class="row3">█</span>╗ <span class="row3">██</span>║<span class="row3">███████</span>║<span class="row3">██████</span>╔╝<span class="row3">██████</span>╔╝<span class="row3">██</span>║<span class="row3">██</span>║      <span class="row3">█████</span>╔╝
<span class="row4">██</span>║<span class="row4">███</span>╗<span class="row4">██</span>║<span class="row4">██</span>╔══<span class="row4">██</span>║<span class="row4">██</span>╔══<span class="row4">██</span>╗<span class="row4">██</span>╔══<span class="row4">██</span>╗<span class="row4">██</span>║<span class="row4">██</span>║      <span class="row4">██</span>╔═<span class="row4">██</span>╗
╚<span class="row5">███</span>╔<span class="row5">███</span>╔╝<span class="row5">██</span>║  <span class="row5">██</span>║<span class="row5">██</span>║  <span class="row5">██</span>║<span class="row5">██</span>║  <span class="row5">██</span>║<span class="row5">██</span>║╚<span class="row5">██████</span>╗ <span class="row5">██</span>║   <span class="row5">██</span>╗
<span>╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═╝   ╚═╝</span>
        </pre>
        </div>
        <div class="leading-4 flex items-center text-neutral-600">
        <pre>
<span class="row1">██████</span>╗  <span class="row1">█████</span>╗ <span class="row1">██</span>╗   <span class="row1">██</span>╗<span class="row1">███</span>╗   <span class="row1">███</span>╗ <span class="row1">█████</span>╗ <span class="row1">███</span>╗   <span class="row1">██</span>╗
<span class="row2">██</span>╔══<span class="row2">██</span>╗<span class="row2">██</span>╔══<span class="row2">██</span>╗╚<span class="row2">██</span>╗ <span class="row2">██</span>╔╝<span class="row2">████</span>╗ <span class="row2">████</span>║<span class="row2">██</span>╔══<span class="row2">██</span>╗<span class="row2">████</span>╗  <span class="row2">██</span>║
<span class="row3">██████</span>╔╝<span class="row3">███████</span>║ ╚<span class="row3">████</span>╔╝ <span class="row3">██</span>╔<span class="row3">████</span>╔<span class="row3">██</span>║<span class="row3">███████</span>║<span class="row3">██</span>╔<span class="row3">██</span>╗ <span class="row3">██</span>║
<span class="row4">██</span>╔══<span class="row4">██</span>╗<span class="row4">██</span>╔══<span class="row4">██</span>║  ╚<span class="row4">██</span>╔╝  <span class="row4">██</span>║╚<span class="row4">██</span>╔╝<span class="row4">██</span>║<span class="row4">██</span>╔══<span class="row4">██</span>║<span class="row4">██</span>║╚<span class="row4">██</span>╗<span class="row4">██</span>║
<span class="row5">██████</span>╔╝<span class="row5">██</span>║  <span class="row5">██</span>║   <span class="row5">██</span>║   <span class="row5">██</span>║ ╚═╝ <span class="row5">██</span>║<span class="row5">██</span>║  <span class="row5">██</span>║<span class="row5">██</span>║ ╚<span class="row5">████</span>║
<span>╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝</span>
        </pre>
        </div>
    </div>
</template>

<style scoped>
@reference "../main.css";

.row1 {
    @apply text-purple-500;
}

.row2 {
    @apply text-purple-600;
}

.row3 {
    @apply text-purple-700;
}

.row4 {
    @apply text-purple-800;
}

.row5 {
    @apply text-purple-900;
}
</style>
