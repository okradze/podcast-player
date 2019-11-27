import { ADD_PODCASTS, NEXT_PAGE, START_FETCH_PODCASTS } from './podcastsTypes'

const initialState = {
    isFetching: false,
    page: 1,
    podcasts: [],
}

const podcastsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_PODCASTS:
            return {
                ...state,
                isFetching: true,
            }
        case ADD_PODCASTS:
            const { has_next, podcasts } = action.payload

            return {
                ...state,
                isFetching: false,
                has_next,
                podcasts: [...state.podcasts, ...podcasts],
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
