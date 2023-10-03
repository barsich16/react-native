import {INCREASE, SET_LATEST_NEWS} from '../constants'

const initialState = {
    count: 0,
    latestNews: []
}

const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE: return {...state, count: state.count + 1};
        case SET_LATEST_NEWS: return {...state, latestNews: action.payload};
        default: return state;
    }
    return state;
}

export default counter;