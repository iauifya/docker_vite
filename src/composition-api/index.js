import { jobGetFN, corpGetFN, RSVCreatePostFn } from "./useApi.js";
import { useLoginUrl, useLoginMemberCertification } from "./useFn.js";

// api
export const getJob = jobGetFN;
export const getCorp = corpGetFN;
export const postRSVCreate = RSVCreatePostFn;


// fn
export const loginUrlFn = useLoginUrl;
export const loginCertificationFn = useLoginMemberCertification;
