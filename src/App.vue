<script setup>
  console.log('env', import.meta.env.VITE_MEMBER_LOGIN);

</script>

<template>
  <div>
    <!-- <router-view  :key="$route.fullPath"/> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>


</style>
