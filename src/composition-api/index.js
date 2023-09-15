import { jobGetFN, corpGetFN, RSVCreatePostFn, AllGetFN  } from "./useApi.js";
import { useLoginUrl, useLoginMemberCertification } from "./useFn.js";

// api
export const getJob = jobGetFN;
export const getCorp = corpGetFN;
export const postRSVCreate = RSVCreatePostFn;
export const getAll = AllGetFN;

// fn
export const loginUrlFn = useLoginUrl;
export const loginCertificationFn = useLoginMemberCertification;
