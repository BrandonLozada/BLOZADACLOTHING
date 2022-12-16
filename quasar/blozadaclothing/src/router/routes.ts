import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/profile', component: () => import('pages/UserProfile.vue') },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error404',
    component: () => import('pages/ErrorNotFound.vue'),
    children: [
      {path: '', component: () => import('pages/ErrorNotFound.vue')},
    ],
  },
];

export default routes;
