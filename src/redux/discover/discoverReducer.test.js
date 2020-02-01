import { startFetchLists, addLists, nextPage } from './discoverActions'
import discoverReducer from './discoverReducer'

const initialState = {
    curated_lists: [],
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
}

describe('discoverReducer', () => {
    it('should return initial state', () => {
        expect(discoverReducer(undefined, {})).toEqual(initialState)
    })

    it('should set isFetching to true when starting fetching lists', () => {
        expect(
            discoverReducer(initialState, startFetchLists()).isFetching,
        ).toBe(true)
    })

    it('should set isFetching to false and curated lists to payload when fetching done', () => {
        const mockLists = {
            has_next: true,
            page_number: 2,
            curated_lists: [{}],
        }

        expect(
            discoverReducer(
                { ...initialState, curated_lists: [{}] },
                addLists(mockLists),
            ),
        ).toEqual({
            ...initialState,
            has_next: mockLists.has_next,
            curated_lists: [{}, ...mockLists.curated_lists],
            lastFetchedPage: mockLists.page_number,
            isFetching: false,
        })
    })

    it('should increase page number', () => {
        expect(discoverReducer(initialState, nextPage()).page).toBe(
            initialState.page + 1,
        )
    })
})
