import type {MenuItem} from "@/types";
import type {MenuType} from "@/stores/terminal.ts";
import {type Client, clients} from "@/composables/clients.ts";
import {type Project, projects} from "@/composables/projects.ts";
import {type OpenSource, oss} from "@/composables/oss.ts";

export function useMenu() {

    const mainMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        }, {
            directory: true,
            owner: 'root',
            group: 'root',
            name: '..',
            permissions: 'rwx------',
        },{
            name: '.gitignore',
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
                link: client.link,
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
        ...oss.value.map((oss: OpenSource) => {
            return {
                name: oss.title,
                link: oss.link,
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
                link: project.link,
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
