

<template>
  <div>
    <!-- <router-view  :key="$route.fullPath"/> -->
      <Header></Header>
    <router-view></router-view>
     <Footer></Footer>
  </div>
</template>


<script setup>
  // console.log('env', import.meta.env.VITE_MEMBER_LOGIN);
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
</script>

<style scoped>


</style>
