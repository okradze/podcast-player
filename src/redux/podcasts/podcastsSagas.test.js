import { runSaga } from 'redux-saga'

import { fetchPodcastsStart, fetchPodcastsSuccess, fetchPodcastsFailure } from './podcastsActions'
import { listenNotesApi } from '../../axios'
import { fetchPodcastsAsync } from './podcastsSagas'
import createSagaFakeStore from '../../utils/createSagaFakeStore'

test('should fetch podcasts', async () => {
    const data = 'data'
    listenNotesApi.get = jest.fn(() => Promise.resolve({ data }))

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        podcasts: {
            lastFetchedPage: null,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastsAsync).toPromise()

    expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
    expect(dispatchedActions).toEqual([fetchPodcastsStart(), fetchPodcastsSuccess(data)])
})

test('should handle error when fetching podcasts', async () => {
    const error = 'error'
    listenNotesApi.get = jest.fn(() => Promise.reject(error))

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        podcasts: {
            lastFetchedPage: null,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastsAsync).toPromise()

    expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
    expect(dispatchedActions).toEqual([fetchPodcastsStart(), fetchPodcastsFailure(error)])
})

test('should not fetch podcasts if lastFetchedPage and next page is equal', async () => {
    listenNotesApi.get = jest.fn()

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        podcasts: {
            lastFetchedPage: 1,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastsAsync).toPromise()

    expect(listenNotesApi.get).not.toHaveBeenCalled()
    expect(dispatchedActions.length).toEqual(0)
})
