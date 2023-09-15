<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-inner">
            <a class="navbar-brand d-block p-0 m-0 py-2" href="https://www.1111.com.tw/"><img src="@/assets/images/logo-white-1111.svg" title="1111人力銀行" alt="1111人力銀行" width="165" height="39" decoding="async"><span class="logo-text">開學打工季</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/home">首頁</router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/activity">活動說明</router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/quiz">測你的甜</router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/jobrecommend">職缺強打推薦</router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/work">打工前停看聽</router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" to="/winner">得獎公告</router-link></li>
                    <!-- <router-link class="nav-link" to="/home" ><li class="nav-item d-flex align-items-center">首頁</li></router-link>
                    <router-link class="nav-link" to="/activity" >活動說明</router-link>
                    <router-link class="nav-link" to="/quiz" >測你的甜</router-link>
                    <router-link class="nav-link" to="/jobrecommend" >職缺強打推薦</router-link>
                    <router-link class="nav-link" to="/work" >打工前停看聽</router-link>
                    <router-link class="nav-link" to="/winner" >得獎公告</router-link> -->
                </ul>
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

