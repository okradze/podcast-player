import PodcastTypes from './podcastTypes'

export const fetchPodcast = podcastId => ({
    type: PodcastTypes.FETCH_PODCAST,
    payload: podcastId,
})

export const fetchPodcastStart = () => ({
    type: PodcastTypes.FETCH_PODCAST_START,
})

export const fetchPodcastSuccess = podcast => ({
    type: PodcastTypes.FETCH_PODCAST_SUCCESS,
    payload: podcast,
})

export const fetchPodcastFailure = error => ({
    type: PodcastTypes.FETCH_PODCAST_FAILURE,
    payload: error,
})

export const fetchRecommendations = podcastId => ({
    type: PodcastTypes.FETCH_RECOMMENDATIONS,
    payload: podcastId,
})

export const fetchRecommendationsStart = () => ({
    type: PodcastTypes.FETCH_RECOMMENDATIONS_START,
})

export const fetchRecommendationsSuccess = recommendations => ({
    type: PodcastTypes.FETCH_RECOMMENDATIONS_SUCCESS,
    payload: recommendations,
})

export const fetchRecommendationsFailure = error => ({
    type: PodcastTypes.FETCH_RECOMMENDATIONS_FAILURE,
    payload: error,
})

export const fetchMoreEpisodes = podcastId => ({
    type: PodcastTypes.FETCH_MORE_EPISODES,
    payload: podcastId,
})

export const fetchMoreEpisodesStart = () => ({
    type: PodcastTypes.FETCH_MORE_EPISODES_START,
})

export const fetchMoreEpisodesSuccess = episodes => ({
    type: PodcastTypes.FETCH_MORE_EPISODES_SUCCESS,
    payload: episodes,
})

export const fetchMoreEpisodesFailure = error => ({
    type: PodcastTypes.FETCH_MORE_EPISODES_FAILURE,
    payload: error,
})
