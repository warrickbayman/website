import {ref} from "vue";

export interface Project {
    title: string
    name: string
    link?: string
    url: string
    roles: string
    logo?: string
}

export const projects = ref<Project[]>([
    {
        title: 'clikblox.md',
        name: 'ClikBlox',
        link: 'projects/clikblox',
        url: 'https://clikblox.com',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/clikblox.png',
    },{
        title: 'eventpress.md',
        name: 'EventPress',
        link: 'projects/eventpress',
        url: 'https://eventpress.co.za',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/eventpress.png',
    },{
        title: 'motorpress.md',
        name: 'MotorPress',
        link: 'projects/motorpress',
        url: 'https://motorpress.co.za',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/motorpress.png',
    },{
        title: 'mycalture.md',
        name: 'Mycalture Website',
        link: 'projects/mycalture',
        url: 'https://mycalture.com',
        roles: 'Development, Web Design',
        logo: '/images/mycalture.png',
    },{
        title: 'teqapp.md',
        name: 'TeqApp',
        link: 'projects/teqapp',
        url: 'https://teqapp.co.za',
        roles: 'Development, UI Design, Server Management, Database Admin, DevOps',
    },{
        title: 'trc.md',
        name: 'TRC',
        link: 'projects/trc',
        url: 'https://therawconnect.co.za',
        roles: 'Development, Server Management, Database Admin, DevOps',
        logo: '/images/trc.jpg',
    }
]);
