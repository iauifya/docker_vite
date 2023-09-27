import { ref } from "vue";
import { TalentNoGet } from '@/api/index'
// import { useUserStore } from "@/stores/user";
// import { storeToRefs } from "pinia";
import _ from "lodash"

export function useLoginUrl(url) {
    const loginUrl = ref('')
    // encodeURIComponent
    const encodeURI = encodeURIComponent(url);
    return loginUrl.value = location.host == 'event.1111.com.tw' ? link.formalMemberLogin + encodeURI + '&IsThirdParty=true' : link.testMemberLogin + encodeURI + '&IsThirdParty=true'
}

export function useLoginMemberCertification() {
    // console.log('import.meta.env.VITE_BASE_URL', import.meta.env.VITE_BASE_URL);
    TalentNoGet().then(res => {
        if(!_.isEmpty(res)){
            if (_.isEmpty(res.data.talentNo)) {
                alert('您尚未登入');
                const pathQuiz = "quiz"
                //const fullUrl = import.meta.env.VITE_BASE_URL + pathQuiz
                const cookieRouterWin_encodeURI = encodeURIComponent(import.meta.env.VITE_BASE_URL + pathQuiz);
                // console.log(cookieRouterWin_encodeURI)
                location.href = location.host === "192.168.1.234" ? "http://192.168.1.234/talents/memberlogin.asp?ref=" + cookieRouterWin_encodeURI + "&IsThirdParty=true" : "https://www.1111.com.tw/login/index?ReturnUrl=" + encodeURIComponent('https://event.1111.com.tw/event23/candyPT/quiz');
            }else if (res.data.loginType !== 4) {
                // alert('未雙認證');
                location.href = import.meta.env.VITE_MEMBER_CERTIFICATION + location.href
            }
        }
    });
}
