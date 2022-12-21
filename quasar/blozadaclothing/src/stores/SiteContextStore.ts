import {defineStore} from 'pinia';

export const useContextStore = defineStore('SiteeContextStore', {
  state: () => ({
    selected_product: toString(),
    current_page: toString(),
    first_time: null,
  }),

  actions: {
  },
  getters: {
  },
})
