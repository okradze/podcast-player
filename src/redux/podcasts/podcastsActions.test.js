import PodcastTypes from './podcastsTypes'
import {
    nextPage,
    fetchPodcasts,
    fetchPodcastsStart,
    fetchPodcastsSuccess,
    fetchPodcastsFailure,
} from './podcastsActions'

describe('fetchPodcasts', () => {
    test('fetchPodcasts action', () => {
        const action = fetchPodcasts()
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS)
    })

    test('fetchPodcastsStart action', () => {
        const action = fetchPodcastsStart()
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_START)
    })

    test('fetchPodcastsSuccess action', () => {
        const podcasts = 'data'
        const action = fetchPodcastsSuccess(podcasts)
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_SUCCESS)
        expect(action.payload).toEqual(podcasts)
    })

    test('fetchPodcastsFailure action', () => {
        const error = 'error'
        const action = fetchPodcastsFailure(error)
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_FAILURE)
        expect(action.payload).toEqual(error)
    })
})

test('nextPage action', () => {
    const action = nextPage()
    expect(action.type).toEqual(PodcastTypes.NEXT_PAGE)
})
