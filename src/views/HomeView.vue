<template>
  <main>
    <h2>首頁內容</h2>
    <!-- <TheWelcome。 -->
    <div class="btn" @click="goActi()">活動詳情</div>
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
  router.push('/activity')
}

</script>

