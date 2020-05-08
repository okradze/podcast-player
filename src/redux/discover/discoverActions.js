import DiscoverTypes from './discoverTypes'

export const nextPage = () => ({
    type: DiscoverTypes.NEXT_PAGE,
})

export const fetchPodcastLists = () => ({
    type: DiscoverTypes.FETCH_PODCAST_LISTS,
})

export const fetchPodcastListsStart = () => ({
    type: DiscoverTypes.FETCH_PODCAST_LISTS_START,
})

export const fetchPodcastListsSuccess = lists => ({
    type: DiscoverTypes.FETCH_PODCAST_LISTS_SUCCESS,
    payload: lists,
})

export const fetchPodcastListsFailure = error => ({
    type: DiscoverTypes.FETCH_PODCAST_LISTS_FAILURE,
    payload: error,
})
