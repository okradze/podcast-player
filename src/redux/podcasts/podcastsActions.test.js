import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { listenNotesApi } from '../../axios'
import MockAdapter from 'axios-mock-adapter'
import { START_FETCH_PODCASTS, ADD_PODCASTS, NEXT_PAGE } from './podcastsTypes'
import {
    addPodcasts,
    nextPage,
    startFetchPodcasts,
    fetchPodcasts,
} from './podcastsActions'

const initialState = {
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
    podcasts: [],
}

const createMockStore = configureMockStore([thunk])

it('should create startFetchPodcasts action', () => {
    expect(startFetchPodcasts().type).toEqual(START_FETCH_PODCASTS)
})

it('should create addPodcasts action', () => {
    const mockPayload = {}
    const action = addPodcasts(mockPayload)

    expect(action.type).toEqual(ADD_PODCASTS)
    expect(action.payload).toEqual(mockPayload)
})

it('should create nextPage action', () => {
    expect(nextPage().type).toEqual(NEXT_PAGE)
})

describe('fetchPodcasts', () => {
    it('should not fetch when current page to fetch is not greater than last fetched page', () => {
        const store = createMockStore({
            podcasts: { ...initialState, lastFetchedPage: 1 },
        })
        store.dispatch(fetchPodcasts(1)).then(() => {
            const actions = store.getActions()
            expect(actions.length).toBe(0)
        })
    })
    // it('should fetchPodcasts and add data to store', done => {
    //     const store = createMockStore({
    //         podcasts: initialState,
    //     })

    //     const mockData = {
    //         has_next: true,
    //         podcasts: [{}],
    //         page_number: 2,
    //     }

    //     const mock = new MockAdapter(listenNotesApi)
    //     mock.onGet('/best_podcasts', { params: { page: 1 } }).reply(
    //         200,
    //         mockData,
    //     )

    //     store
    //         .dispatch(fetchPodcasts(1))
    //         .then(() => {
    //             const actions = store.getActions()

    //             expect(actions[0]).toEqual({
    //                 type: START_FETCH_PODCASTS,
    //             })
    //             expect(actions[0]).toEqual({
    //                 type: ADD_PODCASTS,
    //                 payload: mockData,
    //             })
    //             done()
    //         })
    //         .catch(err => {
    //             console.log('errorrrjosajflkasjflkasjf', err)
    //         })
    // })
})
