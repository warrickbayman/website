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
    hint?: string;
}

export interface Project {
    title: string
    name: string
    client: string
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

export interface Client {
    title: string
    url: string
    location: string
    roles: string
    logo: string
}
