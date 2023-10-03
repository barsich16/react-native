import {INCREASE, SET_LATEST_NEWS} from "../constants";

export const increaseCount = () => ({
    type: INCREASE,
})

export const setLatestNews = (payload) => ({
    type: SET_LATEST_NEWS,
    payload
})