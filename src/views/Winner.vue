<template>
  <main>
        <section class="block-award">
            <div class="container-inner">
                <div class="winning">
                    <h1 class="block-title mb-4"><span>得獎公告</span></h1>
                    <div class="winning-list d-flex flex-wrap justify-content-center mx-auto">
                        <div class="item d-flex flex-column align-items-center">
                            <span class="date">10/31</span>
                            <figure class="profile-pic">
                                <img src="@/assets/images/award/winner-sample.svg" alt="得獎者" width="167" height="167" decoding="async" loading="lazy">
                            </figure>
                            <span class="name">得獎者</span>
                            <span class="tel">敬請期待</span>
                        </div>
                    </div>
                    <nav aria-label="Page navigation" class="d-flex align-items-center justify-content-center">
                        <ul class="pagination align-items-center">
                            <li class="page-item"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#"><img src="@/assets/images/award/icon-arrow.svg" alt="Previous" width="9" height="15"></a></li>
                            <li class="page-item active"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#">1</a></li>
                            <li class="page-item"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#">2</a></li>
                            <li class="page-item"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#">3</a></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#">4</a></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#">5</a></li>
                            <li class="page-item"><a class="page-link border-0 d-flex align-items-center justify-content-center" href="#"><img src="@/assets/images/award/icon-arrow.svg" alt="Next" width="9" height="15"></a></li>
                        </ul>
                    </nav>
                </div>
                <div class="receive">
                    <h2 class="block-title mb-4"><span>領獎說明</span></h2>
                    <div class="content">
                        <div class="dot-element d-flex align-items-center">
                            <span class="dot d-inline-block"></span>
                            <span class="dot d-inline-block"></span>
                            <span class="dot d-inline-block"></span>
                        </div>
                        <div class="info">
                            <h3>活動時間：即日起～2023/10/31</h3>
                            <ol>
                                <li>1.凡參與測驗活動之網友皆具有抽獎資格，每人限兌領乙次。</li>
                                <li>2.活動期間完整完成測驗之會員，活動小組將於活動後抽出，會依據您在1111人力銀行註冊時填寫的信箱，寄送獲獎通知。</li>
                                <li>3.我方將於2023/11/6~11/20依據您在1111人力銀行註冊時填寫的信箱，寄送LINE POINTS序號。<a href="https://points.line.me/pointcode#/pointcode/form" target="_blank">【兌換序號請點我】</a></li>
                                <li>4.因不可歸責於主辦單位事由，導致無法參加活動、收取中獎通知或獎品時，例如：參加者所留信箱方式有誤，主辦單位不另行補發亦不負法律責任，參與本活動或得獎者不得有異議。</li>
                                <li>5.1111保有修改、變更、暫停、中止、提前終止或取消本活動或獎項之權利，如有未盡事宜，悉依相關規定或解釋辦理，而得隨時補充公告之;且1111保留對本活動辦法(包含注意事項)隨時增加、修改、刪減及最終解釋之權利。 如有任何變更將公告於活動網頁中，恕不另行通知。1111對於所有活動流程擁有最終解釋權。</li>
                                <li>6.有任何活動問題請來信活動信箱grace88990096@staff.1111.com.tw詢問。</li>
                            </ol>
                            <h3>個人資料告知事項</h3>
                            <p>凡參加本活動之會員，應同意無償授權其個人履歷之肖像、圖片、文章或影音等資料，活動單位有權在合理範圍內修訂，保留修改標題及內文權限，並同意於1111人力銀行及所屬各子網使用，或對外公佈，以昭大信。得獎將不另行通知得獎者，不同意者將視同放棄得獎資格。主辦單位得因本活動的需要，依個人資料保護相關規定，於中華民國境內蒐集、處理、利用其個人資料。如參加者拒絕提供相關個人資料，可能導致對參加者依本活動得享有的各項權益及福利的相關權益有所影響，主辦單位不負相關責任。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>





<script setup>
// import {  getAll } from "@/composition-api/index";
// import { ref, computed, onMounted } from 'vue';
// import Loading from "@/components/Loading.vue";

//import { loginCertificationFn} from '@/composition-api/index';
// import TheWelcome from '../components/TheWelcome.vue'
// import { postRSVCreate} from '@/composition-api/index';
// const payload = {
//         talentNo: '20220322',
//         ticketNum: '20220322',
//       }
//       postRSVCreate(payload);
// const dd = loginCertificationFn();
// console.log('dd', dd);

    // const dataList = ref([]);
    // const totalpage = ref(1);
    // const totalrecord = ref(0);
    // const currentPage = ref(1);
    // const page = ref(1);
    // const loading = ref(false);

    // const pages = computed(() => {
    //     let pagesToShow = 5;  

    //     const mobilewidth = window.innerWidth;
    //     if (mobilewidth < 600) {
    //         pagesToShow = 3;
    //     }

    //     const totalPages = totalpage.value;
    //     const startPage = Math.max(1, currentPage.value - Math.floor(pagesToShow / 2));
    //     const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    //     const pageButtons = [];
    //     for (let i = startPage; i <= endPage; i++) {
    //         pageButtons.push(i);
    //     }
    //     return pageButtons;
    // });

    

    // const getAllData = async () => {
    //   try {
    //     loading.value = true;
    //     const data = await getAll({
    //       pageshow: 16,
    //       page:currentPage.value 
    //     });
    //     dataList.value = data.corpList.data.dataList;
    //     totalpage.value = data.corpList.data.totalpage;
    //     totalrecord.value = data.corpList.data.totalrecord;
        
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     loading.value = false;
    //   }
    // };

    // const setCurrentPage = (page) => {
    //   if (page >= 1 && page <= totalpage.value) {
    //     currentPage.value = page;
    //     getAllData();
    //   }
    // };


    // const prePage=((page)=>{
    //     if(currentPage.value >1 ){
    //         currentPage.value --
    //         getAllData()
    //     }

    // })
    // const nextPage=((page)=>{
    //     if(currentPage.value < totalpage.value) {
    //         currentPage.value++
    //         getAllData();
    //     }
    // })
    
    
    // onMounted(() => {
    //   getAllData();
    // });

</script>