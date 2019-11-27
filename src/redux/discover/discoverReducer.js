import { START_FETCH_LISTS, ADD_LISTS, NEXT_PAGE } from './discoverTypes'

const initialState = {
    curated_lists: [],
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
}

const podcastsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_LISTS:
            return {
                ...state,
                isFetching: true,
            }
        case ADD_LISTS:
            const { has_next, page_number, curated_lists } = action.payload

            return {
                ...state,
                isFetching: false,
                has_next,
                lastFetchedPage: page_number,
                curated_lists: [...state.curated_lists, ...curated_lists],
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            }
        default:
            return state
    }
}

export default podcastsReducer
