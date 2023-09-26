<template>
  <main>
    <section class="questions-block">

        <div class="container-inner">
          <!-- 進度條 group -->
          <div class="progress-group">
            <!-- 進度條 icon 調整 style="width:" 控制 icon 進度條 -->
            <div class="progress-icon">
              <div class="progress-icon-bar" role="progressbar" :style="{width: 100 / 7 * (currentQuestionIndex + 1) + '%'}" :aria-valuenow="{width: 100 / 7 * (currentQuestionIndex + 1)}" aria-valuemin="0" aria-valuemax="100" aria-label="測驗題進度條">
                <div class="progress-icon">Q{{currentQuestionIndex + 1}}</div>
              </div>
            </div>
            <!-- 進度條 調整 style="width:" 控制進度條 -->
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="{width: 100 / 7 * (currentQuestionIndex + 1) + '%'}" :aria-valuenow="{width: 100 / 7 * (currentQuestionIndex + 1)}" aria-valuemin="0" aria-valuemax="100" aria-label="測驗題進度條"></div>
            </div>
          </div>
          <!-- question 01 -->
          <div class="card-question">
            <!-- 開學打工人物圖 -->
            <div class="person-group" >
              <div v-for="img in currentQuestion.images" :class="img.class"><img :src="img.person" alt="開學打工人物圖" decoding="async" loading="lazy"></div>
              <!-- <div class="person-right"><img :src="currentQuestion.imgTwo" alt="開學打工人物圖" decoding="async" loading="lazy"></div> -->
            </div>
            <!-- question -->
            <article class="card-content">
              <h1><span class="qu-num">Q{{currentQuestionIndex + 1}}：</span>{{ currentQuestion.title }}</h1>
              <p>請選擇：</p> 

              <ul class="radio-group">
                <li class="form-check" v-for="answer in currentQuestion.answer" :class="answer.option === answerArray[currentQuestionIndex]?'active': ''">
                  <div class="form-check-group" >
                    <input class="form-check-input" :id="answer.option" type="radio" :value="answer.option" :key="answer.content" :checked="answer.option === answerArray[currentQuestionIndex]?'checked': ''" @click='nextQuestion(answer.option,500)'>
                    <label class="form-check-label" :for="answer.option"><p>{{ answer.content }}</p></label> 
                  </div>
                  <!-- 背景裝飾 -->
                  <div class="block-group">
                    <div class="left-block"></div>
                    <div class="content-block"></div>
                    <div class="right-block"></div>
                  </div>
                </li>
              </ul>
              <div>
               
                <button type="button" class="btn btn-front-check" v-if="currentQuestionIndex !== 0" @click="prevQuestion" style="margin-right: 8px;">上一題</button>
                <button type="button" class="btn btn-front-check" v-if="currentQuestionIndex !== 6 && answerArray[currentQuestionIndex] > 0" @click="nextQuestion(answerArray[currentQuestionIndex],0)" style="margin-right: 8px;">下一題</button>
                <button type="button" class="btn btn-front-check" v-if="currentQuestionIndex === 6 && answerArray[6]" @click="finishQuestion">送出答案</button>
              </div>
              
            </article>
          </div>
        </div>
    </section>
  </main>
</template>

