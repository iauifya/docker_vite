<template>
  <main>
    <h2>職缺強打內容</h2>
    <!-- <TheWelcome。 -->
  </main>
</template>





<script setup>
import { reactive, ref } from "vue"
// import { loginCertificationFn} from '@/composition-api/index';
// import TheWelcome from '../components/TheWelcome.vue'
// import { postRSVCreate} from '@/composition-api/index';
// const payload = {
//         talentNo: '20220322',
//         ticketNum: '20220322',
//       }
//       postRSVCreate(payload);
// const dd = loginCertificationFn();
// console.log('dd', dd);

const testResultJson = reactive ([
  {
    number: '1', 
    title: '薄荷涼糖', 
    recoJob: '儲備幹部、業務類', 
    recoJobHref: 'https://1111.com.tw/215998/', 
    feature: '不畏挑戰的你，一旦設定目標便會全力衝刺，如同薄荷涼糖的嗆涼，是股不容忽視的強大氣場', 
    advantage: '主動積極、具強烈的目標執行力，分析敏銳，決斷的決策能力', 
    warning: '可能發展為自大或控制欲強，難以同理他人情緒行為。',
  },
  {
    number: '2', 
    title: '棒棒糖', 
    recoJob: '服務業、時尚產業、演藝產業', 
    recoJobHref: 'https://1111.com.tw/215999/', 
    feature: '外向熱情、歡樂一百點是你的獨特魅力，就像五彩繽紛的棒棒糖，總是最耀眼的存在', 
    advantage: '流暢的表達能力、善於說服他人，引導交談氛圍，強烈好奇心與熱情', 
    warning: '表現欲、誇大事實、行事難以規範且不擅長專注處理事務',
  },
  {
    number: '3', 
    title: '水果軟糖', 
    recoJob: '行政文書、人資、客服', 
    recoJobHref: 'https://1111.com.tw/216000/', 
    feature: '老少咸宜的水果軟糖，有誰不愛? 就像隨和溫暖的你，讓周圍朋友經常感受到你的貼心之處', 
    advantage: '溫和好相處，樂於付出幫助他人，沉穩隨和且具有高度耐心與自制力', 
    warning: '行事被動、安靜較無主見，面對突如其來變化較難馬上適應。',
  },
  {
    number: '4', 
    title: '咖啡硬糖', 
    recoJob: '會計類、工程機械類', 
    recoJobHref: 'https://1111.com.tw/216001/', 
    feature: '追求完美專業的你，不眠不休也要顧到每一個小細節，咖啡硬糖幫你提神，也跟你的肝一樣硬', 
    advantage: '注重細節的完美主義，遵循規範與程序，辦事精準、善於規劃。', 
    warning: '容易鑽牛角尖，過度追求瑣碎細節的執著，不小心就會造成拖延',
  },
  {
    number: '5', 
    title: '跳跳糖', 
    recoJob: '銷售、廣告類', 
    recoJobHref: 'https://1111.com.tw/216002/', 
    feature: '無論任何場合，你是眾人最關注的焦點，外放直接的溝通方式，像吃到跳跳糖，給人最直接的感官刺激', 
    advantage: '外放熱情、精明具有觀察力、有著對事物本質的追求', 
    warning: '叛逆、愛辯論、難以折服，因為喜歡質疑容易引起他人不滿',
  },
  {
    number: '6', 
    title: '甘草糖', 
    recoJob: '科研、工程類', 
    recoJobHref: 'https://1111.com.tw/216003/', 
    feature: '面對任何事總能理性分析，讓人折服於你解決問題的能力，剛正不阿的你就像甘草糖一樣，糖果界的大魔王', 
    advantage: '理性冷靜、注重事實思考，具有強大的解決問題能力', 
    warning: '有極高的行事準則，以事實為重，難以同理他人情緒行為。',
  },
  {
    number: '7', 
    title: '巧克力', 
    recoJob: '媒體、教育類', 
    recoJobHref: 'https://1111.com.tw/216004/', 
    feature: '深受歡迎的巧克力，如同討人喜歡的你，善於社交又體貼他人，大家都搶著跟你當朋友', 
    advantage: '隨心感性富有靈動的創造力，善於交際，充滿魅力', 
    warning: '情緒感知強、容易過度猜測或解讀他人情緒，遭受社會壓力',
  },
  {
    number: '8', 
    title: '喉糖', 
    recoJob: '醫療類、企劃設計類', 
    recoJobHref: 'https://1111.com.tw/216005/', 
    feature: '低調不張揚，只在暗處觀察、默默計畫的你，其實才是真高手！不像其他華麗糖果，你是必要時才出手的喉糖', 
    advantage: '情緒覺察能力強、沉靜有遠見，善於策略與謀劃', 
    warning: '內耗嚴重、過度勞累，容易隱藏負面情緒積累成疾',
  },
  {
    number: '9', 
    title: '變色糖', 
    recoJob: '任何職務', 
    recoJobHref: 'https://1111.com.tw/216006/', 
    feature: '懂得看場合調整定位，如同層層風味的變色糖，能在新環境或新任務中成為轉換不同角色。', 
    advantage: '具備高度彈性與適應力，在團隊中經常擔任救火隊，缺什麼補你上去都沒問題', 
    warning: '凡事保留餘地、善變而優柔寡斷易錯過時機',
  },
])

</script>

