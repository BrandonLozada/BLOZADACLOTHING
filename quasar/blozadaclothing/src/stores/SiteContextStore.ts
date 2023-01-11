import { defineStore } from 'pinia'

export const useContextStore = defineStore('SiteContextStore', {
  state: () => ({
    selectedProduct: toString(),
    currentPage: toString(),
  }),

  actions: {
  },
  getters: {
  },
})
