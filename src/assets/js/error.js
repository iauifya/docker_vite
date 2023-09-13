import { errorPost, ipGet, TalentNoGet } from "/src/api/index"
import _ from "lodash"

function check(item, limit, type, source) {
    let val = type == "string" ? "undefined" : 0
    if (!_.isNumber(item) && !_.isObject(item) && _.isEmpty(item)) return val

    if (typeof item !== type) {
        switch (type) {
            case "string":
                val = item.toString()
                break
            case "number":
                val = parseInt(item)
                break
            default:
                val = item.toString()
                break
        }
    }

    if (source == "dotnet") {
        let array = item.trim().split("於")
        item = "於" + array[array.length - 2] + "於" + array[array.length - 1]
    }

    val = item.replace("*", "＊")
    val = item.replace("select", "s e l e c t")
    val = item.length > limit ? item.slice(0, limit - 1) : item
    return val
}

window.addEventListener("unhandledrejection", function (e) {
    catchError(e)
})

export async function catchError(e) {
    let errData = {}
    errData.title = check(document.title, 50, "string")
    errData.agent = import.meta.env.VITE_AGENT
    errData.urlType = location.host == "event.1111.com.tw" ? 1 : location.host == "www.1111.com.tw" ? 2 : location.host == "192.168.1.234" ? 3 : 0
    errData.url = check(location.href, 300, "string")
    errData.source = "0"
    errData.userAgent = check(window.navigator.userAgent, 200, "string")

    if (!_.isEmpty(e.reason)) {
        switch (e.reason.name) {
            // 403 404
            case "AxiosError":
                errData.type = 1
                errData.api = check(e.reason?.config?.url, 300, "string")
                errData.apiStatusCode = e.reason?.response?.status || 0

                if (!_.isEmpty(e.reason.response?.data?.StackTraceString)) {
                    errData.message = check(e.reason.response?.data?.StackTraceString, 1000, "string", "dotnet") || "undefined"
                    errData.error = check(e.reason.response?.data?.Message, 100, "string") || "undefined"
                    errData.source = check(e.reason.response?.data?.ClassName, 100, "string") || "undefined"
                } else {
                    errData.message = e.reason?.config?.methods == "post" ? check(e.reason.response?.data?.Message, 1000, "string") : check(e.reason?.message, 1000, "string")
                    errData.error = check(e.reason?.error, 1000, "string")
                }
                break
            case "VueError":
                errData.type = 3
                errData.message = check(e.reason?.message?.message, 1000, "string")
                errData.source = check(e.reason?.source, 100, "string")
                errData.error = check(e.reason?.error, 100, "string")
                break
            // 200 & status < 1
            case "ApiError":
                errData.type = 1
                errData.api = e.reason?.api
                errData.error = e.reason?.payload
                errData.message = check(e?.msg, 1000, "string")
                errData.apiStatus = e?.status
                errData.apiStatusCode = 200
                break
            case "Repeat":
                errData.type = e.reason?.type
                errData.error = "重複錯誤"
                errData.api = e.reason?.api
                errData.message = check(e.reason?.msg, 1000, "string")
                errData.test = e.reason?.name
                break
            default:
                errData.type = 2
                errData.message = check(e.reason?.message, 1000, "string")
                break
        }
    } else {
        errData.type = 0
        errData.error = "undefined"
        errData.message = "undefined"
    }

    await ipGet().then(res => {
        errData.ip = !_.isEmpty(res.data?.ip) ? res.data?.ip : 0
    })

    await TalentNoGet().then(res => {
        errData.talentNo = !_.isEmpty(res.data?.talentNo) ? res.data?.talentNo : 0
    })
    errorPost(errData)
}
