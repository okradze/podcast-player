import PodcastTypes from './podcastsTypes'
import {
    nextPage,
    fetchPodcasts,
    fetchPodcastsStart,
    fetchPodcastsSuccess,
    fetchPodcastsFailure,
} from './podcastsActions'

describe('fetchPodcasts', () => {
    it('should create fetchPodcasts action', () => {
        const action = fetchPodcasts()
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS)
    })

    it('should create fetchPodcastsStart action', () => {
        const action = fetchPodcastsStart()
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_START)
    })

    it('should create fetchPodcastsSuccess action', () => {
        const podcasts = 'data'
        const action = fetchPodcastsSuccess(podcasts)
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_SUCCESS)
        expect(action.payload).toEqual(podcasts)
    })

    it('should create fetchPodcastsFailure action', () => {
        const error = 'error'
        const action = fetchPodcastsFailure(error)
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCASTS_FAILURE)
        expect(action.payload).toEqual(error)
    })
})

it('should create nextPage action', () => {
    const action = nextPage()
    expect(action.type).toEqual(PodcastTypes.NEXT_PAGE)
})
