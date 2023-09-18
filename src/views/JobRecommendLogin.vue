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
                                <a @click="login">點我測驗</a>
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
                            <div class="item">
                                <div class="d-flex align-items-center flex-wrap">
                                    <h3><a href="#" target="_blank" class="d-block">【亞馬遜Amazon】電商實習生 (兼職一年期、轉正機會) Amazon Project Assistant Intern（Part-time） - 高雄市</a></h3>
                                    <span class="salary w-100 text-xs-end">時薪 180元以上</span>
                                </div>
                                <div class="d-flex flex-wrap justify-content-end justify-content-sm-between align-items-end">
                                    <div class="job-info d-flex flex-column">
                                        <span class="company">飛輪電商有限公司</span>
                                        <span class="area">高雄市新興區</span>
                                    </div>
                                    <div class="btn-view-job">
                                        <a href="#" target="_blank" class="d-block">查看職缺</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="d-flex align-items-center flex-wrap">
                                    <h3><a href="#" target="_blank" class="d-block">[Hotel dùa]‘etage15西餐廳全時兼職夥伴#ㄧ段班8.5小時</a></h3>
                                    <span class="salary w-100 text-xs-end">時薪 180元</span>
                                </div>
                                <div class="d-flex flex-wrap justify-content-end justify-content-sm-between align-items-end">
                                    <div class="job-info d-flex flex-column">
                                        <span class="company">都會生活開發股份有限公司</span>
                                        <span class="area">高雄市新興區</span>
                                    </div>
                                    <div class="btn-view-job">
                                        <a href="#" target="_blank" class="d-block">查看職缺</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="d-flex align-items-center flex-wrap">
                                    <h3><a href="#" target="_blank" class="d-block">台北射箭兼職助教</a></h3>
                                    <span class="salary w-100 text-xs-end">時薪 180元以上</span>
                                </div>
                                <div class="d-flex flex-wrap justify-content-end justify-content-sm-between align-items-end">
                                    <div class="job-info d-flex flex-column">
                                        <span class="company">一起玩有限公司(覺觀射藝)</span>
                                        <span class="area">台北市內湖區</span>
                                    </div>
                                    <div class="btn-view-job">
                                        <a href="#" target="_blank" class="d-block">查看職缺</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="d-flex align-items-center flex-wrap">
                                    <h3><a href="#" target="_blank" class="d-block">拉亞-中壢兼職【時薪最高可達$180】彈性排班</a></h3>
                                    <span class="salary w-100 text-xs-end">時薪 176~180元</span>
                                </div>
                                <div class="d-flex flex-wrap justify-content-end justify-content-sm-between align-items-end">
                                    <div class="job-info d-flex flex-column">
                                        <span class="company">商邦餐飲有限公司</span>
                                        <span class="area">桃園市中壢區</span>
                                    </div>
                                    <div class="btn-view-job">
                                        <a href="#" target="_blank" class="d-block">查看職缺</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="btn-view-more pt-2">
                            <a href="#" target="_blank" class="d-flex align-items-center justify-content-center mx-auto w-100"><img src="@/assets/images/result/icon-plus.svg" alt="看更多" width="26" height="26">看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <!-- <div class="btn" @click="login">登入1111開始測驗</div> -->
    </main>
</template>

<script setup>
import { loginCertificationFn} from '@/composition-api/index'
import { useTalentNO } from '@/composable/useTalentNO.js'
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const talentNO = useTalentNO()

const login = ()=>{
    if(!talentNO){
        loginCertificationFn();
    }else{
        router.push('/quiz')
    }
    
    
}

</script>