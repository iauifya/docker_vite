
// import { ref } from 'vue';
import { JobGet , CorpGet, RSVCreatePost, AllGet} from '@/api/index'

import _ from "lodash"


export async function jobGetFN() {
  let jobList = {};
  await JobGet().then(res => {
    if(!_.isEmpty(res)){
      jobList = res
    }
  });

  return {
    jobList
  }
}


export async function corpGetFN() {
  let corpList = {};
  await CorpGet().then(res => {
    if(!_.isEmpty(res)){
      corpList = res
      console.log('corpList', res);
    }
  });

  return {
    corpList
  }
}


export async function RSVCreatePostFn(postData) {
  let jobList = {};
  // 可使用這兩組方式傳入
  // let formData = new FormData();
  //     formData.append("talentNo", '20220322');
  //     formData.append("ticketNum", '1234');
  await RSVCreatePost(postData).then(res => {
    if(!_.isEmpty(res)){
      jobList = res
      console.log('jobList', jobList);
    }
  });

  return {
    jobList
  }
}



export async function AllGetFN(payload) {
  let corpList = {};
  await AllGet(payload).then(res => {
    if(!_.isEmpty(res)){
      corpList = res
    }
    // console.log('AllGetFN', res);
  });

  return {
    corpList
  }
}
