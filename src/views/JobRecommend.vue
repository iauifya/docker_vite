<template>
  <main>
    <section class="block-test-result">
      <div class="container-inner d-flex align-items-start align-items-lg-stretch flex-wrap">
        <div class="result d-flex">
          <div class="result-card d-flex flex-column">
            
            <h1 class="name d-flex align-items-center justify-content-center justify-content-lg-start"><span class="d-inline-block text-center">{{ quizResultOne.title }}</span></h1>
            <div class="d-flex flex-wrap h-100" v-if="!Object.keys(quizResultOne).length > 0">
                <img :src="loading" alt="Loading..." style="display: block; width: 60%; margin: 0 auto" >
              </div>
            <div class="d-flex flex-wrap h-100" v-else>
              
              <div class="candy-img">
                <img :src="quizResultOne.img" alt="薄荷涼糖" width="146" height="146" decoding="async" loading="lazy">
                <!-- <img src="assets/images/result/candy02.webp" alt="棒棒糖" width="146" height="231" decoding="async" loading="lazy">
                <img src="assets/images/result/candy03.webp" alt="水果軟糖" width="122" height="144" decoding="async" loading="lazy">
                <img src="assets/images/result/candy04.webp" alt="咖啡硬糖" width="145" height="146" decoding="async" loading="lazy">
                <img src="assets/images/result/candy05.webp" alt="跳跳糖" width="146" height="135" decoding="async" loading="lazy">
                <img src="assets/images/result/candy06.webp" alt="甘草糖" width="146" height="146" decoding="async" loading="lazy">
                <img src="assets/images/result/candy07.webp" alt="巧克力" width="143" height="126" decoding="async" loading="lazy">
                <img src="assets/images/result/candy08.webp" alt="喉糖" width="157" height="120" decoding="async" loading="lazy">
                <img src="assets/images/result/candy09.webp" alt="變色糖" width="146" height="142" decoding="async" loading="lazy"> -->
                <div class="jobs">
                    <h3>推薦職務：</h3>
                    <p>{{ quizResultOne.recoJob }}</p>
                </div>
              </div>
              <div class="candy-info">
                  <h3>性格概述</h3>
                  <p>{{ quizResultOne.feature }}</p>
                  <h3>優點</h3>
                  <p>{{ quizResultOne.advantage }}</p>
                  <h3>需多留意</h3>
                  <p>{{ quizResultOne.warning }}</p>
              </div>
              <div class="btn-test-again text-center w-100 mt-auto">
                  <button type="button" @click="quizAgain">再測一次</button>
              </div>
            </div>
        </div>
      </div>

      <div class="recommend w-100">
          <div class="recommend-element d-flex align-items-center">
              <span class="dot d-inline-block"></span>
              <span class="dot d-inline-block"></span>
              <span class="dot d-inline-block"></span>
          </div>
          <div class="recommend-card">
              <h2 class="d-flex align-items-center justify-content-center"><img src="@/assets/images/result/icon-recommend-1.svg" alt="適合的打工推薦" width="41" height="44" decoding="async">適合的打工推薦</h2>
              <div class="card-jobs my-3 my-sm-2 my-lg-3">
                <template v-if="jobList.length">
                  <div v-for="(item, index) in jobList" :key="index" class="item">
                      <div class="d-flex align-items-center flex-wrap">
                          <h3><a href="#" target="_blank" class="d-block">{{item.position0}}</a></h3>
                          <span class="salary w-100 text-xs-end">{{item.salary}}</span>
                      </div>
                      <div class="d-flex flex-wrap flex-sm-nowrap justify-content-end justify-content-sm-between align-items-end">
                          <div class="job-info d-flex flex-column">
                              <span class="company">{{item.organs_organ}}</span>
                              <span class="area">{{item.workcity.split('_')[1]}}</span>
                          </div>
                          <div class="btn-view-job">
                              <a :href="item.link" target="_blank" class="d-block">查看職缺</a>
                          </div>
                      </div>
                  </div>
                </template>
                <div v-if="!jobList.length">
                  <img :src="loading" alt="Loading..." style="display: block; width: 60%; margin: 20% auto" >
                </div>
              </div>
              <div class="btn-view-more pt-2">
                  <a :href="`${quizResultOne.recoJobHref}`" target="_blank" class="d-flex align-items-center justify-content-center mx-auto w-100"><img src="@/assets/images/result/icon-plus.svg" alt="看更多" width="26" height="26">看更多</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>





<script setup>
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router";
// import { useAll } from "@/stores/all.js";
import { Job } from "@/api/apiAll/shared.js";
import { useTalentNO } from '@/composable/useTalentNO.js'
//import { loginCertificationFn} from '@/composition-api/index';

