import axios from "axios";
import { isOpenLoading } from './apiFn.js'

let pending = []; //宣告一個數組用於儲存每個請求的取消函式和axios標識
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  // console.log(config);
  for (let i in pending) {
    if (pending[i].url === axios.defaults.baseURL + config.url) {
      //在當前請求在陣列中存在時執行取消函式
      pending[i].f(); //執行取消操作
      //pending.splice(i, 1); 根據具體情況決定是否在這裡就把pending去掉
      // console.log("pending[i].url", pending[i].url);
    }
  }
};


// 2分鐘(min) = 120000毫秒(ms)
// axios.defaults.timeout = 30000;
axios.defaults.timeout = 3000;

//timeout 後全域性的請求次數，請求的間隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 100;
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // 如果配置不存在或未設置重試選項，則拒絕
    if (!config || !config.retry) return Promise.reject(err);
    // 設置變量以跟踪重試次數
    config.__retryCount = config.__retryCount || 0;
    // 檢查我們是否已經達到了重試的總次數
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }
    // 增加重試次數
    config.__retryCount = 1;
    // 創建新的承諾來處理指數退避
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });
    //返回調用axios重試請求的promise
    return backoff.then(function() {
        return axios(config);
    });
});



// 请求拦截器
axios.interceptors.request.use(
  config => {
    // API 打入前全域將loading 打開
    isOpenLoading(false)
    removePending(config); //在一個axios傳送前執行一下判定操作，在removePending中執行取消操作
    // console.log(config.url);
    config.cancelToken = new cancelToken(function executor(c) {
      //本次axios請求的配置新增cancelToken
      pending.push({
        // url: config.url,
        url: axios.defaults.baseURL + config.url,
        f: c,
      });
    });
    // console.log('config', config);
    return config
  },
  error => {
      return error
  })

//  响应拦截器
axios.interceptors.response.use(
  // 服务码是200的情况
  response => {
    // console.log('response', response);
    return response;
  },
  // 服务器状态码不是200的情况 message
  error => {
      // if (axios.isCancel(error)) {
      //     console.log("已取消的重複請求：" + error);
      // } else {
      //     // 添加異常處理
      //     console.log('添加異常處理', error.message);
      // }
      // console.log('status', error.response.status);
      // // 服务器状态码不是200的情况
      // if (error.response.status) {
      //     switch (error.response.status) {
      //         // 404请求不存在
      //         case 400:
      //             console.log('API_Loading過重-400');
      //             break;
      //             // 404请求不存在
      //         case 404:
      //             console.log('網絡請求不存在-404');
      //             break;
      //             // 其他错误，直接抛出错误提示
      //         default:
      //             console.log(error.response.data.message);
      //     }
      // }
      return error;
  }
)
export default axios
