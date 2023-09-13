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

// isLoading 開關決定是否要用全域

// 會員認證talentNo
export const TalentNo = () => server.get(`${domain.value}/eventAPI/tool/api_check_talentNo.asp`).isLoading(false).go();

// 搜尋職缺職務
export const Job = () => server.get(`${domain.value}/eventAPI/tool/api_get_job.asp`).go();
// // 搜尋公司
export const Corp = () => server.get(`${domain.value}/eventAPI/tool/api_get_corp.asp`).go();
// error log
export const ip = () => server.get('https://api.ipify.org/?format=json').go();
export const error = (payload) => server.post(`${domain.value}/eventAPI/api/ErrorLog/LogCreate`, payload).go();