import {createRouter, createWebHistory } from 'vue-router'
import {Contact} from "lucide-vue-next";

import Home from "@/pages/Home.vue";

const Readme = () => import("@/pages/Readme.vue");
const ProjectIndex = () => import("@/pages/projects/Index.vue");
const ProjectShow = () => import("@/pages/projects/Show.vue");
const License = () => import("@/pages/License.vue");
const About = () => import("@/pages/About.vue");
const Stack = () => import("@/pages/Stack.vue");
const ClientIndex = () => import("@/pages/clients/Index.vue");
const ClientShow = () => import("@/pages/clients/Show.vue");
const OssIndex = () => import('@/pages/oss/Index.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    { path: '/about', component: About, name: 'about' },
    {
      path: '/clients',
      children: [
        { path: '', component: ClientIndex, name: 'clients' },
        { path: ':client', component: ClientShow, name: 'clients.show', props: true },
      ]
    },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/license', component: License, name: 'license' },
    { path: '/oss', component: OssIndex, name: 'oss' },
    {
      path: '/projects',
      component: ProjectIndex,
      name: 'projects',
      children: [
        { path: ':project', component: ProjectShow, name: 'project.show' }
      ]
    },
    { path: '/readme', component: Readme, name: 'readme' },
    { path: '/stack', component: Stack, name: 'stack' },
  ],
})

export default router
