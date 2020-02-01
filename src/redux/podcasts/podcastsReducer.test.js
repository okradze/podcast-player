import { startFetchPodcasts, addPodcasts, nextPage } from './podcastsActions'
import podcastsReducer from './podcastsReducer'

const initialState = {
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
    podcasts: [],
}

describe('podcastsReducer', () => {
    it('should return initial state', () => {
        expect(podcastsReducer(undefined, {})).toEqual(initialState)
    })
    it('should set isFetching to true when starting fetching podcasts', () => {
        expect(
            podcastsReducer(initialState, startFetchPodcasts()).isFetching,
        ).toBe(true)
    })
    it('should set isFetching to false and podcasts to payload when fetching done', () => {
        const mockLists = { has_next: true, page_number: 2, podcasts: [{}] }

        expect(
            podcastsReducer(
                { ...initialState, podcasts: [{}] },
                addPodcasts(mockLists),
            ),
        ).toEqual({
            ...initialState,
            isFetching: false,
            has_next: mockLists.has_next,
            lastFetchedPage: mockLists.page_number,
            podcasts: [{}, ...mockLists.podcasts],
        })
    })

    it('should increase page number', () => {
        expect(podcastsReducer(initialState, nextPage()).page).toBe(
            initialState.page + 1,
        )
    })
})
