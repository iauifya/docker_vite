<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.1111.com.tw/">1111人力銀行</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <router-link class="nav-link" to="/home" >首頁</router-link>
       <router-link class="nav-link" to="/activity" >活動說明</router-link>
       <router-link class="nav-link" to="/quiz" >測你的甜</router-link>
       <router-link class="nav-link" to="/jobrecommend" >職缺強打推薦</router-link>
       <router-link class="nav-link" to="/work" >打工前停看聽</router-link>
       <router-link class="nav-link" to="/winner" >得獎公告</router-link>
      </div>
    </div>
  </div>
</nav>
</header>
    
</template>

<script setup>
 import { ref } from 'vue';
 import { useRoute } from "vue-router";


 const route = useRoute();



</script>

