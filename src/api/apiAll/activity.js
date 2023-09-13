import axios from "axios";
import AxiosApi from "../basic/AxiosApi";
import {ref} from 'vue'

const request = axios.create({
    baseURL : `https://parttime.1111.com.tw`,
    headers: { 'Content-Type': 'multipart/form-data' }
})
const server = new AxiosApi(request);   

// 熱門打工 未登入使用
// export const PopularJobNo = () => server.get('/jobList_data.asp').go(); 



// 在 http://192.168.1.234 使用的
const domain = ref('');
domain.value = location.host == 'event.1111.com.tw' ? 'https://event.1111.com.tw' : 'http://192.168.1.234'

const request234 = axios.create({
    baseURL : `${domain.value}/eventAPI`,
    headers: { 'Content-Type': 'multipart/form-data' }
})

const server234 = new AxiosApi(request234);  

// 應試碼
export const RSVCreate = (payload) => server234.post('/api/22yADM/RSVCreate', payload).go(); 


