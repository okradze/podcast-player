import {
    nextPage,
    fetchPodcastListsStart,
    fetchPodcastListsSuccess,
    fetchPodcastListsFailure,
} from './discoverActions'
import discoverReducer, { initialState } from './discoverReducer'

describe('discoverReducer', () => {
    test('return initial state', () => {
        const state = discoverReducer(undefined, {})
        expect(state).toEqual(initialState)
    })
    test('fetchPodcastListsStart', () => {
        const state = discoverReducer(initialState, fetchPodcastListsStart())
        expect(state.isFetching).toEqual(true)
    })
    test('fetchPodcastListsSuccess', () => {
        const firstFetchedLists = [1, 2, 3]
        const secondFetchedLists = [4, 5, 6]

        const mockLists = {
            has_next: true,
            page_number: 2,
            curated_lists: secondFetchedLists,
        }

        const state = discoverReducer(
            { ...initialState, curated_lists: firstFetchedLists },
            fetchPodcastListsSuccess(mockLists),
        )

        expect(state).toEqual({
            ...initialState,
            isFetching: false,
            has_next: mockLists.has_next,
            lastFetchedPage: mockLists.page_number,
            curated_lists: [...firstFetchedLists, ...secondFetchedLists],
        })
    })

    test('fetchPodcastListsFailure', () => {
        const error = 'error'
        const state = discoverReducer(
            initialState,
            fetchPodcastListsFailure(error),
        )
        expect(state.error).toEqual(error)
    })

    test('increase page number', () => {
        const state = discoverReducer(initialState, nextPage())
        expect(state.page).toEqual(initialState.page + 1)
    })
})
