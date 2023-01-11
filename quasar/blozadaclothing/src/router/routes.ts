import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },

      // This will be show information about firebase or another thing
      { path: 'my-user/:id', component: () => import('pages/UserInformation.vue') },
      // The next path 'my-profile' will show all the components below (profile, data, addresses, cards, payment methods, etc.)
      { path: 'my-profile', component: () => import('pages/UserProfile.vue') },
      // This will be a resume of whatever
      { path: 'my-resume', component: () => import('pages/UserResume.vue') },
      { path: 'my-data', component: () => import('pages/UserData.vue') },
      { path: 'my-addresses', component: () => import('pages/UserAddresses.vue') },
      { path: 'my-cards', component: () => import('pages/UserCard.vue') },
      // This is when there is a method other than a credit card such as PayPal, Stripe, Mercado Pago.
      { path: 'my-payment-methods', component: () => import('pages/UserPaymentMethods.vue') },

      {
        path: '/forms/',
        name: 'Forms',
        component: () => import('pages/PageForms.vue'),
        children: [
          {
            path: '/:catchAll(.*)*',
            component: () => import('pages/PageForms.vue'),
          },
        ],
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  // Formularios dinamicos y reutilizables | Aquí va un Layout diferente al MainLayout en los formularios
  // {
  //   path: '/forms/',
  //   name: 'Forms',
  //   // component: () => import('pages/PageForms.vue'),
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     // { path: '', component: () => import('pages/PageForms.vue') },
  //     {
  //       path: '/:catchAll(.*)*',
  //       component: () => import('pages/PageForms.vue'),
  //     },
  //   ],
  // },

  // Rutas de compras
  // {
  //   path: '/my-orders',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('components/orders/ListOrders.vue') },
  //     { path: '/:search', component: () => import('components/orders/SearchOrders.vue') },
  //     { path: '/:id', component: () => import('components/orders/OrderDetails.vue') }
  //   ],
  // },

  // Rutas de productos
  // {
  //   path: '/shop',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'all', component: () => import('pages/ShopAll.vue') },
  //     { path: 'new', component: () => import('pages/ShopNew.vue') },
  //     {
  //       path: 'product/:name', component: () => import('pages/ShopProduct.vue'),
  //       children: [
  //         {
  //           path: 'overview',
  //           component: () => import('pages/ShopProduct.vue')
  //         }
  //         ]
  //     }
  //     ]
  // },

  // Rutas de pedidos
  // {
  //   path: '/my-orders',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('components/orders/ListOrders.vue') },
  //     { path: 'search', component: () => import('components/orders/SearchOrders.vue') },
  //     {
  //       path: 'order/:id', component: () => import('components/orders/OrderId.vue'),
  //       children: [
  //         {
  //           path: 'details',
  //           component: () => import('components/orders/OrderStatus.vue')
  //         }
  //         ]
  //     }
  //     ]
  // },


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
