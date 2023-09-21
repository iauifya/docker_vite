import axios from "axios";
import AxiosApi from "../basic/AxiosApi";
import {ref} from 'vue'

const domain = ref('');
domain.value = location.host == 'event.1111.com.tw' ? 'https://event.1111.com.tw' : 'http://192.168.1.234'

const request = axios.create({
    baseURL : `${domain.value}/eventAPI/tool`,
    headers: { 'Content-Type': 'multipart/form-data' }
})

const server = new AxiosApi(request);   

// 測驗結果
export const QuizResult = (payload) => server.get(`${domain.value}/eventAPI/23yCandyPt/frontend/api_get.asp`, payload).go();
export const SendQuiz = (payload) => server.post(`${domain.value}/eventAPI/23yCandyPt/frontend/api_post_signup.asp`, payload).go();
