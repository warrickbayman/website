import {createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue";

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
      component: () => import("@/pages/About.vue"),
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
        { path: '', component: () => import("@/pages/clients/Index.vue"), name: 'clients' },
        {
          path: '',
          component: () => import("@/pages/clients/Show.vue"),
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
    { path: '/contact', component: () => import("@/pages/Contact.vue"), name: 'contact' },
    { path: '/license', component: () => import("@/pages/License.vue"), name: 'license' },
    {
      path: '/oss',
      children: [
        { path: '', component: () => import('@/pages/oss/Index.vue'), name: 'oss.index' },
        { path: ':name', component: () => import('@/pages/oss/Show.vue'), name: 'oss.show', props: true },
      ]
    },
    {
      path: '/projects',
      children: [
        { path: '', component: () => import("@/pages/projects/Index.vue"), name: 'projects.index' },
        { path: ':name', component: () => import("@/pages/projects/Show.vue"), name: 'projects.show', props: true },
      ]
    },
    { path: '/readme', component: () => import("@/pages/Readme.vue"), name: 'readme' },
    { path: '/stack', component: () => import("@/pages/Stack.vue"), name: 'stack' },
  ],
})

export default router
