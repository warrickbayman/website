import {ref} from "vue";

export interface OpenSource {
    title: string
    name: string
    link: string
    url?: string

}

export const oss = ref<OpenSource[]>([
    {
        title: 'platoon.md',
        name: 'Platoon',
        link: 'oss/platoon',
        url: 'https://github.com/tpg/platoon',
    },{
        title: 'deadbolt.md',
        name: 'Deadbolt',
        link: 'oss/deadbolt',
        url: 'https://github.com/tpg/deadbolt',
    }
]);
