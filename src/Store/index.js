import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../Slices/RepoSlice';
import repoSaga from '../ReduxSaga/RepoSaga';
import commitSaga from '../ReduxSaga/CommitsSaga';
import commitsReducer from '../Slices/CommitsSlice';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        repos: reposReducer,
        commits: commitsReducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(saga)
});
saga.run(repoSaga, commitSaga);


export default store;