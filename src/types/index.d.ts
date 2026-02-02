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
