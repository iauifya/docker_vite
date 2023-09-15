import { isOpenLoading } from './apiFn'
export default class{
    constructor(axios){
        this.loading = true;
        this.methods = 'get';
        this.apiName = '';
        this.payload = null;
        this.axios = axios;
    }

    get(api,payload){
        let newpayload= "?"
        if(payload) {
            const payloadKeys =Object.keys(payload)
            for (let i=0; i < payloadKeys.length; i++) {
                if(payload[payloadKeys[i]]) {
                  newpayload+= (payloadKeys[i]+"="+payload[payloadKeys[i]] + "&")
                }
             }
        }

        this.apiName = api+newpayload;
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
                    log.onError({ name: "AxiosError", api: this.apiName, err: err });
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
                    // if (res.data.status < 1)
                    // log.onError({
                    //     name: "ApiError",
                    //     api: this.apiName,
                    //     payload: JSON.stringify(this.payload),
                    //     message: res.data.msg,
                    //     status: res.data.status
                    // });
                    resolve(res)
                })
                .catch(err => {
                    log.onError({ name: "AxiosError", api: this.apiName, payload: JSON.stringify(this.payload), err: err });
                    reject(err)
                })
            })
        }
        
        
    }
}

