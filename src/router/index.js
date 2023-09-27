import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/HomeView.vue'
import description from '@/views/Description.vue'
import quiz from '@/views/Quiz.vue'
import jobrecommend from '@/views/JobRecommend.vue'
import jobrecommendlogin from '@/views/JobRecommendLogin.vue'
import working from '@/views/Working.vue'
import winner from '@/views/Winner.vue'



const router = createRouter ({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    // {
    //   path: '/index.asp',
    //   name: 'asp',
    //   component: home,
    //   meta: {
    //     title: '首頁︱1111人力銀行'
    //   }
    // },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首頁',
      }
    },
    {
      path: '/description',
      name: 'description',
      component: description,
      meta: {
        title: '活動說明',
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      component:quiz,
      meta: {
        title: '測你的甜',
      }
    },
    {
      path: '/jobrecommend',
      name: 'jobrecommend',
      component:jobrecommend,
      meta: {
        title: '職缺強打推薦',
      }
    },
    {
      path: '/jobrecommendlogin',
      name: 'jobrecommendlogin',
      component:jobrecommendlogin,
      meta: {
        title: '職缺強打推薦登入',
      }
    },
    {
      path: '/working',
      name: 'working',
      component:working,
      meta: {
        title: '打工前停看聽',
      }
    },
    {
      path: '/winner',
      name: 'winner',
      component:winner,
      meta: {
        title: '得獎公告',
      }
    },
    { path: '/:catchAll(.*)', name: '404', component: home } // router 例外處理
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 , behavior: 'smooth'})
      }, 300)
    })
  }
})

// router.beforeEach((to, from, next) => {
//   const title = to.query.seachType == 1 ? "111年度大學及四技姓名查榜︱入學榜單查詢-1111人力銀行" : to.query.seachType == 2 ? "111年度大學及四技應試號碼查榜︱入學榜單查詢-1111人力銀行" : "111年度大學及四技查榜服務︱入學榜單查詢-1111人力銀行"
//   const keywords = to.query.seachType == 1 ? "姓名查榜、大學放榜、大學申請入學、四技放榜、四技申請入學、放榜" : to.query.seachType == 2 ? "應試號碼查榜、大學放榜、大學申請入學、四技放榜、四技申請入學、放榜" : "大學放榜、大學申請入學、四技放榜、四技申請入學、放榜、姓名查榜、應試碼查榜"
//   const url = 'https://www.1111.com.tw' + to.href
//   document.title = title;
//   document.querySelector('meta[name="title"]') ? document.querySelector('meta[name="title"]').content = title : ''
//   document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').content = keywords : ''
//   document.querySelector('meta[name="twitter:title"]') ? document.querySelector('meta[name="twitter:title"]').content = title : ''
//   document.querySelector('meta[name="twitter:url"]') ? document.querySelector('meta[name="twitter:url"]').content = url : ''
//   document.querySelector('meta[name="twitter:keywords"]') ? document.querySelector('meta[name="twitter:keywords"]').content = keywords : ''
//   document.querySelector('meta[property="og:keywords"]') ? document.querySelector('meta[property="og:keywords"]').content = keywords : ''
//   document.querySelector('meta[property="og:site_name"]') ? document.querySelector('meta[property="og:site_name"]').content = title : ''
//   document.querySelector('meta[property="og:url"]') ? document.querySelector('meta[property="og:url"]').content = url : ''
//   document.querySelector('link[rel="canonical"]') ? document.querySelector('link[rel="canonical"]').href = url : ''
//   next()
// });

export default router