import {ref} from "vue";
import type {Project} from "@/types";

export const oss = ref<Project[]>([
    {
        title: 'platoon.md',
        name: 'Platoon',
        client: 'THEPUBLICGOOD (Pty) Ltd.',
        link: 'oss/platoon.md',
        url: 'https://github.com/tpg/platoon',
        target: 'Public',
        roles: 'Development',
        stack: [
            'PHP',
        ]
    },{
        title: 'deadbolt.md',
        name: 'Deadbolt',
        client: 'THEPUBLICGOOD (Pty) Ltd.',
        link: 'oss/deadbolt.md',
        url: 'https://github.com/tpg/deadbolt',
        target: 'Public',
        roles: 'Development',
        stack: [
            'PHP',
        ]
    },{
        title: 'is_presentable.md',
        name: 'IsPresentable',
        client: 'THEPUBLICGOOD (Pty) Ltd.',
        link: 'oss/is_presentable.md',
        url: 'https://github.com/tpg/ispresentable',
        target: 'public',
        roles: 'Development',
        stack: [
            'PHP',
        ]
    }
]);

export function getOss(key: string): Project|null {
    return oss.value.find(oss => oss.link === 'oss/' + key) ?? null;
}
