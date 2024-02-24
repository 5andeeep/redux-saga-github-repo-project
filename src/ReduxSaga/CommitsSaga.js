import { call, put, takeEvery } from 'redux-saga/effects'
import { getCommitsSuccess } from '../Slices/CommitsSlice'

// worker function
function* workCommitsFetch(action) {
    const owner = action.owner;
    const name = action.name;
    const response = yield call(() => fetch(`https://api.github.com/repos/${owner}/${name}/stats/commit_activity`));
    const data = yield response.json();
    // console.log(data);
    yield put(getCommitsSuccess(data));
}

// watcher function
function* commitSaga() {
    yield takeEvery('commits/getCommitFetch', workCommitsFetch);
};

export default commitSaga;

// 'https://api.github.com/repos/${owner}/${name}/stats/commit_activity'

// `https://api.github.com/repos/${owner}/${name}/stats/commit_activity`