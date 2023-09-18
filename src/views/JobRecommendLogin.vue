<template>
    <main>
      <h2>職缺強打推薦-快來測驗</h2>
      <!-- <TheWelcome。 -->

      <div class="btn" @click="login">登入1111開始測驗</div>
    </main>
</template>

<script setup>
import { loginCertificationFn} from '@/composition-api/index';  

const login = ()=>{
    const dd = loginCertificationFn();
    console.log('dd', dd);
}

</script>