import {type Component, ref} from "vue";
import Clikblox from "@/pages/projects/Clikblox.vue";
import DonnasFitness from "@/pages/projects/DonnasFitness.vue";
import EventPress from "@/pages/projects/EventPress.vue";
import EventPressMobile from "@/pages/projects/EventPressMobile.vue";
import MediaLink from "@/pages/projects/MediaLink.vue";
import MotorPress from "@/pages/projects/MotorPress.vue";
import TeqApp from "@/pages/projects/TeqApp.vue";
import TRC from "@/pages/projects/TRC.vue";
import type {Project} from "@/types";

export const projects = ref<Project[]>([
    {
        title: 'clikblox.md',
        name: 'ClikBlox',
        client: 'HotPress Media (Pty) Ltd.',
        component: Clikblox,
        link: 'projects/clikblox.md',
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
        component: DonnasFitness,
        link: 'projects/donnas_fitness.md',
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
        ],
        images: [
            {
                path: '/images/projects/donnas/dashboard.png',
                caption: 'My Fitness Dashboard',
            },{
                path: '/images/projects/donnas/categories.png',
                caption: 'Workout Categories',
            },{
                path: '/images/projects/donnas/videos.png',
                caption: 'Workouts',
            },{
                path: '/images/projects/donnas/video.png',
                caption: 'Video Details',
            }
        ]
    },{
        title: 'eventpress.md',
        name: 'EventPress',
        client: 'HotPress Media (Pty) Ltd.',
        component: EventPress,
        link: 'projects/eventpress.md',
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
        ],
        images: [
            {
                path: '/images/projects/eventpress/home.png',
                caption: 'Login',
            }, {
                path: '/images/projects/eventpress/login.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/events.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/overview.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/distribution.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/responses.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/rsvp-settings.png',
                caption: 'Events',
            }, {
                path: '/images/projects/eventpress/rsvp.png',
                caption: 'Events',
            },
        ]
    }, {
        title: 'eventpress_mobile.md',
        name: 'EventPress Mobile Checkin',
        client: 'HotPress Media (Pty) Ltd.',
        component: EventPressMobile,
        link: 'projects/eventpress_mobile.md',
        url: 'https://eventpress.co.za',
        target: 'Closed',
        roles: 'Development, UI Design, Project Management',
        logo: '/images/eventpress.png',
        stack: [
            'Laravel 12',
            'NativePHP 2/3',
            'Android',
            'Vue 3',
        ],
        imageColumns: 2,
        images: [
            {
                path: '/images/projects/eventpress_mobile/checkin_scan.png',
                caption: 'Scanner',
            }, {
                path: '/images/projects/eventpress_mobile/checkin_password.png',
                caption: 'Checkin Password',
            }, {
                path: '/images/projects/eventpress_mobile/install.png',
                caption: 'Checkin Installation',
            }, {
                path: '/images/projects/eventpress_mobile/dashboard.png',
                caption: 'Checkin Dashboard',
            }, {
                path: '/images/projects/eventpress_mobile/scanned.png',
                caption: 'Scanned Attendee',
            }, {
                path: '/images/projects/eventpress_mobile/checked.png',
                caption: 'Checked In',
            }
        ],
    }, {
        title: 'medialink_api.md',
        name: 'MediaLink API',
        client: 'HotPress Media (Pty) Ltd.',
        component: MediaLink,
        link: 'projects/medialink_api.md',
        url: 'https://y2fmyzh7h0.apidog.io',
        target: 'Public',
        roles: 'Development, API Design, Documentation, Project Management',
        logo: '/images/medialink.png',
        stack: [
            'Laravel 12',
            'PHP 8.5',
            'APIDog',
            'MySQL 8',
            'Redis',
        ],
        images: [
            {
                path: '/images/projects/medialink/docs.png',
                caption: 'API Documentation',
            }
        ]
    }, {
        title: 'motorpress.md',
        name: 'MotorPress',
        client: 'HotPress Media (Pty) Ltd.',
        component: MotorPress,
        link: 'projects/motorpress.md',
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
        images: [
            {
                path: '/images/projects/motorpress/login.png',
                caption: 'Login',
            }, {
                path: '/images/projects/motorpress/toyota.png',
                caption: 'Toyota Login',
            }, {
                path: '/images/projects/motorpress/articles.png',
                caption: 'Article Index',
            }, {
                path: '/images/projects/motorpress/article.png',
                caption: 'Article Reader',
            }, {
                path: '/images/projects/motorpress/edit.png',
                caption: 'Edit Article',
            }, {
                path: '/images/projects/motorpress/attachments.png',
                caption: 'Attachments',
            }, {
                path: '/images/projects/motorpress/distribution.png',
                caption: 'Distribution Settings',
            }, {
                path: '/images/projects/motorpress/brands.png',
                caption: 'Brands',
            }, {
                path: '/images/projects/motorpress/vehicles.png',
                caption: 'Vehicles',
            },
        ]
    },{
        title: 'teqapp.md',
        name: 'TeqApp',
        client: 'Mycalture Marketing cc.',
        component: TeqApp,
        link: 'projects/teqapp.md',
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
        images: [
            {
                path: '/images/projects/teqapp/dashboard.png',
                caption: 'Login',
            }, {
                path: '/images/projects/teqapp/jobs.png',
                caption: 'Login',
            }, {
                path: '/images/projects/teqapp/job.png',
                caption: 'Login',
            }, {
                path: '/images/projects/teqapp/customer.png',
                caption: 'Login',
            }, {
                path: '/images/projects/teqapp/units.png',
                caption: 'Login',
            },
        ]
    }, {
        title: 'trc.md',
        name: 'TRC',
        client: 'The Raw Connect (Pty) Ltd.',
        component: TRC,
        link: 'projects/trc.md',
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
        images: [
            {
                path: '/images/projects/trc/home.png',
                caption: 'Home',
            }, {
                path: '/images/projects/trc/business.png',
                caption: 'Business Page',
            }, {
                path: '/images/projects/trc/reservations.png',
                caption: 'Reservation',
            }
        ],
    }
]);

export function getProject(key: string): Project|null {
    return projects.value.find(project => project.link === 'projects/' + key) ?? null;
}
