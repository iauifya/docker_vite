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
            <p>完成測驗抽 LinePoint 25點</p>
            <button @click="goActi()">活動詳情</button>
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
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
// import { postRSVCreate} from '@/composition-api/index';
// const payload = {
//         talentNo: '20220322',
//         ticketNum: '20220322',
//       }
//       postRSVCreate(payload);
// const dd = loginCertificationFn();
// console.log("dd", dd);
const goActi = ()=> {
  router.push('/description')
}


    let winHeight, navHeight, footerHeight, mainElement, mainStyle, mainHeight, marginMargin, totalHeight , mainMargin , initialMainHeight;
    // 計算高度
    const calculateHeights = ()=> {        
      winHeight = window.innerHeight;
      navHeight = document.querySelector('.navbar').clientHeight;
      footerHeight = document.querySelector('footer').clientHeight;
      mainElement = document.querySelector('.activity-block');
      mainStyle = window.getComputedStyle(mainElement);
      mainHeight = parseInt(mainStyle.height);
      mainMargin = parseInt(mainStyle.marginTop) + parseInt(mainStyle.marginBottom);
      totalHeight = navHeight + footerHeight + mainHeight + mainMargin;
      initialMainHeight = mainHeight;
    }
    // 調整高度
    const adjustHeight = ()=> {
      if(winHeight > totalHeight){
        const residue = winHeight - totalHeight;
        mainElement.style.height = mainHeight + residue + 'px';
      }
    }
    // 恢復高度
    const restoreHeight = ()=> {
      mainElement.style.height = '';
    }

    window.addEventListener('load', ()=> {
      calculateHeights();
      adjustHeight();
    })
    
    window.addEventListener('resize', () => {
      setTimeout(()=>{
        restoreHeight();
        calculateHeights();
        adjustHeight();
      }, 100);
    });

</script>

