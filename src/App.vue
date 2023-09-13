

<template>
  <div>
    <!-- <router-view  :key="$route.fullPath"/> -->
      <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script setup>
  console.log('env', import.meta.env.VITE_MEMBER_LOGIN);
  import Header from "@/components/Header.vue";
</script>

<style scoped>


</style>
