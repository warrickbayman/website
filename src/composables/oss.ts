import {ref} from "vue";
import Platoon from "@/pages/oss/Platoon.vue";
import Deadbolt from "@/pages/oss/Deadbolt.vue";
import type {Project} from "@/types";

export const oss = ref<Project[]>([
    {
        title: 'platoon.md',
        name: 'Platoon',
        client: 'THEPUBLICGOOD (Pty) Ltd.',
        component: Platoon,
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
        component: Deadbolt,
        link: 'oss/deadbolt.md',
        url: 'https://github.com/tpg/deadbolt',
        target: 'Public',
        roles: 'Development',
        stack: [
            'PHP',
        ]
    }
]);

export function getOss(key: string): Project|null {
    return oss.value.find(oss => oss.link === 'oss/' + key) ?? null;
}
