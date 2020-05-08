import {
    all,
    call,
    takeLatest,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects'
import PodcastsTypes from './podcastsTypes'
import {
    fetchPodcastsSuccess,
    fetchPodcastsFailure,
    fetchPodcastsStart,
} from './podcastsActions'
import { podcasts } from './podcastsSelectors'
import { listenNotesApi } from '../../axios'

export function* fetchPodcastsAsync() {
    try {
        const { page, lastFetchedPage } = yield select(podcasts)

        if (page > lastFetchedPage) {
            yield put(fetchPodcastsStart())

            const { data } = yield listenNotesApi.get(
                `/best_podcasts?page=${page}`,
            )
            yield put(fetchPodcastsSuccess(data))
        }
    } catch (error) {
        yield put(fetchPodcastsFailure(error))
    }
}

export function* onFetchPodcasts() {
    yield takeLatest(PodcastsTypes.FETCH_PODCASTS, fetchPodcastsAsync)
}

export function* onNextPage() {
    yield takeEvery(PodcastsTypes.NEXT_PAGE, fetchPodcastsAsync)
}

export function* podcastsSagas() {
    yield all([call(onFetchPodcasts), call(onNextPage)])
}
