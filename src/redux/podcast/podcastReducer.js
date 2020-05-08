import PodcastTypes from './podcastTypes'

const initialState = {
    podcast: null,
    recommendations: null,
    isPodcastFetching: false,
    areRecommendationsFetching: false,
    areEpisodesFetching: false,
    error: null,
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case PodcastTypes.FETCH_PODCAST_START:
            return {
                ...state,
                isPodcastFetching: true,
            }
        case PodcastTypes.FETCH_PODCAST_SUCCESS:
            return {
                ...state,
                isPodcastFetching: false,
                podcast: action.payload,
                error: null,
            }

        case PodcastTypes.FETCH_RECOMMENDATIONS_START:
            return { ...state, areRecommendationsFetching: true }
        case PodcastTypes.FETCH_RECOMMENDATIONS_SUCCESS:
            return {
                ...state,
                areRecommendationsFetching: false,
                recommendations: action.payload,
            }

        case PodcastTypes.FETCH_MORE_EPISODES_START:
            return { ...state, areEpisodesFetching: true }
        case PodcastTypes.FETCH_MORE_EPISODES_SUCCESS:
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

        case PodcastTypes.FETCH_PODCAST_FAILURE:
        case PodcastTypes.FETCH_RECOMMENDATIONS_FAILURE:
        case PodcastTypes.FETCH_MORE_EPISODES_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export default podcastReducer
