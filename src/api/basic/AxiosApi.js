import { isOpenLoading } from './apiFn'
import { catchError } from "@/assets/js/error.js"

export default class{
    constructor(axios){
        this.loading = true;
        this.methods = 'get';
        this.apiName = '';
        this.payload = null;
        this.axios = axios;
        this.errTimes = 0;
    }

    get(api){
        this.apiName = api;
        this.methods = 'get';
        return this;
    }

    post(api, payload){
        this.apiName = api;
        this.methods = 'post';
        this.payload = payload;
        return this
    }

    isLoading(input){
        this.loading = input;
        return this;
    }

    go(){
        if(this.methods == 'get'){
            if(this.loading){
                isOpenLoading(true)
            }
            return new Promise((resolve, reject) => {
                this.axios.get(this.apiName).then((res) => {
                    isOpenLoading(false)
                    resolve(res)
                }).catch(err=> {
                    reject(err)
                })
            })
        }else if (this.methods == 'post'){
            if(this.loading){
                isOpenLoading(true)
            }
            return new Promise((resolve, reject) => {
                this.axios.post(this.apiName, this.payload).then(res => {
                    isOpenLoading(false)
                    if(res.data.status < 1) {
                        if(this.apiName !== '/eventAPI/api/ErrorLog/LogCreate') {
                            res.data.reason = { 
                            name: 'ApiError',
                            api: this.apiName,
                            payload: JSON.stringify(this.payload)
                            }
                        } else {
                            if(this.errTimes > 0) return
                            this.errTimes++
                            res.data.reason = {
                            name: 'Repeat',
                            api: this.apiName,
                            type: this.payload.type,
                            msg: res.data.msg
                            }
                        }
                        catchError(res.data)
                    }
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
        
        
    }
}

