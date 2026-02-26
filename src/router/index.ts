import {createRouter, createWebHistory } from 'vue-router'
import {Contact} from "lucide-vue-next";

import Home from "@/pages/Home.vue";

const Readme = () => import("@/pages/Readme.vue");
const ProjectIndex = () => import("@/pages/projects/Index.vue");
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
    {
      path: '/about',
      component: About,
      name: 'about',
      children: [
        { path: '/about', component: () => import("@/pages/about/Me.vue"), name: 'me' },
        { path: '/about/core', component: () => import("@/pages/about/Core.vue"), name: 'core' },
        { path: '/about/current', component: () => import("@/pages/about/Current.vue"), name: 'current' },
        { path: '/about/experience', component: () => import("@/pages/about/Experience.vue"), name: 'experience' },
        { path: '/about/future', component: () => import("@/pages/about/Future.vue"), name: 'future'},
      ]
    },
    {
      path: '/clients',
      children: [
        { path: '', component: ClientIndex, name: 'clients' },
        {
          path: '',
          component: ClientShow,
          name: 'clients.show',
          children: [
            { path: 'hotpress', component: () => import("@/pages/clients/HotPress.vue"), name: 'clients.hotpress' },
            { path: 'mycalture', component: () => import("@/pages/clients/Mycalture.vue"), name: 'clients.mycalture' },
            { path: 'trc', component: () => import("@/pages/clients/TRC.vue"), name: 'clients.trc' },
            { path: 'whodunnit', component: () => import("@/pages/clients/Whodunnit.vue"), name: 'clients.whodunnit' },
          ]
        },
      ]
    },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/license', component: License, name: 'license' },
    { path: '/oss', component: OssIndex, name: 'oss' },
    {
      path: '/projects',
      children: [
        { path: '', component: ProjectIndex, name: 'projects.index' },
        { path: 'clikblox', component: () => import('@/pages/projects/Clikblox.vue'), name: 'projects.clikblox' },
        { path: 'donnasfitness', component: () => import('@/pages/projects/DonnasFitness.vue'), name: 'projects.donnasfitness' },
        { path: 'eventpress', component: () => import('@/pages/projects/EventPress.vue'), name: 'projects.eventpress' },
        { path: 'eventpress-mobile', component: () => import('@/pages/projects/EventPressMobile.vue'), name: 'projects.eventpress.mobile' },
        { path: 'motorpress', component: () => import('@/pages/projects/MotorPress.vue'), name: 'projects.motorpress' },
        { path: 'teqapp', component: () => import('@/pages/projects/TeqApp.vue'), name: 'projects.teqapp' },
        { path: 'trc', component: () => import('@/pages/projects/TRC.vue'), name: 'projects.trc' }
      ]
    },
    { path: '/readme', component: Readme, name: 'readme' },
    { path: '/stack', component: Stack, name: 'stack' },
  ],
})

export default router
