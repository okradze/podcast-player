import {
    nextPage,
    fetchPodcastsStart,
    fetchPodcastsSuccess,
    fetchPodcastsFailure,
} from './podcastsActions'
import podcastsReducer, { initialState } from './podcastsReducer'

describe('podcastsReducer', () => {
    test('return initial state', () => {
        const state = podcastsReducer(undefined, {})
        expect(state).toEqual(initialState)
    })
    test('fetchPodcastsStart', () => {
        const state = podcastsReducer(initialState, fetchPodcastsStart())
        expect(state.isFetching).toEqual(true)
    })
    test('fetchPodcastsSuccess', () => {
        const firstFetchedPodcasts = [1, 2, 3]
        const secondFetchedPodcasts = [4, 5, 6]

        const mockLists = {
            has_next: true,
            page_number: 2,
            podcasts: secondFetchedPodcasts,
        }
        const state = podcastsReducer(
            { ...initialState, podcasts: firstFetchedPodcasts },
            fetchPodcastsSuccess(mockLists),
        )

        expect(state).toEqual({
            ...initialState,
            isFetching: false,
            has_next: mockLists.has_next,
            lastFetchedPage: mockLists.page_number,
            podcasts: [...firstFetchedPodcasts, ...secondFetchedPodcasts],
        })
    })

    test('fetchPodcastsFailure', () => {
        const error = 'error'
        const state = podcastsReducer(initialState, fetchPodcastsFailure(error))
        expect(state.error).toEqual(error)
    })

    test('increase page number', () => {
        const state = podcastsReducer(initialState, nextPage())
        expect(state.page).toEqual(initialState.page + 1)
    })
})
