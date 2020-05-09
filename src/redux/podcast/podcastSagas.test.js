import { runSaga } from 'redux-saga'

import { listenNotesApi } from '../../axios'
import createSagaFakeStore from '../../utils/createSagaFakeStore'
import {
    fetchPodcastAsync,
    fetchRecommendationsAsync,
    fetchMoreEpisodesAsync,
} from './podcastSagas'
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

const podcastId = '123'
const data = 'DATA'
const error = 'ERROR'

describe('fetchPodcastAsync', () => {
    test('should fetch podcast', async () => {
        listenNotesApi.get = jest.fn(() => Promise.resolve({ data }))

        const { fakeStore, dispatchedActions } = createSagaFakeStore({})

        await runSaga(fakeStore, fetchPodcastAsync, podcastId).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([fetchPodcastStart(), fetchPodcastSuccess(data)])
    })
    test('should handle error when fetching podcast', async () => {
        listenNotesApi.get = jest.fn(() => Promise.reject(error))

        const { fakeStore, dispatchedActions } = createSagaFakeStore({})

        await runSaga(fakeStore, fetchPodcastAsync, podcastId).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([fetchPodcastStart(), fetchPodcastFailure(error)])
    })
})

describe('fetchRecommendationsAsync', () => {
    test('should fetch recommendations', async () => {
        listenNotesApi.get = jest.fn(() => Promise.resolve({ data: { recommendations: data } }))

        const { fakeStore, dispatchedActions } = createSagaFakeStore({})

        await runSaga(fakeStore, fetchRecommendationsAsync, podcastId).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([
            fetchRecommendationsStart(),
            fetchRecommendationsSuccess(data),
        ])
    })
    test('should handle error when fetching recommendations', async () => {
        listenNotesApi.get = jest.fn(() => Promise.reject(error))

        const { fakeStore, dispatchedActions } = createSagaFakeStore({})

        await runSaga(fakeStore, fetchRecommendationsAsync, podcastId).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([
            fetchRecommendationsStart(),
            fetchRecommendationsFailure(error),
        ])
    })
})

describe('fetchMoreEpisodesAsync', () => {
    const fakeState = {
        podcast: {
            podcast: {
                id: podcastId,
                next_episode_pub_date: 'DATA',
            },
        },
    }

    test('should fetch more episodes', async () => {
        listenNotesApi.get = jest.fn(() => Promise.resolve({ data }))

        const { fakeStore, dispatchedActions } = createSagaFakeStore(fakeState)

        await runSaga(fakeStore, fetchMoreEpisodesAsync).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([
            fetchMoreEpisodesStart(),
            fetchMoreEpisodesSuccess(data),
        ])
    })
    test('should handle error when fetching episodes', async () => {
        listenNotesApi.get = jest.fn(() => Promise.reject(error))

        const { fakeStore, dispatchedActions } = createSagaFakeStore(fakeState)

        await runSaga(fakeStore, fetchMoreEpisodesAsync).toPromise()

        expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
        expect(dispatchedActions).toEqual([
            fetchMoreEpisodesStart(),
            fetchMoreEpisodesFailure(error),
        ])
    })
})
