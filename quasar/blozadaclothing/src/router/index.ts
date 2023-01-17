import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // This will print in console the object Router every time we change the route
  Router.beforeEach((to, from, next) => {
    console.log(to)
    // TODO The name does not show correctly, fix it
    // document.title = `${process.env.VUE_APP_TITLE} ${ to.name != undefined ? `- ${String(to.name)}` : '' }`
    document.title = `B Lozada Clothing ${ to.name != undefined ? `- ${String(to.name)}` : '' }`
    next()
  });

  return Router;
});
