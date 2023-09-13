import { useAll } from "@/stores/all";
import { storeToRefs } from "pinia";
/**
* isOpenLoading 開關
* @param {Boolean} url  
*/
export function isOpenLoading(open){
    const useAlls = useAll();
    const { loading } = storeToRefs(useAlls);
    loading.value = open
    // console.log('loading開關', open, loading.value);
}



