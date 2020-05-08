import {
    all,
    call,
    takeLatest,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects'

import {
    fetchPodcastListsStart,
    fetchPodcastListsSuccess,
    fetchPodcastListsFailure,
} from './discoverActions'
import DiscoverTypes from './discoverTypes'
import { discover } from './discoverSelectors'
import { listenNotesApi } from '../../axios'

export function* fetchPodcastListsAsync() {
    try {
        const { page, lastFetchedPage } = yield select(discover)

        if (page > lastFetchedPage) {
            yield put(fetchPodcastListsStart())

            const { data } = yield listenNotesApi.get(
                `curated_podcasts?page=${page}`,
            )

            yield put(fetchPodcastListsSuccess(data))
        }
    } catch (error) {
        yield put(fetchPodcastListsFailure(error))
    }
}

export function* onFetchPodcastLists() {
    yield takeLatest(DiscoverTypes.FETCH_PODCAST_LISTS, fetchPodcastListsAsync)
}

export function* onNextPage() {
    yield takeEvery(DiscoverTypes.NEXT_PAGE, fetchPodcastListsAsync)
}

export function* discoverSagas() {
    yield all([call(onFetchPodcastLists), call(onNextPage)])
}
