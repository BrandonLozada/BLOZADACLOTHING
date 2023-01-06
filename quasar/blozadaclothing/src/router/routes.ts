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

  // Formularios dinamicos y reutilizables
  {
    path: '/forms',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/profile-test', component: () => import('components/forms/UserForm.vue') },
      { path: '/user-form', component: () => import('pages/UserProfile.vue') },
      {
        path: '/:catchAll(.*)*',
        // component: () => import('pages/PageForms.vue'),
        component: () => import('layouts/MainLayout.vue'),
      },
    ],
  },

  // Rutas de productos
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'all', component: () => import('pages/ShopAll.vue') },
      { path: 'new', component: () => import('pages/ShopNew.vue') },
      {
        path: 'product/:name', component: () => import('pages/ShopProduct.vue'),
        children: [{
          path: 'overview',
          component: () => import('pages/ShopProduct.vue') }]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error404',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/ErrorNotFound.vue')},
    ],
  },
];

export default routes;
