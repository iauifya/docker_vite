# 前台模組注意事項

## API 資料夾使用方式
1. apiAll => 放置所有需要調用的API 
* shared => 放置常用的API 
* activitt => 放置活動用的API

2. basic => 放置API 架構 / 攔截器 / 前兩個會用到的function
*  AxiosApi => API 架構以及loadin 機制
*  default  => axios 攔截器 ( setTimeout 機制 / 取消重複請求)
*  apiFn    => 前兩個會用到的function

## env 配置
* .env // 正式站
* .env.pre // 測式站

### 命名規則
1. 名字命名皆為大寫
2. 開頭固定"VITE_"
### 訪問方式
1. " import.meta.env.VITE_TEST_VAR "

### 固定不能刪除的
1. VITE_API_ENV 

----------------( env 連結解說 )-------------------
### 專案路徑
VITE_BASE_URL="/event22/test"

### 專案 agent
VITE_AGENT="apd_test"


### 外部連結
1. 會員中心連結: VITE_MEMBER_LOGIN = "http://192.168.1.234/talents/memberlogin.asp?ref=" 
2. 會員中心認證連結  : VITE_MEMBER_CERTIFICATION = "https://www.1111.com.tw/Member/MemberData?autoRun=doubleverify" 
3. 此專案連結 : VITE_PROJECT_HOME_LINK = "https://event.1111.com.tw/event22/22yAdmissionSystem/"
-----------------------------------

## 設計套件
### aos
1. public > index.html
```htmlembedded=
// 在 head 引入
<link href="./assets/css/aos.css" rel="stylesheet" />

// 在 body 內引入

```
```javascript=
 import { onMounted } from 'vue'

  onMounted(()=> {
    AOS.init();
  });
```

### swiper
#### 此套件部不能與 swiper / slick / owl 混合使用不然無法啟動
1. public > index.html
```htmlembedded=
// 在 head 引入
<link href="./assets/css/swiper-bundle.min.css" rel="stylesheet" />

// 在 body 內引入
<script src="/public/assets/js/swiper-bundle.min.js"></script>
```
2. 在components 使用方式
```JavaScript=
import { onMounted } from 'vue'
export default {
    setup(){
        onMounted(() => {
            init();
        })

        const init = () => {
            // 可直接將設計設定的Swiper 輪播方式放置此處

            var mySwiper = new Swiper('.swiper', {
                autoplay: true,//可选选项，自动滑动
            })

            //如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
            new Swiper('.swiper')
            var mySwiper = document.querySelector('.swiper').swiper
            mySwiper.slideNext();
        }
    }
}
```
### owl
#### 此套件部不能與 swiper / slick / owl 混合使用不然無法啟動
1. public > index.html
```htmlembedded=
// 在 head 引入
 <!-- owl.carousel -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

// 在 body 內引入
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

```

2. 在components 使用方式
```JavaScript=
import { onMounted } from 'vue'
export default {
    setup(){
        onMounted(() => {
            owl();
        })

        const owl = () => {
            $(function() {
            // Owl Carousel
                var owl = $(".owl-carousel");
                owl.owlCarousel({
                    items: 3,
                    margin: 10,
                    loop: true,
                    nav: true
                });
            });
        }
    }
}
```
### slick
#### 此套件部不能與 swiper / slick / owl 混合使用不然無法啟動
1. public > index.html
```htmlembedded=
// 在 head 引入  
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick-theme.css"/> 

// 在 body 內引入
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>
```

2. 在components 使用方式
```JavaScript=
import { onMounted } from 'vue'
export default {
    setup(){
        onMounted(() => {
            slides();
        })

        const slides = () => {
            $(".responsive").slick({
                        dots: true,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        responsive: [
                          {
                            breakpoint: 1024,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              dots: true
                            }
                          },
                          {
                            breakpoint: 600,
                            settings: {
                              slidesToShow: 2,
                              slidesToScroll: 2
                            }
                          },
                          {
                            breakpoint: 480,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                        ]
                      });
        }
    }
}

```