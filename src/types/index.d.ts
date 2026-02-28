import {ref} from "vue";
import Clikblox from "@/pages/projects/Clikblox.vue";

export interface MenuItem {
    directory?: boolean;
    executable?: boolean;
    permissions?: string;
    owner?: string;
    group?: string;
    size?: string;
    month?: string;
    time?: string;
    name: string;
    link?: string;
}

export interface Project {
    title: string
    name: string
    client: string
    link: string
    component: Component
    url?: string
    target: string
    roles: string
    logo?: string
    imageColumns?: number
    images?: {
        path: string
        caption: string
    }[],
    stack?: string[],
}
