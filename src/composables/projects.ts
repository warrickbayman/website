import {ref} from "vue";

export interface Project {
    title: string
    name: string
    client: string
    link?: string
    url?: string
    target: string
    roles: string
    logo?: string
    images?: {
        path: string
        caption: string
    }[],
    stack?: string[],
}

export const projects = ref<Project[]>([
    {
        title: 'clikblox.md',
        name: 'ClikBlox',
        client: 'HotPress Media (Pty) Ltd.',
        link: 'projects/clikblox',
        url: 'https://clikblox.com',
        target: 'Public',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/clikblox.png',
        images: [
            {
                path: '/images/projects/clikblox/login.png',
                caption: 'Login',
            }, {
                path: '/images/projects/clikblox/page.png',
                caption: 'Page Layout Editor',
            }, {
                path: '/images/projects/clikblox/component.png',
                caption: 'Page Component Editor',
            }, {
                path: '/images/projects/clikblox/url.png',
                caption: 'Project URL',
            }, {
                path: '/images/projects/clikblox/appearance.png',
                caption: 'Project Appearance',
            }
        ],
        stack: [
            'Laravel 12',
            'PHP 8.5',
            'MySQL 8.5',
            'Vue',
            'Typescript',
            'Inertia',
            'TailwindCSS',
            'Shadcn-vue',
            'TipTap',
            'Vimeo',
            'Paystack',
            'Supervisor',
        ]
    },{
        title: 'donnas_fitness.md',
        name: 'Donna\'s Health and Fitness',
        client: 'Donna\'s Health and Fitness',
        link: 'projects/donnasfitness',
        url: 'https://gym.donnasfitness.co.za',
        target: 'Public',
        roles: 'Development, UI, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/donnasfitness.png',
        stack: [
            'Laravel 12',
            'PHP 8.4',
            'MySQL 8',
            'Redis',
            'Vue 3',
            'JavaScript',
            'Inertia',
            'TailwindCSS',
            'TipTap',
            'Vimeo',
            'QEncode',
            'Paystack',
            'Supervisor',
            'Mailgun',
        ]
    },{
        title: 'eventpress.md',
        name: 'EventPress',
        client: 'HotPress Media (Pty) Ltd.',
        link: 'projects/eventpress',
        url: 'https://eventpress.co.za',
        target: 'Public/Enterprise',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/eventpress.png',
        stack: [
            'Laravel 12',
            'PHP 8.5',
            'MySQL 8.5',
            'Redis',
            'SQL Server 2017+',
            'Vue 2/3',
            'JavaScript/Typescript',
            'Inertia',
            'Blade',
            'TailwindCSS',
            'TipTap',
            'Vimeo',
            'Paystack',
            'PayFast',
            'Supervisor',
            'Google Auth',
            'Mailgun',
            'DigitalOcean',
            'SMSPortal',
            'WhatsApp Cloud API',
            'Slack',
        ]
    }, {
        title: 'eventpress_mobile.md',
        name: 'EventPress Mobile Checkin',
        client: 'HotPress Media (Pty) Ltd.',
        link: 'projects/eventpress-mobile',
        url: 'https://eventpress.co.za',
        target: 'Closed',
        roles: 'Development, UI Design, Project Management',
        logo: '/images/eventpress.png',
        stack: [
            'Laravel 12',
            'NativePHP 2/3',
            'Android',
            'Vue 3',
        ]
    }, {
        title: 'motorpress.md',
        name: 'MotorPress',
        client: 'HotPress Media (Pty) Ltd.',
        link: 'projects/motorpress',
        url: 'https://motorpress.co.za',
        target: 'Media',
        roles: 'Development, UI design, Server Management, Database Admin, DevOps, Project Management',
        logo: '/images/motorpress.png',
        stack: [
            'Laravel 11/12',
            'PHP 8.3/8.5',
            'Vue 3',
            'MySQL 8',
            'Redis',
            'JavaScript/Typescript',
            'Inertia',
            'TailwindCSS',
            'QEncode',
            'Google Cloud',
            'Supervisor',
            'Mailgun',
            'DigitalOcean',
            'Slack',
        ],
    },{
        title: 'teqapp.md',
        name: 'TeqApp',
        client: 'Mycalture Marketing cc.',
        link: 'projects/teqapp',
        target: 'Enterprise',
        roles: 'Development, UI Design, Server Management, Database Admin, DevOps',
        stack: [
            'Laravel 12',
            'Vue 3',
            'Inertia',
            'TailwindCSS',
            'MySQL 8',
            'Redis',
            'Javascript',
            'TNTSearch',
            'Mailgun',
            'SMSPortal',
            'Mailgun',
        ],
    },{
        title: 'trc.md',
        name: 'TRC',
        client: 'The Raw Connect (Pty) Ltd.',
        link: 'projects/trc',
        url: 'https://therawconnect.co.za',
        target: 'Public',
        roles: 'Development, Server Management, Database Admin, DevOps',
        logo: '/images/trc.jpg',
        stack: [
            'Laravel 12',
            'Vue 3',
            'Inertia',
            'MySQL 8',
            'Redis',
            'Typescript',
            'TNTSearch',
            'Mailgun',
            'SMSPortal',
        ],
    }
]);
