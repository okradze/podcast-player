import DiscoverTypes from './discoverTypes'

export const initialState = {
    curated_lists: [],
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
    error: null,
}

const discoverReducer = (state = initialState, action) => {
    switch (action.type) {
        case DiscoverTypes.FETCH_PODCAST_LISTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case DiscoverTypes.FETCH_PODCAST_LISTS_SUCCESS:
            const { has_next, page_number, curated_lists } = action.payload

            return {
                ...state,
                isFetching: false,
                has_next,
                lastFetchedPage: page_number,
                curated_lists: [...state.curated_lists, ...curated_lists],
                error: null,
            }
        case DiscoverTypes.FETCH_PODCAST_LISTS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case DiscoverTypes.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            }
        default:
            return state
    }
}

export default discoverReducer
