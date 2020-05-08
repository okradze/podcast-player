import PodcastsTypes from './podcastsTypes'

export const nextPage = () => ({
    type: PodcastsTypes.NEXT_PAGE,
})

export const fetchPodcasts = () => ({
    type: PodcastsTypes.FETCH_PODCASTS,
})

export const fetchPodcastsStart = () => ({
    type: PodcastsTypes.FETCH_PODCASTS_START,
})

export const fetchPodcastsSuccess = podcasts => ({
    type: PodcastsTypes.FETCH_PODCASTS_SUCCESS,
    payload: podcasts,
})

export const fetchPodcastsFailure = error => ({
    type: PodcastsTypes.FETCH_PODCASTS_SUCCESS,
    payload: error,
})