<script setup>
import { ref,reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { loginCertificationFn} from '@/composition-api/index'
import { useTalentNO } from '@/composable/useTalentNO.js'
import { getPathname } from '@/composable/usePathname.js'
import calcScore from '@/composable/calcScore.js'
import one from "@/assets/images/questions/person_01.svg";
import two from "@/assets/images/questions/person_02.svg";
import three from "@/assets/images/questions/person_03.svg";
import four from "@/assets/images/questions/person_04.svg";
import { SendQuiz } from "../api/apiAll/quiz.js";

const router = useRouter();
const usePathname = getPathname()
const talentNO = useTalentNO()

const currentAnswer = ref('')
const currentQuestionIndex = ref(0)


const currentQuestionId = computed(()=>{
    return currentQuestionIndex.value + 1
})
const currentQuestion = computed(()=>{
    return questions[currentQuestionIndex.value]
})


//這是問題集
const questions = reactive([
    {
        id:1, 
        title:"早8的必修課睡過頭，遲到將會大扣分，你會...?",
        answer: [
            {option: 1,content: 'A.考慮利弊、不去的話會扣總全勤還是去一下好了'},
            {option: 2,content: 'B.慌張地衝出門，但到了教室卻怕被關注而不太敢進去'},
            {option: 3,content: 'C.等中間下課時間再混進教室，賭教授還沒點名'},
            {option: 4,content: 'D.不假思索衝出門，用最快方式抵達'}
        ],
        images: [
          {person:one, class:'person-left'},
          {person:two, class:'person-right'},
        ]
    },
    {
        id:2, 
        title:"分組討論時，你所扮演的角色大多是?",
        answer: [
            {option: 1,content: 'A.大家想法卡住的時候會統整目前狀況與執行難度、解決眼前疑問'},
            {option: 2,content: 'B.通常都是不出聲的成員，突然被點到發言還會語塞'},
            {option: 3,content: 'C.冒出一堆天馬行空的浮誇點子'},
            {option: 4,content: 'D.挺身主導討論，快速做出決策'}
        ],
        images: [
          {person:three, class:'person-left'},
          {person:four, class:'person-right'},
        ]
    },
    {
        id:3, 
        title:"討論中，跟同學發生意見衝突時，你會...?",
        answer: [
            {option: 1,content: 'A.用數據跟理論，來支持自己提出的意見'},
            {option: 2,content: 'B.輕易妥協，以和為貴'},
            {option: 3,content: 'C.說服組內其他成員支持，讓自己的觀點成為多數意見'},
            {option: 4,content: 'D.強而有力地說服對方，不輕易退讓'}
        ],
        images: [
          {person:one, class:'person-left'},
          {person:two, class:'person-right'},
        ]
    },
    {
        id:4, 
        title:"下課後，不太熟的同學突然揪吃飯，你會...?",
        answer: [
            {option: 1,content: 'A.在腦中分析一輪，關於這頓飯局的N個問題，思考好再決定'},
            {option: 2,content: 'B.我都可以，跟你們走'},
            {option: 3,content: 'C.去啊，再揪同學ABCD，大家一起去'},
            {option: 4,content: 'D.拒絕，不想浪費時間跟不熟的人吃飯'}
        ],
        images: [
          {person:three, class:'person-left'},
          {person:four, class:'person-right'},
        ]
    },
    {
        id:5, 
        title:"到了餐廳點餐，你傾向於...",
        answer: [
            {option: 1,content: 'A.優先考慮CP值高或有優惠的品項'},
            {option: 2,content: 'B.看完一輪菜單，考慮過後還是點熟悉的品項'},
            {option: 3,content: 'C.優先關注新品上市或拍照很美的品項'},
            {option: 4,content: 'D.想吃什麼就點，決定很快'}
        ],
        images: [
          {person:one, class:'person-left'},
          {person:two, class:'person-right'},
        ]
    },
    {
        id:6, 
        title:"今天打工遇到不合理的奧客，你的反應會是...",
        answer: [
            {option: 1,content: 'A.查資料驗證客人不合理的證明，下次遇到就知道怎麼對付了'},
            {option: 2,content: 'B.心情低落，我是不是搞砸，提離職好了...嗚嗚嗚'},
            {option: 3,content: 'C.怎麼會有這麼不講道理的人，立刻PO社群讓大家評評理'},
            {option: 4,content: 'D.無法吞忍不合理的事，直接跟客人開槓'}
        ],
        images: [
          {person:three, class:'person-left'},
          {person:four, class:'person-right'},
        ]
    },
    {
        id:7, 
        title:"回家前需要到賣場補貨，通常你會....?",
        answer: [
            {option: 1,content: 'A.已盤點好家裡缺的跟特價券，有規劃的一次購齊'},
            {option: 2,content: 'B.除了自己要買的，室友託買的東西，也幫忙一起帶'},
            {option: 3,content: 'C.本來想買A牌，結果到現場被店員推銷而改買B牌'},
            {option: 4,content: 'D.找到想買的立刻結帳離開'}
        ],
        images: [
          {person:one, class:'person-left'},
          {person:two, class:'person-right'},
        ]
    },
])

const answerArray = reactive([])

const checkemty = ref(0)
const checkclick = ref(0)


const nextQuestion = (answer,time)=>{
  
  if(checkclick.value == 1){ return false ;}

  console.log("answerArray.length",answerArray.length)
  console.log("currentQuestionIndex.value",currentQuestionIndex.value)
  console.log("answerArray",answerArray)

    if(!answer || answer == 0){

      alert('請選一個答案唷~')

    }else{
      
      answerArray[currentQuestionIndex.value] = answer
        
      //如果現在題數小於總問題數，切換到下一個問題
      if (currentQuestionIndex.value < questions.length - 1) {
        checkclick.value = 1
        setTimeout(() => {
          currentQuestionIndex.value++;
          router.push({path:'quiz',query:{id: currentQuestionId.value}})
          checkclick.value = 0
        }, time);
        
      } else {
        //最後一題不動作
        
      }
      
    }
}


// 提交答案，打API將答案送出去
const finishQuestion = () =>{
  
  //檢查Array 是否有0、答案是否與題目一樣
  


  //歸零判斷
  checkemty.value = 0

  questions.forEach((item,index) => {
    answerArray[index] == undefined ? checkemty.value = index  : checkemty.value = checkemty.value ;
  });


  console.log("answerArray.indexOf(0)",answerArray.indexOf(0))
  console.log("checkemty",checkemty.value)


  if (answerArray.indexOf(0) > -1 || answerArray.indexOf(undefined) > -1  || checkemty.value > 0 ){
    alert('目前有問題還沒有填喔，請幫我點選上一題檢查是否有漏填!!')
  }else{

    console.log('提交答案', answerArray);
    
    const possibleNumbers = [1, 2, 3, 4];
    let result = possibleNumbers.reduce((obj, item) => {
        obj[item] = 0; // 初始化所有可能的數字等於0的情況
        return obj;
    }, {});

    answerArray.forEach((item) => {
        result[item]++; // 對出現的數字進行記數
    });

    
    const answerNum = Object.values(result) //只取出物件中的值
    
    
    const finalResult = calcScore(answerNum)
    
    

    
    let payload = { talentNo: talentNO, answerArray: answerArray.join(','), answer: finalResult }

    SendQuiz(payload)
    .then(res => {

      router.push('/jobrecommend')

    })
    .catch(function (error) {});

  }
}

const prevQuestion = ()=>{
  if(currentQuestionIndex.value === 0){
    alert('已達第一題囉')
  }

  router.push({path:'quiz',query:{id: currentQuestionId.value - 1}})
  currentQuestionIndex.value--
  
}



onMounted(() => {
  if(!talentNO){
    loginCertificationFn()
  }else{


    let preventReload = (event)=>{
      event.preventDefault()
      event.returnValue = ''
    }

    let setGoBack =  (event)=>{
      router.go(0)
    }

    let setReload = ()=>{
      router.push({path:'quiz',query:{id: 1}})
    }
    
    window.addEventListener('beforeunload',preventReload)
    window.addEventListener("popstate",setGoBack)

    window.addEventListener('load',setReload)
    
   }
})


</script>