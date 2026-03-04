import {ref} from "vue";
import type {Client} from "@/types";

export const clients = ref<Client[]>([
    {
        title: 'hotpress_media.md',
        url: 'https://hotpress.co.za/',
        location: 'Johannesburg, South Africa',
        roles: 'Software Development, UI Design, DevOps, Database Admin',
        logo: '/images/hotpress.png',
    },{
        title: 'mycalture_marketing.md',
        url: 'https://mycalture.com/',
        location: 'Sandton, South Africa',
        roles: 'DevOps, Server Management, Database Admin',
        logo: '/images/mycalture.png',
    },{
        title: 'the_raw_connect.md',
        url: 'https://therawconnect.co.za',
        location: 'Bedfordview, South Africa',
        roles: 'Web Development, Hosting, DevOps, Database Admin',
        logo: '/images/trc.jpg',
    },{
        title: 'whodunnit.md',
        url: 'https://whodunnit.co.za',
        location: 'Sandton, South Africa',
        roles: 'Web Design & Development, Graphic Designer',
        logo: '/images/whodunnit.jpg',
    }
]);


export function getClient(key: string): Client|null {
    return clients.value.find(client => client.title === key) ?? null;
}
