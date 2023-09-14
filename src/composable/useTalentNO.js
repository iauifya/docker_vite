export function useTalentNO(){
    const cookies = ()=> document.cookie.split('; ').reduce((res,item)=>{
        const arr = item.split('=')
        res[arr[0]] = arr.slice(1).join('=')
        return res
    },{})
    const lastValue = Object.values(cookies)[7]
    console.log(lastValue)
    console.log(lastValue.split('=').slice(2,3))
    const talentId = lastValue.split('=').slice(2,3)
    console.log(talentId[0].split('&'))
    let talentNO = talentId[0].split('&')
    talentNO = talentNO[0]

    return { talentNO }
}