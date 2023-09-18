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
            <div class="person-group">
              <div class="person-left"><img :src="currentQuestion.imgOne" alt="開學打工人物圖" decoding="async" loading="lazy"></div>
              <div class="person-right"><img :src="currentQuestion.imgTwo" alt="開學打工人物圖" decoding="async" loading="lazy"></div>
            </div>
            <!-- question -->
            <article class="card-content">
              <h1><span class="qu-num">Q{{currentQuestionIndex + 1}}：</span>{{ currentQuestion.title }}</h1>
              <p>請選擇：</p>

              <ul class="radio-group">
                <li class="form-check" v-for="answer in currentQuestion.answer">
                  <div class="form-check-group">
                    <input class="form-check-input" :id="answer.option" type="radio" :value="answer.option" v-model="currentAnswer">
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
              <button type="button" class="btn btn-front-check" @click="nextQuestion">{{ currentQuestionIndex === 6 ? '送出答案':'下一題' }}</button>
            </article>
          </div>
        </div>
    </section>
    <div>
      <!-- <p>進度條</p> -->
      <!-- <img src="" alt="" :style="width: (100% / 7 * (currentQuestionIndex + 1))"> -->
    </div>
    <!-- <label :for="currentQuestionId">Q{{currentQuestionIndex + 1}}: {{ currentQuestion.title }}:</label>
    <ul>
        <li v-for="answer in currentQuestion.answer">
           <input type="radio" :value="answer.option" v-model="currentAnswer">
           <label :for="answer.option">{{ answer.content }}</label> 
        </li>
    </ul>
    
    <button @click="nextQuestion">{{ currentQuestionIndex === 6 ? '送出答案':'下一題' }}</button> -->
  </main>
</template>

<script setup>
import { ref,reactive, computed, onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { loginCertificationFn} from '@/composition-api/index'
import { useTalentNO } from '@/composable/useTalentNO.js'
import calcScore from '@/composable/calcScore.js'
import one from "@/assets/images/questions/person_01.svg";
import two from "@/assets/images/questions/person_02.svg";
import three from "@/assets/images/questions/person_03.svg";
import four from "@/assets/images/questions/person_04.svg";

const router = useRouter();
const talentNO = useTalentNO()

const currentAnswer = ref('')
const currentQuestionIndex = ref(0)
const currentQuestionId = computed(()=>{
    return `q${currentQuestionIndex.value} + 1`
})
const currentQuestion = computed(()=>{
    return questions[currentQuestionIndex.value]
})
// const currentQuestion = ref(1)

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
        imgOne: one,
        imgTwo: two
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
        imgOne: three,
        imgTwo: four
    },
    {
        id:3, 
        title:"討論中，跟同學發生意見衝突時，你會...?",
        answer: [
            {option: 1,content: 'A.用數據跟理論，來支持自己提出的意見'},
            {option: 2,content: 'B.輕易妥協，以和為貴'},
            {option: 3,content: 'C.說服組內其他成員支持，讓自己的觀點成為多數意見'},
            {option: 4,content: 'D.支持，讓自己的觀點成為多數意見強而有力地說服對方，不輕易退讓'}
        ],
        imgOne: one,
        imgTwo: two
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
        imgOne: three,
        imgTwo: four
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
        imgOne: one,
        imgTwo: two
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
        imgOne: three,
        imgTwo: four
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
        imgOne: one,
        imgTwo: two
    },
])


const answers = reactive([])

const nextQuestion = ()=>{
    if(currentAnswer){
        // answers.push({questionId: currentQuestionIndex.value + 1, answer: currentAnswer.value})
        
        answers.push(currentAnswer.value)
        // currentQuestionId++
        if (currentQuestionIndex.value < questions.length - 1) {
            // 切換到下一個問題
            currentQuestionIndex.value++;
            currentAnswer.value = '';
            const formCheckElements = document.querySelectorAll('.form-check');
            formCheckElements.forEach(function(formCheck) {
                // 將當前點擊的元素移除 'active' 類別
                formCheck.classList.remove('active');
              });
        } else {
            // 提交答案，打API將答案送出去
            console.log('提交答案', answers);
            
            // let result = answers.reduce((obj, item) => {
            //   obj[item] = obj[item] ? obj[item] + 1 : 1;
            //   return obj;
            // }, {});
            // console.log(result); // Object {1: 2, 2: 1, 3: 1, a: 2, b: 1}
            const possibleNumbers = [1, 2, 3, 4];

            let result = possibleNumbers.reduce((obj, item) => {
                obj[item] = 0; // 初始化所有可能的數字等於0的情況
                return obj;
            }, {});

            answers.forEach((item) => {
                result[item]++; // 對出現的數字進行記數
            });

            console.log(result);
            const answerNum = Object.values(result)
            console.log(answerNum)
            
            const finalResult = calcScore(answerNum)
            console.log(finalResult)
            router.push('/jobrecommend')
            // axios.post('http://localhost:10000/posts/', {
            //   talentNo: talentNO.value,
            //   quizResult: finalResult
            // finalTimeRecode: 
            // })
            // .then(res => {
            //   console.log(res.data);
            // router.push('/jobrecommend')
            // });
        }
    }
}



onMounted(() => {
  if(!talentNO){
    loginCertificationFn()
  }
  document.addEventListener('DOMContentLoaded', ()=> {
    const formCheckElements = document.querySelectorAll('.form-check');
    formCheckElements.forEach(function(formCheck) {
      formCheck.addEventListener('click', ()=> {
        // 移除所有元素的 'active' 類別
        formCheckElements.forEach((element)=> {
          element.classList.remove('active');
        });
        // 將當前點擊的元素添加 'active' 類別
        formCheck.classList.add('active');
      });
    });
  });
})
</script>
