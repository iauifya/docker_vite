<template>

<main>
    <div class="activity-block">
      <div class="bg-group">
        <!-- img-cloud -->
        <img class="img-cloud" src="@/assets/images/index/bg-cloud.svg" alt="兼職打工-背景雲朵圖"  title="兼職打工-背景雲朵圖">
        <!-- img-bushes -->
        <img class="img-bushes" src="@/assets/images/index/bg-bushes.svg" alt="兼職打工-背景學校圖" title="兼職打工-背景學校圖">
        <!-- img-school -->
        <img class="img-school" src="@/assets/images/index/bg-school.svg" alt="兼職打工-背景樹叢圖" title="兼職打工-背景樹叢圖">
      </div>
      <div class="activity-content">
        <article class="centent-group">
          <!-- 左側標題文字區 -->
          <div class="main-group">
            <h2>
              <span>嗑糖!你是哪顆糖?</span>
              <img src="@/assets/images/index/title.svg" alt="嗑糖!你是哪顆糖" title="嗑糖!你是哪顆糖">
            </h2>
            <p>完成測驗抽 LINE POINTS 25點</p>
            <button @click="goDesc()">活動詳情</button>
          </div>
          <!-- 上文字 -->
          <h3 class="sub-title">
            <img src="@/assets/images/index/sub-title.webp" alt="快來測出你的糖果類型找到最適合的未來打工!">
          </h3>
          <!-- 右側圖像 -->
          <div class="persons-group">
            <img class="bg-person-01" src="@/assets/images/index/bg-person-01.svg" alt="兼職打工-形象學生圖" title="兼職打工-形象學生圖">
            <img class="bg-person-02" src="@/assets/images/index/bg-person-02.svg" alt="兼職打工-形象學生圖" title="兼職打工-形象學生圖">
            <img class="bg-person-03" src="@/assets/images/index/bg-person-03.svg" alt="兼職打工-形象學生圖" title="兼職打工-形象學生圖">
          </div>
          <!-- 糖果圖像 -->
          <div class="candy-group">
            <img class="bg-candy-01" src="@/assets/images/index/bg-candy-red.svg" alt="兼職打工-糖果裝飾圖" title="兼職打工-糖果裝飾圖">
            <img class="bg-candy-02" src="@/assets/images/index/bg-candy-yellow.svg" alt="兼職打工-糖果裝飾圖" title="兼職打工-糖果裝飾圖">
            <img class="bg-candy-03" src="@/assets/images/index/bg-candy-green.svg" alt="兼職打工-糖果裝飾圖" title="兼職打工-糖果裝飾圖">
          </div>
        </article>
      </div>
    </div>
  </main>

</template>





<script setup>
//import { loginCertificationFn} from '@/composition-api/index';
import { ref,onMounted,onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

const goDesc = ()=> {
  router.push('/description')
}
// const mainElement = ref()
// let winHeight, navHeight, footerHeight, mainStyle, mainHeight, mainMargin, totalHeight,initialMainHeight;
// 計算高度
// const calculateHeights = ()=> {        
//   winHeight = window.innerHeight;
//   mainStyle = window.getComputedStyle(mainElement.value);
//   mainHeight = parseInt(mainStyle.height);
//   mainMargin = parseInt(mainStyle.marginTop) + parseInt(mainStyle.marginBottom);
//   totalHeight = navHeight + footerHeight + mainHeight + mainMargin;
//   initialMainHeight = mainHeight;
// }
// 調整高度
// const adjustHeight = ()=> {
//   if(winHeight > totalHeight){
//     const residue = winHeight - totalHeight;
//     mainElement.value.style.height = mainHeight + residue + 'px';
//   }
// }
// 恢復高度
// const restoreHeight = ()=> {
//   mainElement.value.style.height = '';
// }

// let setHeight = ()=> {
//   calculateHeights();
//   adjustHeight();
// }
// let changeHeight = () => {
//   setTimeout(()=>{
//     restoreHeight();
//     calculateHeights();
//     adjustHeight();
//   }, 100);
// }
onMounted(() => {
  document.querySelector('body').className = 'indexMain'
  // navHeight = document.querySelector('.navbar').clientHeight;
  // footerHeight = document.querySelector('footer').clientHeight;
  // mainElement = document.querySelector('.activity-block');
  // console.log(mainElement.value)
  // window.addEventListener('load',setHeight)
  // window.addEventListener('resize', changeHeight);

})
onBeforeUnmount(() => {
  document.body.removeAttribute('class')
  // window.removeEventListener('load',setHeight)
  // window.removeEventListener('resize', changeHeight);
})

import { getPathname } from '@/composable/usePathname.js'

const usePathname = getPathname()

</script>

