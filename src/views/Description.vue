<template>
  <main class="description_main">
    <section class="description-block" ref="mainElement">
      <article class="description-content d-flex flex-column container-inner">
        <h1>活動說明</h1>
        <p>
          活動時間：即日起～2023/10/31<br>
          活動獎項：LINE POINTS 25點 (限量50名)<br>
          活動辦法：凡參與測驗活動之網友皆具有抽獎資格，每人限兌領乙次。<br>
          活動期間完整完成測驗之會員，活動小組將於活動後抽出，得獎資訊將以網站得獎名單公告為主，恕不另行通知。我方將於2023/11/6~11/20依據您在1111人力銀行註冊時填寫的信箱，寄送LINE POINTS序號。<a href="https://points.line.me/pointcode#/pointcode/form" target="_blank">【兌換序號請點我】</a>
        </p>
        <button @click="goQuiz()">立即測驗</button>
        <Svg></Svg>
      </article>
    </section>

    
    <!-- <div class="btn" @click="goQuiz()">立即測驗</div> -->
  </main>
</template>



<script setup>
import { ref,onMounted,onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from "vue-router";
//import { useTalentNO } from '@/composable/useTalentNO.js'
// import { loginCertificationFn} from '@/composition-api/index';

import { TalentNo } from '@/api/apiAll/shared';
import { getPathname } from '@/composable/usePathname.js'
import Svg from '@/components/svg.vue'

const talentNO = TalentNo()
const router = useRouter()
const usePathname = getPathname()

const mainElement = ref()



console.log(talentNO)

const goQuiz = ()=> {
  if(!talentNO){
    alert('您尚未登入');
    const pathQuiz = "quiz"
    //const fullUrl = import.meta.env.VITE_BASE_URL + pathQuiz
    const cookieRouterWin_encodeURI = encodeURIComponent(import.meta.env.VITE_BASE_URL + pathQuiz);
    location.href = location.host === "192.168.1.234" ? "http://192.168.1.234/talents/memberlogin.asp?ref=" + cookieRouterWin_encodeURI + "&IsThirdParty=true" : "https://www.1111.com.tw/login/index?ReturnUrl=" + cookieRouterWin_encodeURI + "&IsThirdParty=true";
  }
  router.push('/quiz')
}

//const footerHeight = ref()
let winHeight, navHeight, mainStyle, mainHeight, footerHeight, mainMargin, totalHeight,initialMainHeight;
// 計算高度
const calculateHeights = ()=> {        
  winHeight = window.innerHeight;
  mainStyle = window.getComputedStyle(mainElement.value);
  mainHeight = parseInt(mainStyle.height);
  mainMargin = parseInt(mainStyle.marginTop) + parseInt(mainStyle.marginBottom);
  totalHeight = navHeight + footerHeight + mainHeight + mainMargin;
  initialMainHeight = mainHeight;
}
// 調整高度
const adjustHeight = ()=> {
  if(winHeight > totalHeight){
    const residue = winHeight - totalHeight;
    mainElement.value.style.height = mainHeight + residue + 'px';
  }
}
// 恢復高度
const restoreHeight = ()=> {
  mainElement.value.style.height = '';
}

let setHeight = ()=> {
  calculateHeights();
  adjustHeight();
}
let changeHeight = () => {
  setTimeout(()=>{
    restoreHeight();
    calculateHeights();
    adjustHeight();
  }, 100);
}
onMounted(() => {
  navHeight = document.querySelector('.navbar').clientHeight;
  footerHeight = document.querySelector('footer').clientHeight;
  // mainElement = document.querySelector('.description-block');
  console.log(mainElement.value)
  window.addEventListener('load',setHeight)
  window.addEventListener('resize', changeHeight);

})
onBeforeUnmount(() => {
  window.removeEventListener('load',setHeight)
  window.removeEventListener('resize', changeHeight);
})

</script>

