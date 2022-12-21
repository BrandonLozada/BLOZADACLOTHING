import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let baseURL = '';          // Django Rest Framework con sus apps
let apiAuthURL = '';       // Servicio de Autenticación, puede ser un proyecto aparte para su gestión
let apiCatalogsURL = '';   // Catalogos, pueden ser de estados, colonias, etc.

baseURL = 'http://127.0.0.1:8000/api/v1'
apiAuthURL = 'https://auth.sitio.com.mx/api/v1'
apiCatalogsURL = 'https://api.sitio.com.mx/rest/v1'

const apiController = new AbortController();
const api = axios.create({ baseURL: baseURL });
const apiCat = axios.create({baseURL : apiCatalogsURL });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, apiCat, axios, apiController };
