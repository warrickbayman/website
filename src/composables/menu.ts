import type {Client, MenuItem, Project} from "@/types";
import type {MenuType} from "@/stores/terminal.ts";
import {clients} from "@/composables/clients.ts";
import {projects} from "@/composables/projects.ts";
import {oss} from "@/composables/oss.ts";

export function useMenu() {

    const mainMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        },{
            name: '.gitignore',
            link: '/gitignore',
        },{
            name: 'about_me',
            link: '/about',
            executable: true,
        }, {
            directory: true,
            name: 'clients/',
            link: '/clients',
        },{
            executable: true,
            name: 'contact',
            link: '/contact'
        },{
            name: 'LICENSE.md',
            link: '/license',
            permissions: 'rw-rw-r--'
        },{
            directory: true,
            name: 'oss/',
            link: '/oss',
        },{
            directory: true,
            name: 'projects/',
            link: '/projects',
        },{
            name: 'README.md',
            link: '/readme',
            permissions: 'rw-rw-r--'
        },{
            name: 'stack.md',
            link: '/stack',
            permissions: 'rw-rw-r--'
        }
    ];

    const clientMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        }, {
            directory: true,
            name: '..',
            link: '/',
        },
        ...clients.value.map((client: Client) => {
            return {
                name: client.title,
                link: `/clients/${client.title}`,
            }
        })
    ]

    const ossMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        }, {
            directory: true,
            name: '..',
            link: '/',
        },
        ...oss.value.map((oss: Project) => {
            return {
                name: oss.title,
                link: `/oss/${oss.title}`,
            }
        })
    ]

    const projectMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        },{
            directory: true,
            name: '..',
            link: '/',
        },
        ...projects.value.map((project: Project) => {
            return {
                name: project.title,
                link: `/projects/${project.title}`,
            }
        }),
    ];

    const items: Record<MenuType, MenuItem[]> = {
        main: mainMenuItems,
        clients: clientMenuItems,
        oss: ossMenuItems,
        projects: projectMenuItems,
    }

    return {
        items,
    }
}
