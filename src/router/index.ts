import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import Readme from "@/pages/Readme.vue";
import ProjectIndex from "@/pages/projects/Index.vue";
import ProjectShow from "@/pages/projects/Show.vue";
import License from "@/pages/License.vue";
import About from "@/pages/About.vue";
import Stack from "@/pages/Stack.vue";
import {Contact} from "lucide-vue-next";
import ClientIndex from "@/pages/clients/Index.vue";
import ClientShow from "@/pages/clients/Show.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'home' },
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
    { path: '/oss', component: Home, name: 'oss' },
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
