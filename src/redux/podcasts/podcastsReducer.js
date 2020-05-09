import PodcastsTypes from './podcastsTypes'

export const initialState = {
    isFetching: false,
    page: 1,
    lastFetchedPage: null,
    podcasts: [],
    error: null,
}

const podcastsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PodcastsTypes.FETCH_PODCASTS_START:
            return {
                ...state,
                isFetching: true,
            }
        case PodcastsTypes.FETCH_PODCASTS_SUCCESS:
            const { has_next, page_number, podcasts } = action.payload

            return {
                ...state,
                isFetching: false,
                has_next,
                lastFetchedPage: page_number,
                podcasts: [...state.podcasts, ...podcasts],
                error: null,
            }
        case PodcastsTypes.FETCH_PODCASTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case PodcastsTypes.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            }
        default:
            return state
    }
}

export default podcastsReducer
