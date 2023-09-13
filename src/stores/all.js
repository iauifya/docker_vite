import { defineStore } from 'pinia'
export const useAll = defineStore({
  id: 'all',
  state: () => ({
    loading: false, // loading 開關
  }),
})