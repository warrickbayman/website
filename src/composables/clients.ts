import {ref} from "vue";

export interface Client {
    title: string
    link: string
    url: string
    location: string
    roles: string
    logo: string
}

export const clients = ref<Client[]>([
    {
        title: 'hotpress_media.md',
        link: 'clients/hotpress',
        url: 'https://hotpress.co.za/',
        location: 'Johannesburg, South Africa',
        roles: 'Software Development, UI Design, DevOps, Database Admin',
        logo: '/images/hotpress.png',
    },{
        title: 'mycalture_marketing.md',
        link: 'clients/mycalture',
        url: 'https://mycalture.com/',
        location: 'Sandton, South Africa',
        roles: 'DevOps, Server Management, Database Admin',
        logo: '/images/mycalture.png',
    },{
        title: 'the_raw_connect.md',
        link: 'clients/trc',
        url: 'https://therawconnect.co.za',
        location: 'Bedfordview, South Africa',
        roles: 'Web Development, Hosting, DevOps, Database Admin',
        logo: '/images/trc.jpg',
    },{
        title: 'whodunnit.md',
        link: 'clients/whodunnit',
        url: 'https://whodunnit.co.za',
        location: 'Sandton, South Africa',
        roles: 'Web Design & Development, Graphic Designer',
        logo: '/images/whodunnit.jpg',
    }
]);
