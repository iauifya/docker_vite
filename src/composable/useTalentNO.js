import { indexOf } from "lodash";

export function useTalentNO(){
    const cookies = document.cookie.split('; ').reduce((res,item)=>{
        const arr = item.split('=')
        res[arr[0]] = arr.slice(1).join('=')
        return res
    },{})

    // console.log(cookies.talents);
    if(!cookies.talents){
        return undefined
    }
    const talents = cookies.talents.split('&')
    // console.log(talents)
    const talentIDRegex = /talentID=(\d+)/;
    let talentNO = null;
    talents.forEach((item)=>{
        const match = item.match(talentIDRegex);
        if (match) {
            talentNO = match[1]; // 獲取匹配到的數字
        }
    })
    
    return talentNO 
}