import one from "@/assets/images/result/candy01.svg";
import two from "@/assets/images/result/candy02.svg";
import three from "@/assets/images/result/candy03.svg";
import four from "@/assets/images/result/candy04.svg";
import five from "@/assets/images/result/candy05.svg";
import six from "@/assets/images/result/candy06.svg";
import seven from "@/assets/images/result/candy07.svg";
import eight from "@/assets/images/result/candy08.svg";
import nine from "@/assets/images/result/candy09.svg";

import loading from "@/assets/images/Spin-1s-200px.svg";

const router = useRouter()
const talentNO = useTalentNO()
// const useAlls = useAll()

// const { loading } = storeToRefs(useAlls);
// loading.value = true;
const jobList = ref([])
let quizResult = reactive ([
  {
    number: '1', 
    title: '薄荷涼糖', 
    img: one,
    recoJob: '儲備幹部、業務類', 
    recoJobHref: 'https://1111.com.tw/215998/', 
    feature: '不畏挑戰的你，一旦設定目標便會全力衝刺，如同薄荷涼糖的嗆涼，是股不容忽視的強大氣場', 
    advantage: '主動積極、具強烈的目標執行力，分析敏銳，決斷的決策能力', 
    warning: '可能發展為自大或控制欲強，難以同理他人情緒行為。',
    jobParam: {
      col:'da', 
      d0: '120211,120213,120214,100108,100101,100106,120205', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    }, 
  },
  {
    number: '2', 
    title: '棒棒糖', 
    img: two,
    recoJob: '服務業、時尚產業、演藝產業', 
    recoJobHref: 'https://1111.com.tw/215999/', 
    feature: '外向熱情、歡樂一百點是你的獨特魅力，就像五彩繽紛的棒棒糖，總是最耀眼的存在', 
    advantage: '流暢的表達能力、善於說服他人，引導交談氛圍，強烈好奇心與熱情', 
    warning: '表現欲、誇大事實、行事難以規範且不擅長專注處理事務',
    jobParam: {
      col:'ab', 
      d0: '220100,220200,230103,270105,120400,120215', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '3', 
    title: '水果軟糖', 
    img: three,
    recoJob: '行政文書、人資、客服', 
    recoJobHref: 'https://1111.com.tw/216000/', 
    feature: '老少咸宜的水果軟糖，有誰不愛? 就像隨和溫暖的你，讓周圍朋友經常感受到你的貼心之處', 
    advantage: '溫和好相處，樂於付出幫助他人，沉穩隨和且具有高度耐心與自制力', 
    warning: '行事被動、安靜較無主見，面對突如其來變化較難馬上適應。',
    jobParam: {
      col:'ab', 
      d0: '100200,100302,100304,100306,100308,100311,100301,120300,220400', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '4', 
    title: '咖啡硬糖', 
    img: four,
    recoJob: '會計類、工程機械類', 
    recoJobHref: 'https://1111.com.tw/216001/', 
    feature: '追求完美專業的你，不眠不休也要顧到每一個小細節，咖啡硬糖幫你提神，也跟你的肝一樣硬', 
    advantage: '注重細節的完美主義，遵循規範與程序，辦事精準、善於規劃。', 
    warning: '容易鑽牛角尖，過度追求瑣碎細節的執著，不小心就會造成拖延',
    jobParam: {
      d0: '110200,110300,110100,160100', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '5', 
    title: '跳跳糖', 
    img: five,
    recoJob: '銷售、廣告類', 
    recoJobHref: 'https://1111.com.tw/216002/', 
    feature: '無論任何場合，你是眾人最關注的焦點，外放直接的溝通方式，像吃到跳跳糖，給人最直接的感官刺激', 
    advantage: '外放熱情、精明具有觀察力、有著對事物本質的追求', 
    warning: '叛逆、愛辯論、難以折服，因為喜歡質疑容易引起他人不滿',
    jobParam: {
      d0: '130100,220100', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '6', 
    title: '甘草糖', 
    img: six,
    recoJob: '科研、工程類', 
    recoJobHref: 'https://1111.com.tw/216003/', 
    feature: '面對任何事總能理性分析，讓人折服於你解決問題的能力，剛正不阿的你就像甘草糖一樣，糖果界的大魔王', 
    advantage: '理性冷靜、注重事實思考，具有強大的解決問題能力', 
    warning: '有極高的行事準則，以事實為重，難以同理他人情緒行為。',
    jobParam: {
      d0: '250100,250200,250400,150200,150100,140200,140100,140300,140400,140500', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '7', 
    title: '巧克力', 
    img: seven,
    recoJob: '媒體、教育類', 
    recoJobHref: 'https://1111.com.tw/216004/', 
    feature: '深受歡迎的巧克力，如同討人喜歡的你，善於社交又體貼他人，大家都搶著跟你當朋友', 
    advantage: '隨心感性富有靈動的創造力，善於交際，充滿魅力', 
    warning: '情緒感知強、容易過度猜測或解讀他人情緒，遭受社會壓力',
    jobParam: {
      d0: '220100,220300,250500', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '8', 
    title: '喉糖', 
    img: eight,
    recoJob: '醫療類、企劃設計類', 
    recoJobHref: 'https://1111.com.tw/216005/', 
    feature: '低調不張揚，只在暗處觀察、默默計畫的你，其實才是真高手！不像其他華麗糖果，你是必要時才出手的喉糖', 
    advantage: '情緒覺察能力強、沉靜有遠見，善於策略與謀劃', 
    warning: '內耗嚴重、過度勞累，容易隱藏負面情緒積累成疾',
    jobParam: {
      col: 'da',
      d0: '130200,130300,230100,200401,200404', 
      page: '1', 
      sort: 'da desc',
      tt: '2'
    },
  },
  {
    number: '9', 
    title: '變色糖', 
    img: nine,
    recoJob: '任何職務', 
    recoJobHref: 'https://1111.com.tw/216006/', 
    feature: '懂得看場合調整定位，如同層層風味的變色糖，能在新環境或新任務中成為轉換不同角色。', 
    advantage: '具備高度彈性與適應力，在團隊中經常擔任救火隊，缺什麼補你上去都沒問題', 
    warning: '凡事保留餘地、善變而優柔寡斷易錯過時機',
    jobParam: {
      col: 'da',
      page: '1', 
      sort: 'da desc',
      tt: '4',
      wk: '1,2,8'
    },
  },
])



const quizAgain = () => {
  if(!talentNO){
    router.push('/jobrecommendlogin')
  }
  router.push('/quiz')
}

let quizResultOne = ref([])

// const fetchResult = ()=> {
//     axios.get('http://192.168.1.234/eventAPI/23yCandyPt/frontend/api_get.asp?apitype=signup&page=1&pageshow=1&backend=0&sdate&edate&sid&skey&order_by&status')
//       .then(res => {
//         console.log(res.data.dataList[res.data.dataList.length - 1].answer);
//         quizResultOne = quizResult.filter((item)=>{
//           return item.number === res.data.dataList[res.data.dataList.length - 1].answer
//         })
//         console.log(quizResultOne)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//api url 正式站/測試站
let url = '';
  if(location.host === 'event.1111.com.tw'){
    url = `https://event.1111.com.tw/eventAPI/23yCandyPt/frontend/api_get.asp?apitype=signup&page=1&backend=0&talentNo=${talentNO}`
  } else if(location.host === '192.168.1.234'){
    url = `http://192.168.1.234/eventAPI/23yCandyPt/frontend/api_get.asp?apitype=signup&page=1&backend=0&talentNo=${talentNO}`
  } else{
    url = `http://192.168.1.234/eventAPI/23yCandyPt/frontend/api_get.asp?apitype=signup&page=1&backend=0&talentNo=${talentNO}` //上正式前要在換正式
}

//測驗結果對應
async function fetchResult() {
  try {
    const res = await axios.get(url);
    console.log(res.data.dataList[res.data.dataList.length - 1].answer);
    // quizResultOne.splice(0,quizResultOne.length,...quizResult.filter((item) => {
    //   return item.number === res.data.dataList[res.data.dataList.length - 1].answer;
    // }))
    quizResultOne.value= quizResult.find((item) => {
      return item.number === res.data.dataList[res.data.dataList.length - 1].answer;
    })
    console.log(quizResultOne);
  } catch (error) {
    console.log(error);
  }
}

onMounted(async() => {
  await fetchResult()
  console.log(quizResultOne.value)
  console.log(quizResultOne.value.length)

  if(!talentNO){
    router.replace('/jobrecommendlogin')
  }
  //接職缺api
  let param = quizResultOne.value.jobParam
  Job(param)
  .then(res => {
    jobList.value = res.data?.splice(0, 4)
    for (let i = 0; i < jobList.value.length; i++) {
      let salaryNum = jobList.value[i].salary.split(' ')[1].split('~')
      let salaryUnit = jobList.value[i].salary.split(' ')[0]
      jobList.value[i].salary = salaryNum[0] === salaryNum[1] ? salaryUnit + salaryNum[0] + '元': 
          salaryNum[1] == 0 ? salaryUnit + salaryNum[0] + '元': 
          jobList.value[i].salary + '元'
    }
    // console.log(jobList.value)
  })
  .catch(error => {
    console.log(error);
  });
})

</script>