import { storeToRefs } from "pinia";
import { useAll } from "@/stores/all.js";


export function getPathname() {
    const useAlls= useAll()
    const { pathname } = storeToRefs(useAlls)
    let pathnameArr = window.location.pathname.split('/')
    pathname.value = pathnameArr[pathnameArr.length-1]
    // console.log(pathname.value);
}