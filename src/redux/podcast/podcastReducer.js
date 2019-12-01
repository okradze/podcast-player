import {
    START_FETCH_PODCAST,
    START_FETCH_MORE_EPISODES,
    START_FETCH_RECOMMENDATIONS,
    SET_RECOMMENDATIONS,
    SET_PODCAST,
    SET_MORE_EPISODES,
} from './podcastTypes'

const initialState = {
    podcast: null,
    recommendations: null,
    isPodcastFetching: false,
    areRecommendationsFetching: false,
    areEpisodesFetching: false,
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCH_PODCAST:
            return {
                ...state,
                isPodcastFetching: true,
            }

        case START_FETCH_RECOMMENDATIONS:
            return { ...state, areRecommendationsFetching: true }

        case START_FETCH_MORE_EPISODES:
            return { ...state, areEpisodesFetching: true }

        case SET_PODCAST:
            return {
                ...state,
                isPodcastFetching: false,
                podcast: action.payload,
            }

        case SET_MORE_EPISODES:
            return {
                ...state,
                areEpisodesFetching: false,
                podcast: {
                    ...action.payload,
                    episodes: [
                        ...state.podcast.episodes,
                        ...action.payload.episodes,
                    ],
                },
            }

        case SET_RECOMMENDATIONS:
            return {
                ...state,
                areRecommendationsFetching: false,
                recommendations: action.payload,
            }
        default:
            return state
    }
}

export default podcastReducer
