<template>
    <main>
        <section class="block-test-result">
            <!-- 未登入 -->
            <div class="container-inner d-flex align-items-start align-items-lg-stretch flex-wrap">
                <div class="result d-flex">
                    <div class="result-card d-flex flex-column">
                        <h1 class="name d-flex align-items-center justify-content-center justify-content-lg-start"><span class="d-inline-block text-center">你是哪種糖?</span></h1>
                        <div class="not-logged d-flex flex-wrap h-100">
                            <div class="candy-info">
                                <p>透過專屬糖果角色發掘你的優點與劣勢，<br class="d-none d-xl-inline-block">找到適合的打工方向！</p>
                            </div>
                            <div class="candy-img">
                                <img src="@/assets/images/result/not-logged-img.svg" alt="你是哪種糖?" width="597" height="263" decoding="async" loading="lazy">
                            </div>
                            <div class="btn-test-again text-center w-100 mt-auto">
                                <button type="button" @click="login">點我測驗</button>
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
                        <h2 class="d-flex align-items-center justify-content-center"><img src="@/assets/images/result/icon-recommend-2.svg" alt="職缺強打推薦" width="43" height="35" decoding="async">職缺強打推薦</h2>
                        <div class="card-jobs my-3 my-sm-2 my-lg-3">
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
                        </div>
                        <div class="btn-view-more pt-2">
                            <a href="https://1111.com.tw/216048/" target="_blank" class="d-flex align-items-center justify-content-center mx-auto w-100"><img src="@/assets/images/result/icon-plus.svg" alt="看更多" width="26" height="26">看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <!-- <div class="btn" @click="login">登入1111開始測驗</div> -->
    </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue'
import { loginCertificationFn} from '@/composition-api/index'
import { useTalentNO } from '@/composable/useTalentNO.js'
import { useRouter, useRoute } from "vue-router"
import { Job } from "@/api/apiAll/shared.js";

const router = useRouter()
const talentNO = useTalentNO()

const jobList = ref([])

const login = ()=>{
    if(!talentNO){
        loginCertificationFn();
    }else{
        router.push('/quiz')
    }
}

const param = ref({
    oat: '1, 512', 
    col: 'ab', 
    da: '14', 
    page: '1', 
    sort: 'da desc', 
    tt: '2', 
    wk: '1,64,2,8'
})

Job(param.value)
  .then(res => {
    jobList.value = res.data?.splice(0, 4)
    for (let i = 0; i < jobList.value.length; i++) {
      let salaryNum = jobList.value[i].salary.split(' ')[1].split('~')
      let salaryUnit = jobList.value[i].salary.split(' ')[0]
      jobList.value[i].salary = salaryNum[0] === salaryNum[1] ? salaryUnit + salaryNum[0] + '元': 
          salaryNum[1] == 0 ? salaryUnit + salaryNum[0] + '元': 
          jobList.value[i].salary + '元'
    }
    console.log(jobList.value)
  })
  .catch(error => {
    console.log(error);
  });

</script>