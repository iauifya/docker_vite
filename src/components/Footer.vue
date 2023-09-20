<template>
    <footer>
    <div class="container-inner text-center">全球華人股份有限公司版權所有  © 1111 Job Bank All Rights Reserved.</div>
    </footer>
    <div class="slide-float position-fixed d-none d-md-block">
        <ul>
            <li><a href="javascript:;" @click="copyURL" class="d-block"><img src="@/assets/images/icon-share.svg" alt="分享複製連結" width="45" height="45" decoding="async"></a></li>
            <li><a href="#" class="d-block"><img src="@/assets/images/icon-ig.svg" alt="ig貼文" width="45" height="45" decoding="async"></a></li>
            <li><a href="#" class="d-block"><img src="@/assets/images/icon-fb.svg" alt="fb貼文" width="45" height="45" decoding="async"></a></li>
            <li><a href="javascript:;" class="d-block gotop"><img src="@/assets/images/icon-gotop.svg" alt="gotop" width="45" height="45" decoding="async" @click="scrollToTop" ></a></li>
        </ul>
    </div>
</template>

<script setup>


const copyURL =()=>{
    if(!navigator.clipboard){
      alert('你的瀏覽器不支援');
      return;
    }
    const URL = location.href
    navigator.clipboard.writeText(URL).then(()=>{
     alert(`已複製連結：${URL}`);
    }).catch((err)=>{
    });
  }

const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
};

</script>