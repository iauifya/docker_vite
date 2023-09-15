<template>
  <main>
    <h2>活動說明頁內容</h2>
    
    <div class="btn" @click="goQuiz()">立即測驗</div>
  </main>
</template>





<script setup>
import { useRouter, useRoute } from "vue-router";
import { useTalentNO } from '@/composable/useTalentNO.js'
import { loginCertificationFn} from '@/composition-api/index';

const talentNO = useTalentNO()
const router = useRouter()


console.log(talentNO)

const goQuiz = ()=> {
  const dd = loginCertificationFn()
  console.log("dd", dd);
  router.push('/quiz')
}


</script>

