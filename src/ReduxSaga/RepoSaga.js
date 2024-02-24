import { call, put, takeEvery } from "redux-saga/effects";
import { getRepoSuccess } from "../Slices/RepoSlice";


// worker saga
function* workGetRepoFetch(action) {
    const { page } = action.payload;
    const response = yield call(() => fetch(`https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${page}`));
    const data = yield response.json();
    // console.log(data);
    const reposData = data.items;
    yield put(getRepoSuccess(reposData));
};

// watcher saga
function* repoSaga() {
    yield takeEvery('repos/getRepoFetch', workGetRepoFetch)
}

export default repoSaga;
