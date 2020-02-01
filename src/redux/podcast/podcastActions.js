import {
    START_FETCH_PODCAST,
    START_FETCH_MORE_EPISODES,
    START_FETCH_RECOMMENDATIONS,
    SET_RECOMMENDATIONS,
    SET_PODCAST,
    SET_MORE_EPISODES,
} from './podcastTypes'
import { listenNotesApi } from '../../axios'

export const startFetchPodcast = () => ({
    type: START_FETCH_PODCAST,
})

export const setPodcast = podcast => ({
    type: SET_PODCAST,
    payload: podcast,
})

export const fetchPodcast = podcastId => {
    return async dispatch => {
        dispatch(startFetchPodcast())

        const { data } = await listenNotesApi.get(`/podcasts/${podcastId}`)

        dispatch(setPodcast(data))
    }
}

export const startFetchRecommendations = () => ({
    type: START_FETCH_RECOMMENDATIONS,
})

export const setRecommendations = recommendations => ({
    type: SET_RECOMMENDATIONS,
    payload: recommendations,
})

export const fetchRecommendations = podcastId => {
    return async dispatch => {
        dispatch(startFetchRecommendations())
        const { data } = await listenNotesApi.get(
            `/podcasts/${podcastId}/recommendations`,
        )
        dispatch(setRecommendations(data.recommendations))
    }
}

export const startFetchMoreEpisodes = () => ({
    type: START_FETCH_MORE_EPISODES,
})

export const setMoreEpisodes = podcast => ({
    type: SET_MORE_EPISODES,
    payload: podcast,
})

export const fetchMoreEpisodes = () => {
    return async (dispatch, getState) => {
        const podcastId = getState().podcast.podcast.id
        const paginationInfo = getState().podcast.podcast.next_episode_pub_date
        dispatch(startFetchMoreEpisodes())

        const { data } = await listenNotesApi.get(
            `/podcasts/${podcastId}?next_episode_pub_date=${paginationInfo}`,
        )

        dispatch(setMoreEpisodes(data))
    }
}
