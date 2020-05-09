import { runSaga } from 'redux-saga'
import {
    fetchPodcastListsStart,
    fetchPodcastListsSuccess,
    fetchPodcastListsFailure,
} from './discoverActions'
import { listenNotesApi } from '../../axios'
import { fetchPodcastListsAsync } from './discoverSagas'
import createSagaFakeStore from '../../utils/createSagaFakeStore'

test('should fetch podcast lists', async () => {
    const data = 'data'
    listenNotesApi.get = jest.fn(() => Promise.resolve({ data }))

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        discover: {
            lastFetchedPage: null,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastListsAsync).toPromise()

    expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
    expect(dispatchedActions).toEqual([fetchPodcastListsStart(), fetchPodcastListsSuccess(data)])
})

test('should handle error when fetching podcast lists', async () => {
    const error = 'error'
    listenNotesApi.get = jest.fn(() => Promise.reject(error))

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        discover: {
            lastFetchedPage: null,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastListsAsync).toPromise()

    expect(listenNotesApi.get).toHaveBeenCalledTimes(1)
    expect(dispatchedActions).toEqual([fetchPodcastListsStart(), fetchPodcastListsFailure(error)])
})

test('should not fetch podcast lists if lastFetchedPage and next page is equal', async () => {
    listenNotesApi.get = jest.fn()

    const { fakeStore, dispatchedActions } = createSagaFakeStore({
        discover: {
            lastFetchedPage: 1,
            page: 1,
        },
    })

    await runSaga(fakeStore, fetchPodcastListsAsync).toPromise()

    expect(listenNotesApi.get).not.toHaveBeenCalled()
    expect(dispatchedActions.length).toEqual(0)
})
