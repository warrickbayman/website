<script setup lang="ts">
import ReaderLayout from "@/layouts/ReaderLayout.vue";
import router from "@/router";
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps<{
    client: string;
}>();

const route = useRoute();

interface Client {
    title: string
    link: string
    location: string
    roles: string
    logo: string
}

const client = computed<Client>(() => {
    switch (route.name) {
        case 'clients.hotpress': return {
            title: 'hotpress_media.md',
            link: 'https://hotpress.co.za/',
            location: 'Johannesburg, South Africa',
            roles: 'Software Development, UI Design, DevOps, Database Admin',
            logo: '/images/hotpress.png',
        }
        case 'clients.mycalture': return {
            title: 'mycalture_marketing.md',
            link: 'https://mycalture.com/',
            location: 'Sandton, South Africa',
            roles: 'DevOps, Server Management, Database Admin',
            logo: '/images/mycalture.png',
        }
        case 'clients.trc': return {
            title: 'the_raw_connect.md',
            link: 'https://therawconnect.co.za',
            location: 'Bedfordview, South Africa',
            roles: 'Web Development, Hosting, DevOps, Database Admin',
            logo: '/images/trc.jpg',
        }
        case 'clients.whodunnit': return {
            title: 'whodunnit.md',
            link: 'https://whodunnit.co.za',
            location: 'Sandton, South Africa',
            roles: 'Web Design & Development, Graphic Designer',
            logo: '/images/whodunnit.jpg',
        };
        default: return {
            title: '',
            link: '',
            location: '',
            roles: '',
            logo: '',
        }
    }
});

</script>

<template>
    <ReaderLayout :title="client.title" @close="router.push('/clients')">
        <div class="border border-neutral-500 rounded p-4">
            <img :src="client.logo" :alt="client.title" class="w-50 mb-5" />
            <div>
                <div class="detail">
                    <div class="label">URL:</div>
                    <div>
                        <a :href="client.link" target="_blank" class="underline text-blue-400">{{ client.link }}</a>
                    </div>
                </div>
                <div class="detail">
                    <div class="label">Based:</div>
                    <div>
                        {{ client.location }}
                    </div>
                </div>
                <div class="detail">
                    <div class="label">Roles:</div>
                    <div>
                        {{ client.roles }}
                    </div>
                </div>
                <div class="detail">
                    <div class="label">References:</div>
                    <div>
                        On Request
                    </div>
                </div>
            </div>
        </div>
        <RouterView />
    </ReaderLayout>
</template>

<style scoped>
@reference "../../main.css";

.detail {
    @apply flex flex-col lg:flex-row;
    .label {
        @apply font-bold pr-4 text-neutral-500 w-36 mt-1 lg:mt-0;
    }
}
</style>
