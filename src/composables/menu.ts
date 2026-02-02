import type {MenuItem} from "@/types";
import type {MenuType} from "@/stores/terminal.ts";

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
            name: 'about_me.md',
            link: '/about',
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
            link: '/license'
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
        },{
            name: 'stack.md',
            link: '/stack',
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
        },{
            name: 'hotpress_media.md',
            link: 'clients/hotpress',
        },{
            name: 'mycalture_marketing.md',
            link: 'clients/mycalture',
        },{
            name: 'the_raw_connect.md',
            link: 'clients/trc',
        },{
            name: 'whodunnit.md',
            link: 'clients/whodunnit',
        }
    ]

    const ossMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        }, {
            directory: true,
            name: '..',
            link: '/',
        }
    ]

    const projectMenuItems: MenuItem[] = [
        {
            directory: true,
            name: '.',
        },{
            directory: true,
            name: '..',
            link: '/',
        }
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
