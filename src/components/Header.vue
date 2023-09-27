<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-inner">
            <h1 v-if="isHomeRoute">
            <a class="navbar-brand d-block p-0 m-0 py-2" href="/" target=""><span class="logo-text">開學打工季</span></a>
            </h1>
            <a v-else class="navbar-brand d-block p-0 m-0 py-2" href="/"><span class="logo-text">開學打工季</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'home' || pathname === ''}" to="/home"><span>首頁</span></router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'description'}" to="/description"><span>活動說明</span></router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'quiz'}" to="/quiz"><span>測你的甜</span></router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'jobrecommend'}" to="/jobrecommend"><span>職缺強打推薦</span></router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'working'}" to="/working"><span>打工前停看聽</span></router-link></li>
                  <li class="nav-item d-flex align-items-center"><router-link class="nav-link" :class="{active: pathname === 'winner'}" to="/winner"><span>得獎公告</span></router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script setup>
 import { ref,onMounted,computed } from 'vue';
 import { useRoute } from "vue-router";
 import { storeToRefs } from "pinia";
 import { useAll } from "@/stores/all.js";


 const route = useRoute();
 const useAlls= useAll()
 const { pathname } = storeToRefs(useAlls)
 const isHomeRoute = computed(() => route.path === '/home' || route.path === '/');




onMounted(()=>{
    const navLinks = document.querySelectorAll('.nav-item')
    const navToggler = document.querySelector('.navbar-toggler')
    // console.log(navLinks)
    // console.log(navToggler)
    navLinks.forEach((navLink)=>{
        navLink.addEventListener('click',()=> {
            if(document.body.offsetWidth < 992){
                navToggler.click();
            }
            
        })
    })

})
</script>




