import {INCREASE} from "../constants";
import {takeEvery, put, call} from 'redux-saga/effects'
import {getLatestNews} from "../api";
import {setLatestNews} from "../actions/actionCreator";


export function* handleLatestNews() {
    const {hits} = yield call(getLatestNews);
    console.log(hits);
    yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
    yield takeEvery(INCREASE, handleLatestNews);
}

export default function* rootSaga() {
    yield watchClickSaga();
}