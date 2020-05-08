import { all, call, takeLatest, put, select } from 'redux-saga/effects'
import PodcastTypes from './podcastTypes'
import {
    fetchPodcastStart,
    fetchPodcastSuccess,
    fetchPodcastFailure,
    fetchRecommendationsStart,
    fetchRecommendationsSuccess,
    fetchRecommendationsFailure,
    fetchMoreEpisodesStart,
    fetchMoreEpisodesSuccess,
    fetchMoreEpisodesFailure,
} from './podcastActions'
import { listenNotesApi } from '../../axios'
import { podcast } from './podcastSelectors'

export function* fetchPodcastAsync({ payload: podcastId }) {
    try {
        yield put(fetchPodcastStart())

        const { data } = yield listenNotesApi.get(`/podcasts/${podcastId}`)

        yield put(fetchPodcastSuccess(data))
    } catch (error) {
        yield put(fetchPodcastFailure(error))
    }
}

export function* fetchRecommendationsAsync({ payload: podcastId }) {
    try {
        yield put(fetchRecommendationsStart())

        const { data } = yield listenNotesApi.get(
            `/podcasts/${podcastId}/recommendations`,
        )

        yield put(fetchRecommendationsSuccess(data.recommendations))
    } catch (error) {
        yield put(fetchRecommendationsFailure(error))
    }
}

export function* fetchMoreEpisodesAsync() {
    try {
        yield put(fetchMoreEpisodesStart())

        const {
            podcast: { id, next_episode_pub_date },
        } = yield select(podcast)

        const { data } = yield listenNotesApi.get(
            `/podcasts/${id}?next_episode_pub_date=${next_episode_pub_date}`,
        )
        yield put(fetchMoreEpisodesSuccess(data))
    } catch (error) {
        yield put(fetchMoreEpisodesFailure(error))
    }
}

export function* onFetchPodcast() {
    yield takeLatest(PodcastTypes.FETCH_PODCAST, fetchPodcastAsync)
}

export function* onFetchRecommendations() {
    yield takeLatest(
        PodcastTypes.FETCH_RECOMMENDATIONS,
        fetchRecommendationsAsync,
    )
}

export function* onFetchMoreEpisodes() {
    yield takeLatest(PodcastTypes.FETCH_MORE_EPISODES, fetchMoreEpisodesAsync)
}

export function* podcastSagas() {
    yield all([
        call(onFetchPodcast),
        call(onFetchRecommendations),
        call(onFetchMoreEpisodes),
    ])
}
