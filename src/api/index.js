import { TalentNo, Job, Corp, ip, error, All } from "./apiAll/shared";
import {  RSVCreate } from "./apiAll/activity";

// 共用API
export const TalentNoGet = TalentNo; // 會員認證talentNo
export const JobGet = Job; // 搜尋職缺職務
export const CorpGet = Corp; // 搜尋公司
export const AllGet = All;


// 活動用API
export const RSVCreatePost = RSVCreate; // 應試碼
// export const PopularJobNoGet =  PopularJobNo; // 熱門打工 未登入使用

export const ipGet = ip;
export const errorPost = error;

