<template>
    <footer>
    <div class="container-inner text-center">全球華人股份有限公司版權所有  © 1111 Job Bank All Rights Reserved.</div>
    </footer>
    <div class="slide-float position-fixed d-none d-md-block">
        <ul>
            <li><a href="javascript:;" @click="copyURL" class="d-block"><img src="@/assets/images/icon-share.svg" alt="分享複製連結" width="45" height="45" decoding="async"></a></li>
            <!-- <li><a href="https://instagram.com/1111studentjobs?igshid=MWZjMTM2ODFkZg==" class="d-block"><img src="@/assets/images/icon-ig.svg" alt="ig貼文" width="45" height="45" decoding="async"></a></li> -->
            <li><a :href="`https://www.facebook.com/sharer/sharer.php?u=${domain}%2Fevent23%2FcandyPT%2Fhome&amp;src=sdkpreparse`" target="_blank" class="d-block"><img src="@/assets/images/icon-fb.svg" alt="fb貼文" width="45" height="45" decoding="async"></a></li>
            <li><a href="javascript:;" class="d-block gotop"><img src="@/assets/images/icon-gotop.svg" alt="gotop" width="45" height="45" decoding="async" @click="scrollToTop" ></a></li>
        </ul>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

//const footerHeight = ref()

const domain = ref('');
domain.value = location.host == 'event.1111.com.tw' ? 'https://event.1111.com.tw' : 'http://192.168.1.234'

const copyURL =()=> {
  const URL = window.location.href;
  if(location.protocol === "http:"){
      const textarea = document.createElement('textarea');
      textarea.value = URL;
      document.body.appendChild(textarea);

      textarea.select();
      document.execCommand('copy');

      document.body.removeChild(textarea);

      alert(`已複製連結：${URL}`)

  }else{
    if(!navigator.clipboard){
      alert('你的瀏覽器不支援');
      return;
    }
      navigator.clipboard.writeText(URL).then(()=>{
      alert(`已複製連結：${URL}`);
      }).catch((err)=>{
      });
  };
}


const scrollToTop = () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
};

</script>