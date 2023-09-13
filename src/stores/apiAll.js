import { getJob, getCorp } from '@/composition-api/index.js';
import { defineStore } from 'pinia'

export const useJobStore = defineStore({
  id: 'job',
  state: () => ({
    jobList: []
  }),
  actions: {
    async fetchJob() {
      const res = await getJob();
      this.$state.jobList = res.jobList;
      // console.log('res', res.jobList);
    }
  }
})

export const useCorpStore = defineStore({
  id: 'corp',
  state: () => ({
    corpList: []
  }),
  actions: {
    async fetchCorp() {
      const res = await getCorp();
      this.$state.corpList = res;
      // console.log('res', res);
    }
  }
})